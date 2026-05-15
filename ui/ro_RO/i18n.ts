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

var t_ro_RO: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Activ",
  Activity: "Activitate",
  Add: "Adaugă",
  AddingDots: "Se adaugă ...",
  AddComment: "Adaugă comentariu",
  Admin: "Admin",
  AdvSearch: "Căutare avansată",
  Anonym: "Anonim",
  Away: "Plecat",
  Back: "Înapoi",
  BlogN: "Blog",
  Bookmarks: "Semne de carte",
  Cancel: "Anulează",
  Categories: "Categorii",
  Category: "Categorie",
  ChangeV: "Schimbă",
  ClickToShow: "Click pentru a afișa",
  ChangeDots: "Se schimbă ...",
  ChatN: "Chat",
  Chatting: "În conversație",
  CheckYourEmail: "Verifică-ți email-ul",
  Close: "Închide",
  closed: "închis",
  comments: "comentarii",   // as in:  "123 comments"
  Continue: "Continuă",
  Created: "Creat",
  Delete: "Șterge",
  Deleted: "Șters",
  DirectMessage: "Mesaj direct",
  Discussion: "Discuție",
  discussion: "discuție",
  done: "gata",
  EditV: "Editează",
  Editing: "Se editează",
  EmailC: "Email: ",
  EmailAddress: "Adresă de email",
  EmailAddresses: "Adrese de email",
  EmailSentD: "Email trimis.",
  Forum: "Forum",
  GetNotifiedAbout: "Primește notificări despre",
  GroupsC: "Grupuri:",
  Hide: "Ascunde",
  Home: "Acasă",
  Idea: "Idee",
  Join: "Alătură-te",
  KbdShrtcsC: "Scurtături de tastatură: ",
  Loading: "Se încarcă...",
  LoadMore: "Încarcă mai multe ...",
  LogIn: "Autentificare",
  LoggedInAs: "Autentificat ca ",
  LogOut: "Deconectare",
  Maybe: "Poate",
  Manage: "Administrează",
  Members: "Membri",
  MessageN: "Mesaj",
  MoreDots: "Mai multe...",
  Move: "Mută",
  Name: "Nume",
  NameC: "Nume:",
  NewTopic: "Subiect nou",
  NoCancel: "Nu, anulează",
  Notifications: "Notificări",
  NotImplemented: "(Neimplementat)",
  NotYet: "Nu încă",
  NoTitle: "Fără titlu",
  NoTopics: "Niciun subiect.",
  Okay: "Okay",
  OkayDots: "Okay ...",
  Online: "Online",
  onePerLine: "unul pe rând",
  PreviewV: "Previzualizare",
  Problem: "Problemă",
  progressN: "progres",
  Question: "Întrebare",
  Recent: "Recente",
  Remove: "Elimină",
  Reopen: "Redeschide",
  ReplyV: "Răspunde",
  Replying: "Se răspunde",
  Replies: "Răspunsuri",
  replies: "răspunsuri",
  Save: "Salvează",
  SavingDots: "Se salvează ...",
  SavedDot: "Salvat.",
  Search: "Caută",
  SendMsg: "Trimite mesaj",
  ShowPreview: "Afișează previzualizarea",
  SignUp: "Alătură-te",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Soluție",
  started: "început",
  Summary: "Rezumat",
  Submit: "Trimite",
  Tag: "Etichetă",
  Tags: "Etichete",
  Tools: "Instrumente",
  Topics: "Subiecte",
  TopicTitle: "Titlu subiect",
  TopicType: "Tip subiect",
  UploadingDots: "Se încarcă...",
  Username: "Nume utilizator",
  Users: "Utilizatori",
  Welcome: "Bine ai venit",
  Wiki: "Wiki",
  Yes: "Da",
  YesBye: "Da, la revedere",
  YesDoThat: "Da, fă asta",
  You: "Tu",
  you: "tu",

  // Trust levels.
  Guest:  "Oaspete",
  NewMember: "Membru nou",
  BasicMember: "Membru de bază",
  FullMember: "Membru plin",
  TrustedMember: "Membru de încredere",
  RegularMember: "Membru de încredere obișnuit",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Membru de bază (core)",

  // Periods.
  PastDay: "Ultima zi",
  PastWeek: "Ultima săptămână",
  PastMonth: "Ultima lună",
  PastQuarter: "Ultimul trimestru",
  PastYear: "Ultimul an",
  AllTime: "Dintotdeauna",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "lun",  // months
  daysLtr: "z",      // days
  hoursLtr: "o",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "acum o zi" : `acum ${numDays} zile`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "acum o oră" : `acum ${numHours} ore`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "acum un minut" : `acum ${numMins} minute`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "acum o secundă" : `acum ${numSecs} secunde`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Email obligatoriu",
    NoSpcs: "Fără spații, vă rugăm",
    InvldAddr: "Adresă de email nevalidă",
    NoBadChrs: "Fără caractere ciudate, vă rugăm",

    // Full name input field:
    NotOnlSpcs: "Nu doar spații, vă rugăm",
    NoAt: "Fără @ vă rugăm",

    // Username input field:
    NoDash: "Fără cratime (-) vă rugăm",
    DontInclAt: "Nu includeți @",
    StartEndLtrDgt: "Începeți și terminați cu o literă sau o cifră",
    OnlLtrNumEtc: "Doar litere (a-z, A-Z) și cifre, și _ (underscore)",
    // This shown just below the username input:
    UnUnqShrt_1: "Numele tău de ",
    UnUnqShrt_2: "@utilizator",
    UnUnqShrt_3: ", unic și scurt",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Ar trebui să aibă cel puțin ${minLength} caractere`,
    TooLong: (maxLength: number) => `Prea lung. Ar trebui să aibă cel mult ${maxLength} caractere`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Fiecare postare",
    EveryPostInTopic: "Vei fi notificat despre toate răspunsurile noi la acest subiect.",
    EveryPostInCat: "Vei fi notificat despre toate subiectele și răspunsurile noi din această categorie.",
    EveryPostInTopicsWithTag: "Vei fi notificat despre subiectele noi cu această etichetă și despre toate răspunsurile la acele subiecte.",
    EveryPostWholeSite: "Vei fi notificat despre toate subiectele și răspunsurile noi de oriunde.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Subiecte noi",
    NewTopicsInCat: "Vei fi notificat despre subiectele noi din această categorie.",
    NewTopicsWithTag: "Vei fi notificat despre subiectele noi cu această etichetă.",
    NewTopicsWholeSite: "Vei fi notificat despre subiectele noi de oriunde.",

    Tracking: "Urmărire",

    Normal: "Normal",
    NormalDescr: "Vei fi notificat dacă cineva îți vorbește, inclusiv indirect, de ex. un " +
        "răspuns la un răspuns către tine.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Silențios",
    HushedDescr: "Vei fi notificat doar dacă cineva îți vorbește direct.",

    Muted: "Mut",
    MutedTopic: "Fără notificări.",
  },


  // Forum intro text

  fi: {
    Edit: "Editează",
    Hide_1: "Ascunde",
    Hide_2: ", click ",
    Hide_3: " pentru a redeschide",
  },


  // Forum categories

  fcs: {
    All: "Toate", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Listă subiecte",

    // Select category dropdown

    from: "de la",
    in: "în",
    AllCats: "Toate categoriile",

    // Topic sort order

    Active: "Active primele",
    ActiveDescr: "Afișează primele subiectele active recent",

    New: "Noi",
    NewDescr: "Afișează primele subiectele cele mai noi",

    Top: "Populare",
    TopDescr: "Afișează primele subiectele populare",

    // Topic filter dropdown

    AllTopics: "Toate subiectele",

    ShowAllTopics: "Afișează toate subiectele",
    ShowAllTopicsDescr: "Dar nu și pe cele șterse",

    WaitingTopics: "Subiecte în așteptare",
    OnlyWaitingDescr_1: "Afișează doar subiectele ",
    OnlyWaitingDescr_2: "în așteptare ",
    OnlyWaitingDescr_3: "pentru o soluție sau pentru a fi implementate și finalizate",

    YourTopics: "Subiectele tale",
    AssignedToYou: "Atribuite ție",

    DeletedTopics: "Afișează șterse",
    ShowDeleted: "Afișează șterse",
    ShowDeletedDescr: "Afișează toate subiectele, inclusiv cele șterse",

    // Rightmost buttons

    ViewCategories: "Vezi categoriile",
    EditCat: "Editează categoria",
    CreateCat: "Creează categoria",
    CreateTopic: "Creează subiect",
    PostIdea: "Postează o idee",
    AskQuestion: "Pune o întrebare",
    ReportProblem: "Raportează o problemă",
    CreateMindMap: "Creează hartă mentală",
    CreatePage: "Creează pagină",
  },


  // Forum topic list

  ft: {
    ExplIcons: "Explică pictogramele...",
    IconExplanation: "Explicația pictogramelor:",
    ExplGenDisc: "O discuție generală.",
    ExplQuestion: "O întrebare fără răspuns acceptat.",
    ExplAnswer: "O întrebare cu un răspuns acceptat.",
    ExplIdea: "O idee / sugestie.",
    ExplProblem: "O problemă.",
    ExplPlanned: "Ceva ce plănuim să facem sau să reparăm.",
    ExplDone: "Ceva ce a fost făcut sau reparat.",
    ExplClosed: "Subiect închis.",
    ExplPinned: "Subiect listat mereu primul (poate doar în propria categorie).",

    PopularTopicsComma: "Subiecte populare, ",
    TopFirstAllTime: "Afișează cele mai populare subiecte primele, dintotdeauna.",
    TopFirstPastDay: "Afișează subiectele populare din ultima zi.",

    CatHasBeenDeleted: "Această categorie a fost ștearsă",

    TopicsActiveFirst: "Subiecte, cele active recent primele",
    TopicsNewestFirst: "Subiecte, cele noi primele",

    CreatedOn: "Creat pe ",
    LastReplyOn: "\nUltimul răspuns pe ",
    EditedOn: "\nEditat pe ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "a creat subiectul",
    frequentPoster: "contribuitor frecvent",
    mostRecentPoster: "cel mai recent contribuitor",

    inC: "în: ",

    TitleFixed: "Acesta a fost reparat",
    TitleDone: "Acesta a fost finalizat",
    TitleStarted: "Am început acest lucru",
    TitleStartedFixing: "Am început să reparăm acest lucru",
    TitleUnsolved: "Aceasta este o problemă nerezolvată",
    TitleIdea: "Aceasta este o idee",
    TitlePlanningFix: "Plănuim să reparăm acest lucru",
    TitlePlanningDo: "Plănuim să facem acest lucru",
    TitleChat: "Acesta este un canal de chat",
    TitlePrivateChat: "Acesta este un canal de chat privat",
    TitlePrivateMessage: "Un mesaj privat",
    TitleInfoPage: "Aceasta este o pagină de informații",
    TitleDiscussion: "O discuție",
    IsPinnedGlobally: "\nA fost fixat, deci este listat primul.",
    IsPinnedInCat: "\nA fost fixat în categoria sa, deci este listat primul, în categoria sa.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Subiecte recente (cele în așteptare)",
    RecentTopicsInclDel: "Subiecte recente (inclusiv cele șterse)",
    RecentTopics: "Subiecte recente",
    _replies: " răspunsuri",
    _deleted: " (șters)",
    _defCat: " (categorie implicită)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Postări recente",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online în acest chat",    // example: "5 online in this chat"
    NumOnlForum: " online în acest forum",

    // Open left-sidebar button title.
    WatchbBtn: "Subiectele tale",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Subiectele tale recente, chat-urile la care te-ai alăturat, mesaje directe",

    // Title shown on user profile pages.
    AbtUsr: "Despre utilizator",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Înapoi de la profilul utilizatorului",
    BackFromAdm: "Înapoi din zona de administrare",

    // Title shown on full text search page.
    SearchPg: "Pagina de căutare",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Adaugă ...",
    RecentlyViewed: "Subiecte vizualizate recent",
    JoinedChats: "Chat-uri la care te-ai alăturat",
    ChatChannels: "Canale de chat",
    CreateChat: "Creează canal de chat",
    DirectMsgs: "Mesaje directe",
    NoChats: "Niciunul",    // meaning: "No chat messages"
    NoDirMsgs: "Niciunul",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Acțiuni subiect",
    ViewPeopleHere: "Vezi persoanele de aici",
    ViewAddRemoveMembers: "Vezi / adaugă / elimină membri",
    ViewChatMembers: "Vezi membrii chat-ului",
    EditChat: "Editează descrierea chat-ului",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Părăsește acest chat",
    LeaveThisCommunity: "Părăsește această comunitate",
    JoinThisCommunity: "Alătură-te acestei comunități",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Comentarii recente la acest subiect:",
    NoComments: "Niciun comentariu.",

    YourBookmarks: "Semnele tale de carte:",

    UsersOnline: "Utilizatori online:",
    UsersOnlineForum: "Utilizatori online în acest forum:",
    UsersInThisChat: "Utilizatori în acest chat:",
    UsersInThisTopic: "Utilizatori în acest subiect:",

    GettingStartedGuide: "Ghidul administratorului", // was: "Getting Started Guide".
    AdminGuide: "Ghidul administratorului",          // ... but what? It's here already, just reuse this transl field
    Guide: "Ghid",

    // How to hide the sidebar.
    CloseShortcutS: "Închide (scurtătură tastatură: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Adaugă mai mulți oameni",

    // Shown next to one's own username, in a list of users.
    thatsYou: "ești tu",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Doar tu, se pare",
    YouAnd: "Tu și ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " persoană" : " persoane";
      const have = numStrangers === 1 ? "care nu s-a" : "care nu s-au";
      return numStrangers + people + " " + have + " autentificat";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Răspunsurile din stânga ar putea fi sortate după ",
    bestFirst: "cele mai bune primele.",
    ButBelow: "Dar mai jos ",
    insteadBy: " aceleași răspunsuri sunt în schimb sortate după ",
    newestFirst: "cele mai noi primele.",

    SoIfLeave: "Așa că dacă pleci și te întorci aici mai târziu, mai jos vei găsi ",
    allNewReplies: "toate răspunsurile noi.",
    Click: "Click",
    aReplyToReadIt: " pe un răspuns mai jos pentru a-l citi — deoarece mai jos este afișat doar un fragment.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Click pentru a schimba statusul",
    ClickToViewAnswer: "Click pentru a vedea răspunsul",
    ViewAnswer: "Vezi răspunsul",
    ChangeStatusC: "Schimbă statusul în:",
    ChangeCatC: "Schimbă categoria:",
    ChangeTopicTypeC: "Schimbă tipul subiectului:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "o întrebare",
    hasAccptAns: "are un răspuns acceptat",
    aProblem: "o problemă",
    planToFix: "plănuim să reparăm",
    anIdea: "o idee",
    planToDo: "plănuim să facem",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Acest formular a fost ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "închis; nu îl mai poți completa și posta.",

    ThisTopicClosed_1: "Acest subiect a fost ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Poți posta în continuare comentarii.",

    ThisPageDeleted: "Această pagină a fost ștearsă",
    CatDeldPageToo: "Categorie ștearsă, așa că și această pagină a fost ștearsă",

    ThreadDeld: "Fir de discuție șters",
    CmntDeld: "Comentariu șters",
    PostDeld: "Postare ștearsă",
    DiscDeld: "Discuție ștearsă",
    PageDeld: "Pagină ștearsă",
    PagePendAppr: "Pagină în așteptarea aprobării",
    TitlePendAppr: "Titlu în așteptarea aprobării",
    TextPendingApproval: "Text în așteptarea aprobării",

    TooltipQuestClosedNoAnsw: "Această întrebare a fost închisă fără niciun răspuns acceptat.",
    TooltipTopicClosed: "Acest subiect este închis.",

    TooltipQuestSolved: "Aceasta este o întrebare rezolvată",
    TooltipQuestUnsolved: "Aceasta este o întrebare nerezolvată",

    StatusDone: "Gata",
    TooltipProblFixed: "Acesta a fost reparat",
    TooltipDone: "Acesta a fost finalizat",

    StatusStarted: "Început",
    TooltipFixing: "Am început să reparăm acest lucru",
    TooltipImplementing: "Am început să facem acest lucru",

    StatusPlanned: "Planificat",
    TooltipProblPlanned: "Plănuim să reparăm acest lucru",
    TooltipIdeaPlanned: "Plănuim să facem acest lucru",

    StatusNew: "Nou",
    StatusNewDtl: "Subiect nou, în curs de discuție",
    TooltipUnsProbl: "Aceasta este o problemă nerezolvată",
    TooltipIdea: "Aceasta este o idee",

    TooltipPersMsg: "Mesaj personal",
    TooltipChat: "# înseamnă Canal de Chat",
    TooltipPrivChat: "Acesta este un canal de chat privat",

    TooltipPinnedGlob: "\nFixat global.",
    TooltipPinnedCat: "\nFixat în această categorie.",

    SolvedClickView_1: "Rezolvat în postarea #",
    SolvedClickView_2: ", click pentru a vedea",

    PostHiddenClickShow: "Postare ascunsă; click pentru a afișa",
    ClickSeeMoreRepls: "Afișează mai multe răspunsuri",
    ClickSeeMoreComments: "Afișează mai multe comentarii",
    ClickSeeThisComment: "Click pentru a afișa acest comentariu",
    clickToShow: "click pentru a afișa",

    ManyDisagree: "Mulți nu sunt de acord cu acest lucru:",
    SomeDisagree: "Unii nu sunt de acord cu acest lucru:",

    PendAppr: "În așteptarea aprobării",
    CmtPendAppr: "Comentariu în așteptarea aprobării, postat ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Comentariul tău" : "Comentariul") + " de mai jos este în așteptarea aprobării.",

    _and: " și",

    repliesTo: "răspunde la",
    InReplyTo: "Ca răspuns la",
    YourReplyTo: "Răspunsul tău la ",
    YourChatMsg: "Mesajul tău de chat: ",
    YourDraft: "Ciorna ta",
    YourEdits: "Editările tale: ",
    YourProgrNoteC: "Nota ta de progres:",
    aProgrNote: "o notă de progres: ",

    ReplyingToC: "Răspunde către:",
    ScrollToPrevw_1: "Derulează la ",
    ScrollToPrevw_2: "previzualizare",

    UnfinEdits: "Editări nefinalizate",
    ResumeEdting: "Reia editarea",
    DelDraft: "Șterge ciorna",

    ClickViewEdits: "Click pentru a vedea editările vechi",

    By: "De ", // ... someones name

    // Discussion ...
    aboutThisIdea: "despre cum și dacă să se pună în practică această idee",
    aboutThisProbl: "despre cum și dacă să se repare acest lucru",

    AddProgrNote: "Adaugă notă de progres",
    // Progress ...
    withThisIdea: "cu realizarea acestei idei",
    withThisProbl: "cu gestionarea acestei probleme",
    withThis: "cu realizarea acestui lucru",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notificări despre acest subiect:",

    // If is a direct message topic, members listed below this text.
    Msg: "Mesaj",

    SmrzRepls: "Rezumat răspunsuri",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Sunt ${numReplies} răspunsuri. Timp estimat de lectură: ${minutes} minute`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Gata. S-au rezumat ${numSummarized} răspunsuri, din cele ${numShownBefore} răspunsuri afișate anterior.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Închide subiectul",
    CloseOwnQuestionTooltip: "Închide această întrebare dacă nu mai ai nevoie de un răspuns.",
    CloseOthersQuestionTooltip: "Închide această întrebare dacă nu necesită un răspuns, de ex. dacă " +
        "este în afara subiectului sau a primit deja răspuns într-un alt subiect.",
    CloseToDoTooltip: "Închide această sarcină dacă nu mai trebuie făcută sau reparată.",
    CloseTopicTooltip: "Închide acest subiect dacă nu mai necesită atenție.",

    AcceptBtnExpl: "Acceptă acesta ca răspuns la întrebare sau problemă",
    SolutionQ: "Soluție?",
    ClickUnaccept: "Click pentru a anula acceptarea acestui răspuns",
    PostAccepted: "Această postare a fost acceptată ca răspuns",

    NumLikes: (num: number) => num === 1 ? "1 Aprecieri" : num + " Aprecieri",
    NumDisagree: (num: number) => num + " Dezacord",
    NumBury: (num: number) => num === 1 ? "1 Îngropat" : num + " Îngropate",
    NumUnwanted: (num: number) => num === 1 ? "1 Nedorit" : num + " Nedorite",

    MoreVotes: "Mai multe voturi...",
    LikeThis: "Apreciază",
    LinkToPost: "Link către această postare",
    Report: "Raportează",
    ReportThisPost: "Raportează această postare",
    Admin: "Admin",
    DiscIx: "Index discuții",

    Disagree: "Dezacord",
    DisagreeExpl: "Click aici pentru a-ți exprima dezacordul cu această postare sau pentru a-i avertiza pe alții despre erori factuale.",
    Bury: "Îngroapă",
    BuryExpl: "Click pentru a sorta alte postări înaintea acesteia. Doar personalul forumului poate vedea votul tău.",
    Unwanted: "Nedorit",
    UnwantedExpl: "Dacă nu dorești această postare pe site. Acest lucru ar reduce încrederea pe care o am " +
            "în autorul postării. Doar personalul forumului poate vedea votul tău.",

    AddTags: "Adaugă/elimină etichete",
    UnWikify: "Anulează Wiki",
    Wikify: "Transformă în Wiki",
    PinDeleteEtc: "Fixează / Șterge / Categorie ...",
  },


  // Share dialog

  sd: {
    Copied: "Copiat.",
    CtrlCToCopy: "Apasă CTRL+C pentru a copia.",
    ClickToCopy: "Click pentru a copia link-ul.",
  },


  // Chat

  c: {
    About_1: "Acesta este canalul de chat ",
    About_2: ", creat de ",
    ScrollUpViewComments: "Derulează în sus pentru a vedea comentariile mai vechi",
    Purpose: "Scop:",
    MessageDeleted: "(Mesaj șters)",
    JoinThisChat: "Alătură-te acestui chat",
    PostMessage: "Postează mesaj",
    AdvancedEditor: "Editor avansat",
    TypeTitle: "Introdu un titlu — despre ce este acest chat, în câteva cuvinte?",
    TypePurpose: "Introdu un scop — poate fi mai lung decât titlul, mai descriptiv.",
    TypeHere: "Scrie aici. Poți folosi Markdown și HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Necesită revizuire ",
    AdminHelp: "Ajutor admin ",
    StaffHelp: "Ajutor personal ",
    DraftsEtc: "Ciorne, semne de carte, sarcini",
    MoreNotfs: "Vezi toate notificările",
    DismNotfs: "Marchează-le pe toate ca citite",
    ViewProfile: "Vezi profilul tău",
    ViewGroups: "Vezi grupurile",
    LogOut: "Deconectare",
    UnhideHelp: "Afișează mesajele de ajutor",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Derulează la:",
    Scroll: "Derulează",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "Î",
    Back_2: "napoi",
    BackExpl: "Derulează înapoi la poziția anterioară pe această pagină",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Sus",
    PgTopHelp: "Mergi la începutul paginii. Scurtătură tastatură: 1",
    Repl: "Răspunsuri",
    ReplHelp: "Mergi la secțiunea de Răspunsuri. Scurtătură: 2",
    Progr: "Progres",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Mergi la secțiunea de Progres. Scurtătură: 3",
    PgBtm: "Jos",
    Btm: "La final",
    BtmHelp: "Mergi la sfârșitul paginii. Scurtătură: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " și ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " pentru a derula înapoi",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Selectează utilizatori",
    AddUsers: "Adaugă utilizatori",
  },


  // About user dialog

  aud: {
    IsMod: "Este moderator.",
    IsAdm: "Este administrator.",
    IsDeld: "Este dezactivat sau șters.",
    ThisIsGuest: "Acesta este un oaspete, ar putea fi oricine.",
    ViewInAdm: "Vezi în zona de administrare",
    ViewProfl: "Vezi profilul",
    ViewComments: "Vezi alte comentarii",
    RmFromTpc: "Elimină din subiect",
    EmAdrUnkn: "Adresă de email necunoscută — acest oaspete nu va fi notificat despre răspunsuri.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Preferințe",
    Invites: "Invitații",
    DraftsEtc: "Ciorne etc",
    About: "Despre",
    Privacy: "Confidențialitate",
    Security: "Securitate",
    Account: "Cont",
    Interface: "Interfață",

    // ----- Overview stats

    JoinedC: "Alăturat la: ",
    PostsMadeC: "Postări făcute: ",
    LastPostC: "Ultima postare: ",
    LastSeenC: "Văzut ultima dată: ",
    TrustLevelC: "Nivel de încredere: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Încarcă fotografie",
    ChangePhoto: "Schimbă fotografia",
    ImgTooSmall: "Imagine prea mică: ar trebui să fie de cel puțin 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Doar personalul și membrii de bază de încredere pot vedea acest lucru.",
    OnlyMbrsCanSee: "Doar persoanele care au fost membri activi pentru o perioadă pot vedea acest lucru.",
    Nothing: "Nimic de afișat",
    Posts: "Postări",
    NoPosts: "Nicio postare.",
    Topics: "Subiecte",
    NoTopics: "Niciun subiect.",

    // ----- User status

    UserBanned: "Acest utilizator este banat",
    UserSuspended: (dateUtc: string) => `Acest utilizator este suspendat până pe ${dateUtc} UTC`,
    ReasonC: "Motiv: ",

    DeactOrDeld: "A fost dezactivat sau șters.",
    isGroup: " (un grup)",
    isGuest: " — un oaspete, ar putea fi oricine",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(tu)",

    // ----- Notifications page

    NoNotfs: "Nicio notificare",
    NotfsToYouC: "Notificări pentru tine:",
    NotfsToOtherC: (name: string) => `Notificări pentru ${name}:`,
    DefNotfsSiteWide: "Notificări implicite pe tot site-ul",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "pentru",

    // ----- Drafts Etc page

    NoDrafts: "Nicio ciornă",
    YourDraftsC: "Ciornele tale:",
    DraftsByC: (name: string) => `Ciorne făcute de ${name}:`,

    // ----- Invites page

    InvitesIntro: "Aici poți invita oameni să se alăture acestui site. ",
    InvitesListedBelow: "Invitațiile pe care le-ai trimis deja sunt listate mai jos.",
    NoInvites: "Nu ai invitat pe nimeni încă.",

    InvitedEmail: "Email invitat",
    WhoAccepted: "Membru care a acceptat",
    InvAccepted: "Invitație acceptată",
    InvSent: "Invitație trimisă",
    JoinedAlready: "S-a alăturat deja",

    SendAnInv: "Invită oameni", // was: "Send an Invite",
    SendInv: "Trimite invitații",
    SendInvExpl:
        "Le vom trimite prietenilor tăi un scurt email. Vor da click pe un link " +
        "pentru a se alătura imediat, fără a fi necesară autentificarea. " +
        "Vor deveni membri obișnuiți, nu moderatori sau admini.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Gata. Le voi trimite un email.",
    NoOneToInv: "Nimeni de invitat.",
    InvNotfLater: "Te voi notifica mai târziu, când îi voi invita.",
    AlreadyInvSendAgainQ: "Aceștia au fost deja invitați — poate vrei să îi inviți din nou?",
    InvErr_1: "Acestea au rezultat în ",
    InvErr_2: "erori",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Aceștia s-au alăturat deja, deci nu i-am invitat:",
    ResendInvsQ: "Retrimite invitații către acești oameni? Au fost deja invitați.",
    InvAgain: "Invită din nou",

    // ----- Preferences, About

    AboutYou: "Despre tine",
    WebLink: "Orice site sau pagină a ta.",

    NotShownCannotChange: "Nu este afișat public. Nu poate fi schimbat.",

    // The full name or alias:
    NameOpt: "Nume (opțional)",

    NotShown: "Nu este afișat public.",

    // The username:
    MayChangeFewTimes: "Îl poți schimba doar de câteva ori.",
    notSpecified: "(nespecificat)",
    ChangeUsername_1: "Îți poți schimba numele de utilizator doar de câteva ori.",
    ChangeUsername_2: "Schimbarea lui prea des îi poate deruta pe ceilalți — " +
        "nu vor ști cum să te menționeze cu @.",

    NotfAboutAll: "Primește notificări despre fiecare postare nouă (cu excepția cazului în care pui subiectul sau categoria pe mut)",
    NotfAboutNewTopics: "Primește notificări despre subiecte noi (cu excepția cazului în care pui categoria pe mut)",

    ActivitySummaryEmails: "Email-uri cu rezumatul activității",

    EmailSummariesToGroup:
        "Când membrii acestui grup nu vizitează acest site, atunci, în mod implicit, trimite-le email-uri cu " +
        "rezumate ale subiectelor populare și alte lucruri.",
    EmailSummariesToMe:
        "Când nu vizitez acest site, trimite-mi prin email " +
        "rezumate ale subiectelor populare și alte lucruri.",

    AlsoIfTheyVisit: "Trimite-le email-uri și dacă vizitează acest site în mod regulat.",
    AlsoIfIVisit: "Trimite-mi email-uri și dacă vizitez acest site în mod regulat.",

    HowOftenWeSend: "Cât de des să trimitem aceste email-uri?",
    HowOftenYouWant: "Cât de des dorești aceste email-uri?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Ascunzi activitatea ta recentă pentru străini și membrii noi?",
    HideActivityStrangers_2: "(But not for those who have been active members for a while.)",
    HideActivityAll_1: "Ascunzi activitatea ta recentă pentru toată lumea?",
    HideActivityAll_2: "(Cu excepția personalului și a membrilor de bază de încredere.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Adrese de email",
    PrimaryDot: "Principală. ",
    VerifiedDot: "Verificată. ",
    NotVerifiedDot: "Neverificată. ",
    ForLoginWithDot: (provider: string) => `Pentru autentificare cu ${provider}. `,
    MakePrimary: "Fă-o principală",
    AddEmail: "Adaugă adresă de email",
    TypeNewEmailC: "Introdu o nouă adresă de email:",
    MaxEmailsInfo: (numMax: number) => `(Nu poți adăuga mai mult de ${numMax} adrese.)`,
    EmailAdded_1: "Adăugată. Ți-am trimis un email de verificare — ",
    EmailAdded_2: "verifică-ți căsuța poștală.",
    SendVerifEmail: "Trimite email de verificare",

    EmailStatusExpl:
        "('Principală' înseamnă că te poți autentifica prin această adresă și că trimitem notificări către ea. " +
        "'Verificată' înseamnă că ai dat click pe un link de verificare într-un email de verificare a adresei.)",

    // Password:
    ChangePwdQ: "Schimbi parola?",
    CreatePwdQ: "Creezi parolă?",
    WillGetPwdRstEml: "Vei primi un email de resetare a parolei.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Niciuna",

    // Logins:
    LoginMethods: "Metode de autentificare",
    commaAs: ", ca: ",

    // One's data:
    YourContent: "Conținutul tău",
    DownloadPosts: "Descarcă postările",
    DownloadPostsHelp: "Creează un fișier JSON cu o copie a subiectelor și comentariilor pe care le-ai postat.",
    DownloadPersData: "Descarcă datele personale",
    DownloadPersDataHelp: "Creează un fișier JSON cu o copie a datelor tale personale, de ex. numele tău " +
        "(dacă ai specificat unul) și adresa de email.",


    // Delete account:
    DangerZone: "Zonă periculoasă",
    DeleteAccount: "Șterge contul",
    DeleteYourAccountQ:
        "Ștergi contul tău? Vom elimina numele tău, vom uita adresa de email, parola și " +
        "orice identități online (cum ar fi autentificarea prin Facebook sau Twitter). " +
        "Nu te vei mai putea autentifica. Această acțiune este ireversibilă.",
    DeleteUserQ:
        "Ștergi acest utilizator? Vom elimina numele, vom uita adresa de email, parola și " +
        "identitățile online (cum ar fi autentificarea prin Facebook sau Twitter). " +
        "Utilizatorul nu se va mai putea autentifica. Această acțiune este ireversibilă.",
    YesDelete: "Da, șterge",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Membrii grupului",
    NoMembers: "Niciun membru.",
    MayNotListMembers: "Este posibil să nu listeze membrii.",
    AddMembers: "Adaugă membri",
    BuiltInCannotModify: "Acesta este un grup predefinit; nu poate fi modificat.",
    NumMembers: (num: number) => `${num} membri`,
    YouAreMember: "Ești membru.",
    CustomGroupsC: "Grupuri personalizate:",
    BuiltInGroupsC: "Grupuri predefinite:",
    DeleteGroup: "Șterge acest grup",
  },


  // Create user dialog

  cud: {
    CreateUser: "Creează utilizator",
    CreateAccount: "Creează cont",
    EmailC: "Email:",
    keptPriv: "va fi păstrat privat",
    forNotfsKeptPriv: "pentru notificări de răspuns, păstrat privat",
    EmailVerifBy_1: "Email-ul tău a fost verificat prin ",
    EmailVerifBy_2: ".",
    UsernameC: "Nume utilizator:",
    FullNameC: "Nume complet:",
    optName: "opțional",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Cont creat. Ai fost autentificat.",  // COULD say if verif email sent too?
    AlmostDone:
        "Aproape gata! Trebuie doar să îți confirmi adresa de email. Ți-am " +
        "trimis un email. Te rugăm să dai click pe link-ul din email pentru a-ți activa " +
        "contul. Poți închide această pagină.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Termeni și confidențialitate",

    Accept_1: "Accepți ",
    TermsOfService: "Termenii de serviciu",
    TermsOfUse: "Termenii de utilizare",
    Accept_2: " și ",
    PrivPol: "Politica de confidențialitate",
    Accept_3_User: "?",
    Accept_3_Owner: " pentru proprietarii de site-uri?",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Da, accept",
  },


  // Password input

  pwd: {
    PasswordC: "Parolă:",
    StrengthC: "Complexitate: ",
    FairlyWeak: "Destul de slabă.",
    toShort: "prea scurtă",
    TooShort: (minLength: number) => `Prea scurtă. Ar trebui să aibă cel puțin ${minLength} caractere`,
    PlzInclDigit: "Te rugăm să incluzi o cifră sau un caracter special",
    TooWeak123abc: "Prea slabă. Nu folosi parole de tipul '12345' sau 'abcde'.",
    AvoidInclC: "Evită includerea (unor părți din) numelui sau email-ului tău în parolă:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Pagina nu a fost găsită sau accesul este refuzat.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Ești în locul altcuiva, care ar putea să nu aibă acces la toate părțile " +
        "acestui site.",

    IfYouThinkExistsThen: "Dacă crezi că pagina există, autentifică-te ca cineva care o poate accesa. ",
    LoggedInAlready: "(Ești deja autentificat, dar poate este contul greșit?) ",
    ElseGoToHome_1: "Altfel, poți să ",
    ElseGoToHome_2: "mergi la pagina principală.",

    CreateAcconut: "Creează cont",
    ContinueWithDots: "Continuă cu ...",
    SignUp: "Alătură-te",
    LogIn: "Autentificare",
    LogInWithPwd: "Autentificare cu parolă",
    CreateAdmAcct: "Creează cont de administrator:",
    AuthRequired: "Este necesară autentificarea pentru a accesa acest site",
    LogInToLike: "Autentifică-te pentru a aprecia această postare",
    LogInToSubmit: "Autentifică-te și trimite",
    LogInToComment: "Autentifică-te pentru a scrie un comentariu",
    LogInToCreateTopic: "Autentifică-te pentru a crea un subiect",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "Sau ",         // "Or "
    OrLogIn_2: "Autentifică-te",      // "Log in" (this is a button)
    OrLogIn_3: " în schimb",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Sau ",
    SignUpInstead_2: "Creează cont", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", sau doar ",
    OrTypeName_2: "introdu un nume",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Sau creează un cont:",
    OrTypeName: "Sau introdu numele tău:",
    OrLogIn: "Sau autentifică-te:",
    YourNameQ: "Numele tău?",

    BadCreds: "Nume de utilizator sau parolă greșite",

    UsernameOrEmailC: "Nume utilizator sau email:",
    PasswordC: "Parolă:",
    ForgotPwd: "Ai uitat parola?",

    NoPwd: "Nu ai ales încă o parolă.",
    CreatePwd: "Creează parolă",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Te rugăm să ne spui ce te îngrijorează.",
    ThanksHaveReported: "Mulțumim. Ai raportat acest lucru. Personalul forumului va analiza situația.",
    ReportComment: "Raportează comentariul",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Această postare conține date personale, de exemplu numele real al cuiva.",
    OptOffensive: "Această postare conține conținut ofensator sau abuziv.",
    OptSpam: "Această postare este o reclamă nedorită.",
    OptOther: "Notifică personalul despre această postare din alt motiv.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Poți afișa mesajele de ajutor din nou, dacă ești autentificat, prin " +
        "click pe numele tău și apoi pe ",
    YouCanShowAgain_2: "Afișează mesajele de ajutor",
  },


  // Editor

  e: {
    SimilarTopicsC: "Subiecte similare:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Ne pare rău, dar momentan poți încărca doar un singur fișier odată",
    PleaseFinishPost: "Te rugăm să termini mai întâi de scris postarea",
    PleaseFinishChatMsg: "Te rugăm să termini mai întâi de scris mesajul de chat",
    PleaseFinishMsg: "Te rugăm să termini mai întâi de scris mesajul",
    PleaseSaveEdits: "Te rugăm să salvezi mai întâi editările actuale",
    PleaseSaveOrCancel: "Te rugăm să salvezi sau să anulezi mai întâi noul subiect",
    CanContinueEditing: "Poți continua editarea textului dacă deschizi din nou editorul.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Te rugăm să nu ștergi tot textul. Scrie ceva.",
    PleaseWriteSth: "Te rugăm să scrii ceva.",
    PleaseWriteTitle: "Te rugăm să scrii un titlu pentru subiect.",
    PleaseWriteMsgTitle: "Te rugăm să scrii un titlu pentru mesaj.",
    PleaseWriteMsg: "Te rugăm să scrii un mesaj.",

    exBold: "text îngroșat",
    exEmph: "text accentuat",
    exPre: "text preformatat",
    exQuoted: "text citat",
    ExHeading: "Titlu",

    TitlePlaceholder: "Introdu un titlu — despre ce este vorba, într-o singură propoziție scurtă?",

    EditPost_1: "Editează ",
    EditPost_2: "postarea ",

    TypeChatMsg: "Introdu un mesaj de chat:",
    YourMsg: "Mesajul tău:",
    CreateTopic: "Creează un subiect nou",
    CreateCustomHtml: "Creează o pagină HTML personalizată (adaugă propriul titlu <h1>)",
    CreateInfoPage: "Creează o pagină de informații",
    CreateCode: "Creează o pagină de cod sursă",
    AskQuestion: "Pune o întrebare",
    ReportProblem: "Raportează o problemă",
    SuggestIdea: "Sugerează o idee",
    NewChat: "Titlu chat și scop",
    NewPrivChat: "Titlu chat privat și scop",
    AppendComment: "Adaugă un comentariu la sfârșitul paginii:",

    ReplyTo: "Răspuns către ",
    ReplyTo_theOrigPost: "Postarea Originală",
    ReplyTo_post: "postarea ",
    AddCommentC: "Adaugă un comentariu:",

    PleaseSelectPosts: "Te rugăm să selectezi una sau mai multe postări la care să răspunzi.",

    Save: "Salvează",
    edits: "editări",

    PostReply: "Postează răspunsul",
    PostComment: "Postează comentariul",

    Post: "Postează",
    comment: "comentariul",
    question: "întrebarea",

    PostMessage: "Postează mesajul",
    SimpleEditor: "Editor simplu",

    Send: "Trimite",
    message: "mesajul",

    Create: "Creează",
    page: "pagina",
    chat: "chat-ul",
    idea: "ideea",
    topic: "subiectul",

    Submit: "Trimite",
    problem: "problema",

    ViewOldEdits: "Vezi editările vechi",

    UploadBtnTooltip: "Încarcă un fișier sau o imagine",
    BoldBtnTooltip: "Îngroașă textul",
    EmBtnTooltip: "Accentuează",
    QuoteBtnTooltip: "Citat",
    PreBtnTooltip: "Text preformatat",
    HeadingBtnTooltip: "Titlu",

    TypeHerePlaceholder: "Scrie aici. Poți folosi Markdown și HTML. Trage și plasează pentru a insera imagini.",

    Maximize: "Maximizează",
    ToNormal: "Înapoi la normal",
    TileHorizontally: "Aranjează orizontal",

    PreviewC: "Previzualizare:",
    TitleExcl: " (titlu exclus)",
    ShowEditorAgain: "Afișează editorul din nou",
    Minimize: "Minimizează",

    PreviewInfo: "Aici poți previzualiza cum va arăta postarea ta.",
    CannotType: "Nu poți scrie aici.",

    LoadingDraftDots: "Se încarcă ciorna...",
    DraftUnchanged: "Neschimbat.",
    CannotSaveDraftC: "Nu s-a putut salva ciorna:",
    DraftSavedBrwsr: "Ciornă salvată în browser.",
    DraftSaved: (nr: string | number) => `Ciorna ${nr} a fost salvată.`,
    DraftDeleted: (nr: string | number) => `Ciorna ${nr} a fost ștearsă.`,
    WillSaveDraft: (nr: string | number) => `Se va salva ciorna ${nr} ...`,
    SavingDraft: (nr: string | number) => `Se salvează ciorna ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Se șterge ciorna ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Selectează categoria",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Selectează tipul subiectului:",
    DiscussionExpl: "O discuție despre ceva.",
    QuestionExpl: "Un singur răspuns poate fi marcat ca răspuns acceptat.",
    ProblExpl: "Dacă ceva este stricat sau nu funcționează. Poate fi marcat ca reparat/rezolvat.",
    IdeaExpl: "O sugestie. Poate fi marcată ca finalizată/implementată.",
    ChatExpl: "O conversație care s-ar putea să nu se termine niciodată.",
    PrivChatExpl: "Vizibil doar persoanelor care sunt invitate să se alăture chat-ului.",

    CustomHtml: "Pagină HTML personalizată",
    InfoPage: "Pagină de informații",
    Code: "Cod",
    EmbCmts: "Comentarii încorporate",
    About: "Despre",
    PrivChat: "Chat privat",
    Form: "Formular",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Nu mai sunt comunități la care să te alături.",
    SelCmty: "Selectează comunitatea ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Caută ajutor",
    TxtToFind: "Text de căutat",
  },


  // No internet

  ni: {
    NoInet: "Nicio conexiune la internet",
    PlzRefr: "Reîmprospătează pagina pentru a vedea cele mai recente modificări. (A avut loc o deconectare)",
    RefrNow: "Reîmprospătează acum",
  },


  PostDeleted: (postNr: number) => `Acea postare, nr ${postNr}, a fost ștearsă.`,
  NoSuchPost: (postNr: number) => `Nu există nicio postare nr ${postNr} pe această pagină.`,
  NoPageHere: "Această pagină a fost ștearsă, sau nu a existat niciodată, sau nu ai acces la ea.",
  GoBackToLastPage: "Mergi înapoi la ultima pagină",

};
