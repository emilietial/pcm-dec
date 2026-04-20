import { Personality, PcmQuestion } from '../models/pcm.model';

export const PCM_OFFICIAL_DATA: PcmQuestion[] = [
  {
    id: 'base1',
    question: "Quand vous étiez enfant, on vous aurait plutôt décrit comme :",
    answers: [
      { id: 'base1-anal', type: Personality.ANALYSEUR, label: "Curieux et méthodique — vous aimiez comprendre comment les choses fonctionnent." },
      { id: 'base1-empa', type: Personality.EMPATHIQUE, label: "Sociable et attentionné — vous aviez besoin de vous sentir aimé et intégré." },
      { id: 'base1-pers', type: Personality.PERSÉVÉRANT, label: "Déterminé et convaincu — vous aviez vos opinions et vous les défendiez." },
      { id: 'base1-ener', type: Personality.ENERGISEUR, label: "Joueur et agité — vous vous ennuyiez vite et aviez besoin de bouger." },
      { id: 'base1-prom', type: Personality.PROMOTEUR, label: "Compétiteur et audacieux — vous aimiez gagner et vous mesurer aux autres." },
      { id: 'base1-imag', type: Personality.IMAGINEUR, label: "Calme et rêveur — vous passiez du temps seul dans vos pensées." }
    ]
  },
  {
    id: 'base2',
    question: "Votre entourage dit que vous êtes :",
    answers: [
      { id: 'base2-anal', type: Personality.ANALYSEUR, label: "Quelqu'un de très organisé et logique." },
      { id: 'base2-empa', type: Personality.EMPATHIQUE, label: "Quelqu'un de très attentionné et à l'écoute." },
      { id: 'base2-pers', type: Personality.PERSÉVÉRANT, label: "Quelqu’un d’engagé et fidèle à ses convictions." },
      { id: 'base2-ener', type: Personality.ENERGISEUR, label: "Quelqu'un de très créatif et spontané." },
      { id: 'base2-prom', type: Personality.PROMOTEUR, label: "Quelqu'un qui obtient des résultats et va au bout des choses." },
      { id: 'base2-imag', type: Personality.IMAGINEUR, label: "Quelqu'un de très calme et réfléchi." }
    ]
  },
  {
    id: 'base3',
    question: "Quand un groupe dont vous faites partie doit prendre une décision, votre priorité c'est :",
    answers: [
      { id: 'base3-anal', type: Personality.ANALYSEUR, label: "Qu'on s'appuie sur des faits concrets et qu'on aille à l'essentiel." },
      { id: 'base3-empa', type: Personality.EMPATHIQUE, label: "Que tout le monde se sente entendu et que l'ambiance reste bonne." },
      { id: 'base3-pers', type: Personality.PERSÉVÉRANT, label: "Qu’on prenne une décision qui vous paraît juste et cohérente avec vos principes." },
      { id: 'base3-ener', type: Personality.ENERGISEUR, label: "Que cela reste vivant — vous aimez quand les gens réagissent, débattent, s'animent." },
      { id: 'base3-prom', type: Personality.PROMOTEUR, label: "Qu'on tranche vite et qu'on avance — trop de délibération, cela tue l'élan." },
      { id: 'base3-imag', type: Personality.IMAGINEUR, label: "De comprendre le sens global de ce qu'on décide avant de se prononcer." }
    ]
  },
  {
    id: 'base4',
    question: "Quand vous racontez quelque chose, vous :",
    answers: [
      { id: 'base4-anal', type: Personality.ANALYSEUR, label: "Structurez ce que vous dites, avec des faits et des détails précis." },
      { id: 'base4-empa', type: Personality.EMPATHIQUE, label: "Adaptez votre façon de raconter à ce que l'autre ressent et à ce qu'il comprend." },
      { id: 'base4-pers', type: Personality.PERSÉVÉRANT, label: "Glissez naturellement votre point de vue sur ce qui était bien ou mal dans la situation." },
      { id: 'base4-ener', type: Personality.ENERGISEUR, label: "Cherchez à faire réagir — vous aimez que les gens rient ou soient surpris." },
      { id: 'base4-prom', type: Personality.PROMOTEUR, label: "Racontez avec assurance, en mettant en avant ce qui impressionne ou ce qui a bien marché." },
      { id: 'base4-imag', type: Personality.IMAGINEUR, label: "Suivez votre fil de pensée sans vous presser — vous arrivez au point principal à votre rythme." }
    ]
  },
  {
    id: 'base5',
    question: "Pour vous, une bonne journée c'est :",
    answers: [
      { id: 'base5-anal', type: Personality.ANALYSEUR, label: "Avoir avancé concrètement sur ce que vous aviez prévu, et senti que les choses sont bien faites." },
      { id: 'base5-empa', type: Personality.EMPATHIQUE, label: "Avoir aidé quelqu'un et senti que votre présence ou votre soutien a vraiment compté." },
      { id: 'base5-pers', type: Personality.PERSÉVÉRANT, label: "Avoir bien fait les choses, sans rogner sur la qualité ni trahir vos principes." },
      { id: 'base5-ener', type: Personality.ENERGISEUR, label: "Avoir été entouré, avoir ri, avoir senti une vraie énergie dans vos interactions." },
      { id: 'base5-prom', type: Personality.PROMOTEUR, label: "Avoir réussi quelque chose de difficile — un défi relevé, un résultat obtenu." },
      { id: 'base5-imag', type: Personality.IMAGINEUR, label: "Avoir eu du temps pour vous, sans être sans cesse sollicité." }
    ]
  },
  {
    id: 'base6',
    question: "Lors d'un voyage ou d'une sortie avec des amis, vous êtes plutôt celui ou celle qui :",
    answers: [
      { id: 'base6-anal', type: Personality.ANALYSEUR, label: "Prépare le programme, les horaires et s'assure que tout est bien organisé." },
      { id: 'base6-empa', type: Personality.EMPATHIQUE, label: "Veille à ce que tout le monde se sente inclus et passe un bon moment." },
      { id: 'base6-pers', type: Personality.PERSÉVÉRANT, label: "S'assure qu'on fait ce qu'on avait prévu et qu'on respecte ce qui était convenu." },
      { id: 'base6-ener', type: Personality.ENERGISEUR, label: "Propose des activités spontanément, cherche ce qui va être fun et met l'ambiance." },
      { id: 'base6-prom', type: Personality.PROMOTEUR, label: "Prend les décisions quand le groupe hésite et pousse à avancer." },
      { id: 'base6-imag', type: Personality.IMAGINEUR, label: "Suit le mouvement en restant un peu en retrait, dans ses pensées." }
    ]
  },
  {
    id: 'base7',
    question: "Lorsque vous écoutez quelqu'un, vous :",
    answers: [
      { id: 'base7-anal', type: Personality.ANALYSEUR, label: "Cherchez surtout à comprendre les faits et la logique de son raisonnement." },
      { id: 'base7-empa', type: Personality.EMPATHIQUE, label: "Êtes attentif aux émotions et au ressenti exprimé." },
      { id: 'base7-pers', type: Personality.PERSÉVÉRANT, label: "Donnez votre opinion et votre jugement sur ce que vous entendez." },
      { id: 'base7-ener', type: Personality.ENERGISEUR, label: "Réagissez spontanément et interagissez facilement à son récit." },
      { id: 'base7-prom', type: Personality.PROMOTEUR, label: "Repérez rapidement les actions et décisions à engager." },
      { id: 'base7-imag', type: Personality.IMAGINEUR, label: "Prenez le temps d'intégrer ce que vous entendez — vous avez besoin de réfléchir en profondeur avant de répondre." }
    ]
  },
  {
    id: 'base8',
    question: "Pour encourager quelqu'un qui doute ou traverse une période difficile, vous :",
    answers: [
      { id: 'base8-anal', type: Personality.ANALYSEUR, label: "L'aidez à voir les choses clairement — vous posez le problème, les options, les étapes." },
      { id: 'base8-empa', type: Personality.EMPATHIQUE, label: "Lui témoignez votre soutien et lui rappelez ce qu'il vaut en tant que personne." },
      { id: 'base8-pers', type: Personality.PERSÉVÉRANT, label: "Lui montrez en quoi ce qu'il fait a du sens et mérite qu'on s'y accroche." },
      { id: 'base8-ener', type: Personality.ENERGISEUR, label: "Cherchez à le faire rire ou à détendre l'atmosphère — vous misez sur l'énergie et la légèreté." },
      { id: 'base8-prom', type: Personality.PROMOTEUR, label: "Lui montrez concrètement ce qu'il peut accomplir s'il s'en sort — vous aimez remotiver par les résultats." },
      { id: 'base8-imag', type: Personality.IMAGINEUR, label: "Lui laissez de l'espace — vous êtes là si besoin, mais sans le brusquer." }
    ]
  },
  {
    id: 'base9',
    question: "Quand vous n'êtes pas d'accord avec quelqu'un sur la façon de faire quelque chose, vous :",
    answers: [
      { id: 'base9-anal', type: Personality.ANALYSEUR, label: "Exposez calmement les arguments qui soutiennent votre position." },
      { id: 'base9-empa', type: Personality.EMPATHIQUE, label: "Cherchez un terrain d'entente pour préserver la relation avant tout." },
      { id: 'base9-pers', type: Personality.PERSÉVÉRANT, label: "Défendez votre point de vue avec conviction - vous pensez avoir raison et vous l'assumez." },
      { id: 'base9-ener', type: Personality.ENERGISEUR, label: "Exprimez votre désaccord franchement, avec énergie ou vous n'êtes pas du genre à mâcher vos mots." },
      { id: 'base9-prom', type: Personality.PROMOTEUR, label: "Tranchez ou proposez une issue rapide - vous n'aimez pas vous éterniser là-dessus." },
      { id: 'base9-imag', type: Personality.IMAGINEUR, label: "Prenez du recul et attendez d'avoir bien réfléchi avant de vous exprimer." }
    ]
  },
  {
    id: 'base10',
    question: "Dans une conversation, vous avez tendance à :",
    answers: [
      { id: 'base10-anal', type: Personality.ANALYSEUR, label: "Surexpliquer et multiplier les détails pour être sûr d'être bien compris." },
      { id: 'base10-empa', type: Personality.EMPATHIQUE, label: "Dire ce que l'autre veut entendre plutôt que ce que vous pensez vraiment." },
      { id: 'base10-pers', type: Personality.PERSÉVÉRANT, label: "Donner votre avis même quand on ne vous l'a pas demandé." },
      { id: 'base10-ener', type: Personality.ENERGISEUR, label: "Parler avant que l'autre ait fini, ou sauter d'un sujet à l'autre." },
      { id: 'base10-prom', type: Personality.PROMOTEUR, label: "Aller droit au but, quitte à simplifier ce qui mérite d'être approfondi." },
      { id: 'base10-imag', type: Personality.IMAGINEUR, label: "Vous déconnecter de la conversation et laisser l'autre gérer." }
    ]
  },
  {
    id: 'energy11',
    question: "Face à une décision urgente, vous avez tendance à :",
    answers: [
      { id: 'energy11-anal', type: Personality.ANALYSEUR, label: "Analyser les faits et les données disponibles." },
      { id: 'energy11-empa', type: Personality.EMPATHIQUE, label: "Penser d'abord à ce que les personnes concernées ressentent et à comment elles vont le vivre." },
      { id: 'energy11-pers', type: Personality.PERSÉVÉRANT, label: "Vérifier la cohérence avec vos principes et vos valeurs." },
      { id: 'energy11-ener', type: Personality.ENERGISEUR, label: "Vous fier à votre instinct et trancher vite." },
      { id: 'energy11-prom', type: Personality.PROMOTEUR, label: "Vous orienter sur ce que ça va rapporter concrètement." },
      { id: 'energy11-imag', type: Personality.IMAGINEUR, label: "Prendre du temps seul pour réfléchir avant de répondre." }
    ]
  },
  {
    id: 'energy12',
    question: "Dans quel type d'échange vous sentez-vous vraiment à l'aise ?",
    answers: [
      { id: 'energy12-anal', type: Personality.ANALYSEUR, label: "Un échange structuré, précis et centré sur les faits." },
      { id: 'energy12-empa', type: Personality.EMPATHIQUE, label: "Un climat bienveillant où chacun peut s'exprimer librement." },
      { id: 'energy12-pers', type: Personality.PERSÉVÉRANT, label: "Un débat d'idées où l'on peut défendre ses convictions." },
      { id: 'energy12-ener', type: Personality.ENERGISEUR, label: "Un échange spontané, vivant, où on peut rebondir et s'amuser." },
      { id: 'energy12-prom', type: Personality.PROMOTEUR, label: "Une discussion orientée vers la décision et l'action." },
      { id: 'energy12-imag', type: Personality.IMAGINEUR, label: "Une conversation calme et profonde, où on prend le temps de vraiment réfléchir." }
    ]
  },
  {
    id: 'energy13',
    question: "Les gens qui vous connaissent bien apprécient surtout chez vous :",
    answers: [
      { id: 'energy13-anal', type: Personality.ANALYSEUR, label: "Votre rigueur, votre logique et votre sens de responsabilité." },
      { id: 'energy13-empa', type: Personality.EMPATHIQUE, label: "Votre disponibilité, votre écoute et l'attention sincère que vous portez aux autres." },
      { id: 'energy13-pers', type: Personality.PERSÉVÉRANT, label: "Votre honnêteté, votre transparence et le fait que vous tenez toujours vos engagements." },
      { id: 'energy13-ener', type: Personality.ENERGISEUR, label: "Votre enthousiasme et votre capacité à rendre les moments vivants et stimulants." },
      { id: 'energy13-prom', type: Personality.PROMOTEUR, label: "Votre efficacité et votre capacité à obtenir des résultats." },
      { id: 'energy13-imag', type: Personality.IMAGINEUR, label: "Votre recul, votre profondeur et la qualité de vos réflexions." }
    ]
  },
  {
    id: 'energy14',
    question: "Quand une discussion en groupe traîne en longueur sans aboutir, vous :",
    answers: [
      { id: 'energy14-anal', type: Personality.ANALYSEUR, label: "Proposez de structurer les options pour clarifier et avancer." },
      { id: 'energy14-empa', type: Personality.EMPATHIQUE, label: "Vous assurez que tout le monde a pu s'exprimer avant de conclure." },
      { id: 'energy14-pers', type: Personality.PERSÉVÉRANT, label: "Exprimez clairement ce que vous pensez qu'il faudrait décider." },
      { id: 'energy14-ener', type: Personality.ENERGISEUR, label: "Relancez l'énergie du groupe — une blague, une interpellation, un changement de rythme." },
      { id: 'energy14-prom', type: Personality.PROMOTEUR, label: "Tranchez ou proposez une action concrète pour débloquer la situation." },
      { id: 'energy14-imag', type: Personality.IMAGINEUR, label: "Décrochez mentalement en attendant que cela se règle." }
    ]
  },
  {
    id: 'energy15',
    question: "Face à un nouveau projet ou défi, votre premier réflexe est :",
    answers: [
      { id: 'energy15-anal', type: Personality.ANALYSEUR, label: "Clarifier les objectifs, vérifier les informations disponibles et organiser les étapes." },
      { id: 'energy15-empa', type: Personality.EMPATHIQUE, label: "Identifier les personnes impliquées et comprendre ce qu'elles attendent." },
      { id: 'energy15-pers', type: Personality.PERSÉVÉRANT, label: "Vérifier que le projet est aligné avec vos valeurs et ce en quoi vous croyez." },
      { id: 'energy15-ener', type: Personality.ENERGISEUR, label: "Trouver ce qui rend le projet stimulant et lui donner de l'élan dès le départ." },
      { id: 'energy15-prom', type: Personality.PROMOTEUR, label: "Repérer rapidement les enjeux et les opportunités à ne pas rater." },
      { id: 'energy15-imag', type: Personality.IMAGINEUR, label: "Prendre un temps de réflexion seul avant de vous engager." }
    ]
  },
  {
    id: 'energy16',
    question: "Quand quelqu'un vous demande quelque chose que vous ne pouvez vraiment pas tenir, vous :",
    answers: [
      { id: 'energy16-anal', type: Personality.ANALYSEUR, label: "Expliquez clairement pourquoi ce n'est pas possible, avec des arguments précis." },
      { id: 'energy16-empa', type: Personality.EMPATHIQUE, label: "Cherchez un compromis qui satisfait l'autre sans vous mettre sous pression." },
      { id: 'energy16-pers', type: Personality.PERSÉVÉRANT, label: "Maintenez votre position — vous ne ferez pas quelque chose de mal fait sous la pression." },
      { id: 'energy16-ener', type: Personality.ENERGISEUR, label: "Réagissez spontanément et exprimez votre point de vue sans réfléchir." },
      { id: 'energy16-prom', type: Personality.PROMOTEUR, label: "Acceptez le défi et cherchez un moyen d'y arriver coûte que coûte." },
      { id: 'energy16-imag', type: Personality.IMAGINEUR, label: "Demandez un temps de réflexion avant de vous engager." }
    ]
  },
  {
    id: 'energy17',
    question: "Quand quelqu'un de votre entourage répète la même erreur, vous :",
    answers: [
      { id: 'energy17-anal', type: Personality.ANALYSEUR, label: "Cherchez à comprendre pourquoi cela se reproduit et proposez une approche concrète." },
      { id: 'energy17-empa', type: Personality.EMPATHIQUE, label: "Essayez d'abord de comprendre ce qu'il vit — il y a sûrement une raison." },
      { id: 'energy17-pers', type: Personality.PERSÉVÉRANT, label: "Lui rappelez clairement ce qui vous paraît acceptable ou non." },
      { id: 'energy17-ener', type: Personality.ENERGISEUR, label: "Abordez le sujet directement pour faire avancer la situation." },
      { id: 'energy17-prom', type: Personality.PROMOTEUR, label: "Fixez clairement ce que vous attendez — vous voulez des changements concrets." },
      { id: 'energy17-imag', type: Personality.IMAGINEUR, label: "Avez du mal à aborder le sujet directement et attendez le bon moment." }
    ]
  },
  {
    id: 'energy18',
    question: "Quand vous donnez des instructions à quelqu'un, vous :",
    answers: [
      { id: 'energy18-anal', type: Personality.ANALYSEUR, label: "Expliquez précisément ce que vous attendez, comment et pour quand." },
      { id: 'energy18-empa', type: Personality.EMPATHIQUE, label: "Prenez le temps de vous assurer que la personne a bien compris et se sent à l'aise." },
      { id: 'energy18-pers', type: Personality.PERSÉVÉRANT, label: "Insistez sur pourquoi c'est important et ce que cela représente." },
      { id: 'energy18-ener', type: Personality.ENERGISEUR, label: "Mettez de l'énergie pour que la personne ait envie de s'y mettre." },
      { id: 'energy18-prom', type: Personality.PROMOTEUR, label: "Donnez le résultat attendu et laissez la personne se débrouiller." },
      { id: 'energy18-imag', type: Personality.IMAGINEUR, label: "Expliquez en laissant beaucoup d'autonomie, sans trop cadrer." }
    ]
  },
  {
    id: 'energy19',
    question: "Quand quelque chose que vous avez organisé déraille à cause d'imprévus, vous :",
    answers: [
      { id: 'energy19-anal', type: Personality.ANALYSEUR, label: "Reprenez le fil — vous identifiez ce qui a cloché et réorganisez méthodiquement." },
      { id: 'energy19-empa', type: Personality.EMPATHIQUE, label: "Prenez soin des personnes impliquées — vous vérifiez que tout le monde va bien et remontez le moral." },
      { id: 'energy19-pers', type: Personality.PERSÉVÉRANT, label: "Vérifiez si les engagements pris envers les autres peuvent encore être tenus." },
      { id: 'energy19-ener', type: Personality.ENERGISEUR, label: "Improvisez — vous trouvez une alternative dans l'instant et rebondissez sans vous accrocher au plan initial." },
      { id: 'energy19-prom', type: Personality.PROMOTEUR, label: "Passez en mode solution sans vous attarder sur les causes — il faut avancer." },
      { id: 'energy19-imag', type: Personality.IMAGINEUR, label: "Prenez du recul en silence pour comprendre ce qui s'est vraiment passé, avant de réagir." }
    ]
  },
  {
    id: 'energy20',
    question: "Ce que vous supportez vraiment mal, c'est :",
    answers: [
      { id: 'energy20-anal', type: Personality.ANALYSEUR, label: "L'imprécision, les informations fausses ou le travail bâclé." },
      { id: 'energy20-empa', type: Personality.EMPATHIQUE, label: "Le manque de considération ou la froideur dans les relations." },
      { id: 'energy20-pers', type: Personality.PERSÉVÉRANT, label: "Qu'on vous demande d'agir contre vos valeurs ou vos principes." },
      { id: 'energy20-ener', type: Personality.ENERGISEUR, label: "La rigidité et les règles qui empêchent toute adaptation." },
      { id: 'energy20-prom', type: Personality.PROMOTEUR, label: "L'indécision et les gens qui n'avancent jamais." },
      { id: 'energy20-imag', type: Personality.IMAGINEUR, label: "Qu'on envahisse votre espace ou qu'on vous sollicite sans arrêt." }
    ]
  },
  {
    id: 'phase21',
    question: "En ce moment, ce qui vous motive le plus c'est :",
    answers: [
      { id: 'phase21-anal', type: Personality.ANALYSEUR, label: "Qu'on reconnaisse la qualité et la rigueur de ce que vous faites." },
      { id: 'phase21-empa', type: Personality.EMPATHIQUE, label: "Qu'on vous accorde de l'attention et de la chaleur humaine." },
      { id: 'phase21-pers', type: Personality.PERSÉVÉRANT, label: "Qu'on respecte vos opinions et ce en quoi vous croyez." },
      { id: 'phase21-ener', type: Personality.ENERGISEUR, label: "Avoir de la variété et de l'imprévu — des journées qui ne se ressemblent pas." },
      { id: 'phase21-prom', type: Personality.PROMOTEUR, label: "Relever des défis et voir les résultats de vos efforts." },
      { id: 'phase21-imag', type: Personality.IMAGINEUR, label: "Avoir des moments de calme et de concentration profonde." }
    ]
  },
  {
    id: 'phase22',
    question: "La personne qui vous inspire le plus est quelqu'un qui :",
    answers: [
      { id: 'phase22-anal', type: Personality.ANALYSEUR, label: "Maîtrise son sujet, pense avec clarté et s'appuie sur les faits." },
      { id: 'phase22-empa', type: Personality.EMPATHIQUE, label: "Est vraiment à l'écoute et prend soin des gens autour d'elle." },
      { id: 'phase22-pers', type: Personality.PERSÉVÉRANT, label: "Agit selon ses convictions et reste fidèle à ses valeurs en toutes circonstances." },
      { id: 'phase22-ener', type: Personality.ENERGISEUR, label: "Est spontané, créatif et apporte de l'énergie partout où il passe." },
      { id: 'phase22-prom', type: Personality.PROMOTEUR, label: "Obtient des résultats, prend des risques et entraîne les autres." },
      { id: 'phase22-imag', type: Personality.IMAGINEUR, label: "Observe, réfléchit en profondeur et partage une vision qui dépasse l'immédiat." }
    ]
  },
  {
    id: 'phase23',
    question: "La relation qui vous pèse le plus en ce moment, c'est :",
    answers: [
      { id: 'phase23-anal', type: Personality.ANALYSEUR, label: "Celle où l'autre est flou, peu fiable, ou ne reconnaît pas ce que vous apportez." },
      { id: 'phase23-empa', type: Personality.EMPATHIQUE, label: "Celle où vous vous sentez ignoré ou pas vraiment considéré." },
      { id: 'phase23-pers', type: Personality.PERSÉVÉRANT, label: "Celle où vos valeurs ou vos principes sont remis en question." },
      { id: 'phase23-ener', type: Personality.ENERGISEUR, label: "Celle où l'ambiance est trop rigide et trop sérieuse." },
      { id: 'phase23-prom', type: Personality.PROMOTEUR, label: "Celle où l'autre freine votre élan, avance trop lentement ou bloque vos projets." },
      { id: 'phase23-imag', type: Personality.IMAGINEUR, label: "Celle où l'autre est trop présent ou trop demandeur." }
    ]
  },
  {
    id: 'phase24',
    question: "Ce dont vous avez le plus besoin en ce moment, c'est :",
    answers: [
      { id: 'phase24-anal', type: Personality.ANALYSEUR, label: "Qu'on reconnaisse la qualité et le sérieux de ce que vous faites." },
      { id: 'phase24-empa', type: Personality.EMPATHIQUE, label: "Qu'on vous apprécie pour ce que vous êtes, pas seulement pour ce que vous faites." },
      { id: 'phase24-pers', type: Personality.PERSÉVÉRANT, label: "Qu'on respecte vos convictions et ce en quoi vous croyez." },
      { id: 'phase24-ener', type: Personality.ENERGISEUR, label: "De la variété et de la spontanéité — des contextes nouveaux, pas toujours la même chose." },
      { id: 'phase24-prom', type: Personality.PROMOTEUR, label: "Des défis concrets, de l'adrénaline et des résultats visibles." },
      { id: 'phase24-imag', type: Personality.IMAGINEUR, label: "Du calme et du temps pour réfléchir sans être sollicité." }
    ]
  },
  {
    id: 'phase25',
    question: "Quand quelqu'un remet en question quelque chose que vous avez fait ou dit, vous :",
    answers: [
      { id: 'phase25-anal', type: Personality.ANALYSEUR, label: "Expliquez votre raisonnement point par point — vous voulez qu'on comprenne votre logique." },
      { id: 'phase25-empa', type: Personality.EMPATHIQUE, label: "Vous remettez en question sur le plan personnel — vous vous demandez si vous avez blessé ou déçu." },
      { id: 'phase25-pers', type: Personality.PERSÉVÉRANT, label: "Défendez fermement votre position — vous êtes convaincu d'avoir raison." },
      { id: 'phase25-ener', type: Personality.ENERGISEUR, label: "Réagissez à chaud et montrez clairement que vous n'acceptez pas cette remise en question." },
      { id: 'phase25-prom', type: Personality.PROMOTEUR, label: "Retournez la situation — vous trouvez rapidement quelque chose à lui reprocher." },
      { id: 'phase25-imag', type: Personality.IMAGINEUR, label: "Vous refermez sur vous-même et attendez que cela se règle sans vous." }
    ]
  },
  {
    id: 'phase26',
    question: "Ce qui vous donne le plus d'énergie en ce moment, c'est :",
    answers: [
      { id: 'phase26-anal', type: Personality.ANALYSEUR, label: "Faire quelque chose avec soin dont vous pouvez être fier." },
      { id: 'phase26-empa', type: Personality.EMPATHIQUE, label: "Les moments où vous vous sentez vraiment en lien avec les autres." },
      { id: 'phase26-pers', type: Personality.PERSÉVÉRANT, label: "Le sentiment d'agir selon vos valeurs et de contribuer à quelque chose de juste." },
      { id: 'phase26-ener', type: Personality.ENERGISEUR, label: "Les situations imprévues et les rencontres qui vous sortent de la routine." },
      { id: 'phase26-prom', type: Personality.PROMOTEUR, label: "Gagner, réussir des défis et avancer vers vos objectifs." },
      { id: 'phase26-imag', type: Personality.IMAGINEUR, label: "Les moments de calme et de concentration profonde." }
    ]
  },
  {
    id: 'phase27',
    question: "Quand vous êtes débordé ou sous pression, vous avez tendance à :",
    answers: [
      { id: 'phase27-anal', type: Personality.ANALYSEUR, label: "Tout vérifier vous-même et ne plus faire confiance aux autres." },
      { id: 'phase27-empa', type: Personality.EMPATHIQUE, label: "En faire trop pour les autres et devenir envahissant sans le vouloir." },
      { id: 'phase27-pers', type: Personality.PERSÉVÉRANT, label: "Ne plus écouter et tenter d'imposer votre point de vue à tout prix." },
      { id: 'phase27-ener', type: Personality.ENERGISEUR, label: "Rejeter la faute sur les autres — c'est leur problème, pas le vôtre." },
      { id: 'phase27-prom', type: Personality.PROMOTEUR, label: "Arranger la situation pour avancer dans votre sens." },
      { id: 'phase27-imag', type: Personality.IMAGINEUR, label: "Vous renfermer et attendre que quelqu'un prenne les rênes à votre place." }
    ]
  },
  {
    id: 'phase28',
    question: "Quand vous avez l'impression de ne pas être reconnu à votre juste valeur, vous :",
    answers: [
      { id: 'phase28-anal', type: Personality.ANALYSEUR, label: "Redoublez d'efforts pour prouver ce dont vous êtes capable." },
      { id: 'phase28-empa', type: Personality.EMPATHIQUE, label: "Vous sentez rejeté et cela vous affecte profondément." },
      { id: 'phase28-pers', type: Personality.PERSÉVÉRANT, label: "Devenez méfiant et suspicieux envers ceux qui ne vous reconnaissent pas." },
      { id: 'phase28-ener', type: Personality.ENERGISEUR, label: "Vous dites que les autres ne méritent pas votre investissement." },
      { id: 'phase28-prom', type: Personality.PROMOTEUR, label: "Cherchez à vous imposer par d'autres moyens." },
      { id: 'phase28-imag', type: Personality.IMAGINEUR, label: "Vous refermez sur vous-même et attendez que cela passe." }
    ]
  },
  {
    id: 'phase29',
    question: "Pour vous, une bonne relation — que ce soit au travail ou dans la vie — repose avant tout sur :",
    answers: [
      { id: 'phase29-anal', type: Personality.ANALYSEUR, label: "La confiance que l'autre vous accorde et la reconnaissance de ce que vous apportez." },
      { id: 'phase29-empa', type: Personality.EMPATHIQUE, label: "La chaleur humaine et l'attention sincère portée à ce que vous ressentez." },
      { id: 'phase29-pers', type: Personality.PERSÉVÉRANT, label: "Le partage de valeurs communes et une honnêteté totale." },
      { id: 'phase29-ener', type: Personality.ENERGISEUR, label: "La liberté de fonctionner à votre rythme, avec de la souplesse et de la spontanéité." },
      { id: 'phase29-prom', type: Personality.PROMOTEUR, label: "L'excitation de construire quelque chose ensemble et de repousser vos limites." },
      { id: 'phase29-imag', type: Personality.IMAGINEUR, label: "Le respect de votre espace et de votre besoin de tranquillité." }
    ]
  },
  {
    id: 'phase30',
    question: "Pour moi, ce questionnaire est avant tout :",
    answers: [
      { id: 'phase30-anal', type: Personality.ANALYSEUR, label: "Un outil utile — je peux mieux comprendre pour m'améliorer." },
      { id: 'phase30-empa', type: Personality.EMPATHIQUE, label: "Une façon de voir comment je peux mieux fonctionner et m'entendre avec les autres." },
      { id: 'phase30-pers', type: Personality.PERSÉVÉRANT, label: "Une démarche qui fait sens — j'ai besoin que les choses aient du fond et de l'utilité." },
      { id: 'phase30-ener', type: Personality.ENERGISEUR, label: "Une expérience originale et plutôt amusante." },
      { id: 'phase30-prom', type: Personality.PROMOTEUR, label: "Une occasion de mieux se vendre et de tirer parti de ses points forts." },
      { id: 'phase30-imag', type: Personality.IMAGINEUR, label: "Un moment d'introspection - c'est occasion de vraiment réfléchir à qui on est, en profondeur." }
    ]
  }
];
