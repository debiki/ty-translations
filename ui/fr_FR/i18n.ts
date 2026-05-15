/// <reference path="../../client/app-slim/translations.d.ts"/>

// Note:
// - If the first char in the field name is Uppercase, then the
//   textual value also starts with an Uppercase letter.
//   E.g. `Close: "Close"`, and `close: "close"`.
// - The text value of a field that ends with ...Q, ends with ?. E.g. `DeleteQ: "Delete?"`.
// - The text value of a field that ends with ...C, ends with :. E.g. `PasswordC: "Password:"`.
// - If the field ends with an N, then it's a noun (not a verb). Example:
//   In English, the word "chat" is both a noun and a verb, but in other languages,
//   two different words might be needed — and then there're two fields for the translators
//   `ChatN: "(noun here)"` and `ChatV: "(verb here)"`.
// - If the field ends with an V, then it's a verb (not a noun)

var t: TalkyardTranslations;

var t_fr_FR: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Actif",
  Activity: "Activité",
  Add: "Ajouter",
  AddingDots: "Ajout en cours ...",
  AddComment: "Ajouter un commentaire",
  Admin: "Admin",
  AdvSearch: "Recherche avancée",
  Anonym: "Anonyme",
  Away: "Absent",
  Back: "Retour",
  BlogN: "Blog",
  Bookmarks: "Signets",
  Cancel: "Annuler",
  Categories: "Catégories",
  Category: "Catégorie",
  ChangeV: "Changer",
  ClickToShow: "Cliquer pour afficher",
  ChangeDots: "Changer ...",
  ChatN: "Chat",
  Chatting: "Discussion",
  CheckYourEmail: "Vérifiez vos e-mails",
  Close: "Fermer",
  closed: "fermé",
  comments: "commentaires",   // as in:  "123 comments"
  Continue: "Continuer",
  Created: "Créé",
  Delete: "Supprimer",
  Deleted: "Supprimé",
  DirectMessage: "Message direct",
  Discussion: "Discussion",
  discussion: "discussion",
  done: "terminé",
  EditV: "Modifier",
  Editing: "Modification",
  EmailC: "E-mail : ",
  EmailAddress: "Adresse e-mail",
  EmailAddresses: "Adresses e-mail",
  EmailSentD: "E-mail envoyé.",
  Forum: "Forum",
  GetNotifiedAbout: "Être notifié de",
  GroupsC: "Groupes :",
  Hide: "Masquer",
  Home: "Accueil",
  Idea: "Idée",
  Join: "Rejoindre",
  KbdShrtcsC: "Raccourcis clavier : ",
  Loading: "Chargement...",
  LoadMore: "Charger plus ...",
  LogIn: "Se connecter",
  LoggedInAs: "Connecté en tant que ",
  LogOut: "Se déconnecter",
  Maybe: "Peut-être",
  Manage: "Gérer",
  Members: "Membres",
  MessageN: "Message",
  MoreDots: "Plus...",
  Move: "Déplacer",
  Name: "Nom",
  NameC: "Nom :",
  NewTopic: "Nouveau sujet",
  NoCancel: "Non, annuler",
  Notifications: "Notifications",
  NotImplemented: "(Non implémenté)",
  NotYet: "Pas encore",
  NoTitle: "Sans titre",
  NoTopics: "Aucun sujet.",
  Okay: "OK",
  OkayDots: "OK ...",
  Online: "En ligne",
  onePerLine: "un par ligne",
  PreviewV: "Aperçu",
  Problem: "Problème",
  progressN: "progression",
  Question: "Question",
  Recent: "Récent",
  Remove: "Retirer",
  Reopen: "Rouvrir",
  ReplyV: "Répondre",
  Replying: "Réponse en cours",
  Replies: "Réponses",
  replies: "réponses",
  Save: "Enregistrer",
  SavingDots: "Enregistrement ...",
  SavedDot: "Enregistré.",
  Search: "Rechercher",
  SendMsg: "Envoyer le message",
  ShowPreview: "Afficher l'aperçu",
  SignUp: "Rejoindre",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Solution",
  started: "commencé",
  Summary: "Résumé",
  Submit: "Soumettre",
  Tag: "Étiquette",
  Tags: "Étiquettes",
  Tools: "Outils",
  Topics: "Sujets",
  TopicTitle: "Titre du sujet",
  TopicType: "Type de sujet",
  UploadingDots: "Téléchargement...",
  Username: "Nom d'utilisateur",
  Users: "Utilisateurs",
  Welcome: "Bienvenue",
  Wiki: "Wiki",
  Yes: "Oui",
  YesBye: "Oui, au revoir",
  YesDoThat: "Oui, fais ça",
  You: "Vous",
  you: "vous",

  // Trust levels.
  Guest:  "Invité",
  NewMember: "Nouveau membre",
  BasicMember: "Membre de base",
  FullMember: "Membre complet",
  TrustedMember: "Membre de confiance",
  RegularMember: "Habitué de confiance",
  CoreMember: "Membre principal",

  // Periods.
  PastDay: "Dernier jour",
  PastWeek: "Dernière semaine",
  PastMonth: "Dernier mois",
  PastQuarter: "Dernier trimestre",
  PastYear: "Dernière année",
  AllTime: "Depuis le début",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mois",  // months
  daysLtr: "j",      // days
  hoursLtr: "h",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "il y a 1 jour" : `il y a ${numDays} jours`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "il y a 1 heure" : `il y a ${numHours} heures`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "il y a 1 minute" : `il y a ${numMins} minutes`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "il y a 1 seconde" : `il y a ${numSecs} secondes`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail requis",
    NoSpcs: "Pas d'espaces s'il vous plaît",
    InvldAddr: "Adresse e-mail non valide",
    NoBadChrs: "Pas de caractères spéciaux s'il vous plaît",

    // Full name input field:
    NotOnlSpcs: "Pas seulement des espaces s'il vous plaît",
    NoAt: "Pas de @ s'il vous plaît",

    // Username input field:
    NoDash: "Pas de tirets (-) s'il vous plaît",
    DontInclAt: "N'incluez pas le @",
    StartEndLtrDgt: "Commencez et terminez par une lettre ou un chiffre",
    OnlLtrNumEtc: "Uniquement des lettres (a-z, A-Z), des chiffres et des _ (underscore)",
    // This shown just below the username input:
    UnUnqShrt_1: "Votre ",
    UnUnqShrt_2: "@nom d'utilisateur",
    UnUnqShrt_3: ", unique et court",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Doit contenir au moins ${minLength} caractères`,
    TooLong: (maxLength: number) => `Trop long. Doit contenir au plus ${maxLength} caractères`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Chaque message",
    EveryPostInTopic: "Vous serez notifié de toutes les nouvelles réponses à ce sujet.",
    EveryPostInCat: "Vous serez notifié de tous les nouveaux sujets et réponses dans cette catégorie.",
    EveryPostInTopicsWithTag: "Vous serez notifié des nouveaux sujets portant cette étiquette, et de toutes les réponses à ces sujets.",
    EveryPostWholeSite: "Vous serez notifié de tous les nouveaux sujets et réponses, partout.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nouveaux sujets",
    NewTopicsInCat: "Vous serez notifié des nouveaux sujets dans cette catégorie.",
    NewTopicsWithTag: "Vous serez notifié des nouveaux sujets portant cette étiquette.",
    NewTopicsWholeSite: "Vous serez notifié des nouveaux sujets, partout.",

    Tracking: "Suivi",

    Normal: "Normal",
    NormalDescr: "Vous serez notifié si quelqu'un vous parle, également indirectement, par ex. une " +
        "réponse à une réponse qui vous est destinée.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Discret",
    HushedDescr: "Vous ne serez notifié que si quelqu'un vous parle directement.",

    Muted: "Sourdine",
    MutedTopic: "Aucune notification.",
  },


  // Forum intro text

  fi: {
    Edit: "Modifier",
    Hide_1: "Masquer",
    Hide_2: ", cliquez sur ",
    Hide_3: " pour rouvrir",
  },


  // Forum categories

  fcs: {
    All: "Toutes", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Liste des sujets",

    // Select category dropdown

    from: "de",
    in: "dans",
    AllCats: "Toutes les catégories",

    // Topic sort order

    Active: "Actifs en premier",
    ActiveDescr: "Affiche les sujets récemment actifs en premier",

    New: "Nouveaux",
    NewDescr: "Affiche les sujets les plus récents en premier",

    Top: "Populaires",
    TopDescr: "Affiche les sujets populaires en premier",

    // Topic filter dropdown

    AllTopics: "Tous les sujets",

    ShowAllTopics: "Afficher tous les sujets",
    ShowAllTopicsDescr: "Sauf les sujets supprimés",

    WaitingTopics: "Sujets en attente",
    OnlyWaitingDescr_1: "Affiche uniquement les sujets ",
    OnlyWaitingDescr_2: "en attente ",
    OnlyWaitingDescr_3: "d'une solution ou d'être implémentés et terminés",

    YourTopics: "Vos sujets",
    AssignedToYou: "Assignés à vous",

    DeletedTopics: "Afficher supprimés",
    ShowDeleted: "Afficher supprimés",
    ShowDeletedDescr: "Affiche tous les sujets, y compris les sujets supprimés",

    // Rightmost buttons

    ViewCategories: "Voir les catégories",
    EditCat: "Modifier la catégorie",
    CreateCat: "Créer une catégorie",
    CreateTopic: "Créer un sujet",
    PostIdea: "Poster une idée",
    AskQuestion: "Poser une question",
    ReportProblem: "Signaler un problème",
    CreateMindMap: "Créer une carte mentale",
    CreatePage: "Créer une page",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Expliquer les icônes...",
    IconExplanation: "Explication des icônes :",
    ExplGenDisc: "Une discussion générale.",
    ExplQuestion: "Une question sans réponse acceptée.",
    ExplAnswer: "Une question avec une réponse acceptée.",
    ExplIdea: "Une idée / suggestion.",
    ExplProblem: "Un problème.",
    ExplPlanned: "Quelque chose que nous prévoyons de faire ou de corriger.",
    ExplDone: "Quelque chose qui a été fait ou corrigé.",
    ExplClosed: "Sujet fermé.",
    ExplPinned: "Sujet toujours listé en premier (peut-être seulement dans sa propre catégorie).",

    PopularTopicsComma: "Sujets populaires, ",
    TopFirstAllTime: "Affiche les sujets les plus populaires en premier, depuis le début.",
    TopFirstPastDay: "Affiche les sujets populaires au cours de la dernière journée.",

    CatHasBeenDeleted: "Cette catégorie a été supprimée",

    TopicsActiveFirst: "Sujets, récemment actifs en premier",
    TopicsNewestFirst: "Sujets, nouveaux en premier",

    CreatedOn: "Créé le ",
    LastReplyOn: "\nDernière réponse le ",
    EditedOn: "\nModifié le ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "a créé le sujet",
    frequentPoster: "contributeur fréquent",
    mostRecentPoster: "contributeur le plus récent",

    inC: "dans : ",

    TitleFixed: "Ceci a été corrigé",
    TitleDone: "Ceci a été fait",
    TitleStarted: "Nous avons commencé ceci",
    TitleStartedFixing: "Nous avons commencé à corriger ceci",
    TitleUnsolved: "C'est un problème non résolu",
    TitleIdea: "C'est une idée",
    TitlePlanningFix: "Nous prévoyons de corriger ceci",
    TitlePlanningDo: "Nous prévoyons de faire ceci",
    TitleChat: "C'est un canal de chat",
    TitlePrivateChat: "C'est un canal de chat privé",
    TitlePrivateMessage: "Un message privé",
    TitleInfoPage: "C'est une page d'information",
    TitleDiscussion: "Une discussion",
    IsPinnedGlobally: "\nIl a été épinglé, il est donc listé en premier.",
    IsPinnedInCat: "\nIl a été épinglé dans sa catégorie, il est donc listé en premier dans sa catégorie.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Sujets récents (ceux en attente)",
    RecentTopicsInclDel: "Sujets récents (y compris supprimés)",
    RecentTopics: "Sujets récents",
    _replies: " réponses",
    _deleted: " (supprimé)",
    _defCat: " (catégorie par défaut)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Messages récents",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " en ligne dans ce chat",    // example: "5 online in this chat"
    NumOnlForum: " en ligne dans ce forum",

    // Open left-sidebar button title.
    WatchbBtn: "Vos sujets",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Vos sujets récents, chats rejoints, messages directs",

    // Title shown on user profile pages.
    AbtUsr: "À propos de l'utilisateur",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Retour depuis le profil utilisateur",
    BackFromAdm: "Retour depuis la zone d'administration",

    // Title shown on full text search page.
    SearchPg: "Page de recherche",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Ajouter ...",
    RecentlyViewed: "Sujets consultés récemment",
    JoinedChats: "Chats rejoints",
    ChatChannels: "Canaux de chat",
    CreateChat: "Créer un canal de chat",
    DirectMsgs: "Messages directs",
    NoChats: "Aucun",    // meaning: "No chat messages"
    NoDirMsgs: "Aucun",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Actions du sujet",
    ViewPeopleHere: "Voir les personnes ici",
    ViewAddRemoveMembers: "Voir / ajouter / retirer des membres",
    ViewChatMembers: "Voir les membres du chat",
    EditChat: "Modifier la description du chat",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Quitter ce chat",
    LeaveThisCommunity: "Quitter cette communauté",
    JoinThisCommunity: "Rejoindre cette communauté",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Commentaires récents sur ce sujet :",
    NoComments: "Aucun commentaire.",

    YourBookmarks: "Vos signets :",

    UsersOnline: "Utilisateurs en ligne :",
    UsersOnlineForum: "Utilisateurs en ligne sur ce forum :",
    UsersInThisChat: "Utilisateurs dans ce chat :",
    UsersInThisTopic: "Utilisateurs sur ce sujet :",

    GettingStartedGuide: "Guide d'administration",
    AdminGuide: "Guide d'administration",
    Guide: "Guide",

    // How to hide the sidebar.
    CloseShortcutS: "Fermer (raccourci clavier : S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Ajouter plus de personnes",

    // Shown next to one's own username, in a list of users.
    thatsYou: "c'est vous",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Seulement vous, semble-t-il",
    YouAnd: "Vous et ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " personne" : " personnes";
      const have = numStrangers === 1 ? "n'est pas" : "ne sont pas";
      return numStrangers + people + " qui " + have + " connectée" + (numStrangers === 1 ? "" : "s");
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Les réponses à gauche peuvent être triées par ",
    bestFirst: "les meilleures en premier.",
    ButBelow: "Mais ci-dessous ",
    insteadBy: " les mêmes réponses sont à l'inverse triées par ",
    newestFirst: "les plus récentes en premier.",

    SoIfLeave: "Donc si vous partez et revenez ici plus tard, vous trouverez ci-dessous ",
    allNewReplies: "toutes les nouvelles réponses.",
    Click: "Cliquez sur",
    aReplyToReadIt: " une réponse ci-dessous pour la lire — car seul un extrait est affiché ci-dessous.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Cliquez pour changer le statut",
    ClickToViewAnswer: "Cliquez pour voir la réponse",
    ViewAnswer: "Voir la réponse",
    ChangeStatusC: "Changer le statut en :",
    ChangeCatC: "Changer la catégorie :",
    ChangeTopicTypeC: "Changer le type de sujet :",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "une question",
    hasAccptAns: "a une réponse acceptée",
    aProblem: "un problème",
    planToFix: "prévu de corriger",
    anIdea: "une idée",
    planToDo: "prévu de faire",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Ce formulaire a été ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "fermé ; vous ne pouvez plus le remplir et le poster.",

    ThisTopicClosed_1: "Ce sujet a été ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Vous pouvez toujours poster des commentaires.",

    ThisPageDeleted: "Cette page a été supprimée",
    CatDeldPageToo: "Catégorie supprimée, cette page a donc été supprimée également",

    ThreadDeld: "Fil de discussion supprimé",
    CmntDeld: "Commentaire supprimé",
    PostDeld: "Message supprimé",
    DiscDeld: "Discussion supprimée",
    PageDeld: "Page supprimée",
    PagePendAppr: "Page en attente d'approbation",
    TitlePendAppr: "Titre en attente d'approbation",
    TextPendingApproval: "Texte en attente d'approbation",

    TooltipQuestClosedNoAnsw: "Cette question a été fermée sans aucune réponse acceptée.",
    TooltipTopicClosed: "Ce sujet est fermé.",

    TooltipQuestSolved: "C'est une question résolue",
    TooltipQuestUnsolved: "C'est une question non résolue",

    StatusDone: "Terminé",
    TooltipProblFixed: "Ceci a été corrigé",
    TooltipDone: "Ceci a été fait",

    StatusStarted: "Commencé",
    TooltipFixing: "Nous avons commencé à corriger ceci",
    TooltipImplementing: "Nous avons commencé à faire ceci",

    StatusPlanned: "Prévu",
    TooltipProblPlanned: "Nous prévoyons de corriger ceci",
    TooltipIdeaPlanned: "Nous prévoyons de faire ceci",

    StatusNew: "Nouveau",
    StatusNewDtl: "Nouveau sujet, en cours de discussion",
    TooltipUnsProbl: "C'est un problème non résolu",
    TooltipIdea: "C'est une idée",

    TooltipPersMsg: "Message personnel",
    TooltipChat: "# signifie Canal de Chat",
    TooltipPrivChat: "C'est un canal de chat privé",

    TooltipPinnedGlob: "\nÉpinglé globalement.",
    TooltipPinnedCat: "\nÉpinglé dans cette catégorie.",

    SolvedClickView_1: "Résolu dans le message n°",
    SolvedClickView_2: ", cliquez pour afficher",

    PostHiddenClickShow: "Message masqué ; cliquez pour afficher",
    ClickSeeMoreRepls: "Afficher plus de réponses",
    ClickSeeMoreComments: "Afficher plus de commentaires",
    ClickSeeThisComment: "Cliquez pour afficher ce commentaire",
    clickToShow: "cliquer pour afficher",

    ManyDisagree: "Beaucoup ne sont pas d'accord avec ceci :",
    SomeDisagree: "Certains ne sont pas d'accord avec ceci :",

    PendAppr: "En attente d'approbation",
    CmtPendAppr: "Commentaire en attente d'approbation, posté ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Votre" : "Le") + " commentaire ci-dessous est en attente d'approbation.",

    _and: " et",

    repliesTo: "réponses à",
    InReplyTo: "En réponse à",
    YourReplyTo: "Votre réponse à ",
    YourChatMsg: "Votre message de chat : ",
    YourDraft: "Votre brouillon",
    YourEdits: "Vos modifications : ",
    YourProgrNoteC: "Votre note de progression :",
    aProgrNote: "une note de progression : ",

    ReplyingToC: "Répondre à :",
    ScrollToPrevw_1: "Faire défiler jusqu'à ",
    ScrollToPrevw_2: "l'aperçu",

    UnfinEdits: "Modifications non terminées",
    ResumeEdting: "Reprendre la modification",
    DelDraft: "Supprimer le brouillon",

    ClickViewEdits: "Cliquez pour voir les anciennes modifications",

    By: "Par ", // ... someones name

    // Discussion ...
    aboutThisIdea: "sur comment et si nous devons réaliser cette idée",
    aboutThisProbl: "sur comment et si nous devons corriger ceci",

    AddProgrNote: "Ajouter une note de progression",
    // Progress ...
    withThisIdea: "sur la réalisation de cette idée",
    withThisProbl: "sur la résolution de ce problème",
    withThis: "sur la réalisation de ceci",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notifications sur ce sujet :",

    // If is a direct message topic, members listed below this text.
    Msg: "Message",

    SmrzRepls: "Résumer les réponses",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Il y a ${numReplies} réponses. Temps de lecture estimé : ${minutes} minutes`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Terminé. Résumé de ${numSummarized} réponses, sur les ${numShownBefore} réponses précédemment affichées.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Fermer le sujet",
    CloseOwnQuestionTooltip: "Fermez cette question si vous n'avez plus besoin d'une réponse.",
    CloseOthersQuestionTooltip: "Fermez cette question si elle n'a pas besoin d'une réponse, par ex. si " +
        "elle est hors sujet ou déjà répondue dans un autre sujet.",
    CloseToDoTooltip: "Fermez ce To-Do s'il n'a pas besoin d'être fait ou corrigé.",
    CloseTopicTooltip: "Fermez ce sujet s'il n'a pas besoin de considération supplémentaire.",

    AcceptBtnExpl: "Accepter ceci comme la réponse à la question ou au problème",
    SolutionQ: "Solution ?",
    ClickUnaccept: "Cliquez pour ne plus accepter cette réponse",
    PostAccepted: "Ce message a été accepté comme la réponse",

    NumLikes: (num: number) => num === 1 ? "1 J'aime" : num + " J'aime",
    NumDisagree: (num: number) => num + " Pas d'accord",
    NumBury: (num: number) => num === 1 ? "1 Enterré" : num + " Enterrés",
    NumUnwanted: (num: number) => num === 1 ? "1 Indésirable" : num + " Indésirables",

    MoreVotes: "Plus de votes...",
    LikeThis: "Aimer ceci",
    LinkToPost: "Lien vers ce message",
    Report: "Signaler",
    ReportThisPost: "Signaler ce message",
    Admin: "Admin",
    DiscIx: "Index des discussions",

    Disagree: "Pas d'accord",
    DisagreeExpl: "Cliquez ici pour exprimer votre désaccord avec ce message, ou pour avertir les autres d'erreurs factuelles.",
    Bury: "Enterrer",
    BuryExpl: "Cliquez pour trier les autres messages avant celui-ci. Seul le personnel du forum peut voir votre vote.",
    Unwanted: "Indésirable",
    UnwantedExpl: "Si vous ne voulez pas de ce message sur ce site. Cela réduirait la confiance que j'ai " +
            "dans l'auteur du message. Seul le personnel du forum peut voir votre vote.",

    AddTags: "Ajouter/retirer des étiquettes",
    UnWikify: "Dés-Wikifier",
    Wikify: "Wikifier",
    PinDeleteEtc: "Épingler / Supprimer / Catégorie ...",
  },


  // Share dialog

  sd: {
    Copied: "Copié.",
    CtrlCToCopy: "Appuyez sur CTRL+C pour copier.",
    ClickToCopy: "Cliquez pour copier le lien.",
  },


  // Chat

  c: {
    About_1: "C'est le canal de chat ",
    About_2: ", créé par ",
    ScrollUpViewComments: "Faites défiler vers le haut pour voir les anciens commentaires",
    Purpose: "But :",
    MessageDeleted: "(Message supprimé)",
    JoinThisChat: "Rejoindre ce chat",
    PostMessage: "Poster un message",
    AdvancedEditor: "Éditeur avancé",
    TypeTitle: "Tapez un titre — de quoi parle ce chat, en quelques mots ?",
    TypePurpose: "Tapez un but — peut être plus long que le titre, plus descriptif.",
    TypeHere: "Tapez ici. Vous pouvez utiliser Markdown et HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Nécessite une révision ",
    AdminHelp: "Aide admin ",
    StaffHelp: "Aide staff ",
    DraftsEtc: "Brouillons, signets, tâches",
    MoreNotfs: "Voir toutes les notifications",
    DismNotfs: "Tout marquer comme lu",
    ViewProfile: "Voir votre profil",
    ViewGroups: "Voir les groupes",
    LogOut: "Se déconnecter",
    UnhideHelp: "Réafficher les messages d'aide",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Faire défiler jusqu'à :",
    Scroll: "Défiler",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Retour (B)",
    BackExpl: "Revenir à votre position précédente sur cette page",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Haut de page",
    PgTopHelp: "Aller en haut de la page. Raccourci clavier : 1",
    Repl: "Réponses",
    ReplHelp: "Aller à la section Réponses. Raccourci : 2",
    Progr: "Progression",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Aller à la section Progression. Raccourci : 3",
    PgBtm: "Bas de page",
    Btm: "Bas",
    BtmHelp: "Aller en bas de la page. Raccourci : 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " et ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " pour revenir en arrière",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Sélectionner des utilisateurs",
    AddUsers: "Ajouter des utilisateurs",
  },


  // About user dialog

  aud: {
    IsMod: "Est modérateur.",
    IsAdm: "Est administrateur.",
    IsDeld: "Est désactivé ou supprimé.",
    ThisIsGuest: "C'est un utilisateur invité, il pourrait s'agir de n'importe qui.",
    ViewInAdm: "Voir dans la zone d'administration",
    ViewProfl: "Voir le profil",
    ViewComments: "Voir d'autres commentaires",
    RmFromTpc: "Retirer du sujet",
    EmAdrUnkn: "Adresse e-mail inconnue — cet invité ne sera pas notifié des réponses.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Préférences",
    Invites: "Invitations",
    DraftsEtc: "Brouillons etc.",
    About: "À propos",
    Privacy: "Confidentialité",
    Security: "Sécurité",
    Account: "Compte",
    Interface: "Interface",

    // ----- Overview stats

    JoinedC: "Inscrit le : ",
    PostsMadeC: "Messages postés : ",
    LastPostC: "Dernier message : ",
    LastSeenC: "Vu pour la dernière fois : ",
    TrustLevelC: "Niveau de confiance : ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Télécharger une photo",
    ChangePhoto: "Changer de photo",
    ImgTooSmall: "Image petite : elle doit faire au moins 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Seuls le personnel et les membres principaux de confiance peuvent voir ceci.",
    OnlyMbrsCanSee: "Seules les personnes qui sont des membres actifs depuis un certain temps peuvent voir ceci.",
    Nothing: "Rien à afficher",
    Posts: "Messages",
    NoPosts: "Aucun message.",
    Topics: "Sujets",
    NoTopics: "Aucun sujet.",

    // ----- User status

    UserBanned: "Cet utilisateur est banni",
    UserSuspended: (dateUtc: string) => `Cet utilisateur est suspendu jusqu'au ${dateUtc} UTC`,
    ReasonC: "Raison : ",

    DeactOrDeld: "A été désactivé ou supprimé.",
    isGroup: " (un groupe)",
    isGuest: " — un utilisateur invité, pourrait être n'importe qui",
    isMod: " – modérateur",
    isAdmin: " – administrateur",
    you: "(vous)",

    // ----- Notifications page

    NoNotfs: "Aucune notification",
    NotfsToYouC: "Notifications pour vous :",
    NotfsToOtherC: (name: string) => `Notifications pour ${name} :`,
    DefNotfsSiteWide: "Notifications par défaut, pour tout le site",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "pour",

    // ----- Drafts Etc page

    NoDrafts: "Aucun brouillon",
    YourDraftsC: "Vos brouillons :",
    DraftsByC: (name: string) => `Brouillons de ${name} :`,

    // ----- Invites page

    InvitesIntro: "Ici, vous pouvez inviter des personnes à rejoindre ce site. ",
    InvitesListedBelow: "Les invitations que vous avez déjà envoyées sont listées ci-dessous.",
    NoInvites: "Vous n'avez encore invité personne.",

    InvitedEmail: "E-mail invité",
    WhoAccepted: "Membre qui a accepté",
    InvAccepted: "Invitation acceptée",
    InvSent: "Invitation envoyée",
    JoinedAlready: "Déjà inscrit",

    SendAnInv: "Inviter des personnes",
    SendInv: "Envoyer des invitations",
    SendInvExpl:
        "Nous enverrons à vos amis un court e-mail. Ils cliqueront sur un lien " +
        "pour nous rejoindre immédiatement, sans inscription requise. " +
        "Ils deviendront des membres normaux, pas des modérateurs ou des administrateurs.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Terminé. Je vais leur envoyer un e-mail.",
    NoOneToInv: "Personne à inviter.",
    InvNotfLater: "Je vous préviendrai plus tard, quand je les aurai invités.",
    AlreadyInvSendAgainQ: "Ces personnes ont déjà été invitées — peut-être souhaitez-vous les inviter à nouveau ?",
    InvErr_1: "Ceci a entraîné des ",
    InvErr_2: "erreurs",
    InvErr_3: " :",
    TheseJoinedAlrdyC: "Ces personnes ont déjà rejoint le site, je ne les ai donc pas invitées :",
    ResendInvsQ: "Renvoyer des invitations à ces personnes ? Elles ont déjà été invitées.",
    InvAgain: "Inviter à nouveau",

    // ----- Preferences, About

    AboutYou: "À propos de vous",
    WebLink: "Tout site web ou page vous appartenant.",

    NotShownCannotChange: "Non affiché publiquement. Ne peut pas être modifié.",

    // The full name or alias:
    NameOpt: "Nom (facultatif)",

    NotShown: "Non affiché publiquement.",

    // The username:
    MayChangeFewTimes: "Vous ne pouvez le changer que quelques fois.",
    notSpecified: "(non spécifié)",
    ChangeUsername_1: "Vous ne pouvez changer votre nom d'utilisateur que quelques fois.",
    ChangeUsername_2: "Le changer trop souvent peut prêter à confusion — " +
        "les autres ne sauront pas comment vous @mentionner.",

    NotfAboutAll: "Être notifié de chaque nouveau message (sauf si vous mettez le sujet ou la catégorie en sourdine)",
    NotfAboutNewTopics: "Être notifié des nouveaux sujets (sauf si vous mettez la catégorie en sourdine)",

    ActivitySummaryEmails: "E-mails de résumé d'activité",

    EmailSummariesToGroup:
        "Lorsque les membres de ce groupe ne viennent pas ici, alors, par défaut, envoyez-leur " +
        "des résumés des sujets populaires et d'autres choses.",
    EmailSummariesToMe:
        "Quand je ne viens pas ici, envoyez-moi " +
        "des résumés des sujets populaires et d'autres choses.",

    AlsoIfTheyVisit: "Leur envoyer un e-mail également s'ils viennent ici régulièrement.",
    AlsoIfIVisit: "M'envoyer un e-mail également si je viens ici régulièrement.",

    HowOftenWeSend: "À quelle fréquence devons-nous envoyer ces e-mails ?",
    HowOftenYouWant: "À quelle fréquence voulez-vous ces e-mails ?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Masquer votre activité récente pour les inconnus et les nouveaux membres ?",
    HideActivityStrangers_2: "(Mais pas pour ceux qui sont des membres actifs depuis un certain temps.)",
    HideActivityAll_1: "Masquer votre activité récente pour tout le monde ?",
    HideActivityAll_2: "(Sauf pour le personnel et les membres principaux de confiance.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Adresses e-mail",
    PrimaryDot: "Principale. ",
    VerifiedDot: "Vérifiée. ",
    NotVerifiedDot: "Non vérifiée. ",
    ForLoginWithDot: (provider: string) => `Pour connexion avec ${provider}. `,
    MakePrimary: "Rendre principale",
    AddEmail: "Ajouter une adresse e-mail",
    TypeNewEmailC: "Tapez une nouvelle adresse e-mail :",
    MaxEmailsInfo: (numMax: number) => `(Vous ne pouvez pas ajouter plus de ${numMax} adresses.)`,
    EmailAdded_1: "Ajoutée. Nous vous avons envoyé un e-mail de vérification — ",
    EmailAdded_2: "vérifiez votre boîte de réception.",
    SendVerifEmail: "Envoyer l'e-mail de vérification",

    EmailStatusExpl:
        "('Principale' signifie que vous pouvez vous connecter via cette adresse, et que nous y envoyons les notifications. " +
        "'Vérifiée' signifie que vous avez cliqué sur un lien de vérification dans un e-mail de vérification d'adresse.)",

    // Password:
    ChangePwdQ: "Changer le mot de passe ?",
    CreatePwdQ: "Créer un mot de passe ?",
    WillGetPwdRstEml: "Vous recevrez un e-mail de réinitialisation de mot de passe.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Aucun",

    // Logins:
    LoginMethods: "Méthodes de connexion",
    commaAs: ", en tant que : ",

    // One's data:
    YourContent: "Votre contenu",
    DownloadPosts: "Télécharger les messages",
    DownloadPostsHelp: "Crée un fichier JSON avec une copie des sujets et commentaires que vous avez postés.",
    DownloadPersData: "Télécharger les données personnelles",
    DownloadPersDataHelp: "Crée un fichier JSON avec une copie de vos données personnelles, par ex. votre nom " +
        "(si vous avez spécifié un nom) et votre adresse e-mail.",


    // Delete account:
    DangerZone: "Zone de danger",
    DeleteAccount: "Supprimer le compte",
    DeleteYourAccountQ:
        "Supprimer votre compte ? Nous supprimerons votre nom, oublierons votre adresse e-mail, votre mot de passe et " +
        "toutes les identités en ligne (comme la connexion Facebook ou Twitter). " +
        "Vous ne pourrez plus vous connecter. Ceci est irréversible.",
    DeleteUserQ:
        "Supprimer cet utilisateur ? Nous supprimerons le nom, oublierons l'adresse e-mail, le mot de passe et " +
        "les identités en ligne (comme la connexion Facebook ou Twitter). " +
        "L'utilisateur ne pourra plus se connecter. Ceci est irréversible.",
    YesDelete: "Oui, supprimer",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Membres du groupe",
    NoMembers: "Aucun membre.",
    MayNotListMembers: "Ne peut pas lister les membres.",
    AddMembers: "Ajouter des membres",
    BuiltInCannotModify: "C'est un groupe intégré ; il ne peut pas être modifié.",
    NumMembers: (num: number) => `${num} membres`,
    YouAreMember: "Vous êtes membre.",
    CustomGroupsC: "Groupes personnalisés :",
    BuiltInGroupsC: "Groupes intégrés :",
    DeleteGroup: "Supprimer ce groupe",
  },


  // Create user dialog

  cud: {
    CreateUser: "Créer un utilisateur",
    CreateAccount: "Créer un compte",
    EmailC: "E-mail :",
    keptPriv: "sera gardé privé",
    forNotfsKeptPriv: "pour les notifications de réponse, gardé privé",
    EmailVerifBy_1: "Votre e-mail a été vérifié par ",
    EmailVerifBy_2: ".",
    UsernameC: "Nom d'utilisateur :",
    FullNameC: "Nom complet :",
    optName: "facultatif",

    DoneLoggedIn: "Compte créé. Vous avez été connecté.",
    AlmostDone:
        "Presque terminé ! Il vous suffit de confirmer votre adresse e-mail. Nous vous avons " +
        "envoyé un e-mail. Veuillez cliquer sur le lien dans l'e-mail pour activer " +
        "votre compte. Vous pouvez fermer cette page.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Conditions et confidentialité",

    Accept_1: "Acceptez-vous nos ",
    TermsOfService: "Conditions de service",
    TermsOfUse: "Conditions d'utilisation",
    Accept_2: " et notre ",
    PrivPol: "Politique de confidentialité",
    Accept_3_User: " ?",
    Accept_3_Owner: " pour les propriétaires de sites ?",

    YesAccept: "Oui, j'accepte",
  },


  // Password input

  pwd: {
    PasswordC: "Mot de passe :",
    StrengthC: "Force : ",
    FairlyWeak: "Plutôt faible.",
    toShort: "trop court",
    TooShort: (minLength: number) => `Trop court. Doit contenir au moins ${minLength} caractères`,
    PlzInclDigit: "Veuillez inclure un chiffre ou un caractère spécial",
    TooWeak123abc: "Trop faible. N'utilisez pas de mots de passe comme '12345' or 'abcde'.",
    AvoidInclC: "Évitez d'inclure (des parties de) votre nom ou e-mail dans le mot de passe :",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Page non trouvée ou accès refusé.",

    IsImpersonating: "Vous usurpez l'identité de quelqu'un qui n'a peut-être pas accès à toutes les parties " +
        "de ce site web.",

    IfYouThinkExistsThen: "Si vous pensez que la page existe, connectez-vous en tant que personne pouvant y accéder. ",
    LoggedInAlready: "(Vous êtes déjà connecté, mais peut-être s'agit-il du mauvais compte ?) ",
    ElseGoToHome_1: "Sinon, vous pouvez ",
    ElseGoToHome_2: "aller à la page d'accueil.",

    CreateAcconut: "Créer un compte",
    ContinueWithDots: "Continuer avec ...",
    SignUp: "Rejoindre",
    LogIn: "Se connecter",
    LogInWithPwd: "Se connecter avec mot de passe",
    CreateAdmAcct: "Créer un compte administrateur :",
    AuthRequired: "Authentification requise pour accéder à ce site",
    LogInToLike: "Connectez-vous pour aimer ce message",
    LogInToSubmit: "Connectez-vous et soumettez",
    LogInToComment: "Connectez-vous pour écrire un commentaire",
    LogInToCreateTopic: "Connectez-vous pour créer un sujet",

    OrLogIn_1: "Ou ",
    OrLogIn_2: "Se connecter",
    OrLogIn_3: " à la place",

    SignUpInstead_1: "Ou ",
    SignUpInstead_2: "Créer un compte",
    SignUpInstead_3: "",

    OrTypeName_1: ", ou simplement ",
    OrTypeName_2: "tapez un nom",
    OrTypeName_3: "",

    OrCreateAcctHere: "Ou créez un compte :",
    OrTypeName: "Ou tapez votre nom :",
    OrLogIn: "Ou connectez-vous :",
    YourNameQ: "Votre nom ?",

    BadCreds: "Nom d'utilisateur ou mot de passe incorrect",

    UsernameOrEmailC: "Nom d'utilisateur ou e-mail :",
    PasswordC: "Mot de passe :",
    ForgotPwd: "Avez-vous oublié votre mot de passe ?",

    NoPwd: "Vous n'avez pas encore choisi de mot de passe.",
    CreatePwd: "Créer un mot de passe",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Dites-nous ce qui vous inquiète.",
    ThanksHaveReported: "Merci. Vous l'avez signalé. Le personnel du forum va y jeter un œil.",
    ReportComment: "Signaler le commentaire",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Ce message contient des données personnelles, par exemple le vrai nom de quelqu'un.",
    OptOffensive: "Ce message contient un contenu offensant ou abusif.",
    OptSpam: "Ce message est une publicité indésirable.",
    OptOther: "Informer le personnel de ce message pour une autre raison.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Vous pouvez afficher à nouveau les messages d'aide, si vous êtes connecté, en " +
        "cliquant sur votre nom puis sur ",
    YouCanShowAgain_2: "Réafficher les messages d'aide",
  },


  // Editor

  e: {
    SimilarTopicsC: "Sujets similaires :",

    UploadMaxOneFile: "Désolé, mais vous ne pouvez actuellement télécharger qu'un seul fichier à la fois",
    PleaseFinishPost: "Veuillez d'abord finir d'écrire votre message",
    PleaseFinishChatMsg: "Veuillez d'abord finir d'écrire votre message de chat",
    PleaseFinishMsg: "Veuillez d'abord finir d'écrire votre message",
    PleaseSaveEdits: "Veuillez d'abord enregistrer vos modifications actuelles",
    PleaseSaveOrCancel: "Veuillez d'abord enregistrer ou annuler votre nouveau sujet",
    CanContinueEditing: "Vous pouvez continuer à modifier votre texte si vous rouvrez l'éditeur.",
    PleaseDontDeleteAll: "Veuillez ne pas supprimer tout le texte. Écrivez quelque chose.",
    PleaseWriteSth: "Veuillez écrire quelque chose.",
    PleaseWriteTitle: "Veuillez écrire un titre de sujet.",
    PleaseWriteMsgTitle: "Veuillez écrire un titre de message.",
    PleaseWriteMsg: "Veuillez écrire un message.",

    exBold: "texte en gras",
    exEmph: "texte accentué",
    exPre: "texte préformaté",
    exQuoted: "texte cité",
    ExHeading: "Titre",

    TitlePlaceholder: "Tapez un titre — de quoi s'agit-il, en une courte phrase ?",

    EditPost_1: "Modifier ",
    EditPost_2: "le message ",

    TypeChatMsg: "Tapez un message de chat :",
    YourMsg: "Votre message :",
    CreateTopic: "Créer un nouveau sujet",
    CreateCustomHtml: "Créer une page HTML personnalisée (ajoutez votre propre titre <h1>)",
    CreateInfoPage: "Créer une page d'information",
    CreateCode: "Créer une page de code source",
    AskQuestion: "Poser une question",
    ReportProblem: "Signaler un problème",
    SuggestIdea: "Suggérer une idée",
    NewChat: "Titre et but du chat",
    NewPrivChat: "Titre et but du chat privé",
    AppendComment: "Ajouter un commentaire au bas de la page :",

    ReplyTo: "Répondre à ",
    ReplyTo_theOrigPost: "au message d'origine",
    ReplyTo_post: "au message ",
    AddCommentC: "Ajouter un commentaire :",

    PleaseSelectPosts: "Veuillez sélectionner un ou plusieurs messages auxquels répondre.",

    Save: "Enregistrer",
    edits: "modifications",

    PostReply: "Poster la réponse",
    PostComment: "Poster le commentaire",

    Post: "Poster",
    comment: "commentaire",
    question: "question",

    PostMessage: "Poster le message",
    SimpleEditor: "Éditeur simple",

    Send: "Envoyer",
    message: "message",

    Create: "Créer",
    page: "page",
    chat: "chat",
    idea: "idée",
    topic: "sujet",

    Submit: "Soumettre",
    problem: "problème",

    ViewOldEdits: "Voir les anciennes modifications",

    UploadBtnTooltip: "Télécharger un fichier ou une image",
    BoldBtnTooltip: "Mettre le texte en gras",
    EmBtnTooltip: "Accentuer",
    QuoteBtnTooltip: "Citer",
    PreBtnTooltip: "Texte préformaté",
    HeadingBtnTooltip: "Titre",

    TypeHerePlaceholder: "Tapez ici. Vous pouvez utiliser Markdown et HTML. Glissez-déposez pour coller des images.",

    Maximize: "Agrandir",
    ToNormal: "Retour à la normale",
    TileHorizontally: "Mosaïque horizontale",

    PreviewC: "Aperçu :",
    TitleExcl: " (titre exclu)",
    ShowEditorAgain: "Afficher à nouveau l'éditeur",
    Minimize: "Réduire",

    PreviewInfo: "Ici vous pouvez prévisualiser l'apparence de votre message.",
    CannotType: "Vous ne pouvez pas taper ici.",

    LoadingDraftDots: "Chargement du brouillon...",
    DraftUnchanged: "Inchangé.",
    CannotSaveDraftC: "Impossible d'enregistrer le brouillon :",
    DraftSavedBrwsr: "Brouillon enregistré dans le navigateur.",
    DraftSaved: (nr: string | number) => `Brouillon ${nr} enregistré.`,
    DraftDeleted: (nr: string | number) => `Brouillon ${nr} supprimé.`,
    WillSaveDraft: (nr: string | number) => `Enregistrement du brouillon ${nr} ...`,
    SavingDraft: (nr: string | number) => `Enregistrement du brouillon ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Suppression du brouillon ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Sélectionner la catégorie",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Sélectionner le type de sujet :",
    DiscussionExpl: "Une discussion sur quelque chose.",
    QuestionExpl: "Une réponse peut être marquée comme la réponse acceptée.",
    ProblExpl: "Si quelque chose est cassé ou ne fonctionne pas. Peut être marqué comme corrigé/résolu.",
    IdeaExpl: "Une suggestion. Peut être marquée comme faite/implémentée.",
    ChatExpl: "Une conversation peut-être sans fin.",
    PrivChatExpl: "Visible uniquement par les personnes invitées à rejoindre le chat.",

    CustomHtml: "Page HTML personnalisée",
    InfoPage: "Page d'information",
    Code: "Code",
    EmbCmts: "Commentaires intégrés",
    About: "À propos",
    PrivChat: "Chat privé",
    Form: "Formulaire",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Plus de communautés à rejoindre.",
    SelCmty: "Sélectionner la communauté ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Rechercher de l'aide",
    TxtToFind: "Texte à rechercher",
  },


  // No internet

  ni: {
    NoInet: "Pas de connexion internet",
    PlzRefr: "Actualisez la page pour voir les derniers changements. (Il y a eu une déconnexion)",
    RefrNow: "Actualiser maintenant",
  },


  PostDeleted: (postNr: number) => `Ce message, n° ${postNr}, a été supprimé.`,
  NoSuchPost: (postNr: number) => `Il n'y a pas de message n° ${postNr} sur cette page.`,
  NoPageHere: "Cette page a été supprimée, n'a jamais existé ou vous ne pouvez pas y accéder.",
  GoBackToLastPage: "Retourner à la dernière page",

};
