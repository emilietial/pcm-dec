import { Personality, PcmQuestion } from "../models/pcm.model";

export const PCM_FORM: PcmQuestion[] = [
  // --- BLOC 1 : BASE (Questions 1 à 10) ---
  // --- BLOC 2 : ENERGY (Questions 11 à 20) ---
  // --- BLOC 3 : PHASE (Questions 21 à 30) ---
  {
    id: 'base1',
    question: "Dans mon quotidien professionnel, ma plus grande force est :",
    answers: [
      { id: 'base1-anal', type: Personality.ANALYSEUR, label: "Ma rigueur dans l'analyse et l'organisation des données" },
      { id: 'base1-empa', type: Personality.EMPATHIQUE, label: "Mon intuition pour comprendre les besoins humains" },
      { id: 'base1-pers', type: Personality.PERSÉVÉRANT, label: "Mon exigence éthique et la défense de mes convictions" },
      { id: 'base1-rebe', type: Personality.REBELLE, label: "Ma capacité à sortir du cadre pour innover" },
      { id: 'base1-prom', type: Personality.PROMOTEUR, label: "Mon audace pour saisir les opportunités de croissance" },
      { id: 'base1-imag', type: Personality.IMAGINEUR, label: "Ma faculté à prendre du recul pour voir la globalité" }
    ]
  },
  {
    id: 'base2',
    question: "Pour collaborer efficacement, j'ai besoin de partenaires qui :",
    answers: [
      { id: 'base2-anal', type: Personality.ANALYSEUR, label: "Sont précis, structurés et s'appuient sur des faits" },
      { id: 'base2-empa', type: Personality.EMPATHIQUE, label: "Sont bienveillants, authentiques et à l'écoute" },
      { id: 'base2-pers', type: Personality.PERSÉVÉRANT, label: "Respectent mes standards de qualité et mes valeurs" },
      { id: 'base2-rebe', type: Personality.REBELLE, label: "Sont spontanés, créatifs et aiment l'imprévu" },
      { id: 'base2-prom', type: Personality.PROMOTEUR, label: "Sont réactifs, orientés résultats et aiment le challenge" },
      { id: 'base2-imag', type: Personality.IMAGINEUR, label: "Respectent mon autonomie et mon besoin de tranquillité" }
    ]
  },
  {
    id: 'base3',
    question: "Si mes collègues devaient me décrire en un mot, ils diraient :",
    answers: [
      { id: 'base3-anal', type: Personality.ANALYSEUR, label: "Méthodique" },
      { id: 'base3-empa', type: Personality.EMPATHIQUE, label: "Altruiste" },
      { id: 'base3-pers', type: Personality.PERSÉVÉRANT, label: "Intègre" },
      { id: 'base3-rebe', type: Personality.REBELLE, label: "Inspirant" },
      { id: 'base3-prom', type: Personality.PROMOTEUR, label: "Performant" },
      { id: 'base3-imag', type: Personality.IMAGINEUR, label: "Observateur" }
    ]
  },
  {
    id: 'base4',
    question: "Face à une erreur critique dans un dossier, ma réaction est :",
    answers: [
      { id: 'base4-anal', type: Personality.ANALYSEUR, label: "De disséquer le problème pour trouver la cause logique" },
      { id: 'base4-empa', type: Personality.EMPATHIQUE, label: "De m'inquiéter de l'impact sur la relation client" },
      { id: 'base4-pers', type: Personality.PERSÉVÉRANT, label: "De rappeler les principes de déontologie non respectés" },
      { id: 'base4-rebe', type: Personality.REBELLE, label: "De trouver une solution détournée avec humour" },
      { id: 'base4-prom', type: Personality.PROMOTEUR, label: "De prendre les commandes pour régler ça au plus vite" },
      { id: 'base4-imag', type: Personality.IMAGINEUR, label: "De m'isoler pour analyser les conséquences à long terme" }
    ]
  },
  {
    id: 'base5',
    question: "Une relation de travail idéale pour moi repose sur :",
    answers: [
      { id: 'base5-anal', type: Personality.ANALYSEUR, label: "La reconnaissance mutuelle de nos compétences techniques" },
      { id: 'base5-empa', type: Personality.EMPATHIQUE, label: "Un climat de confiance et de soutien émotionnel" },
      { id: 'base5-pers', type: Personality.PERSÉVÉRANT, label: "Le respect de nos engagements et d'une vision commune" },
      { id: 'base5-rebe', type: Personality.REBELLE, label: "La liberté de ton et le plaisir de travailler ensemble" },
      { id: 'base5-prom', type: Personality.PROMOTEUR, label: "La stimulation par le défi et la réussite partagée" },
      { id: 'base5-imag', type: Personality.IMAGINEUR, label: "Le respect de la bulle de concentration de chacun" }
    ]
  },
  {
    id: 'base6',
    question: "Quand je perds mes moyens, j'ai tendance à :",
    answers: [
      { id: 'base6-anal', type: Personality.ANALYSEUR, label: "Devenir froid et trop exigeant sur les détails" },
      { id: 'base6-empa', type: Personality.EMPATHIQUE, label: "Me sentir coupable de ne pas avoir été à la hauteur" },
      { id: 'base6-pers', type: Personality.PERSÉVÉRANT, label: "Donner des leçons de morale pour justifier ma position" },
      { id: 'base6-rebe', type: Personality.REBELLE, label: "Réagir avec sarcasme ou rejeter les règles" },
      { id: 'base6-prom', type: Personality.PROMOTEUR, label: "Prendre des risques inconsidérés pour me rassurer" },
      { id: 'base6-imag', type: Personality.IMAGINEUR, label: "Me couper de l'extérieur et devenir totalement passif" }
    ]
  },
  {
    id: 'base7',
    question: "Au travail, mon moteur naturel est :",
    answers: [
      { id: 'base7-anal', type: Personality.ANALYSEUR, label: "La clarté des processus" },
      { id: 'base7-empa', type: Personality.EMPATHIQUE, label: "L'harmonie de l'équipe" },
      { id: 'base7-pers', type: Personality.PERSÉVÉRANT, label: "Le sens du devoir" },
      { id: 'base7-rebe', type: Personality.REBELLE, label: "L'énergie créative" },
      { id: 'base7-prom', type: Personality.PROMOTEUR, label: "Le goût de la victoire" },
      { id: 'base7-imag', type: Personality.IMAGINEUR, label: "La paix de l'esprit" }
    ]
  },
  {
    id: 'base8',
    question: "Depuis le début de ma carrière, on remarque que :",
    answers: [
      { id: 'base8-anal', type: Personality.ANALYSEUR, label: "J'apprends vite les systèmes complexes et les chiffres" },
      { id: 'base8-empa', type: Personality.EMPATHIQUE, label: "Je crée naturellement du lien et de la convivialité" },
      { id: 'base8-pers', type: Personality.PERSÉVÉRANT, label: "Je suis le garant des valeurs et de la culture d'entreprise" },
      { id: 'base8-rebe', type: Personality.REBELLE, label: "Je bouscule les habitudes avec des idées neuves" },
      { id: 'base8-prom', type: Personality.PROMOTEUR, label: "Je suis celui qui débloque les situations par l'action" },
      { id: 'base8-imag', type: Personality.IMAGINEUR, label: "Je reste calme et stoïque, même dans la tempête" }
    ]
  },
  {
    id: 'base9',
    question: "Ma communication est généralement perçue comme :",
    answers: [
      { id: 'base9-anal', type: Personality.ANALYSEUR, label: "Factuelle, précise et structurée" },
      { id: 'base9-empa', type: Personality.EMPATHIQUE, label: "Chaleureuse, douce et attentive" },
      { id: 'base9-pers', type: Personality.PERSÉVÉRANT, label: "Sérieuse, engagée et empreinte de convictions" },
      { id: 'base9-rebe', type: Personality.REBELLE, label: "Vivante, imagée et parfois provocatrice" },
      { id: 'base9-prom', type: Personality.PROMOTEUR, label: "Directe, percutante et axée sur l'objectif" },
      { id: 'base9-imag', type: Personality.IMAGINEUR, label: "Discrète, concise et posée" }
    ]
  },
  {
    id: 'base10',
    question: "Sous un stress intense, je me surprends à :",
    answers: [
      { id: 'base10-anal', type: Personality.ANALYSEUR, label: "Vouloir tout faire moi-même par peur de l'imprécision" },
      { id: 'base10-empa', type: Personality.EMPATHIQUE, label: "Chercher à tout prix l'approbation de mes pairs" },
      { id: 'base10-pers', type: Personality.PERSÉVÉRANT, label: "Devenir critique envers l'incompétence supposée des autres" },
      { id: 'base10-rebe', type: Personality.REBELLE, label: "Provoquer pour voir si l'on va me tenir tête" },
      { id: 'base10-prom', type: Personality.PROMOTEUR, label: "Manipuler les événements pour ne pas perdre la face" },
      { id: 'base10-imag', type: Personality.IMAGINEUR, label: "Me figer et attendre que la situation passe seule" }
    ]
  },
  {
    id: 'energy11',
    question: "Pour motiver mon équipe, je privilégie :",
    answers: [
      { id: 'energy11-anal', type: Personality.ANALYSEUR, label: "La fixation d'objectifs SMART et datés" },
      { id: 'energy11-empa', type: Personality.EMPATHIQUE, label: "Les encouragements personnalisés et le bien-être" },
      { id: 'energy11-pers', type: Personality.PERSÉVÉRANT, label: "La valorisation de l'expertise et du sérieux" },
      { id: 'energy11-rebe', type: Personality.REBELLE, label: "L'organisation d'ateliers créatifs et ludiques" },
      { id: 'energy11-prom', type: Personality.PROMOTEUR, label: "Les challenges avec récompenses à la clé" },
      { id: 'energy11-imag', type: Personality.IMAGINEUR, label: "Laisser chacun s'organiser en totale autonomie" }
    ]
  },
  {
    id: 'energy12',
    question: "Un projet est pour moi une réussite si :",
    answers: [
      { id: 'energy12-anal', type: Personality.ANALYSEUR, label: "Le rendu est techniquement parfait et sans erreur" },
      { id: 'energy12-empa', type: Personality.EMPATHIQUE, label: "L'équipe en ressort soudée et épanouie" },
      { id: 'energy12-pers', type: Personality.PERSÉVÉRANT, label: "Le projet respecte scrupuleusement notre éthique" },
      { id: 'energy12-rebe', type: Personality.REBELLE, label: "On a pris du plaisir à le réaliser de façon originale" },
      { id: 'energy12-prom', type: Personality.PROMOTEUR, label: "On a battu un record de temps ou de rentabilité" },
      { id: 'energy12-imag', type: Personality.IMAGINEUR, label: "Le projet est visionnaire et bien pensé" }
    ]
  },
  {
    id: 'energy13',
    question: "Mon espace de travail idéal serait :",
    answers: [
      { id: 'energy13-anal', type: Personality.ANALYSEUR, label: "Un bureau ordonné avec plusieurs écrans et données" },
      { id: 'energy13-empa', type: Personality.EMPATHIQUE, label: "Un espace ouvert, décoré et chaleureux" },
      { id: 'energy13-pers', type: Personality.PERSÉVÉRANT, label: "Un lieu sobre qui impose le respect du métier" },
      { id: 'energy13-rebe', type: Personality.REBELLE, label: "Un espace atypique avec une décoration inspirante" },
      { id: 'energy13-prom', type: Personality.PROMOTEUR, label: "Un bureau prestigieux situé au cœur de l'action" },
      { id: 'energy13-imag', type: Personality.IMAGINEUR, label: "Un bureau isolé, loin du bruit et de l'agitation" }
    ]
  },
  {
    id: 'energy14',
    question: "Face au changement technologique (ex: IA), je :",
    answers: [
      { id: 'energy14-anal', type: Personality.ANALYSEUR, label: "Étudie méthodiquement la documentation technique" },
      { id: 'energy14-empa', type: Personality.EMPATHIQUE, label: "Demande si cela va simplifier la vie des collaborateurs" },
      { id: 'energy14-pers', type: Personality.PERSÉVÉRANT, label: "Évalue si c'est compatible avec notre déontologie" },
      { id: 'energy14-rebe', type: Personality.REBELLE, label: "M'amuse à tester les limites de l'outil avec curiosité" },
      { id: 'energy14-prom', type: Personality.PROMOTEUR, label: "Cherche comment cela peut nous donner un avantage concurrentiel" },
      { id: 'energy14-imag', type: Personality.IMAGINEUR, label: "Réfléchis aux conséquences sociétales de cette évolution" }
    ]
  },
  {
    id: 'energy15',
    question: "Parfois, on me reproche injustement de :",
    answers: [
      { id: 'energy15-anal', type: Personality.ANALYSEUR, label: "Manquer de flexibilité face à l'imprévu" },
      { id: 'energy15-empa', type: Personality.EMPATHIQUE, label: "Être trop \"maman poule\" avec mes clients" },
      { id: 'energy15-pers', type: Personality.PERSÉVÉRANT, label: "Être trop rigide sur mes principes fondamentaux" },
      { id: 'energy15-rebe', type: Personality.REBELLE, label: "Manquer de sérieux dans les moments critiques" },
      { id: 'energy15-prom', type: Personality.PROMOTEUR, label: "Être trop impatient ou fonceur" },
      { id: 'energy15-imag', type: Personality.IMAGINEUR, label: "Être trop effacé ou distant" }
    ]
  },
  {
    id: 'energy16',
    question: "Dans une réunion de direction, je suis celui qui :",
    answers: [
      { id: 'energy16-anal', type: Personality.ANALYSEUR, label: "Apporte les chiffres et la structure de l'ordre du jour" },
      { id: 'energy16-empa', type: Personality.EMPATHIQUE, label: "Veille à ce que chacun puisse s'exprimer sereinement" },
      { id: 'energy16-pers', type: Personality.PERSÉVÉRANT, label: "Rappelle les engagements à long terme du cabinet" },
      { id: 'energy16-rebe', type: Personality.REBELLE, label: "Relance la dynamique par une remarque décalée" },
      { id: 'energy16-prom', type: Personality.PROMOTEUR, label: "Tranche les débats pour passer à l'exécution" },
      { id: 'energy16-imag', type: Personality.IMAGINEUR, label: "Écoute l'ensemble avant de donner une vision de fond" }
    ]
  },
  {
    id: 'energy17',
    question: "Pour recharger mes batteries, j'ai besoin de :",
    answers: [
      { id: 'energy17-anal', type: Personality.ANALYSEUR, label: "Planifier mes prochaines étapes au calme" },
      { id: 'energy17-empa', type: Personality.EMPATHIQUE, label: "Passer du temps avec mes proches" },
      { id: 'energy17-pers', type: Personality.PERSÉVÉRANT, label: "Lire ou m'informer sur des sujets de fond" },
      { id: 'energy17-rebe', type: Personality.REBELLE, label: "Participer à une activité fun et imprévue" },
      { id: 'energy17-prom', type: Personality.PROMOTEUR, label: "Vivre une expérience forte ou un exploit sportif" },
      { id: 'energy17-imag', type: Personality.IMAGINEUR, label: "M'isoler totalement et ne rien faire" }
    ]
  },
  {
    id: 'energy18',
    question: "Le comportement qui m'agace le plus chez les autres est :",
    answers: [
      { id: 'energy18-anal', type: Personality.ANALYSEUR, label: "L'approximation et le manque de rigueur" },
      { id: 'energy18-empa', type: Personality.EMPATHIQUE, label: "La froideur relationnelle et l'indifférence" },
      { id: 'energy18-pers', type: Personality.PERSÉVÉRANT, label: "Le manque de loyauté et de valeurs" },
      { id: 'energy18-rebe', type: Personality.REBELLE, label: "La routine étouffante et le manque d'idées" },
      { id: 'energy18-prom', type: Personality.PROMOTEUR, label: "L'hésitation constante et la passivité" },
      { id: 'energy18-imag', type: Personality.IMAGINEUR, label: "L'intrusion dans mon espace et le bruit" }
    ]
  },
  {
    id: 'energy19',
    question: "Dans mon parcours professionnel, je cherche avant tout :",
    answers: [
      { id: 'energy19-anal', type: Personality.ANALYSEUR, label: "La compétence et l'expertise reconnue" },
      { id: 'energy19-empa', type: Personality.EMPATHIQUE, label: "Le sentiment d'appartenance et l'utilité humaine" },
      { id: 'energy19-pers', type: Personality.PERSÉVÉRANT, label: "Le respect d'un idéal et de mes croyances" },
      { id: 'energy19-rebe', type: Personality.REBELLE, label: "La liberté de créer et de me réinventer" },
      { id: 'energy19-prom', type: Personality.PROMOTEUR, label: "La puissance d'agir et le succès matériel" },
      { id: 'energy19-imag', type: Personality.IMAGINEUR, label: "La clarté intérieure et l'indépendance" }
    ]
  },
  {
    id: 'energy20',
    question: "Si j'étais une fonction dans l'entreprise, je serais :",
    answers: [
      { id: 'energy20-anal', type: Personality.ANALYSEUR, label: "Le système d'information (logique et structuré)" },
      { id: 'energy20-empa', type: Personality.EMPATHIQUE, label: "Les ressources humaines (bienveillantes et à l'écoute)" },
      { id: 'energy20-pers', type: Personality.PERSÉVÉRANT, label: "La direction qualité (garante des standards)" },
      { id: 'energy20-rebe', type: Personality.REBELLE, label: "Le département innovation (créatif et disruptif)" },
      { id: 'energy20-prom', type: Personality.PROMOTEUR, label: "Le développement commercial (conquérant et rapide)" },
      { id: 'energy20-imag', type: Personality.IMAGINEUR, label: "La planification stratégique (visionnaire et calme)" }
    ]
  },
  {
    id: 'phase21',
    question: "Si je devais faire un choix radical, je sauverais :",
    answers: [
      { id: 'phase21-anal', type: Personality.ANALYSEUR, label: "Ma capacité de raisonnement" },
      { id: 'phase21-empa', type: Personality.EMPATHIQUE, label: "Ma faculté d'aimer" },
      { id: 'phase21-pers', type: Personality.PERSÉVÉRANT, label: "Mon intégrité morale" },
      { id: 'phase21-rebe', type: Personality.REBELLE, label: "Mon esprit libre" },
      { id: 'phase21-prom', type: Personality.PROMOTEUR, label: "Mon courage" },
      { id: 'phase21-imag', type: Personality.IMAGINEUR, label: "Ma paix intérieure" }
    ]
  },
  {
    id: 'phase22',
    question: "Dans 10 ans, je me vois comme :",
    answers: [
      { id: 'phase22-anal', type: Personality.ANALYSEUR, label: "Un expert incontesté dans mon domaine technique" },
      { id: 'phase22-empa', type: Personality.EMPATHIQUE, label: "Un leader entouré d'une équipe soudée et heureuse" },
      { id: 'phase22-pers', type: Personality.PERSÉVÉRANT, label: "Un mentor respecté pour sa sagesse et ses valeurs" },
      { id: 'phase22-rebe', type: Personality.REBELLE, label: "Un entrepreneur ayant lancé des projets originaux" },
      { id: 'phase22-prom', type: Personality.PROMOTEUR, label: "Un dirigeant ayant conquis de nouveaux marchés" },
      { id: 'phase22-imag', type: Personality.IMAGINEUR, label: "Une personne ayant atteint une sérénité totale" }
    ]
  },
  {
    id: 'phase23',
    question: "Une collaboration se termine pour moi quand :",
    answers: [
      { id: 'phase23-anal', type: Personality.ANALYSEUR, label: "Je ne peux plus compter sur la logique de mon partenaire" },
      { id: 'phase23-empa', type: Personality.EMPATHIQUE, label: "Le climat devient conflictuel et sans empathie" },
      { id: 'phase23-pers', type: Personality.PERSÉVÉRANT, label: "L'autre trahit mes principes ou ma confiance" },
      { id: 'phase23-rebe', type: Personality.REBELLE, label: "L'ennui et le manque de fun deviennent insupportables" },
      { id: 'phase23-prom', type: Personality.PROMOTEUR, label: "Je n'ai plus de défis à relever ou de gains à obtenir" },
      { id: 'phase23-imag', type: Personality.IMAGINEUR, label: "On m'impose un cadre trop bruyant ou envahissant" }
    ]
  },
  {
    id: 'phase24',
    question: "Dans mes moments de grande fatigue, je peux :",
    answers: [
      { id: 'phase24-anal', type: Personality.ANALYSEUR, label: "Devenir cassant envers ceux qui travaillent moins bien" },
      { id: 'phase24-empa', type: Personality.EMPATHIQUE, label: "M'épuiser à vouloir aider tout le monde" },
      { id: 'phase24-pers', type: Personality.PERSÉVÉRANT, label: "M'enfermer dans des certitudes idéologiques" },
      { id: 'phase24-rebe', type: Personality.REBELLE, label: "Devenir provocateur ou rebelle aux consignes" },
      { id: 'phase24-prom', type: Personality.PROMOTEUR, label: "Vouloir forcer le destin, quitte à être agressif" },
      { id: 'phase24-imag', type: Personality.IMAGINEUR, label: "Me retirer du monde et devenir une ombre" }
    ]
  },
  {
    id: 'phase25',
    question: "Mon intérêt pour les sciences ou les arts porte sur :",
    answers: [
      { id: 'phase25-anal', type: Personality.ANALYSEUR, label: "La compréhension des lois de l'univers" },
      { id: 'phase25-empa', type: Personality.EMPATHIQUE, label: "La beauté des émotions transmises" },
      { id: 'phase25-pers', type: Personality.PERSÉVÉRANT, label: "La profondeur du message et des valeurs portées" },
      { id: 'phase25-rebe', type: Personality.REBELLE, label: "L'originalité de la forme et le plaisir visuel" },
      { id: 'phase25-prom', type: Personality.PROMOTEUR, label: "L'impact que l'œuvre a sur le public" },
      { id: 'phase25-imag', type: Personality.IMAGINEUR, label: "La contemplation silencieuse qu'elle procure" }
    ]
  },
  {
    id: 'phase26',
    question: "Au cours de mes études, j'étais plutôt :",
    answers: [
      { id: 'phase26-anal', type: Personality.ANALYSEUR, label: "L'étudiant studieux qui visait la mention" },
      { id: 'phase26-empa', type: Personality.EMPATHIQUE, label: "L'étudiant qui aidait tout le monde à réussir" },
      { id: 'phase26-pers', type: Personality.PERSÉVÉRANT, label: "L'étudiant engagé dans des associations à thèmes" },
      { id: 'phase26-rebe', type: Personality.REBELLE, label: "L'étudiant qui mettait l'ambiance et animait les soirées" },
      { id: 'phase26-prom', type: Personality.PROMOTEUR, label: "L'étudiant qui lançait des business ou des défis" },
      { id: 'phase26-imag', type: Personality.IMAGINEUR, label: "L'étudiant discret au fond de la classe, très réfléchi" }
    ]
  },
  {
    id: 'phase27',
    question: "Pour moi, être un bon professionnel, c'est :",
    answers: [
      { id: 'phase27-anal', type: Personality.ANALYSEUR, label: "Travailler avec méthode et précision" },
      { id: 'phase27-empa', type: Personality.EMPATHIQUE, label: "Être humain et savoir écouter" },
      { id: 'phase27-pers', type: Personality.PERSÉVÉRANT, label: "Être digne de confiance et avoir des principes" },
      { id: 'phase27-rebe', type: Personality.REBELLE, label: "Être inventif et savoir surprendre" },
      { id: 'phase27-prom', type: Personality.PROMOTEUR, label: "Être efficace et savoir décider" },
      { id: 'phase27-imag', type: Personality.IMAGINEUR, label: "Être posé et savoir anticiper" }
    ]
  },
  {
    id: 'phase28',
    question: "J'apprécie un patron qui me donne :",
    answers: [
      { id: 'phase28-anal', type: Personality.ANALYSEUR, label: "Des consignes claires et des données factuelles" },
      { id: 'phase28-empa', type: Personality.EMPATHIQUE, label: "De la reconnaissance humaine et du soutien" },
      { id: 'phase28-pers', type: Personality.PERSÉVÉRANT, label: "Sa confiance sur mon expertise et mes valeurs" },
      { id: 'phase28-rebe', type: Personality.REBELLE, label: "Le droit à l'erreur et à la fantaisie" },
      { id: 'phase28-prom', type: Personality.PROMOTEUR, label: "Des objectifs ambitieux et de l'autonomie d'action" },
      { id: 'phase28-imag', type: Personality.IMAGINEUR, label: "Du temps et du calme pour approfondir mes dossiers" }
    ]
  },
  {
    id: 'phase29',
    question: "J'ai tendance à acheter un produit ou service si :",
    answers: [
      { id: 'phase29-anal', type: Personality.ANALYSEUR, label: "Il est techniquement le plus performant du marché" },
      { id: 'phase29-empa', type: Personality.EMPATHIQUE, label: "Le vendeur est vraiment sympathique et humain" },
      { id: 'phase29-pers', type: Personality.PERSÉVÉRANT, label: "Il est recommandé par des organismes éthiques" },
      { id: 'phase29-rebe', type: Personality.REBELLE, label: "Il est unique, coloré ou vraiment différent" },
      { id: 'phase29-prom', type: Personality.PROMOTEUR, label: "Il promet un gain de temps ou d'argent immédiat" },
      { id: 'phase29-imag', type: Personality.IMAGINEUR, label: "Il est simple, sobre et ne nécessite pas d'interaction" }
    ]
  },
  {
    id: 'phase30',
    question: "Ce questionnaire est pour moi l'occasion de :",
    answers: [
      { id: 'phase30-anal', type: Personality.ANALYSEUR, label: "Vérifier si mes résultats sont cohérents logiquement" },
      { id: 'phase30-empa', type: Personality.EMPATHIQUE, label: "Passer un moment de réflexion humaine sur moi-même" },
      { id: 'phase30-pers', type: Personality.PERSÉVÉRANT, label: "M'assurer que ma démarche est utile et sérieuse" },
      { id: 'phase30-rebe', type: Personality.REBELLE, label: "M'amuser à découvrir mon profil de façon ludique" },
      { id: 'phase30-prom', type: Personality.PROMOTEUR, label: "Voir si je peux optimiser mes performances futures" },
      { id: 'phase30-imag', type: Personality.IMAGINEUR, label: "Prendre un temps de recul nécessaire sur ma pratique" }
    ]
  }
];
