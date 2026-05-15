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

var t_fa_IR: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "فعال",
  Activity: "فعالیت",
  Add: "افزودن",
  AddingDots: "در حال افزودن ...",
  AddComment: "افزودن دیدگاه",
  Admin: "مدیر",
  AdvSearch: "جستجوی پیشرفته",
  Anonym: "ناشناس",
  Away: "دور",
  Back: "بازگشت",
  BlogN: "وبلاگ",
  Bookmarks: "نشانه‌ها",
  Cancel: "لغو",
  Categories: "دسته‌ها",
  Category: "دسته",
  ChangeV: "تغییر",
  ClickToShow: "برای نمایش کلیک کنید",
  ChangeDots: "تغییر ...",
  ChatN: "گفتگو",
  Chatting: "در حال گفتگو",
  CheckYourEmail: "ایمیل خود را بررسی کنید",
  Close: "بستن",
  closed: "بسته شده",
  comments: "دیدگاه",   // as in:  "123 comments"
  Continue: "ادامه",
  Created: "ایجاد شده",
  Delete: "حذف",
  Deleted: "حذف شده",
  DirectMessage: "پیام مستقیم",
  Discussion: "بحث",
  discussion: "بحث",
  done: "انجام شد",
  EditV: "ویرایش",
  Editing: "در حال ویرایش",
  EmailC: "ایمیل: ",
  EmailAddress: "نشانی ایمیل",
  EmailAddresses: "نشانی‌های ایمیل",
  EmailSentD: "ایمیل ارسال شد.",
  Forum: "انجمن",
  GetNotifiedAbout: "دریافت اعلان درباره",
  GroupsC: "گروه‌ها:",
  Hide: "پنهان کردن",
  Home: "خانه",
  Idea: "ایده",
  Join: "پیوستن",
  KbdShrtcsC: "میانبرهای صفحه‌کلید: ",
  Loading: "در حال بارگذاری...",
  LoadMore: "بارگذاری بیشتر ...",
  LogIn: "ورود",
  LoggedInAs: "وارد شده به عنوان ",
  LogOut: "خروج",
  Maybe: "شاید",
  Manage: "مدیریت",
  Members: "اعضا",
  MessageN: "پیام",
  MoreDots: "بیشتر...",
  Move: "انتقال",
  Name: "نام",
  NameC: "نام:",
  NewTopic: "موضوع جدید",
  NoCancel: "نه، لغو شود",
  Notifications: "اعلان‌ها",
  NotImplemented: "(پیاده‌سازی نشده)",
  NotYet: "هنوز نه",
  NoTitle: "بدون عنوان",
  NoTopics: "موضوعی وجود ندارد.",
  Okay: "تایید",
  OkayDots: "تایید ...",
  Online: "آنلاین",
  onePerLine: "هر مورد در یک خط",
  PreviewV: "پیش‌نمایش",
  Problem: "مشکل",
  progressN: "پیشرفت",
  Question: "پرسش",
  Recent: "اخیر",
  Remove: "حذف",
  Reopen: "بازگشایی مجدد",
  ReplyV: "پاسخ",
  Replying: "در حال پاسخ",
  Replies: "پاسخ‌ها",
  replies: "پاسخ‌ها",
  Save: "ذخیره",
  SavingDots: "در حال ذخیره ...",
  SavedDot: "ذخیره شد.",
  Search: "جستجو",
  SendMsg: "ارسال پیام",
  ShowPreview: "نمایش پیش‌نمایش",
  SignUp: "پیوستن",  // don't change to "Sign Up" [join_or_signup]
  Solution: "راه حل",
  started: "شروع شده",
  Summary: "خلاصه",
  Submit: "ارسال",
  Tag: "برچسب",
  Tags: "برچسب‌ها",
  Tools: "ابزارها",
  Topics: "موضوعات",
  TopicTitle: "عنوان موضوع",
  TopicType: "نوع موضوع",
  UploadingDots: "در حال بارگذاری...",
  Username: "نام کاربری",
  Users: "کاربران",
  Welcome: "خوش آمدید",
  Wiki: "ویکی",
  Yes: "بله",
  YesBye: "بله، خداحافظ",
  YesDoThat: "بله، انجام بده",
  You: "شما",
  you: "شما",

  // Trust levels.
  Guest:  "مهمان",
  NewMember: "عضو جدید",
  BasicMember: "عضو پایه",
  FullMember: "عضو کامل",
  TrustedMember: "عضو مورد اعتماد",
  RegularMember: "عضو عادی مورد اعتماد",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "عضو اصلی",

  // Periods.
  PastDay: "روز گذشته",
  PastWeek: "هفته گذشته",
  PastMonth: "ماه گذشته",
  PastQuarter: "سه ماه گذشته",
  PastYear: "سال گذشته",
  AllTime: "همه زمان‌ها",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "ماه",  // months
  daysLtr: "روز",      // days
  hoursLtr: "ساعت",     // hours
  minsLtr: "دقیقه",      // minutes
  secsLtr: "ثانیه",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "۱ روز پیش" : `${numDays} روز پیش`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "۱ ساعت پیش" : `${numHours} ساعت پیش`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "۱ دقیقه پیش" : `${numMins} دقیقه پیش`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "۱ ثانیه پیش" : `${numSecs} ثانیه پیش`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "ایمیل الزامی است",
    NoSpcs: "لطفاً بدون فاصله باشد",
    InvldAddr: "نشانی ایمیل معتبر نیست",
    NoBadChrs: "لطفاً از نویسه‌های نامتعارف استفاده نکنید",

    // Full name input field:
    NotOnlSpcs: "لطفاً فقط فاصله نباشد",
    NoAt: "لطفاً شامل @ نباشد",

    // Username input field:
    NoDash: "لطفاً شامل خط تیره (-) نباشد",
    DontInclAt: "شامل @ نباشد",
    StartEndLtrDgt: "با یک حرف یا عدد شروع و پایان یابد",
    OnlLtrNumEtc: "فقط حروف (a-z, A-Z) و اعداد، و _ (زیرخط)",
    // This shown just below the username input:
    UnUnqShrt_1: "",
    UnUnqShrt_2: "@نام‌کاربری",
    UnUnqShrt_3: " شما، منحصر‌به‌فرد و کوتاه",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `باید حداقل ${minLength} نویسه باشد`,
    TooLong: (maxLength: number) => `خیلی طولانی است. باید حداکثر ${maxLength} نویسه باشد`,
  },


  // Notification levels.

  nl: {
    EveryPost: "هر نوشته",
    EveryPostInTopic: "شما از تمام پاسخ‌های جدید در این موضوع مطلع خواهید شد.",
    EveryPostInCat: "شما از تمام موضوعات و پاسخ‌های جدید در این دسته مطلع خواهید شد.",
    EveryPostInTopicsWithTag: "شما از موضوعات جدید با این برچسب و تمام پاسخ‌ها در آن موضوعات مطلع خواهید شد.",
    EveryPostWholeSite: "شما از تمام موضوعات و پاسخ‌های جدید در هر کجا مطلع خواهید شد.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "موضوعات جدید",
    NewTopicsInCat: "شما از موضوعات جدید در این دسته مطلع خواهید شد.",
    NewTopicsWithTag: "شما از موضوعات جدید با این برچسب مطلع خواهید شد.",
    NewTopicsWholeSite: "شما از موضوعات جدید در هر کجا مطلع خواهید شد.",

    Tracking: "در حال پیگیری",

    Normal: "عادی",
    NormalDescr: "اگر کسی با شما صحبت کند، همچنین غیرمستقیم، مثلاً پاسخی به پاسخی به شما، مطلع خواهید شد.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "آرام",
    HushedDescr: "فقط اگر کسی مستقیماً با شما صحبت کند مطلع خواهید شد.",

    Muted: "بی‌صدا",
    MutedTopic: "بدون اعلان.",
  },


  // Forum intro text

  fi: {
    Edit: "ویرایش",
    Hide_1: "پنهان کردن",
    Hide_2: "، کلیک کنید ",
    Hide_3: " برای بازگشایی مجدد",
  },


  // Forum categories

  fcs: {
    All: "همه", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "فهرست موضوعات",

    // Select category dropdown

    from: "از",
    in: "در",
    AllCats: "همه دسته‌ها",

    // Topic sort order

    Active: "ابتدا فعال‌ها",
    ActiveDescr: "ابتدا موضوعاتی را نشان می‌دهد که اخیراً فعال بوده‌اند",

    New: "جدید",
    NewDescr: "ابتدا موضوعات جدیدتر را نشان می‌دهد",

    Top: "محبوب",
    TopDescr: "ابتدا موضوعات محبوب را نشان می‌دهد",

    // Topic filter dropdown

    AllTopics: "همه موضوعات",

    ShowAllTopics: "نمایش همه موضوعات",
    ShowAllTopicsDescr: "البته موضوعات حذف شده نه",

    WaitingTopics: "موضوعات در انتظار",
    OnlyWaitingDescr_1: "فقط نشان دادن موضوعاتی که ",
    OnlyWaitingDescr_2: "در انتظار ",
    OnlyWaitingDescr_3: "یک راه حل یا پیاده‌سازی و انجام هستند",

    YourTopics: "موضوعات شما",
    AssignedToYou: "محول شده به شما",

    DeletedTopics: "نمایش حذف شده‌ها",
    ShowDeleted: "نمایش حذف شده‌ها",
    ShowDeletedDescr: "همه موضوعات، از جمله موضوعات حذف شده را نشان می‌دهد",

    // Rightmost buttons

    ViewCategories: "مشاهده دسته‌ها",
    EditCat: "ویرایش دسته",
    CreateCat: "ایجاد دسته",
    CreateTopic: "ایجاد موضوع",
    PostIdea: "ارسال یک ایده",
    AskQuestion: "پرسیدن یک پرسش",
    ReportProblem: "گزارش یک مشکل",
    CreateMindMap: "ایجاد نقشه ذهنی",
    CreatePage: "ایجاد صفحه",

  },


  // Forum topic list

  ft: {
    ExplIcons: "توضیح آیکون‌ها...",
    IconExplanation: "توضیح آیکون:",
    ExplGenDisc: "یک بحث عمومی.",
    ExplQuestion: "یک پرسش بدون پاسخ پذیرفته شده.",
    ExplAnswer: "یک پرسش با یک پاسخ پذیرفته شده.",
    ExplIdea: "یک ایده / پیشنهاد.",
    ExplProblem: "یک مشکل.",
    ExplPlanned: "چیزی که قصد انجام یا رفع آن را داریم.",
    ExplDone: "چیزی که انجام یا رفع شده است.",
    ExplClosed: "موضوع بسته شد.",
    ExplPinned: "موضوع همیشه در ابتدا فهرست می‌شود (شاید فقط در دسته خودش).",

    PopularTopicsComma: "موضوعات محبوب، ",
    TopFirstAllTime: "محبوب‌ترین موضوعات را در تمام زمان‌ها ابتدا نشان می‌دهد.",
    TopFirstPastDay: "موضوعات محبوب در روز گذشته را نشان می‌دهد.",

    CatHasBeenDeleted: "این دسته حذف شده است",

    TopicsActiveFirst: "موضوعات، ابتدا فعال‌های اخیر",
    TopicsNewestFirst: "موضوعات، ابتدا جدیدها",

    CreatedOn: "ایجاد شده در ",
    LastReplyOn: "\nآخرین پاسخ در ",
    EditedOn: "\nویرایش شده در ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "موضوع را ایجاد کرد",
    frequentPoster: "نویسنده پرکار",
    mostRecentPoster: "آخرین نویسنده",

    inC: "در: ",

    TitleFixed: "این رفع شده است",
    TitleDone: "این انجام شده است",
    TitleStarted: "ما این را شروع کرده‌ایم",
    TitleStartedFixing: "ما رفع این را شروع کرده‌ایم",
    TitleUnsolved: "این یک مشکل حل نشده است",
    TitleIdea: "این یک ایده است",
    TitlePlanningFix: "ما قصد داریم این را رفع کنیم",
    TitlePlanningDo: "ما قصد داریم این را انجام دهیم",
    TitleChat: "این یک کانال گفتگو است",
    TitlePrivateChat: "این یک کانال گفتگوی خصوصی است",
    TitlePrivateMessage: "یک پیام خصوصی",
    TitleInfoPage: "این یک صفحه اطلاعات است",
    TitleDiscussion: "یک بحث",
    IsPinnedGlobally: "\nاین سنجاق شده است، بنابراین در ابتدا فهرست می‌شود.",
    IsPinnedInCat: "\nاین در دسته خود سنجاق شده است، بنابراین در دسته خود ابتدا فهرست می‌شود.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "موضوعات اخیر (آن‌هایی که در انتظارند)",
    RecentTopicsInclDel: "موضوعات اخیر (شامل حذف شده‌ها)",
    RecentTopics: "موضوعات اخیر",
    _replies: " پاسخ",
    _deleted: " (حذف شده)",
    _defCat: " (دسته پیش‌فرض)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "نوشته‌های اخیر",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " آنلاین در این گفتگو",    // example: "5 online in this chat"
    NumOnlForum: " آنلاین در این انجمن",

    // Open left-sidebar button title.
    WatchbBtn: "موضوعات شما",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "موضوعات اخیر شما، گفتگوهای ملحق شده، پیام‌های مستقیم",

    // Title shown on user profile pages.
    AbtUsr: "درباره کاربر",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "بازگشت از پروفایل کاربر",
    BackFromAdm: "بازگشت از ناحیه مدیریت",

    // Title shown on full text search page.
    SearchPg: "صفحه جستجو",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "افزودن ...",
    RecentlyViewed: "موضوعات اخیراً مشاهده شده",
    JoinedChats: "گفتگوهای ملحق شده",
    ChatChannels: "کانال‌های گفتگو",
    CreateChat: "ایجاد کانال گفتگو",
    DirectMsgs: "پیام‌های مستقیم",
    NoChats: "هیچ‌کدام",    // meaning: "No chat messages"
    NoDirMsgs: "هیچ‌کدام",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "عملیات موضوع",
    ViewPeopleHere: "مشاهده افراد در اینجا",
    ViewAddRemoveMembers: "مشاهده / افزودن / حذف اعضا",
    ViewChatMembers: "مشاهده اعضای گفتگو",
    EditChat: "ویرایش توضیحات گفتگو",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "ترک این گفتگو",
    LeaveThisCommunity: "ترک این مجموعه",
    JoinThisCommunity: "پیوستن به این مجموعه",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "دیدگاه‌های اخیر در این موضوع:",
    NoComments: "بدون دیدگاه.",

    YourBookmarks: "نشانه‌های شما:",

    UsersOnline: "کاربران آنلاین:",
    UsersOnlineForum: "کاربران آنلاین در این انجمن:",
    UsersInThisChat: "کاربران در این گفتگو:",
    UsersInThisTopic: "کاربران در این موضوع:",

    GettingStartedGuide: "راهنمای مدیریت",
    AdminGuide: "راهنمای مدیریت",
    Guide: "راهنما",

    // How to hide the sidebar.
    CloseShortcutS: "بستن (میانبر صفحه‌کلید: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "افزودن افراد بیشتر",

    // Shown next to one's own username, in a list of users.
    thatsYou: "این شما هستید",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "ظاهراً فقط شما",
    YouAnd: "شما، و ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " نفر" : " نفر";
      const have = numStrangers === 1 ? "وارد نشده است" : "وارد نشده‌اند";
      return numStrangers + people + " که " + have;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "پاسخ‌های سمت چپ ممکن است بر اساس ",
    bestFirst: "بهترین-ابتدا مرتب شده باشند.",
    ButBelow: "اما در زیر ",
    insteadBy: " همان پاسخ‌ها در عوض بر اساس ",
    newestFirst: "جدیدترین-ابتدا مرتب شده‌اند.",

    SoIfLeave: "بنابراین اگر اینجا را ترک کنید و بعداً برگردید، در زیر ",
    allNewReplies: "تمام پاسخ‌های جدید را خواهید یافت.",
    Click: "کلیک کنید",
    aReplyToReadIt: " روی یک پاسخ در زیر برای خواندن آن — زیرا فقط بخشی از آن در زیر نشان داده شده است.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "برای تغییر وضعیت کلیک کنید",
    ClickToViewAnswer: "برای مشاهده پاسخ کلیک کنید",
    ViewAnswer: "مشاهده پاسخ",
    ChangeStatusC: "تغییر وضعیت به:",
    ChangeCatC: "تغییر دسته:",
    ChangeTopicTypeC: "تغییر نوع موضوع:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "یک پرسش",
    hasAccptAns: "دارای یک پاسخ پذیرفته شده است",
    aProblem: "یک مشکل",
    planToFix: "قصد رفع داریم",
    anIdea: "یک ایده",
    planToDo: "قصد انجام داریم",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "این فرم ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "بسته شده است؛ دیگر نمی‌توانید آن را پر و ارسال کنید.",

    ThisTopicClosed_1: "این موضوع ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: " شده است. هنوز می‌توانید دیدگاه ارسال کنید.",

    ThisPageDeleted: "این صفحه حذف شده است",
    CatDeldPageToo: "دسته حذف شده است، بنابراین این صفحه نیز حذف شد",

    ThreadDeld: "رشته حذف شد",
    CmntDeld: "دیدگاه حذف شد",
    PostDeld: "نوشته حذف شد",
    DiscDeld: "بحث حذف شد",
    PageDeld: "صفحه حذف شد",
    PagePendAppr: "صفحه در انتظار تایید",
    TitlePendAppr: "عنوان در انتظار تایید",
    TextPendingApproval: "متن در انتظار تایید",

    TooltipQuestClosedNoAnsw: "این پرسش بدون هیچ پاسخ پذیرفته شده‌ای بسته شده است.",
    TooltipTopicClosed: "این موضوع بسته است.",

    TooltipQuestSolved: "این یک پرسش حل شده است",
    TooltipQuestUnsolved: "این یک پرسش حل نشده است",

    StatusDone: "انجام شد",
    TooltipProblFixed: "این رفع شده است",
    TooltipDone: "این انجام شده است",

    StatusStarted: "شروع شد",
    TooltipFixing: "ما رفع این را شروع کرده‌ایم",
    TooltipImplementing: "ما انجام این را شروع کرده‌ایم",

    StatusPlanned: "برنامه‌ریزی شده",
    TooltipProblPlanned: "ما قصد داریم این را رفع کنیم",
    TooltipIdeaPlanned: "ما قصد داریم این را انجام دهیم",

    StatusNew: "جدید",
    StatusNewDtl: "موضوع جدید، در حال بحث",
    TooltipUnsProbl: "این یک مشکل حل نشده است",
    TooltipIdea: "این یک ایده است",

    TooltipPersMsg: "پیام شخصی",
    TooltipChat: "# یعنی کانال گفتگو",
    TooltipPrivChat: "این یک کانال گفتگوی خصوصی است",

    TooltipPinnedGlob: "\nدر سطح کل سایت سنجاق شده است.",
    TooltipPinnedCat: "\nدر این دسته سنجاق شده است.",

    SolvedClickView_1: "حل شده در نوشته #",
    SolvedClickView_2: "، برای مشاهده کلیک کنید",

    PostHiddenClickShow: "نوشته پنهان شده؛ برای نمایش کلیک کنید",
    ClickSeeMoreRepls: "نمایش پاسخ‌های بیشتر",
    ClickSeeMoreComments: "نمایش دیدگاه‌های بیشتر",
    ClickSeeThisComment: "برای نمایش این دیدگاه کلیک کنید",
    clickToShow: "برای نمایش کلیک کنید",

    ManyDisagree: "بسیاری با این مخالفند:",
    SomeDisagree: "برخی با این مخالفند:",

    PendAppr: "در انتظار تایید",
    CmtPendAppr: "دیدگاه در انتظار تایید، ارسال شده ",
    CmtBelowPendAppr: (isYour) => (isYour ? "دیدگاه شما" : "دیدگاه") + " در زیر در انتظار تایید است.",

    _and: " و",

    repliesTo: "پاسخ‌ها به",
    InReplyTo: "در پاسخ به",
    YourReplyTo: "پاسخ شما به ",
    YourChatMsg: "پیام گفتگوی شما: ",
    YourDraft: "پیش‌نویس شما",
    YourEdits: "ویرایش‌های شما: ",
    YourProgrNoteC: "یادداشت پیشرفت شما:",
    aProgrNote: "یک یادداشت پیشرفت: ",

    ReplyingToC: "در حال پاسخ به:",
    ScrollToPrevw_1: "اسکرول به ",
    ScrollToPrevw_2: "پیش‌نمایش",

    UnfinEdits: "ویرایش‌های ناتمام",
    ResumeEdting: "از سرگیری ویرایش",
    DelDraft: "حذف پیش‌نویس",

    ClickViewEdits: "برای مشاهده ویرایش‌های قدیمی کلیک کنید",

    By: "توسط ", // ... someones name

    // Discussion ...
    aboutThisIdea: "درباره چگونگی و ضرورت انجام این ایده",
    aboutThisProbl: "درباره چگونگی و ضرورت رفع این مشکل",

    AddProgrNote: "افزودن یادداشت پیشرفت",
    // Progress ...
    withThisIdea: "در مورد انجام این ایده",
    withThisProbl: "در مورد رسیدگی به این مشکل",
    withThis: "در مورد انجام این",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "اعلان‌ها درباره این موضوع:",

    // If is a direct message topic, members listed below this text.
    Msg: "پیام",

    SmrzRepls: "خلاصه کردن پاسخ‌ها",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} پاسخ وجود دارد. زمان مطالعه تخمینی: ${minutes} دقیقه`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `انجام شد. ${numSummarized} پاسخ از ${numShownBefore} پاسخی که قبلاً نشان داده شده بود، خلاصه شد.`,
  },


  // Post actions

  pa: {
    CloseTopic: "بستن موضوع",
    CloseOwnQuestionTooltip: "اگر دیگر به پاسخ نیاز ندارید، این پرسش را ببندید.",
    CloseOthersQuestionTooltip: "اگر این پرسش نیاز به پاسخ ندارد، مثلاً اگر خارج از موضوع است یا قبلاً در موضوع دیگری پاسخ داده شده است، آن را ببندید.",
    CloseToDoTooltip: "اگر این کار نیاز به انجام یا رفع ندارد، این مورد را ببندید.",
    CloseTopicTooltip: "اگر این موضوع نیاز به بررسی بیشتر ندارد، آن را ببندید.",

    AcceptBtnExpl: "پذیرفتن این به عنوان پاسخ پرسش یا مشکل",
    SolutionQ: "راه حل؟",
    ClickUnaccept: "برای لغو پذیرش این پاسخ کلیک کنید",
    PostAccepted: "این نوشته به عنوان پاسخ پذیرفته شده است",

    NumLikes: (num: number) => num === 1 ? "۱ لایک" : num + " لایک",
    NumDisagree: (num: number) => num + " مخالف",
    NumBury: (num: number) => num === 1 ? "۱ دفن" : num + " دفن",
    NumUnwanted: (num: number) => num === 1 ? "۱ ناخواسته" : num + " ناخواسته",

    MoreVotes: "رای‌های بیشتر...",
    LikeThis: "لایک کردن",
    LinkToPost: "لینک به این نوشته",
    Report: "گزارش",
    ReportThisPost: "گزارش این نوشته",
    Admin: "مدیریت",
    DiscIx: "شاخص بحث‌ها",

    Disagree: "مخالفم",
    DisagreeExpl: "برای مخالفت با این نوشته یا هشدار به دیگران درباره خطاهای واقعی اینجا کلیک کنید.",
    Bury: "دفن کردن",
    BuryExpl: "برای مرتب‌سازی نوشته‌های دیگر قبل از این نوشته کلیک کنید. فقط کارکنان انجمن می‌توانند رای شما را ببینند.",
    Unwanted: "ناخواسته",
    UnwantedExpl: "اگر این نوشته را در این وب‌سایت نمی‌خواهید. این امر اعتماد من به نویسنده نوشته را کاهش می‌دهد. فقط کارکنان انجمن می‌توانند رای شما را ببینند.",

    AddTags: "افزودن/حذف برچسب‌ها",
    UnWikify: "خروج از حالت ویکی",
    Wikify: "تبدیل به ویکی",
    PinDeleteEtc: "سنجاق / حذف / دسته ...",
  },


  // Share dialog

  sd: {
    Copied: "کپی شد.",
    CtrlCToCopy: "برای کپی کردن CTRL+C را فشار دهید.",
    ClickToCopy: "برای کپی کردن لینک کلیک کنید.",
  },


  // Chat

  c: {
    About_1: "این کانال گفتگوی ",
    About_2: " است که توسط ",
    ScrollUpViewComments: "برای مشاهده دیدگاه‌های قدیمی‌تر به بالا اسکرول کنید",
    Purpose: "هدف:",
    MessageDeleted: "(پیام حذف شد)",
    JoinThisChat: "پیوستن به این گفتگو",
    PostMessage: "ارسال پیام",
    AdvancedEditor: "ویرایشگر پیشرفته",
    TypeTitle: "عنوانی تایپ کنید — این گفتگو در چند کلمه درباره چیست؟",
    TypePurpose: "هدفی تایپ کنید — می‌تواند طولانی‌تر از عنوان و با جزئیات بیشتر باشد.",
    TypeHere: "اینجا تایپ کنید. می‌توانید از Markdown و HTML استفاده کنید.",
  },


  // My Menu

  mm: {
    NeedsReview: "نیاز به بررسی ",
    AdminHelp: "راهنمای مدیر ",
    StaffHelp: "راهنمای کارکنان ",
    DraftsEtc: "پیش‌نویس‌ها، نشانه‌ها، کارها",
    MoreNotfs: "مشاهده همه اعلان‌ها",
    DismNotfs: "علامت‌گذاری همه به عنوان خوانده شده",
    ViewProfile: "مشاهده پروفایل شما",
    ViewGroups: "مشاهده گروه‌ها",
    LogOut: "خروج",
    UnhideHelp: "آشکارسازی پیام‌های راهنما",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "اسکرول به:",
    Scroll: "اسکرول",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "بازگشت",
    BackExpl: "اسکرول به موقعیت قبلی شما در این صفحه",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "بالای صفحه",
    PgTopHelp: "رفتن به بالای صفحه. میانبر صفحه‌کلید: 1",
    Repl: "پاسخ‌ها",
    ReplHelp: "رفتن به بخش پاسخ‌ها. میانبر: 2",
    Progr: "پیشرفت",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "رفتن به بخش پیشرفت. میانبر: 3",
    PgBtm: "پایین صفحه",
    Btm: "پایین",
    BtmHelp: "رفتن به پایین صفحه. میانبر: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: "، و ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " برای اسکرول به عقب",
  },


  // Select users dialog
  sud: {
    SelectUsers: "انتخاب کاربران",
    AddUsers: "افزودن کاربران",
  },


  // About user dialog

  aud: {
    IsMod: "مدیر انجمن است.",
    IsAdm: "مدیر سایت است.",
    IsDeld: "غیرفعال یا حذف شده است.",
    ThisIsGuest: "این یک کاربر مهمان است، در واقع می‌تواند هر کسی باشد.",
    ViewInAdm: "مشاهده در ناحیه مدیریت",
    ViewProfl: "مشاهده پروفایل",
    ViewComments: "مشاهده دیدگاه‌های دیگر",
    RmFromTpc: "حذف از موضوع",
    EmAdrUnkn: "نشانی ایمیل نامشخص است — این مهمان از پاسخ‌ها مطلع نخواهد شد.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "تنظیمات",
    Invites: "دعوت‌نامه‌ها",
    DraftsEtc: "پیش‌نویس‌ها و غیره",
    About: "درباره",
    Privacy: "حریم خصوصی",
    Security: "امنیت",
    Account: "حساب کاربری",
    Interface: "رابط کاربری",

    // ----- Overview stats

    JoinedC: "تاریخ عضویت: ",
    PostsMadeC: "نوشته‌های ارسالی: ",
    LastPostC: "آخرین نوشته: ",
    LastSeenC: "آخرین بازدید: ",
    TrustLevelC: "سطح اعتماد: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "بارگذاری عکس",
    ChangePhoto: "تغییر عکس",
    ImgTooSmall: "تصویر خیلی کوچک است: باید حداقل ۱۰۰ در ۱۰۰ باشد",

    // ----- Activity

    OnlyStaffCanSee: "فقط کارکنان و اعضای اصلی مورد اعتماد می‌توانند این را ببینند.",
    OnlyMbrsCanSee: "فقط افرادی که مدتی عضو فعال بوده‌اند می‌توانند این را ببینند.",
    Nothing: "چیزی برای نمایش وجود ندارد",
    Posts: "نوشته‌ها",
    NoPosts: "نوشته‌ای وجود ندارد.",
    Topics: "موضوعات",
    NoTopics: "موضوعی وجود ندارد.",

    // ----- User status

    UserBanned: "این کاربر مسدود شده است",
    UserSuspended: (dateUtc: string) => `این کاربر تا ${dateUtc} UTC تعلیق شده است`,
    ReasonC: "دلیل: ",

    DeactOrDeld: "غیرفعال یا حذف شده است.",
    isGroup: " (یک گروه)",
    isGuest: " — یک کاربر مهمان، می‌تواند هر کسی باشد",
    isMod: " – مدیر انجمن",
    isAdmin: " – مدیر سایت",
    you: "(شما)",

    // ----- Notifications page

    NoNotfs: "اعلان جدیدی وجود ندارد",
    NotfsToYouC: "اعلان‌های شما:",
    NotfsToOtherC: (name: string) => `اعلان‌ها برای ${name}:`,
    DefNotfsSiteWide: "اعلان‌های پیش‌فرض، در سطح کل سایت",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "برای",

    // ----- Drafts Etc page

    NoDrafts: "پیش‌نویسی وجود ندارد",
    YourDraftsC: "پیش‌نویس‌های شما:",
    DraftsByC: (name: string) => `پیش‌نویس‌های ${name}:`,

    // ----- Invites page

    InvitesIntro: "اینجا می‌توانید افراد را به پیوستن به این سایت دعوت کنید. ",
    InvitesListedBelow: "دعوت‌نامه‌هایی که قبلاً ارسال کرده‌اید در زیر فهرست شده‌اند.",
    NoInvites: "شما هنوز کسی را دعوت نکرده‌اید.",

    InvitedEmail: "ایمیل دعوت شده",
    WhoAccepted: "عضوی که پذیرفته است",
    InvAccepted: "دعوت پذیرفته شد",
    InvSent: "دعوت ارسال شد",
    JoinedAlready: "قبلاً ملحق شده است",

    SendAnInv: "دعوت افراد",
    SendInv: "ارسال دعوت‌نامه‌ها",
    SendInvExpl:
        "ما یک ایمیل کوتاه برای دوستان شما ارسال خواهیم کرد. آن‌ها با کلیک بر روی یک لینک " +
        "بلافاصله و بدون نیاز به ورود ملحق خواهند شد. " +
        "آن‌ها به اعضای عادی تبدیل می‌شوند، نه مدیر انجمن یا مدیر سایت.",
    //EnterEmail: "Enter email(s)",
    InvDone: "انجام شد. من یک ایمیل برای آن‌ها ارسال خواههم کرد.",
    NoOneToInv: "کسی برای دعوت وجود ندارد.",
    InvNotfLater: "بعداً وقتی آن‌ها را دعوت کردم به شما اطلاع می‌دهم.",
    AlreadyInvSendAgainQ: "این افراد قبلاً دعوت شده‌اند — شاید مایل باشید دوباره آن‌ها را دعوت کنید؟",
    InvErr_1: "این‌ها منجر به ",
    InvErr_2: "خطا",
    InvErr_3: " شدند:",
    TheseJoinedAlrdyC: "این افراد قبلاً ملحق شده‌اند، بنابراین آن‌ها را دعوت نکردم:",
    ResendInvsQ: "ارسال مجدد دعوت‌نامه‌ها برای این افراد؟ آن‌ها قبلاً دعوت شده‌اند.",
    InvAgain: "دعوت مجدد",

    // ----- Preferences, About

    AboutYou: "درباره شما",
    WebLink: "هر وب‌سایت یا صفحه‌ای از شما.",

    NotShownCannotChange: "به صورت عمومی نشان داده نمی‌شود. قابل تغییر نیست.",

    // The full name or alias:
    NameOpt: "نام (اختیاری)",

    NotShown: "به صورت عمومی نشان داده نمی‌شود.",

    // The username:
    MayChangeFewTimes: "شما می‌توانید آن را فقط چند بار تغییر دهید.",
    notSpecified: "(مشخص نشده)",
    ChangeUsername_1: "شما می‌توانید نام کاربری خود را فقط چند بار تغییر دهید.",
    ChangeUsername_2: "تغییر مکرر آن می‌تواند باعث سردرگمی دیگران شود — " +
        "آن‌ها نخواهند دانست چگونه شما را @ذکر کنند.",

    NotfAboutAll: "مطلع شدن از هر نوشته جدید (مگر اینکه موضوع یا دسته را بی‌صدا کنید)",
    NotfAboutNewTopics: "مطلع شدن از موضوعات جدید (مگر اینکه دسته را بی‌صدا کنید)",

    ActivitySummaryEmails: "ایمیل‌های خلاصه فعالیت",

    EmailSummariesToGroup:
        "وقتی اعضای این گروه به اینجا سر نمی‌زنند، به طور پیش‌فرض خلاصه‌ای از موضوعات محبوب و مطالب دیگر را برایشان ایمیل کن.",
    EmailSummariesToMe:
        "وقتی به اینجا سر نمی‌زنم، خلاصه‌ای از موضوعات محبوب و مطالب دیگر را برایم ایمیل کن.",

    AlsoIfTheyVisit: "حتی اگر مرتباً سر می‌زنند هم برایشان ایمیل کن.",
    AlsoIfIVisit: "حتی اگر مرتباً سر می‌زنم هم برایم ایمیل کن.",

    HowOftenWeSend: "چند وقت یکبار این ایمیل‌ها را ارسال کنیم؟",
    HowOftenYouWant: "چند وقت یکبار این ایمیل‌ها را می‌خواهید؟",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "پنهان کردن فعالیت اخیر شما برای غریبه‌ها و اعضای جدید؟",
    HideActivityStrangers_2: "(اما نه برای کسانی که مدتی عضو فعال بوده‌اند.)",
    HideActivityAll_1: "پنهان کردن فعالیت اخیر شما برای همه؟",
    HideActivityAll_2: "(به جز کارکنان و اعضای اصلی مورد اعتماد.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "نشانی‌های ایمیل",
    PrimaryDot: "اصلی. ",
    VerifiedDot: "تایید شده. ",
    NotVerifiedDot: "تایید نشده. ",
    ForLoginWithDot: (provider: string) => `برای ورود با ${provider}. `,
    MakePrimary: "تبدیل به اصلی",
    AddEmail: "افزودن نشانی ایمیل",
    TypeNewEmailC: "یک نشانی ایمیل جدید تایپ کنید:",
    MaxEmailsInfo: (numMax: number) => `(شما نمی‌توانید بیش از ${numMax} نشانی اضافه کنید.)`,
    EmailAdded_1: "اضافه شد. ما یک ایمیل تایید برای شما ارسال کردیم — ",
    EmailAdded_2: "صندوق ورودی ایمیل خود را بررسی کنید.",
    SendVerifEmail: "ارسال ایمیل تایید",

    EmailStatusExpl:
        "('اصلی' به این معنی است که می‌توانید از طریق این نشانی وارد شوید و ما اعلان‌ها را به آن ارسال می‌کنیم. " +
        "'تایید شده' به این معنی است که روی لینک تایید در یک ایمیل تایید نشانی کلیک کرده‌اید.)",

    // Password:
    ChangePwdQ: "تغییر رمز عبور؟",
    CreatePwdQ: "ایجاد رمز عبور؟",
    WillGetPwdRstEml: "یک ایمیل بازیابی رمز عبور دریافت خواهید کرد.",
    // This is the "None" in:  "Password: None"
    PwdNone: "هیچ‌کدام",

    // Logins:
    LoginMethods: "روش‌های ورود",
    commaAs: "، به عنوان: ",

    // One's data:
    YourContent: "محتوای شما",
    DownloadPosts: "دانلود نوشته‌ها",
    DownloadPostsHelp: "یک فایل JSON شامل کپی موضوعات و دیدگاه‌هایی که ارسال کرده‌اید ایجاد می‌کند.",
    DownloadPersData: "دانلود داده‌های شخصی",
    DownloadPersDataHelp: "یک فایل JSON شامل کپی داده‌های شخصی شما، مثلاً نام (اگر نامی مشخص کرده باشید) و نشانی ایمیل ایجاد می‌کند.",


    // Delete account:
    DangerZone: "منطقه خطر",
    DeleteAccount: "حذف حساب کاربری",
    DeleteYourAccountQ:
        "حساب کاربری شما حذف شود؟ ما نام شما را حذف می‌کنیم، نشانی ایمیل، رمز عبور و " +
        "هرگونه هویت آنلاین (مانند ورود با فیس‌بوک یا توییتر) را فراموش می‌کنیم. " +
        "دیگر قادر به ورود نخواهید بود. این کار قابل بازگشت نیست.",
    DeleteUserQ:
        "این کاربر حذف شود؟ ما نام را حذف می‌کنیم، نشانی ایمیل، رمز عبور و " +
        "هویت‌های آنلاین (مانند ورود با فیس‌بوک یا توییتر) را فراموش می‌کنیم. " +
        "کاربر دیگر قادر به ورود نخواهید بود. این کار قابل بازگشت نیست.",
    YesDelete: "بله، حذف شود",
  },


  // Group profile page
  gpp: {
    GroupMembers: "اعضای گروه",
    NoMembers: "بدون عضو.",
    MayNotListMembers: "مجاز به فهرست کردن اعضا نیست.",
    AddMembers: "افزودن اعضا",
    BuiltInCannotModify: "این یک گروه داخلی است؛ قابل تغییر نیست.",
    NumMembers: (num: number) => `${num} عضو`,
    YouAreMember: "شما یک عضو هستید.",
    CustomGroupsC: "گروه‌های سفارشی:",
    BuiltInGroupsC: "گروه‌های داخلی:",
    DeleteGroup: "حذف این گروه",
  },


  // Create user dialog

  cud: {
    CreateUser: "ایجاد کاربر",
    CreateAccount: "ایجاد حساب کاربری",
    EmailC: "ایمیل:",
    keptPriv: "خصوصی باقی خواهد ماند",
    forNotfsKeptPriv: "برای اعلان‌های پاسخ، خصوصی باقی می‌ماند",
    EmailVerifBy_1: "ایمیل شما توسط ",
    EmailVerifBy_2: " تایید شده است.",
    UsernameC: "نام کاربری:",
    FullNameC: "نام کامل:",
    optName: "اختیاری",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "حساب کاربری ایجاد شد. شما وارد شدید.",  // COULD say if verif email sent too?
    AlmostDone:
        "تقریباً تمام شد! فقط باید نشانی ایمیل خود را تایید کنید. ما یک ایمیل " +
        "برای شما ارسال کردیم. لطفاً روی لینک موجود در ایمیل کلیک کنید تا " +
        "حساب کاربری شما فعال شود. می‌توانید این صفحه را ببندید.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "شرایط و حریم خصوصی",

    Accept_1: "آیا ",
    TermsOfService: "شرایط خدمات",
    TermsOfUse: "شرایط استفاده",
    Accept_2: " و ",
    PrivPol: "سیاست حریم خصوصی",
    Accept_3_User: " ما را می‌پذیرید؟",
    Accept_3_Owner: " برای صاحبان سایت را می‌پذیرید؟",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "بله، می‌پذیرم",
  },


  // Password input

  pwd: {
    PasswordC: "رمز عبور:",
    StrengthC: "قدرت: ",
    FairlyWeak: "نسبتاً ضعیف.",
    toShort: "خیلی کوتاه",
    TooShort: (minLength: number) => `خیلی کوتاه است. باید حداقل ${minLength} نویسه باشد`,
    PlzInclDigit: "لطفاً از یک عدد یا نویسه خاص استفاده کنید",
    TooWeak123abc: "خیلی ضعیف است. از رمزهای عبوری مانند '12345' یا 'abcde' استفاده نکنید.",
    AvoidInclC: "از درج (بخش‌هایی از) نام یا ایمیل خود در رمز عبور خودداری کنید:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "صفحه یافت نشد، یا دسترسی محدود شده است.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "شما در حال جعل هویت کسی هستید که ممکن است به تمام بخش‌های این وب‌سایت دسترسی نداشته باشد.",

    IfYouThinkExistsThen: "اگر فکر می‌کنید صفحه وجود دارد، به عنوان کسی که ممکن است به آن دسترسی داشته باشد وارد شوید. ",
    LoggedInAlready: "(شما در حال حاضر وارد شده‌اید، اما شاید با حساب اشتباه؟) ",
    ElseGoToHome_1: "در غیر این صورت، می‌توانید به ",
    ElseGoToHome_2: "صفحه اصلی بروید.",

    CreateAcconut: "ایجاد حساب کاربری",
    ContinueWithDots: "ادامه با ...",
    SignUp: "پیوستن",
    LogIn: "ورود",
    LogInWithPwd: "ورود با رمز عبور",
    CreateAdmAcct: "ایجاد حساب مدیر:",
    AuthRequired: "برای دسترسی به این سایت احراز هویت لازم است",
    LogInToLike: "برای لایک کردن این نوشته وارد شوید",
    LogInToSubmit: "وارد شوید و ارسال کنید",
    LogInToComment: "برای نوشتن دیدگاه وارد شوید",
    LogInToCreateTopic: "برای ایجاد موضوع وارد شوید",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "یا ",         // "Or "
    OrLogIn_2: "وارد شوید",      // "Log in" (this is a button)
    OrLogIn_3: " به جای آن",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "یا ",
    SignUpInstead_2: "ایجاد حساب کاربری", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: "، یا فقط ",
    OrTypeName_2: "یک نام تایپ کنید",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "یا ایجاد حساب کاربری:",
    OrTypeName: "یا نام خود را تایپ کنید:",
    OrLogIn: "یا وارد شوید:",
    YourNameQ: "نام شما؟",

    BadCreds: "نام کاربری یا رمز عبور اشتباه است",

    UsernameOrEmailC: "نام کاربری یا ایمیل:",
    PasswordC: "رمز عبور:",
    ForgotPwd: "رمز عبور خود را فراموش کرده‌اید؟",

    NoPwd: "شما هنوز رمز عبوری انتخاب نکرده‌اید.",
    CreatePwd: "ایجاد رمز عبور",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "لطفاً به ما بگویید چه چیزی باعث نگرانی شما شده است.",
    ThanksHaveReported: "ممنون. شما آن را گزارش کردید. کارکنان انجمن بررسی خواهند کرد.",
    ReportComment: "گزارش دیدگاه",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "این نوشته حاوی داده‌های شخصی است، مثلاً نام واقعی کسی.",
    OptOffensive: "این نوشته حاوی محتوای توهین‌آمیز یا سوءاستفاده‌گرانه است.",
    OptSpam: "این نوشته یک تبلیغ ناخواسته است.",
    OptOther: "به دلیل دیگری به کارکنان درباره این نوشته اطلاع دهید.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "اگر وارد شده‌اید، می‌توانید با کلیک بر روی نام خود و سپس ",
    YouCanShowAgain_2: "آشکارسازی پیام‌های راهنما",
  },


  // Editor

  e: {
    SimilarTopicsC: "موضوعات مشابه:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "متاسفیم اما در حال حاضر می‌توانید فقط یک فایل را در هر بار بارگذاری کنید",
    PleaseFinishPost: "لطفاً ابتدا نوشتن نوشته خود را تمام کنید",
    PleaseFinishChatMsg: "لطفاً ابتدا نوشتن پیام گفتگو خود را تمام کنید",
    PleaseFinishMsg: "لطفاً ابتدا نوشتن پیام خود را تمام کنید",
    PleaseSaveEdits: "لطفاً ابتدا ویرایش‌های فعلی خود را ذخیره کنید",
    PleaseSaveOrCancel: "لطفاً ابتدا موضوع جدید خود را ذخیره یا لغو کنید",
    CanContinueEditing: "اگر دوباره ویرایشگر را باز کنید، می‌توانید به ویرایش متن خود ادامه دهید.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "لطفاً تمام متن را حذف نکنید. چیزی بنویسید.",
    PleaseWriteSth: "لطفاً چیزی بنویسید.",
    PleaseWriteTitle: "لطفاً عنوانی برای موضوع بنویسید.",
    PleaseWriteMsgTitle: "لطفاً عنوانی برای پیام بنویسید.",
    PleaseWriteMsg: "لطفاً پیامی بنویسید.",

    exBold: "متن ضخیم",
    exEmph: "متن تاکید شده",
    exPre: "متن پیش‌فرمت شده",
    exQuoted: "متن نقل‌قول شده",
    ExHeading: "عنوان",

    TitlePlaceholder: "عنوانی تایپ کنید — این موضوع در یک جمله کوتاه درباره چیست؟",

    EditPost_1: "ویرایش ",
    EditPost_2: "نوشته ",

    TypeChatMsg: "یک پیام گفتگو تایپ کنید:",
    YourMsg: "پیام شما:",
    CreateTopic: "ایجاد موضوع جدید",
    CreateCustomHtml: "ایجاد یک صفحه HTML سفارشی (عنوان <h1> خود را اضافه کنید)",
    CreateInfoPage: "ایجاد یک صفحه اطلاعات",
    CreateCode: "ایجاد یک صفحه کد منبع",
    AskQuestion: "پرسیدن یک پرسش",
    ReportProblem: "گزارش یک مشکل",
    SuggestIdea: "پیشنهاد یک ایده",
    NewChat: "عنوان و هدف گفتگو",
    NewPrivChat: "عنوان و هدف گفتگوی خصوصی",
    AppendComment: "افزودن یک دیدگاه در پایین صفحه:",

    ReplyTo: "پاسخ به ",
    ReplyTo_theOrigPost: "نوشته اصلی",
    ReplyTo_post: "نوشته ",
    AddCommentC: "افزودن یک دیدگاه:",

    PleaseSelectPosts: "لطفاً یک یا چند نوشته را برای پاسخ دادن انتخاب کنید.",

    Save: "ذخیره",
    edits: "ویرایش‌ها",

    PostReply: "ارسال پاسخ",
    PostComment: "ارسال دیدگاه",

    Post: "ارسال",
    comment: "دیدگاه",
    question: "پرسش",

    PostMessage: "ارسال پیام",
    SimpleEditor: "ویرایشگر ساده",

    Send: "ارسال",
    message: "پیام",

    Create: "ایجاد",
    page: "صفحه",
    chat: "گفتگو",
    idea: "ایده",
    topic: "موضوع",

    Submit: "ارسال",
    problem: "مشکل",

    ViewOldEdits: "مشاهده ویرایش‌های قدیمی",

    UploadBtnTooltip: "بارگذاری یک فایل یا تصویر",
    BoldBtnTooltip: "ضخیم کردن متن",
    EmBtnTooltip: "تاکید",
    QuoteBtnTooltip: "نقل‌قول",
    PreBtnTooltip: "متن پیش‌فرمت شده",
    HeadingBtnTooltip: "عنوان",

    TypeHerePlaceholder: "اینجا تایپ کنید. می‌توانید از Markdown و HTML استفاده کنید. برای چسباندن تصاویر بکشید و رها کنید.",

    Maximize: "بزرگ کردن",
    ToNormal: "بازگشت به حالت عادی",
    TileHorizontally: "چیدمان افقی",

    PreviewC: "پیش‌نمایش:",
    TitleExcl: " (بدون عنوان)",
    ShowEditorAgain: "نمایش دوباره ویرایشگر",
    Minimize: "کوچک کردن",

    PreviewInfo: "اینجا می‌توانید پیش‌نمایش ظاهر نوشته خود را ببینید.",
    CannotType: "نمی‌توانید اینجا تایپ کنید.",

    LoadingDraftDots: "در حال بارگذاری پیش‌نویس...",
    DraftUnchanged: "بدون تغییر.",
    CannotSaveDraftC: "نمی‌توان پیش‌نویس را ذخیره کرد:",
    DraftSavedBrwsr: "پیش‌نویس در مرورگر ذخیره شد.",
    DraftSaved: (nr: string | number) => `پیش‌نویس ${nr} ذخیره شد.`,
    DraftDeleted: (nr: string | number) => `پیش‌نویس ${nr} حذف شد.`,
    WillSaveDraft: (nr: string | number) => `پیش‌نویس ${nr} ذخیره خواهد شد ...`,
    SavingDraft: (nr: string | number) => `در حال ذخیره پیش‌نویس ${nr} ...`,
    DeletingDraft: (nr: string | number) => `در حال حذف پیش‌نویس ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "انتخاب دسته",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "انتخاب نوع موضوع:",
    DiscussionExpl: "یک بحث درباره چیزی.",
    QuestionExpl: "یک پاسخ می‌تواند به عنوان پاسخ پذیرفته شده علامت‌گذاری شود.",
    ProblExpl: "اگر چیزی خراب است یا کار نمی‌کند. می‌تواند به عنوان رفع/حل شده علامت‌گذاری شود.",
    IdeaExpl: "یک پیشنهاد. می‌تواند به عنوان انجام/پیاده‌سازی شده علامت‌گذاری شود.",
    ChatExpl: "یک گفتگوی شاید بی‌پایان.",
    PrivChatExpl: "فقط برای افرادی که برای پیوستن به گفتگو دعوت شده‌اند قابل مشاهده است.",

    CustomHtml: "صفحه HTML سفارشی",
    InfoPage: "صفحه اطلاعات",
    Code: "کد",
    EmbCmts: "دیدگاه‌های تعبیه شده",
    About: "درباره",
    PrivChat: "گفتگوی خصوصی",
    Form: "فرم",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "مجموعه دیگری برای پیوستن وجود ندارد.",
    SelCmty: "انتخاب مجموعه ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "جستجو برای راهنما",
    TxtToFind: "متن برای جستجو",
  },


  // No internet

  ni: {
    NoInet: "بدون اتصال به اینترنت",
    PlzRefr: "برای دیدن آخرین تغییرات صفحه را رفرش کنید. (اتصال قطع شده بود)",
    RefrNow: "رفرش در حال حاضر",
  },


  PostDeleted: (postNr: number) => `آن نوشته، شماره ${postNr}، حذف شده است.`,
  NoSuchPost: (postNr: number) => `نوشته شماره ${postNr} در این صفحه وجود ندارد.`,
  NoPageHere: "این صفحه حذف شده است، یا هرگز وجود نداشته است، یا ممکن است به آن دسترسی داشته باشید.",
  GoBackToLastPage: "بازگشت به صفحه قبل",

};
