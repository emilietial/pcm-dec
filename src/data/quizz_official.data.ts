import { Personality, PcmQuestion } from '../models/pcm.model';

export const QUIZZ_OFFICIAL.DATA: PcmQuestion[] = [
  {
    id: 'base1',
    question: "Ce que j'apprécie le plus chez moi, c'est ma capacité à :",
    answers: [
      { id: 'base1-anal', type: Personality.ANALYSEUR, label: "Analyser les faits et organiser l'information logiquement" },
      { id: 'base1-empa', type: Personality.EMPATHIQUE, label: "Être à l'écoute des autres et faire preuve de bienveillance" },
      { id: 'base1-pers', type: Personality.PERSÉVÉRANT, label: "Agir selon mes convictions et mes principes moraux" },
      { id: 'base1-rebe', type: Personality.ENERGISEUR, label: "Trouver des solutions créatives avec enthousiasme" },
      { id: 'base1-prom', type: Personality.PROMOTEUR, label: "Saisir les opportunités et m'adapter aux défis" },
      { id: 'base1-imag', type: Personality.IMAGINEUR, label: "Réfléchir calmement et imaginer des perspectives futures" }
    ]
  },
  {
    id: 'base2',
    question: "Dans mes relations, je recherche avant tout des personnes qui :",
    answers: [
      { id: 'base2-anal', type: Personality.ANALYSEUR, label: "Échangent sur des sujets concrets et intellectuels" },
      { id: 'base2-empa', type: Personality.EMPATHIQUE, label: "Sont chaleureuses, attentives et authentiques" },
      { id: 'base2-pers', type: Personality.PERSÉVÉRANT, label: "Respectent mes valeurs et mes engagements" },
      { id: 'base2-rebe', type: Personality.ENERGISEUR, label: "Sont spontanées, créatives et aiment s'amuser" },
      { id: 'base2-prom', type: Personality.PROMOTEUR, label: "Recherchent l'action et aiment prendre des risques" },
      { id: 'base2-imag', type: Personality.IMAGINEUR, label: "Respectent mon besoin de calme et de solitude" }
    ]
  },
  {
    id: 'base3',
    question: "Si je devais me décrire en un mot, je dirais que je suis :",
    answers: [
      { id: 'base3-anal', type: Personality.ANALYSEUR, label: "Organisé(e)" },
      { id: 'base3-empa', type: Personality.EMPATHIQUE, label: "Attentionné(e)" },
      { id: 'base3-pers', type: Personality.PERSÉVÉRANT, label: "Loyal(e)" },
      { id: 'base3-rebe', type: Personality.ENERGISEUR, label: "Créatif(ve)" },
      { id: 'base3-prom', type: Personality.PROMOTEUR, label: "Dynamique" },
      { id: 'base3-imag', type: Personality.IMAGINEUR, label: "Réfléchi(e)" }
    ]
  },
  {
    id: 'base4',
    question: "Quand une situation m'agace, j'ai tendance à :",
    answers: [
      { id: 'base4-anal', type: Personality.ANALYSEUR, label: "M'isoler pour ne plus avoir à gérer le problème" },
      { id: 'base4-empa', type: Personality.EMPATHIQUE, label: "Me sentir blessé(e) ou personnellement rejeté(e)" },
      { id: 'base4-pers', type: Personality.PERSÉVÉRANT, label: "Critiquer la position de l'autre car elle s'oppose à la mienne" },
      { id: 'base4-rebe', type: Personality.ENERGISEUR, label: "Manifester mon mécontentement face à l'inefficacité des autres" },
      { id: 'base4-prom', type: Personality.PROMOTEUR, label: "Chercher le rapport de force pour reprendre le dessus" },
      { id: 'base4-imag', type: Personality.IMAGINEUR, label: "Me couper de mes émotions et devenir distant(e)" }
    ]
  },
  {
    id: 'base5',
    question: "Pour moi, une relation idéale repose sur :",
    answers: [
      { id: 'base5-anal', type: Personality.ANALYSEUR, label: "La reconnaissance de mon travail et de mon sérieux" },
      { id: 'base5-empa', type: Personality.EMPATHIQUE, label: "La chaleur humaine et l'attention portée à mon ressenti" },
      { id: 'base5-pers', type: Personality.PERSÉVÉRANT, label: "Le partage de valeurs communes et la confiance mutuelle" },
      { id: 'base5-rebe', type: Personality.ENERGISEUR, label: "La spontanéité et le plaisir de partager des moments fun" },
      { id: 'base5-prom', type: Personality.PROMOTEUR, label: "L'excitation de relever des défis ensemble" },
      { id: 'base5-imag', type: Personality.IMAGINEUR, label: "Le respect de mon espace personnel et de mon rythme" }
    ]
  },
  {
    id: 'base6',
    question: "Face à une difficulté majeure, mon réflexe est de :",
    answers: [
      { id: 'base6-anal', type: Personality.ANALYSEUR, label: "Douter de la compétence de mon entourage" },
      { id: 'base6-empa', type: Personality.EMPATHIQUE, label: "Me sentir délaissé(e) ou pas assez soutenu(e)" },
      { id: 'base6-pers', type: Personality.PERSÉVÉRANT, label: "Camper sur mes positions et mes convictions" },
      { id: 'base6-rebe', type: Personality.ENERGISEUR, label: "Provoquer une réaction pour briser la monotonie" },
      { id: 'base6-prom', type: Personality.PROMOTEUR, label: "Réagir vivement, quitte à être revanchard(e)" },
      { id: 'base6-imag', type: Personality.IMAGINEUR, label: "Prendre de la distance et me retirer intérieurement" }
    ]
  },
  {
    id: 'base7',
    question: "Dans la vie, je privilégie naturellement :",
    answers: [
      { id: 'base7-anal', type: Personality.ANALYSEUR, label: "La logique et les faits" },
      { id: 'base7-empa', type: Personality.EMPATHIQUE, label: "L'humain et les relations" },
      { id: 'base7-pers', type: Personality.PERSÉVÉRANT, label: "Les principes et les valeurs" },
      { id: 'base7-rebe', type: Personality.ENERGISEUR, label: "Le jeu et la créativité" },
      { id: 'base7-prom', type: Personality.PROMOTEUR, label: "L'action et les défis" },
      { id: 'base7-imag', type: Personality.IMAGINEUR, label: "Le calme et la réflexion" }
    ]
  },
  {
    id: 'base8',
    question: "Enfant, ce qui me caractérisait le plus était :",
    answers: [
      { id: 'base8-anal', type: Personality.ANALYSEUR, label: "Mon envie d'apprendre et de comprendre comment les choses fonctionnent" },
      { id: 'base8-empa', type: Personality.EMPATHIQUE, label: "Mon besoin de faire partie d'un groupe et de me sentir aimé(e)" },
      { id: 'base8-pers', type: Personality.PERSÉVÉRANT, label: "Le fait d'avoir des opinions fortes et des convictions déjà marquées" },
      { id: 'base8-rebe', type: Personality.ENERGISEUR, label: "Mon côté joueur, créatif, qui s'ennuyait vite" },
      { id: 'base8-prom', type: Personality.PROMOTEUR, label: "Mon goût pour le risque et l'aventure" },
      { id: 'base8-imag', type: Personality.IMAGINEUR, label: "Mon tempérament calme, solitaire et imaginatif" }
    ]
  },
  {
    id: 'base9',
    question: "Au quotidien, j'utilise surtout :",
    answers: [
      { id: 'base9-anal', type: Personality.ANALYSEUR, label: "Ma capacité à raisonner de manière claire et logique" },
      { id: 'base9-empa', type: Personality.EMPATHIQUE, label: "Ma sensibilité et mon attention aux autres" },
      { id: 'base9-pers', type: Personality.PERSÉVÉRANT, label: "Mes convictions et mon sens de l'engagement" },
      { id: 'base9-rebe', type: Personality.ENERGISEUR, label: "Mon sens de l'humour et ma spontanéité" },
      { id: 'base9-prom', type: Personality.PROMOTEUR, label: "Mon instinct et ma capacité à aller droit au but" },
      { id: 'base9-imag', type: Personality.IMAGINEUR, label: "Ma faculté d'introspection et de réflexion globale" }
    ]
  },
  {
    id: 'base10',
    question: "Sous pression, quelle réaction vous ressemble le plus ?",
    answers: [
      { id: 'base10-anal', type: Personality.ANALYSEUR, label: "Je veux tout contrôler pour ne faire aucune erreur" },
      { id: 'base10-empa', type: Personality.EMPATHIQUE, label: "Je me sens coupable si je déçois mon entourage" },
      { id: 'base10-pers', type: Personality.PERSÉVÉRANT, label: "Je deviens critique envers ceux qui ne partagent pas mes valeurs" },
      { id: 'base10-rebe', type: Personality.ENERGISEUR, label: "Je rejette la faute sur les règles ou sur les autres" },
      { id: 'base10-prom', type: Personality.PROMOTEUR, label: "Je cherche à m'imposer pour garder le contrôle" },
      { id: 'base10-imag', type: Personality.IMAGINEUR, label: "Je me retire dans ma bulle et je deviens passif(ve)" }
    ]
  },
  {
    id: 'energy11',
    question: "Dans mon travail, j'ai tendance à :",
    answers: [
      { id: 'energy11-anal', type: Personality.ANALYSEUR, label: "Placer mes exigences de qualité très haut" },
      { id: 'energy11-empa', type: Personality.EMPATHIQUE, label: "Chercher l'approbation et le bien-être de tous" },
      { id: 'energy11-pers', type: Personality.PERSÉVÉRANT, label: "Vouloir prouver la valeur de mes principes" },
      { id: 'energy11-rebe', type: Personality.ENERGISEUR, label: "Essayer de bien faire, mais avec difficulté face à la routine" },
      { id: 'energy11-prom', type: Personality.PROMOTEUR, label: "Vouloir diriger et mener l'action" },
      { id: 'energy11-imag', type: Personality.IMAGINEUR, label: "Travailler mieux quand je suis seul(e) et au calme" }
    ]
  },
  {
    id: 'energy12',
    question: "On sait que je tiens à quelqu'un quand :",
    answers: [
      { id: 'energy12-anal', type: Personality.ANALYSEUR, label: "Je l'aide à s'organiser et à structurer ses projets" },
      { id: 'energy12-empa', type: Personality.EMPATHIQUE, label: "Je suis présent(e), doux(ce) et à son écoute" },
      { id: 'energy12-pers', type: Personality.PERSÉVÉRANT, label: "Je suis d'une loyauté absolue envers lui/elle" },
      { id: 'energy12-rebe', type: Personality.ENERGISEUR, label: "On s'amuse ensemble et qu'on partage des moments de jeu" },
      { id: 'energy12-prom', type: Personality.PROMOTEUR, label: "Je le pousse à se dépasser et à réussir avec moi" },
      { id: 'energy12-imag', type: Personality.IMAGINEUR, label: "Je respecte son silence et son besoin d'intimité" }
    ]
  },
  {
    id: 'energy13',
    question: "Mon cadre de vie idéal est :",
    answers: [
      { id: 'energy13-anal', type: Personality.ANALYSEUR, label: "Un espace ordonné propice aux échanges intellectuels" },
      { id: 'energy13-empa', type: Personality.EMPATHIQUE, label: "Un lieu convivial où l'on se sent accueilli et aimé" },
      { id: 'energy13-pers', type: Personality.PERSÉVÉRANT, label: "Un environnement sobre qui reflète mes convictions" },
      { id: 'energy13-rebe', type: Personality.ENERGISEUR, label: "Un endroit animé, original et plein de vie" },
      { id: 'energy13-prom', type: Personality.PROMOTEUR, label: "Un lieu moderne axé sur la performance et le mouvement" },
      { id: 'energy13-imag', type: Personality.IMAGINEUR, label: "Un refuge paisible pour laisser libre cours à mes pensées" }
    ]
  },
  {
    id: 'energy14',
    question: "Mes atouts majeurs sont :",
    answers: [
      { id: 'energy14-anal', type: Personality.ANALYSEUR, label: "Traiter les données complexes pour résoudre des problèmes" },
      { id: 'energy14-empa', type: Personality.EMPATHIQUE, label: "Créer de l'harmonie et prendre soin des autres" },
      { id: 'energy14-pers', type: Personality.PERSÉVÉRANT, label: "Rester intègre et fidèle à mes valeurs sous la pression" },
      { id: 'energy14-rebe', type: Personality.ENERGISEUR, label: "Apporter de la créativité et de la légèreté" },
      { id: 'energy14-prom', type: Personality.PROMOTEUR, label: "Prendre des décisions rapides et faire bouger les choses" },
      { id: 'energy14-imag', type: Personality.IMAGINEUR, label: "Mener à bien des tâches solitaires avec patience" }
    ]
  },
  {
    id: 'energy15',
    question: "Parfois, on me reproche d'être :",
    answers: [
      { id: 'energy15-anal', type: Personality.ANALYSEUR, label: "Trop focalisé(e) sur les détails et le travail" },
      { id: 'energy15-empa', type: Personality.EMPATHIQUE, label: "Trop sensible ou dépendant(e) affectivement" },
      { id: 'energy15-pers', type: Personality.PERSÉVÉRANT, label: "Trop rigide sur mes principes" },
      { id: 'energy15-rebe', type: Personality.ENERGISEUR, label: "Trop désinvolte ou imprévisible" },
      { id: 'energy15-prom', type: Personality.PROMOTEUR, label: "Trop direct(e) ou manipulateur(trice)" },
      { id: 'energy15-imag', type: Personality.IMAGINEUR, label: "Trop distant(e) ou secret(ète)" }
    ]
  },
  {
    id: 'energy16',
    question: "Dans la gestion d'un projet, je préfère être :",
    answers: [
      { id: 'energy16-anal', type: Personality.ANALYSEUR, label: "Celui/celle qui définit la structure et le planning" },
      { id: 'energy16-empa', type: Personality.EMPATHIQUE, label: "Celui/celle qui s'occupe de la cohésion d'équipe" },
      { id: 'energy16-pers', type: Personality.PERSÉVÉRANT, label: "Celui/celle qui veille au respect des standards de qualité" },
      { id: 'energy16-rebe', type: Personality.ENERGISEUR, label: "Celui/celle qui apporte les idées les plus originales" },
      { id: 'energy16-prom', type: Personality.PROMOTEUR, label: "Celui/celle qui gère les urgences et les défis" },
      { id: 'energy16-imag', type: Personality.IMAGINEUR, label: "Celui/celle qui travaille en autonomie sur le fond" }
    ]
  },
  {
    id: 'energy17',
    question: "Pour me sentir motivé(e), j'ai besoin de :",
    answers: [
      { id: 'energy17-anal', type: Personality.ANALYSEUR, label: "Responsabilités claires et d'un cadre structuré" },
      { id: 'energy17-empa', type: Personality.EMPATHIQUE, label: "Sentir que je suis apprécié(e) et entouré(e)" },
      { id: 'energy17-pers', type: Personality.PERSÉVÉRANT, label: "Sentir que ma mission a du sens et des valeurs" },
      { id: 'energy17-rebe', type: Personality.ENERGISEUR, label: "Stimulations constantes et de nouveauté" },
      { id: 'energy17-prom', type: Personality.PROMOTEUR, label: "Sensations fortes et de résultats concrets" },
      { id: 'energy17-imag', type: Personality.IMAGINEUR, label: "Calme absolu et de temps pour réfléchir" }
    ]
  },
  {
    id: 'energy18',
    question: "Le plus difficile pour moi est de gérer :",
    answers: [
      { id: 'energy18-anal', type: Personality.ANALYSEUR, label: "Le manque de logique et l'imprécision" },
      { id: 'energy18-empa', type: Personality.EMPATHIQUE, label: "Le manque d'empathie et la froideur" },
      { id: 'energy18-pers', type: Personality.PERSÉVÉRANT, label: "Le non-respect des règles éthiques" },
      { id: 'energy18-rebe', type: Personality.ENERGISEUR, label: "La routine et l'ennui" },
      { id: 'energy18-prom', type: Personality.PROMOTEUR, label: "La lenteur et l'indécision" },
      { id: 'energy18-imag', type: Personality.IMAGINEUR, label: "Le bruit et l'agitation permanente" }
    ]
  },
  {
    id: 'energy19',
    question: "Ma philosophie de vie pourrait être :",
    answers: [
      { id: 'energy19-anal', type: Personality.ANALYSEUR, label: "Chaque chose à sa place et une place pour chaque chose" },
      { id: 'energy19-empa', type: Personality.EMPATHIQUE, label: "Le bonheur est dans le partage et l'harmonie" },
      { id: 'energy19-pers', type: Personality.PERSÉVÉRANT, label: "Agir selon ses convictions profondes" },
      { id: 'energy19-rebe', type: Personality.ENERGISEUR, label: "Profiter du moment présent avec créativité" },
      { id: 'energy19-prom', type: Personality.PROMOTEUR, label: "Être le meilleur et viser le sommet" },
      { id: 'energy19-imag', type: Personality.IMAGINEUR, label: "Le calme est la plus grande des forces" }
    ]
  },
  {
    id: 'energy20',
    question: "Si j'étais un animal, je serais :",
    answers: [
      { id: 'energy20-anal', type: Personality.ANALYSEUR, label: "Un castor (travailleur et organisé)" },
      { id: 'energy20-empa', type: Personality.EMPATHIQUE, label: "Une maman poule (protecteur et bienveillant)" },
      { id: 'energy20-pers', type: Personality.PERSÉVÉRANT, label: "Un hibou (sage et fidèle à ses principes)" },
      { id: 'energy20-rebe', type: Personality.ENERGISEUR, label: "Un chat (indépendant et joueur)" },
      { id: 'energy20-prom', type: Personality.PROMOTEUR, label: "Un lion (ambitieux et conquérant)" },
      { id: 'energy20-imag', type: Personality.IMAGINEUR, label: "Une tortue (paisible dans sa carapace)" }
    ]
  },
  {
    id: 'phase21',
    question: "S'il ne me restait qu'une seule force, je garderais :",
    answers: [
      { id: 'phase21-anal', type: Personality.ANALYSEUR, label: "Ma clarté d'esprit" },
      { id: 'phase21-empa', type: Personality.EMPATHIQUE, label: "Ma bienveillance" },
      { id: 'phase21-pers', type: Personality.PERSÉVÉRANT, label: "Ma force de conviction" },
      { id: 'phase21-rebe', type: Personality.ENERGISEUR, label: "Ma joie de vivre" },
      { id: 'phase21-prom', type: Personality.PROMOTEUR, label: "Mon audace" },
      { id: 'phase21-imag', type: Personality.IMAGINEUR, label: "Ma sérénité intérieure" }
    ]
  },
  {
    id: 'phase22',
    question: "Mon rêve le plus fou serait de :",
    answers: [
      { id: 'phase22-anal', type: Personality.ANALYSEUR, label: "Maîtriser toutes les connaissances de mon domaine" },
      { id: 'phase22-empa', type: Personality.EMPATHIQUE, label: "Vivre dans un monde où tout le monde s'apprécie" },
      { id: 'phase22-pers', type: Personality.PERSÉVÉRANT, label: "Voir mes valeurs partagées par le plus grand nombre" },
      { id: 'phase22-rebe', type: Personality.ENERGISEUR, label: "Avoir une liberté totale pour créer et m'amuser" },
      { id: 'phase22-prom', type: Personality.PROMOTEUR, label: "Atteindre un succès financier et social immense" },
      { id: 'phase22-imag', type: Personality.IMAGINEUR, label: "Disposer de tout le temps nécessaire pour contempler le monde" }
    ]
  },
  {
    id: 'phase23',
    question: "Une amitié s'arrête pour moi si :",
    answers: [
      { id: 'phase23-anal', type: Personality.ANALYSEUR, label: "Je ne peux plus compter sur le sérieux de l'autre" },
      { id: 'phase23-empa', type: Personality.EMPATHIQUE, label: "Je me sens ignoré(e) ou plus du tout aimé(e)" },
      { id: 'phase23-pers', type: Personality.PERSÉVÉRANT, label: "Je réalise que nos valeurs sont incompatibles" },
      { id: 'phase23-rebe', type: Personality.ENERGISEUR, label: "Je me sens étouffé(e) par des règles trop strictes" },
      { id: 'phase23-prom', type: Personality.PROMOTEUR, label: "Je sens que l'autre freine mon élan ou mes ambitions" },
      { id: 'phase23-imag', type: Personality.IMAGINEUR, label: "Le contact devient trop envahissant et bruyant" }
    ]
  },
  {
    id: 'phase24',
    question: "Dans mes pires moments, je peux :",
    answers: [
      { id: 'phase24-anal', type: Personality.ANALYSEUR, label: "Devenir cassant(e) face à l'incompétence" },
      { id: 'phase24-empa', type: Personality.EMPATHIQUE, label: "Chercher désespérément l'approbation" },
      { id: 'phase24-pers', type: Personality.PERSÉVÉRANT, label: "Donner des leçons de morale aux autres" },
      { id: 'phase24-rebe', type: Personality.ENERGISEUR, label: "Provoquer des disputes pour tester les limites" },
      { id: 'phase24-prom', type: Personality.PROMOTEUR, label: "Monter les gens les uns contre les autres" },
      { id: 'phase24-imag', type: Personality.IMAGINEUR, label: "Me couper totalement du monde extérieur" }
    ]
  },
  {
    id: 'phase25',
    question: "Depuis toujours, je m'intéresse de près à :",
    answers: [
      { id: 'phase25-anal', type: Personality.ANALYSEUR, label: "La résolution d'énigmes et de problèmes complexes" },
      { id: 'phase25-empa', type: Personality.EMPATHIQUE, label: "La psychologie et les relations humaines" },
      { id: 'phase25-pers', type: Personality.PERSÉVÉRANT, label: "La politique, la philosophie ou l'éthique" },
      { id: 'phase25-rebe', type: Personality.ENERGISEUR, label: "Les arts, les jeux ou la culture alternative" },
      { id: 'phase25-prom', type: Personality.PROMOTEUR, label: "La négociation, la finance ou les défis sportifs" },
      { id: 'phase25-imag', type: Personality.IMAGINEUR, label: "La méditation, la lecture ou les voyages solitaires" }
    ]
  },
  {
    id: 'phase26',
    question: "À l'école, j'étais souvent perçu(e) comme :",
    answers: [
      { id: 'phase26-anal', type: Personality.ANALYSEUR, label: "L'élève sérieux(se) et méthodique" },
      { id: 'phase26-empa', type: Personality.EMPATHIQUE, label: "L'élève gentil(le) et serviable" },
      { id: 'phase26-pers', type: Personality.PERSÉVÉRANT, label: "L'élève engagé(e) et plein(e) de principes" },
      { id: 'phase26-rebe', type: Personality.ENERGISEUR, label: "L'élève original(e) et drôle" },
      { id: 'phase26-prom', type: Personality.PROMOTEUR, label: "L'élève dynamique qui prend les devants" },
      { id: 'phase26-imag', type: Personality.IMAGINEUR, label: "L'élève calme et rêveur(se)" }
    ]
  },
  {
    id: 'phase27',
    question: "Pour moi, le secret de la réussite est :",
    answers: [
      { id: 'phase27-anal', type: Personality.ANALYSEUR, label: "La planification, la logique et la persévérance" },
      { id: 'phase27-empa', type: Personality.EMPATHIQUE, label: "L'écoute, l'empathie et la collaboration" },
      { id: 'phase27-pers', type: Personality.PERSÉVÉRANT, label: "L'intégrité, le respect et les valeurs" },
      { id: 'phase27-rebe', type: Personality.ENERGISEUR, label: "La spontanéité, la créativité et le plaisir" },
      { id: 'phase27-prom', type: Personality.PROMOTEUR, label: "L'ambition, l'action et la réactivité" },
      { id: 'phase27-imag', type: Personality.IMAGINEUR, label: "La réflexion, le calme et l'indépendance" }
    ]
  },
  {
    id: 'phase28',
    question: "J'apprécie particulièrement un mentor qui :",
    answers: [
      { id: 'phase28-anal', type: Personality.ANALYSEUR, label: "Répond précisément à mes questions techniques" },
      { id: 'phase28-empa', type: Personality.EMPATHIQUE, label: "Se soucie sincèrement de mon évolution personnelle" },
      { id: 'phase28-pers', type: Personality.PERSÉVÉRANT, label: "Apprécie mes opinions et débat avec respect" },
      { id: 'phase28-rebe', type: Personality.ENERGISEUR, label: "Est inspirant, atypique et dynamique" },
      { id: 'phase28-prom', type: Personality.PROMOTEUR, label: "Me donne carte blanche pour relever des défis" },
      { id: 'phase28-imag', type: Personality.IMAGINEUR, label: "Me laisse de l'espace et du temps pour progresser seul(e)" }
    ]
  },
  {
    id: 'phase29',
    question: "J'ai tendance à faire confiance à un expert qui :",
    answers: [
      { id: 'phase29-anal', type: Personality.ANALYSEUR, label: "Démontre une parfaite maîtrise de son sujet" },
      { id: 'phase29-empa', type: Personality.EMPATHIQUE, label: "Est chaleureux et se préoccupe de ma situation" },
      { id: 'phase29-pers', type: Personality.PERSÉVÉRANT, label: "Affiche une éthique et une intégrité irréprochables" },
      { id: 'phase29-rebe', type: Personality.ENERGISEUR, label: "Rend l'échange vivant et original" },
      { id: 'phase29-prom', type: Personality.PROMOTEUR, label: "Va droit au but et propose des gains rapides" },
      { id: 'phase29-imag', type: Personality.IMAGINEUR, label: "Est discret, posé et propose une vision de long terme" }
    ]
  },
  {
    id: 'phase30',
    question: "Pour conclure, ce test est pour moi :",
    answers: [
      { id: 'phase30-anal', type: Personality.ANALYSEUR, label: "Une source de données utile pour mieux me comprendre" },
      { id: 'phase30-empa', type: Personality.EMPATHIQUE, label: "Un moment d'introspection humaine enrichissant" },
      { id: 'phase30-pers', type: Personality.PERSÉVÉRANT, label: "Une démarche importante pour valider mes engagements" },
      { id: 'phase30-rebe', type: Personality.ENERGISEUR, label: "Une expérience originale et plutôt fun à réaliser" },
      { id: 'phase30-prom', type: Personality.PROMOTEUR, label: "Un outil efficace pour optimiser mes résultats" },
      { id: 'phase30-imag', type: Personality.IMAGINEUR, label: "Une opportunité de réflexion paisible sur moi-même" }
    ]
  }
];
