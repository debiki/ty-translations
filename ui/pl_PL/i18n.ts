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

var t_pl_PL: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktwny",
  Activity: "Aktywność",
  Add: "Dodaj",
  AddingDots: "Dodawanie ...",
  AddComment: "Dodaj komentarz",
  Admin: "Admin",
  AdvSearch: "Wyszukiwanie zaawansowane",
  Away: "Zaraz wracam",
  Back: "Z powrotem",
  BlogN: "Blog",
  Bookmarks: "Zakładki",
  Cancel: "Anuluj",
  Categories: "Kategorie",
  Category: "Kategoria",
  ChangeV: "Zmiana",
  Continue: "Kontynuuj",
  ClickToShow: "Kliknij, aby pokazać",
  ChangeDots: "Zmień ...",
  ChatN: "Czat",
  Chatting: "Rozmawiają",
  CheckYourEmail: "Sprawdź skrzynkę mailową",
  Close: "Zamknij",
  closed: "zamknięty",
  comments: "komentarze",   // as in:  "123 comments"    MAYBE
  Created: "Utworzony",
  Delete: "Usuń",
  Deleted: "Usunięte",
  DirectMessage: "Bezpośrednia wiadomość",
  Discussion: "Dyskusja",
  discussion: "dyskusja",
  done: "zrobione",
  EditV: "Edytuj",
  Editing: "Edytowane",
  EmailC: "Email: ",
  EmailAddress: "Adres email",
  EmailAddresses: "Adresy mailowe",
  EmailSentD: "Wysłano mail.",
  Forum: "Forum",
  GetNotifiedAbout: "Powiadamiaj mnie o",
  GroupsC: "Grupy:",
  Hide: "Ukryj",
  Home: "Strona domowa",
  Idea: "Pomysł",
  Join: "Dołącz",
  KbdShrtcsC: "Skróty klawiszowe: ",
  Loading: "Ładowanie...",
  LoadMore: "Załaduj więcej ...",
  LogIn: "Zaloguj",
  LoggedInAs: "Zalogowany jako ",
  LogOut: "Wyloguj",
  Maybe: "Być może",
  Manage: "Zarządzaj",
  Members: "Członkowie",
  MessageN: "Wiadomość",
  MoreDots: "Więcej...",
  Move: "Przenieś",
  Name: "Imię",
  NameC: "Imię:",
  NewTopic: "Nowy wątek",
  NoCancel: "Ne, anuluj",
  Notifications: "Powiadomienia",
  NotImplemented: "(Nie zaimplementowano)",
  NotYet: "Jeszcze nie",
  NoTitle: "Bez tytułu",
  NoTopics: "Brak wątków.",
  Okay: "Ok",
  OkayDots: "Ok ...",
  Online: "Online",
  onePerLine: "jeden na wiersz",
  PreviewV: "Podgląd",
  Problem: "Problem",
  progressN: "postęp",
  Question: "Pytanie",
  Recent: "Ostatni",
  Remove: "Usuń",
  Reopen: "Otwórz ponownie",
  ReplyV: "Odpowiedz",
  Replying: "Odpowiadam",
  Replies: "Odpowiedzi",
  replies: "odpowiedzi",
  Save: "Zapisz",
  SavingDots: "Zapisywanie ...",
  SavedDot: "Zapisano.",
  Search: "Szukaj",
  SendMsg: "Wyślij wiadomość",
  ShowPreview: "Pokaż podgląd",
  SignUp: "Zarejestruj się",
  Solution: "Rozwiązanie",
  started: "rozpoczęto",
  Summary: "Podsumowanie",
  Submit: "Zatwierdź",
  Tag: "Tag",
  Tags: "Tagi",
  Tools: "Narzędzia",
  Topics: "Wątki",
  TopicTitle: "Tytuł wątku",
  TopicType: "Typ wątku",
  UploadingDots: "Przesyłanie...",
  Username: "Nazwa użytkownika",
  Users: "Użytkownicy",
  Welcome: "Witaj",
  Wiki: "Wiki",
  Yes: "Tak",
  YesBye: "Tak, do widzenia",
  YesDoThat: "Tak, zrób to",
  You: "Ty",
  you: "ty",

  // Trust levels.
  Guest:  "Gość",
  NewMember: "Nowy członek",
  BasicMember: "Uczestnik dyskusji",
  FullMember: "Dyskutant",
  TrustedMember: "Zaufany członek",
  RegularMember: "Częsty bywalec",
  CoreMember: "Personel forum",

  // Periods.
  PastDay: "Ostatni dzień",
  PastWeek: "Ostatni tydzień",
  PastMonth: "Ostatni miesiąc",
  PastQuarter: "Ostatni kwartał",
  PastYear: "Ostatni rok",
  AllTime: "Od początku",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mc",   // months
  daysLtr: "d",      // days
  hoursLtr: "h",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "wczoraj" : `${numDays} dni temu`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "godzinę temu" : `${numHours} godzin temu`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "minutę temu" : `${numMins} minut temu`,
  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "kilka sekund temu" : `${numSecs} sekund temu`,

  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Adres email wymagany",
    NoSpcs: "Bez spacji",
    InvldAddr: "Nieprawidłowy adres email",
    NoBadChrs: "Bez specjanych znaków",

    // Full name input field:
    NotOnlSpcs: "Nie uzupełniaj tego pola tylko spacjami",
    NoAt: "Nie używaj znaku @",

    // Username input field:
    NoDash: "Nie używaj myślników (-)",
    DontInclAt: "Nie wpisuj @",
    StartEndLtrDgt: "Zacznij i zakończ literą lub cyfrą",
    OnlLtrNumEtc: "Tylko litery (a-z, A-Z) i liczby oraz _ (podkreślnik)",
    // This shown just below the username input:
    UnUnqShrt_1: "Twoja ",
    UnUnqShrt_2: "@nazwaUżytkownika",
    UnUnqShrt_3: ", unikalna i krótka",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Powinny być conajmniej ${minLength} znaki`,
    TooLong: (maxLength: number) => `Za długie. Powinny być maksymalnie ${maxLength} znaków`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Wszystkie powiadomienia",
    EveryPostInTopic: "Będziesz otrzymywać powiadomienia o wszystkich odpowiedziach w tym wątku.",
    EveryPostInCat: "Będziesz otrzymywać powiadomienia o wszystkich nowych wątkach i odpowiedziach w tej kategorii.",
    EveryPostInTopicsWithTag: "Będziesz otrzymywać powiadomienia o nowych wątkach z tym tagiem i o każdym poście w tych wątkach.",
    EveryPostWholeSite: "Będziesz otrzymywać powiadomienia o wszystkich nowych wątkach i odpowiedziach.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Powiadamiaj tylko o nowych wątkach",
    NewTopicsInCat: "Będziesz otrzymywać powiadomienia o wszystkich nowych wątkach w tej kategorii.",
    NewTopicsWithTag: "Powiadamiaj o nowych wątkach z tym tagiem.",
    NewTopicsWholeSite: "Będziesz otrzymywać powiadomienia o wszystkich nowych wątkach.",

    Tracking: "Śledzone",

    Normal: "Podstawowe powiadomienia",
    NormalDescr: "Będziesz powiadamiany, gdy ktoś pisze do Ciebie, także niewprost, np. " +
      "odpowiada na Twoją odpowiedź.",
    //NormalTopic_1: "Otrzymasz powiadomienie, gdy ktoś Ci odpowie lub wspomni Twoją ",
    //NormalTopic_2: "@nazwęUżytkownika",

    Hushed: "Wyciszony",
    HushedDescr: "Będziesz powiadamiany, gdy ktoś pisze bezpośrednio do Ciebie.",

    Muted: "Brak powiadomień",
    MutedTopic: "Brak powiadomień o tym wątku.",
  },


  // Forum intro text

  fi: {
    Edit: "Edytuj",
    Hide_1: "Ukryj",
    Hide_2: ", kliknij ",
    Hide_3: " aby otworzyć ponownie",
  },


  // Forum categories

  fcs: {
    All: "Wszystkie", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Lista wątków",

    // Select category dropdown

    from: "od",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "w",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Wszystkie kategorie",

    // Topic sort order

    Active: "Aktywne",
    ActiveDescr: "Ostatnio aktywne jako pierwsze",

    New: "Nowy",
    NewDescr: "Nowe jako pierwsze",

    Top: "Top",
    TopDescr: "Popularne jako pierwsze",

    // Topic filter dropdown

    AllTopics: "Wszystkie wątki",

    ShowAllTopics: "Pokaż wszystkie wątki",
    ShowAllTopicsDescr: "Nie usunięte wątki",

    WaitingTopics: "Oczekujące wątki",
    OnlyWaitingDescr_1: "Pokaż tylko pytania ",
    OnlyWaitingDescr_2: "oczekujące ",
    OnlyWaitingDescr_3: "na rozwiązanie, oraz pomysły i problemy którymi jeszcze nikt się nie zajął",

    YourTopics: "Twoje wątki",
    AssignedToYou: "Przypisane do Ciebie",

    DeletedTopics: "Wątki usuniętę",
    ShowDeleted: "Pokaż usunięte",
    ShowDeletedDescr: "Pokaż wszystkie wątki łącznie z usuniętymi",

    // Rightmost buttons

    ViewCategories: "Pokaż kategorie",
    EditCat: "Edytuj kategorię",
    CreateCat: "Utwórz kategorię",
    CreateTopic: "Nowy wątek",
    PostIdea: "Opublikuj pomysł",
    AskQuestion: "Zadaj pytanie",
    ReportProblem: "Zgłoś problem",
    CreateMindMap: "Utwórz mapę myśli",
    CreatePage: "Utwórz stronę",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Objaśnij znaczenie ikon...",
    IconExplanation: "Znaczenie ikon:",
    ExplGenDisc: "Ogólna dyskusja.",
    ExplQuestion: "Pytanie bez zaakceptowanej odpowiedzi.",
    ExplAnswer: "Pytanie z zaakceptowaną odpowiedzią.",
    ExplIdea: "Pomysł / sugestja.",
    ExplProblem: "Problem.",
    ExplPlanned: "Coś, co zamierzamy zrobić lub naprawić.",
    ExplDone: "Coś, co zostało zrobione lub naprawione.",
    ExplClosed: "Wątek zamknięty.",
    ExplPinned: "Temat zawsze jest wyswietlany jako pierwszy.",

    PopularTopicsComma: "Popularne wątki, ",
    TopFirstAllTime: "Wyświetla najpopulanrniejsz wątki z calego czasu.",
    TopFirstPastDay: "Wyświetla najpopularniejsze wątki z ostatniego dnia.",

    CatHasBeenDeleted: "Ta kategoria została usunięta",

    TopicsActiveFirst: "Ostatnio aktywne wątki jako pierwsze",
    TopicsNewestFirst: "Najnowsze wątki jako pierwsze",

    CreatedOn: "Utworzony ",
    LastReplyOn: "\nOstatnia odpowiedź ",
    EditedOn: "\nEdytowany ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "utworzył wątek",
    frequentPoster: "często piszący",
    mostRecentPoster: "napisał ostatni post",

    inC: "w: ",

    TitleFixed: "To zostało naprawione",
    TitleDone: "To zostało zrobione",
    TitleStarted: "Zaczęliśy to",
    TitleStartedFixing: "Zaczęliśmy to naprawiać",
    TitleUnsolved: "To nierozwiązany problem",
    TitleIdea: "To jest pomysł",
    TitlePlanningFix: "Planujemy to naprawić",
    TitlePlanningDo: "Planujemy to zrobić",
    TitleChat: "To jest kanał czatowy",
    TitlePrivateChat: "To jest prywatny kanał czatowy",
    TitlePrivateMessage: "Prywatna wiadomość",
    TitleInfoPage: "To jest strona informacyjna",
    TitleDiscussion: "Dyskusja",
    IsPinnedGlobally: "\nTo zostało przypięte, więc jest wyświetlane jako pierwsze.",
    IsPinnedInCat: "\nTo zostało przypięte w tej kategorii, więc jest wyświetlane jako pierwsze w tej kategorii.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Ostatnie wątki (oczekujące)",
    RecentTopicsInclDel: "Ostatnie wątki (włącznie z usuniętymi)",
    RecentTopics: "Ostatnie wątki",
    _replies: " odpowiedzi",
    _deleted: " (usunięty)",
    _defCat: " (domyślna kategoria)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Najnowsze posty",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online na tym czacie",    // example: "5 online in this chat"
    NumOnlForum: " online na tym forum",

    // Open left-sidebar button title.
    WatchbBtn: "Twoje wątki",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Twoje najnowsze wątki, czaty i wiadomości bezpośrednie",

    // Title shown on user profile pages.
    AbtUsr: "O użytkowniku",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Wyjdź z profilu użytkownika",
    BackFromAdm: "Wyjdź z przestrzeni administracyjnej",

    // Title shown on full text search page.
    SearchPg: "Przeszukaj stronę",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Dodaj ...",
    RecentlyViewed: "Ostatnio przeglądane",
    JoinedChats: "Otwarte czaty",
    ChatChannels: "Czaty",
    CreateChat: "Utwórz czat",
    DirectMsgs: "Wiadomości bezpośrednie",
    NoChats: "Żaden",    // meaning: "No chat messages"
    NoDirMsgs: "Żaden",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Opcje wątku",
    ViewPeopleHere: "Wyświetl użytkowników którzy tutaj są",
    ViewAddRemoveMembers: "Wyświetl / dodaj / usuń członków",
    ViewChatMembers: "Wyświetl członków czatu",
    EditChat: "Edytuj opis czatu",   // REVIEW
    //EditChat: "Edytuj tytuł i opis czatu", // Keep, in case adds back edit-title input
    LeaveThisChat: "Opuść czat",
    LeaveThisCommunity: "Opuść społeczność",
    JoinThisCommunity: "Dołącz do społeczności",
  },


  // Contextbar (the sidebar to the right), code currently in sidebar.ts (not renamed yet)

  cb: {
    RecentComments: "Ostatnie komentarze w tym wątku:",
    NoComments: "Brak komentarzy.",

    YourBookmarks: "Twoje zakładki:",

    UsersOnline: "Użytkownicy online:",
    UsersOnlineForum: "Użytkownicy online na tym forum:",
    UsersInThisChat: "Użytkownicy na tym czacie:",
    UsersInThisTopic: "Użytkownicy w tym wątku:",

    GettingStartedGuide: "Przewodnik wprowadzający",
    AdminGuide: "Przewodnik administratora",
    Guide: "Przewodnik",

    // How to hide the sidebar.
    CloseShortcutS: "Zamknij (skrót klawiaturowy: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Dodaj więcej osób",

    // Shown next to one's own username, in a list of users.
    thatsYou: "to Ty",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Tylko Ty",
    YouAnd: "Ty, oraz ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " użytkownik" : " użytkowników";
      const have = numStrangers === 1 ? "" : "";
      return numStrangers + people + " którzy " + have + " nie są zalogowani";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Odpowiedzi po lewej są sortowane według ",
    bestFirst: "najpierw najlepsze.",
    ButBelow: "ale poniżej ",
    insteadBy: " te same odpowiedzi są sortowane według: ",
    newestFirst: "najpierw najnowsze.",

    SoIfLeave: "Więc jeśli wrócisz tu później, poniżej znajdziesz ",
    allNewReplies: "wszystkie nowe odpowiedzi.",
    Click: "Kliknij",  // MAYBE end with ',' ?
    aReplyToReadIt: " aby zobaczyć całą odpowiedź.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Kliknij, aby zmienić status",
    ClickToViewAnswer: "Kliknij, aby zobaczyć odpowiedź",
    ViewAnswer: "Zobacz odpowiedź",
    ChangeStatusC: "Zmień status na:",
    ChangeCatC: "Zmień kategorię:",
    ChangeTopicTypeC: "Zmień typ wątku:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "pytanie",
    hasAccptAns: "ma zaakceptowaną odpowiedź",
    aProblem: "problem",
    planToFix: "plan naprawy",
    anIdea: "idea",
    planToDo: "plan do zrobienia",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Ten wątek ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "został zamknięty, nie możesz już tutaj pisać.",

    ThisTopicClosed_1: "Ten wątek został ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    // ... "zamknięty" ...
    ThisTopicClosed_2: ". Wciąż możesz komentować.",   // REVIEW removed "won't make ... bump ..."

    ThisPageDeleted: "Ta strona została usunięta",
    CatDeldPageToo: "Kategoria została usunięta, więc ta strona również",

    ThreadDeld: "Wątek usunięty",
    CmntDeld: "Komentarz usunięty",
    PostDeld: "Post usunięty",
    DiscDeld: "Dyskusja usunięta",
    PageDeld: "Strona usunięta",
    PagePendAppr: "Strona oczekuje na zatwierdzenie",  // MAYBE
    TitlePendAppr: "Tytuł oczekuje na zatwierdzenie",
    TextPendingApproval: "Tekst oczekuje na zatwierdzenie",

    TooltipQuestClosedNoAnsw: "To pytanie zostało zamknięte. Żadna odpowiedź nie została zaakceptowana.",
    TooltipTopicClosed: "Ten wątek jest zamknięty.",

    TooltipQuestSolved: "Zaakceptowano odpowiedź na to pytanie",
    TooltipQuestUnsolved: "Nie zaakceptowano żadnej odpowiedzi na to pytanie",

    StatusDone: "Zrobione",
    TooltipProblFixed: "To zostało naprawione",
    TooltipDone: "To zostało ukończone",

    StatusStarted: "Rozpoczęty",
    TooltipFixing: "Właśnie się tym zajmujemy",
    TooltipImplementing: "Właśnie to implementujemy",

    StatusPlanned: "Zaplanowany",
    TooltipProblPlanned: "Planujemy to naprawić",
    TooltipIdeaPlanned: "Planujemy to zaimplementować",

    StatusNew: "Nowy",
    StatusNewDtl: "Nowy wątek, trwa dyskusja",
    TooltipUnsProbl: "To jest nie rozwiązany problem",
    TooltipIdea: "To jest pomysł",

    TooltipPersMsg: "Wiadomość prywatna",
    TooltipChat: "# oznacza czat",
    TooltipPrivChat: "To jest prywatny czat",

    TooltipPinnedGlob: "\nPrzypiętny globalnie.",
    TooltipPinnedCat: "\nPrzypięty w tej kategorii.",

    SolvedClickView_1: "Rozwiązanie w poście nr ",
    SolvedClickView_2: ", kliknij, aby wyświetlić",

    PostHiddenClickShow: "Post ukryty; kliknij, aby zobaczyć",
    ClickSeeMoreRepls: "Kliknij, aby zobaczyć więcej odpowiedzi",
    ClickSeeMoreComments: "Kliknij, aby zobaczyć więcej komentarzy",
    ClickSeeThisComment: "Kliknij, aby zobaczyć ten komentarz",
    clickToShow: "kliknij, aby zobaczyć",

    ManyDisagree: "Wielu się z tym nie zgadza:",
    SomeDisagree: "Niektórzy nie zgadzają się z tym:",

    PendAppr: "W oczekiwaniu na zatwierdzenie",   // MAYBE
    CmtPendAppr: "Komentarz oczekuje na zatwierdzenie ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Twój" : "Poniższy") + " komentarz oczekuje na zatwierdzenie.",

    _and: " i",

    repliesTo: "odpowiedzi dla",
    InReplyTo: "W odpowiedzi do",
    YourReplyTo: "Twoje odpowiedzi dla ",
    YourChatMsg: "Twoja wiadomość na chacie: ",
    YourDraft: "Twój szkic",
    YourEdits: "Twoje poprawki: ",
    YourProgrNoteC: "Twoja notatka postępu:",
    aProgrNote: "notatka postępu: ",

    ReplyingToC: "Odpowiadając na:",
    ScrollToPrevw_1: "Przesuwając do ",
    ScrollToPrevw_2: "podgląd",

    UnfinEdits: "Niezakończone poprawki",
    ResumeEdting: "Przywrócona edycja",
    DelDraft: "Usunięty szkic",

    ClickViewEdits: "Kliknij, aby zobaczyć poprzednie wersje",

    By: "Przez ", // ... someones name

    // Discussion ...
    aboutThisIdea: "o tym jak i czy zrealizować ten pomysł",
    aboutThisProbl: "o tym jak i czy poprawić to",

    AddProgrNote: "Dodaj notatkę postępu",
    // Progress ...
    withThisIdea: "z realizacją tego pomysłu",
    withThisProbl: "z rozwiązaniem tego problemu",
    withThis: "z realizacją tego",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Powiadomienia dotyczące tego wątku:",

    // If is a direct message topic, members listed below this text.
    Msg: "Wyślij wiadomość do",

    SmrzRepls: "Podsumowanie odpowiedzi",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} odpowiedzi. Szacowany czas czytania: ${minutes} minut`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Zrobione. Podsumowano ${numSummarized} odpowiedzi z ${numShownBefore} wcześniej pokazanych odpowiedzi.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Zamknij temat",  // MAYBE
    CloseOwnQuestionTooltip: "Zamknij ten wątek, jeśli nie potrzebujesz już odpowiedzi.",
    CloseOthersQuestionTooltip: "Zamknij ten wątek, jeśli już nie jest potrzebna odpowiedź, np. gdy " +
        "odpowiedź znajduje się w innym temacie.",
    CloseToDoTooltip: "Oznacz jako zakończone.",
    CloseTopicTooltip: "Zamknij ten wątek jeśli nie wymaga on dalszej dyskusji.",

    AcceptBtnExpl: "Zaakceptuj tę odpowiedź jako rozwiązanie problemu",
    SolutionQ: "Rozwiązanie?",
    ClickUnaccept: "Kliknij aby odznaczyć akceptację tej odpowiedzi",
    PostAccepted: "Ta odpowiedź została oznaczona jako rozwiązanie",

    NumLikes: (num: number) => num === 1 ? "1 polubienie" : num + " polubienia",
    NumDisagree: (num: number) => num + " nie zgadza się z tym",
    NumBury: (num: number) => num + " zakop",
    NumUnwanted: (num: number) => num + " niepożądany",

    MoreVotes: "więcej głosów...",
    LikeThis: "Lubię to",
    LinkToPost: "Link do tego postu",
    Report: "Zgłoś",
    ReportThisPost: "Zgłoś ten post",
    Admin: "Admin",
    DiscIx: "Indeks dyskusji",

    Disagree: "Nie zgadzam się",
    DisagreeExpl: "Kliknij tutaj, aby wyrazić swój sprzeciw lub aby ostrzec innych przed błędami merytorycznymi.",
    Bury: "Zakop",
    BuryExpl: "Kliknij, jeśli ten post nie zasługuje, aby być wyświetlany jako pierwszy. Tylko personel forum widzi Twój głos.",
    Unwanted: "Niechciany",
    UnwantedExpl: "Kliknij, jeśli nie chcesz, aby ten post znajdował się na tej stronie. To zredukuje karmę autora wypowiedzi. " +
            "Tylko personel forum widzi Twój głos.",

    AddTags: "Dodaj/usuń tagi",
    UnWikify: "Usuń z wiki",
    Wikify: "Umieść w wiki",
    PinDeleteEtc: "Przypnij / Usuń / Kategoria ...",
  },


  // Share dialog

  sd: {
    Copied: "Skopiowano do schowka.",
    CtrlCToCopy: "Wciśnij CTRL+C, aby skopiować.",
    ClickToCopy: "Kliknij, aby skopiować link.",
  },


  // Chat

  c: {
    About_1: "To jest ",
    About_2: " pokój rozmów, utworzony przez ",
    ScrollUpViewComments: "Przewiń do góry, aby wyświetlić starsze komentarze",
    Purpose: "Przeznaczenie:",
    edit: "edytuj",
    'delete': "usuń",
    MessageDeleted: "(wiadomość usunięta)",
    JoinThisChat: "Wejdź do tego czatu",
    PostMessage: "Wyślij wiadomość",
    AdvancedEditor: "Zaawansowany edytor",
    TypeHere: "Pisz tutaj. Możesz użyć języka Markdown lub HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Wymaga sprawdzenia ",
    AdminHelp: "Poproś Admina o pomoc ",
    StaffHelp: "Poproś załogę forum o pomoc ",
    DraftsEtc: "Szkice, zakładki, zadania",
    MoreNotfs: "Wyświetl więcej powiadomień",  // changed from "View more..." to "...all.."
    DismNotfs: "Zaznacz wszystkie jako przeczytane",
    ViewProfile: "Wyświetl swój profil",       // MAYBE  I removed "/Edytuj"
    ViewGroups: "Pokaż grupy",
    LogOut: "Wyloguj",
    UnhideHelp: "Włącz wyświetlanie wskazówek",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Przewiń do:",
    Scroll: "Przewiń",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Z powrotem (B)",
    BackExpl: "Przewiń do poprzedniej pozycji na tej stronie",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Góra strony",
    PgTopHelp: "Idź na górę strony. Skrót klawiszowy: 1",   // klawiszowy = keyboard
    Repl: "Replies",
    ReplHelp: "Przejdź do sekcji odpowiedzi. Skrót klawiszowy: 2",
    Progr: "Postępy",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Idź do sekcji postępów. Skrót klawiszowy: 3",
    PgBtm: "Dół strony",
    Btm: "Dolny",
    BtmHelp: "Idź na dół strony. Skrót klawiszowy: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", i ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " aby przewinąć w tył",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Zaznacz użytkowników",
    AddUsers: "Dodaj użytkowników",
  },


  // About user dialog

  aud: {
    IsMod: "Moderator.",
    IsAdm: "Administrator.",
    IsDeld: "Użytkownik dezaktywowany lub usunięty.",
    ThisIsGuest: "Ten użytkownik to anonimowy gość.",
    ViewInAdm: "Wyświetl w panelu administratora",
    ViewProfl: "Wyświetl profil",
    ViewComments: "Wyświetl inne komentarze",
    RmFromTpc: "Usuń z wątku",
    EmAdrUnkn: "Nieznany adres email - nie będziesz powiadomiony o odpowiedziach.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Ustawienia",
    Invites: "Zaproszenia",
    DraftsEtc: "Szkice etc",
    About: "O mnie",
    Privacy: "Prywatność",
    Security: "Bezpieczeństwo",  // MAYBE, GTR
    Account: "Konto",
    Interface: "Interfejs",

    // ----- Overview stats

    JoinedC: "Dołączył: ",
    PostsMadeC: "Liczba postów: ",
    LastPostC: "Ostatni post: ",
    LastSeenC: "Ostatnio widziany: ",
    TrustLevelC: "Poziom zaufania: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Prześlij avatar",
    ChangePhoto: "Zmień avatar",
    ImgTooSmall: "Obraz jest zbyt mały, powinien mieć wymiary conajmniej 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Tylko personel i zaufani użytkownicy mogą to zobaczyć.",
    OnlyMbrsCanSee: "Tylko użytkownicy, którzy byli aktywni przez jakiś czas mogą to zobaczyć.",
    Nothing: "Nic do pokazania",
    Posts: "Odpowiedzi",
    NoPosts: "Brak odpowiedzi.",
    Topics: "Wątki",
    NoTopics: "Brak wątków.",

    // ----- User status

    UserBanned: "Ten użytkownik został zbanowany",
    UserSuspended: (dateUtc: string) => `Ten użytkownik jest zawieszony do ${dateUtc} UTC`,
    ReasonC: "Powód: ",

    DeactOrDeld: "Dezaktywowany lub usunięty.",
    isGroup: " (grupa)",
    isGuest: " — anonimowy gość, może być kimkolwiek",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(Ty)",

    // ----- Notifications page

    NoNotfs: "Brak powiadomień",
    NotfsToYouC: "Powiadomienia dla Ciebie:",
    NotfsToOtherC: (name: string) => `Powiadomienia dla ${name}:`,
    DefNotfsSiteWide: "Domyślne powiadomienia, dla całego forum",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "dla",

    // ----- Drafts Etc page

    NoDrafts: "Brak szkiców",
    YourDraftsC: "Twoje szkice:",
    DraftsByC: (name: string) => `Szkice napisane przez ${name}:`,

    // ----- Invites page

    InvitesIntro: "Tutaj możesz zapraszać ludzi, aby dołączyli do tej społeczności. ",
    InvitesListedBelow: "Zaproszenia, które już wysłałeś są wymienione poniżej.",
    NoInvites: "Jeszcze nikogo nie zaprosiłeś.",

    InvitedEmail: "Zaproszony adres email",
    WhoAccepted: "Użytkownik, który zaakceptował zaproszenie",
    InvAccepted: "Zaproszenie zaakceptowane",
    InvSent: "Zaproszenie wysłane",
    JoinedAlready: "Już połączone",

    SendAnInv: "Wyślij zaproszenie",
    SendInv: "Wyślij zaproszenie",
    SendInvExpl:
        "Wyślemy Twojemu przyjacielowi krótkiego email'a z odnośnikiem " +
        "umożliwiającym natychmiastowe dołączenie, bez logowania. " +
        "Twój przyjaciel zostanie podstawowym członkiem, nie moderatorem, ani adminem.",
    //EnterEmail: "Wpisz adres email",
    InvDone: "Zrobione. Zaraz wyślę wiadomość.",

    NoOneToInv: "Nie ma kogo zaprosić.",
    InvNotfLater: "Powiadomię Ciebie później, kiedy ich zaproszę.",
    AlreadyInvSendAgainQ: "Ci zostali już zaproszeni — może chcesz ich zaprosić ponownie?",
    InvErr_1: "Te zakończyły się ",
    InvErr_2: "błędami",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Te są juz użytkownikami, więc ich nie zaprosiłem:",
    ResendInvsQ: "Wysłać ponowne zaproszenia do tych ludzi? Oni byli już zapraszani.",
    InvAgain: "Zaproś ponownie",

    // ----- Preferences, About

    AboutYou: "O Tobie",
    WebLink: "Adres Twojej strony internetowej.",

    NotShownCannotChange: "Nie pokywane publicznie. Nie może być zmieniony.",

    // The full name or alias:
    NameOpt: "Imię (opcjonalne)",

    NotShown: "To nie jest informacja widoczna publicznie.",

    // The username:
    MayChangeFewTimes: "Możesz zmienić ją tylko kilka razy.",
    notSpecified: "(nie określono)",
    ChangeUsername_1: "Możesz zmienić nazwę użytkownika tylko kilka razy.",
    ChangeUsername_2: "Zmienianie jej zbyt często może zbić innych z tropu — " +
        "nie będą wiedzieli kogo @wskazać mając na myśli Ciebie.",

    NotfAboutAll: "Powiadamiaj mnie o każdym nowym poście i zmianach w poście (dopóki nie wyłączysz powiadomień dla wątku lub kategorii)",
    NotfAboutNewTopics: "Powiadamiaj mnie o każdym nowym poście (dopóki nie wyłączysz powiadomień dla kategorii)",

    ActivitySummaryEmails: "Email'e z podsumowaniem aktywności",

    EmailSummariesToGroup:
        "Jeśli użytkownicy tej grupy nie zaglądają tutaj, wyślij im email'e " +
        "z podsumowaniem popularnych wątków.",
    EmailSummariesToMe:
        "Jeśli tu nie zaglądam, wyślij mi email " +
        "z podsumowaniem popularnych wątków.",

    AlsoIfTheyVisit: "Wyślij email'e także wtedy, gdy regularnie odwiedzają to miejsce.",
    AlsoIfIVisit: "Wyślij email'e także wtedy, gdy regularnie odwiedzam to miejsce.",

    HowOftenWeSend: "Jak często powinniśmy wysyłać te email'e?",
    HowOftenYouWant: "Jak często chcesz otrzymywać te email'e?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Czy chcesz ukryć swoją aktywność przed niezalogowanymi i nowymi użytkownikami?",
    HideActivityStrangers_2: "(Ale nie przed tymi, którzy są już aktywni od jakiegoś czasu.)",
    HideActivityAll_1: "Czy chcesz ukryć swoją aktywność przed wszystkimi?",
    HideActivityAll_2: "(Z wyjątkiem załogi forum i zaufanych użytkowników.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Adres email",
    PrimaryDot: "Podstawowy. ",
    VerifiedDot: "Zweryfikowany. ",
    NotVerifiedDot: "Nie zweryfikowany. ",
    ForLoginWithDot: (provider: string) => `Logowanie przy użyciu ${provider}. `,
    MakePrimary: "Uczyń domyślnym",
    AddEmail: "Dodaj adres email",
    TypeNewEmailC: "Podaj nowy adres email:",
    MaxEmailsInfo: (numMax: number) => `(Nie możesz dodać więcej niż ${numMax} adresów.)`,
    EmailAdded_1: "Dodano. Wysłaliśmy link weryfikacyjny na podany adres email — ",
    EmailAdded_2: "sprawdź swoją skrzynkę.",
    SendVerifEmail: "Wyślij link weryfikacyjny",

    EmailStatusExpl:
        "('Domyślny' oznacza, że możesz zalogować się za pomocą tego adresu i że na ten adres wysyłamy powiadomienia. " +
        "'Zweryfikowany' oznacza, że kliknąłeś w wysłany link weryfikacyjny.)",

    // Password:
    ChangePwdQ: "Zmień hasło?",
    CreatePwdQ: "Utwórz hasło?",
    WillGetPwdRstEml: "Otrzymasz mail z ponownym ustawieniem hasła.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Żadne",

    // Logins:
    LoginMethods: "Metody logowania",
    commaAs: ", jako: ",

    // One's data:
    YourContent: "Treści utworzone przez Ciebie",
    DownloadPosts: "Pobierz swoje posty",
    DownloadPostsHelp: "Tworzy plik JSON zawierający wątki i komentarze utworzone przez Ciebie.",
    DownloadPersData: "Pobierz dane osobiste",
    DownloadPersDataHelp: "Tworzy plik JSON zawierający Twoje dane osobiste, " +
        "np. Twoje imię (jeśli je podałeś) i adres email.",


    // Delete account:
    DangerZone: "Danger zone",
    DeleteAccount: "Usuń konto",
    DeleteYourAccountQ:
        "Czy na pewno chcesz usunąć swoje konto? Twoje imię, adres email, hasło " +
        "i tożsamości online (jeżeli zalogowałeś się przez Facebooka lub Twittera) zostaną zapomniane. " +
        "Nie będziesz mógł się ponownie zalogować. Nie można cofnąc tej operacji.",
    DeleteUserQ:
        "Czy na pewno chcesz usunąć użytkownika? Twoje imię, adres email, hasło " +
        "i tożsamości online (jeżeli zalogowałeś się przez Facebooka lub Twittera) zostaną zapomniane. " +
        "Nie będziesz mógł się ponownie zalogować. Nie można cofnąc tej operacji.",
    YesDelete: "Tak, usuń",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Członkowie grup",
    NoMembers: "Brak członków.",
    MayNotListMembers: "Nie można wyświetlić członków.",
    AddMembers: "Dodaj członków",
    BuiltInCannotModify: "To jest grupa wbudowana; nie może być zmodyfikowana.",
    NumMembers: (num: number) => `${num} członków`,
    YouAreMember: "Jesteś członkiem.",
    CustomGroupsC: "Opcjonalne grupy:",
    BuiltInGroupsC: "Wbudowane grupy:",
    DeleteGroup: "Usuń tę grupę",
  },


  // Create user dialog

  cud: {
    CreateUser: "Utwórz użytkownika",
    CreateAccount: "Utwórz konto",
    EmailC: "Email:",
    keptPriv: "nie będzie publicznie dostępny",
    forNotfsKeptPriv: "otrzymywać powiadomienia o odpowiedziach, nie będzie publicznie dostępny",
    EmailVerifBy_1: "Twój email został zweryfikowany przez ",
    EmailVerifBy_2: ".",
    UsernameC: "Nazwa użytkownika:",
    FullNameC: "Pełne imię:",
    optName: "opcjonalny",

    //OrCreateAcct_1: "Albo ",
    //OrCreateAcct_2: "utwórz konto",
    //OrCreateAcct_3: " z ",
    //OrCreateAcct_4: "@nazwą",
    //OrCreateAcct_5: " i hasłem",

    DoneLoggedIn: "Konto utworzone. Zostałeś zalogowany.",  // COULD say if verif email sent too?
    AlmostDone:
        "Prawie skończone! Musisz tylko potwierdzić adres email." +
        " Wysłaliśmy do Ciebie email. Proszę kliknąc w link w wysłanej wiadomości, aby aktywować " +
        "konto. Możesz zamknąć tę stronę.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Warunki i polityka prywatności",

    Accept_1: "Czy akceptujesz nasze ",
    TermsOfService: "Warunki Usługi",
    TermsOfUse: "Warunki Użytkowania",
    Accept_2: " i ",
    PrivPol: "Politykę Prywatności",
    Accept_3_User: "?",
    Accept_3_Owner: " dla właścicieli społeczności?",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Tak, akceptuję",
  },


  // Password input

  pwd: {
    PasswordC: "Hasło:",
    StrengthC: "Siła hasła: ",
    FairlyWeak: "Słabe.",
    toShort: "za krótkie",
    TooShort: (minLength: number) => `Za krótkie. Powinno mieć conajmniej ${minLength} liter`,
    PlzInclDigit: "Proszę użyć cyfry lub znaku specjalnego",
    TooWeak123abc: "Za słabe. Nie używaj hasł takich jak '12345' lub 'abcde'.",
    AvoidInclC: "Unikaj umieszczania (części) swoje imienia albo adresu email:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Strona nie istnieje lub nie masz uprawnień aby ją zobaczyć.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Jesteś zalogowany jako użytkownik nie mający dostępu do wszystkich części " +
        "tego serwisu.",

    IfYouThinkExistsThen: "Jeśli myślisz, że taka strona istnieje, zaloguj się jak użytkownik, który może mieć do niej dostęp. ",
    LoggedInAlready: "(Już jesteś zalogowany, może użyłeś złego konta?) ",
    ElseGoToHome_1: "W przeciwnym razie możesz ",
    ElseGoToHome_2: "przejść na stronę główną.",

    CreateAcconut: "Utwórz  konto",
    ContinueWithDots: "Kontynuuj z ...",  // MAYBE
    SignUp: "Zarejestruj się",
    LogIn: "Zaloguj się",
    LogInWithPwd: "Zaloguj się przy użyciu hasła",
    CreateAdmAcct: "Utwórz konto administratora:",
    AuthRequired: "Do uzyskania dostępu do tej witryny wymagane jest uwierzytelnienie",
    LogInToLike: "Zaloguj się, aby polubić ten post",
    LogInToSubmit: "Zaloguj się i prześlij",
    LogInToComment: "Zaloguj się, aby napisać komentarz",
    LogInToCreateTopic: "Zaloguj się, aby utworzyć nowy wątek",

    //AlreadyHaveAcctQ: "Posiadasz już konto? ",
    OrLogIn_1: "",
    OrLogIn_2: "Zaloguj się",   // "Log in" (this is a button)
    OrLogIn_3: "", // "instead"

    //NewUserQ: "Nie posiadasz jeszcze konta? ",
    SignUpInstead_1: "",
    SignUpInstead_2: "Zarejestruj się",
    SignUpInstead_3: "",

    // MAYBE x3: Google Translate + looked at OrTypeName.
    OrTypeName_1: ", lub po prostu ",
    OrTypeName_2: "wpisz swoje imię",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Lub utwórz nowe konto:",
    OrTypeName: "Lub wpisz swoje imię:",
    OrLogIn: "Lub zaloguj się:",  // was: "Lub wypełnij:".  MAYBE
    YourNameQ: "Twoje imię?",   // MAYBE

    BadCreds: "Zła nazwa użytkownika lub hasło",

    UsernameOrEmailC: "Nazwa użytkownika lub email:",
    PasswordC: "Hasło:",
    ForgotPwd: "Zapomniałeś hasła?",

    NoPwd: "Nie utworzyłeś jeszcze hasła.",
    CreatePwd: "Utwórz hasło",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Powiedz nam, co Cię niepokoi.",
    ThanksHaveReported: "Dzięki. Zgłoszenie zostało przyjęte. Personel forum zajmie się tą sprawą.",
    ReportComment: "Zgłoś komentarz",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Ten post zawiera czyjeś dane osobiste, np. prawdziwe imię/nazwisko.",
    OptOffensive: "Ten post zawiera obraźliwe treści.",
    OptSpam: "Ten post jest niechcianą reklamą.",
    OptOther: "Powiadom personel forum o tym poście z innego powodu.",
  },


  // Help message dialog
  help: {
    YouCanShowAgain_1: "Możesz włączyć komunikaty pomocy ponownie, jeśli jesteś zalogowany, poprzez " +
        "kliknięcie na nazwę użytkownika i następnie na ",
    YouCanShowAgain_2: "pokaż komunikaty pomocy",
  },


  // Editor

  e: {
    SimilarTopicsC: "Podobne wątki:",

    //WritingSomethingWarning: "Pisałeś coś?",
    UploadMaxOneFile: "Przepraszamy ale obecnie możesz przesłać tylko jeden plik na raz",
    PleaseFinishPost: "Najpierw zakończ pisanie swojego posta",
    PleaseFinishChatMsg: "Najpierw zakończ pisanie wiadomości na czacie",
    PleaseFinishMsg: "Najpierw zakończ pisanie wiadomości",
    PleaseSaveEdits: "Najpierw zapisz aktualne zmiany",
    PleaseSaveOrCancel: "Najpierw zapisz lub anuluj nowy temat",
    CanContinueEditing: "Możesz kontynuować edycję tekstu, jeśli ponownie otworzysz edytor.",
        //"(Ale tekst zostanie utracony, jeśli opuścisz tę stronę.)",
    PleaseDontDeleteAll: "Proszę nie usuwaj całej treści. Napisz coś.",
    PleaseWriteSth: "Proszę, napisz coś.",
    PleaseWriteTitle: "Wpisz tytuł tematu.",
    PleaseWriteMsgTitle: "Wpisz tytuł wiadomości.",
    PleaseWriteMsg: "Napisz wiadomość.",

    exBold: "pogrubiony tekst",
    exEmph: "wyróżnij tekst",
    exPre: "preformatowany tekst",
    exQuoted: "cytat",
    ExHeading: "Nagłówek",

    TitlePlaceholder: "Wpisz tytuł - o co chodzi, w jednym krótkim zdaniu?",

    EditPost_1: "Edytuj ",
    EditPost_2: "post ",

    TypeChatMsg: "Napisz wiadomość na czacie:",
    YourMsg: "Twoja wiadomość:",
    CreateTopic: "Utwórz nowy temat",
    CreateCustomHtml: "Utwórz niestandardową stronę HTML (dodaj swój własny tytuł <h1>)",
    CreateInfoPage: "Utwórz stronę z informacjami",
    CreateCode: "Utwórz stronę z kodem źródłowym",
    AskQuestion: "Zadaj pytanie",
    ReportProblem: "Zgłoś problem",
    SuggestIdea: "Zasugreuj pomysł",
    NewChat: "Nazwa i cel nowego kanału czatowego",
    NewPrivChat: "Nazwa i cel nowego prywatnego kanału czatowego",
    AppendComment: "Napisz komentarz na dole strony:",

    ReplyTo: "Owpowiedz na ",
    ReplyTo_theOrigPost: "post rozpoczynający dyskusję",
    ReplyTo_post: "post ",
    AddCommentC: "Dodaj komentarz:",

    PleaseSelectPosts: "Wybierz jeden lub więcej postów, na które chcesz odpowiedzieć.",

    Save: "Zapisz",
    edits: "zmiany",

    PostReply: "Odpowiedz na post",
    PostComment: "Wyślij komentarz",  // MAYBE

    Post: "Post",
    comment: "komentarz",
    question: "pytanie",

    PostMessage: "Wyślij wiadomość",
    SimpleEditor: "Prosty edytor",

    Send: "Wyślij",
    message: "wiadomość",

    Create: "Utwórz",
    page: "stronę",
    chat: "czat",
    idea: "pomysł",
    topic: "wątek",

    Submit: "Zgłoś",
    problem: "problem",

    ViewOldEdits: "Wyświetl poprzednie zmiany",

    UploadBtnTooltip: "Prześlij plik lub obraz",
    BoldBtnTooltip: "Utwórz pogrubiony tekst",
    EmBtnTooltip: "Podkreśl",
    QuoteBtnTooltip: "Zacytuj",
    PreBtnTooltip: "Tekst preformatowany",
    HeadingBtnTooltip: "Nagłówek",

    TypeHerePlaceholder: "Pisz tutaj. Możesz użyć Markdown i HTML. Przeciągnij i upuść, aby umieścić obraz.",

    Maximize: "Zmaksymalizuj",
    ToNormal: "Powrót do normalnego rozmiaru",
    TileHorizontally: "Ułożenie poziome",

    PreviewC: "Podgląd:",
    TitleExcl: " (tytuł wykluczony)",
    ShowEditorAgain: "Ponownie pokaż edytor",
    Minimize: "Zminimalizuj",

    IPhoneKbdSpace_1: "(To szare miejsce jest zarezerwowane",
    IPhoneKbdSpace_2: "dla klawiatury iPhone'a.)",

    PreviewInfo: "Tutaj możesz zobaczyć, jak będzie wyglądać Twój post.",
    CannotType: "Nie możesz tutaj pisać.",

    LoadingDraftDots: "Ładuję jakiś szkic...",
    DraftUnchanged: "Nie zmieniony.",
    CannotSaveDraftC: "Nie mogę zapamiętać szkicu:",
    DraftSavedBrwsr: "Szkic zachowany, na liście.",
    DraftSaved: (nr: string | number) => `Szkic ${nr} zachowany.`,
    DraftDeleted: (nr: string | number) => `Szkic ${nr} usunięty.`,
    WillSaveDraft: (nr: string | number) => `Będzie zapamiętany szkic ${nr} ...`,
    SavingDraft: (nr: string | number) => `Zachowuję szkic ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Usuwam szkic ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Wybierz kategorię",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Wybierz:",
    DiscussionExpl: "Dyskusja na jakiś temat.",
    QuestionExpl: "Tylko jedna odpowiedź może zostać oznaczona jako zaakceptowana.",
    ProblExpl: "Jeśli coś jest zepsute lub nie działa. Może być oznaczony jako rozwiązany.",
    IdeaExpl: "Sugestia. Może być oznaczona jako zrobione/zaimplementowane.",
    ChatExpl: "Prawdopodobnie niekończąca się dyskusja.",
    PrivChatExpl: "Widoczne tylko dla osób, które otrzymały zaproszenie do dołączenia do czatu.",

    CustomHtml: "Niestandardowa strona HTML",
    InfoPage: "Strona informacyjna",
    Code: "Kod źródłowy",
    EmbCmts: "Zagnieżdżone komentarze",
    About: "O",
    PrivChat: "Czat prywatny",
    Form: "Formularz",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Nie ma więcej spoełczności do których mógłbyś dołączyć.",
    SelCmty: "Wybierz społeczność ...",
  },


  // Search dialogs and the search page.
  s: {
    TxtToFind: "Tekst do wyszukania",
  },


  // No internet

  ni: {
    NoInet: "Brak dostępu do internetu",
    PlzRefr: "Odśwież stronę aby zoabzcyć zmiany. (Było chwilowe rozłączenie)",
    RefrNow: "Odświeżam teraz",
  },


  //
  PostDeleted: (postNr: number) => `Ten wątek, nr ${postNr}, został usunięty.`,
  NoSuchPost: (postNr: number) => `Nie ma wątku nr ${postNr} na tej stronie.`,
  NoPageHere: "Ta strona została usunięta, lub nigdy nie istniała lub nie masz praw aby ją obejrzeć.",
  GoBackToLastPage: "Wróć do poprzedniej strony",

};


