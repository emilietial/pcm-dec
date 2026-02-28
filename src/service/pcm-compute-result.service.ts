import { Injectable } from '@angular/core';
import { Personality } from '../models/pcm.model';
import { PcmQuestion, PcmResult } from '../models/pcm.model';

@Injectable({
  providedIn: 'root'
})
export class PcmComputeResultService {

  public calculate(answers: Record<string, number>, questions: PcmQuestion[]): PcmResult {
    const globalScores = this.initScoreMap();
    const phaseScores = this.initScoreMap();

    // 1. Scores bruts
    questions.forEach((q) => {
      q.answers.forEach(ans => {
        const points = answers[ans.id] || 0;
        globalScores[ans.type] += points;
        if (q.id.startsWith('phase')) {
          phaseScores[ans.type] += points;
        }
      });
    });

    // 2. Ordre de l'immeuble (Condo)
    const condoOrder = (Object.keys(globalScores) as Personality[])
      .sort((a, b) => globalScores[b] - globalScores[a]);

    const base = condoOrder[0];
    const phase = (Object.entries(phaseScores) as [Personality, number][])
      .reduce((a, b) => (a[1] > b[1] ? a : b))[0];

    // 3. Pourcentages avec la règle des "Étages Vécus"
    const percentages: Record<Personality, number> = this.initScoreMap();
    const phaseIndex = condoOrder.indexOf(phase);

    console.log('base', base);
    console.log('phase', phase);
    console.log('phaseIndex', phaseIndex);
    console.log('condoOrder', condoOrder);
    console.log('globalScores', globalScores);
    console.log('phaseScores', phaseScores);
    console.log('percentages', percentages);

    condoOrder.forEach((type, index) => {
      if (index <= phaseIndex) {
        // Étages vécus (Base incluse) -> 100%
        percentages[type] = 100;
      } else {
        // Étages supérieurs -> Score réel relatif
        // On calcule par rapport au maximum possible (50 points pour 10 questions)
        const rawScore = globalScores[type];
        percentages[type] = Math.round((rawScore / globalScores[base]) * 100);
      }
    });

    return { base, phase, scores: globalScores, percentages, livedPhases: condoOrder.slice(1, phaseIndex) };
  }

  private initScoreMap(): Record<Personality, number> {
    return {
      [Personality.ANALYSEUR]: 0, [Personality.EMPATHIQUE]: 0,
      [Personality.PERSÉVÉRANT]: 0, [Personality.ENERGISEUR]: 0,
      [Personality.PROMOTEUR]: 0, [Personality.IMAGINEUR]: 0
    };
  }

  private getHighestPersonality(map: Record<Personality, number>): Personality {
    return Object.entries(map).reduce((a, b) => (a[1] > b[1] ? a : b))[0] as Personality;
  }
}
