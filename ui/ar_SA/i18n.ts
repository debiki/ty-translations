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

var t_ar_SA: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "نشط",
  Activity: "النشاط",
  Add: "إضافة",
  AddingDots: "جاري الإضافة...",
  AddComment: "إضافة تعليق",
  Admin: "المشرف",
  AdvSearch: "بحث متقدم",
  Anonym: "مجهول",
  Away: "بالخارج",
  Back: "رجوع",
  BlogN: "مدونة",
  Bookmarks: "الإشارات المرجعية",
  Cancel: "إلغاء",
  Categories: "الفئات",
  Category: "الفئة",
  ChangeV: "تغيير",
  ClickToShow: "انقر للإظهار",
  ChangeDots: "تغيير...",
  ChatN: "دردشة",
  Chatting: "دردشة",
  CheckYourEmail: "تحقق من بريدك الإلكتروني",
  Close: "إغلاق",
  closed: "مغلق",
  comments: "تعليقات",   // as in:  "123 comments"
  Continue: "استمرار",
  Created: "تم الإنشاء",
  Delete: "حذف",
  Deleted: "تم الحذف",
  DirectMessage: "رسالة مباشرة",
  Discussion: "مناقشة",
  discussion: "مناقشة",
  done: "تم",
  EditV: "تعديل",
  Editing: "جاري التعديل",
  EmailC: "البريد الإلكتروني: ",
  EmailAddress: "عنوان البريد الإلكتروني",
  EmailAddresses: "عناوين البريد الإلكتروني",
  EmailSentD: "تم إرسال البريد الإلكتروني.",
  Forum: "منتدى",
  GetNotifiedAbout: "الحصول على إشعارات حول",
  GroupsC: "المجموعات:",
  Hide: "إخفاء",
  Home: "الرئيسية",
  Idea: "فكرة",
  Join: "انضمام",
  KbdShrtcsC: "اختصارات لوحة المفاتيح: ",
  Loading: "جاري التحميل...",
  LoadMore: "تحميل المزيد...",
  LogIn: "تسجيل الدخول",
  LoggedInAs: "مسجل الدخول باسم ",
  LogOut: "تسجيل الخروج",
  Maybe: "ربما",
  Manage: "إدارة",
  Members: "الأعضاء",
  MessageN: "رسالة",
  MoreDots: "المزيد...",
  Move: "نقل",
  Name: "الاسم",
  NameC: "الاسم:",
  NewTopic: "موضوع جديد",
  NoCancel: "لا، إلغاء",
  Notifications: "الإشعارات",
  NotImplemented: "(غير مفعل)",
  NotYet: "ليس بعد",
  NoTitle: "بدون عنوان",
  NoTopics: "لا توجد مواضيع.",
  Okay: "حسناً",
  OkayDots: "حسناً...",
  Online: "متصل",
  onePerLine: "واحد لكل سطر",
  PreviewV: "معاينة",
  Problem: "مشكلة",
  progressN: "تقدم",
  Question: "سؤال",
  Recent: "الأحدث",
  Remove: "إزالة",
  Reopen: "إعادة فتح",
  ReplyV: "رد",
  Replying: "جاري الرد",
  Replies: "ردود",
  replies: "ردود",
  Save: "حفظ",
  SavingDots: "جاري الحفظ...",
  SavedDot: "تم الحفظ.",
  Search: "بحث",
  SendMsg: "إرسال رسالة",
  ShowPreview: "إظهار المعاينة",
  SignUp: "انضمام",  // don't change to "Sign Up" [join_or_signup]
  Solution: "حل",
  started: "بدأ",
  Summary: "ملخص",
  Submit: "إرسال",
  Tag: "وسم",
  Tags: "أوسمة",
  Tools: "أدوات",
  Topics: "مواضيع",
  TopicTitle: "عنوان الموضوع",
  TopicType: "نوع الموضوع",
  UploadingDots: "جاري الرفع...",
  Username: "اسم المستخدم",
  Users: "المستخدمون",
  Welcome: "مرحباً",
  Wiki: "ويكي",
  Yes: "نعم",
  YesBye: "نعم، وداعاً",
  YesDoThat: "نعم، افعل ذلك",
  You: "أنت",
  you: "أنت",

  // Trust levels.
  Guest:  "ضيف",
  NewMember: "عضو جديد",
  BasicMember: "عضو أساسي",
  FullMember: "عضو كامل",
  TrustedMember: "عضو موثوق",
  RegularMember: "عضو موثوق دائم",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "عضو مؤسس",

  // Periods.
  PastDay: "اليوم الماضي",
  PastWeek: "الأسبوع الماضي",
  PastMonth: "الشهر الماضي",
  PastQuarter: "الربع الماضي",
  PastYear: "العام الماضي",
  AllTime: "كل الوقت",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "شهر",  // months
  daysLtr: "يوم",      // days
  hoursLtr: "س",     // hours
  minsLtr: "د",      // minutes
  secsLtr: "ث",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "منذ يوم" : `منذ ${numDays} أيام`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "منذ ساعة" : `منذ ${numHours} ساعات`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "منذ دقيقة" : `منذ ${numMins} دقائق`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "منذ ثانية" : `منذ ${numSecs} ثواني`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "البريد الإلكتروني مطلوب",
    NoSpcs: "لا يسمح بالمسافات من فضلك",
    InvldAddr: "عنوان بريد إلكتروني غير صالح",
    NoBadChrs: "لا يسمح بالرموز الغريبة من فضلك",

    // Full name input field:
    NotOnlSpcs: "ليس فقط مسافات من فضلك",
    NoAt: "لا يسمح بـ @ من فضلك",

    // Username input field:
    NoDash: "لا يسمح بالواصلات (-) من فضلك",
    DontInclAt: "لا تضمن @",
    StartEndLtrDgt: "ابدأ وانتهِ بحرف أو رقم",
    OnlLtrNumEtc: "الأحرف (a-z, A-Z) والأرقام و _ (شرطة سفلية) فقط",
    // This shown just below the username input:
    UnUnqShrt_1: "اسم ",
    UnUnqShrt_2: "@المستخدم",
    UnUnqShrt_3: "، فريد وقصير",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `يجب أن يكون على الأقل ${minLength} أحرف`,
    TooLong: (maxLength: number) => `طويل جداً. يجب أن يكون على الأكثر ${maxLength} أحرف`,
  },


  // Notification levels.

  nl: {
    EveryPost: "كل منشور",
    EveryPostInTopic: "سيتم إخطارك بجميع الردود الجديدة في هذا الموضوع.",
    EveryPostInCat: "سيتم إخطارك بجميع المواضيع والردود الجديدة في هذه الفئة.",
    EveryPostInTopicsWithTag: "سيتم إخطارك بالمواضيع الجديدة بهذا الوسم، وجميع الردود في تلك المواضيع.",
    EveryPostWholeSite: "سيتم إخطارك بجميع المواضيع والردود الجديدة في أي مكان.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "مواضيع جديدة",
    NewTopicsInCat: "سيتم إخطارك بالمواضيع الجديدة في هذه الفئة.",
    NewTopicsWithTag: "سيتم إخطارك بالمواضيع الجديدة بهذا الوسم.",
    NewTopicsWholeSite: "سيتم إخطارك بالمواضيع الجديدة في أي مكان.",

    Tracking: "تتبع",

    Normal: "عادي",
    NormalDescr: "سيتم إخطارك إذا تحدث إليك شخص ما، وأيضاً بشكل غير مباشر، على سبيل المثال " +
        "رد على رد عليك.",
    //NormalTopic_1: "سيتم إخطارك إذا تحدث إليك شخص ما، أو ذكر اسمك ",
    //NormalTopic_2: "@اسمك",

    Hushed: "هامس",
    HushedDescr: "سيتم إخطارك فقط إذا تحدث إليك شخص ما مباشرة.",

    Muted: "مكتوم",
    MutedTopic: "لا توجد إشعارات.",   // removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "تعديل",
    Hide_1: "إخفاء",
    Hide_2: "، انقر ",
    Hide_3: " لإعادة الفتح",
  },


  // Forum categories

  fcs: {
    All: "الكل", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "قائمة المواضيع",

    // Select category dropdown

    from: "من",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "في",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "كل الفئات",

    // Topic sort order

    Active: "النشط أولاً",      // didn't add "first" yet to transls
    ActiveDescr: "يظهر المواضيع النشطة مؤخراً أولاً",

    New: "جديد",
    NewDescr: "يظهر المواضيع الأحدث أولاً",

    Top: "شائع",              // didn't rename from Top to Popular in transls
    TopDescr: "يظهر المواضيع الشائعة أولاً",

    // Topic filter dropdown

    AllTopics: "كل المواضيع",

    ShowAllTopics: "إظهار كل المواضيع",
    ShowAllTopicsDescr: "ليست المواضيع المحذوفة بالرغم من ذلك",

    WaitingTopics: "مواضيع منتظرة",
    OnlyWaitingDescr_1: "يظهر فقط المواضيع ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "التي تنتظر ",
    OnlyWaitingDescr_3: "حلاً أو أن يتم تنفيذها وإكمالها",  // rewrote

    YourTopics: "مواضيعك",
    AssignedToYou: "مسندة إليك",

    DeletedTopics: "إظهار المحذوفة",
    ShowDeleted: "إظهار المحذوفة",
    ShowDeletedDescr: "يظهر جميع المواضيع، بما في ذلك المواضيع المحذوفة",

    // Rightmost buttons

    ViewCategories: "عرض الفئات",
    EditCat: "تعديل الفئة",
    CreateCat: "إنشاء فئة",
    CreateTopic: "إنشاء موضوع",
    PostIdea: "نشر فكرة",
    AskQuestion: "طرح سؤال",
    ReportProblem: "الإبلاغ عن مشكلة",
    CreateMindMap: "إنشاء خريطة ذهنية",
    CreatePage: "إنشاء صفحة",
  },


  // Forum topic list

  ft: {
    ExplIcons: "شرح الأيقونات...",
    IconExplanation: "شرح الأيقونة:",
    ExplGenDisc: "مناقشة عامة.",
    ExplQuestion: "سؤال بدون إجابة مقبولة.",
    ExplAnswer: "سؤال مع إجابة مقبولة.",
    ExplIdea: "فكرة / اقتراح.",
    ExplProblem: "مشكلة.",
    ExplPlanned: "شيء نخطط للقيام به أو إصلاحه.",
    ExplDone: "شيء تم القيام به أو إصلاحه.",
    ExplClosed: "الموضوع مغلق.",
    ExplPinned: "الموضوع مدرج دائماً أولاً (ربما فقط في فئته الخاصة).",

    PopularTopicsComma: "المواضيع الشائعة، ",
    TopFirstAllTime: "يظهر المواضيع الأكثر شعبية أولاً، لكل الوقت.",
    TopFirstPastDay: "يظهر المواضيع الشائعة خلال اليوم الماضي.",

    CatHasBeenDeleted: "تم حذف هذه الفئة",

    TopicsActiveFirst: "المواضيع، النشطة مؤخراً أولاً",
    TopicsNewestFirst: "المواضيع، الجديدة أولاً",

    CreatedOn: "تم الإنشاء في ",
    LastReplyOn: "\nآخر رد في ",
    EditedOn: "\nتم التعديل في ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "أنشأ الموضوع",
    frequentPoster: "ناشر متكرر",
    mostRecentPoster: "أحدث ناشر",

    inC: "في: ",

    TitleFixed: "تم إصلاح هذا",
    TitleDone: "تم إكمال هذا",
    TitleStarted: "لقد بدأنا هذا",
    TitleStartedFixing: "لقد بدأنا في إصلاح هذا",
    TitleUnsolved: "هذه مشكلة لم تحل",
    TitleIdea: "هذه فكرة",
    TitlePlanningFix: "نحن نخطط لإصلاح هذا",
    TitlePlanningDo: "نحن نخطط للقيام بهذا",
    TitleChat: "هذه قناة دردشة",
    TitlePrivateChat: "هذه قناة دردشة خاصة",
    TitlePrivateMessage: "رسالة خاصة",
    TitleInfoPage: "هذه صفحة معلومات",
    TitleDiscussion: "مناقشة",
    IsPinnedGlobally: "\nلقد تم تثبيته، لذا فهو مدرج أولاً.",
    IsPinnedInCat: "\nلقد تم تثبيته في فئته، لذا فهو مدرج أولاً في فئته.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "المواضيع الأخيرة (تلك التي تنتظر)",
    RecentTopicsInclDel: "المواضيع الأخيرة (بما في ذلك المحذوفة)",
    RecentTopics: "المواضيع الأخيرة",
    _replies: " ردود",
    _deleted: " (محذوف)",
    _defCat: " (الفئة الافتراضية)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "المنشورات الأخيرة",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " متصلون في هذه الدردشة",    // example: "5 online in this chat"
    NumOnlForum: " متصلون في هذا المنتدى",

    // Open left-sidebar button title.
    WatchbBtn: "مواضيعك",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "مواضيعك الأخيرة، الدردشات المنضمة، الرسائل المباشرة",

    // Title shown on user profile pages.
    AbtUsr: "حول المستخدم",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "رجوع من ملف المستخدم",
    BackFromAdm: "رجوع من منطقة الإدارة",

    // Title shown on full text search page.
    SearchPg: "صفحة البحث",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "إضافة ...",
    RecentlyViewed: "المواضيع التي شوهدت مؤخراً",
    JoinedChats: "الدردشات المنضمة",
    ChatChannels: "قنوات الدردشة",
    CreateChat: "إنشاء قناة دردشة",
    DirectMsgs: "الرسائل المباشرة",
    NoChats: "لا يوجد",    // meaning: "No chat messages"
    NoDirMsgs: "لا يوجد",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "إجراءات الموضوع",
    ViewPeopleHere: "عرض الأشخاص هنا",
    ViewAddRemoveMembers: "عرض / إضافة / إزالة الأعضاء",
    ViewChatMembers: "عرض أعضاء الدردشة",
    EditChat: "تعديل وصف الدردشة",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "مغادرة هذه الدردشة",
    LeaveThisCommunity: "مغادرة هذا المجتمع",
    JoinThisCommunity: "الانضمام إلى هذا المجتمع",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "التعليقات الأخيرة في هذا الموضوع:",
    NoComments: "لا توجد تعليقات.",

    YourBookmarks: "إشاراتك المرجعية:",

    UsersOnline: "المستخدمون المتصلون:",
    UsersOnlineForum: "المستخدمون المتصلون في هذا المنتدى:",
    UsersInThisChat: "المستخدمون في هذه الدردشة:",
    UsersInThisTopic: "المستخدمون في هذا الموضوع:",

    GettingStartedGuide: "دليل المشرف", // was: "Getting Started Guide".
    AdminGuide: "دليل المشرف",          // ... but what? It's here already, just reuse this transl field
    Guide: "دليل",

    // How to hide the sidebar.
    CloseShortcutS: "إغلاق (اختصار لوحة المفاتيح: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "إضافة المزيد من الأشخاص",

    // Shown next to one's own username, in a list of users.
    thatsYou: "هذا أنت",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "أنت فقط، كما يبدو",
    YouAnd: "أنت، و ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " شخص" : " أشخاص";
      const have = numStrangers === 1 ? "لم يقم" : "لم يقوموا";
      return numStrangers + people + " " + have + " بتسجيل الدخول";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "الردود على اليسار قد تكون مرتبة حسب ",
    bestFirst: "الأفضل أولاً.",
    ButBelow: "ولكن بالأسفل ",
    insteadBy: " نفس الردود مرتبة بدلاً من ذلك حسب ",
    newestFirst: "الأحدث أولاً.",

    SoIfLeave: "لذا إذا غادرت وعدت هنا لاحقاً، ستجد بالأسفل ",
    allNewReplies: "جميع الردود الجديدة.",
    Click: "انقر",
    aReplyToReadIt: " على رد بالأسفل لقراءته — لأن مقتطفاً فقط يظهر بالأسفل.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "انقر لتغيير الحالة",
    ClickToViewAnswer: "انقر لعرض الإجابة",
    ViewAnswer: "عرض الإجابة",
    ChangeStatusC: "تغيير الحالة إلى:",
    ChangeCatC: "تغيير الفئة:",
    ChangeTopicTypeC: "تغيير نوع الموضوع:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "سؤال",
    hasAccptAns: "لديه إجابة مقبولة",
    aProblem: "مشكلة",
    planToFix: "نخطط للإصلاح",
    anIdea: "فكرة",
    planToDo: "نخطط للقيام بها",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "تم ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "إغلاق هذا النموذج؛ لم يعد بإمكانك تعبئته ونشره.",

    ThisTopicClosed_1: "تم ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: "إغلاق هذا الموضوع. لا يزال بإمكانك نشر التعليقات.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "تم حذف هذه الصفحة",
    CatDeldPageToo: "تم حذف الفئة، لذا تم حذف هذه الصفحة أيضاً",

    ThreadDeld: "تم حذف الخيط",
    CmntDeld: "تم حذف التعليق",
    PostDeld: "تم حذف المنشور",
    DiscDeld: "تم حذف المناقشة",
    PageDeld: "تم حذف الصفحة",
    PagePendAppr: "الصفحة بانتظار الموافقة",
    TitlePendAppr: "العنوان بانتظار الموافقة",
    TextPendingApproval: "النص بانتظار الموافقة",

    TooltipQuestClosedNoAnsw: "تم إغلاق هذا السؤال بدون أي إجابة مقبولة.",
    TooltipTopicClosed: "هذا الموضوع مغلق.",

    TooltipQuestSolved: "هذا سؤال تم حله",
    TooltipQuestUnsolved: "هذا سؤال لم يحل",

    StatusDone: "تم الإنجاز",
    TooltipProblFixed: "تم إصلاح هذا",
    TooltipDone: "تم إنجاز هذا",

    StatusStarted: "بدأ",
    TooltipFixing: "لقد بدأنا في إصلاح هذا",      // "We're currently" —> "We've started"
    TooltipImplementing: "لقد بدأنا في القيام بهذا", //  -""-

    StatusPlanned: "مخطط له",
    TooltipProblPlanned: "نحن نخطط لإصلاح هذا",
    TooltipIdeaPlanned: "نحن نخطط للقيام بهذا",   // or "to implement this"?

    StatusNew: "جديد",
    StatusNewDtl: "موضوع جديد، قيد المناقشة",
    TooltipUnsProbl: "هذه مشكلة لم تحل",
    TooltipIdea: "هذه فكرة",

    TooltipPersMsg: "رسالة شخصية",
    TooltipChat: "# تعني قناة دردشة",
    TooltipPrivChat: "هذه قناة دردشة خاصة",

    TooltipPinnedGlob: "\nمثبت عالمياً.",
    TooltipPinnedCat: "\nمثبت في هذه الفئة.",

    SolvedClickView_1: "تم الحل في المنشور رقم #",
    SolvedClickView_2: "، انقر للعرض",

    PostHiddenClickShow: "المنشور مخفي؛ انقر للإظهار",
    ClickSeeMoreRepls: "إظهار المزيد من الردود",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "إظهار المزيد من التعليقات",
    ClickSeeThisComment: "انقر لإظهار هذا التعليق",
    clickToShow: "انقر للإظهار",

    ManyDisagree: "الكثيرون يختلفون مع هذا:",
    SomeDisagree: "البعض يختلفون مع هذا:",

    PendAppr: "بانتظار الموافقة",
    CmtPendAppr: "تعليق بانتظار الموافقة، نشر ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "تعليقك" : "التعليق") + " أدناه بانتظار الموافقة.",

    _and: " و",

    repliesTo: "يرد على",
    InReplyTo: "رداً على",
    YourReplyTo: "ردك على ",
    YourChatMsg: "رسالة الدردشة الخاصة بك: ",
    YourDraft: "مسودتك",
    YourEdits: "تعديلاتك: ",
    YourProgrNoteC: "ملاحظة تقدمك:",
    aProgrNote: "ملاحظة تقدم: ",

    ReplyingToC: "الرد على:",
    ScrollToPrevw_1: "انتقل إلى ",
    ScrollToPrevw_2: "المعاينة",

    UnfinEdits: "تعديلات غير منتهية",
    ResumeEdting: "استئناف التعديل",
    DelDraft: "حذف المسودة",

    ClickViewEdits: "انقر لعرض التعديلات القديمة",

    By: "بواسطة ", // ... someones name

    // Discussion ...
    aboutThisIdea: "حول كيفية وهل يجب تنفيذ هذه الفكرة",
    aboutThisProbl: "حول كيفية وهل يجب إصلاح هذه المشكلة",

    AddProgrNote: "إضافة ملاحظة تقدم",
    // Progress ...
    withThisIdea: "مع تنفيذ هذه الفكرة",
    withThisProbl: "مع معالجة هذه المشكلة",
    withThis: "مع القيام بهذا",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "الإشعارات حول هذا الموضوع:",

    // If is a direct message topic, members listed below this text.
    Msg: "رسالة",

    SmrzRepls: "تلخيص الردود",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `هناك ${numReplies} ردود. وقت القراءة المتوقع: ${minutes} دقائق`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `تم. تم تلخيص ${numSummarized} ردود، من أصل ${numShownBefore} ردود كانت معروضة سابقاً.`,
  },


  // Post actions

  pa: {
    CloseTopic: "إغلاق الموضوع",
    CloseOwnQuestionTooltip: "أغلق هذا السؤال إذا لم تعد بحاجة إلى إجابة بعد الآن.",
    CloseOthersQuestionTooltip: "أغلق هذا السؤال إذا كان لا يحتاج إلى إجابة، على سبيل المثال إذا كان " +
        "خارج الموضوع أو تم الإجابة عليه بالفعل في موضوع آخر.",
    CloseToDoTooltip: "أغلق هذه المهمة إذا كانت لا تحتاج إلى القيام بها أو إصلاحها.",
    CloseTopicTooltip: "أغلق هذا الموضوع إذا كان لا يحتاج إلى مزيد من النظر.",

    AcceptBtnExpl: "قبول هذا كإجابة للسؤال أو المشكلة",
    SolutionQ: "حل؟",
    ClickUnaccept: "انقر لإلغاء قبول هذه الإجابة",
    PostAccepted: "تم قبول هذا المنشور كإجابة",

    NumLikes: (num: number) => num === 1 ? "إعجاب واحد" : num + " إعجابات",
    NumDisagree: (num: number) => num + " عدم اتفاق",
    NumBury: (num: number) => num === 1 ? "دفن واحد" : num + " دفنات",
    NumUnwanted: (num: number) => num === 1 ? "غير مرغوب واحد" : num + " غير مرغوب",

    MoreVotes: "المزيد من الأصوات...",
    LikeThis: "أعجبني هذا",
    LinkToPost: "رابط لهذا المنشور",
    Report: "إبلاغ",
    ReportThisPost: "الإبلاغ عن هذا المنشور",
    Admin: "المشرف",
    DiscIx: "فهرس المناقشات",

    Disagree: "عدم اتفاق",
    DisagreeExpl: "انقر هنا لعدم الاتفاق مع هذا المنشور، أو لتحذير الآخرين من أخطاء واقعية.",
    Bury: "دفن",
    BuryExpl: "انقر لفرز منشورات أخرى قبل هذا المنشور. موظفو المنتدى فقط يمكنهم رؤية تصويتك.",
    Unwanted: "غير مرغوب",
    UnwantedExpl: "إذا كنت لا تريد هذا المنشور على هذا الموقع. هذا سيقلل من الثقة التي لدي " +
            "في كاتب المنشور. موظفو المنتدى فقط يمكنهم رؤية تصويتك.",

    AddTags: "إضافة/إزالة الأوسمة",
    UnWikify: "إلغاء الويكي",
    Wikify: "تحويل لويكي",
    PinDeleteEtc: "تثبيت / حذف / فئة ...",
  },


  // Share dialog

  sd: {
    Copied: "تم النسخ.",
    CtrlCToCopy: "اضغط على CTRL+C للنسخ.",
    ClickToCopy: "انقر لنسخ الرابط.",
  },


  // Chat

  c: {
    About_1: "هذه هي ",
    About_2: " قناة دردشة، أنشئت بواسطة ",
    ScrollUpViewComments: "انتقل للأعلى لعرض التعليقات الأقدم",
    Purpose: "الغرض:",
    MessageDeleted: "(رسالة محذوفة)",
    JoinThisChat: "الانضمام إلى هذه الدردشة",
    PostMessage: "نشر رسالة",
    AdvancedEditor: "محرر متقدم",
    TypeTitle: "اكتب عنواناً — عن ماذا تتحدث هذه الدردشة، بكلمات قليلة؟",
    TypePurpose: "اكتب غرضاً — يمكن أن يكون أطول من العنوان، وأكثر وصفاً.",
    TypeHere: "اكتب هنا. يمكنك استخدام Markdown و HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "يحتاج لمراجعة ",
    AdminHelp: "مساعدة المشرف ",
    StaffHelp: "مساعدة الموظفين ",
    DraftsEtc: "المسودات، الإشارات المرجعية، المهام",
    MoreNotfs: "عرض جميع الإشعارات",
    DismNotfs: "تمييز الكل كمقروء",
    ViewProfile: "عرض ملفك الشخصي",
    ViewGroups: "عرض المجموعات",
    LogOut: "تسجيل الخروج",
    UnhideHelp: "إظهار رسائل المساعدة",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "الانتقال إلى:",
    Scroll: "انتقال",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "رجوع (B)",
    BackExpl: "الرجوع إلى موضعك السابق في هذه الصفحة",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "أعلى الصفحة",
    PgTopHelp: "الذهاب إلى أعلى الصفحة. اختصار لوحة المفاتيح: 1",
    Repl: "الردود",
    ReplHelp: "الذهاب إلى قسم الردود. الاختصار: 2",
    Progr: "التقدم",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "الذهاب إلى قسم التقدم. الاختصار: 3",
    PgBtm: "أسفل الصفحة",
    Btm: "الأسفل",
    BtmHelp: "الذهاب إلى أسفل الصفحة. الاختصار: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: "، و ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " للرجوع",
  },


  // Select users dialog
  sud: {
    SelectUsers: "تحديد المستخدمين",
    AddUsers: "إضافة مستخدمين",
  },


  // About user dialog

  aud: {
    IsMod: "هو مشرف.",
    IsAdm: "هو مدير.",
    IsDeld: "تم إلغاء تنشيطه أو حذفه.",
    ThisIsGuest: "هذا مستخدم ضيف، يمكن أن يكون أي شخص في الواقع.",
    ViewInAdm: "عرض في منطقة الإدارة",
    ViewProfl: "عرض الملف الشخصي",
    ViewComments: "عرض التعليقات الأخرى",
    RmFromTpc: "إزالة من الموضوع",
    EmAdrUnkn: "عنوان البريد الإلكتروني غير معروف — لن يتم إخطار هذا الضيف بالردود.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "التفضيلات",
    Invites: "الدعوات",
    DraftsEtc: "المسودات وما إلى ذلك",
    About: "حول",
    Privacy: "الخصوصية",
    Security: "الأمان",
    Account: "الحساب",
    Interface: "الواجهة",

    // ----- Overview stats

    JoinedC: "انضم في: ",
    PostsMadeC: "عدد المنشورات: ",
    LastPostC: "آخر منشور: ",
    LastSeenC: "آخر ظهور: ",
    TrustLevelC: "مستوى الثقة: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "رفع صورة",
    ChangePhoto: "تغيير الصورة",
    ImgTooSmall: "الصورة صغيرة جداً: يجب أن تكون على الأقل 100 × 100",

    // ----- Activity

    OnlyStaffCanSee: "فقط الموظفون والأعضاء المؤسسون الموثوقون يمكنهم رؤية هذا.",
    OnlyMbrsCanSee: "فقط الأشخاص الذين كانوا أعضاء نشطين لفترة من الوقت يمكنهم رؤية هذا.",
    Nothing: "لا يوجد شيء لعرضه",
    Posts: "المنشورات",
    NoPosts: "لا توجد منشورات.",
    Topics: "المواضيع",
    NoTopics: "لا توجد مواضيع.",

    // ----- User status

    UserBanned: "هذا المستخدم محظور",
    UserSuspended: (dateUtc: string) => `هذا المستخدم موقوف حتى ${dateUtc} UTC`,
    ReasonC: "السبب: ",

    DeactOrDeld: "تم إلغاء تنشيطه أو حذفه.",
    isGroup: " (مجموعة)",
    isGuest: " — مستخدم ضيف، يمكن أن يكون أي شخص",
    isMod: " – مشرف",
    isAdmin: " – مدير",
    you: "(أنت)",

    // ----- Notifications page

    NoNotfs: "لا توجد إشعارات",
    NotfsToYouC: "إشعارات إليك:",
    NotfsToOtherC: (name: string) => `إشعارات إلى ${name}:`,
    DefNotfsSiteWide: "الإشعارات الافتراضية، على مستوى الموقع",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "لـ",

    // ----- Drafts Etc page

    NoDrafts: "لا توجد مسودات",
    YourDraftsC: "مسوداتك:",
    DraftsByC: (name: string) => `مسودات بواسطة ${name}:`,

    // ----- Invites page

    InvitesIntro: "هنا يمكنك دعوة الأشخاص للانضمام إلى هذا الموقع. ",
    InvitesListedBelow: "الدعوات التي أرسلتها بالفعل مدرجة أدناه.",
    NoInvites: "لم تقم بدعوة أي شخص بعد.",

    InvitedEmail: "البريد الإلكتروني المدعو",
    WhoAccepted: "العضو الذي قبل الدعوة",
    InvAccepted: "تم قبول الدعوة",
    InvSent: "تم إرسال الدعوة",
    JoinedAlready: "انضم بالفعل",

    SendAnInv: "دعوة الأشخاص", // was: "Send an Invite",
    SendInv: "إرسال الدعوات",
    SendInvExpl:
        "سنرسل لأصدقائك بريداً إلكترونياً موجزاً. سينقرون على رابط " +
        "للانضمام فوراً، دون الحاجة لتسجيل الدخول. " +
        "سيصبحون أعضاء عاديين، وليسوا مشرفين أو مديرين.",
    //EnterEmail: "Enter email(s)",
    InvDone: "تم. سأرسل لهم بريداً إلكترونياً.",
    NoOneToInv: "لا يوجد أحد لدعوته.",
    InvNotfLater: "سأخطرك لاحقاً، عندما أقوم بدعوتهم.",
    AlreadyInvSendAgainQ: "تمت دعوة هؤلاء بالفعل — ربما ترغب في دعوتهم مرة أخرى؟",
    InvErr_1: "هذه أدت إلى ",
    InvErr_2: "أخطاء",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "انضم هؤلاء بالفعل، لذا لم أقم بدعوتهم:",
    ResendInvsQ: "إعادة إرسال الدعوات لهؤلاء الأشخاص؟ لقد تمت دعوتهم بالفعل.",
    InvAgain: "دعوة مرة أخرى",

    // ----- Preferences, About

    AboutYou: "حولك",
    WebLink: "أي موقع ويب أو صفحة خاصة بك.",

    NotShownCannotChange: "لا تظهر علناً. لا يمكن تغييرها.",

    // The full name or alias:
    NameOpt: "الاسم (اختياري)",

    NotShown: "لا تظهر علناً.",

    // The username:
    MayChangeFewTimes: "يمكنك تغييره بضع مرات فقط.",
    notSpecified: "(غير محدد)",
    ChangeUsername_1: "يمكنك تغيير اسم المستخدم الخاص بك بضع مرات فقط.",
    ChangeUsername_2: "تغييره بشكل متكرر قد يجعل الآخرين مشوشين — " +
        "لن يعرفوا كيف يشيرون إليك بـ @mention.",

    NotfAboutAll: "الحصول على إشعار حول كل منشور جديد (ما لم تكتم الموضوع أو الفئة)",
    NotfAboutNewTopics: "الحصول على إشعار حول المواضيع الجديدة (ما لم تكتم الفئة)",

    ActivitySummaryEmails: "رسائل ملخص النشاط البريدية",

    EmailSummariesToGroup:
        "عندما لا يزور أعضاء هذه المجموعة الموقع، قم بإرسال بريد إلكتروني لهم بشكل افتراضي " +
        "ملخصات للمواضيع الشائعة وأشياء أخرى.",
    EmailSummariesToMe:
        "عندما لا أزور الموقع، أرسل لي بريداً إلكترونياً بـ " +
        "ملخصات للمواضيع الشائعة وأشياء أخرى.",

    AlsoIfTheyVisit: "أرسل لهم بريداً إلكترونياً أيضاً إذا كانوا يزورون الموقع بانتظام.",
    AlsoIfIVisit: "أرسل لي بريداً إلكترونياً أيضاً إذا كنت أزور الموقع بانتظام.",

    HowOftenWeSend: "كم مرة يجب أن نرسل هذه الرسائل البريدية؟",
    HowOftenYouWant: "كم مرة تريد هذه الرسائل البريدية؟",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "إخفاء نشاطك الأخير عن الغرباء والأعضاء الجدد؟",
    HideActivityStrangers_2: "(ولكن ليس عن أولئك الذين كانوا أعضاء نشطين لفترة من الوقت.)",
    HideActivityAll_1: "إخفاء نشاطك الأخير عن الجميع؟",
    HideActivityAll_2: "(باستثناء الموظفين والأعضاء المؤسسين الموثوقين.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "عناوين البريد الإلكتروني",
    PrimaryDot: "أساسي. ",
    VerifiedDot: "تم التحقق منه. ",
    NotVerifiedDot: "لم يتم التحقق منه. ",
    ForLoginWithDot: (provider: string) => `لتسجيل الدخول باستخدام ${provider}. `,
    MakePrimary: "اجعله أساسياً",
    AddEmail: "إضافة عنوان بريد إلكتروني",
    TypeNewEmailC: "اكتب عنوان بريد إلكتروني جديد:",
    MaxEmailsInfo: (numMax: number) => `(لا يمكنك إضافة أكثر من ${numMax} عناوين.)`,
    EmailAdded_1: "تمت الإضافة. لقد أرسلنا لك بريداً إلكترونياً للتحقق — ",
    EmailAdded_2: "تحقق من صندوق الوارد في بريدك الإلكتروني.",
    SendVerifEmail: "إرسال بريد التحقق",

    EmailStatusExpl:
        "('أساسي' يعني أنه يمكنك تسجيل الدخول عبر هذا العنوان، ونحن نرسل الإشعارات إليه. " +
        "'تم التحقق منه' يعني أنك نقرت على رابط التحقق في بريد التحقق من العنوان.)",

    // Password:
    ChangePwdQ: "تغيير كلمة المرور؟",
    CreatePwdQ: "إنشاء كلمة مرور؟",
    WillGetPwdRstEml: "ستتلقى بريداً إلكترونياً لإعادة تعيين كلمة المرور.",
    // This is the "None" in:  "Password: None"
    PwdNone: "لا يوجد",

    // Logins:
    LoginMethods: "طرق تسجيل الدخول",
    commaAs: "، كـ: ",

    // One's data:
    YourContent: "محتواك",
    DownloadPosts: "تحميل المنشورات",
    DownloadPostsHelp: "ينشئ ملف JSON بنسخة من المواضيع والتعليقات التي نشرتها.",
    DownloadPersData: "تحميل البيانات الشخصية",
    DownloadPersDataHelp: "ينشئ ملف JSON بنسخة من بياناتك الشخصية، على سبيل المثال اسمك " +
        "(إذا حددت اسماً) وعنوان بريدك الإلكتروني.",


    // Delete account:
    DangerZone: "منطقة الخطر",
    DeleteAccount: "حذف الحساب",
    DeleteYourAccountQ:
        "حذف حسابك؟ سنقوم بإزالة اسمك، ونسيان عنوان بريدك الإلكتروني، وكلمة المرور و " +
        "أي هويات عبر الإنترنت (مثل تسجيل الدخول عبر فيسبوك أو تويتر). " +
        "لن تتمكن من تسجيل الدخول مرة أخرى. لا يمكن التراجع عن هذا الإجراء.",
    DeleteUserQ:
        "حذف هذا المستخدم؟ سنقوم بإزالة الاسم، ونسيان عنوان البريد الإلكتروني، وكلمة المرور و " +
        "الهويات عبر الإنترنت (مثل تسجيل الدخول عبر فيسبوك أو تويتر). " +
        "لن يتمكن المستخدم من تسجيل الدخول مرة أخرى. لا يمكن التراجع عن هذا الإجراء.",
    YesDelete: "نعم، احذف",
  },


  // Group profile page
  gpp: {
    GroupMembers: "أعضاء المجموعة",
    NoMembers: "لا يوجد أعضاء.",
    MayNotListMembers: "قد لا يتم عرض الأعضاء.",
    AddMembers: "إضافة أعضاء",
    BuiltInCannotModify: "هذه مجموعة مدمجة؛ لا يمكن تعديلها.",
    NumMembers: (num: number) => `${num} أعضاء`,
    YouAreMember: "أنت عضو.",
    CustomGroupsC: "مجموعات مخصصة:",
    BuiltInGroupsC: "مجموعات مدمجة:",
    DeleteGroup: "حذف هذه المجموعة",
  },


  // Create user dialog

  cud: {
    CreateUser: "إنشاء مستخدم",
    CreateAccount: "إنشاء حساب",
    EmailC: "البريد الإلكتروني:",
    keptPriv: "سيبقى خاصاً",
    forNotfsKeptPriv: "لإشعارات الرد، سيبقى خاصاً",
    EmailVerifBy_1: "تم التحقق من بريدك الإلكتروني بواسطة ",
    EmailVerifBy_2: ".",
    UsernameC: "اسم المستخدم:",
    FullNameC: "الاسم الكامل:",
    optName: "اختياري",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "تم إنشاء الحساب. لقد تم تسجيل دخولك.",  // COULD say if verif email sent too?
    AlmostDone:
        "أوشكت على الانتهاء! تحتاج فقط إلى تأكيد عنوان بريدك الإلكتروني. لقد " +
        "أرسلنا إليك بريداً إلكترونياً. يرجى النقر على الرابط الموجود في البريد الإلكتروني لتنشيط " +
        "حسابك. يمكنك إغلاق هذه الصفحة.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "الشروط والخصوصية",

    Accept_1: "هل تقبل بـ ",
    TermsOfService: "شروط الخدمة",
    TermsOfUse: "شروط الاستخدام",
    Accept_2: " و ",
    PrivPol: "سياسة الخصوصية",
    Accept_3_User: "؟",
    Accept_3_Owner: " لأصحاب المواقع؟",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "نعم أنا أقبل",
  },


  // Password input

  pwd: {
    PasswordC: "كلمة المرور:",
    StrengthC: "القوة: ",
    FairlyWeak: "ضعيفة إلى حد ما.",
    toShort: "قصيرة جداً",
    TooShort: (minLength: number) => `قصيرة جداً. يجب أن تكون على الأقل ${minLength} أحرف`,
    PlzInclDigit: "يرجى تضمين رقم أو رمز خاص",
    TooWeak123abc: "ضعيفة جداً. لا تستخدم كلمات مرور مثل '12345' أو 'abcde'.",
    AvoidInclC: "تجنب تضمين (أجزاء من) اسمك أو بريدك الإلكتروني في كلمة المرور:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "الصفحة غير موجودة، أو تم رفض الوصول.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "أنت تنتحل شخصية شخص ما، قد لا يملك الوصول إلى جميع أجزاء " +
        "هذا الموقع.",

    IfYouThinkExistsThen: "إذا كنت تعتقد أن الصفحة موجودة، فقم بتسجيل الدخول كشخص يمكنه الوصول إليها. ",
    LoggedInAlready: "(أنت مسجل الدخول بالفعل، ولكن ربما يكون هذا هو الحساب الخاطئ؟) ",
    ElseGoToHome_1: "خلاف ذلك، يمكنك ",
    ElseGoToHome_2: "الذهاب إلى الصفحة الرئيسية.",

    CreateAcconut: "إنشاء حساب",
    ContinueWithDots: "المتابعة باستخدام ...",
    SignUp: "انضمام",
    LogIn: "تسجيل الدخول",
    LogInWithPwd: "تسجيل الدخول بكلمة المرور",
    CreateAdmAcct: "إنشاء حساب مسؤول:",
    AuthRequired: "المصادقة مطلوبة للوصول إلى هذا الموقع",
    LogInToLike: "سجل الدخول للإعجاب بهذا المنشور",
    LogInToSubmit: "سجل الدخول وأرسل",
    LogInToComment: "سجل الدخول لكتابة تعليق",
    LogInToCreateTopic: "سجل الدخول لإنشاء موضوع",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "أو ",
    OrLogIn_2: "سجل الدخول",
    OrLogIn_3: " بدلاً من ذلك",

    //NewUserQ: "New user? ",
    SignUpInstead_1: "أو ",
    SignUpInstead_2: "أنشئ حساباً",
    SignUpInstead_3: "",

    OrTypeName_1: "، أو فقط ",
    OrTypeName_2: "اكتب اسماً",
    OrTypeName_3: "",

    OrCreateAcctHere: "أو أنشئ حساباً:",
    OrTypeName: "أو اكتب اسمك:",
    OrLogIn: "أو سجل الدخول:",
    YourNameQ: "اسمك؟",

    BadCreds: "اسم المستخدم أو كلمة المرور خاطئة",

    UsernameOrEmailC: "اسم المستخدم أو البريد الإلكتروني:",
    PasswordC: "كلمة المرور:",
    ForgotPwd: "هل نسيت كلمة المرور الخاصة بك؟",

    NoPwd: "لم تختر كلمة مرور بعد.",
    CreatePwd: "إنشاء كلمة مرور",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "يرجى إخبارنا بما يقلقك.",
    ThanksHaveReported: "شكراً. لقد قمت بالإبلاغ عن ذلك. سيقوم موظفو المنتدى بإلقاء نظرة.",
    ReportComment: "الإبلاغ عن تعليق",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "هذا المنشور يحتوي على بيانات شخصية، على سبيل المثال اسم حقيقي لشخص ما.",
    OptOffensive: "هذا المنشور يحتوي على محتوى مسيء أو بذيء.",
    OptSpam: "هذا المنشور هو إعلان غير مرغوب فيه.",
    OptOther: "إخطار الموظفين بهذا المنشور لسبب آخر.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "يمكنك إظهار رسائل المساعدة مرة أخرى، إذا كنت مسجلاً للدخول، من خلال " +
        "النقر على اسمك ثم ",
    YouCanShowAgain_2: "إظهار رسائل المساعدة",
  },


  // Editor

  e: {
    SimilarTopicsC: "مواضيع مشابهة:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "عذراً ولكن حالياً يمكنك رفع ملف واحد فقط في المرة الواحدة",
    PleaseFinishPost: "يرجى أولاً إنهاء كتابة منشورك",
    PleaseFinishChatMsg: "يرجى أولاً إنهاء كتابة رسالة الدردشة الخاصة بك",
    PleaseFinishMsg: "يرجى أولاً إنهاء كتابة رسالتك",
    PleaseSaveEdits: "يرجى أولاً حفظ تعديلاتك الحالية",
    PleaseSaveOrCancel: "يرجى أولاً إما حفظ أو إلغاء موضوعك الجديد",
    CanContinueEditing: "يمكنك الاستمرار في تعديل نصك، إذا قمت بفتح المحرر مرة أخرى.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "يرجى عدم حذف كل النص. اكتب شيئاً.",
    PleaseWriteSth: "يرجى كتابة شيء ما.",
    PleaseWriteTitle: "يرجى كتابة عنوان للموضوع.",
    PleaseWriteMsgTitle: "يرجى كتابة عنوان للرسالة.",
    PleaseWriteMsg: "يرجى كتابة رسالة.",

    exBold: "نص عريض",
    exEmph: "نص مائل",
    exPre: "نص منسق مسبقاً",
    exQuoted: "نص مقتبس",
    ExHeading: "عنوان",

    TitlePlaceholder: "اكتب عنواناً — عن ماذا يتحدث هذا، في جملة واحدة موجزة؟",

    EditPost_1: "تعديل ",
    EditPost_2: "المنشور ",

    TypeChatMsg: "اكتب رسالة دردشة:",
    YourMsg: "رسالتك:",
    CreateTopic: "إنشاء موضوع جديد",
    CreateCustomHtml: "إنشاء صفحة HTML مخصصة (أضف عنوان <h1> الخاص بك)",
    CreateInfoPage: "إنشاء صفحة معلومات",
    CreateCode: "إنشاء صفحة كود مصدري",
    AskQuestion: "طرح سؤال",
    ReportProblem: "الإبلاغ عن مشكلة",
    SuggestIdea: "اقتراح فكرة",
    NewChat: "عنوان الدردشة والغرض منها",
    NewPrivChat: "عنوان الدردشة الخاصة والغرض منها",
    AppendComment: "إلحاق تعليق في أسفل الصفحة:",

    ReplyTo: "الرد على ",
    ReplyTo_theOrigPost: "المنشور الأصلي",
    ReplyTo_post: "المنشور ",
    AddCommentC: "إضافة تعليق:",

    PleaseSelectPosts: "يرجى تحديد منشور واحد أو أكثر للرد عليه.",

    Save: "حفظ",
    edits: "تعديلات",

    PostReply: "نشر الرد",
    PostComment: "نشر التعليق",

    Post: "نشر",
    comment: "تعليق",
    question: "سؤال",

    PostMessage: "نشر رسالة",
    SimpleEditor: "محرر بسيط",
    Send: "إرسال",
    message: "رسالة",

    Create: "إنشاء",
    page: "صفحة",
    chat: "دردشة",
    idea: "فكرة",
    topic: "موضوع",

    Submit: "إرسال",
    problem: "مشكلة",

    ViewOldEdits: "عرض التعديلات القديمة",

    UploadBtnTooltip: "رفع ملف أو صورة",
    BoldBtnTooltip: "جعل النص عريضاً",
    EmBtnTooltip: "إمالة",
    QuoteBtnTooltip: "اقتباس",
    PreBtnTooltip: "نص منسق مسبقاً",
    HeadingBtnTooltip: "عنوان",

    TypeHerePlaceholder: "اكتب هنا. يمكنك استخدام Markdown و HTML. اسحب وأفلت للصق الصور.",

    Maximize: "تكبير",
    ToNormal: "العودة للوضع الطبيعي",
    TileHorizontally: "تقسيم أفقي",

    PreviewC: "المعاينة:",
    TitleExcl: " (باستثناء العنوان)",
    ShowEditorAgain: "إظهار المحرر مرة أخرى",
    Minimize: "تصغير",

    PreviewInfo: "هنا يمكنك معاينة كيف سيبدو منشورك.",
    CannotType: "لا يمكنك الكتابة هنا.",

    LoadingDraftDots: "جاري تحميل أي مسودة...",
    DraftUnchanged: "لم يتغير.",
    CannotSaveDraftC: "لا يمكن حفظ المسودة:",
    DraftSavedBrwsr: "تم حفظ المسودة في المتصفح.",
    DraftSaved: (nr: string | number) => `تم حفظ المسودة ${nr}.`,
    DraftDeleted: (nr: string | number) => `تم حذف المسودة ${nr}.`,
    WillSaveDraft: (nr: string | number) => `سيتم حفظ المسودة ${nr} ...`,
    SavingDraft: (nr: string | number) => `جاري حفظ المسودة ${nr} ...`,
    DeletingDraft: (nr: string | number) => `جاري حذف المسودة ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "تحديد الفئة",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "تحديد نوع الموضوع:",
    DiscussionExpl: "مناقشة حول شيء ما.",
    QuestionExpl: "يمكن تمييز إجابة واحدة كإجابة مقبولة.",
    ProblExpl: "إذا كان هناك شيء مكسور أو لا يعمل. يمكن تمييزه كـ تم الإصلاح/الحل.",
    IdeaExpl: "اقتراح. يمكن تمييزه كـ تم الإنجاز/التنفيذ.",
    ChatExpl: "محادثة قد لا تنتهي أبداً.",
    PrivChatExpl: "مرئية فقط للأشخاص الذين يتم دعوتهم للانضمام إلى الدردشة.",

    CustomHtml: "صفحة HTML مخصصة",
    InfoPage: "صفحة معلومات",
    Code: "كود",
    EmbCmts: "تعليقات مضمنة",
    About: "حول",
    PrivChat: "دردشة خاصة",
    Form: "نموذج",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "لا توجد المزيد من المجتمعات للانضمام إليها.",
    SelCmty: "تحديد مجتمع ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "البحث عن مساعدة",
    TxtToFind: "النص المراد البحث عنه",
  },


  // No internet

  ni: {
    NoInet: "لا يوجد اتصال بالإنترنت",
    PlzRefr: "قم بتحديث الصفحة لرؤية أحدث التغييرات. (حدث انقطاع)",
    RefrNow: "تحديث الآن",
  },


  PostDeleted: (postNr: number) => `هذا المنشور، رقم ${postNr}، قد تم حذفه.`,
  NoSuchPost: (postNr: number) => `لا يوجد منشور رقم ${postNr} في هذه الصفحة.`,
  NoPageHere: "لقد تم حذف هذه الصفحة، أو أنها لم تكن موجودة أبداً، أو قد لا تملك صلاحية الوصول إليها.",
  GoBackToLastPage: "الرجوع إلى الصفحة الأخيرة",

};
