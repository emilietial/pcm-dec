import * as fs from 'fs';
import * as path from 'path';

// Récupération des arguments : [0] node, [1] script, [2] input, [3] output
const inputPath = process.argv[2];
const outputPath = process.argv[3];

const PERSONALITIES = [
  'ANALYSEUR', 'EMPATHIQUE', 'PERSÉVÉRANT',
  'ENERGISEUR', 'PROMOTEUR', 'IMAGINEUR'
];

if (!inputPath || !outputPath) {
  console.error('❌ Usage: ts-node convert-csv.ts <input_csv_path> <output_ts_path>');
  console.error('Exemple: ts-node convert-csv.ts ./questions.csv ./src/app/data/questions.ts');
  process.exit(1);
}

function convert() {
  try {
    const csvContent = fs.readFileSync(path.resolve(inputPath), 'utf-8');
    const lines = csvContent.split('\n');

    // On extrait le nom de la constante du nom du fichier de sortie (ex: pcm-data-pro -> PCM_DATA_PRO)
    const fileName = path.basename(outputPath, '.ts').toUpperCase().replace(/-/g, '_');

    let tsOutput = `import { Personality, PcmQuestion } from '../models/pcm.model';\n\n`;
    tsOutput += `export const PCM_OFFICIAL_DATA: PcmQuestion[] = [\n`;

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const [id, question, ...answers] = line.split(';');

      if (!id || !question || answers.length < 6) {
        console.warn(`⚠️ Ligne ${i+1} ignorée : format incorrect.`);
        continue;
      }

      tsOutput += `  {\n`;
      tsOutput += `    id: '${id}',\n`;
      tsOutput += `    question: "${question.replace(/"/g, '\\"')}",\n`;
      tsOutput += `    answers: [\n`;

      PERSONALITIES.forEach((pType, index) => {
        const label = answers[index].replace(/"/g, '\\"');
        const ansId = `${id}-${pType.toLowerCase().substring(0, 4)}`;
        tsOutput += `      { id: '${ansId}', type: Personality.${pType}, label: "${label}" },\n`;
      });

      tsOutput = tsOutput.slice(0, -2) + `\n    ]\n  },\n`;
    }

    tsOutput = tsOutput.slice(0, -2) + `\n];\n`;

    fs.writeFileSync(path.resolve(outputPath), tsOutput);
    console.log(`✅ Génération réussie !`);
    console.log(`📂 Source : ${inputPath}`);
    console.log(`🚀 Destination : ${outputPath}`);
    console.log(`💎 Constante : ${fileName}`);

  } catch (error: any) {
    console.error(`❌ Erreur fatale :`, error.message);
  }
}

convert();
