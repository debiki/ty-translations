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

var t_it_IT: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Attivo",
  Activity: "Attività",
  Add: "Aggiungi",
  AddingDots: "Aggiunta in corso...",
  AddComment: "Aggiungi commento",
  Admin: "Amministratore",
  AdvSearch: "Ricerca avanzata",
  Anonym: "Anonimo",
  Away: "Assente",
  Back: "Indietro",
  BlogN: "Blog",
  Bookmarks: "Segnalibri",
  Cancel: "Annulla",
  Categories: "Categorie",
  Category: "Categoria",
  ChangeV: "Cambia",
  ClickToShow: "Clicca per mostrare",
  ChangeDots: "Cambia ...",
  ChatN: "Chat",
  Chatting: "In chat",
  CheckYourEmail: "Controlla la tua email",
  Close: "Chiudi",
  closed: "chiuso",
  comments: "commenti",   // as in:  "123 comments"
  Continue: "Continua",
  Created: "Creato",
  Delete: "Elimina",
  Deleted: "Eliminato",
  DirectMessage: "Messaggio diretto",
  Discussion: "Discussione",
  discussion: "discussione",
  done: "fatto",
  EditV: "Modifica",
  Editing: "Modifica in corso",
  EmailC: "Email: ",
  EmailAddress: "Indirizzo email",
  EmailAddresses: "Indirizzi email",
  EmailSentD: "Email inviata.",
  Forum: "Forum",
  GetNotifiedAbout: "Ricevi notifiche per",
  GroupsC: "Gruppi:",
  Hide: "Nascondi",
  Home: "Home",
  Idea: "Idea",
  Join: "Iscriviti",
  KbdShrtcsC: "Scorciatoie da tastiera: ",
  Loading: "Caricamento...",
  LoadMore: "Carica altri ...",
  LogIn: "Accedi",
  LoggedInAs: "Accesso effettuato come ",
  LogOut: "Esci",
  Maybe: "Forse",
  Manage: "Gestisci",
  Members: "Membri",
  MessageN: "Messaggio",
  MoreDots: "Altro...",
  Move: "Sposta",
  Name: "Nome",
  NameC: "Nome:",
  NewTopic: "Nuovo argomento",
  NoCancel: "No, annulla",
  Notifications: "Notifiche",
  NotImplemented: "(Non implementato)",
  NotYet: "Non ancora",
  NoTitle: "Senza titolo",
  NoTopics: "Nessun argomento.",
  Okay: "Okay",
  OkayDots: "Okay ...",
  Online: "Online",
  onePerLine: "uno per riga",
  PreviewV: "Anteprima",
  Problem: "Problema",
  progressN: "progresso",
  Question: "Domanda",
  Recent: "Recenti",
  Remove: "Rimuovi",
  Reopen: "Riapri",
  ReplyV: "Rispondi",
  Replying: "Risposta in corso",
  Replies: "Risposte",
  replies: "risposte",
  Save: "Salva",
  SavingDots: "Salvataggio in corso ...",
  SavedDot: "Salvato.",
  Search: "Cerca",
  SendMsg: "Invia messaggio",
  ShowPreview: "Mostra anteprima",
  SignUp: "Iscriviti",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Soluzione",
  started: "iniziato",
  Summary: "Riepilogo",
  Submit: "Invia",
  Tag: "Tag",
  Tags: "Tag",
  Tools: "Strumenti",
  Topics: "Argomenti",
  TopicTitle: "Titolo argomento",
  TopicType: "Tipo argomento",
  UploadingDots: "Caricamento...",
  Username: "Nome utente",
  Users: "Utenti",
  Welcome: "Benvenuto",
  Wiki: "Wiki",
  Yes: "Sì",
  YesBye: "Sì, ciao",
  YesDoThat: "Sì, fallo",
  You: "Tu",
  you: "tu",

  // Trust levels.
  Guest:  "Ospite",
  NewMember: "Nuovo membro",
  BasicMember: "Membro base",
  FullMember: "Membro effettivo",
  TrustedMember: "Membro affidabile",
  RegularMember: "Membro affidabile regolare",
  CoreMember: "Membro principale",

  // Periods.
  PastDay: "Nelle ultime 24 ore",
  PastWeek: "Nell'ultima settimana",
  PastMonth: "Nell'ultimo mese",
  PastQuarter: "Nell'ultimo trimestre",
  PastYear: "Nell'ultimo anno",
  AllTime: "Di sempre",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mes",  // months
  daysLtr: "g",      // days
  hoursLtr: "o",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 giorno fa" : `${numDays} giorni fa`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 ora fa" : `${numHours} ore fa`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minuto fa" : `${numMins} minuti fa`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 secondo fa" : `${numSecs} secondi fa`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Email richiesta",
    NoSpcs: "Niente spazi per favore",
    InvldAddr: "Indirizzo email non valido",
    NoBadChrs: "Niente caratteri strani per favore",

    // Full name input field:
    NotOnlSpcs: "Non solo spazi per favore",
    NoAt: "Niente @ per favore",

    // Username input field:
    NoDash: "Niente trattini (-) per favore",
    DontInclAt: "Non includere la @",
    StartEndLtrDgt: "Inizia e finisci con una lettera o una cifra",
    OnlLtrNumEtc: "Solo lettere (a-z, A-Z) e numeri, e _ (trattino basso)",
    // This shown just below the username input:
    UnUnqShrt_1: "Il tuo ",
    UnUnqShrt_2: "@nomeutente",
    UnUnqShrt_3: ", unico e breve",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Deve essere di almeno ${minLength} caratteri`,
    TooLong: (maxLength: number) => `Troppo lungo. Deve essere al massimo di ${maxLength} caratteri`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Ogni post",
    EveryPostInTopic: "Verrai informato di tutte le nuove risposte in questo argomento.",
    EveryPostInCat: "Verrai informato di tutti i nuovi argomenti e risposte in questa categoria.",
    EveryPostInTopicsWithTag: "Verrai informato dei nuovi argomenti con questo tag e di tutte le risposte in quegli argomenti.",
    EveryPostWholeSite: "Verrai informato di tutti i nuovi argomenti e risposte ovunque.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nuovi argomenti",
    NewTopicsInCat: "Verrai informato dei nuovi argomenti in questa categoria.",
    NewTopicsWithTag: "Verrai informato dei nuovi argomenti con questo tag.",
    NewTopicsWholeSite: "Verrai informato dei nuovi argomenti ovunque.",

    Tracking: "In monitoraggio",

    Normal: "Normale",
    NormalDescr: "Verrai informato se qualcuno parla con te, anche indirettamente, ad es. una " +
        "risposta a una risposta a te.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Silenziato",
    HushedDescr: "Verrai informato solo se qualcuno parla direttamente con te.",

    Muted: "Muto",
    MutedTopic: "Nessuna notifica.",   // MISSING removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Modifica",
    Hide_1: "Nascondi",
    Hide_2: ", clicca ",
    Hide_3: " per riaprire",
  },


  // Forum categories

  fcs: {
    All: "Tutte", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Lista argomenti",

    // Select category dropdown

    from: "da",  // MISSING used like so:  "From <Category Name>" or "From All Categories"
    in: "in",      // MISSING used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Tutte le categorie",

    // Topic sort order

    Active: "Primi attivi",      // MISSING didn't add "first" yet to transls
    ActiveDescr: "Mostra prima gli argomenti attivi di recente",

    New: "Nuovi",
    NewDescr: "Mostra prima i nuovi argomenti",

    Top: "Popolari",              // MISSING didn't rename from Top to Popular in transls
    TopDescr: "Mostra prima gli argomenti popolari",

    // Topic filter dropdown

    AllTopics: "Tutti gli argomenti",

    ShowAllTopics: "Mostra tutti gli argomenti",
    ShowAllTopicsDescr: "Non gli argomenti eliminati però",

    WaitingTopics: "Argomenti in attesa",          // MISSING
    OnlyWaitingDescr_1: "Mostra solo argomenti ", // MISSING changed "questions" to "topics"
    OnlyWaitingDescr_2: "in attesa ",
    OnlyWaitingDescr_3: "di una soluzione o di essere implementati e completati",  // MISSING rewrote

    YourTopics: "I tuoi argomenti",       // MISSING
    AssignedToYou: "Assegnati a te", // MISSING

    DeletedTopics: "Mostra eliminati",   // MISSING
    ShowDeleted: "Mostra eliminati",
    ShowDeletedDescr: "Mostra tutti gli argomenti, inclusi quelli eliminati",

    // Rightmost buttons

    ViewCategories: "Visualizza categorie",  // MISSING
    EditCat: "Modifica categoria",
    CreateCat: "Crea categoria",
    CreateTopic: "Crea argomento",
    PostIdea: "Invia un'idea",
    AskQuestion: "Fai una domanda",
    ReportProblem: "Segnala un problema",
    CreateMindMap: "Crea mappa concettuale",
    CreatePage: "Crea pagina",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Spiegazione icone...",
    IconExplanation: "Spiegazione icone:",
    ExplGenDisc: "Una discussione generale.",
    ExplQuestion: "Una domanda senza risposta accettata.",
    ExplAnswer: "Una domanda con una risposta accettata.",
    ExplIdea: "Un'idea / suggerimento.",
    ExplProblem: "Un problema.",
    ExplPlanned: "Qualcosa che stiamo pianificando di fare o risolvere.",
    ExplDone: "Qualcosa che è stato fatto o risolto.",
    ExplClosed: "Argomento chiuso.",
    ExplPinned: "Argomento sempre elencato per primo (forse solo nella sua categoria).",

    PopularTopicsComma: "Argomenti popolari, ",
    TopFirstAllTime: "Mostra prima gli argomenti più popolari di sempre.",
    TopFirstPastDay: "Mostra gli argomenti popolari nell'ultimo giorno.",

    CatHasBeenDeleted: "Questa categoria è stata eliminata",

    TopicsActiveFirst: "Argomenti, prima i più attivi di recente",
    TopicsNewestFirst: "Argomenti, prima i nuovi",

    CreatedOn: "Creato il ",
    LastReplyOn: "\nUltima risposta il ",
    EditedOn: "\nModificato il ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "ha creato l'argomento",
    frequentPoster: "frequente",
    mostRecentPoster: "più recente",

    inC: "in: ",

    TitleFixed: "Questo è stato risolto",
    TitleDone: "Questo è stato fatto",
    TitleStarted: "Abbiamo iniziato questo",
    TitleStartedFixing: "Abbiamo iniziato a risolvere questo",
    TitleUnsolved: "Questo è un problema irrisolto",
    TitleIdea: "Questa è un'idea",
    TitlePlanningFix: "Stiamo pianificando di risolvere questo",
    TitlePlanningDo: "Stiamo pianificando di fare questo",
    TitleChat: "Questo è un canale chat",
    TitlePrivateChat: "Questo è un canale chat privato",
    TitlePrivateMessage: "Un messaggio privato",
    TitleInfoPage: "Questa è una pagina informativa",
    TitleDiscussion: "Una discussione",
    IsPinnedGlobally: "\nÈ stato fissato, quindi è elencato per primo.",
    IsPinnedInCat: "\nÈ stato fissato nella sua categoria, quindi è elencato per primo nella sua categoria.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Argomenti recenti (quelli in attesa)",
    RecentTopicsInclDel: "Argomenti recenti (inclusi eliminati)",
    RecentTopics: "Argomenti recenti",
    _replies: " risposte",
    _deleted: " (eliminato)",
    _defCat: " (categoria predefinita)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Post recenti",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online in questa chat",    // example: "5 online in this chat"
    NumOnlForum: " online in questo forum",

    // Open left-sidebar button title.
    WatchbBtn: "I tuoi argomenti",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "I tuoi argomenti recenti, chat a cui partecipi, messaggi diretti",

    // Title shown on user profile pages.
    AbtUsr: "Informazioni utente",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Indietro dal profilo utente",
    BackFromAdm: "Indietro dall'area admin",

    // Title shown on full text search page.
    SearchPg: "Pagina di ricerca",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Aggiungi ...",
    RecentlyViewed: "Argomenti visualizzati di recente",  // MISSING " topics"
    JoinedChats: "Chat a cui partecipi",
    ChatChannels: "Canali Chat",
    CreateChat: "Crea canale chat",
    DirectMsgs: "Messaggi diretti",
    NoChats: "Nessuna",    // meaning: "No chat messages"
    NoDirMsgs: "Nessuno",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Azioni argomento",
    ViewPeopleHere: "Visualizza persone qui",
    ViewAddRemoveMembers: "Visualizza / aggiungi / rimuovi membri",
    ViewChatMembers: "Visualizza membri chat",
    EditChat: "Modifica descrizione chat",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Lascia questa chat",
    LeaveThisCommunity: "Lascia questa comunità",
    JoinThisCommunity: "Unisciti a questa comunità",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Commenti recenti in questo argomento:",
    NoComments: "Nessun commento.",

    YourBookmarks: "I tuoi segnalibri:",

    UsersOnline: "Utenti online:",
    UsersOnlineForum: "Utenti online in questo forum:",
    UsersInThisChat: "Utenti in questa chat:",
    UsersInThisTopic: "Utenti in questo argomento:",

    GettingStartedGuide: "Guida Admin", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Guida Admin",          // ... but what? It's here already, just reuse this transl field
    Guide: "Guida",

    // How to hide the sidebar.
    CloseShortcutS: "Chiudi (scorciatoia: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Aggiungi altre persone",

    // Shown next to one's own username, in a list of users.
    thatsYou: "questo sei tu",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Sembra ci sia solo tu",
    YouAnd: "Tu e ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " persona" : " persone";
      const have = numStrangers === 1 ? "non ha" : "non hanno";
      return numStrangers + people + " che " + have + " effettuato l'accesso";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Le risposte a sinistra potrebbero essere ordinate per ",
    bestFirst: "migliori-prima.",
    ButBelow: "Ma qui sotto ",
    insteadBy: " le stesse risposte sono invece ordinate per ",
    newestFirst: "più recenti-prima.",

    SoIfLeave: "Quindi se te ne vai e torni più tardi, qui sotto troverai ",
    allNewReplies: "tutte le nuove risposte.",
    Click: "Clicca",
    aReplyToReadIt: " una risposta sotto per leggerla — perché qui sotto viene mostrato solo un estratto.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Clicca per cambiare stato",
    ClickToViewAnswer: "Clicca per visualizzare la risposta",
    ViewAnswer: "Visualizza risposta",
    ChangeStatusC: "Cambia stato in:",
    ChangeCatC: "Cambia categoria:",
    ChangeTopicTypeC: "Cambia tipo di argomento:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "una domanda",
    hasAccptAns: "ha una risposta accettata",
    aProblem: "un problema",
    planToFix: "pianificato da risolvere",
    anIdea: "un'idea",
    planToDo: "pianificato da fare",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Questo modulo è stato ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "chiuso; non puoi più compilarlo e inviarlo.",

    ThisTopicClosed_1: "Questo argomento è stato ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Puoi ancora inviare commenti.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Questa pagina è stata eliminata",
    CatDeldPageToo: "Categoria eliminata, quindi anche questa pagina è stata eliminata",

    ThreadDeld: "Thread eliminato",
    CmntDeld: "Commento eliminato",
    PostDeld: "Post eliminato",
    DiscDeld: "Discussione eliminata",
    PageDeld: "Pagina eliminata",
    PagePendAppr: "Pagina in attesa di approvazione",
    TitlePendAppr: "Titolo in attesa di approvazione",
    TextPendingApproval: "Testo in attesa di approvazione",

    TooltipQuestClosedNoAnsw: "Questa domanda è stata chiusa senza alcuna risposta accettata.",
    TooltipTopicClosed: "Questo argomento è chiuso.",

    TooltipQuestSolved: "Questa è una domanda risolta",
    TooltipQuestUnsolved: "Questa è una domanda irrisolta",

    StatusDone: "Fatto",
    TooltipProblFixed: "Questo è stato risolto",
    TooltipDone: "Questo è stato fatto",

    StatusStarted: "Iniziato",
    TooltipFixing: "Abbiamo iniziato a risolvere questo",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "Abbiamo iniziato a fare questo", // MISSING  -""-

    StatusPlanned: "Pianificato",
    TooltipProblPlanned: "Stiamo pianificando di risolvere questo",
    TooltipIdeaPlanned: "Stiamo pianificando di fare questo",   // or "to implement this"?

    StatusNew: "Nuovo",
    StatusNewDtl: "Nuovo argomento, in discussione",
    TooltipUnsProbl: "Questo è un problema irrisolto",
    TooltipIdea: "Questa è un'idea",

    TooltipPersMsg: "Messaggio personale",
    TooltipChat: "# significa Canale Chat",
    TooltipPrivChat: "Questo è un canale chat privato",

    TooltipPinnedGlob: "\nFissato globalmente.",
    TooltipPinnedCat: "\nFissato in questa categoria.",

    SolvedClickView_1: "Risolto nel post #",
    SolvedClickView_2: ", clicca per visualizzare",

    PostHiddenClickShow: "Post nascosto; clicca per mostrare",
    ClickSeeMoreRepls: "Mostra più risposte",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Mostra più commenti",  // MISSING
    ClickSeeThisComment: "Clicca per mostrare questo commento",
    clickToShow: "clicca per mostrare",

    ManyDisagree: "Molti non sono d'accordo con questo:",
    SomeDisagree: "Alcuni non sono d'accordo con questo:",

    PendAppr: "In attesa di approvazione",
    CmtPendAppr: "Commento in attesa di approvazione, inviato ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Il tuo" : "Il") + " commento qui sotto è in attesa di approvazione.",

    _and: " e",

    repliesTo: "risposte a",
    InReplyTo: "In risposta a",
    YourReplyTo: "La tua risposta a ",  // MISSING
    YourChatMsg: "Il tuo messaggio chat: ",   // MISSING
    YourDraft: "La tua bozza",    // MISSING
    YourEdits: "Le tue modifiche: ",   // MISSING
    YourProgrNoteC: "La tua nota di progresso:",  // MISSING
    aProgrNote: "una nota di progresso: ",  // MISSING

    ReplyingToC: "Risposta a:",    // MISSING
    ScrollToPrevw_1: "Scorri per ",  // MISSING
    ScrollToPrevw_2: "anteprima",     // MISSING

    UnfinEdits: "Modifiche non terminate",  // MISSING
    ResumeEdting: "Riprendi modifica",  // MISSING
    DelDraft: "Elimina bozza",   // MISSING

    ClickViewEdits: "Clicca per visualizzare le vecchie modifiche",

    By: "Di ", // ... someones name

    // Discussion ...
    aboutThisIdea: "su come e se realizzare questa idea",
    aboutThisProbl: "su come e se risolvere questo",

    AddProgrNote: "Aggiungi nota di progresso",
    // Progress ...
    withThisIdea: "con la realizzazione di questa idea",
    withThisProbl: "con la gestione di questo problema",
    withThis: "con la realizzazione di questo",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notifiche per questo argomento:",

    // If is a direct message topic, members listed below this text.
    Msg: "Messaggio",

    SmrzRepls: "Riassumi risposte",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Ci sono ${numReplies} risposte. Tempo di lettura stimato: ${minutes} minuti`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Fatto. Riassunte ${numSummarized} risposte, delle ${numShownBefore} risposte mostrate in precedenza.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Chiudi argomento",  // MISSING
    CloseOwnQuestionTooltip: "Chiudi questa domanda se non hai più bisogno di una risposta.",
    CloseOthersQuestionTooltip: "Chiudi questa domanda se non ha bisogno di una risposta, ad es. se " +
        "è fuori tema o già risolta in un altro argomento.",
    CloseToDoTooltip: "Chiudi questo To-Do se non deve essere fatto o risolto.",
    CloseTopicTooltip: "Chiudi questo argomento se non necessita di ulteriori considerazioni.",

    AcceptBtnExpl: "Accetta questo come risposta alla domanda o al problema",
    SolutionQ: "Soluzione?",
    ClickUnaccept: "Clicca per annullare l'accettazione di questa risposta",
    PostAccepted: "Questo post è stato accettato come risposta",

    NumLikes: (num: number) => num === 1 ? "1 Mi piace" : num + " Mi piace",
    NumDisagree: (num: number) => num + " Contrario",
    NumBury: (num: number) => num === 1 ? "1 Sotterrato" : num + " Sotterrati",
    NumUnwanted: (num: number) => num === 1 ? "1 Indesiderato" : num + " Indesiderati",

    MoreVotes: "Altri voti...",
    LikeThis: "Mi piace",
    LinkToPost: "Link a questo post",
    Report: "Segnala",
    ReportThisPost: "Segnala questo post",
    Admin: "Amministratore",
    DiscIx: "Indice discussioni",

    Disagree: "Contrario",
    DisagreeExpl: "Clicca qui per non essere d'accordo con questo post, o per avvisare gli altri di errori fattuali.",
    Bury: "Sotterra",
    BuryExpl: "Clicca per ordinare altri post prima di questo post. Solo lo staff del forum può vedere il tuo voto.",
    Unwanted: "Indesiderato",
    UnwantedExpl: "Se non vuoi questo post su questo sito. Ciò ridurrebbe la fiducia che ho " +
            "nell'autore del post. Solo lo staff del forum può vedere il tuo voto.",

    AddTags: "Aggiungi/rimuovi tag",
    UnWikify: "Annulla Wiki",
    Wikify: "Rendi Wiki",
    PinDeleteEtc: "Fissa / Elimina / Categoria ...",
  },


  // Share dialog

  sd: {
    Copied: "Copiato.",
    CtrlCToCopy: "Premi CTRL+C per copiare.",
    ClickToCopy: "Clicca per copiare il link.",
  },


  // Chat

  c: {
    About_1: "Questo è il canale chat ",
    About_2: ", creato da ",
    ScrollUpViewComments: "Scorri verso l'alto per visualizzare i commenti più vecchi",
    Purpose: "Scopo:",
    MessageDeleted: "(Messaggio eliminato)",
    JoinThisChat: "Unisciti a questa chat",
    PostMessage: "Invia messaggio",
    AdvancedEditor: "Editor avanzato",
    TypeTitle: "Digita un titolo — di cosa tratta questa chat, in poche parole?",
    TypePurpose: "Digita uno scopo — può essere più lungo del titolo, più descrittivo.",
    TypeHere: "Digita qui. Puoi usare Markdown e HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Necessita revisione ",
    AdminHelp: "Aiuto Admin ",
    StaffHelp: "Aiuto Staff ",
    DraftsEtc: "Bozze, segnalibri, task",
    MoreNotfs: "Visualizza tutte le notifiche",
    DismNotfs: "Segna tutte come lette",
    ViewProfile: "Visualizza il tuo profilo",
    ViewGroups: "Visualizza gruppi",
    LogOut: "Esci",
    UnhideHelp: "Mostra messaggi di aiuto",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Scorri a:",
    Scroll: "Scorri",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Indietro (B)",
    BackExpl: "Torna alla posizione precedente su questa pagina",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Inizio pagina",
    PgTopHelp: "Vai all'inizio della pagina. Scorciatoia: 1",
    Repl: "Risposte",
    ReplHelp: "Vai alla sezione Risposte. Scorciatoia: 2",
    Progr: "Progresso",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Vai alla sezione Progresso. Scorciatoia: 3",
    PgBtm: "Fine pagina",
    Btm: "Fine",
    BtmHelp: "Vai alla fine della pagina. Scorciatoia: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", e ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " per tornare indietro",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Seleziona utenti",
    AddUsers: "Aggiungi utenti",
  },


  // About user dialog

  aud: {
    IsMod: "È moderatore.",
    IsAdm: "È amministratore.",
    IsDeld: "È disattivato o eliminato.",
    ThisIsGuest: "Questo è un utente ospite, potrebbe essere chiunque.",
    ViewInAdm: "Visualizza nell'area Admin",
    ViewProfl: "Visualizza profilo",
    ViewComments: "Visualizza altri commenti",
    RmFromTpc: "Rimuovi dall'argomento",
    EmAdrUnkn: "Indirizzo email sconosciuto — questo ospite non riceverà notifiche per le risposte.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Preferenze",
    Invites: "Inviti",
    DraftsEtc: "Bozze ecc",
    About: "Informazioni",
    Privacy: "Privacy",
    Security: "Sicurezza",
    Account: "Account",
    Interface: "Interfaccia",

    // ----- Overview stats

    JoinedC: "Iscritto: ",
    PostsMadeC: "Post creati: ",
    LastPostC: "Ultimo post: ",
    LastSeenC: "Ultima visita: ",
    TrustLevelC: "Livello di fiducia: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Carica foto",
    ChangePhoto: "Cambia foto",
    ImgTooSmall: "Immagine troppo piccola: dovrebbe essere almeno 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Solo lo staff e i membri principali fidati possono vedere questo.",
    OnlyMbrsCanSee: "Solo le persone che sono state membri attivi per un po' possono vedere questo.",
    Nothing: "Nulla da mostrare",
    Posts: "Post",
    NoPosts: "Nessun post.",
    Topics: "Argomenti",
    NoTopics: "Nessun argomento.",

    // ----- User status

    UserBanned: "Questo utente è bandito",
    UserSuspended: (dateUtc: string) => `Questo utente è sospeso fino al ${dateUtc} UTC`,
    ReasonC: "Motivazione: ",

    DeactOrDeld: "È stato disattivato o eliminato.",
    isGroup: " (un gruppo)",
    isGuest: " — un utente ospite, potrebbe essere chiunque",
    isMod: " – moderatore",
    isAdmin: " – amministratore",
    you: "(tu)",

    // ----- Notifications page

    NoNotfs: "Nessuna notifica",
    NotfsToYouC: "Notifiche per te:",
    NotfsToOtherC: (name: string) => `Notifiche per ${name}:`,
    DefNotfsSiteWide: "Notifiche predefinite, a livello di sito",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "per",

    // ----- Drafts Etc page

    NoDrafts: "Nessuna bozza",
    YourDraftsC: "Le tue bozze:",
    DraftsByC: (name: string) => `Bozze di ${name}:`,

    // ----- Invites page

    InvitesIntro: "Qui puoi invitare persone a unirsi a questo sito. ",
    InvitesListedBelow: "Gli inviti che hai già inviato sono elencati qui sotto.",
    NoInvites: "Non hai ancora invitato nessuno.",

    InvitedEmail: "Email invitata",
    WhoAccepted: "Membro che ha accettato",
    InvAccepted: "Invito accettato",
    InvSent: "Invito inviato",
    JoinedAlready: "Già iscritto",

    SendAnInv: "Invita persone", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Invia inviti",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Invieremo ai tuoi amici una breve email. Cliccheranno su un link " +
        "per iscriversi immediatamente, senza bisogno di accesso. " +
        "Diventeranno membri normali, non moderatori o admin.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Fatto. Invierò loro un'email.",
    NoOneToInv: "Nessuno da invitare.",
    InvNotfLater: "Ti avviserò più tardi, quando li avrò invitati.",
    AlreadyInvSendAgainQ: "Questi sono già stati invitati — forse vorresti invitarli di nuovo?",
    InvErr_1: "Questi hanno prodotto ",
    InvErr_2: "errori",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Questi si sono già iscritti, quindi non li ho invitati:",
    ResendInvsQ: "Inviare di nuovo gli inviti a queste persone? Sono già state invitate.",
    InvAgain: "Invita di nuovo",

    // ----- Preferences, About

    AboutYou: "Informazioni su di te",
    WebLink: "Qualsiasi tuo sito web o pagina.",

    NotShownCannotChange: "Non mostrato pubblicamente. Non può essere cambiato.",

    // The full name or alias:
    NameOpt: "Nome (opzionale)",

    NotShown: "Non mostrato pubblicamente.",

    // The username:
    MayChangeFewTimes: "Puoi cambiarlo solo poche volte.",
    notSpecified: "(non specificato)",
    ChangeUsername_1: "Puoi cambiare il tuo nome utente solo poche volte.",
    ChangeUsername_2: "Cambiandolo troppo spesso potresti confondere gli altri — " +
        "non sapranno come @menzionarti.",

    NotfAboutAll: "Ricevi una notifica per ogni nuovo post (a meno che tu non silenzi l'argomento o la categoria)",
    NotfAboutNewTopics: "Ricevi una notifica per i nuovi argomenti (a meno che tu non silenzi la categoria)",

    ActivitySummaryEmails: "Email di riepilogo attività",

    EmailSummariesToGroup:
        "Quando i membri di questo gruppo non visitano il sito, per impostazione predefinita, invia loro " +
        "riepiloghi degli argomenti popolari e altro.",
    EmailSummariesToMe:
        "Quando non visito il sito, inviami " +
        "riepiloghi degli argomenti popolari e altro.",

    AlsoIfTheyVisit: "Invia loro email anche se visitano regolarmente.",
    AlsoIfIVisit: "Inviami email anche se visito regolarmente.",

    HowOftenWeSend: "Ogni quanto dobbiamo inviare queste email?",
    HowOftenYouWant: "Ogni quanto desideri queste email?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Nascondere la tua attività recente agli estranei e ai nuovi membri?",
    HideActivityStrangers_2: "(Ma non a coloro che sono membri attivi da un po'.)",
    HideActivityAll_1: "Nascondere la tua attività recente a tutti?",
    HideActivityAll_2: "(Eccetto per lo staff e i membri principali fidati.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Indirizzi email",
    PrimaryDot: "Primario. ",
    VerifiedDot: "Verificato. ",
    NotVerifiedDot: "Non verificato. ",
    ForLoginWithDot: (provider: string) => `Per l'accesso con ${provider}. `,
    MakePrimary: "Rendi primario",
    AddEmail: "Aggiungi indirizzo email",
    TypeNewEmailC: "Digita un nuovo indirizzo email:",
    MaxEmailsInfo: (numMax: number) => `(Non puoi aggiungere più di ${numMax} indirizzi.)`,
    EmailAdded_1: "Aggiunto. Ti abbiamo inviato un'email di verifica — ",
    EmailAdded_2: "controlla la tua casella di posta.",
    SendVerifEmail: "Invia email di verifica",

    EmailStatusExpl:
        "('Primario' significa che puoi accedere tramite questo indirizzo e che inviamo notifiche ad esso. " +
        "'Verificato' significa che hai cliccato su un link di verifica in un'email di verifica dell'indirizzo.)",

    // Password:
    ChangePwdQ: "Cambiare password?",
    CreatePwdQ: "Creare password?",
    WillGetPwdRstEml: "Riceverai un'email per reimpostare la password.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Nessuna",

    // Logins:
    LoginMethods: "Metodi di accesso",
    commaAs: ", come: ",

    // One's data:
    YourContent: "I tuoi contenuti",
    DownloadPosts: "Scarica post",
    DownloadPostsHelp: "Crea un file JSON con una copia degli argomenti e dei commenti che hai inviato.",
    DownloadPersData: "Scarica dati personali",
    DownloadPersDataHelp: "Crea un file JSON con una copia dei tuoi dati personali, ad es. il tuo nome " +
        "(se lo hai specificato) e l'indirizzo email.",


    // Delete account:
    DangerZone: "Zona pericolosa",
    DeleteAccount: "Elimina account",
    DeleteYourAccountQ:
        "Eliminare il tuo account? Rimuoveremo il tuo nome, dimenticheremo il tuo indirizzo email, la password e " +
        "qualsiasi identità online (come l'accesso tramite Facebook o Twitter). " +
        "Non potrai più accedere. Questa azione non può essere annullata.",
    DeleteUserQ:
        "Eliminare questo utente? Rimuoveremo il nome, dimenticheremo l'indirizzo email, la password e " +
        "le identità online (come l'accesso tramite Facebook o Twitter). " +
        "L'utente non potrà più accedere. Questa azione non può essere annullata.",
    YesDelete: "Sì, elimina",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Membri del gruppo",
    NoMembers: "Nessun membro.",
    MayNotListMembers: "Non è consentito elencare i membri.",
    AddMembers: "Aggiungi membri",
    BuiltInCannotModify: "Questo è un gruppo predefinito; non può essere modificato.",
    NumMembers: (num: number) => `${num} membri`,
    YouAreMember: "Sei un membro.",
    CustomGroupsC: "Gruppi personalizzati:",
    BuiltInGroupsC: "Gruppi predefiniti:",
    DeleteGroup: "Elimina questo gruppo",
  },


  // Create user dialog

  cud: {
    CreateUser: "Crea utente",
    CreateAccount: "Crea account",
    EmailC: "Email:",  // REMOVE move to t.EmailC instead
    keptPriv: "rimarrà privato",
    forNotfsKeptPriv: "per le notifiche di risposta, rimarrà privato",
    EmailVerifBy_1: "La tua email è stata verificata da ",
    EmailVerifBy_2: ".",
    UsernameC: "Nome utente:",
    FullNameC: "Nome completo:",
    optName: "opzionale",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Account creato. Accesso effettuato.",  // COULD say if verif email sent too?
    AlmostDone:
        "Quasi fatto! Devi solo confermare il tuo indirizzo email. Ti abbiamo " +
        "inviato un'email. Clicca sul link nell'email per attivare " +
        "il tuo account. Puoi chiudere questa pagina.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Termini e Privacy",

    Accept_1: "Accetti i nostri ",
    TermsOfService: "Termini di Servizio",
    TermsOfUse: "Termini d'Uso",
    Accept_2: " e la ",
    PrivPol: "Informativa sulla Privacy",
    Accept_3_User: "?",
    Accept_3_Owner: " per i proprietari del sito?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Sì, accetto",
  },


  // Password input

  pwd: {
    PasswordC: "Password:",
    StrengthC: "Robustezza: ",
    FairlyWeak: "Piuttosto debole.",
    toShort: "troppo corta",
    TooShort: (minLength: number) => `Troppo corta. Dovrebbe essere di almeno ${minLength} caratteri`,
    PlzInclDigit: "Per favore includi una cifra o un carattere speciale",
    TooWeak123abc: "Troppo debole. Non usare password come '12345' or 'abcde'.",
    AvoidInclC: "Evita di includere (parti del) tuo nome o email nella password:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Pagina non trovata o Accesso negato.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Stai impersonando qualcuno che potrebbe non avere accesso a tutte le parti " +
        "di questo sito.",

    IfYouThinkExistsThen: "Se pensi che la pagina esista, accedi come qualcuno che possa visualizzarla. ",
    LoggedInAlready: "(Hai già effettuato l'accesso, ma forse è l'account sbagliato?) ",
    ElseGoToHome_1: "Altrimenti, puoi ",
    ElseGoToHome_2: "andare alla homepage.",

    CreateAcconut: "Crea account",
    ContinueWithDots: "Continua con ...",
    SignUp: "Iscriviti",
    LogIn: "Accedi",
    LogInWithPwd: "Accedi con Password",
    CreateAdmAcct: "Crea account amministratore:",
    AuthRequired: "Autenticazione richiesta per accedere a questo sito",
    LogInToLike: "Accedi per mettere Mi piace a questo post",
    LogInToSubmit: "Accedi e invia",
    LogInToComment: "Accedi per scrivere un commento",
    LogInToCreateTopic: "Accedi per creare un argomento",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "O ",         // "Or "
    OrLogIn_2: "Accedi",      // "Log in" (this is a button)
    OrLogIn_3: " invece",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "O ",
    SignUpInstead_2: "Crea account", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", o semplicemente ",
    OrTypeName_2: "digita un nome",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "O crea account:",
    OrTypeName: "O digita il tuo nome:",
    OrLogIn: "O accedi:",
    YourNameQ: "Il tuo nome?",

    BadCreds: "Nome utente o password errati",

    UsernameOrEmailC: "Nome utente o email:",
    PasswordC: "Password:",
    ForgotPwd: "Hai dimenticato la password?",

    NoPwd: "Non hai ancora scelto una password.",
    CreatePwd: "Crea password",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Per favore dicci cosa ti preoccupa.",
    ThanksHaveReported: "Grazie. Hai segnalato il contenuto. Lo staff del forum darà un'occhiata.",
    ReportComment: "Segnala commento",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Questo post contiene dati personali, ad esempio il nome reale di qualcuno.",
    OptOffensive: "Questo post contiene contenuti offensivi o abusivi.",
    OptSpam: "Questo post è pubblicità indesiderata.",
    OptOther: "Notifica lo staff riguardo a questo post per qualche altro motivo.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Puoi mostrare di nuovo i messaggi di aiuto, se hai effettuato l'accesso, " +
        "cliccando sul tuo nome e poi su ",
    YouCanShowAgain_2: "Mostra messaggi di aiuto",
  },


  // Editor

  e: {
    SimilarTopicsC: "Argomenti simili:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Spiacenti, ma al momento puoi caricare solo un file alla volta",
    PleaseFinishPost: "Per favore finisci prima di scrivere il tuo post",
    PleaseFinishChatMsg: "Per favore finisci prima di scrivere il tuo messaggio chat",
    PleaseFinishMsg: "Per favore finisci prima di scrivere il tuo messaggio",
    PleaseSaveEdits: "Per favore salva prima le tue modifiche attuali",
    PleaseSaveOrCancel: "Per favore salva o annulla il tuo nuovo argomento prima di procedere",
    CanContinueEditing: "Puoi continuare a modificare il tuo testo se riapri l'editor.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Per favore non cancellare tutto il testo. Scrivi qualcosa.",
    PleaseWriteSth: "Per favore scrivi qualcosa.",
    PleaseWriteTitle: "Per favore scrivi un titolo per l'argomento.",
    PleaseWriteMsgTitle: "Per favore scrivi un titolo per il messaggio.",
    PleaseWriteMsg: "Per favore scrivi un messaggio.",

    exBold: "testo in grassetto",
    exEmph: "testo enfatizzato",
    exPre: "testo preformattato",
    exQuoted: "testo citato",
    ExHeading: "Intestazione",

    TitlePlaceholder: "Digita un titolo — di cosa si tratta, in una breve frase?",

    EditPost_1: "Modifica ",
    EditPost_2: "post ",

    TypeChatMsg: "Digita un messaggio chat:",
    YourMsg: "Il tuo messaggio:",
    CreateTopic: "Crea nuovo argomento",
    CreateCustomHtml: "Crea una pagina HTML personalizzata (aggiungi il tuo titolo <h1>)",
    CreateInfoPage: "Crea una pagina informativa",
    CreateCode: "Crea una pagina di codice sorgente",
    AskQuestion: "Fai una domanda",
    ReportProblem: "Segnala un problema",
    SuggestIdea: "Suggerisci un'idea",
    NewChat: "Titolo e scopo della chat",  // MISSING, changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Titolo e scopo della chat privata",  // MISSING, changed from "New private chat" to just "Private chat".
    AppendComment: "Aggiungi un commento in fondo alla pagina:",

    ReplyTo: "Rispondi a ",
    ReplyTo_theOrigPost: "al post originale",
    ReplyTo_post: "al post ",
    AddCommentC: "Aggiungi un commento:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Per favore seleziona uno o più post a cui rispondere.",

    Save: "Salva",
    edits: "modifiche",

    PostReply: "Invia risposta",
    PostComment: "Invia commento",

    Post: "Invia",
    comment: "commento",
    question: "domanda",

    PostMessage: "Invia messaggio",
    SimpleEditor: "Editor semplice",

    Send: "Invia",
    message: "messaggio",

    Create: "Crea",
    page: "pagina",
    chat: "chat",
    idea: "idea",
    topic: "argomento",

    Submit: "Invia",
    problem: "problema",

    ViewOldEdits: "Visualizza vecchie modifiche",

    UploadBtnTooltip: "Carica un file o un'immagine",
    BoldBtnTooltip: "Grassetto",
    EmBtnTooltip: "Enfasi",
    QuoteBtnTooltip: "Citazione",
    PreBtnTooltip: "Testo preformattato",
    HeadingBtnTooltip: "Intestazione",

    TypeHerePlaceholder: "Digita qui. Puoi usare Markdown e HTML. Trascina e rilascia per incollare immagini.",

    Maximize: "Massimizza",
    ToNormal: "Torna al normale",
    TileHorizontally: "Affianca orizzontalmente",

    PreviewC: "Anteprima:",
    TitleExcl: " (titolo escluso)",
    ShowEditorAgain: "Mostra di nuovo l'editor",
    Minimize: "Minimizza",

    PreviewInfo: "Qui puoi vedere un'anteprima di come apparirà il tuo post.",
    CannotType: "Non puoi digitare qui.",

    LoadingDraftDots: "Caricamento bozza...",
    DraftUnchanged: "Invariata.",
    CannotSaveDraftC: "Impossibile salvare la bozza:",
    DraftSavedBrwsr: "Bozza salvata nel browser.",   // MISSING
    DraftSaved: (nr: string | number) => `Bozza ${nr} salvata.`,
    DraftDeleted: (nr: string | number) => `Bozza ${nr} eliminata.`,
    WillSaveDraft: (nr: string | number) => `Salvataggio bozza ${nr} in corso ...`,
    SavingDraft: (nr: string | number) => `Salvataggio bozza ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Eliminazione bozza ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Seleziona categoria",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Seleziona tipo di argomento:",
    DiscussionExpl: "Una discussione su qualcosa.",
    QuestionExpl: "Una risposta può essere contrassegnata come risposta accettata.",
    ProblExpl: "Se qualcosa è rotto o non funziona. Può essere contrassegnato come risolto.",
    IdeaExpl: "Un suggerimento. Può essere contrassegnato come fatto/implementato.",
    ChatExpl: "Una conversazione potenzialmente infinita.",
    PrivChatExpl: "Visibile solo alle persone invitate a partecipare alla chat.",

    CustomHtml: "Pagina HTML personalizzata",
    InfoPage: "Pagina informativa",
    Code: "Codice",
    EmbCmts: "Commenti incorporati",
    About: "Informazioni",
    PrivChat: "Chat privata",
    Form: "Modulo",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Nessun'altra comunità a cui unirsi.",
    SelCmty: "Seleziona comunità ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Cerca aiuto",  // MISSING
    TxtToFind: "Testo da cercare",
  },


  // No internet

  ni: {
    NoInet: "Nessuna connessione internet",
    PlzRefr: "Aggiorna la pagina per vedere le ultime modifiche. (C'è stata una disconnessione)",
    RefrNow: "Aggiorna ora",
  },


  PostDeleted: (postNr: number) => `Il post n. ${postNr} è stato eliminato.`,
  NoSuchPost: (postNr: number) => `Non esiste il post n. ${postNr} su questa pagina.`,
  NoPageHere: "Questa pagina è stata eliminata, o non è mai esistita, o non hai i permessi per accedervi.",
  GoBackToLastPage: "Torna all'ultima pagina",

};
