import { Personality, PcmQuestion } from '../models/pcm.model';

export const QUIZZ_V2_DATA: PcmQuestion[] = [
  {
    id: 'base1',
    question: "Votre bureau est généralement organisé de quelle façon ?",
    answers: [
      { id: 'base1-anal', type: Personality.ANALYSEUR, label: "Structuré et rangé par dossiers." },
      { id: 'base1-empa', type: Personality.EMPATHIQUE, label: "Accueillant avec des photos et plantes." },
      { id: 'base1-pers', type: Personality.PERSÉVÉRANT, label: "Sobre avec des symboles de mes valeurs." },
      { id: 'base1-rebe', type: Personality.REBELLE, label: "Original et un peu désordonné." },
      { id: 'base1-prom', type: Personality.PROMOTEUR, label: "Imposant et très fonctionnel." },
      { id: 'base1-imag', type: Personality.IMAGINEUR, label: "Épuré et isolé du passage." }
    ]
  },
  {
    id: 'base2',
    question: "Lors d'une réunion, votre priorité est :",
    answers: [
      { id: 'base2-anal', type: Personality.ANALYSEUR, label: "L'ordre du jour et les chiffres." },
      { id: 'base2-empa', type: Personality.EMPATHIQUE, label: "La cohésion et l'ambiance du groupe." },
      { id: 'base2-pers', type: Personality.PERSÉVÉRANT, label: "Le respect des engagements." },
      { id: 'base2-rebe', type: Personality.REBELLE, label: "La créativité et les échanges fun." },
      { id: 'base2-prom', type: Personality.PROMOTEUR, label: "L'efficacité et les décisions rapides." },
      { id: 'base2-imag', type: Personality.IMAGINEUR, label: "La réflexion de fond au calme." }
    ]
  },
  {
    id: 'base3',
    question: "Face à un nouveau logiciel comptable, vous :",
    answers: [
      { id: 'base3-anal', type: Personality.ANALYSEUR, label: "Étudiez le manuel méthodiquement." },
      { id: 'base3-empa', type: Personality.EMPATHIQUE, label: "Demandez si l'équipe s'y sent bien." },
      { id: 'base3-pers', type: Personality.PERSÉVÉRANT, label: "Vérifiez la fiabilité des sources." },
      { id: 'base3-rebe', type: Personality.REBELLE, label: "Testez toutes les fonctions avec curiosité." },
      { id: 'base3-prom', type: Personality.PROMOTEUR, label: "Cherchez comment gagner du temps vite." },
      { id: 'base3-imag', type: Personality.IMAGINEUR, label: "Observez comment il s'intègre au système." }
    ]
  },
  {
    id: 'base4',
    question: "Un client est mécontent, votre première réaction :",
    answers: [
      { id: 'base4-anal', type: Personality.ANALYSEUR, label: "Vous cherchez l'erreur logique." },
      { id: 'base4-empa', type: Personality.EMPATHIQUE, label: "Vous vous excusez pour le gêne occasionnée." },
      { id: 'base4-pers', type: Personality.PERSÉVÉRANT, label: "Vous défendez la qualité de votre travail." },
      { id: 'base4-rebe', type: Personality.REBELLE, label: "Vous tentez de détendre l'atmosphère." },
      { id: 'base4-prom', type: Personality.PROMOTEUR, label: "Vous proposez un deal immédiat." },
      { id: 'base4-imag', type: Personality.IMAGINEUR, label: "Vous analysez la situation à distance." }
    ]
  },
  {
    id: 'base5',
    question: "Pour vous, une journée de travail réussie c'est :",
    answers: [
      { id: 'base5-anal', type: Personality.ANALYSEUR, label: "Avoir bouclé toutes les tâches prévues." },
      { id: 'base5-empa', type: Personality.EMPATHIQUE, label: "Avoir eu des échanges humains chaleureux." },
      { id: 'base5-pers', type: Personality.PERSÉVÉRANT, label: "Avoir agi selon mes convictions professionnelles." },
      { id: 'base5-rebe', type: Personality.REBELLE, label: "Avoir relevé des défis stimulants." },
      { id: 'base5-prom', type: Personality.PROMOTEUR, label: "Avoir obtenu un résultat concret et visible." },
      { id: 'base5-imag', type: Personality.IMAGINEUR, label: "Avoir pu réfléchir sereinement à mes dossiers." }
    ]
  },
  {
    id: 'base6',
    question: "Dans un e-mail professionnel, vous privilégiez :",
    answers: [
      { id: 'base6-anal', type: Personality.ANALYSEUR, label: "La précision des faits et des dates." },
      { id: 'base6-empa', type: Personality.EMPATHIQUE, label: "La politesse et les formules de courtoisie." },
      { id: 'base6-pers', type: Personality.PERSÉVÉRANT, label: "Le sérieux et le partage d'opinions." },
      { id: 'base6-rebe', type: Personality.REBELLE, label: "Le style direct et un peu d'humour." },
      { id: 'base6-prom', type: Personality.PROMOTEUR, label: "La brièveté et l'appel à l'action." },
      { id: 'base6-imag', type: Personality.IMAGINEUR, label: "La clarté des concepts évoqués." }
    ]
  },
  {
    id: 'base7',
    question: "Lors d'un déjeuner d'affaires, vous aimez :",
    answers: [
      { id: 'base7-anal', type: Personality.ANALYSEUR, label: "Parler de l'actualité du secteur." },
      { id: 'base7-empa', type: Personality.EMPATHIQUE, label: "Apprendre à connaître votre interlocuteur." },
      { id: 'base7-pers', type: Personality.PERSÉVÉRANT, label: "Échanger sur des valeurs communes." },
      { id: 'base7-rebe', type: Personality.REBELLE, label: "Rire et passer un bon moment spontané." },
      { id: 'base7-prom', type: Personality.PROMOTEUR, label: "Parler d'opportunités et de challenges." },
      { id: 'base7-imag', type: Personality.IMAGINEUR, label: "Écouter et observer discrètement." }
    ]
  },
  {
    id: 'base8',
    question: "Face à une surcharge de travail, vous :",
    answers: [
      { id: 'base8-anal', type: Personality.ANALYSEUR, label: "Établissez une liste de priorités." },
      { id: 'base8-empa', type: Personality.EMPATHIQUE, label: "Demandez du soutien moral à vos collègues." },
      { id: 'base8-pers', type: Personality.PERSÉVÉRANT, label: "Vous rappelez l'importance de votre mission." },
      { id: 'base8-rebe', type: Personality.REBELLE, label: "Réagissez avec une pointe d'ironie." },
      { id: 'base8-prom', type: Personality.PROMOTEUR, label: "Accélérez le rythme pour tout finir." },
      { id: 'base8-imag', type: Personality.IMAGINEUR, label: "Prenez du recul pour ne pas saturer." }
    ]
  },
  {
    id: 'base9',
    question: "Votre entourage pro dit que vous êtes :",
    answers: [
      { id: 'base9-anal', type: Personality.ANALYSEUR, label: "Quelqu'un de très organisé et logique." },
      { id: 'base9-empa', type: Personality.EMPATHIQUE, label: "Quelqu'un de très attentionné et sensible." },
      { id: 'base9-pers', type: Personality.PERSÉVÉRANT, label: "Quelqu'un de très loyal et engagé." },
      { id: 'base9-rebe', type: Personality.REBELLE, label: "Quelqu'un de très créatif et réactif." },
      { id: 'base9-prom', type: Personality.PROMOTEUR, label: "Quelqu'un de très dynamique et direct." },
      { id: 'base9-imag', type: Personality.IMAGINEUR, label: "Quelqu'un de très calme et réfléchi." }
    ]
  },
  {
    id: 'base10',
    question: "Vous préférez travailler dans un espace :",
    answers: [
      { id: 'base10-anal', type: Personality.ANALYSEUR, label: "Calme et parfaitement ordonné." },
      { id: 'base10-empa', type: Personality.EMPATHIQUE, label: "Convivial et ouvert aux autres." },
      { id: 'base10-pers', type: Personality.PERSÉVÉRANT, label: "Professionnel et respectueux des traditions." },
      { id: 'base10-rebe', type: Personality.REBELLE, label: "Animé et plein de vie." },
      { id: 'base10-prom', type: Personality.PROMOTEUR, label: "Moderne et tourné vers l'action." },
      { id: 'base10-imag', type: Personality.IMAGINEUR, label: "Isolé et propice à l'imagination." }
    ]
  },
  {
    id: 'energy11',
    question: "Pour motiver un collaborateur, vous :",
    answers: [
      { id: 'energy11-anal', type: Personality.ANALYSEUR, label: "Lui donnez des objectifs chiffrés." },
      { id: 'energy11-empa', type: Personality.EMPATHIQUE, label: "Le félicitez pour ses qualités humaines." },
      { id: 'energy11-pers', type: Personality.PERSÉVÉRANT, label: "Lui montrez que vous lui faites confiance." },
      { id: 'energy11-rebe', type: Personality.REBELLE, label: "Misez sur le jeu ou l'originalité." },
      { id: 'energy11-prom', type: Personality.PROMOTEUR, label: "Lui proposez un défi ou une prime." },
      { id: 'energy11-imag', type: Personality.IMAGINEUR, label: "Le laissez organiser son temps seul." }
    ]
  },
  {
    id: 'energy12',
    question: "Pendant une pause café, vous avez tendance à :",
    answers: [
      { id: 'energy12-anal', type: Personality.ANALYSEUR, label: "Vérifier vos notifications et vos mails." },
      { id: 'energy12-empa', type: Personality.EMPATHIQUE, label: "Prendre des nouvelles de la famille des autres." },
      { id: 'energy12-pers', type: Personality.PERSÉVÉRANT, label: "Discuter de l'éthique de l'entreprise." },
      { id: 'energy12-rebe', type: Personality.REBELLE, label: "Faire des blagues ou raconter des anecdotes." },
      { id: 'energy12-prom', type: Personality.PROMOTEUR, label: "Parler de vos derniers succès ou projets." },
      { id: 'energy12-imag', type: Personality.IMAGINEUR, label: "Rester un peu en retrait pour souffler." }
    ]
  },
  {
    id: 'energy13',
    question: "Un changement de procédure est annoncé, vous :",
    answers: [
      { id: 'energy13-anal', type: Personality.ANALYSEUR, label: "Demandez un plan de déploiement précis." },
      { id: 'energy13-empa', type: Personality.EMPATHIQUE, label: "Vous inquiétez de l'impact sur l'équipe." },
      { id: 'energy13-pers', type: Personality.PERSÉVÉRANT, label: "Vérifiez si c'est une décision juste." },
      { id: 'energy13-rebe', type: Personality.REBELLE, label: "Vous amusez des complications à venir." },
      { id: 'energy13-prom', type: Personality.PROMOTEUR, label: "Voyez tout de suite l'avantage compétitif." },
      { id: 'energy13-imag', type: Personality.IMAGINEUR, label: "Réfléchissez aux implications futures." }
    ]
  },
  {
    id: 'energy14',
    question: "En période de clôture fiscale, vous :",
    answers: [
      { id: 'energy14-anal', type: Personality.ANALYSEUR, label: "Augmentez votre niveau de précision." },
      { id: 'energy14-empa', type: Personality.EMPATHIQUE, label: "Veillez à ce que personne ne craque." },
      { id: 'energy14-pers', type: Personality.PERSÉVÉRANT, label: "Rappelez à tous le sens de notre métier." },
      { id: 'energy14-rebe', type: Personality.REBELLE, label: "Gardez le moral avec des plaisanteries." },
      { id: 'energy14-prom', type: Personality.PROMOTEUR, label: "Multipliez les actions pour avancer vite." },
      { id: 'energy14-imag', type: Personality.IMAGINEUR, label: "Vous plongez dans vos pensées pour tenir." }
    ]
  },
  {
    id: 'energy15',
    question: "Votre façon préférée de recevoir un feedback :",
    answers: [
      { id: 'energy15-anal', type: Personality.ANALYSEUR, label: "Par un rapport écrit et détaillé." },
      { id: 'energy15-empa', type: Personality.EMPATHIQUE, label: "Par un échange bienveillant en tête-à-tête." },
      { id: 'energy15-pers', type: Personality.PERSÉVÉRANT, label: "Par une reconnaissance de votre expertise." },
      { id: 'energy15-rebe', type: Personality.REBELLE, label: "Par un signe de tête complice et fun." },
      { id: 'energy15-prom', type: Personality.PROMOTEUR, label: "Par une confirmation de vos résultats." },
      { id: 'energy15-imag', type: Personality.IMAGINEUR, label: "Par une note simple me laissant tranquille." }
    ]
  },
  {
    id: 'energy16',
    question: "Face à un conflit entre deux collègues :",
    answers: [
      { id: 'energy16-anal', type: Personality.ANALYSEUR, label: "Vous cherchez les faits objectifs." },
      { id: 'energy16-empa', type: Personality.EMPATHIQUE, label: "Vous tentez de réconcilier les parties." },
      { id: 'energy16-pers', type: Personality.PERSÉVÉRANT, label: "Vous rappelez les règles de conduite." },
      { id: 'energy16-rebe', type: Personality.REBELLE, label: "Vous dédramatisez par une pirouette." },
      { id: 'energy16-prom', type: Personality.PROMOTEUR, label: "Vous tranchez pour que le travail reprenne." },
      { id: 'energy16-imag', type: Personality.IMAGINEUR, label: "Vous restez à l'écart du tumulte." }
    ]
  },
  {
    id: 'energy17',
    question: "Pour préparer une présentation, vous :",
    answers: [
      { id: 'energy17-anal', type: Personality.ANALYSEUR, label: "Préparez des slides avec beaucoup de données." },
      { id: 'energy17-empa', type: Personality.EMPATHIQUE, label: "Pensez au confort visuel de l'auditoire." },
      { id: 'energy17-pers', type: Personality.PERSÉVÉRANT, label: "Insistez sur la crédibilité des sources." },
      { id: 'energy17-rebe', type: Personality.REBELLE, label: "Cherchez une accroche percutante et drôle." },
      { id: 'energy17-prom', type: Personality.PROMOTEUR, label: "Allez droit au but avec des mots forts." },
      { id: 'energy17-imag', type: Personality.IMAGINEUR, label: "Développez une vision globale du sujet." }
    ]
  },
  {
    id: 'energy18',
    question: "Qu'est-ce qui vous fatigue le plus ?",
    answers: [
      { id: 'energy18-anal', type: Personality.ANALYSEUR, label: "Le manque de logique et l'imprécision." },
      { id: 'energy18-empa', type: Personality.EMPATHIQUE, label: "L'impolitesse et la froideur." },
      { id: 'energy18-pers', type: Personality.PERSÉVÉRANT, label: "La trahison et le manque de valeurs." },
      { id: 'energy18-rebe', type: Personality.REBELLE, label: "L'ennui et la routine rigide." },
      { id: 'energy18-prom', type: Personality.PROMOTEUR, label: "L'inaction et la lenteur." },
      { id: 'energy18-imag', type: Personality.IMAGINEUR, label: "Le bruit constant et l'agitation." }
    ]
  },
  {
    id: 'energy19',
    question: "Dans une équipe, vous êtes celui/celle qui :",
    answers: [
      { id: 'energy19-anal', type: Personality.ANALYSEUR, label: "Apporte la structure et la méthode." },
      { id: 'energy19-empa', type: Personality.EMPATHIQUE, label: "Apporte l'harmonie et l'écoute." },
      { id: 'energy19-pers', type: Personality.PERSÉVÉRANT, label: "Apporte la stabilité et les principes." },
      { id: 'energy19-rebe', type: Personality.REBELLE, label: "Apporte l'énergie et les idées neuves." },
      { id: 'energy19-prom', type: Personality.PROMOTEUR, label: "Apporte le mouvement et l'ambition." },
      { id: 'energy19-imag', type: Personality.IMAGINEUR, label: "Apporte la vision et la sérénité." }
    ]
  },
  {
    id: 'energy20',
    question: "Votre réaction face à un succès :",
    answers: [
      { id: 'energy20-anal', type: Personality.ANALYSEUR, label: "Vous vérifiez si les objectifs sont atteints." },
      { id: 'energy20-empa', type: Personality.EMPATHIQUE, label: "Vous partagez votre joie avec tout le monde." },
      { id: 'energy20-pers', type: Personality.PERSÉVÉRANT, label: "Vous appréciez la reconnaissance de vos pairs." },
      { id: 'energy20-rebe', type: Personality.REBELLE, label: "Vous faites une petite fête improvisée." },
      { id: 'energy20-prom', type: Personality.PROMOTEUR, label: "Vous cherchez déjà le prochain défi." },
      { id: 'energy20-imag', type: Personality.IMAGINEUR, label: "Vous savourez ce moment en silence." }
    ]
  },
  {
    id: 'phase21',
    question: "Si vous deviez diriger un cabinet, vous :",
    answers: [
      { id: 'phase21-anal', type: Personality.ANALYSEUR, label: "Mettriez en place des process stricts." },
      { id: 'phase21-empa', type: Personality.EMPATHIQUE, label: "Veilleriez au bien-être de chaque salarié." },
      { id: 'phase21-pers', type: Personality.PERSÉVÉRANT, label: "Privilégieriez l'éthique et la déontologie." },
      { id: 'phase21-rebe', type: Personality.REBELLE, label: "Encourageriez l'innovation et le fun." },
      { id: 'phase21-prom', type: Personality.PROMOTEUR, label: "Viseriez la place de leader sur le marché." },
      { id: 'phase21-imag', type: Personality.IMAGINEUR, label: "Prendriez le temps de définir la stratégie." }
    ]
  },
  {
    id: 'phase22',
    question: "Votre rapport au temps est plutôt :",
    answers: [
      { id: 'phase22-anal', type: Personality.ANALYSEUR, label: "Le temps est une ressource à gérer." },
      { id: 'phase22-empa', type: Personality.EMPATHIQUE, label: "Le temps doit être consacré aux autres." },
      { id: 'phase22-pers', type: Personality.PERSÉVÉRANT, label: "Le temps est précieux pour bien faire." },
      { id: 'phase22-rebe', type: Personality.REBELLE, label: "Le temps est fait pour être vécu intensément." },
      { id: 'phase22-prom', type: Personality.PROMOTEUR, label: "Le temps, c'est de l'argent." },
      { id: 'phase22-imag', type: Personality.IMAGINEUR, label: "Le temps est une notion très relative." }
    ]
  },
  {
    id: 'phase23',
    question: "Pour vous détendre après le travail :",
    answers: [
      { id: 'phase23-anal', type: Personality.ANALYSEUR, label: "Vous lisez un livre technique ou informatif." },
      { id: 'phase23-empa', type: Personality.EMPATHIQUE, label: "Vous passez du temps avec vos proches." },
      { id: 'phase23-pers', type: Personality.PERSÉVÉRANT, label: "Vous vous engagez dans une cause choisie." },
      { id: 'phase23-rebe', type: Personality.REBELLE, label: "Vous sortez avec des amis pour bouger." },
      { id: 'phase23-prom', type: Personality.PROMOTEUR, label: "Vous faites du sport intensif." },
      { id: 'phase23-imag', type: Personality.IMAGINEUR, label: "Vous restez seul pour vous ressourcer." }
    ]
  },
  {
    id: 'phase24',
    question: "Une erreur est découverte dans un bilan :",
    answers: [
      { id: 'phase24-anal', type: Personality.ANALYSEUR, label: "Vous remontez la chaîne pour trouver la cause." },
      { id: 'phase24-empa', type: Personality.EMPATHIQUE, label: "Vous rassurez le collaborateur responsable." },
      { id: 'phase24-pers', type: Personality.PERSÉVÉRANT, label: "Vous évaluez l'impact sur la réputation." },
      { id: 'phase24-rebe', type: Personality.REBELLE, label: "Vous proposez d'en rire avant de réparer." },
      { id: 'phase24-prom', type: Personality.PROMOTEUR, label: "Vous trouvez une solution de secours immédiate." },
      { id: 'phase24-imag', type: Personality.IMAGINEUR, label: "Vous analysez calmement les conséquences." }
    ]
  },
  {
    id: 'phase25',
    question: "Votre moteur principal le matin :",
    answers: [
      { id: 'phase25-anal', type: Personality.ANALYSEUR, label: "Le sentiment du devoir accompli." },
      { id: 'phase25-empa', type: Personality.EMPATHIQUE, label: "Le plaisir de revoir mes collègues." },
      { id: 'phase25-pers', type: Personality.PERSÉVÉRANT, label: "La fierté de mon expertise." },
      { id: 'phase25-rebe', type: Personality.REBELLE, label: "L'envie de passer une journée animée." },
      { id: 'phase25-prom', type: Personality.PROMOTEUR, label: "Le goût de la gagne et des contrats." },
      { id: 'phase25-imag', type: Personality.IMAGINEUR, label: "Le besoin de mener mes réflexions à bien." }
    ]
  },
  {
    id: 'phase26',
    question: "On vous demande de former un stagiaire :",
    answers: [
      { id: 'phase26-anal', type: Personality.ANALYSEUR, label: "Vous lui donnez un programme détaillé." },
      { id: 'phase26-empa', type: Personality.EMPATHIQUE, label: "Vous l'accueillez avec beaucoup de douceur." },
      { id: 'phase26-pers', type: Personality.PERSÉVÉRANT, label: "Vous lui transmettez vos valeurs pro." },
      { id: 'phase26-rebe', type: Personality.REBELLE, label: "Vous lui confiez des missions créatives." },
      { id: 'phase26-prom', type: Personality.PROMOTEUR, label: "Vous le lancez directement dans le bain." },
      { id: 'phase26-imag', type: Personality.IMAGINEUR, label: "Vous le laissez observer avant d'agir." }
    ]
  },
  {
    id: 'phase27',
    question: "Lors d'une négociation d'honoraires :",
    answers: [
      { id: 'phase27-anal', type: Personality.ANALYSEUR, label: "Vous justifiez chaque ligne par le temps passé." },
      { id: 'phase27-empa', type: Personality.EMPATHIQUE, label: "Vous craignez de décevoir le client." },
      { id: 'phase27-pers', type: Personality.PERSÉVÉRANT, label: "Vous restez ferme sur la valeur du service." },
      { id: 'phase27-rebe', type: Personality.REBELLE, label: "Vous jouez sur le relationnel et l'audace." },
      { id: 'phase27-prom', type: Personality.PROMOTEUR, label: "Vous vendez le résultat et le gain futur." },
      { id: 'phase27-imag', type: Personality.IMAGINEUR, label: "Vous proposez un schéma global cohérent." }
    ]
  },
  {
    id: 'phase28',
    question: "Quelle phrase vous ressemble le plus ?",
    answers: [
      { id: 'phase28-anal', type: Personality.ANALYSEUR, label: "\"Les faits parlent d'eux-mêmes.\"" },
      { id: 'phase28-empa', type: Personality.EMPATHIQUE, label: "\"L'important c'est de s'entendre.\"" },
      { id: 'phase28-pers', type: Personality.PERSÉVÉRANT, label: "\"J'ai des principes et j'y tiens.\"" },
      { id: 'phase28-rebe', type: Personality.REBELLE, label: "\"On ne vit qu'une fois !\"" },
      { id: 'phase28-prom', type: Personality.PROMOTEUR, label: "\"L'action guérit tout.\"" },
      { id: 'phase28-imag', type: Personality.IMAGINEUR, label: "\"Le silence est d'or.\"" }
    ]
  },
  {
    id: 'phase29',
    question: "Face à une technologie complexe (IA...) :",
    answers: [
      { id: 'phase29-anal', type: Personality.ANALYSEUR, label: "Vous cherchez à comprendre l'algorithme." },
      { id: 'phase29-empa', type: Personality.EMPATHIQUE, label: "Vous demandez si c'est facile pour l'humain." },
      { id: 'phase29-pers', type: Personality.PERSÉVÉRANT, label: "Vous jugez de son utilité morale." },
      { id: 'phase29-rebe', type: Personality.REBELLE, label: "Vous vous amusez à la détourner." },
      { id: 'phase29-prom', type: Personality.PROMOTEUR, label: "Vous l'utilisez pour écraser la concurrence." },
      { id: 'phase29-imag', type: Personality.IMAGINEUR, label: "Vous imaginez les mondes futurs possibles." }
    ]
  },
  {
    id: 'phase30',
    question: "Votre conclusion sur ce test :",
    answers: [
      { id: 'phase30-anal', type: Personality.ANALYSEUR, label: "J'espère que les résultats seront précis." },
      { id: 'phase30-empa', type: Personality.EMPATHIQUE, label: "C'était un moment d'échange agréable." },
      { id: 'phase30-pers', type: Personality.PERSÉVÉRANT, label: "C'est important de mieux se connaître." },
      { id: 'phase30-rebe', type: Personality.REBELLE, label: "C'était sympa et original à faire." },
      { id: 'phase30-prom', type: Personality.PROMOTEUR, label: "J'ai hâte de voir mon score final." },
      { id: 'phase30-imag', type: Personality.IMAGINEUR, label: "Je vais méditer sur ces questions." }
    ]
  }
];
