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

var t_bg_BG: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Активен",
  Activity: "Активност",
  Add: "Добавяне",
  AddingDots: "Добавяне ...",
  AddComment: "Добави коментар",
  Admin: "Админ",
  AdvSearch: "Разширено търсене",
  Anonym: "Анонимен",
  Away: "Отсъства",
  Back: "Назад",
  BlogN: "Блог",
  Bookmarks: "Отметки",
  Cancel: "Отказ",
  Categories: "Категории",
  Category: "Категория",
  ChangeV: "Промяна",
  ClickToShow: "Кликнете за показване",
  ChangeDots: "Промяна ...",
  ChatN: "Чат",
  Chatting: "Чат",
  CheckYourEmail: "Проверете имейла си",
  Close: "Затвори",
  closed: "затворено",
  comments: "коментара",   // as in:  "123 коментара"
  Continue: "Продължи",
  Created: "Създадено",
  Delete: "Изтрий",
  Deleted: "Изтрито",
  DirectMessage: "Лично съобщение",
  Discussion: "Дискусия",
  discussion: "дискусия",
  done: "готово",
  EditV: "Редактиране",
  Editing: "Редактиране",
  EmailC: "Имейл: ",
  EmailAddress: "Имейл адрес",
  EmailAddresses: "Имейл адреси",
  EmailSentD: "Имейлът е изпратен.",
  Forum: "Форум",
  GetNotifiedAbout: "Получавайте известия за",
  GroupsC: "Групи:",
  Hide: "Скрий",
  Home: "Начало",
  Idea: "Идея",
  Join: "Присъединяване",
  KbdShrtcsC: "Клавишни комбинации: ",
  Loading: "Зареждане...",
  LoadMore: "Зареди още ...",
  LogIn: "Вход",
  LoggedInAs: "Влезли сте като ",
  LogOut: "Изход",
  Maybe: "Може би",
  Manage: "Управление",
  Members: "Членове",
  MessageN: "Съобщение",
  MoreDots: "Още...",
  Move: "Премести",
  Name: "Име",
  NameC: "Име:",
  NewTopic: "Нова тема",
  NoCancel: "Не, отказ",
  Notifications: "Известия",
  NotImplemented: "(Не е внедрено)",
  NotYet: "Все още не",
  NoTitle: "Без заглавие",
  NoTopics: "Няма теми.",
  Okay: "Добре",
  OkayDots: "Добре ...",
  Online: "На линия",
  onePerLine: "по един на ред",
  PreviewV: "Преглед",
  Problem: "Проблем",
  progressN: "напредък",
  Question: "Въпрос",
  Recent: "Скорошни",
  Remove: "Премахни",
  Reopen: "Отвори отново",
  ReplyV: "Отговори",
  Replying: "Отговаряне",
  Replies: "Отговори",
  replies: "отговора",
  Save: "Запази",
  SavingDots: "Запазване ...",
  SavedDot: "Запазено.",
  Search: "Търсене",
  SendMsg: "Изпрати съобщение",
  ShowPreview: "Покажи преглед",
  SignUp: "Присъедини се",
  Solution: "Решение",
  started: "започнато",
  Summary: "Резюме",
  Submit: "Изпрати",
  Tag: "Етикет",
  Tags: "Етикети",
  Tools: "Инструменти",
  Topics: "Теми",
  TopicTitle: "Заглавие на темата",
  TopicType: "Тип тема",
  UploadingDots: "Качване...",
  Username: "Потребителско име",
  Users: "Потребители",
  Welcome: "Добре дошли",
  Wiki: "Уики",
  Yes: "Да",
  YesBye: "Да, чао",
  YesDoThat: "Да, направи го",
  You: "Вие",
  you: "вие",

  // Trust levels.
  Guest:  "Гост",
  NewMember: "Нов член",
  BasicMember: "Основен член",
  FullMember: "Пълен член",
  TrustedMember: "Доверен член",
  RegularMember: "Доверен редовен член",
  CoreMember: "Основен член",

  // Periods.
  PastDay: "Изминалия ден",
  PastWeek: "Изминалата седмица",
  PastMonth: "Изминалия месец",
  PastQuarter: "Изминалото тримесечие",
  PastYear: "Изминалата година",
  AllTime: "За цялото време",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "мес",  // months
  daysLtr: "д",      // days
  hoursLtr: "ч",     // hours
  minsLtr: "мин",    // minutes
  secsLtr: "сек",    // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "преди 1 ден" : `преди ${numDays} дни`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "преди 1 час" : `преди ${numHours} часа`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "преди 1 минута" : `преди ${numMins} минути`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "преди 1 секунда" : `преди ${numSecs} секунди`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Имейлът е задължителен",
    NoSpcs: "Без интервали, моля",
    InvldAddr: "Невалиден имейл адрес",
    NoBadChrs: "Без странни символи, моля",

    // Full name input field:
    NotOnlSpcs: "Не само интервали, моля",
    NoAt: "Без @, моля",

    // Username input field:
    NoDash: "Без тирета (-), моля",
    DontInclAt: "Не включвайте @",
    StartEndLtrDgt: "Започнете и завършете с буква или цифра",
    OnlLtrNumEtc: "Само букви (a-z, A-Z), цифри и _ (долна черта)",
    // This shown just below the username input:
    UnUnqShrt_1: "Вашето ",
    UnUnqShrt_2: "@потребителско_име",
    UnUnqShrt_3: ", уникално и кратко",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Трябва да бъде поне ${minLength} знака`,
    TooLong: (maxLength: number) => `Твърде дълго. Трябва да бъде най-много ${maxLength} знака`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Всяка публикация",
    EveryPostInTopic: "Ще бъдете уведомявани за всички нови отговори в тази тема.",
    EveryPostInCat: "Ще бъдете уведомявани за всички нови теми и отговори в тази категория.",
    EveryPostInTopicsWithTag: "Ще бъдете уведомявани за нови теми с този етикет и всички отговори в тях.",
    EveryPostWholeSite: "Ще бъдете уведомявани за всички нови теми и отговори навсякъде.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Нови теми",
    NewTopicsInCat: "Ще бъдете уведомявани за нови теми в тази категория.",
    NewTopicsWithTag: "Ще бъдете уведомявани за нови теми с този етикет.",
    NewTopicsWholeSite: "Ще бъдете уведомявани за нови теми навсякъде.",

    Tracking: "Проследяване",

    Normal: "Нормално",
    NormalDescr: "Ще бъдете уведомявани, ако някой говори с вас, включително непряко, напр. отговор на отговор до вас.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Приглушено",
    HushedDescr: "Ще бъдете уведомявани само ако някой говори директно с вас.",

    Muted: "Заглушено",
    MutedTopic: "Без известия.",
  },


  // Forum intro text

  fi: {
    Edit: "Редактирай",
    Hide_1: "Скрий",
    Hide_2: ", кликнете ",
    Hide_3: " за повторно отваряне",
  },


  // Forum categories

  fcs: {
    All: "Всички", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Списък с теми",

    // Select category dropdown

    from: "от",
    in: "в",
    AllCats: "Всички категории",

    // Topic sort order

    Active: "Първо активните",
    ActiveDescr: "Показва последно активните теми първо",

    New: "Нови",
    NewDescr: "Показва най-новите теми първо",

    Top: "Популярни",
    TopDescr: "Показва популярните теми първо",

    // Topic filter dropdown

    AllTopics: "Всички теми",

    ShowAllTopics: "Покажи всички теми",
    ShowAllTopicsDescr: "Без изтритите теми",

    WaitingTopics: "Чакащи теми",
    OnlyWaitingDescr_1: "Показва само теми ",
    OnlyWaitingDescr_2: "чакащи ",
    OnlyWaitingDescr_3: "решение или да бъдат реализирани и завършени",

    YourTopics: "Вашите теми",
    AssignedToYou: "Възложени на вас",

    DeletedTopics: "Покажи изтритите",
    ShowDeleted: "Покажи изтритите",
    ShowDeletedDescr: "Показва всички теми, включително изтритите",

    // Rightmost buttons

    ViewCategories: "Виж категориите",
    EditCat: "Редактирай категорията",
    CreateCat: "Създай категория",
    CreateTopic: "Създай тема",
    PostIdea: "Публикувай идея",
    AskQuestion: "Задай въпрос",
    ReportProblem: "Докладвай проблем",
    CreateMindMap: "Създай мисловна карта",
    CreatePage: "Създай страница",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Обяснение на иконите...",
    IconExplanation: "Значение на иконите:",
    ExplGenDisc: "Обща дискусия.",
    ExplQuestion: "Въпрос без приет отговор.",
    ExplAnswer: "Въпрос с приет отговор.",
    ExplIdea: "Идея / предложение.",
    ExplProblem: "Проблем.",
    ExplPlanned: "Нещо, което планираме да направим или поправим.",
    ExplDone: "Нещо, което е направено или поправено.",
    ExplClosed: "Темата е затворена.",
    ExplPinned: "Темата винаги е най-отгоре (вероятно само в своята категория).",

    PopularTopicsComma: "Популярни теми, ",
    TopFirstAllTime: "Показва най-популярните теми за цялото време.",
    TopFirstPastDay: "Показва популярните теми за изминалия ден.",

    CatHasBeenDeleted: "Тази категория е изтрита",

    TopicsActiveFirst: "Теми, първо последно активните",
    TopicsNewestFirst: "Теми, първо най-новите",

    CreatedOn: "Създадена на ",
    LastReplyOn: "\nПоследен отговор на ",
    EditedOn: "\nРедактирана на ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "създаде темата",
    frequentPoster: "чест участник",
    mostRecentPoster: "последен участник",

    inC: "в: ",

    TitleFixed: "Това е поправено",
    TitleDone: "Това е направено",
    TitleStarted: "Започнахме това",
    TitleStartedFixing: "Започнахме да поправяме това",
    TitleUnsolved: "Това е нерешен проблем",
    TitleIdea: "Това е идея",
    TitlePlanningFix: "Планираме да поправим това",
    TitlePlanningDo: "Планираме да направим това",
    TitleChat: "Това е чат канал",
    TitlePrivateChat: "Това е частен чат канал",
    TitlePrivateMessage: "Лично съобщение",
    TitleInfoPage: "Това е информационна страница",
    TitleDiscussion: "Дискусия",
    IsPinnedGlobally: "\nЗакачена е глобално, така че е най-отгоре.",
    IsPinnedInCat: "\nЗакачена е в категорията си, така че е най-отгоре там.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Последни теми (изчакващи)",
    RecentTopicsInclDel: "Последни теми (включително изтрити)",
    RecentTopics: "Последни теми",
    _replies: " отговора",
    _deleted: " (изтрито)",
    _defCat: " (категория по подразбиране)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Последни публикации",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " онлайн в този чат",    // example: "5 online in this chat"
    NumOnlForum: " онлайн в този форум",

    // Open left-sidebar button title.
    WatchbBtn: "Вашите теми",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Вашите скорошни теми, присъединени чатове, лични съобщения",

    // Title shown on user profile pages.
    AbtUsr: "За потребителя",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Назад от потребителския профил",
    BackFromAdm: "Назад от администраторската зона",

    // Title shown on full text search page.
    SearchPg: "Страница за търсене",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Добавяне ...",
    RecentlyViewed: "Скоро разглеждани теми",
    JoinedChats: "Присъединени чатове",
    ChatChannels: "Чат канали",
    CreateChat: "Създай чат канал",
    DirectMsgs: "Лични съобщения",
    NoChats: "Няма",    // meaning: "No chat messages"
    NoDirMsgs: "Няма",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Действия за темата",
    ViewPeopleHere: "Виж хората тук",
    ViewAddRemoveMembers: "Виж / добави / премахни членове",
    ViewChatMembers: "Виж членовете на чата",
    EditChat: "Редактирай описанието на чата",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Напусни този чат",
    LeaveThisCommunity: "Напусни тази общност",
    JoinThisCommunity: "Присъедини се към тази общност",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Последни коментари в тази тема:",
    NoComments: "Няма коментари.",

    YourBookmarks: "Вашите отметки:",

    UsersOnline: "Потребители на линия:",
    UsersOnlineForum: "Потребители на линия в този форум:",
    UsersInThisChat: "Потребители в този чат:",
    UsersInThisTopic: "Потребители в тази тема:",

    GettingStartedGuide: "Ръководство за админи",
    AdminGuide: "Ръководство за админи",
    Guide: "Ръководство",

    // How to hide the sidebar.
    CloseShortcutS: "Затвори (клавишна комбинация: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Добави още хора",

    // Shown next to one's own username, in a list of users.
    thatsYou: "това сте вие",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Изглежда сте само вие",
    YouAnd: "Вие и ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " човек" : " души";
      const have = numStrangers === 1 ? "не е влязъл" : "не са влезли";
      return numStrangers + people + ", които " + have + " в профила си";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Отговорите вляво може да са сортирани по ",
    bestFirst: "най-добрите първо.",
    ButBelow: "Но по-долу ",
    insteadBy: " същите отговори са сортирани по ",
    newestFirst: "най-новите първо.",

    SoIfLeave: "Така че, ако си тръгнете и се върнете по-късно, по-долу ще намерите ",
    allNewReplies: "всички нови отговори.",
    Click: "Кликнете върху",
    aReplyToReadIt: " отговор по-долу, за да го прочетете — тук е показан само откъс.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Кликнете за промяна на статуса",
    ClickToViewAnswer: "Кликнете за преглед на отговора",
    ViewAnswer: "Виж отговора",
    ChangeStatusC: "Промени статуса на:",
    ChangeCatC: "Промени категорията:",
    ChangeTopicTypeC: "Промени типа тема:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "въпрос",
    hasAccptAns: "има приет отговор",
    aProblem: "проблем",
    planToFix: "планираме да поправим",
    anIdea: "идея",
    planToDo: "планираме да направим",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Тази форма е ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "затворена; вече не можете да я попълвате и публикувате.",

    ThisTopicClosed_1: "Тази тема е ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Все още можете да публикувате коментари.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Тази страница е изтрита",
    CatDeldPageToo: "Категорията е изтрита, затова и тази страница беше изтрита",

    ThreadDeld: "Нишката е изтрита",
    CmntDeld: "Коментарът е изтрит",
    PostDeld: "Публикацията е изтрита",
    DiscDeld: "Дискусията е изтрита",
    PageDeld: "Страницата е изтрита",
    PagePendAppr: "Страницата чака одобрение",
    TitlePendAppr: "Заглавието чака одобрение",
    TextPendingApproval: "Текстът чака одобрение",

    TooltipQuestClosedNoAnsw: "Този въпрос е затворен без приет отговор.",
    TooltipTopicClosed: "Тази тема е затворена.",

    TooltipQuestSolved: "Това е решен въпрос",
    TooltipQuestUnsolved: "Това е нерешен въпрос",

    StatusDone: "Готово",
    TooltipProblFixed: "Това е поправено",
    TooltipDone: "Това е направено",

    StatusStarted: "Започнато",
    TooltipFixing: "Започнахме да поправяме това",
    TooltipImplementing: "Започнахме да правим това",

    StatusPlanned: "Планирано",
    TooltipProblPlanned: "Планираме да поправим това",
    TooltipIdeaPlanned: "Планираме да направим това",   // or "to implement this"?

    StatusNew: "Ново",
    StatusNewDtl: "Нова тема, в процес на обсъждане",
    TooltipUnsProbl: "Това е нерешен проблем",
    TooltipIdea: "Това е идея",

    TooltipPersMsg: "Лично съобщение",
    TooltipChat: "# означава чат канал",
    TooltipPrivChat: "Това е частен чат канал",

    TooltipPinnedGlob: "\nЗакачена глобално.",
    TooltipPinnedCat: "\nЗакачена в тази категория.",

    SolvedClickView_1: "Решено в публикация #",
    SolvedClickView_2: ", кликнете за преглед",

    PostHiddenClickShow: "Публикацията е скрита; кликнете за показване",
    ClickSeeMoreRepls: "Покажи още отговори",
    ClickSeeMoreComments: "Покажи още коментари",
    ClickSeeThisComment: "Кликнете за показване на този коментар",
    clickToShow: "кликнете за показване",

    ManyDisagree: "Мнозина не са съгласни с това:",
    SomeDisagree: "Някои не са съгласни с това:",

    PendAppr: "Чака одобрение",
    CmtPendAppr: "Коментарът чака одобрение, публикуван ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Вашият" : "Коментарът") + " по-долу чака одобрение.",

    _and: " и",

    repliesTo: "отговори на",
    InReplyTo: "В отговор на",
    YourReplyTo: "Вашият отговор на ",
    YourChatMsg: "Вашето чат съобщение: ",
    YourDraft: "Вашата чернова",
    YourEdits: "Вашите редакции: ",
    YourProgrNoteC: "Вашата бележка за напредъка:",
    aProgrNote: "бележка за напредъка: ",

    ReplyingToC: "Отговаряне на:",
    ScrollToPrevw_1: "Превърти до ",
    ScrollToPrevw_2: "прегледа",

    UnfinEdits: "Незавършени редакции",
    ResumeEdting: "Продължи редакцията",
    DelDraft: "Изтрий черновата",

    ClickViewEdits: "Кликнете за преглед на стари редакции",

    By: "От ", // ... someones name

    // Discussion ...
    aboutThisIdea: "относно това как и дали да се реализира тази идея",
    aboutThisProbl: "относно това как и дали да се поправи това",

    AddProgrNote: "Добави бележка за напредъка",
    // Progress ...
    withThisIdea: "относно реализирането на тази идея",
    withThisProbl: "относно решаването на този проблем",
    withThis: "относно това",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Известия за тази тема:",

    // If is a direct message topic, members listed below this text.
    Msg: "Съобщение",

    SmrzRepls: "Обобщи отговорите",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Има ${numReplies} отговора. Очаквано време за четене: ${minutes} минути`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Готово. Обобщени са ${numSummarized} отговора от ${numShownBefore} показани по-рано.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Затвори темата",
    CloseOwnQuestionTooltip: "Затворете този въпрос, ако вече не се нуждаете от отговор.",
    CloseOthersQuestionTooltip: "Затворете този въпрос, ако не се нуждае от отговор, напр. ако е извън темата или вече е отговорено в друга тема.",
    CloseToDoTooltip: "Затворете тази задача, ако не е необходимо да се прави или поправя.",
    CloseTopicTooltip: "Затворете тази тема, ако не изисква по-нататъшно разглеждане.",

    AcceptBtnExpl: "Приемете това като отговор на въпроса или проблема",
    SolutionQ: "Решение?",
    ClickUnaccept: "Кликнете, за да отмените приемането на този отговор",
    PostAccepted: "Тази публикация е приета за отговор",

    NumLikes: (num: number) => num === 1 ? "1 Харесване" : num + " Харесвания",
    NumDisagree: (num: number) => num + " Несъгласия",
    NumBury: (num: number) => num === 1 ? "1 Скриване" : num + " Скривания",
    NumUnwanted: (num: number) => num === 1 ? "1 Нежелано" : num + " Нежелани",

    MoreVotes: "Още гласове...",
    LikeThis: "Харесва ми",
    LinkToPost: "Връзка към тази публикация",
    Report: "Докладвай",
    ReportThisPost: "Докладвай тази публикация",
    Admin: "Админ",
    DiscIx: "Индекс на дискусиите",

    Disagree: "Не съм съгласен",
    DisagreeExpl: "Кликнете тук, за да изразите несъгласие с тази публикация или да предупредите другите за фактологични грешки.",
    Bury: "Скрий",
    BuryExpl: "Кликнете, за да подредите други публикации преди тази. Само екипът на форума може да види вашия глас.",
    Unwanted: "Нежелано",
    UnwantedExpl: "Ако не желаете тази публикация на този уебсайт. Това ще намали доверието ми в автора на публикацията. Само екипът на форума може да види вашия глас.",

    AddTags: "Добави/премахни етикети",
    UnWikify: "Премахни от Уики",
    Wikify: "Направи на Уики",
    PinDeleteEtc: "Закачи / Изтрий / Категория ...",
  },


  // Share dialog

  sd: {
    Copied: "Копирано.",
    CtrlCToCopy: "Натиснете CTRL+C за копиране.",
    ClickToCopy: "Кликнете за копиране на връзката.",
  },


  // Chat

  c: {
    About_1: "Това е чат каналът ",
    About_2: ", създаден от ",
    ScrollUpViewComments: "Превъртете нагоре, за да видите по-стари коментари",
    Purpose: "Цел:",
    MessageDeleted: "(Съобщението е изтрито)",
    JoinThisChat: "Присъедини се към този чат",
    PostMessage: "Изпрати съобщение",
    AdvancedEditor: "Разширен редактор",
    TypeTitle: "Напишете заглавие — за какво е този чат, с няколко думи?",
    TypePurpose: "Напишете цел — може да е по-дълга от заглавието и по-описателна.",
    TypeHere: "Пишете тук. Можете да използвате Markdown и HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Нуждае се от преглед ",
    AdminHelp: "Помощ за админи ",
    StaffHelp: "Помощ за екипа ",
    DraftsEtc: "Чернови, отметки, задачи",
    MoreNotfs: "Виж всички известия",
    DismNotfs: "Маркирай всички като прочетени",
    ViewProfile: "Виж профила си",
    ViewGroups: "Виж групите",
    LogOut: "Изход",
    UnhideHelp: "Покажи помощните съобщения",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Превърти до:",
    Scroll: "Превърти",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "Н",
    Back_2: "азад",
    BackExpl: "Върнете се към предишната си позиция на тази страница",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Начало на страницата",
    PgTopHelp: "Отидете в началото на страницата. Клавишна комбинация: 1",
    Repl: "Отговори",
    ReplHelp: "Отидете в раздела с отговори. Клавишна комбинация: 2",
    Progr: "Напредък",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Отидете в раздела за напредък. Клавишна комбинация: 3",
    PgBtm: "Край на страницата",
    Btm: "Край",
    BtmHelp: "Отидете в края на страницата. Клавишна комбинация: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", и ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " за връщане назад",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Избор на потребители",
    AddUsers: "Добавяне на потребители",
  },


  // About user dialog

  aud: {
    IsMod: "Е модератор.",
    IsAdm: "Е администратор.",
    IsDeld: "Е деактивиран или изтрит.",
    ThisIsGuest: "Това е гост, може да бъде всеки.",
    ViewInAdm: "Виж в администраторската зона",
    ViewProfl: "Виж профила",
    ViewComments: "Виж други коментари",
    RmFromTpc: "Премахни от темата",
    EmAdrUnkn: "Имейл адресът е неизвестен — този гост няма да получава известия за отговори.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Предпочитания",
    Invites: "Покани",
    DraftsEtc: "Чернови и др.",
    About: "За мен",
    Privacy: "Поверителност",
    Security: "Сигурност",
    Account: "Акаунт",
    Interface: "Интерфейс",

    // ----- Overview stats

    JoinedC: "Присъединил се на: ",
    PostsMadeC: "Публикации: ",
    LastPostC: "Последна публикация: ",
    LastSeenC: "Последно видян: ",
    TrustLevelC: "Ниво на доверие: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Качи снимка",
    ChangePhoto: "Промени снимката",
    ImgTooSmall: "Изображението е твърде малко: трябва да бъде поне 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Само екипът и доверените основни членове могат да виждат това.",
    OnlyMbrsCanSee: "Само хора, които са били активни членове за известно време, могат да виждат това.",
    Nothing: "Няма нищо за показване",
    Posts: "Публикации",
    NoPosts: "Няма публикации.",
    Topics: "Теми",
    NoTopics: "Няма теми.",

    // ----- User status

    UserBanned: "Този потребител е блокиран",
    UserSuspended: (dateUtc: string) => `Този потребител е спрян до ${dateUtc} UTC`,
    ReasonC: "Причина: ",

    DeactOrDeld: "Е деактивиран или изтрит.",
    isGroup: " (група)",
    isGuest: " — гост, може да бъде всеки",
    isMod: " – модератор",
    isAdmin: " – администратор",
    you: "(вие)",

    // ----- Notifications page

    NoNotfs: "Няма известия",
    NotfsToYouC: "Известия за вас:",
    NotfsToOtherC: (name: string) => `Известия за ${name}:`,
    DefNotfsSiteWide: "Известия по подразбиране за целия сайт",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "за",

    // ----- Drafts Etc page

    NoDrafts: "Няма чернови",
    YourDraftsC: "Вашите чернови:",
    DraftsByC: (name: string) => `Чернови от ${name}:`,

    // ----- Invites page

    InvitesIntro: "Тук можете да каните хора да се присъединят към този сайт. ",
    InvitesListedBelow: "Поканите, които вече сте изпратили, са изброени по-долу.",
    NoInvites: "Все още не сте поканили никого.",

    InvitedEmail: "Поканен имейл",
    WhoAccepted: "Член, който е приел",
    InvAccepted: "Поканата е приета",
    InvSent: "Поканата е изпратена",
    JoinedAlready: "Вече се е присъединил",

    SendAnInv: "Покани хора",
    SendInv: "Изпрати покани",
    SendInvExpl:
        "Ще изпратим на вашите приятели кратка покана по имейл. Те ще могат да кликнат върху връзка " +
        "за да се присъединят веднага, без да е необходим вход. " +
        "Те ще станат обикновени членове, а не модератори или администратори.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Готово. Ще им изпратя имейл.",
    NoOneToInv: "Няма никого за канене.",
    InvNotfLater: "Ще ви уведомя по-късно, когато ги поканя.",
    AlreadyInvSendAgainQ: "Тези хора вече са поканени — може би искате да ги поканите отново?",
    InvErr_1: "Това доведе до ",
    InvErr_2: "грешки",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Тези вече са се присъединили, затова не ги поканих:",
    ResendInvsQ: "Да изпратя ли поканите отново на тези хора? Те вече са били канени.",
    InvAgain: "Покани отново",

    // ----- Preferences, About

    AboutYou: "За вас",
    WebLink: "Ваш уебсайт или страница.",

    NotShownCannotChange: "Не се показва публично. Не може да се променя.",

    // The full name or alias:
    NameOpt: "Име (незадължително)",

    NotShown: "Не се показва публично.",

    // The username:
    MayChangeFewTimes: "Можете да го променяте само няколко пъти.",
    notSpecified: "(не е посочено)",
    ChangeUsername_1: "Можете да променяте потребителското си име само няколко пъти.",
    ChangeUsername_2: "Твърде честото му променяне може да обърка другите — " +
        "те няма да знаят как да ви споменават с @.",

    NotfAboutAll: "Получавайте известия за всяка нова публикация (освен ако не заглушите темата или категорията)",
    NotfAboutNewTopics: "Получавайте известия за нови теми (освен ако не заглушите категорията)",

    ActivitySummaryEmails: "Имейли с резюме на активността",

    EmailSummariesToGroup:
        "Когато членовете на тази група не посещават сайта, по подразбиране им изпращайте имейли с " +
        "резюмета на популярни теми и друга информация.",
    EmailSummariesToMe:
        "Когато не посещавам сайта, ми изпращайте " +
        "резюмета на популярни теми и друга информация.",

    AlsoIfTheyVisit: "Изпращайте им имейли и ако посещават сайта редовно.",
    AlsoIfIVisit: "Изпращайте ми имейли и ако посещавам сайта редовно.",

    HowOftenWeSend: "Колко често да изпращаме тези имейли?",
    HowOftenYouWant: "Колко често желаете тези имейли?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Скриване на скорошната ви активност от непознати и нови членове?",
    HideActivityStrangers_2: "(Но не и за тези, които са активни членове от известно време.)",
    HideActivityAll_1: "Скриване на скорошната ви активност от всички?",
    HideActivityAll_2: "(Освен за екипа и доверените основни членове.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Имейл адреси",
    PrimaryDot: "Основен. ",
    VerifiedDot: "Потвърден. ",
    NotVerifiedDot: "Непотвърден. ",
    ForLoginWithDot: (provider: string) => `За вход чрез ${provider}. `,
    MakePrimary: "Направи основен",
    AddEmail: "Добави имейл адрес",
    TypeNewEmailC: "Въведете нов имейл адрес:",
    MaxEmailsInfo: (numMax: number) => `(Не можете да добавите повече от ${numMax} адреса.)`,
    EmailAdded_1: "Добавен. Изпратихме ви имейл за потвърждение — ",
    EmailAdded_2: "проверете пощенската си кутия.",
    SendVerifEmail: "Изпрати имейл за потвърждение",

    EmailStatusExpl:
        "('Основен' означава, че можете да влизате чрез този адрес и ние изпращаме известия на него. " +
        "'Потвърден' означава, че сте кликнали върху връзката за потвърждение в имейла, който сме ви изпратили.)",

    // Password:
    ChangePwdQ: "Промяна на паролата?",
    CreatePwdQ: "Създаване на парола?",
    WillGetPwdRstEml: "Ще получите имейл за възстановяване на паролата.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Няма",

    // Logins:
    LoginMethods: "Методи за вход",
    commaAs: ", като: ",

    // One's data:
    YourContent: "Вашето съдържание",
    DownloadPosts: "Изтегли публикациите",
    DownloadPostsHelp: "Създава JSON файл с копие на темите и коментарите, които сте публикували.",
    DownloadPersData: "Изтегли личните данни",
    DownloadPersDataHelp: "Създава JSON файл с копие на вашите лични данни, напр. вашето име " +
        "(ако сте го посочили) и имейл адрес.",


    // Delete account:
    DangerZone: "Опасна зона",
    DeleteAccount: "Изтриване на акаунта",
    DeleteYourAccountQ:
        "Изтриване на акаунта ви? Ще премахнем името ви, ще забравим имейл адреса, паролата и " +
        "всички онлайн идентичности (като вход чрез Facebook или Twitter). " +
        "Няма да можете да влезете отново. Това не може да бъде отменено.",
    DeleteUserQ:
        "Изтриване на този потребител? Ще премахнем името, ще забравим имейл адреса, паролата и " +
        "онлайн идентичностите (като вход чрез Facebook или Twitter). " +
        "Потребителят няма да може да влезе отново. Това не може да бъде отменено.",
    YesDelete: "Да, изтрий",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Членове на групата",
    NoMembers: "Няма членове.",
    MayNotListMembers: "Списъкът с членове не може да бъде показан.",
    AddMembers: "Добави членове",
    BuiltInCannotModify: "Това е вградена група; тя не може да бъде променяна.",
    NumMembers: (num: number) => `${num} членове`,
    YouAreMember: "Вие сте член.",
    CustomGroupsC: "Персонализирани групи:",
    BuiltInGroupsC: "Вградени групи:",
    DeleteGroup: "Изтрий тази група",
  },


  // Create user dialog

  cud: {
    CreateUser: "Създаване на потребител",
    CreateAccount: "Създаване на акаунт",
    EmailC: "Имейл:",  // REMOVE move to t.EmailC instead
    keptPriv: "ще бъде запазен в тайна",
    forNotfsKeptPriv: "за известия при отговор, запазва се в тайна",
    EmailVerifBy_1: "Вашият имейл беше потвърден чрез ",
    EmailVerifBy_2: ".",
    UsernameC: "Потребителско име:",
    FullNameC: "Пълно име:",
    optName: "незадължително",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Акаунтът е създаден. Вече сте влезли.",  // COULD say if verif email sent too?
    AlmostDone:
        "Почти готово! Трябва само да потвърдите имейл адреса си. Изпратихме ви имейл. " +
        "Моля, кликнете върху връзката в имейла, за да активирате акаунта си. " +
        "Можете да затворите тази страница.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Условия и поверителност",

    Accept_1: "Приемате ли нашите ",
    TermsOfService: "Условия за ползване",
    TermsOfUse: "Условия за ползване",
    Accept_2: " и ",
    PrivPol: "Политика за поверителност",
    Accept_3_User: "?",
    Accept_3_Owner: " за собственици на сайтове?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Да, приемам",
  },


  // Password input

  pwd: {
    PasswordC: "Парола:",
    StrengthC: "Сила: ",
    FairlyWeak: "Доста слаба.",
    toShort: "твърде къса",
    TooShort: (minLength: number) => `Твърде къса. Трябва да бъде поне ${minLength} знака`,
    PlzInclDigit: "Моля, включете цифра или специален знак",
    TooWeak123abc: "Твърде слаба. Не използвайте пароли като '12345' или 'abcde'.",
    AvoidInclC: "Избягвайте да включвате (части от) името или имейла си в паролата:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Страницата не е намерена или достъпът е отказан.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Представяте се за друг човек, който може да няма достъп до всички части " +
        "на този уебсайт.",

    IfYouThinkExistsThen: "Ако смятате, че страницата съществува, влезте като някой, който има право на достъп. ",
    LoggedInAlready: "(Вече сте влезли, но може би с грешния акаунт?) ",
    ElseGoToHome_1: "В противен случай можете да ",
    ElseGoToHome_2: "отидете на началната страница.",

    CreateAcconut: "Създаване на акаунт",
    ContinueWithDots: "Продължи с ...",
    SignUp: "Присъедини се",
    LogIn: "Вход",
    LogInWithPwd: "Вход с парола",
    CreateAdmAcct: "Създаване на администраторски акаунт:",
    AuthRequired: "За достъп до този сайт е необходима автентикация",
    LogInToLike: "Влезте, за да харесате тази публикация",
    LogInToSubmit: "Влезте и изпратете",
    LogInToComment: "Влезте, за да напишете коментар",
    LogInToCreateTopic: "Влезте, за да създадете тема",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "Или ",
    OrLogIn_2: "Влезте",      // "Log in" (this is a button)
    OrLogIn_3: " вместо това",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Или ",
    SignUpInstead_2: "Създайте акаунт", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", или просто ",
    OrTypeName_2: "въведете име",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Или създайте акаунт:",
    OrTypeName: "Или въведете името си:",
    OrLogIn: "Или влезте:",
    YourNameQ: "Вашето име?",

    BadCreds: "Грешно потребителско име или парола",

    UsernameOrEmailC: "Потребителско име или имейл:",
    PasswordC: "Парола:",
    ForgotPwd: "Забравили сте паролата си?",

    NoPwd: "Все още не сте избрали парола.",
    CreatePwd: "Създаване на парола",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Моля, кажете ни какво ви притеснява.",
    ThanksHaveReported: "Благодарим ви. Докладвахте го. Екипът на форума ще прегледа случая.",
    ReportComment: "Докладвай коментар",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Тази публикация съдържа лични данни, например нечие истинско име.",
    OptOffensive: "Тази публикация съдържа обидно или неприлично съдържание.",
    OptSpam: "Тази публикация е нежелана реклама.",
    OptOther: "Уведомете екипа за тази публикация по друга причина.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Можете да покажете помощните съобщения отново, ако сте влезли в профила си, като " +
        "кликнете върху името си и след това върху ",
    YouCanShowAgain_2: "Покажи помощните съобщения",
  },


  // Editor

  e: {
    SimilarTopicsC: "Подобни теми:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "За съжаление в момента можете да качвате само по един файл.",
    PleaseFinishPost: "Моля, първо завършете публикацията си",
    PleaseFinishChatMsg: "Моля, първо завършете чат съобщението си",
    PleaseFinishMsg: "Моля, първо завършете съобщението си",
    PleaseSaveEdits: "Моля, първо запазете текущите си редакции",
    PleaseSaveOrCancel: "Моля, първо или запазете, или откажете новата си тема",
    CanContinueEditing: "Можете да продължите да редактирате текста си, ако отворите редактора отново.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Моля, не изтривайте целия текст. Напишете нещо.",
    PleaseWriteSth: "Моля, напишете нещо.",
    PleaseWriteTitle: "Моля, напишете заглавие на темата.",
    PleaseWriteMsgTitle: "Моля, напишете заглавие на съобщението.",
    PleaseWriteMsg: "Моля, напишете съобщение.",

    exBold: "удебелен текст",
    exEmph: "наклонен текст",
    exPre: "предварително форматиран текст",
    exQuoted: "цитиран текст",
    ExHeading: "Заглавие",

    TitlePlaceholder: "Напишете заглавие — за какво става дума, в едно кратко изречение?",

    EditPost_1: "Редактиране на ",
    EditPost_2: "публикация ",

    TypeChatMsg: "Напишете чат съобщение:",
    YourMsg: "Вашето съобщение:",
    CreateTopic: "Създаване на нова тема",
    CreateCustomHtml: "Създаване на персонализирана HTML страница (добавете ваше собствено <h1> заглавие)",
    CreateInfoPage: "Създаване на информационна страница",
    CreateCode: "Създаване на страница с изходен код",
    AskQuestion: "Задайте въпрос",
    ReportProblem: "Докладвайте проблем",
    SuggestIdea: "Предложете идея",
    NewChat: "Заглавие и цел на чата",
    NewPrivChat: "Заглавие и цел на частния чат",
    AppendComment: "Добавете коментар в края на страницата:",

    ReplyTo: "Отговор на ",
    ReplyTo_theOrigPost: "първоначалната публикация",
    ReplyTo_post: "публикация ",
    AddCommentC: "Добавете коментар:",

    PleaseSelectPosts: "Моля, изберете една или повече публикации, на които да отговорите.",

    Save: "Запази",
    edits: "редакции",

    PostReply: "Публикувай отговора",
    PostComment: "Публикувай коментара",

    Post: "Публикувай",
    comment: "коментар",
    question: "въпрос",

    PostMessage: "Изпрати съобщение",
    SimpleEditor: "Опростен редактор",

    Send: "Изпрати",
    message: "съобщение",

    Create: "Създай",
    page: "страница",
    chat: "чат",
    idea: "идея",
    topic: "тема",

    Submit: "Изпрати",
    problem: "проблем",

    ViewOldEdits: "Виж стари редакции",

    UploadBtnTooltip: "Качи файл или изображение",
    BoldBtnTooltip: "Направи текста удебелен",
    EmBtnTooltip: "Направи текста наклонен",
    QuoteBtnTooltip: "Цитат",
    PreBtnTooltip: "Предварително форматиран текст",
    HeadingBtnTooltip: "Заглавие",

    TypeHerePlaceholder: "Пишете тук. Можете да използвате Markdown и HTML. Влачете и пуснете, за да поставите изображения.",

    Maximize: "Максимизиране",
    ToNormal: "Обратно към нормален размер",
    TileHorizontally: "Разположи хоризонтално",

    PreviewC: "Преглед:",
    TitleExcl: " (заглавието е изключено)",
    ShowEditorAgain: "Покажи редактора отново",
    Minimize: "Минимизиране",

    PreviewInfo: "Тук можете да прегледате как ще изглежда вашата публикация.",
    CannotType: "Тук не можете да пишете.",

    LoadingDraftDots: "Зареждане на чернова...",
    DraftUnchanged: "Без промени.",
    CannotSaveDraftC: "Черновата не може да бъде запазена:",
    DraftSavedBrwsr: "Черновата е запазена в браузъра.",
    DraftSaved: (nr: string | number) => `Чернова ${nr} е запазена.`,
    DraftDeleted: (nr: string | number) => `Чернова ${nr} е изтрита.`,
    WillSaveDraft: (nr: string | number) => `Запазване на чернова ${nr} ...`,
    SavingDraft: (nr: string | number) => `Запазване на чернова ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Изтриване на чернова ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Изберете категория",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Изберете тип тема:",
    DiscussionExpl: "Дискусия относно нещо.",
    QuestionExpl: "Един отговор може да бъде маркиран като приет.",
    ProblExpl: "Ако нещо е счупено или не работи. Може да се маркира като поправено/решено.",
    IdeaExpl: "Предложение. Може да се маркира като направено/реализирано.",
    ChatExpl: "Вероятно безкраен разговор.",
    PrivChatExpl: "Видим само за хора, които са поканени да се присъединят към чата.",

    CustomHtml: "Персонализирана HTML страница",
    InfoPage: "Информационна страница",
    Code: "Код",
    EmbCmts: "Вградени коментари",
    About: "За мен",
    PrivChat: "Частен чат",
    Form: "Форма",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Няма повече общности за присъединяване.",
    SelCmty: "Изберете общност ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Търсене на помощ",
    TxtToFind: "Текст за търсене",
  },


  // No internet

  ni: {
    NoInet: "Няма връзка с интернет",
    PlzRefr: "Опреснете страницата, за да видите най-новите промени. (Имаше прекъсване на връзката)",
    RefrNow: "Опресни сега",
  },


  PostDeleted: (postNr: number) => `Тази публикация, номер ${postNr}, е изтрита.`,
  NoSuchPost: (postNr: number) => `На тази страница няма публикация номер ${postNr}.`,
  NoPageHere: "Тази страница е изтрита, никога не е съществувала или нямате достъп до нея.",
  GoBackToLastPage: "Върни се на предишната страница",

};


