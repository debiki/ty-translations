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

var t_ckb_IQ: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "چالاک",
  Activity: "چالاکی",
  Add: "زیادکردن",
  AddingDots: "زیادکردن ...",
  AddComment: "زیادکردنی کۆمێنت",
  Admin: "بەڕێوەبەر",
  AdvSearch: "گەڕانی پێشکەوتوو",
  Anonym: "بێناو",
  Away: "دوور",
  Back: "دواوە",
  BlogN: "بلۆگ",
  Bookmarks: "نیشانەکراوەکان",
  Cancel: "هەڵوەشاندنەوە",
  Categories: "هاوپۆلەکان",
  Category: "هاوپۆل",
  ChangeV: "گۆڕین",
  ClickToShow: "کرتە بکە بۆ پیشاندان",
  ChangeDots: "گۆڕین ...",
  ChatN: "چات",
  Chatting: "چاتکردن",
  CheckYourEmail: "ئیمەیڵەکەت بپشکنە",
  Close: "داخستن",
  closed: "داخراو",
  comments: "کۆمێنتەکان",   // as in:  "123 comments"
  Continue: "بەردەوامبە",
  Created: "دروستکراوە",
  Delete: "سڕینەوە",
  Deleted: "سڕاوەتەوە",
  DirectMessage: "نامەی ڕاستەوخۆ",
  Discussion: "گفتوگۆ",
  discussion: "گفتوگۆ",
  done: "تەواو",
  EditV: "دەستکاریکردن",
  Editing: "دەستکاریکردن",
  EmailC: "ئیمەیڵ: ",
  EmailAddress: "ناونیشانی ئیمەیڵ",
  EmailAddresses: "ناونیشانەکانی ئیمەیڵ",
  EmailSentD: "ئیمەیڵ نێردرا.",
  Forum: "مەکۆ",
  GetNotifiedAbout: "ئاگاداربەرەوە دەربارەی",
  GroupsC: "گروپەکان:",
  Hide: "شاردنەوە",
  Home: "سەرەکی",
  Idea: "بیرۆکە",
  Join: "بەشداربە",
  KbdShrtcsC: "کورتەبڕەکانی تەختەکلیل: ",
  Loading: "بارکردن...",
  LoadMore: "بارکردنی زیاتر ...",
  LogIn: "چوونەژوورەوە",
  LoggedInAs: "چوویتەتە ژوورەوە وەک ",
  LogOut: "چوونەدەرەوە",
  Maybe: "ڕەنگە",
  Manage: "بەڕێوەبردن",
  Members: "ئەندامان",
  MessageN: "نامە",
  MoreDots: "زیاتر...",
  Move: "گواستنەوە",
  Name: "ناو",
  NameC: "ناو:",
  NewTopic: "بابەتێکی نوێ",
  NoCancel: "نەخێر، هەڵوەشاندنەوە",
  Notifications: "ئاگادارکردنەوەکان",
  NotImplemented: "(جێبەجێ نەکراوە)",
  NotYet: "هێشتا نا",
  NoTitle: "بێ ناونیشان",
  NoTopics: "هیچ بابەتێک نییە.",
  Okay: "باشە",
  OkayDots: "باشە ...",
  Online: "ئۆنلاین",
  onePerLine: "دانەیەک لە هەر دێڕێکدا",
  PreviewV: "پێشبینین",
  Problem: "کێشە",
  progressN: "پێشکەوتن",
  Question: "پرسیار",
  Recent: "دوایینەکان",
  Remove: "لابردن",
  Reopen: "دووبارە کردنەوە",
  ReplyV: "وەڵامدانەوە",
  Replying: "وەڵامدانەوە",
  Replies: "وەڵامەکان",
  replies: "وەڵامەکان",
  Save: "پاشکەوتکردن",
  SavingDots: "پاشکەوتکردن ...",
  SavedDot: "پاشکەوتکرا.",
  Search: "گەڕان",
  SendMsg: "ناردنی نامە",
  ShowPreview: "پیشاندانی پێشبینین",
  SignUp: "بەشداربە",  // don't change to "Sign Up" [join_or_signup]
  Solution: "چارەسەر",
  started: "دەستی پێکرد",
  Summary: "پوختە",
  Submit: "ناردن",
  Tag: "تاگ",
  Tags: "تاگەکان",
  Tools: "ئامرازەکان",
  Topics: "بابەتەکان",
  TopicTitle: "ناونیشانی بابەت",
  TopicType: "جۆری بابەت",
  UploadingDots: "بارکردن...",
  Username: "ناوی بەکارهێنەر",
  Users: "بەکارهێنەران",
  Welcome: "بەخێربێن",
  Wiki: "ویکی",
  Yes: "بەڵێ",
  YesBye: "بەڵێ، ماڵئاوا",
  YesDoThat: "بەڵێ، ئەوە بکە",
  You: "تۆ",
  you: "تۆ",

  // Trust levels.
  Guest:  "میوان",
  NewMember: "ئەندامی نوێ",
  BasicMember: "ئەندامی سەرەتایی",
  FullMember: "ئەندامی تەواو",
  TrustedMember: "ئەندامی جێی متمانە",
  RegularMember: "ئەندامی جێی متمانەی هەمیشەیی",
  CoreMember: "ئەندامی سەرەکی",

  // Periods.
  PastDay: "ڕۆژی ڕابردوو",
  PastWeek: "هەفتەی ڕابردوو",
  PastMonth: "مانگی ڕابردوو",
  PastQuarter: "سێ مانگی ڕابردوو",
  PastYear: "ساڵی ڕابردوو",
  AllTime: "هەموو کاتێک",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "مانگ",  // months
  daysLtr: "ڕ",      // days
  hoursLtr: "ک",     // hours
  minsLtr: "خ",      // minutes
  secsLtr: "چ",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "پێش ١ ڕۆژ" : `پێش ${numDays} ڕۆژ`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "پێش ١ کاتژمێر" : `پێش ${numHours} کاتژمێر`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "پێش ١ خولەک" : `پێش ${numMins} خولەک`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "پێش ١ چرکە" : `پێش ${numSecs} چرکە`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "ئیمەیڵ پێویستە",
    NoSpcs: "تکایە بۆشایی بەکارمەهێنە",
    InvldAddr: "ناونیشانی ئیمەیڵەکە دروست نییە",
    NoBadChrs: "تکایە پیتە نامۆکان بەکارمەهێنە",

    // Full name input field:
    NotOnlSpcs: "تکایە تەنها بۆشایی نەبێت",
    NoAt: "تکایە @ بەکارمەهێنە",

    // Username input field:
    NoDash: "تکایە هێمای (-) بەکارمەهێنە",
    DontInclAt: "@ لەگەڵ مەبە",
    StartEndLtrDgt: "بە پیت یان ژمارە دەست پێ بکە و کۆتایی پێ بهێنە",
    OnlLtrNumEtc: "تەنها پیتەکان (a-z, A-Z) و ژمارەکان و _ (underscore)",
    // This shown just below the username input:
    UnUnqShrt_1: "ناوی ",
    UnUnqShrt_2: "@username",
    UnUnqShrt_3: "ی تۆ، بێهاوتا و کورت",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `دەبێت بە لایەنی کەم ${minLength} پیت بێت`,
    TooLong: (maxLength: number) => `زۆر درێژە. دەبێت بە لایەنی زۆر ${maxLength} پیت بێت`,
  },


  // Notification levels.

  nl: {
    EveryPost: "هەموو پۆستەکان",
    EveryPostInTopic: "ئاگاداری هەموو وەڵامە نوێیەکان دەبیتەوە لەم بابەتەدا.",
    EveryPostInCat: "ئاگاداری هەموو بابەت و وەڵامە نوێیەکان دەبیتەوە لەم هاوپۆلەدا.",
    EveryPostInTopicsWithTag: "ئاگاداری بابەتە نوێیەکان دەبیتەوە بەم تاگەوە، و هەموو وەڵامەکان لەو بابەتانەدا.",
    EveryPostWholeSite: "ئاگاداری هەموو بابەت و وەڵامە نوێیەکان دەبیتەوە لە هەموو شوێنێک.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "بابەتە نوێیەکان",
    NewTopicsInCat: "ئاگاداری بابەتە نوێیەکان دەبیتەوە لەم هاوپۆلەدا.",
    NewTopicsWithTag: "ئاگاداری بابەتە نوێیەکان دەبیتەوە بەم تاگەوە.",
    NewTopicsWholeSite: "ئاگاداری بابەتە نوێیەکان دەبیتەوە لە هەموو شوێنێک.",

    Tracking: "شوێنکەوتن",

    Normal: "ئاسایی",
    NormalDescr: "ئاگاداردەکرێیتەوە ئەگەر کەسێک قسەت لەگەڵ بکات، هەروەها بە ناڕاستەوخۆ، بۆ نموونە وەڵامێک بۆ وەڵامەکەت.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "بێدەنگ",
    HushedDescr: "تەنها کاتێک ئاگاداردەکرێیتەوە کە کەسێک ڕاستەوخۆ قسەت لەگەڵ بکات.",

    Muted: "کپکراو",
    MutedTopic: "هیچ ئاگادارکردنەوەیەک نییە.",
  },


  // Forum intro text

  fi: {
    Edit: "دەستکاریکردن",
    Hide_1: "شاردنەوە",
    Hide_2: "، کرتە بکە لە ",
    Hide_3: " بۆ دووبارە کردنەوە",
  },


  // Forum categories

  fcs: {
    All: "هەموو", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "لیستی بابەتەکان",

    // Select category dropdown

    from: "لە",
    in: "لە",
    AllCats: "هەموو هاوپۆلەکان",

    // Topic sort order

    Active: "چالاکترین سەرەتا",
    ActiveDescr: "بابەتە چالاکەکانی ئەم دواییانە سەرەتا پیشان دەدات",

    New: "نوێ",
    NewDescr: "نوێترین بابەتەکان سەرەتا پیشان دەدات",

    Top: "بەناوبانگ",
    TopDescr: "بابەتە بەناوبانگەکان سەرەتا پیشان دەدات",

    // Topic filter dropdown

    AllTopics: "هەموو بابەتەکان",

    ShowAllTopics: "پیشاندانی هەموو بابەتەکان",
    ShowAllTopicsDescr: "بابەتە سڕاوەکان ناگرێتەوە",

    WaitingTopics: "بابەتە چاوەڕوانکراوەکان",
    OnlyWaitingDescr_1: "تەنها ئەو بابەتانە پیشان دەدات کە ",
    OnlyWaitingDescr_2: "چاوەڕوانن ",
    OnlyWaitingDescr_3: "بۆ چارەسەرێک یان بۆ جێبەجێکردن و تەواوکردن",

    YourTopics: "بابەتەکانی تۆ",
    AssignedToYou: "سپێردراو بە تۆ",

    DeletedTopics: "پیشاندانی سڕاوەکان",
    ShowDeleted: "پیشاندانی سڕاوەکان",
    ShowDeletedDescr: "هەموو بابەتەکان پیشان دەدات، بە بابەتە سڕاوەکانیشەوە",

    // Rightmost buttons

    ViewCategories: "بینینی هاوپۆلەکان",
    EditCat: "دەستکاریکردنی هاوپۆل",
    CreateCat: "دروستکردنی هاوپۆل",
    CreateTopic: "دروستکردنی بابەت",
    PostIdea: "ناردنی بیرۆکەیەک",
    AskQuestion: "پرسیار بکە",
    ReportProblem: "ڕاپۆرتکردنی کێشەیەک",
    CreateMindMap: "دروستکردنی نەخشەی مێشک",
    CreatePage: "دروستکردنی پەڕە",

  },


  // Forum topic list

  ft: {
    ExplIcons: "ڕوونکردنەوەی ئایکۆنەکان...",
    IconExplanation: "ڕوونکردنەوەی ئایکۆن:",
    ExplGenDisc: "گفتوگۆیەکی گشتی.",
    ExplQuestion: "پرسیارێک بێ وەڵامی پەسەندکراو.",
    ExplAnswer: "پرسیارێک بە وەڵامێکی پەسەندکراو.",
    ExplIdea: "بیرۆکەیەک / پێشنیارێک.",
    ExplProblem: "کێشەیەک.",
    ExplPlanned: "شتێک کە پلانمان هەیە بیکەین یان چاکی بکەین.",
    ExplDone: "شتێک کە کراوە یان چاک کراوە.",
    ExplClosed: "بابەت داخراوە.",
    ExplPinned: "بابەت هەمیشە لە سەرەتا لیست دەکرێت (ڕەنگە تەنها لە هاوپۆلەکەی خۆیدا).",

    PopularTopicsComma: "بابەتە بەناوبانگەکان، ",
    TopFirstAllTime: "بەناوبانگترین بابەتەکان سەرەتا پیشان دەدات، بۆ هەموو کاتێک.",
    TopFirstPastDay: "ئەو بابەتانە پیشان دەدات کە لە ماوەی ڕۆژی ڕابردوودا بەناوبانگ بوون.",

    CatHasBeenDeleted: "ئەم هاوپۆلە سڕاوەتەوە",

    TopicsActiveFirst: "بابەتەکان، چالاکترینەکان سەرەتا",
    TopicsNewestFirst: "بابەتەکان، نوێیەکان سەرەتا",

    CreatedOn: "دروستکراوە لە ",
    LastReplyOn: "\nدواهەمین وەڵام لە ",
    EditedOn: "\nدەستکاریکراوە لە ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "بابەتەکەی دروست کردووە",
    frequentPoster: "پۆستکەری هەمیشەیی",
    mostRecentPoster: "نوێترین پۆستکەر",

    inC: "لە: ",

    TitleFixed: "ئەمە چاککراوە",
    TitleDone: "ئەمە ئەنجامدراوە",
    TitleStarted: "دەستمان بەمە کردووە",
    TitleStartedFixing: "دەستمان بە چاککردنی ئەمە کردووە",
    TitleUnsolved: "ئەمە کێشەیەکی چارەسەر نەکراوە",
    TitleIdea: "ئەمە بیرۆکەیەکە",
    TitlePlanningFix: "پلانمان هەیە ئەمە چاک بکەین",
    TitlePlanningDo: "پلانمان هەیە ئەمە ئەنجام بدەین",
    TitleChat: "ئەمە کەناڵێکی چاتە",
    TitlePrivateChat: "ئەمە کەناڵێکی چاتی تایبەتە",
    TitlePrivateMessage: "نامەیەکی تایبەت",
    TitleInfoPage: "ئەمە پەڕەیەکی زانیارییە",
    TitleDiscussion: "گفتوگۆیەک",
    IsPinnedGlobally: "\nپێوەکراوە، بۆیە لە سەرەتا لیست کراوە.",
    IsPinnedInCat: "\nلە هاوپۆلەکەیدا پێوەکراوە، بۆیە لە سەرەتا لیست کراوە لەو هاوپۆلەدا.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "بابەتە نوێیەکان (ئەوانەی چاوەڕوانن)",
    RecentTopicsInclDel: "بابەتە نوێیەکان (بە سڕاوەکانیشەوە)",
    RecentTopics: "بابەتە نوێیەکان",
    _replies: " وەڵامەکان",
    _deleted: " (سڕاوەتەوە)",
    _defCat: " (هاوپۆلی بنەڕەتی)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "پۆستە نوێیەکان",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " ئۆنلاین لەم چاتەدا",    // example: "5 online in this chat"
    NumOnlForum: " ئۆنلاین لەم مەکۆیەدا",

    // Open left-sidebar button title.
    WatchbBtn: "بابەتەکانی تۆ",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "بابەتە نوێیەکانت، چاتە بەشداربووەکان، نامە ڕاستەوخۆکان",

    // Title shown on user profile pages.
    AbtUsr: "دەربارەی بەکارهێنەر",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "گەڕانەوە لە پرۆفایلی بەکارهێنەر",
    BackFromAdm: "گەڕانەوە لە ناوچەی بەڕێوەبەر",

    // Title shown on full text search page.
    SearchPg: "پەڕەی گەڕان",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "زیادکردن ...",
    RecentlyViewed: "بابەتە بینراوەکانی ئەم دواییە",
    JoinedChats: "چاتە بەشداربووەکان",
    ChatChannels: "که ناڵەکانی چات",
    CreateChat: "دروستکردنی کەناڵی چات",
    DirectMsgs: "نامە ڕاستەوخۆکان",
    NoChats: "هیچ",    // meaning: "No chat messages"
    NoDirMsgs: "هیچ",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "کردەرەکانی بابەت",
    ViewPeopleHere: "بینینی کەسەکان لێرە",
    ViewAddRemoveMembers: "بینین / زیادکردن / لابردنی ئەندامان",
    ViewChatMembers: "بینینی ئەندامانی چات",
    EditChat: "دەستکاریکردنی وەسفی چات",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "جێهێشتنی ئەم چاتە",
    LeaveThisCommunity: "جێهێشتنی ئەم کۆمەڵگەیە",
    JoinThisCommunity: "بەشداربوون لەم کۆمەڵگەیە",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "کۆمێنتە نوێیەکان لەم بابەتەدا:",
    NoComments: "هیچ کۆمێنتێک نییە.",

    YourBookmarks: "نیشانەکراوەکانی تۆ:",

    UsersOnline: "بەکارهێنەرانی ئۆنلاین:",
    UsersOnlineForum: "بەکارهێنەرانی ئۆنلاین لەم مەکۆیەدا:",
    UsersInThisChat: "بەکارهێنەران لەم چاتەدا:",
    UsersInThisTopic: "بەکارهێنەران لەم بابەتەدا:",

    GettingStartedGuide: "ڕێبەری بەڕێوەبەر",
    AdminGuide: "ڕێبەری بەڕێوەبەر",
    Guide: "ڕێبەر",

    // How to hide the sidebar.
    CloseShortcutS: "داخستن (کورتەبڕی تەختەکلیل: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "زیادکردنی کەسی زیاتر",

    // Shown next to one's own username, in a list of users.
    thatsYou: "ئەوە تۆیت",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "تەنها تۆ، وادیارە",
    YouAnd: "تۆ، و ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " کەس" : " کەس";
      const have = numStrangers === 1 ? "" : "ن";
      return numStrangers + people + " کە هێشتا نەچووە" + have + "تە ژوورەوە";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "وەڵامەکانی لای چەپ ڕەنگە ڕیزبەند کرابن بەپێی ",
    bestFirst: "باشترینەکان سەرەتا.",
    ButBelow: "بەڵام لە خوارەوە ",
    insteadBy: " هەمان وەڵامەکان لەبری ئەوە ڕیزبەند کراون بەپێی ",
    newestFirst: "نوێترینەکان سەرەتا.",

    SoIfLeave: "کەواتە ئەگەر لێرە بڕۆیت و دواتر بگەڕێیتەوە، لە خوارەوە دەیدۆزیتەوە ",
    allNewReplies: "هەموو وەڵامە نوێیەکان.",
    Click: "کرتە بکە لە",
    aReplyToReadIt: " وەڵامێک بۆ خوێندنەوەی - چونکە تەنها کورتەیەکی پیشان دراوە لە خوارەوە.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "کرتە بکە بۆ گۆڕینی بارودۆخ",
    ClickToViewAnswer: "کرتە بکە بۆ بینینی وەڵام",
    ViewAnswer: "بینینی وەڵام",
    ChangeStatusC: "گۆڕینی بارودۆخ بۆ:",
    ChangeCatC: "گۆڕینی هاوپۆل:",
    ChangeTopicTypeC: "گۆڕینی جۆری بابەت:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "پرسیارێک",
    hasAccptAns: "وەڵامێکی پەسەندکراوی هەیە",
    aProblem: "کێشەیەک",
    planToFix: "پلان بۆ چاککردن",
    anIdea: "بیرۆکەیەک",
    planToDo: "پلان بۆ ئەنجامدان",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "ئەم فۆرمە ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "داخراوە؛ چیتر ناتوانیت پڕی بکەیتەوە و بینێریت.",

    ThisTopicClosed_1: "ئەم بابەتە ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". هێشتا دەتوانیت کۆمێنت بنێریت.",

    ThisPageDeleted: "ئەم پەڕەیە سڕاوەتەوە",
    CatDeldPageToo: "هاوپۆلەکە سڕاوەتەوە، بۆیە ئەم پەڕەیەش سڕاوەتەوە",

    ThreadDeld: "داو (Thread) سڕاوەتەوە",
    CmntDeld: "کۆمێنت سڕاوەتەوە",
    PostDeld: "پۆست سڕاوەتەوە",
    DiscDeld: "گفتوگۆ سڕاوەتەوە",
    PageDeld: "پەڕە سڕاوەتەوە",
    PagePendAppr: "پەڕە چاوەڕێی پەسەندکردنە",
    TitlePendAppr: "ناونیشان چاوەڕێی پەسەندکردنە",
    TextPendingApproval: "دەق چاوەڕێی پەسەندکردنە",

    TooltipQuestClosedNoAnsw: "ئەم پرسیارە داخراوە بەبێ هیچ وەڵامێکی پەسەندکراو.",
    TooltipTopicClosed: "ئەم بابەتە داخراوە.",

    TooltipQuestSolved: "ئەمە پرسیارێکی چارەسەرکراوە",
    TooltipQuestUnsolved: "ئەمە پرسیارێکی چارەسەر نەکراوە",

    StatusDone: "تەواو",
    TooltipProblFixed: "ئەمە چاککراوە",
    TooltipDone: "ئەمە ئەنجامدراوە",

    StatusStarted: "دەستی پێکردووە",
    TooltipFixing: "دەستمان کردووە بە چاککردنی ئەمە",
    TooltipImplementing: "دەستمان کردووە بە ئەنجامدنی ئەمە",

    StatusPlanned: "پلان بۆ داڕێژراو",
    TooltipProblPlanned: "پلانمان هەیە ئەمە چاک بکەین",
    TooltipIdeaPlanned: "پلانمان هەیە ئەمە ئەنجام بدەین",

    StatusNew: "نوێ",
    StatusNewDtl: "بابەتی نوێ، لە ژێر گفتوگۆدایە",
    TooltipUnsProbl: "ئەمە کێشەیەکی چارەسەر نەکراوە",
    TooltipIdea: "ئەمە بیرۆکەیەکە",

    TooltipPersMsg: "نامەی کەسی",
    TooltipChat: "# واتا کەناڵی چات",
    TooltipPrivChat: "ئەمە کەناڵێکی چاتی تایبەتە",

    TooltipPinnedGlob: "\nبە شێوەی گشتی پێوەکراوە.",
    TooltipPinnedCat: "\nلەو هاوپۆلەدا پێوەکراوە.",

    SolvedClickView_1: "چارەسەرکراوە لە پۆستی ژمارە #",
    SolvedClickView_2: "، کرتە بکە بۆ بینینی",

    PostHiddenClickShow: "پۆستەکە شاراوەیە؛ کرتە بکە بۆ پیشاندان",
    ClickSeeMoreRepls: "پیشاندانی وەڵامی زیاتر",
    ClickSeeMoreComments: "پیشاندانی کۆمێنتی زیاتر",
    ClickSeeThisComment: "کرتە بکە بۆ پیشاندانی ئەم کۆمێنتە",
    clickToShow: "کرتە بکە بۆ پیشاندان",

    ManyDisagree: "زۆر کەس هاوڕا نین لەگەڵ ئەمەدا:",
    SomeDisagree: "هەندێک کەس هاوڕا نین لەگەڵ ئەمەدا:",

    PendAppr: "چاوەڕێی پەسەندکردنە",
    CmtPendAppr: "کۆمێنت چاوەڕێی پەسەندکردنە، نێردراوە ",
    CmtBelowPendAppr: (isYour) => (isYour ? "کۆمێنتەکەت" : "کۆمێنتەکە") + " لە خوارەوە چاوەڕێی پەسەندکردنە.",

    _and: " و",

    repliesTo: "وەڵامەکان بۆ",
    InReplyTo: "وەک وەڵامێک بۆ",
    YourReplyTo: "وەڵامەکەت بۆ ",
    YourChatMsg: "نامەی چاتەکەت: ",
    YourDraft: "ڕەشنووسەکەت",
    YourEdits: "دەستکارییەکانت: ",
    YourProgrNoteC: "تێبینی پێشکەوتنت:",
    aProgrNote: "تێبینییەکی پێشکەوتن: ",

    ReplyingToC: "وەڵامدانەوەی:",
    ScrollToPrevw_1: "بڕۆ بۆ ",
    ScrollToPrevw_2: "پێشبینین",

    UnfinEdits: "دەستکارییە تەواو نەکراوەکان",
    ResumeEdting: "بەردەوامبوون لە دەستکاریکردن",
    DelDraft: "سڕینەوەی ڕەشنووس",

    ClickViewEdits: "کرتە بکە بۆ بینینی دەستکارییە کۆنەکان",

    By: "لە لایەن ", // ... someones name

    // Discussion ...
    aboutThisIdea: "دەربارەی چۆنیەتی و ئەگەری ئەنجامدانی ئەم بیرۆکەیە",
    aboutThisProbl: "دەربارەی چۆنیەتی و ئەگەری چاککردنی ئەم کێشەیە",

    AddProgrNote: "زیادکردنی تێبینی پێشکەوتن",
    // Progress ...
    withThisIdea: "لەگەڵ ئەنجامدانی ئەم بیرۆکەیە",
    withThisProbl: "لەگەڵ مامەڵەکردن لەگەڵ ئەم کێشەیە",
    withThis: "لەگەڵ ئەنجامدانی ئەمە",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "ئاگادارکردنەوەکان دەربارەی ئەم بابەتە:",

    // If is a direct message topic, members listed below this text.
    Msg: "نامە",

    SmrzRepls: "کورتەکردنی وەڵامەکان",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `ژمارەی وەڵامەکان ${numReplies} وەڵامە. کاتی خەمڵێنراو بۆ خوێندنەوە: ${minutes} خولەک`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `تەواو. کورتەی ${numSummarized} وەڵام کرا، لە کۆی ${numShownBefore} وەڵام کە پێشتر پیشان درابوون.`,
  },


  // Post actions

  pa: {
    CloseTopic: "داخستنی بابەت",
    CloseOwnQuestionTooltip: "ئەم پرسیارە دابخە ئەگەر چیتر پێویستت بە وەڵام نییە.",
    CloseOthersQuestionTooltip: "ئەم پرسیارە دابخە ئەگەر پێویستی بە وەڵام نییە، بۆ نموونە ئەگەر لە دەرەوەی بابەت بێت یان پێشتر لە بابەتێکی تردا وەڵام درابێتەوە.",
    CloseToDoTooltip: "ئەم کارە دابخە ئەگەر پێویست بە ئەنجامدان یان چاککردن ناکات.",
    CloseTopicTooltip: "ئەم بابەتە دابخە ئەگەر پێویستی بە لێکۆڵینەوەی زیاتر نییە.",

    AcceptBtnExpl: "ئەمە وەک وەڵامی پرسیارەکە یان کێشەکە پەسەند بکە",
    SolutionQ: "چارەسەر؟",
    ClickUnaccept: "کرتە بکە بۆ لادانی پەسەندکردنی ئەم وەڵامە",
    PostAccepted: "ئەم پۆستە وەک وەڵام پەسەندکراوە",

    NumLikes: (num: number) => num === 1 ? "١ لایک" : num + " لایک",
    NumDisagree: (num: number) => num + " هاوڕا نین",
    NumBury: (num: number) => num === 1 ? "١ شاراوە" : num + " شاراوە",
    NumUnwanted: (num: number) => num === 1 ? "١ نەخوازراو" : num + " نەخوازراو",

    MoreVotes: "دەنگی زیاتر...",
    LikeThis: "لایککردنی ئەمە",
    LinkToPost: "بەستەر بۆ ئەم پۆستە",
    Report: "ڕاپۆرتکردن",
    ReportThisPost: "ڕاپۆرتکردنی ئەم پۆستە",
    Admin: "بەڕێوەبەر",
    DiscIx: "پێڕستی گفتوگۆکان",

    Disagree: "هاوڕا نیم",
    DisagreeExpl: "لێرە کرتە بکە ئەگەر هاوڕا نیت لەگەڵ ئەم پۆستەدا، یان بۆ ئاگادارکردنەوەی کەسانی تر لە هەڵەی زانیارییەکان.",
    Bury: "شاردنەوە",
    BuryExpl: "کرتە بکە بۆ ڕیزبەندکردنی پۆستەکانی تر پێش ئەم پۆستە. تەنها ستافی مەکۆ دەتوانن دەنگەکەت ببینن.",
    Unwanted: "نەخوازراو",
    UnwantedExpl: "ئەگەر ئەم پۆستەت لەم ماڵپەڕەدا ناوێت. ئەمە متمانەی من بە نووسەری پۆستەکە کەمدەکاتەوە. تەنها ستافی مەکۆ دەتوانن دەنگەکەت ببینن.",

    AddTags: "زیادکردن/لابردنی تاگەکان",
    UnWikify: "لادان لە ویکی",
    Wikify: "کردن بە ویکی",
    PinDeleteEtc: "پێوەکردن / سڕینەوە / هاوپۆل ...",
  },


  // Share dialog

  sd: {
    Copied: "کۆپی کرا.",
    CtrlCToCopy: "کلیلی CTRL+C دابگرە بۆ کۆپیکردن.",
    ClickToCopy: "کرتە بکە بۆ کۆپیکردنی بەستەر.",
  },


  // Chat

  c: {
    About_1: "ئەمە کەناڵی چاتی ",
    About_2: "ە، دروستکراوە لە لایەن ",
    ScrollUpViewComments: "بەرەو سەرەوە بڕۆ بۆ بینینی کۆمێنتە کۆنەکان",
    Purpose: "مەبەست:",
    MessageDeleted: "(نامە سڕاوەتەوە)",
    JoinThisChat: "بەشداری لەم چاتەدا بکە",
    PostMessage: "ناردنی نامە",
    AdvancedEditor: "دەستکاریکەری پێشکەوتوو",
    TypeTitle: "ناونیشانێک بنووسە - ئەم چاتە دەربارەی چییە، بە چەند وشەیەکی کورت؟",
    TypePurpose: "مەبەستێک بنووسە - دەکرێت درێژتر بێت لە ناونیشانەکە، زیاتر ڕوونکەرەوە بێت.",
    TypeHere: "لێرە بنووسە. دەتوانیت Markdown و HTML بەکاربهێنیت.",
  },


  // My Menu

  mm: {
    NeedsReview: "پێویستی بە پێداچوونەوەیە ",
    AdminHelp: "یارمەتی بەڕێوەبەر ",
    StaffHelp: "یارمەتی ستاف ",
    DraftsEtc: "ڕەشنووسەکان، نیشانەکراوەکان، ئەرکەکان",
    MoreNotfs: "بینینی هەموو ئاگادارکردنەوەکان",
    DismNotfs: "دیاریکردنی هەموو وەک خوێندراوە",
    ViewProfile: "بینینی پرۆفایلەکەت",
    ViewGroups: "بینینی گروپەکان",
    LogOut: "چوونەدەرەوە",
    UnhideHelp: "دەرخستنەوەی پەیامە یارمەتیدەرەکان",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "بڕۆ بۆ:",
    Scroll: "بڕۆ",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "گ",
    Back_2: "ەڕانەوە",
    BackExpl: "گەڕانەوە بۆ شوێنی پێشووت لەم پەڕەیەدا",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "سەرەوەی پەڕە",
    PgTopHelp: "بڕۆ بۆ سەرەوەی پەڕە. کورتەبڕی تەختەکلیل: 1",
    Repl: "وەڵامەکان",
    ReplHelp: "بڕۆ بۆ بەشی وەڵامەکان. کورتەبڕ: 2",
    Progr: "پێشکەوتن",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "بڕۆ بۆ بەشی پێشکەوتن. کورتەبڕ: 3",
    PgBtm: "خوارەوەی پەڕە",
    Btm: "خوارەوە",
    BtmHelp: "بڕۆ بۆ خوارەوەی پەڕە. کورتەبڕ: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: "، و ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " بۆ گەڕانەوە",
  },


  // Select users dialog
  sud: {
    SelectUsers: "دیاریکردنی بەکارهێنەران",
    AddUsers: "زیادکردنی بەکارهێنەران",
  },


  // About user dialog

  aud: {
    IsMod: "سەرپەرشتیارە.",
    IsAdm: "بەڕێوەبەرە.",
    IsDeld: "ناچالاککراوە یان سڕاوەتەوە.",
    ThisIsGuest: "ئەمە بەکارهێنەرێکی میوانە، لەوانەیە هەر کەسێک بێت.",
    ViewInAdm: "بینین لە ناوچەی بەڕێوەبەر",
    ViewProfl: "بینینی پرۆفایل",
    ViewComments: "بینینی کۆمێنتەکانی تر",
    RmFromTpc: "لابردن لە بابەت",
    EmAdrUnkn: "ناونیشانی ئیمەیڵ نەزانراوە - ئەم میوانە ئاگاداری وەڵامەکان نابێتەوە.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "هەڵبژاردنەکان",
    Invites: "بانگهێشتنامەکان",
    DraftsEtc: "ڕەشنووسەکان و هتد",
    About: "دەربارەی",
    Privacy: "تایبەتمەندی",
    Security: "پاراستن",
    Account: "هەژمار",
    Interface: "ڕووکار",

    // ----- Overview stats

    JoinedC: "بەشداربووە لە: ",
    PostsMadeC: "پۆستە ئەنجامدراوەکان: ",
    LastPostC: "دواهەمین پۆست: ",
    LastSeenC: "دواهەمین بینین: ",
    TrustLevelC: "ئاستی متمانە: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "بارکردنی وێنە",
    ChangePhoto: "گۆڕینی وێنە",
    ImgTooSmall: "وێنەکە زۆر بچووکە: دەبێت بە لایەنی کەم ١٠٠ لە ١٠٠ بێت",

    // ----- Activity

    OnlyStaffCanSee: "تەنها ستاف و ئەندامانی سەرەکی جێی متمانە دەتوانن ئەمە ببینن.",
    OnlyMbrsCanSee: "تەنها ئەو کەسانەی بۆ ماوەیەک ئەندامی چالاک بوون دەتوانن ئەمە ببینن.",
    Nothing: "شتێک نییە بۆ پیشاندان",
    Posts: "پۆستەکان",
    NoPosts: "هیچ پۆستێک نییە.",
    Topics: "بابەتەکان",
    NoTopics: "هیچ بابەتێک نییە.",

    // ----- User status

    UserBanned: "ئەم بەکارهێنەرە قەدەغەکراوە",
    UserSuspended: (dateUtc: string) => `ئەم بەکارهێنەرە ڕاگیراوە تاوەکو ${dateUtc} UTC`,
    ReasonC: "هۆکار: ",

    DeactOrDeld: "ناچالاککراوە یان سڕاوەتەوە.",
    isGroup: " (گروپێک)",
    isGuest: " — بەکارهێنەرێکی میوان، دەکرێت هەر کەسێک بێت",
    isMod: " – سەرپەرشتیار",
    isAdmin: " – بەڕێوەبەر",
    you: "(تۆ)",

    // ----- Notifications page

    NoNotfs: "هیچ ئاگادارکردنەوەیەک نییە",
    NotfsToYouC: "ئاگادارکردنەوەکان بۆ تۆ:",
    NotfsToOtherC: (name: string) => `ئاگادارکردنەوەکان بۆ ${name}:`,
    DefNotfsSiteWide: "ئاگادارکردنەوە بنەڕەتییەکان، لە هەموو ماڵپەڕدا",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "بۆ",

    // ----- Drafts Etc page

    NoDrafts: "هیچ ڕەشنووسێک نییە",
    YourDraftsC: "ڕەشنووسەکانت:",
    DraftsByC: (name: string) => `ڕەشنووسەکان لە لایەن ${name}:`,

    // ----- Invites page

    InvitesIntro: "لێرەدا دەتوانیت کەسەکان بانگهێشت بکەیت بۆ بەشداربوون لەم ماڵپەڕەدا. ",
    InvitesListedBelow: "ئەو بانگهێشتنامانەی پێشتر ناردووتە لە خوارەوە لیست کراون.",
    NoInvites: "هێشتا هیچ کەسێکت بانگهێشت نەکردووە.",

    InvitedEmail: "ئیمەیڵی بانگهێشتکراو",
    WhoAccepted: "ئەندامی پەسەندکراو",
    InvAccepted: "بانگهێشتنامە پەسەندکرا",
    InvSent: "بانگهێشتنامە نێردرا",
    JoinedAlready: "پێشتر بەشداربووە",

    SendAnInv: "بانگهێشتکردنی کەسەکان",
    SendInv: "ناردنی بانگهێشتنامەکان",
    SendInvExpl:
        "ئیمەیڵێکی کورت بۆ هاوڕێکانت دەنێرین. ئەوان کرتە لە بەستەرێک دەکەن بۆ ئەوەی دەستبەجێ بەشدار بن، بەبێ ئەوەی پێویست بە چوونەژوورەوە بکات. " +
        "ئەوان دەبنە ئەندامی ئاسایی، نەک سەرپەرشتیار یان بەڕێوەبەر.",
    //EnterEmail: "Enter email(s)",
    InvDone: "تەواو. ئیمەیڵێکیان بۆ دەنێرم.",
    NoOneToInv: "کەس نییە بۆ بانگهێشتکردن.",
    InvNotfLater: "دواتر ئاگادارت دەکەمەوە کە کەی بانگهێشتم کردن.",
    AlreadyInvSendAgainQ: "ئەمانە پێشتر بانگهێشتکراون - ڕەنگە بتەوێت دووبارە بانگهێشتیان بکەیتەوە؟",
    InvErr_1: "ئەمانە بوونە هۆی ",
    InvErr_2: "هەڵەکان",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "ئەمانە پێشتر بەشداربوون، بۆیە بانگهێشتم نەکردن:",
    ResendInvsQ: "بانگهێشتنامەکان دووبارە بۆ ئەم کەسانە بنێردرێتەوە؟ پێشتر بانگهێشتکراون.",
    InvAgain: "بانگهێشتکردنەوە",

    // ----- Preferences, About

    AboutYou: "دەربارەی تۆ",
    WebLink: "هەر ماڵپەڕێک یان پەڕەیەکی خۆت.",

    NotShownCannotChange: "بە شێوەی گشتی پیشان نادرێت. ناتوانرێت بگۆڕدرێت.",

    // The full name or alias:
    NameOpt: "ناو (ئارەزوومەندانە)",

    NotShown: "بە شێوەی گشتی پیشان نادرێت.",

    // The username:
    MayChangeFewTimes: "دەتوانیت تەنها چەند جارێک بیگۆڕیت.",
    notSpecified: "(دیاری نەکراوە)",
    ChangeUsername_1: "دەتوانیت ناوی بەکارهێنەرت تەنها چەند جارێک بیگۆڕیت.",
    ChangeUsername_2: "گۆڕینی زۆر دەکرێت کەسانی تر سەری لێ بشێوێت - " +
        "ئەوان نازانن چۆن @mention بۆ تۆ بکەن.",

    NotfAboutAll: "ئاگاداربەرەوە دەربارەی هەموو پۆستێکی نوێ (مەگەر بابەتەکە یان هاوپۆلەکە کپ بکەیت)",
    NotfAboutNewTopics: "ئاگاداربەرەوە دەربارەی بابەتە نوێیەکان (مەگەر هاوپۆلەکە کپ بکەیت)",

    ActivitySummaryEmails: "ئیمەیڵەکانی پوختەی چالاکی",

    EmailSummariesToGroup:
        "کاتێک ئەندامانی ئەم گروپە لێرە سەردان ناکەن، ئەوا بە شێوەی بنەڕەتی، ئیمەیڵی پوختەی بابەتە بەناوبانگەکان و شتەکانی تریان بۆ بنێرە.",
    EmailSummariesToMe:
        "کاتێک من لێرە سەردان ناکەم، ئیمەیڵی پوختەی بابەتە بەناوبانگەکان و شتەکانی ترم بۆ بنێرە.",

    AlsoIfTheyVisit: "ئیمەیڵیان بۆ بنێرە هەروەها ئەگەر بە بەردەوامی لێرە سەردان دەکەن.",
    AlsoIfIVisit: "ئیمەیڵم بۆ بنێرە هەروەها ئەگەر بە بەردەوامی لێرە سەردان دەکەم.",

    HowOftenWeSend: "چەند جار ئەو ئیمەیڵانە بنێرین؟",
    HowOftenYouWant: "چەند جار ئەو ئیمەیڵانەت دەوێت؟",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "چالاکییەکانی ئەمدواییەت بشاردرێتەوە بۆ کەسانی نامۆ و ئەندامە نوێیەکان؟",
    HideActivityStrangers_2: "(بەڵام نەک بۆ ئەو کەسانەی کە بۆ ماوەیەک ئەندامی چالاک بوون.)",
    HideActivityAll_1: "چالاکییەکانی ئەمدواییەت بۆ هەمووان بشاردرێتەوە؟",
    HideActivityAll_2: "(جگە لە ستاف و ئەندامانی سەرەکی جێی متمانە.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "ناونیشانەکانی ئیمەیڵ",
    PrimaryDot: "سەرەکی. ",
    VerifiedDot: "پەسەندکراو. ",
    NotVerifiedDot: "پەسەند نەکراو. ",
    ForLoginWithDot: (provider: string) => `بۆ چوونەژوورەوە لەگەڵ ${provider}. `,
    MakePrimary: "بیکە بە سەرەکی",
    AddEmail: "زیادکردنی ناونیشانی ئیمەیڵ",
    TypeNewEmailC: "ناونیشانی ئیمەیڵێکی نوێ بنووسە:",
    MaxEmailsInfo: (numMax: number) => `(ناتوانیت زیاتر لە ${numMax} ناونیشان زیاد بکەیت.)`,
    EmailAdded_1: "زیادکرا. ئیمەیڵێکی پەسەندکردنمان بۆ ناردوویت - ",
    EmailAdded_2: "سندوقی نامەکانی ئیمەیڵەکەت بپشکنە.",
    SendVerifEmail: "ناردنی ئیمەیڵی پەسەندکردن",

    EmailStatusExpl:
        "('سەرەکی' واتا دەتوانیت لە ڕێگەی ئەم ناونیشانەوە بچیتە ژوورەوە، و ئێمە ئاگادارکردنەوەکان بۆ ئەمە دەنێرین. " +
        "'پەسەندکراو' واتا کرتەت لەسەر بەستەری پەسەندکردن کردووە لە ناو ئیمەیڵەکەدا.)",

    // Password:
    ChangePwdQ: "گۆڕینی وشەی نهێنی؟",
    CreatePwdQ: "دروستکردنی وشەی نهێنی؟",
    WillGetPwdRstEml: "ئیمەیڵێکی گۆڕینی وشەی نهێنیت بۆ دێت.",
    // This is the "None" in:  "Password: None"
    PwdNone: "هیچ",

    // Logins:
    LoginMethods: "ڕێگاکانی چوونەژوورەوە",
    commaAs: "، وەک: ",

    // One's data:
    YourContent: "ناوەڕۆکی تۆ",
    DownloadPosts: "داگرتنی پۆستەکان",
    DownloadPostsHelp: "فایلێکی JSON دروست دەکات بە کۆپییەکی ئەو بابەت و کۆمێنتانەی کە پۆستت کردوون.",
    DownloadPersData: "داگرتنی داتای کەسی",
    DownloadPersDataHelp: "فایلێکی JSON دروست دەکات بە کۆپییەکی داتا کەسییەکانت، بۆ نموونە ناوت " +
        "(ئەگەر ناوت دیاری کردبێت) و ناونیشانی ئیمەیڵت.",


    // Delete account:
    DangerZone: "ناوچەی مەترسیدار",
    DeleteAccount: "سڕینەوەی هەژمار",
    DeleteYourAccountQ:
        "هەژمارەکەت دەسڕیتەوە؟ ئێمە ناوت لادەبەین، ئیمەیڵ و وشەی نهێنی و هەر ناسنامەیەکی ئۆنلاین (وەک چوونەژوورەوەی فەیسبووک یان تویتەر) لەبیر دەکەین. " +
        "ناتوانیت دووبارە بچیتەوە ژوورەوە. ئەمە ناگەڕێتەوە دواوە.",
    DeleteUserQ:
        "ئەم بەکارهێنەرە دەسڕیتەوە؟ ئێمە ناوەکەی لادەبەین، ئیمەیڵ و وشەی نهێنی و ناسنامە ئۆنلاینەکانی لەبیر دەکەین. " +
        "بەکارهێنەرەکە ناتوانێت دووبارە بچێتەوە ژوورەوە. ئەمە ناگەڕێتەوە دواوە.",
    YesDelete: "بەڵێ، بسڕەوە",
  },


  // Group profile page
  gpp: {
    GroupMembers: "ئەندامانی گروپ",
    NoMembers: "هیچ ئەندامێک نییە.",
    MayNotListMembers: "ڕەنگە لیستی ئەندامان پیشان نەدرێت.",
    AddMembers: "زیادکردنی ئەندامان",
    BuiltInCannotModify: "ئەمە گروپێکی ناوەکییە؛ ناتوانرێت دەستکاری بکرێت.",
    NumMembers: (num: number) => `${num} ئەندام`,
    YouAreMember: "تۆ ئەندامیت.",
    CustomGroupsC: "گروپە دروستکراوەکان:",
    BuiltInGroupsC: "گروپە ناوەکییەکان:",
    DeleteGroup: "سڕینەوەی ئەم گروپە",
  },


  // Create user dialog

  cud: {
    CreateUser: "دروستکردنی بەکارهێنەر",
    CreateAccount: "دروستکردنی هەژمار",
    EmailC: "ئیمەیڵ:",
    keptPriv: "بە تایبەت دەهێڵرێتەوە",
    forNotfsKeptPriv: "بۆ ئاگادارکردنەوەی وەڵامەکان، بە تایبەت دەهێڵرێتەوە",
    EmailVerifBy_1: "ئیمەیڵەکەت پەسەندکراوە لە لایەن ",
    EmailVerifBy_2: ".",
    UsernameC: "ناوی بەکارهێنەر:",
    FullNameC: "ناوی تەواو:",
    optName: "ئارەزوومەندانە",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "هەژمار دروستکرا. چوویتە ژوورەوە.",  // COULD say if verif email sent too?
    AlmostDone:
        "خەریکە تەواو دەبێت! تەنها پێویستە ناونیشانی ئیمەیڵەکەت پشتڕاست بکەیتەوە. ئێمە " +
        "ئیمەیڵێکمان بۆ ناردوویت. تکایە کرتە لەسەر بەستەری ناو ئیمەیڵەکە بکە بۆ چالاککردنی " +
        "هەژمارەکەت. دەتوانیت ئەم پەڕەیە دابخەیت.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "مەرجەکان و تایبەتمەندی",

    Accept_1: "ئایا مەرجەکانی ",
    TermsOfService: "مەرجەکانی خزمەتگوزاری",
    TermsOfUse: "مەرجەکانی بەکارهێنان",
    Accept_2: " و ",
    PrivPol: "سیاسەتی تایبەتمەندی",
    Accept_3_User: "مان پەسەند دەکەیت؟",
    Accept_3_Owner: " بۆ خاوەن ماڵپەڕەکان؟",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "بەڵێ پەسەندی دەکەم",
  },


  // Password input

  pwd: {
    PasswordC: "وشەی نهێنی:",
    StrengthC: "هێز: ",
    FairlyWeak: "تا ڕادەیەک لاوازە.",
    toShort: "زۆر کورتە",
    TooShort: (minLength: number) => `زۆر کورتە. دەبێت بە لایەنی کەم ${minLength} پیت بێت`,
    PlzInclDigit: "تکایە ژمارەیەک یان هێمایەکی تایبەت بەکاربهێنە",
    TooWeak123abc: "زۆر لاوازە. وشەی نهێنی وەک '12345' یان 'abcde' بەکارمەهێنە.",
    AvoidInclC: "دووربکەوە لە بەکارهێنانی (بەشێکی) ناوت یان ئیمەیڵت لە وشەی نهێنیدا:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "پەڕەکە نەدۆزرایەوە، یان ڕێگری لە چوونەژوورەوە کرا.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "تۆ خۆت وەک کەسێکی تر نیشان داوە، کە لەوانەیە دەستی نەگات بە هەموو بەشەکانی " +
        "ئەم ماڵپەڕە.",

    IfYouThinkExistsThen: "ئەگەر پێت وایە پەڕەکە بوونی هەیە، وەک کەسێک بچۆ ژوورەوە کە ڕێگەی پێدراوە بیبینێت. ",
    LoggedInAlready: "(پێشتر چوویتەتە ژوورەوە، بەڵام ڕەنگە هەژمارە هەڵەکە بێت؟) ",
    ElseGoToHome_1: "ئەگینا، دەتوانیت ",
    ElseGoToHome_2: "بڕۆیت بۆ پەڕەی سەرەکی.",

    CreateAcconut: "دروستکردنی هەژمار",
    ContinueWithDots: "بەردەوامبە لەگەڵ ...",
    SignUp: "بەشداربە",
    LogIn: "چوونەژوورەوە",
    LogInWithPwd: "چوونەژوورەوە بە وشەی نهێنی",
    CreateAdmAcct: "دروستکردنی هەژماری بەڕێوەبەر:",
    AuthRequired: "بۆ چوونە ناو ئەم ماڵپەڕە پێویستە خۆت بناسێنیت",
    LogInToLike: "بچۆ ژوورەوە بۆ لایککردنی ئەم پۆستە",
    LogInToSubmit: "بچۆ ژوورەوە و بنێرە",
    LogInToComment: "بچۆ ژوورەوە بۆ نووسینی کۆمێنت",
    LogInToCreateTopic: "بچۆ ژوورەوە بۆ دروستکردنی بابەت",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "یان ",         // "Or "
    OrLogIn_2: "بچۆ ژوورەوە",      // "Log in" (this is a button)
    OrLogIn_3: " لەبری ئەوە",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "یان ",
    SignUpInstead_2: "دروستکردنی هەژمار", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: "، یان تەنها ",
    OrTypeName_2: "ناوێک بنووسە",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "یان لێرە هەژمار دروست بکە:",
    OrTypeName: "یان ناوت بنووسە:",
    OrLogIn: "یان بچۆ ژوورەوە:",
    YourNameQ: "ناوت؟",

    BadCreds: "ناوی بەکارهێنەر یان وشەی نهێنی هەڵەیە",

    UsernameOrEmailC: "ناوی بەکارهێنەر یان ئیمەیڵ:",
    PasswordC: "وشەی نهێنی:",
    ForgotPwd: "وشەی نهێنیت لەبیر چووە؟",

    NoPwd: "هێشتا وشەی نهێنیت هەڵنەبژاردووە.",
    CreatePwd: "دروستکردنی وشەی نهێنی",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "تکایە پێمان بڵێ چی نیگەرانی کردوویت.",
    ThanksHaveReported: "سوپاس. ڕاپۆرتت کرد. ستافی مەکۆ سەیری دەکەن.",
    ReportComment: "ڕاپۆرتکردنی کۆمێنت",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "ئەم پۆستە داتای کەسی تێدایە، بۆ نموونە ناوی ڕاستەقینەی کەسێک.",
    OptOffensive: "ئەم پۆستە ناوەڕۆکی سووکایەتی یان توندوتیژی تێدایە.",
    OptSpam: "ئەم پۆستە ڕیکلامێکی نەخوازراوە.",
    OptOther: "ئاگادارکردنەوەی ستاف دەربارەی ئەم پۆستە لەبەر هۆکارێکی تر.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "دەتوانیت پەیامە یارمەتیدەرەکان دووبارە پیشان بدەیتەوە، ئەگەر چوویتەتە ژوورەوە، بە " +
        "کرتەکردن لەسەر ناوت و پاشان ",
    YouCanShowAgain_2: "دەرخستنەوەی پەیامە یارمەتیدەرەکان",
  },


  // Editor

  e: {
    SimilarTopicsC: "بابەتە هاوشێوەکان:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "ببورە بەڵام لە ئێستادا تەنها دەتوانیت یەک فایل لە هەمان کاتدا بار بکەیت",
    PleaseFinishPost: "تکایە سەرەتا نووسینی پۆستەکەت تەواو بکە",
    PleaseFinishChatMsg: "تکایە سەرەتا نووسینی نامەی چاتەکەت تەواو بکە",
    PleaseFinishMsg: "تکایە سەرەتا نووسینی نامەکەت تەواو بکە",
    PleaseSaveEdits: "تکایە سەرەتا دەستکارییە ئێستاکانی خۆت پاشکەوت بکە",
    PleaseSaveOrCancel: "تکایە سەرەتا بابەتی نوێ پاشکەوت بکە یان هەڵیوەشێنەرەوە",
    CanContinueEditing: "دەتوانیت بەردەوام بیت لە دەستکاریکردنی دەقەکەت، ئەگەر دەستکاریکەرەکە دووبارە بکەیتەوە.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "تکایە هەموو دەقەکە مەسڕەوە. شتێک بنووسە.",
    PleaseWriteSth: "تکایە شتێک بنووسە.",
    PleaseWriteTitle: "تکایە ناونیشانێک بۆ بابەتەکە بنووسە.",
    PleaseWriteMsgTitle: "تکایە ناونیشانێک بۆ نامەکە بنووسە.",
    PleaseWriteMsg: "تکایە نامەیەک بنووسە.",

    exBold: "دەقی تۆخ",
    exEmph: "دەقی جەختلێکراو",
    exPre: "دەقی پێشوەختە ڕێکخراو",
    exQuoted: "دەقی وەرگیراو",
    ExHeading: "سەرەتا",

    TitlePlaceholder: "ناونیشانێک بنووسە - ئەمە دەربارەی چییە، بە یەک ڕستەی کورت؟",

    EditPost_1: "دەستکاریکردنی ",
    EditPost_2: "پۆستی ",

    TypeChatMsg: "نامەیەکی چات بنووسە:",
    YourMsg: "نامەکەت:",
    CreateTopic: "دروستکردنی بابەتی نوێ",
    CreateCustomHtml: "دروستکردنی پەڕەی HTMLی تایبەت (ناونیشانی <h1> زیاد بکە)",
    CreateInfoPage: "دروستکردنی پەڕەی زانیاری",
    CreateCode: "دروستکردنی پەڕەی کۆدی سەرچاوە",
    AskQuestion: "پرسیار بکە",
    ReportProblem: "ڕاپۆرتکردنی کێشەیەک",
    SuggestIdea: "پێشنیارکردنی بیرۆکەیەک",
    NewChat: "ناونیشان و مەبەستی چات",
    NewPrivChat: "ناونیشان و مەبەستی چاتی تایبەت",
    AppendComment: "زیادکردنی کۆمێنتێک لە کۆتایی پەڕەکەدا:",

    ReplyTo: "وەڵامدانەوە بۆ ",
    ReplyTo_theOrigPost: "پۆستی سەرەکی",
    ReplyTo_post: "پۆستی ",
    AddCommentC: "زیادکردنی کۆمێنت:",

    PleaseSelectPosts: "تکایە یەک پۆست یان زیاتر هەڵبژێرە بۆ وەڵامدانەوە.",

    Save: "پاشکەوتکردن",
    edits: "دەستکارییەکان",

    PostReply: "ناردنی وەڵام",
    PostComment: "ناردنی کۆمێنت",

    Post: "ناردن",
    comment: "کۆمێنت",
    question: "پرسیار",

    PostMessage: "ناردنی نامە",
    SimpleEditor: "دەستکاریکەری سادە",

    Send: "ناردن",
    message: "نامە",

    Create: "دروستکردن",
    page: "پەڕە",
    chat: "چات",
    idea: "بیرۆکە",
    topic: "بابەت",

    Submit: "ناردن",
    problem: "کێشە",

    ViewOldEdits: "بینینی دەستکارییە کۆنەکان",

    UploadBtnTooltip: "بارکردنی فایل یان وێنە",
    BoldBtnTooltip: "تۆخکردنی دەق",
    EmBtnTooltip: "جەختکردنەوە",
    QuoteBtnTooltip: "وەرگرتن",
    PreBtnTooltip: "دەقی پێشوەختە ڕێکخراو",
    HeadingBtnTooltip: "سەرەتا",

    TypeHerePlaceholder: "لێرە بنووسە. دەتوانیت Markdown و HTML بەکاربهێنیت. وێنەکان ڕابکێشە بۆ ئێرە.",

    Maximize: "گەورەکردن",
    ToNormal: "گەڕانەوە بۆ دۆخی ئاسایی",
    TileHorizontally: "ڕیزکردنی ئاسۆیی",

    PreviewC: "پێشبینین:",
    TitleExcl: " (ناونیشان ناگرێتەوە)",
    ShowEditorAgain: "پیشاندانەوەی دەستکاریکەر",
    Minimize: "بچووککردنەوە",

    PreviewInfo: "لێرە دەتوانیت پێشبینی بکەیت پۆستەکەت چۆن دەردەکەوێت.",
    CannotType: "ناتوانیت لێرە بنووسیت.",

    LoadingDraftDots: "بارکردنی هەر ڕەشنووسێک...",
    DraftUnchanged: "نەگۆڕاوە.",
    CannotSaveDraftC: "ناتوانرێت ڕەشنووس پاشکەوت بکرێت:",
    DraftSavedBrwsr: "ڕەشنووس لە وێبگەڕدا پاشکەوت کرا.",
    DraftSaved: (nr: string | number) => `ڕەشنووسی ${nr} پاشکەوت کرا.`,
    DraftDeleted: (nr: string | number) => `ڕەشنووسی ${nr} سڕایەوە.`,
    WillSaveDraft: (nr: string | number) => `ڕەشنووسی ${nr} پاشکەوت دەکرێت ...`,
    SavingDraft: (nr: string | number) => `لە پاشکەوتکردنی ڕەشنووسی ${nr} ...`,
    DeletingDraft: (nr: string | number) => `لە سڕینەوەی ڕەشنووسی ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "دیاریکردنی هاوپۆل",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "جۆری بابەت هەڵبژێرە:",
    DiscussionExpl: "گفتوگۆیەک دەربارەی شتێک.",
    QuestionExpl: "یەک وەڵام دەتوانرێت وەک وەڵامی پەسەندکراو دیاری بکرێت.",
    ProblExpl: "ئەگەر شتێک تێکچووە یان کار ناکات. دەتوانرێت وەک چاککراو/چارەسەرکراو دیاری بکرێت.",
    IdeaExpl: "پێشنیارێک. دەتوانرێت وەک ئەنجامدراو دیاری بکرێت.",
    ChatExpl: "گفتوگۆیەک کە لەوانەیە هەرگیز کۆتایی نەیەت.",
    PrivChatExpl: "تەنها بۆ ئەو کەسانە دەبینرێت کە بانگهێشت دەکرێن بۆ بەشداربوون لە چاتەکەدا.",

    CustomHtml: "پەڕەی HTMLی تایبەت",
    InfoPage: "پەڕەی زانیاری",
    Code: "کۆد",
    EmbCmts: "کۆمێنتە جێگیرکراوەکان",
    About: "دەربارەی",
    PrivChat: "چاتی تایبەت",
    Form: "فۆرم",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "چیتر کۆمەڵگە نییە بۆ بەشداربوون.",
    SelCmty: "کۆمەڵگەیەک هەڵبژێرە ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "گەڕان بۆ یارمەتی",
    TxtToFind: "دەق بۆ گەڕان",
  },


  // No internet

  ni: {
    NoInet: "پەیوەندی ئینتەرنێت نییە",
    PlzRefr: "پەڕەکە نوێ بکەرەوە بۆ بینینی نوێترین گۆڕانکارییەکان. (پەیوەندییەکە پچڕا)",
    RefrNow: "ئێستا نوێ بکەرەوە",
  },


  PostDeleted: (postNr: number) => `ئەو پۆستە، ژمارە ${postNr}، سڕاوەتەوە.`,
  NoSuchPost: (postNr: number) => `هیچ پۆستێکی ژمارە ${postNr} لەم پەڕەیەدا نییە.`,
  NoPageHere: "ئەم پەڕەیە سڕاوەتەوە، یان هەرگیز بوونی نەبووە، یان ڕێگەت پێنەدراوە بیبینیت.",
  GoBackToLastPage: "بگەڕێوە بۆ دواین پەڕە",

};
