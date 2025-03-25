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

var t_uk_UA: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Присутній",
  Activity: "Діяльність",
  Add: "Додати",
  AddingDots: "Додаємо ...",
  AddComment: "Додати коментар",  // MISSING, & dupl t.e.AddCommentC
  Admin: "Адміністратор",
  AdvSearch: "Розширений пошук",
  Away: "Відійшов на хвильку",
  Back: "Знову з вами",
  BlogN: "Блог",
  Bookmarks: "Закладки",
  Cancel: "Скасувати",
  Categories: "Категорії",
  Category: "Категорія",
  ChangeV: "Змінити",
  ClickToShow: "Клацніть, щоб показати",
  ChangeDots: "Змінюємо ...",
  ChatN: "Балачка (чат)",
  Chatting: "У балачці",
  CheckYourEmail: "Перевірте свою електронну пошту",
  Close: "Закрити",
  closed: "закрито",
  comments: "коментарі",   // as in:  "123 comments"
  Continue: "Продовжити",
  Created: "Створено",
  Delete: "Видалити",
  Deleted: "Видалено",
  DirectMessage: "Особисте повідомлення",
  Discussion: "Обговорення",
  discussion: "обговорення",
  done: "зроблено",
  EditV: "Зредагувати",
  Editing: "Зредагування",
  EmailC: "Електронна пошта: ",   // MISSING  copy t.cud.EmailC to here
  EmailAddress: "Адреса електронної пошти",
  EmailAddresses: "Адреси електронної пошти",
  EmailSentD: "Електронний лист надіслано.",
  Forum: "Форум",
  GetNotifiedAbout: "Отримувати повідомлення про",
  GroupsC: "Групи:",
  Hide: "Сховати",
  Home: "Домівка",
  Idea: "Задум",
  Join: "Приєднатися",
  KbdShrtcsC: "Комбінації клавіш: ",
  Loading: "Завантажуємо ...",
  LoadMore: "Завантажити ще ...",
  LogIn: "Увійти",
  LoggedInAs: "Увійшов як ",
  LogOut: "Вийти",
  Maybe: "Можливо",
  Manage: "Керувати",
  Members: "Учасники",
  MessageN: "Повідомлення",
  MoreDots: "Більше ...",
  Move: "Перемістити",
  Name: "Ім'я",
  NameC: "Ім'я:",
  NewTopic: "Нова тема",
  NoCancel: "Ні, скасувати",
  Notifications: "Сповіщення",
  NotImplemented: "(Не впроваджено)",
  NotYet: "Ще ні",
  NoTitle: "Нема заголовка",
  NoTopics: "Немає тем.",
  Okay: "Добре",
  OkayDots: "Добре ...",
  Online: "Зараз в мережі",
  onePerLine: "по одному на рядок",
  PreviewV: "Попередньо переглянути",
  Problem: "Проблема",
  progressN: "поступ",
  Question: "Питання",
  Recent: "Нещодавні",
  Remove: "Видалити",
  Reopen: "Відкрити знову",
  ReplyV: "Відповісти",
  Replying: "Відповідає",
  Replies: "Відповіді",
  replies: "відповіді",
  Save: "Зберегти",
  SavingDots: "Зберігаємо ...",
  SavedDot: "Збережено.",
  Search: "Пошук",
  SendMsg: "Надіслати повідомлення",
  ShowPreview: "Показати попередній перегляд",  // MISSING
  SignUp: "Приєднатися",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Рішення",
  started: "розпочато",
  Summary: "Підсумок",
  Submit: "Подати на розгляд",
  Tag: "Позначка (тег)",  // MISSING
  Tags: "Позначки (теги)",  // MISSING
  Tools: "Інструменти",
  Topics: "Теми",
  TopicTitle: "Заголовок теми",
  TopicType: "Різновид теми",
  UploadingDots: "Завантажуємо ...",
  Username: "Ім'я користувача",
  Users: "Користувачі",
  Welcome: "Ласкаво просимо",
  Wiki: "Вікі",
  Yes: "Так",
  YesBye: "Так, до побачення",
  YesDoThat: "Так, зробити це",
  You: "Ви",
  you: "ви",

  // Trust levels.
  Guest:  "Гість",
  NewMember: "Новий учасник",
  BasicMember: "Основний учасник",
  FullMember: "Повноправний учасник",
  TrustedMember: "Довірений учасник",
  RegularMember: "Довірений завсідник",  // MISSING renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Ключовий учасник",

  // Periods.
  PastDay: "Минулого дня",
  PastWeek: "Минулого тижня",
  PastMonth: "Минулого місяця",
  PastQuarter: "Минулого кварталу",
  PastYear: "Минулого року",
  AllTime: "За весь час",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "міс",  // months
  daysLtr: "д",      // days
  hoursLtr: "г",     // hours
  minsLtr: "м",      // minutes
  secsLtr: "с",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 день тому" : `${numDays} днів тому`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 годину тому" : `${numHours} годин тому`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 хвилину тому" : `${numMins} хвилин тому`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 секунду тому" : `${numSecs} секунд тому`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Потрібна електронна адреса",
    NoSpcs: "Будь ласка, без пробілів",
    InvldAddr: "Недійсна електронна адреса",
    NoBadChrs: "Будь ласка, без дивних символів",

    // Full name input field:
    NotOnlSpcs: "Будь ласка, не лише пробіли",
    NoAt: "Будь ласка, без @",

    // Username input field:
    NoDash: "Будь ласка, без дефіса (-)",
    DontInclAt: "Не встромляйте @",
    StartEndLtrDgt: "Почніть і закінчіть буквою або цифрою",
    OnlLtrNumEtc: "Тільки літери (a-z, A-Z) та цифри, і _ (підкреслення)",
    // This shown just below the username input:
    UnUnqShrt_1: "Ваш ",
    UnUnqShrt_2: "@логін",
    UnUnqShrt_3: ", унікальний і короткий",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Має містити принаймні ${minLength} символів`,
    TooLong: (maxLength: number) => `Задовгий. Має бути не більше ${maxLength} символів`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Кожний допис",
    EveryPostInTopic: "Ви отримуватимете сповіщення про всі нові відповіді у цій темі.",
    EveryPostInCat: "Ви отримуватимете сповіщення про всі нові теми та відповіді в цій категорії.",
    EveryPostInTopicsWithTag: "Ви отримуватимете сповіщення про нові теми з цією позначкою та всі відповіді в цих темах.",
    EveryPostWholeSite: "Ви отримуватимете сповіщення про всі нові теми та відповіді будь-де.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Нові теми",
    NewTopicsInCat: "Ви отримуватимете сповіщення про нові теми в цій категорії.",
    NewTopicsWithTag: "Ви отримуватимете сповіщення про нові теми з цією позначкою.",
    NewTopicsWholeSite: "Ви отримуватимете сповіщення про нові теми будь-де.",

    Tracking: "Відстеження",

    Normal: "Звичайне",
    NormalDescr: "Ви отримаєте сповіщення, якщо хтось озветься до вас, навіть опосередковано, наприклад " +
        "відповість на відповідь вам.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Стишене",
    HushedDescr: "Ви отримаєте сповіщення, лише якщо хтось звернеться безпосередньо до вас.",

    Muted: "Приглушене",
    MutedTopic: "Без сповіщень.",   // MISSING removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Зредагувати",
    Hide_1: "Сховати",
    Hide_2: ", клацніть ",
    Hide_3: " щоб відкрити знову",
  },


  // Forum categories

  fcs: {
    All: "Усі", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Перелік тем",

    // Select category dropdown

    from: "з",  // MISSING used like so:  "From <Category Name>" or "From All Categories"
    in: "у",      // MISSING used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Усі категорії",

    // Topic sort order

    Active: "Жваві",      // MISSING didn't add "first" yet to transls
    ActiveDescr: "Показує спочатку нещодавно жваві теми",

    New: "Нові",
    NewDescr: "Показує спочатку найновіші теми",

    Top: "Популярні",              // MISSING didn't rename from Top to Popular in transls
    TopDescr: "Показує нещодавно жваві теми",

    // Topic filter dropdown

    AllTopics: "Усі теми",

    ShowAllTopics: "Показати всі теми",
    ShowAllTopicsDescr: "Але не ті теми, які видалені",

    WaitingTopics: "Очікуючі теми",          // MISSING
    OnlyWaitingDescr_1: "Показує лише ті теми, ", // MISSING changed "questions" to "topics"
    OnlyWaitingDescr_2: "що очікують ",
    OnlyWaitingDescr_3: "на впровадження та виконання рішення",  // MISSING rewrote

    YourTopics: "Ваші теми",       // MISSING
    AssignedToYou: "Доручені вам", // MISSING

    DeletedTopics: "Показати видалені",   // MISSING
    ShowDeleted: "Показати видалені",
    ShowDeletedDescr: "Показує всі теми, навіть ті, що видалені",

    // Rightmost buttons

    ViewCategories: "Переглянути категорії",  // MISSING
    EditCat: "Зредагувати категорію",
    CreateCat: "Створити категорію",
    CreateTopic: "Створити тему",
    PostIdea: "Оприлюднити задум",
    AskQuestion: "Поставити питання",
    ReportProblem: "Повідомити про проблему",
    CreateMindMap: "Створити карту розуму",
    CreatePage: "Створити сторінку",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Пояснити піктограми ...",
    IconExplanation: "Пояснення до піктограми:",
    ExplGenDisc: "Загальне обговорення.",
    ExplQuestion: "Питання без прийнятої відповіді.",
    ExplAnswer: "Питання з прийнятою відповіддю.",
    ExplIdea: "Задум / пропозиція.",
    ExplProblem: "Проблема.",
    ExplPlanned: "Те, що ми плануємо здійснити або розв'язати.",
    ExplDone: "Те, що зроблено чи розв'язано.",
    ExplClosed: "Тема закрита.",
    ExplPinned: "Тема, яка завжди перша в переліку (можливо, лише у власній категорії).",

    PopularTopicsComma: "Популярні теми, ",
    TopFirstAllTime: "Показує найпопулярніші теми спочатку, за весь час.",
    TopFirstPastDay: "Показує теми, популярні минулого дня.",

    CatHasBeenDeleted: "Цю категорію видалено",

    TopicsActiveFirst: "Теми, спочатку нещодавно жваві",
    TopicsNewestFirst: "Теми, спочатку нові",

    CreatedOn: "Створено ",
    LastReplyOn: "\nОстання відповідь ",
    EditedOn: "\nВідредаговано ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "створив цю тему",
    frequentPoster: "багаторазовий дописувач",
    mostRecentPoster: "найостанніший дописувач",

    inC: "у: ",

    TitleFixed: "Це розв'язано",
    TitleDone: "Це зроблено",
    TitleStarted: "Ми розпочали це",
    TitleStartedFixing: "Ми почали це розв'язувати",
    TitleUnsolved: "Це невирішене питання",
    TitleIdea: "Це задум",
    TitlePlanningFix: "Ми плануємо це розв'язати",
    TitlePlanningDo: "Ми плануємо це здійснити",
    TitleChat: "Це канал балачки",
    TitlePrivateChat: "Це приватний канал балачки",
    TitlePrivateMessage: "Приватне повідомлення",
    TitleInfoPage: "Це ознайомча сторінка",
    TitleDiscussion: "Обговорення",
    IsPinnedGlobally: "\nЗакріплено, тому перше в переліку.",
    IsPinnedInCat: "\nЗакріплено у своїй категорії, і тому на першому місці у своїй категорії.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Останні теми (які очікують)",
    RecentTopicsInclDel: "Останні теми (включаючи видалені)",
    RecentTopics: "Нещодавні теми",
    _replies: " відповідає",
    _deleted: " (видалено)",
    _defCat: " (категорія за замовчуванням)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Нещодавні дописи",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " зараз в мережі у цій балачці",    // example: "5 online in this chat"
    NumOnlForum: " зараз в мережі на цьому форумі",

    // Open left-sidebar button title.
    WatchbBtn: "Ваші теми",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Ваші нещодавні теми, балачки, особисті повідомлення",

    // Title shown on user profile pages.
    AbtUsr: "Про користувача",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Повернутися назад із профілю користувача",
    BackFromAdm: "Повернутися назад з області адміністратора",

    // Title shown on full text search page.
    SearchPg: "Сторінка пошуку",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Додати ...",
    RecentlyViewed: "Нещодавно переглянуті теми",  // MISSING " topics"
    JoinedChats: "Балачки, у яких брали участь",
    ChatChannels: "Канали балачки",
    CreateChat: "Створити канал балачки",
    DirectMsgs: "Особисті повідомлення",
    NoChats: "Немає",    // meaning: "No chat messages"
    NoDirMsgs: "Немає",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Дії щодо теми",
    ViewPeopleHere: "Переглянути учасників",
    ViewAddRemoveMembers: "Переглянути / додати / видалити учасників",
    ViewChatMembers: "Переглянути учасників балачки",
    EditChat: "Зредагувати опис балачки",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Вийти з цієї балачки",
    LeaveThisCommunity: "Вийти з цієї спільноти",
    JoinThisCommunity: "Приєднатися до цієї спільноти",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Нещодавні коментарі у цій темі:",
    NoComments: "Немає коментарів.",

    YourBookmarks: "Ваші закладки:",

    UsersOnline: "Користувачі, які зараз у мережі:",
    UsersOnlineForum: "Користувачі, які зараз у мережі на цьому форумі:",
    UsersInThisChat: "Користувачі у цій балачці:",
    UsersInThisTopic: "Користувачі у цій темі:",

    GettingStartedGuide: "Посібник для адміністратора", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Порадник адміністратора",          // ... but what? It's here already, just reuse this transl field
    Guide: "Посібник",

    // How to hide the sidebar.
    CloseShortcutS: "Закрити (швидка клавіша: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Додати ще учасників",

    // Shown next to one's own username, in a list of users.
    thatsYou: "це ви",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Здається, тільки ви",
    YouAnd: "Ви та ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " людина, " : " людей, ";
      const have = numStrangers === 1 ? "яка не увійшла" : "які не увійшли";
      return numStrangers + people + have;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Відповіді зліва сортуються за принципом ",
    bestFirst: "спочатку найкращі.",
    ButBelow: "Але нижче ",
    insteadBy: " ті ж самі відповіді натомість сортуються за принципом ",
    newestFirst: "спочатку найновіші.",

    SoIfLeave: "Отже, якщо ви підете і повернетесь сюди пізніше, внизу ви знайдете ",
    allNewReplies: "усі нові відповіді.",
    Click: "Клацніть",
    aReplyToReadIt: " відповідь нижче, щоб прочитати її — бо нижче показано лише уривок.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Клацніть, щоб змінити статус",
    ClickToViewAnswer: "Клацніть, щоб переглянути відповідь",
    ViewAnswer: "Переглянути відповідь",
    ChangeStatusC: "Змінити статус на:",
    ChangeCatC: "Змінити категорію:",
    ChangeTopicTypeC: "Змінити різновид теми:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "питання",
    hasAccptAns: "має прийняту відповідь",
    aProblem: "проблема",
    planToFix: "план це розв'язати",
    anIdea: "задум",
    planToDo: "план це здійснити",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Цю форму було ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "закрито; ви більше не можете заповнювати її та оприлюднювати її.",

    ThisTopicClosed_1: "Цю тему було ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Ви все ще можете залишати коментарі.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Цю сторінку було видалено",
    CatDeldPageToo: "Категорія видалена, тому цю сторінку було також видалено",

    ThreadDeld: "Гілку видалено",
    CmntDeld: "Коментар видалено",
    PostDeld: "Допис видалено",
    DiscDeld: "Обговорення видалено",
    PageDeld: "Сторінку видалено",
    PagePendAppr: "Сторінка очікує на схвалення",
    TitlePendAppr: "Заголовок очікує на схвалення",
    TextPendingApproval: "Текст очікує на схвалення",

    TooltipQuestClosedNoAnsw: "Це питання було закрито без жодної прийнятої відповіді.",
    TooltipTopicClosed: "Ця тема закрита.",

    TooltipQuestSolved: "Це вирішене питання",
    TooltipQuestUnsolved: "Це невирішене питання",

    StatusDone: "Здійснено",
    TooltipProblFixed: "Це було розв'язано",
    TooltipDone: "Це було здійснено",

    StatusStarted: "Розпочато",
    TooltipFixing: "Ми почали це розв'язувати",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "Ми почали це здійснювати", // MISSING  -""-

    StatusPlanned: "Заплановано",
    TooltipProblPlanned: "Ми плануємо це розв'язати",
    TooltipIdeaPlanned: "Ми плануємо це здійснити",   // or "to implement this"?

    StatusNew: "Нове",
    StatusNewDtl: "Нова тема, що обговорюється",
    TooltipUnsProbl: "Це нерозв'язана проблема",
    TooltipIdea: "Це задум",

    TooltipPersMsg: "Особисте повідомлення",
    TooltipChat: "# означає канал балачки",
    TooltipPrivChat: "Це приватний канал балачки",

    TooltipPinnedGlob: "\nЗакріплено усюди.",
    TooltipPinnedCat: "\nЗакріплено в цій категорії.",

    SolvedClickView_1: "Вирішено в дописі #",
    SolvedClickView_2: ", click to view",

    PostHiddenClickShow: "Допис приховано; клацніть, щоб показати",
    ClickSeeMoreRepls: "Показати більше відповідей",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Показати більше коментарів",  // MISSING
    ClickSeeThisComment: "Клацніть, щоб показати цей коментар",
    clickToShow: "клацніть, щоб показати",

    ManyDisagree: "Багато хто не згоден з цим:",
    SomeDisagree: "Дехто не згоден з цим:",

    PendAppr: "Очікує схвалення",
    CmtPendAppr: "Коментар, що очікував на схвалення, оприлюднено ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Ваш" : "Цей") + " коментар нижче очікує на схвалення.",

    _and: " та",

    repliesTo: "відповідає на",
    InReplyTo: "У відповідь на",
    YourReplyTo: "Ваша відповідь на ",  // MISSING
    YourChatMsg: "Ваше повідомлення в балачці: ",   // MISSING
    YourDraft: "Ваша чернетка",    // MISSING
    YourEdits: "Ваші виправлення: ",   // MISSING
    YourProgrNoteC: "Ваша примітка щодо поступу:",  // MISSING
    aProgrNote: "примітка щодо поступу: ",  // MISSING

    ReplyingToC: "У відповідь на:",    // MISSING
    ScrollToPrevw_1: "Прокрутити до ",  // MISSING
    ScrollToPrevw_2: "попередній перегляд",     // MISSING

    UnfinEdits: "Незакінчені виправлення",  // MISSING
    ResumeEdting: "Продовжити зредагування",  // MISSING
    DelDraft: "Видалити чернетку",   // MISSING

    ClickViewEdits: "Клацніть, щоб переглянути старі виправлення",

    By: "Автор: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "про те, чи потрібно здійснювати цей задум, і як саме",
    aboutThisProbl: "про те, чи потрібно розв'язувати цю проблему, і як саме",

    AddProgrNote: "Додати примітку щодо поступу",
    // Progress ...
    withThisIdea: "у здійсненні цього задуму",
    withThisProbl: "у розв'язанні цієї проблеми",
    withThis: "у здійсненні цього",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Сповіщення щодо цієї теми:",

    // If is a direct message topic, members listed below this text.
    Msg: "Повідомлення",

    SmrzRepls: "Підсумувати відповіді",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Є ${numReplies} відповідей. Приблизний час читання: ${minutes} хвилин`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Зроблено. Підсумовано ${numSummarized} відповідей, з ${numShownBefore} раніше показаних відповідей.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Закрити тему",  // MISSING
    CloseOwnQuestionTooltip: "Закрийте це запитання, якщо вам більше не потрібна відповідь.",
    CloseOthersQuestionTooltip: "Закрийте це питання, якщо на нього не потрібна відповідь, наприклад, якщо " +
        "воно не відповідає темі або на нього вже відповіли в іншій темі.",
    CloseToDoTooltip: "Закрийте це завдання, якщо його не потрібно здійснювати або розв'язувати.",
    CloseTopicTooltip: "Закрийте цю тему, якщо вона не потребує подальшого розгляду.",

    AcceptBtnExpl: "Прийміть це як відповідь на питання або проблему",
    SolutionQ: "Це рішення?",
    ClickUnaccept: "Клацніть, щоб скасувати прийняття цієї відповіді",
    PostAccepted: "Цей допис було прийнято як відповідь",

    NumLikes: (num: number) => num === 1 ? "1 Вподобав" : num + " Вподобайок",
    NumDisagree: (num: number) => num === 1 ? "1 Не згоден" : num + " Незгоденців",
    NumBury: (num: number) => num === 1 ? "1 Поховати" : num + " Поховайок",
    NumUnwanted: (num: number) => num === 1 ? "1 Небажане" : num + " Небажанців",

    MoreVotes: "Більше голосів ...",
    LikeThis: "Вподобати це",
    LinkToPost: "Посилання на цей допис",
    Report: "Поскаржитись",
    ReportThisPost: "Поскаржитись на цей допис",
    Admin: "Адміністратор",
    DiscIx: "Вказівник обговорень",

    Disagree: "Не згоден",
    DisagreeExpl: "Клацніть тут, щоб не погодитися з цим повідомленням або попередити інших про помилки щодо фактів.",
    Bury: "Поховати",
    BuryExpl: "Клацніть, щоб перемістити цей допис нижче інших дописів. Тільки співробітники форуму зможуть побачити ваш голос.",
    Unwanted: "Небажане",
    UnwantedExpl: "Якщо ви не хочете, щоб цей допис був на цьому вебсайті. Це зменшить мою довіру до " +
            "автора допису. Тільки співробітники форуму зможуть побачити ваш голос.",

    AddTags: "Додати / видалити позначки (теги)",
    UnWikify: "Роз-вікіфікувати",
    Wikify: "Вікіфікувати",
    PinDeleteEtc: "Закріпити / Видалити / Категорія ...",
  },


  // Share dialog

  sd: {
    Copied: "Скопійовано.",
    CtrlCToCopy: "Натисніть CTRL+C, щоб скопіювати.",
    ClickToCopy: "Клацніть, щоб скопіювати посилання.",
  },


  // Chat

  c: {
    About_1: "Це ",
    About_2: " канал балачки, створений ",
    ScrollUpViewComments: "Прокрутіть вгору, щоб переглянути попередні коментарі",
    Purpose: "Призначення:",
    edit: "зредагувати",
    'delete': "видалити",
    MessageDeleted: "(Повідомлення видалено)",
    JoinThisChat: "Приєднатися до цієї балачки",
    PostMessage: "Оприлюднити повідомлення",
    AdvancedEditor: "Розширений редактор",
    TypeHere: "Друкуйте тут. Ви можете використовувати Markdown і HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Потребує розгляду ",
    AdminHelp: "Довідка адміністратора ",
    StaffHelp: "Довідка персоналу ",
    DraftsEtc: "Чернетки, закладки, завдання",
    MoreNotfs: "Переглянути всі сповіщення",
    DismNotfs: "Позначити всі як прочитані",
    ViewProfile: "Переглянути свій профіль",
    ViewGroups: "Переглянути групи",
    LogOut: "Вийти",
    UnhideHelp: "Показати приховані довідкові повідомлення",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Прокрутити до:",
    Scroll: "Прокрутити",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Назад (B)", // MAYBE,
    // but not, too much text: "B" "ack, Повернутися назад (Швидка клавіша: B або Backspace)",
    BackExpl: "Прокрутити назад до вашого попереднього місця на цій сторінці",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Вгору сторінки",
    PgTopHelp: "Перейти вгору сторінки. Швидка клавіша: 1",
    Repl: "Відповіді",
    ReplHelp: "Перейти до розділу Відповіді. Швидка клавіша: 2",
    Progr: "Поступ",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Перейти до розділу Поступ. Швидка клавіша: 3",
    PgBtm: "Донизу сторінки",
    Btm: "Униз",
    BtmHelp: "Перейти донизу сторінки. Швидка клавіша: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", та ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " щоб прокрутити назад",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Вибрати користувачів",
    AddUsers: "Додати користувачів",
  },


  // About user dialog

  aud: {
    IsMod: "Є модератором.",
    IsAdm: "Є адміністратором.",
    IsDeld: "Знедіяно або видалено.",
    ThisIsGuest: "Це користувач-гість, насправді може бути ким завгодно.",
    ViewInAdm: "Переглянути в області адміністратора",
    ViewProfl: "Переглянути профіль",
    ViewComments: "Переглянути інші коментарі",
    RmFromTpc: "Видалити з теми",
    EmAdrUnkn: "Адреса електронної пошти невідома — цей гість не отримуватиме сповіщень про відповіді.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Налаштування",
    Invites: "Запрошення",
    DraftsEtc: "Чернетки, тощо",
    About: "Про нас",
    Privacy: "Конфіденційність",
    Security: "Безпека",  // MAYBE, GTR
    Account: "Обліковий запис",
    Interface: "Інтерфейс",

    // ----- Overview stats

    JoinedC: "Приєднався: ",
    PostsMadeC: "Оприлюднив дописів: ",
    LastPostC: "Останній допис: ",
    LastSeenC: "Востаннє тут: ",
    TrustLevelC: "Рівень довіри: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Завантажити світлину",
    ChangePhoto: "Змінити світлину",
    ImgTooSmall: "Зображення замале: має бути принаймні 100 х 100",

    // ----- Activity

    OnlyStaffCanSee: "Це можуть бачити лише співробітники та довірені ключові учасники.",
    OnlyMbrsCanSee: "Це можуть бачити лише люди, які були певний час завсідниками.",
    Nothing: "Нема що показувати",
    Posts: "Дописи",
    NoPosts: "Нема дописів.",
    Topics: "Теми",
    NoTopics: "Нема тем.",

    // ----- User status

    UserBanned: "Цей користувач під забороною",
    UserSuspended: (dateUtc: string) => `Цього користувача тимчасово усунено до ${dateUtc} за всесвітнім координованим часом`,
    ReasonC: "Причина: ",

    DeactOrDeld: "Знедіяно або видалено.",
    isGroup: " (група)",
    isGuest: " — користувач-гість, може бути будь-хто",
    isMod: " – модератор",
    isAdmin: " – адміністратор",
    you: "(ви)",

    // ----- Notifications page

    NoNotfs: "Немає сповіщень",
    NotfsToYouC: "Сповіщення для вас:",
    NotfsToOtherC: (name: string) => `Сповіщення для ${name}:`,
    DefNotfsSiteWide: "Сповіщення самопливом, для всього сайту",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "для",

    // ----- Drafts Etc page

    NoDrafts: "Немає чернеток",
    YourDraftsC: "Ваші чернетки:",
    DraftsByC: (name: string) => `Чернетки, автор яких ${name}:`,

    // ----- Invites page

    InvitesIntro: "Тут ви можете запросити людей приєднатися до цієї мережевої місцини. ",
    InvitesListedBelow: "Запрошення, які ви вже надіслали, перелічені нижче.",
    NoInvites: "Ви ще нікого не запросили.",

    InvitedEmail: "Запрошена адреса електронної пошти",
    WhoAccepted: "Учасник, який прийняв",
    InvAccepted: "Запрошення прийнято",
    InvSent: "Запрошення відправлено",
    JoinedAlready: "Вже приєднався",

    SendAnInv: "Запросити людей", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Надіслати запрошення",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Ми надішлемо вашим друзям короткого електронного листа. Вони клацнуть на посилання " +
        "щоб одразу ж приєднатися, їм не потрібно буде входити в систему. " +
        "Вони стануть звичайними учасниками, а не модераторами чи адміністраторами.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Гаразд. Я надішлю їм електронного листа.",
    NoOneToInv: "Нема кого запрошувати.",
    InvNotfLater: "Я сповіщу вас пізніше, коли я їх запрошу.",
    AlreadyInvSendAgainQ: "Їх уже запрошено — можливо, ви бажаєте запросити їх знову?",
    InvErr_1: "Це призвело до ",
    InvErr_2: "помилок",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Вони вже приєдналися, тому я їх не запрошував:",
    ResendInvsQ: "Повторно надіслати запрошення цим людям? Їх уже запросили.",
    InvAgain: "Запросити знову",

    // ----- Preferences, About

    AboutYou: "Про вас",
    WebLink: "Будь-яка ваша мережева місцина або сторінка.",

    NotShownCannotChange: "Не зображується для всіх. Його неможливо змінити.",

    // The full name or alias:
    NameOpt: "Ім'я (необов’язково)",

    NotShown: "Не зображується для всіх.",

    // The username:
    MayChangeFewTimes: "Ви можете змінити його лише кілька разів.",
    notSpecified: "(не вказано)",
    ChangeUsername_1: "Ви можете змінити своє ім'я користувача лише кілька разів.",
    ChangeUsername_2: "Занадто часта його зміна може заплутати інших — " +
        "вони не знатимуть, як @згадувати вас.",

    NotfAboutAll: "Отримувати сповіщення про кожен новий допис (якщо ви не приглушили якусь тему чи категорію)",
    NotfAboutNewTopics: "Отримувати сповіщення про нові теми (якщо ви не приглушили їх категорію)",

    ActivitySummaryEmails: "Електронні листи з підсумком діяльності",

    EmailSummariesToGroup:
        "Якщо учасники цієї групи не відвідують її тут, то самопливом надсилати їм " +
        "зведення популярних тем та інші речі.",
    EmailSummariesToMe:
        "Якщо я не буваю тут, надсилайте мені " +
        "зведення популярних тем та інші речі.",

    AlsoIfTheyVisit: "Надсилайте їм електронні листи, навіть якщо вони регулярно бувають тут.",
    AlsoIfIVisit: "Надсилайте мені електронні листи, навіть якщо я регулярно буваю тут.",

    HowOftenWeSend: "Як часто ми маємо надсилати ці електронні листи?",
    HowOftenYouWant: "Як часто ви бажаєте отримувати ці електронні листи?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Приховувати вашу нещодавню діяльність для незнайомців та нових учасників?",
    HideActivityStrangers_2: "(Але не для тих, хто деякий час був завсідником.)",
    HideActivityAll_1: "Приховувати вашу нещодавню діяльність для всіх?",
    HideActivityAll_2: "(Окрім співробітників та довірених ключових учасників.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Адреси електронної пошти",
    PrimaryDot: "Основна. ",
    VerifiedDot: "Перевірена. ",
    NotVerifiedDot: "Не перевірена. ",
    ForLoginWithDot: (provider: string) => `Для входу через ${provider}. `,
    MakePrimary: "Зробити основним",
    AddEmail: "Додати адресу електронної пошти",
    TypeNewEmailC: "Ввести нову адресу електронної пошти:",
    MaxEmailsInfo: (numMax: number) => `(Не можна додавати більше ${numMax} адрес.)`,
    EmailAdded_1: "Додано. Ми надіслали вам листа для підтвердження адреси — ",
    EmailAdded_2: "перевірте свою вхідну пошту.",
    SendVerifEmail: "Надіслати листа для підтвердження адреси",

    EmailStatusExpl:
        "('Основна' означає, що ви можете увійти по цій адресі, і ми надсилатимемо на неї сповіщення. " +
        "'Перевірена' означає, що ви клацнули на посилання в електронному листі для підтвердження адреси.)",

    // Password:
    ChangePwdQ: "Змінити пароль?",
    CreatePwdQ: "Створити пароль?",
    WillGetPwdRstEml: "Ви отримаєте електронного листа, щоб скинути пароль.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Нема",

    // Logins:
    LoginMethods: "Методи входу",
    commaAs: ", як: ",

    // One's data:
    YourContent: "Ваш вміст",
    DownloadPosts: "Завантажити дописи",
    DownloadPostsHelp: "Створює файл JSON з копією тем та коментарів, які ви оприлюднили.",
    DownloadPersData: "Завантажити особисті дані",
    DownloadPersDataHelp: "Створює JSON файл із копією ваших особистих даних, наприклад, вашого імені " +
        "(якщо ви вказали ім'я) та електронної адреси.",


    // Delete account:
    DangerZone: "Небезпечна зона",
    DeleteAccount: "Видалити обліковий запис",
    DeleteYourAccountQ:
        "Видалити ваш обліковий запис? Ми видалимо ваше ім’я, забудемо вашу адресу електронної пошти, пароль та " +
        "усі мережеві ролі (наприклад, логіни у Фейсбуці та Твіттері).  " +
        "Ви не зможете увійти знову. Це не можна буде скасувати.",
    DeleteUserQ:
        "Видалити цього користувача? Ми видалимо ім’я, забудемо адресу електронної пошти, пароль та " +
        "мережеві ролі (наприклад, логіни у Фейсбуці та Твіттері) " +
        "Користувач не зможе увійти знову. Це не можна буде скасувати.",
    YesDelete: "Так, видалити",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Учасники групи",
    NoMembers: "Нема учасників.",
    MayNotListMembers: "Немає змоги перелічити учасників.",
    AddMembers: "Додати учасників",
    BuiltInCannotModify: "Це вбудована група; її неможливо змінити.",
    NumMembers: (num: number) => `${num} учасників`,
    YouAreMember: "Ви учасник.",
    CustomGroupsC: "Нетипові групи:",
    BuiltInGroupsC: "Вбудовані групи:",
    DeleteGroup: "Видалити цю групу",
  },


  // Create user dialog

  cud: {
    CreateUser: "Створити користувача",
    CreateAccount: "Створити обліковий запис",
    EmailC: "Електронна пошта:",  // REMOVE move to t.EmailC instead
    keptPriv: "залишиться конфіденційною",
    forNotfsKeptPriv: "для сповіщень про відповіді, залишиться конфіденційною",
    EmailVerifBy_1: "Ваша адреса електронної пошти підтверджена ",
    EmailVerifBy_2: ".",
    UsernameC: "Ім'я користувача:",
    FullNameC: "Повне ім'я:",
    optName: "необов’язково",

    //OrCreateAcct_1: "Або ",
    //OrCreateAcct_2: "створити обліковий запис",
    //OrCreateAcct_3: " з ",
    //OrCreateAcct_4: "@логіном",
    //OrCreateAcct_5: " та паролем",

    DoneLoggedIn: "Обліковий запис створено. Ви ввійшли в систему.",  // COULD say if verif email sent too?
    AlmostDone:
        "Майже готово! Вам просто потрібно підтвердити свою електронну адресу. Ми " +
        "надіслали вам електронного листа. Будь ласка, клацніть на посилання в електронному листі, щоб ввести в дію " +
        "свій обліковий запис. Ви можете закрити цю сторінку.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Умови та конфіденційність",

    Accept_1: "Чи ви приймаєте наші ",
    TermsOfService: "Умови надання послуг",
    TermsOfUse: "Умови використання",
    Accept_2: " та ",
    PrivPol: "Політику конфіденційності",
    Accept_3_User: "?",
    Accept_3_Owner: " для власників сайтів?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Так, я приймаю",
  },


  // Password input

  pwd: {
    PasswordC: "Пароль:",
    StrengthC: "Сила: ",
    FairlyWeak: "Досить слабкий.",
    toShort: "занадто короткий",
    TooShort: (minLength: number) => `Занадто короткий. Має бути принаймні ${minLength} символів`,
    PlzInclDigit: "Будь ласка, включіть до пароля цифру або спеціальний символ",
    TooWeak123abc: "Занадто слабкий. Не використовуйте паролі на зразок '12345' чи 'abcde'.",
    AvoidInclC: "Уникайте включення (частини) вашого імені або електронної пошти в паролі:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Сторінку не знайдено або доступ заборонено.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Ви виступаєте в ролі когось, хто може не мати доступу до всіх частин " +
        "цього вебсайту.",

    IfYouThinkExistsThen: "Якщо ви вважаєте, що сторінка існує, увійдіть як хтось, хто може отримати до неї доступ. ",
    LoggedInAlready: "(Ви вже ввійшли в систему, але, можливо, це не той обліковий запис?) ",
    ElseGoToHome_1: "В іншому випадку ви можете ",
    ElseGoToHome_2: "перейти на домашню сторінку.",

    CreateAcconut: "Створити обліковий запис",
    ContinueWithDots: "Продовжити ...",
    SignUp: "Приєднатися",
    LogIn: "Увійти",
    LogInWithPwd: "Увійти за допомогою пароля",
    CreateAdmAcct: "Створити обліковий запис адміністратора:",
    AuthRequired: "Для доступу на цей сайт потрібне підтвердження права на доступ",
    LogInToLike: "Увійдіть, щоб вподобати цей допис",
    LogInToSubmit: "Увійдіть та надішліть",
    LogInToComment: "Увійдіть, щоб написати коментар",
    LogInToCreateTopic: "Увійдіть, щоб створити тему",

    //AlreadyHaveAcctQ: "У вас є обліковий запис? ",
    OrLogIn_1: "",
    OrLogIn_2: "Увійти",   // "Log in" (this is a button)
    OrLogIn_3: " замість цього", // "instead"

    //NewUserQ: "Новий користувач? ",
    SignUpInstead_1: "",
    SignUpInstead_2: "Створити обліковий запис", // (this is a button)
    SignUpInstead_3: " замість цього",

    // MAYBE x3:
    OrTypeName_1: ", Або просто ",
    OrTypeName_2: "введіть своє ім'я",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Або створіть обліковий запис:",
    OrTypeName: "Або введіть своє ім'я:",
    OrLogIn: "Або увійдіть:",
    YourNameQ: "Ваше ім'я?",

    BadCreds: "Невірне ім'я користувача чи пароль",

    UsernameOrEmailC: "Ім'я користувача чи електронна адреса:",
    PasswordC: "Пароль:",
    ForgotPwd: "Ви забули свій пароль?",

    NoPwd: "Ви ще не вибрали пароль.",
    CreatePwd: "Створити пароль",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Будь ласка, повідомте нам, що вас турбує.",
    ThanksHaveReported: "Дякую, що повідомили про це. Співробітники форуму розглянуть ваше звернення.",
    ReportComment: "Поскаржитися на коментар",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Цей допис містить особисті дані, наприклад чиєсь справжнє ім’я.",
    OptOffensive: "Цей допис містить агресивний або образливий вміст.",
    OptSpam: "Цей допис є небажаною рекламою.",
    OptOther: "Сповістіть співробітників про цей допис з якоїсь іншої причини.",
  },


  // Help message dialog
  help: {
    YouCanShowAgain_1: "Ви можете подивитися довідкові повідомлення ще раз, якщо ви ввійшли в систему, " +
        "клацнувши своє ім'я, а потім ",
    YouCanShowAgain_2: "Показати приховані довідкові повідомлення",
  },


  // Editor

  e: {
    SimilarTopicsC: "Подібні теми:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Вибачте, але наразі ви можете завантажувати лише один файл за раз",
    PleaseFinishPost: "Будь ласка, спершу закінчіть писати свій допис",
    PleaseFinishChatMsg: "Будь ласка, спершу допишіть своє повідомлення в балачці",
    PleaseFinishMsg: "Будь ласка, спершу допишіть своє повідомлення",
    PleaseSaveEdits: "Будь ласка, спершу збережіть свої поточні виправлення",
    PleaseSaveOrCancel: "Будь ласка, спершу або збережіть, або скасуйте нову тему",
    CanContinueEditing: "Ви можете продовжувати редагувати свій текст, якщо ви знову відкриєте редактор.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Будь ласка, не видаляйте весь текст. Напишіть щось.",
    PleaseWriteSth: "Будь ласка, напишіть щось.",
    PleaseWriteTitle: "Будь ласка, напишіть заголовок теми.",
    PleaseWriteMsgTitle: "Будь ласка, напишіть заголовок повідомлення.",
    PleaseWriteMsg: "Будь ласка, напишіть повідомлення.",

    exBold: "жирний текст",
    exEmph: "підкреслений текст",
    exPre: "попередньо відформатований текст",
    exQuoted: "цитований текст",
    ExHeading: "Заголовок",

    TitlePlaceholder: "Надрукуйте заголовок — про що це, одним коротким реченням?",

    EditPost_1: "Зредагувати ",
    EditPost_2: "допис ",

    TypeChatMsg: "Надрукуйте повідомлення до балачки:",
    YourMsg: "Ваше повідомлення:",
    CreateTopic: "Створити нову тему",
    CreateCustomHtml: "Створіть нетипову HTML-сторінку (додайте свій заголовок <h1>)",
    CreateInfoPage: "Створити ознайомчу сторінку",
    CreateCode: "Створити сторінку вихідного коду",
    AskQuestion: "Поставити питання",
    ReportProblem: "Повідомити про проблему",
    SuggestIdea: "Запропонувати задум",
    NewChat: "Нова назва та мета каналу балачки",
    NewPrivChat: "Нова назва та мета приватної балачки",
    AppendComment: "Додайте коментар внизу сторінки:",

    ReplyTo: "Відповісти ",
    ReplyTo_theOrigPost: "Початкове повідомлення",
    ReplyTo_post: "допис ",
    AddCommentC: "Додати коментар:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Будь ласка, оберіть один або кілька дописів, для відповіді на них.",

    Save: "Зберегти",
    edits: "виправлення",

    PostReply: "Оприлюднити відповідь",
    PostComment: "Оприлюднити коментар",

    Post: "Оприлюднити",
    comment: "коментар",
    question: "питання",

    PostMessage: "Оприлюднити повідомлення",
    SimpleEditor: "Простий редактор",

    Send: "Надіслати",
    message: "повідомлення",

    Create: "Створити",
    page: "сторінку",
    chat: "балачку",
    idea: "задум",
    topic: "тему",

    Submit: "Подати на розгляд",
    problem: "проблему",

    ViewOldEdits: "Переглянути старі виправлення",

    UploadBtnTooltip: "Завантажити файл або зображення",
    BoldBtnTooltip: "Зробити шрифт жирним",
    EmBtnTooltip: "Підкреслити",
    QuoteBtnTooltip: "Цитата",
    PreBtnTooltip: "Попередньо відформатований текст",
    HeadingBtnTooltip: "Заголовок",

    TypeHerePlaceholder: "Друкуйте тут. Ви можете використовувати Markdown та HTML. Перетягніть сюди зображення, щоб вставити його.",

    Maximize: "Розгорнути",
    ToNormal: "Повернутися до звичайного вигляду",
    TileHorizontally: "Розмістити горизонтальною плиткою",

    PreviewC: "Попередній перегляд:",
    TitleExcl: " (заголовок виключено)",
    ShowEditorAgain: "Знову показати редактор",
    Minimize: "Згорнути",

    PreviewInfo: "Тут ви можете переглянути, як буде виглядати ваш допис.",
    CannotType: "Тут не можна друкувати.",

    LoadingDraftDots: "Завантажую хоч якусь чернетку ...",
    DraftUnchanged: "Без змін.",
    CannotSaveDraftC: "Не вдається зберегти чернетку:",
    DraftSavedBrwsr: "Чернетка збережена, в оглядачі.",   // MISSING
    DraftSaved: (nr: string | number) => `Чернетку ${nr} збережено.`,
    DraftDeleted: (nr: string | number) => `Чернетку ${nr} видалено.`,
    WillSaveDraft: (nr: string | number) => `Збережу чернетку ${nr} ...`,
    SavingDraft: (nr: string | number) => `Зберігаю чернетку ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Видаляю чернетку ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Оберіть категорію",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Оберіть різновид теми:",
    DiscussionExpl: "Дискусія щодо чогось.",
    QuestionExpl: "Одну відповідь можна буде позначити як прийняту відповідь.",
    ProblExpl: "Якщо щось негаразд чи не працює. Можна буде позначити як розв'язану чи виправлену.",
    IdeaExpl: "Пропозиція. Можна буде позначити як здійснений або втілений.",
    ChatExpl: "Можливо, нескінченна розмова.",
    PrivChatExpl: "Видко лише людям, яких запросили приєднатися до балачки.",

    CustomHtml: "Нетипова HTML-сторінка",
    InfoPage: "Ознайомча сторінка",
    Code: "Код",
    EmbCmts: "Вбудовані коментарі",
    About: "Про нас",
    PrivChat: "Приватна балачка",
    Form: "Форма",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Більше нема спільнот, до яких можна приєднатися.",
    SelCmty: "Обрати спільноту ...",
  },


  // Search dialogs and the search page.

  s: {
    TxtToFind: "Текст для пошуку",
  },


  // No internet

  ni: {
    NoInet: "Немає підключення до Інтернету",
    PlzRefr: "Оновіть сторінку, щоб побачити останні зміни. (Сталося роз'єднання)",
    RefrNow: "Оновити зараз",
  },


  PostDeleted: (postNr: number) => `Цей допис, номер ${postNr}, було видалено.`,
  NoSuchPost: (postNr: number) => `На цій сторінці немає допису з номером ${postNr}.`,
  NoPageHere: "Цю сторінку або було видалено, або її ніколи не існувало, або ви не можете отримати до неї доступ.",
  GoBackToLastPage: "Повернутися до останньої відвіданої сторінки",

};
