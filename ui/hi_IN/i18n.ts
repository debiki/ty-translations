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

var t_hi_IN: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "सक्रिय",
  Activity: "गतिविधि",
  Add: "जोड़ें",
  AddingDots: "जोड़ रहा है ...",
  AddComment: "टिप्पणी जोड़ें",
  Admin: "प्रशासक",
  AdvSearch: "उन्नत खोज",
  Anonym: "अनाम",
  Away: "दूर",
  Back: "वापस",
  BlogN: "ब्लॉग",
  Bookmarks: "बुकमार्क",
  Cancel: "रद्द करें",
  Categories: "श्रेणियाँ",
  Category: "श्रेणी",
  ChangeV: "बदलें",
  ClickToShow: "दिखाने के लिए क्लिक करें",
  ChangeDots: "बदलें ...",
  ChatN: "चैट",
  Chatting: "चैटिंग",
  CheckYourEmail: "अपना ईमेल जांचें",
  Close: "बंद करें",
  closed: "बंद",
  comments: "टिप्पणियाँ",
  Continue: "जारी रखें",
  Created: "बनाया गया",
  Delete: "हटाएं",
  Deleted: "हटाया गया",
  DirectMessage: "सीधा संदेश",
  Discussion: "चर्चा",
  discussion: "चर्चा",
  done: "हो गया",
  EditV: "संपादित करें",
  Editing: "संपादन",
  EmailC: "ईमेल: ",
  EmailAddress: "ईमेल पता",
  EmailAddresses: "ईमेल पते",
  EmailSentD: "ईमेल भेज दिया गया।",
  Forum: "फोरम",
  GetNotifiedAbout: "इसके बारे में सूचित हों",
  GroupsC: "समूह:",
  Hide: "छिपाएं",
  Home: "होम",
  Idea: "विचार",
  Join: "जुड़ें",
  KbdShrtcsC: "कीबोर्ड शॉर्टकट: ",
  Loading: "लोड हो रहा है...",
  LoadMore: "और लोड करें ...",
  LogIn: "लॉग इन करें",
  LoggedInAs: "इस रूप में लॉग इन हैं: ",
  LogOut: "लॉग आउट",
  Maybe: "शायद",
  Manage: "प्रबंधन करें",
  Members: "सदस्य",
  MessageN: "संदेश",
  MoreDots: "अधिक...",
  Move: "स्थानांतरित करें",
  Name: "नाम",
  NameC: "नाम:",
  NewTopic: "नया विषय",
  NoCancel: "नहीं, रद्द करें",
  Notifications: "सूचनाएं",
  NotImplemented: "(कार्यान्वित नहीं)",
  NotYet: "अभी नहीं",
  NoTitle: "कोई शीर्षक नहीं",
  NoTopics: "कोई विषय नहीं।",
  Okay: "ठीक है",
  OkayDots: "ठीक है ...",
  Online: "ऑनलाइन",
  onePerLine: "प्रति पंक्ति एक",
  PreviewV: "पूर्वावलोकन",
  Problem: "समस्या",
  progressN: "प्रगति",
  Question: "प्रश्न",
  Recent: "हाल ही में",
  Remove: "हटाएं",
  Reopen: "फिर से खोलें",
  ReplyV: "उत्तर दें",
  Replying: "उत्तर दे रहे हैं",
  Replies: "उत्तर",
  replies: "उत्तर",
  Save: "सहेजें",
  SavingDots: "सहेज रहा है ...",
  SavedDot: "सहेजा गया।",
  Search: "खोजें",
  SendMsg: "संदेश भेजें",
  ShowPreview: "पूर्वावलोकन दिखाएं",
  SignUp: "जुड़ें",
  Solution: "समाधान",
  started: "शुरू हुआ",
  Summary: "सारांश",
  Submit: "सबमिट करें",
  Tag: "टैग",
  Tags: "टैग",
  Tools: "टूल्स",
  Topics: "विषय",
  TopicTitle: "विषय शीर्षक",
  TopicType: "विषय प्रकार",
  UploadingDots: "अपलोड हो रहा है...",
  Username: "उपयोगकर्ता नाम",
  Users: "उपयोगकर्ता",
  Welcome: "स्वागत है",
  Wiki: "विकी",
  Yes: "हाँ",
  YesBye: "हाँ, विदा",
  YesDoThat: "हाँ, ऐसा करें",
  You: "आप",
  you: "आप",

  // Trust levels.
  Guest:  "अतिथि",
  NewMember: "नया सदस्य",
  BasicMember: "बुनियादी सदस्य",
  FullMember: "पूर्ण सदस्य",
  TrustedMember: "विश्वस्त सदस्य",
  RegularMember: "विश्वस्त नियमित",
  CoreMember: "मुख्य सदस्य",

  // Periods.
  PastDay: "पिछला दिन",
  PastWeek: "पिछला सप्ताह",
  PastMonth: "पिछला महीना",
  PastQuarter: "पिछली तिमाही",
  PastYear: "पिछला वर्ष",
  AllTime: "हर समय",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "माह",  // months
  daysLtr: "दि",      // days
  hoursLtr: "घं",     // hours
  minsLtr: "मि",      // minutes
  secsLtr: "से",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 दिन पहले" : `${numDays} दिन पहले`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 घंटा पहले" : `${numHours} घंटे पहले`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 मिनट पहले" : `${numMins} मिनट पहले`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 सेकंड पहले" : `${numSecs} सेकंड पहले`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "ईमेल आवश्यक है",
    NoSpcs: "कृपया रिक्त स्थान न रखें",
    InvldAddr: "मान्य ईमेल पता नहीं है",
    NoBadChrs: "कृपया अजीब अक्षरों का उपयोग न करें",

    // Full name input field:
    NotOnlSpcs: "केवल रिक्त स्थान नहीं",
    NoAt: "कृपया @ का उपयोग न करें",

    // Username input field:
    NoDash: "कृपया डैश (-) का उपयोग न करें",
    DontInclAt: "@ शामिल न करें",
    StartEndLtrDgt: "अक्षर या अंक के साथ शुरू और समाप्त करें",
    OnlLtrNumEtc: "केवल अक्षर (a-z, A-Z) और संख्याएं, और _ (अंडरस्कोर)",
    // This shown just below the username input:
    UnUnqShrt_1: "आपका ",
    UnUnqShrt_2: "@username",
    UnUnqShrt_3: ", अद्वितीय और छोटा",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `कम से कम ${minLength} अक्षर होने चाहिए`,
    TooLong: (maxLength: number) => `बहुत लंबा। अधिकतम ${maxLength} अक्षर होने चाहिए`,
  },


  // Notification levels.

  nl: {
    EveryPost: "प्रत्येक पोस्ट",
    EveryPostInTopic: "आपको इस विषय में सभी नए उत्तरों की सूचना दी जाएगी।",
    EveryPostInCat: "आपको इस श्रेणी में सभी नए विषयों और उत्तरों की सूचना दी जाएगी।",
    EveryPostInTopicsWithTag: "आपको इस टैग वाले नए विषयों और उन विषयों के सभी उत्तरों की सूचना दी जाएगी।",
    EveryPostWholeSite: "आपको कहीं भी सभी नए विषयों और उत्तरों की सूचना दी जाएगी।",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "नए विषय",
    NewTopicsInCat: "आपको इस श्रेणी में नए विषयों की सूचना दी जाएगी।",
    NewTopicsWithTag: "आपको इस टैग के साथ नए विषयों की सूचना दी जाएगी।",
    NewTopicsWholeSite: "आपको कहीं भी नए विषयों की सूचना दी जाएगी।",

    Tracking: "ट्रैकिंग",

    Normal: "सामान्य",
    NormalDescr: "यदि कोई आपसे बात करता है, तो आपको सूचित किया जाएगा, साथ ही अप्रत्यक्ष रूप से भी, जैसे कि आपके उत्तर का उत्तर।",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "धीमा",
    HushedDescr: "आपको तभी सूचित किया जाएगा जब कोई आपसे सीधे बात करेगा।",

    Muted: "म्यूट",
    MutedTopic: "कोई सूचना नहीं।",
  },


  // Forum intro text

  fi: {
    Edit: "संपादित करें",
    Hide_1: "छिपाएं",
    Hide_2: ", क्लिक करें ",
    Hide_3: " फिर से खोलने के लिए",
  },


  // Forum categories

  fcs: {
    All: "सभी", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "विषय सूची",

    // Select category dropdown

    from: "से",
    in: "में",
    AllCats: "सभी श्रेणियाँ",

    // Topic sort order

    Active: "सक्रिय पहले",
    ActiveDescr: "हाल ही में सक्रिय विषयों को पहले दिखाता है",

    New: "नया",
    NewDescr: "सबसे नए विषयों को पहले दिखाता है",

    Top: "लोकप्रिय",
    TopDescr: "लोकप्रिय विषयों को पहले दिखाता है",

    // Topic filter dropdown

    AllTopics: "सभी विषय",

    ShowAllTopics: "सभी विषय दिखाएं",
    ShowAllTopicsDescr: "हटाए गए विषय नहीं",

    WaitingTopics: "प्रतीक्षारत विषय",
    OnlyWaitingDescr_1: "केवल वे विषय दिखाता है ",
    OnlyWaitingDescr_2: "जो प्रतीक्षा कर रहे हैं ",
    OnlyWaitingDescr_3: "समाधान के लिए या कार्यान्वित और पूर्ण होने के लिए",

    YourTopics: "आपके विषय",
    AssignedToYou: "आपको सौंपे गए",

    DeletedTopics: "हटाए गए दिखाएं",
    ShowDeleted: "हटाए गए दिखाएं",
    ShowDeletedDescr: "हटाए गए विषयों सहित सभी विषय दिखाता है",

    // Rightmost buttons

    ViewCategories: "श्रेणियाँ देखें",
    EditCat: "श्रेणी संपादित करें",
    CreateCat: "श्रेणी बनाएँ",
    CreateTopic: "विषय बनाएँ",
    PostIdea: "एक विचार पोस्ट करें",
    AskQuestion: "एक प्रश्न पूछें",
    ReportProblem: "एक समस्या की रिपोर्ट करें",
    CreateMindMap: "माइंड मैप बनाएँ",
    CreatePage: "पेज बनाएँ",

  },


  // Forum topic list

  ft: {
    ExplIcons: "आइकन की व्याख्या करें...",
    IconExplanation: "आइकन की व्याख्या:",
    ExplGenDisc: "एक सामान्य चर्चा।",
    ExplQuestion: "बिना किसी स्वीकृत उत्तर वाला प्रश्न।",
    ExplAnswer: "स्वीकृत उत्तर वाला प्रश्न।",
    ExplIdea: "एक विचार / सुझाव।",
    ExplProblem: "एक समस्या।",
    ExplPlanned: "कुछ ऐसा जिसे हम करने या ठीक करने की योजना बना रहे हैं।",
    ExplDone: "कुछ ऐसा जो किया गया है या ठीक किया गया है।",
    ExplClosed: "विषय बंद है।",
    ExplPinned: "विषय हमेशा पहले सूचीबद्ध होता है (शायद केवल अपनी श्रेणी में)।",

    PopularTopicsComma: "लोकप्रिय विषय, ",
    TopFirstAllTime: "सबसे लोकप्रिय विषयों को पहले दिखाता है, हर समय।",
    TopFirstPastDay: "पिछले दिन के दौरान लोकप्रिय विषयों को दिखाता है।",

    CatHasBeenDeleted: "यह श्रेणी हटा दी गई है",

    TopicsActiveFirst: "विषय, हाल ही में सक्रिय पहले",
    TopicsNewestFirst: "विषय, नए पहले",

    CreatedOn: "बनाया गया ",
    LastReplyOn: "\nअंतिम उत्तर ",
    EditedOn: "\nसंपादित किया गया ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "विषय बनाया",
    frequentPoster: "लगातार पोस्टर",
    mostRecentPoster: "सबसे हालिया पोस्टर",

    inC: "में: ",

    TitleFixed: "इसे ठीक कर दिया गया है",
    TitleDone: "यह काम हो गया है",
    TitleStarted: "हमने इसे शुरू कर दिया है",
    TitleStartedFixing: "हमने इसे ठीक करना शुरू कर दिया है",
    TitleUnsolved: "यह एक अनसुलझी समस्या है",
    TitleIdea: "यह एक विचार है",
    TitlePlanningFix: "हम इसे ठीक करने की योजना बना रहे हैं",
    TitlePlanningDo: "हम ऐसा करने की योजना बना रहे हैं",
    TitleChat: "यह एक चैट चैनल है",
    TitlePrivateChat: "यह एक निजी चैट चैनल है",
    TitlePrivateMessage: "एक निजी संदेश",
    TitleInfoPage: "यह एक जानकारी पेज है",
    TitleDiscussion: "एक चर्चा",
    IsPinnedGlobally: "\nइसे पिन किया गया है, इसलिए यह पहले सूचीबद्ध है।",
    IsPinnedInCat: "\nइसे अपनी श्रेणी में पिन किया गया है, इसलिए अपनी श्रेणी में पहले सूचीबद्ध है।",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "हाल के विषय (प्रतीक्षारत)",
    RecentTopicsInclDel: "हाल के विषय (हटाए गए सहित)",
    RecentTopics: "हाल के विषय",
    _replies: " उत्तर",
    _deleted: " (हटाया गया)",
    _defCat: " (डिफ़ॉल्ट श्रेणी)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "हाल के पोस्ट",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " इस चैट में ऑनलाइन",    // example: "5 online in this chat"
    NumOnlForum: " इस फोरम में ऑनलाइन",

    // Open left-sidebar button title.
    WatchbBtn: "आपके विषय",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "आपके हालिया विषय, शामिल हुए चैट, सीधे संदेश",

    // Title shown on user profile pages.
    AbtUsr: "उपयोगकर्ता के बारे में",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "उपयोगकर्ता प्रोफ़ाइल से वापस",
    BackFromAdm: "प्रशासक क्षेत्र से वापस",

    // Title shown on full text search page.
    SearchPg: "खोज पेज",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "जोड़ें ...",
    RecentlyViewed: "हाल ही में देखे गए विषय",
    JoinedChats: "शामिल हुए चैट",
    ChatChannels: "चैट चैनल",
    CreateChat: "चैट चैनल बनाएँ",
    DirectMsgs: "सीधे संदेश",
    NoChats: "कोई नहीं",    // meaning: "No chat messages"
    NoDirMsgs: "कोई नहीं",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "विषय क्रियाएं",
    ViewPeopleHere: "यहाँ लोगों को देखें",
    ViewAddRemoveMembers: "सदस्यों को देखें / जोड़ें / हटाएँ",
    ViewChatMembers: "चैट सदस्यों को देखें",
    EditChat: "चैट विवरण संपादित करें",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "यह चैट छोड़ें",
    LeaveThisCommunity: "यह समुदाय छोड़ें",
    JoinThisCommunity: "इस समुदाय में शामिल हों",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "इस विषय में हाल की टिप्पणियाँ:",
    NoComments: "कोई टिप्पणी नहीं।",

    YourBookmarks: "आपके बुकमार्क:",

    UsersOnline: "उपयोगकर्ता ऑनलाइन:",
    UsersOnlineForum: "इस फोरम में उपयोगकर्ता ऑनलाइन:",
    UsersInThisChat: "इस चैट में उपयोगकर्ता:",
    UsersInThisTopic: "इस विषय में उपयोगकर्ता:",

    GettingStartedGuide: "प्रशासक गाइड",
    AdminGuide: "प्रशासक गाइड",
    Guide: "गाइड",

    // How to hide the sidebar.
    CloseShortcutS: "बंद करें (कीबोर्ड शॉर्टकट: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "अधिक लोगों को जोड़ें",

    // Shown next to one's own username, in a list of users.
    thatsYou: "यह आप हैं",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "ऐसा लगता है केवल आप हैं",
    YouAnd: "आप, और ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " व्यक्ति" : " लोग";
      const have = numStrangers === 1 ? "है" : "हैं";
      return numStrangers + people + " जो लॉग इन नहीं " + have;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "बाईं ओर के उत्तरों को इस प्रकार क्रमबद्ध किया जा सकता है ",
    bestFirst: "सर्वश्रेष्ठ-पहले।",
    ButBelow: "लेकिन नीचे ",
    insteadBy: " वही उत्तर इसके बजाय क्रमबद्ध हैं ",
    newestFirst: "नवीनतम-पहले।",

    SoIfLeave: "इसलिए यदि आप चले जाते हैं, और बाद में यहाँ वापस आते हैं, तो आपको नीचे मिलेंगे ",
    allNewReplies: "सभी नए उत्तर।",
    Click: "क्लिक करें",
    aReplyToReadIt: " इसे पढ़ने के लिए नीचे एक उत्तर — क्योंकि नीचे केवल एक अंश दिखाया गया है।",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "स्थिति बदलने के लिए क्लिक करें",
    ClickToViewAnswer: "उत्तर देखने के लिए क्लिक करें",
    ViewAnswer: "उत्तर देखें",
    ChangeStatusC: "स्थिति बदलें:",
    ChangeCatC: "श्रेणी बदलें:",
    ChangeTopicTypeC: "विषय प्रकार बदलें:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "एक प्रश्न",
    hasAccptAns: "एक स्वीकृत उत्तर है",
    aProblem: "एक समस्या",
    planToFix: "ठीक करने की योजना",
    anIdea: "एक विचार",
    planToDo: "करने की योजना",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "यह फॉर्म ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "बंद कर दिया गया है; अब आप इसे भरकर पोस्ट नहीं कर सकते।",

    ThisTopicClosed_1: "यह विषय ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: " बंद कर दिया गया है। आप अभी भी टिप्पणियाँ पोस्ट कर सकते हैं।",

    ThisPageDeleted: "यह पेज हटा दिया गया है",
    CatDeldPageToo: "श्रेणी हटा दी गई, इसलिए यह पेज भी हटा दिया गया",

    ThreadDeld: "थ्रेड हटा दिया गया",
    CmntDeld: "टिप्पणी हटा दी गई",
    PostDeld: "पोस्ट हटा दी गई",
    DiscDeld: "चर्चा हटा दी गई",
    PageDeld: "पेज हटा दिया गया",
    PagePendAppr: "पेज अनुमोदन के लिए लंबित है",
    TitlePendAppr: "शीर्षक अनुमोदन के लिए लंबित है",
    TextPendingApproval: "पाठ अनुमोदन के लिए लंबित है",

    TooltipQuestClosedNoAnsw: "यह प्रश्न बिना किसी स्वीकृत उत्तर के बंद कर दिया गया है।",
    TooltipTopicClosed: "यह विषय बंद है।",

    TooltipQuestSolved: "यह एक हल किया गया प्रश्न है",
    TooltipQuestUnsolved: "यह एक अनसुलझा प्रश्न है",

    StatusDone: "हो गया",
    TooltipProblFixed: "इसे ठीक कर दिया गया है",
    TooltipDone: "यह काम हो गया है",

    StatusStarted: "शुरू हुआ",
    TooltipFixing: "हमने इसे ठीक करना शुरू कर दिया है",
    TooltipImplementing: "हमने इसे करना शुरू कर दिया है",

    StatusPlanned: "नियोजित",
    TooltipProblPlanned: "हम इसे ठीक करने की योजना बना रहे हैं",
    TooltipIdeaPlanned: "हम ऐसा करने की योजना बना रहे हैं",

    StatusNew: "नया",
    StatusNewDtl: "नया विषय, चर्चा के अधीन",
    TooltipUnsProbl: "यह एक अनसुलझी समस्या है",
    TooltipIdea: "यह एक विचार है",

    TooltipPersMsg: "व्यक्तिगत संदेश",
    TooltipChat: "# का अर्थ है चैट चैनल",
    TooltipPrivChat: "यह एक निजी चैट चैनल है",

    TooltipPinnedGlob: "\nवैश्विक रूप से पिन किया गया।",
    TooltipPinnedCat: "\nइस श्रेणी में पिन किया गया।",

    SolvedClickView_1: "पोस्ट # में हल किया गया",
    SolvedClickView_2: ", देखने के लिए क्लिक करें",

    PostHiddenClickShow: "पोस्ट छिपी हुई है; दिखाने के लिए क्लिक करें",
    ClickSeeMoreRepls: "और उत्तर दिखाएं",
    ClickSeeMoreComments: "और टिप्पणियाँ दिखाएं",
    ClickSeeThisComment: "इस टिप्पणी को दिखाने के लिए क्लिक करें",
    clickToShow: "दिखाने के लिए क्लिक करें",

    ManyDisagree: "कई लोग इससे असहमत हैं:",
    SomeDisagree: "कुछ लोग इससे असहमत हैं:",

    PendAppr: "अनुमोदन लंबित",
    CmtPendAppr: "टिप्पणी अनुमोदन लंबित है, पोस्ट किया गया ",
    CmtBelowPendAppr: (isYour) => (isYour ? "आपकी" : "नीचे दी गई") + " टिप्पणी अनुमोदन के लिए लंबित है।",

    _and: " और",

    repliesTo: "के उत्तर",
    InReplyTo: "के उत्तर में",
    YourReplyTo: "आपका उत्तर ",
    YourChatMsg: "आपका चैट संदेश: ",
    YourDraft: "आपका ड्राफ्ट",
    YourEdits: "आपके संपादन: ",
    YourProgrNoteC: "आपका प्रगति नोट:",
    aProgrNote: "एक प्रगति नोट: ",

    ReplyingToC: "उत्तर दे रहे हैं:",
    ScrollToPrevw_1: "तक स्क्रॉल करें ",
    ScrollToPrevw_2: "पूर्वावलोकन",

    UnfinEdits: "अधूरे संपादन",
    ResumeEdting: "संपादन फिर से शुरू करें",
    DelDraft: "ड्राफ्ट हटाएं",

    ClickViewEdits: "पुराने संपादन देखने के लिए क्लिक करें",

    By: "द्वारा ", // ... someones name

    // Discussion ...
    aboutThisIdea: "इस विचार को कैसे और क्या करना है, इसके बारे में",
    aboutThisProbl: "इसे कैसे और क्या ठीक करना है, इसके बारे में",

    AddProgrNote: "प्रगति नोट जोड़ें",
    // Progress ...
    withThisIdea: "इस विचार को करने के साथ",
    withThisProbl: "इस समस्या से निपटने के साथ",
    withThis: "इसे करने के साथ",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "इस विषय के बारे में सूचनाएं:",

    // If is a direct message topic, members listed below this text.
    Msg: "संदेश",

    SmrzRepls: "उत्तर सारांशित करें",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} उत्तर हैं। अनुमानित पढ़ने का समय: ${minutes} मिनट`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `हो गया। पहले दिखाए गए ${numShownBefore} उत्तरों में से ${numSummarized} उत्तर सारांशित किए गए।`,
  },


  // Post actions

  pa: {
    CloseTopic: "विषय बंद करें",
    CloseOwnQuestionTooltip: "यदि आपको अब उत्तर की आवश्यकता नहीं है तो इस प्रश्न को बंद कर दें।",
    CloseOthersQuestionTooltip: "यदि इस प्रश्न को उत्तर की आवश्यकता नहीं है तो इसे बंद कर दें, उदा. यदि यह विषय से बाहर है या किसी अन्य विषय में पहले ही उत्तर दिया जा चुका है।",
    CloseToDoTooltip: "यदि इसे करने या ठीक करने की आवश्यकता नहीं है तो इस टू-डू को बंद कर दें।",
    CloseTopicTooltip: "यदि इस पर आगे विचार करने की आवश्यकता नहीं है तो इस विषय को बंद कर दें।",

    AcceptBtnExpl: "इसे प्रश्न या समस्या के उत्तर के रूप में स्वीकार करें",
    SolutionQ: "समाधान?",
    ClickUnaccept: "इस उत्तर को अस्वीकार करने के लिए क्लिक करें",
    PostAccepted: "इस पोस्ट को उत्तर के रूप में स्वीकार कर लिया गया है",

    NumLikes: (num: number) => num === 1 ? "1 पसंद" : num + " पसंद",
    NumDisagree: (num: number) => num + " असहमत",
    NumBury: (num: number) => num === 1 ? "1 दफन" : num + " दफन",
    NumUnwanted: (num: number) => num === 1 ? "1 अवांछित" : num + " अवांछित",

    MoreVotes: "अधिक वोट...",
    LikeThis: "इसे पसंद करें",
    LinkToPost: "इस पोस्ट का लिंक",
    Report: "रिपोर्ट करें",
    ReportThisPost: "इस पोस्ट की रिपोर्ट करें",
    Admin: "प्रशासक",
    DiscIx: "चर्चा सूचकांक",

    Disagree: "असहमत",
    DisagreeExpl: "इस पोस्ट से असहमत होने के लिए, या दूसरों को तथ्यात्मक त्रुटियों के बारे में चेतावनी देने के लिए यहाँ क्लिक करें।",
    Bury: "दफन करें",
    BuryExpl: "अन्य पोस्टों को इस पोस्ट से पहले क्रमबद्ध करने के लिए क्लिक करें। केवल फोरम कर्मचारी ही आपके वोट देख सकते हैं।",
    Unwanted: "अवांछित",
    UnwantedExpl: "यदि आप इस वेबसाइट पर यह पोस्ट नहीं चाहते हैं। इससे पोस्ट लेखक में मेरा विश्वास कम हो जाएगा। केवल फोरम कर्मचारी ही आपके वोट देख सकते हैं।",

    AddTags: "टैग जोड़ें/हटाएं",
    UnWikify: "अन-विकीफाई",
    Wikify: "विकीफाई",
    PinDeleteEtc: "पिन / हटाएं / श्रेणी ...",
  },


  // Share dialog

  sd: {
    Copied: "कॉपी किया गया।",
    CtrlCToCopy: "कॉपी करने के लिए CTRL+C दबाएं।",
    ClickToCopy: "लिंक कॉपी करने के लिए क्लिक करें।",
  },


  // Chat

  c: {
    About_1: "यह ",
    About_2: " चैट चैनल है, जिसे द्वारा बनाया गया है ",
    ScrollUpViewComments: "पुरानी टिप्पणियाँ देखने के लिए ऊपर स्क्रॉल करें",
    Purpose: "उद्देश्य:",
    MessageDeleted: "(संदेश हटाया गया)",
    JoinThisChat: "इस चैट में शामिल हों",
    PostMessage: "संदेश पोस्ट करें",
    AdvancedEditor: "उन्नत संपादक",
    TypeTitle: "शीर्षक टाइप करें — कुछ शब्दों में, यह चैट किस बारे में है?",
    TypePurpose: "उद्देश्य टाइप करें — शीर्षक से लंबा, अधिक वर्णनात्मक हो सकता है।",
    TypeHere: "यहाँ टाइप करें। आप मार्कडाउन और HTML का उपयोग कर सकते हैं।",
  },


  // My Menu

  mm: {
    NeedsReview: "समीक्षा की आवश्यकता है ",
    AdminHelp: "प्रशासक सहायता ",
    StaffHelp: "कर्मचारी सहायता ",
    DraftsEtc: "ड्राफ्ट, बुकमार्क, कार्य",
    MoreNotfs: "सभी सूचनाएं देखें",
    DismNotfs: "सभी को पढ़ा हुआ मान लें",
    ViewProfile: "अपनी प्रोफ़ाइल देखें",
    ViewGroups: "समूह देखें",
    LogOut: "लॉग आउट",
    UnhideHelp: "सहायता संदेश दिखाएं",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "तक स्क्रॉल करें:",
    Scroll: "स्क्रॉल",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "ack (वापस)",
    BackExpl: "इस पेज पर अपनी पिछली स्थिति पर वापस स्क्रॉल करें",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "पेज का शीर्ष",
    PgTopHelp: "पेज के शीर्ष पर जाएं। कीबोर्ड शॉर्टकट: 1",
    Repl: "उत्तर",
    ReplHelp: "उत्तर अनुभाग पर जाएं। शॉर्टकट: 2",
    Progr: "प्रगति",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Go to the Progress section. Shortcut: 3",
    PgBtm: "पेज का निचला भाग",
    Btm: "निचला भाग",
    BtmHelp: "पेज के निचले भाग पर जाएं। शॉर्टकट: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", और ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " वापस स्क्रॉल करने के लिए",
  },


  // Select users dialog
  sud: {
    SelectUsers: "उपयोगकर्ता चुनें",
    AddUsers: "उपयोगकर्ता जोड़ें",
  },


  // About user dialog

  aud: {
    IsMod: "मॉडरेटर है।",
    IsAdm: "प्रशासक है।",
    IsDeld: "निष्क्रिय या हटा दिया गया है।",
    ThisIsGuest: "यह एक अतिथि उपयोगकर्ता है, वास्तव में कोई भी हो सकता है।",
    ViewInAdm: "प्रशासक क्षेत्र में देखें",
    ViewProfl: "प्रोफ़ाइल देखें",
    ViewComments: "अन्य टिप्पणियाँ देखें",
    RmFromTpc: "विषय से हटाएँ",
    EmAdrUnkn: "ईमेल पता अज्ञात है — इस अतिथि को उत्तरों के बारे में सूचित नहीं किया जाएगा।",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "प्राथमिकताएं",
    Invites: "आमंत्रण",
    DraftsEtc: "ड्राफ्ट आदि",
    About: "के बारे में",
    Privacy: "गोपनीयता",
    Security: "सुरक्षा",
    Account: "खाता",
    Interface: "इंटरफ़ेस",

    // ----- Overview stats

    JoinedC: "शामिल हुए: ",
    PostsMadeC: "किए गए पोस्ट: ",
    LastPostC: "अंतिम पोस्ट: ",
    LastSeenC: "अंतिम बार देखा गया: ",
    TrustLevelC: "विश्वास स्तर: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "फोटो अपलोड करें",
    ChangePhoto: "फोटो बदलें",
    ImgTooSmall: "छवि बहुत छोटी है: कम से कम 100 x 100 होनी चाहिए",

    // ----- Activity

    OnlyStaffCanSee: "केवल कर्मचारी और विश्वस्त मुख्य सदस्य ही इसे देख सकते हैं।",
    OnlyMbrsCanSee: "केवल वे लोग जो कुछ समय से सक्रिय सदस्य हैं, इसे देख सकते हैं।",
    Nothing: "दिखाने के लिए कुछ भी नहीं",
    Posts: "पोस्ट",
    NoPosts: "कोई पोस्ट नहीं।",
    Topics: "विषय",
    NoTopics: "कोई विषय नहीं।",

    // ----- User status

    UserBanned: "यह उपयोगकर्ता प्रतिबंधित है",
    UserSuspended: (dateUtc: string) => `यह उपयोगकर्ता ${dateUtc} UTC तक निलंबित है`,
    ReasonC: "कारण: ",

    DeactOrDeld: "निष्क्रिय या हटा दिया गया है।",
    isGroup: " (एक समूह)",
    isGuest: " — एक अतिथि उपयोगकर्ता, कोई भी हो सकता है",
    isMod: " – मॉडरेटर",
    isAdmin: " – प्रशासक",
    you: "(आप)",

    // ----- Notifications page

    NoNotfs: "कोई सूचना नहीं",
    NotfsToYouC: "आपको सूचनाएं:",
    NotfsToOtherC: (name: string) => `${name} को सूचनाएं:`,
    DefNotfsSiteWide: "डिफ़ॉल्ट सूचनाएं, पूरी साइट पर",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "के लिए",

    // ----- Drafts Etc page

    NoDrafts: "कोई ड्राफ्ट नहीं",
    YourDraftsC: "आपके ड्राफ्ट:",
    DraftsByC: (name: string) => `${name} द्वारा ड्राफ्ट:`,

    // ----- Invites page

    InvitesIntro: "यहाँ आप लोगों को इस साइट से जुड़ने के लिए आमंत्रित कर सकते हैं। ",
    InvitesListedBelow: "आपके द्वारा पहले ही भेजे गए आमंत्रण नीचे सूचीबद्ध हैं।",
    NoInvites: "आपने अभी तक किसी को आमंत्रित नहीं किया है।",

    InvitedEmail: "आमंत्रित ईमेल",
    WhoAccepted: "स्वीकार करने वाला सदस्य",
    InvAccepted: "आमंत्रण स्वीकार किया गया",
    InvSent: "आमंत्रण भेजा गया",
    JoinedAlready: "पहले ही शामिल हो चुके हैं",

    SendAnInv: "लोगों को आमंत्रित करें",
    SendInv: "आमंत्रण भेजें",
    SendInvExpl:
        "हम आपके दोस्तों को एक संक्षिप्त ईमेल भेजेंगे। वे तुरंत शामिल होने के लिए एक लिंक पर क्लिक करेंगे, लॉगिन की आवश्यकता नहीं है। " +
        "वे सामान्य सदस्य बनेंगे, मॉडरेटर या प्रशासक नहीं।",
    //EnterEmail: "Enter email(s)",
    InvDone: "हो गया। मैं उन्हें एक ईमेल भेज दूँगा।",
    NoOneToInv: "आमंत्रित करने के लिए कोई नहीं है।",
    InvNotfLater: "जब मैं उन्हें आमंत्रित कर दूँगा, तो मैं आपको बाद में सूचित करूँगा।",
    AlreadyInvSendAgainQ: "इन्हें पहले ही आमंत्रित किया जा चुका है — शायद आप इन्हें फिर से आमंत्रित करना चाहेंगे?",
    InvErr_1: "इनके परिणामस्वरूप ",
    InvErr_2: "त्रुटियाँ",
    InvErr_3: " हुई:",
    TheseJoinedAlrdyC: "ये पहले ही शामिल हो चुके हैं, इसलिए मैंने उन्हें आमंत्रित नहीं किया:",
    ResendInvsQ: "इन लोगों को फिर से आमंत्रण भेजें? उन्हें पहले ही आमंत्रित किया जा चुका है।",
    InvAgain: "फिर से आमंत्रित करें",

    // ----- Preferences, About

    AboutYou: "आपके बारे में",
    WebLink: "आपकी कोई भी वेबसाइट या पेज।",

    NotShownCannotChange: "सार्वजनिक रूप से नहीं दिखाया गया है। बदला नहीं जा सकता।",

    // The full name or alias:
    NameOpt: "नाम (वैकल्पिक)",

    NotShown: "सार्वजनिक रूप से नहीं दिखाया गया है।",

    // The username:
    MayChangeFewTimes: "आप इसे केवल कुछ ही बार बदल सकते हैं।",
    notSpecified: "(निर्दिष्ट नहीं)",
    ChangeUsername_1: "आप अपना उपयोगकर्ता नाम केवल कुछ ही बार बदल सकते हैं।",
    ChangeUsername_2: "इसे बार-बार बदलने से दूसरे लोग भ्रमित हो सकते हैं — " +
        "वे नहीं जान पाएंगे कि आपको @mention कैसे करना है।",

    NotfAboutAll: "हर नए पोस्ट के बारे में सूचित किया जाए (जब तक कि आप विषय या श्रेणी को म्यूट न करें)",
    NotfAboutNewTopics: "नए विषयों के बारे में सूचित किया जाए (जब तक कि आप श्रेणी को म्यूट न करें)",

    ActivitySummaryEmails: "गतिविधि सारांश ईमेल",

    EmailSummariesToGroup:
        "जब इस समूह के सदस्य यहाँ नहीं आते हैं, तो डिफ़ॉल्ट रूप से, उन्हें " +
        "लोकप्रिय विषयों और अन्य चीज़ों का सारांश ईमेल करें।",
    EmailSummariesToMe:
        "जब मैं यहाँ नहीं आता हूँ, तो मुझे " +
        "लोकप्रिय विषयों और अन्य चीज़ों का सारांश ईमेल करें।",

    AlsoIfTheyVisit: "यदि वे नियमित रूप से यहाँ आते हैं तो भी उन्हें ईमेल करें।",
    AlsoIfIVisit: "यदि मैं नियमित रूप से यहाँ आता हूँ तो भी मुझे ईमेल करें।",

    HowOftenWeSend: "हम ये ईमेल कितनी बार भेजें?",
    HowOftenYouWant: "आप ये ईमेल कितनी बार चाहते हैं?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "अजनबियों और नए सदस्यों के लिए अपनी हालिया गतिविधि छिपाएँ?",
    HideActivityStrangers_2: "(लेकिन उनके लिए नहीं जो कुछ समय से सक्रिय सदस्य हैं।)",
    HideActivityAll_1: "सभी के लिए अपनी हालिया गतिविधि छिपाएँ?",
    HideActivityAll_2: "(कर्मचारियों और विश्वस्त मुख्य सदस्यों को छोड़कर।)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "ईमेल पते",
    PrimaryDot: "प्राथमिक। ",
    VerifiedDot: "सत्यापित। ",
    NotVerifiedDot: "सत्यापित नहीं। ",
    ForLoginWithDot: (provider: string) => `${provider} के साथ लॉगिन के लिए। `,
    MakePrimary: "प्राथमिक बनाएँ",
    AddEmail: "ईमेल पता जोड़ें",
    TypeNewEmailC: "एक नया ईमेल पता टाइप करें:",
    MaxEmailsInfo: (numMax: number) => `(आप ${numMax} से अधिक पते नहीं जोड़ सकते।)`,
    EmailAdded_1: "जोड़ा गया। हमने आपको एक सत्यापन ईमेल भेजा है — ",
    EmailAdded_2: "अपना ईमेल इनबॉक्स जांचें।",
    SendVerifEmail: "सत्यापन ईमेल भेजें",

    EmailStatusExpl:
        "('प्राथमिक' का अर्थ है कि आप इस पते के माध्यम से लॉगिन कर सकते हैं, और हम इस पर सूचनाएं भेजते हैं। " +
        "'सत्यापित' का अर्थ है कि आपने पता सत्यापन ईमेल में सत्यापन लिंक पर क्लिक किया है।)",

    // Password:
    ChangePwdQ: "पासवर्ड बदलें?",
    CreatePwdQ: "पासवर्ड बनाएँ?",
    WillGetPwdRstEml: "आपको पासवर्ड रीसेट ईमेल मिलेगा।",
    // This is the "None" in:  "Password: None"
    PwdNone: "कोई नहीं",

    // Logins:
    LoginMethods: "लॉगिन विधियाँ",
    commaAs: ", इस रूप में: ",

    // One's data:
    YourContent: "आपकी सामग्री",
    DownloadPosts: "पोस्ट डाउनलोड करें",
    DownloadPostsHelp: "आपके द्वारा पोस्ट किए गए विषयों और टिप्पणियों की एक प्रति के साथ एक JSON फ़ाइल बनाता है।",
    DownloadPersData: "व्यक्तिगत डेटा डाउनलोड करें",
    DownloadPersDataHelp: "आपके व्यक्तिगत डेटा की एक प्रति के साथ एक JSON फ़ाइल बनाता है, उदा. आपका नाम (यदि आपने नाम निर्दिष्ट किया है) और ईमेल पता।",


    // Delete account:
    DangerZone: "खतरे का क्षेत्र",
    DeleteAccount: "खाता हटाएँ",
    DeleteYourAccountQ:
        "अपना खाता हटाएँ? हम आपका नाम हटा देंगे, आपका ईमेल पता, पासवर्ड और " +
        "कोई भी ऑनलाइन पहचान (जैसे फेसबुक या ट्विटर लॉगिन) भूल जाएंगे। " +
        "आप फिर से लॉगिन नहीं कर पाएंगे। इसे पूर्ववत नहीं किया जा सकता।",
    DeleteUserQ:
        "इस उपयोगकर्ता को हटाएँ? हम नाम हटा देंगे, ईमेल पता, पासवर्ड और " +
        "ऑनलाइन पहचान (जैसे फेसबुक या ट्विटर लॉगिन) भूल जाएंगे। " +
        "उपयोगकर्ता फिर से लॉगिन नहीं कर पाएगा। इसे पूर्ववत नहीं किया जा सकता।",
    YesDelete: "हाँ, हटाएँ",
  },


  // Group profile page
  gpp: {
    GroupMembers: "समूह सदस्य",
    NoMembers: "कोई सदस्य नहीं।",
    MayNotListMembers: "सदस्यों को सूचीबद्ध नहीं किया जा सकता।",
    AddMembers: "सदस्य जोड़ें",
    BuiltInCannotModify: "यह एक अंतर्निहित समूह है; इसे संशोधित नहीं किया जा सकता।",
    NumMembers: (num: number) => `${num} सदस्य`,
    YouAreMember: "आप सदस्य हैं।",
    CustomGroupsC: "कस्टम समूह:",
    BuiltInGroupsC: "अंतर्निहित समूह:",
    DeleteGroup: "इस समूह को हटाएँ",
  },


  // Create user dialog

  cud: {
    CreateUser: "उपयोगकर्ता बनाएँ",
    CreateAccount: "खाता बनाएँ",
    EmailC: "ईमेल:",  // REMOVE move to t.EmailC instead
    keptPriv: "निजी रखा जाएगा",
    forNotfsKeptPriv: "उत्तर सूचनाओं के लिए, निजी रखा जाएगा",
    EmailVerifBy_1: "आपका ईमेल इसके द्वारा सत्यापित किया गया है ",
    EmailVerifBy_2: ".",
    UsernameC: "उपयोगकर्ता नाम:",
    FullNameC: "पूरा नाम:",
    optName: "वैकल्पिक",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "खाता बन गया। आप लॉग इन हो गए हैं।",  // COULD say if verif email sent too?
    AlmostDone:
        "लगभग हो गया! आपको बस अपना ईमेल पता पुष्टि करने की आवश्यकता है। हमने " +
        "आपको एक ईमेल भेजा है। कृपया अपना खाता सक्रिय करने के लिए ईमेल में दिए गए " +
        "लिंक पर क्लिक करें। आप यह पेज बंद कर सकते हैं।",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "शर्तें और गोपनीयता",

    Accept_1: "क्या आप हमारी ",
    TermsOfService: "सेवा की शर्तों",
    TermsOfUse: "उपयोग की शर्तों",
    Accept_2: " और ",
    PrivPol: "गोपनीयता नीति",
    Accept_3_User: " को स्वीकार करते हैं?",
    Accept_3_Owner: " साइट मालिकों के लिए?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "हाँ मैं स्वीकार करता हूँ",
  },


  // Password input

  pwd: {
    PasswordC: "पासवर्ड:",
    StrengthC: "शक्ति: ",
    FairlyWeak: "काफी कमजोर।",
    toShort: "बहुत छोटा",
    TooShort: (minLength: number) => `बहुत छोटा। कम से कम ${minLength} अक्षर होने चाहिए`,
    PlzInclDigit: "कृपया एक अंक या विशेष अक्षर शामिल करें",
    TooWeak123abc: "बहुत कमजोर। '12345' या 'abcde' जैसे पासवर्ड का उपयोग न करें।",
    AvoidInclC: "पासवर्ड में अपना नाम या ईमेल (के कुछ हिस्सों) को शामिल करने से बचें:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "पेज नहीं मिला, या पहुंच अस्वीकार कर दी गई।",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "आप किसी के रूप में अभिनय कर रहे हैं, जिसके पास इस वेबसाइट के सभी हिस्सों तक " +
        "पहुंच नहीं हो सकती है।",

    IfYouThinkExistsThen: "यदि आपको लगता है कि पेज मौजूद है, तो उस व्यक्ति के रूप में लॉग इन करें जो उस तक पहुंच सकता है। ",
    LoggedInAlready: "(आप पहले से ही लॉग इन हैं, लेकिन शायद यह गलत खाता है?) ",
    ElseGoToHome_1: "अन्यथा, आप ",
    ElseGoToHome_2: "होमपेज पर जा सकते हैं।",

    CreateAcconut: "खाता बनाएँ",
    ContinueWithDots: "के साथ जारी रखें ...",
    SignUp: "जुड़ें",
    LogIn: "लॉग इन करें",
    LogInWithPwd: "पासवर्ड के साथ लॉग इन करें",
    CreateAdmAcct: "प्रशासक खाता बनाएँ:",
    AuthRequired: "इस साइट तक पहुंचने के लिए प्रमाणीकरण आवश्यक है",
    LogInToLike: "इस पोस्ट को पसंद करने के लिए लॉग इन करें",
    LogInToSubmit: "लॉग इन करें और सबमिट करें",
    LogInToComment: "टिप्पणी लिखने के लिए लॉग इन करें",
    LogInToCreateTopic: "विषय बनाने के लिए लॉग इन करें",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "या ",         // "Or "
    OrLogIn_2: "लॉग इन करें",      // "Log in" (this is a button)
    OrLogIn_3: " इसके बजाय",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "या ",
    SignUpInstead_2: "खाता बनाएँ", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", या बस ",
    OrTypeName_2: "एक नाम टाइप करें",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "या यहाँ खाता बनाएँ:",
    OrTypeName: "या अपना नाम टाइप करें:",
    OrLogIn: "या लॉग इन करें:",
    YourNameQ: "आपका नाम?",

    BadCreds: "गलत उपयोगकर्ता नाम या पासवर्ड",

    UsernameOrEmailC: "उपयोगकर्ता नाम या ईमेल:",
    PasswordC: "पासवर्ड:",
    ForgotPwd: "क्या आप अपना पासवर्ड भूल गए हैं?",

    NoPwd: "आपने अभी तक पासवर्ड नहीं चुना है।",
    CreatePwd: "पासवर्ड बनाएँ",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "कृपया हमें बताएं कि आप किस बारे में चिंतित हैं।",
    ThanksHaveReported: "धन्यवाद। आपने इसकी रिपोर्ट कर दी है। फोरम कर्मचारी इस पर नज़र डालेंगे।",
    ReportComment: "टिप्पणी की रिपोर्ट करें",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "इस पोस्ट में व्यक्तिगत डेटा है, उदाहरण के लिए किसी का असली नाम।",
    OptOffensive: "इस पोस्ट में आपत्तिजनक या अपमानजनक सामग्री है।",
    OptSpam: "यह पोस्ट एक अवांछित विज्ञापन है।",
    OptOther: "किसी अन्य कारण से इस पोस्ट के बारे में कर्मचारियों को सूचित करें।",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "यदि आप लॉग इन हैं, तो अपने नाम पर क्लिक करके और फिर ",
    YouCanShowAgain_2: "सहायता संदेश दिखाएं पर क्लिक करके आप फिर से सहायता संदेश देख सकते हैं",
  },


  // Editor

  e: {
    SimilarTopicsC: "समान विषय:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "क्षमा करें लेकिन वर्तमान में आप एक बार में केवल एक ही फ़ाइल अपलोड कर सकते हैं",
    PleaseFinishPost: "कृपया पहले अपनी पोस्ट लिखना समाप्त करें",
    PleaseFinishChatMsg: "कृपया पहले अपना चैट संदेश लिखना समाप्त करें",
    PleaseFinishMsg: "कृपया पहले अपना संदेश लिखना समाप्त करें",
    PleaseSaveEdits: "कृपया पहले अपने वर्तमान संपादन सहेजें",
    PleaseSaveOrCancel: "कृपया पहले अपना नया विषय सहेजें या रद्द करें",
    CanContinueEditing: "यदि आप संपादक को फिर से खोलते हैं, तो आप अपना टेक्स्ट संपादित करना जारी रख सकते हैं।",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "कृपया सारा टेक्स्ट न हटाएं। कुछ लिखें।",
    PleaseWriteSth: "कृपया कुछ लिखें।",
    PleaseWriteTitle: "कृपया एक विषय शीर्षक लिखें।",
    PleaseWriteMsgTitle: "कृपया एक संदेश शीर्षक लिखें।",
    PleaseWriteMsg: "कृपया एक संदेश लिखें।",

    exBold: "बोल्ड टेक्स्ट",
    exEmph: "तिरछा टेक्स्ट",
    exPre: "पहले से स्वरूपित टेक्स्ट",
    exQuoted: "उद्धृत टेक्स्ट",
    ExHeading: "शीर्षक",

    TitlePlaceholder: "शीर्षक टाइप करें — यह किस बारे में है, एक संक्षिप्त वाक्य में?",

    EditPost_1: "संपादित करें ",
    EditPost_2: "पोस्ट ",

    TypeChatMsg: "चैट संदेश टाइप करें:",
    YourMsg: "आपका संदेश:",
    CreateTopic: "नया विषय बनाएँ",
    CreateCustomHtml: "एक कस्टम HTML पेज बनाएँ (अपना स्वयं का <h1> शीर्षक जोड़ें)",
    CreateInfoPage: "एक जानकारी पेज बनाएँ",
    CreateCode: "एक सोर्स कोड पेज बनाएँ",
    AskQuestion: "एक प्रश्न पूछें",
    ReportProblem: "एक समस्या की रिपोर्ट करें",
    SuggestIdea: "एक विचार सुझाएं",
    NewChat: "चैट शीर्षक और उद्देश्य",  // MISSING, changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "निजी चैट शीर्षक और उद्देश्य",  // MISSING, changed from "New private chat" to just "Private chat".
    AppendComment: "पेज के नीचे एक टिप्पणी जोड़ें:",

    ReplyTo: "को उत्तर दें ",
    ReplyTo_theOrigPost: "मूल पोस्ट",
    ReplyTo_post: "पोस्ट ",
    AddCommentC: "एक टिप्पणी जोड़ें:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "कृपया उत्तर देने के लिए एक या अधिक पोस्ट चुनें।",

    Save: "सहेजें",
    edits: "संपादन",

    PostReply: "उत्तर पोस्ट करें",
    PostComment: "टिप्पणी पोस्ट करें",

    Post: "पोस्ट",
    comment: "टिप्पणी",
    question: "प्रश्न",

    PostMessage: "संदेश पोस्ट करें",
    SimpleEditor: "सरल संपादक",

    Send: "भेजें",
    message: "संदेश",

    Create: "बनाएँ",
    page: "पेज",
    chat: "चैट",
    idea: "विचार",
    topic: "विषय",

    Submit: "सबमिट करें",
    problem: "समस्या",

    ViewOldEdits: "पुराने संपादन देखें",

    UploadBtnTooltip: "फ़ाइल या छवि अपलोड करें",
    BoldBtnTooltip: "टेक्स्ट को बोल्ड करें",
    EmBtnTooltip: "तिरछा करें",
    QuoteBtnTooltip: "उद्धरण",
    PreBtnTooltip: "पहले से स्वरूपित टेक्स्ट",
    HeadingBtnTooltip: "शीर्षक",

    TypeHerePlaceholder: "यहाँ टाइप करें। आप मार्कडाउन और HTML का उपयोग कर सकते हैं। छवियों को पेस्ट करने के लिए ड्रैग और ड्रॉप करें।",

    Maximize: "बड़ा करें",
    ToNormal: "वापस सामान्य पर",
    TileHorizontally: "क्षैतिज रूप से टाइल करें",

    PreviewC: "पूर्वावलोकन:",
    TitleExcl: " (शीर्षक शामिल नहीं)",
    ShowEditorAgain: "संपादक फिर से दिखाएं",
    Minimize: "छोटा करें",

    PreviewInfo: "यहाँ आप पूर्वावलोकन कर सकते हैं कि आपकी पोस्ट कैसी दिखेगी।",
    CannotType: "आप यहाँ टाइप नहीं कर सकते।",

    LoadingDraftDots: "कोई भी ड्राफ्ट लोड हो रहा है...",
    DraftUnchanged: "अपरिवर्तित।",
    CannotSaveDraftC: "ड्राफ्ट सहेजा नहीं जा सकता:",
    DraftSavedBrwsr: "ड्राफ्ट ब्राउज़र में सहेजा गया।",   // MISSING
    DraftSaved: (nr: string | number) => `ड्राफ्ट ${nr} सहेजा गया।`,
    DraftDeleted: (nr: string | number) => `ड्राफ्ट ${nr} हटा दिया गया।`,
    WillSaveDraft: (nr: string | number) => `ड्राफ्ट ${nr} सहेजा जाएगा ...`,
    SavingDraft: (nr: string | number) => `ड्राफ्ट ${nr} सहेजा जा रहा है ...`,
    DeletingDraft: (nr: string | number) => `ड्राफ्ट ${nr} हटाया जा रहा है ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "श्रेणी चुनें",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "विषय प्रकार चुनें:",
    DiscussionExpl: "किसी चीज़ के बारे में चर्चा।",
    QuestionExpl: "एक उत्तर को स्वीकृत उत्तर के रूप में चिह्नित किया जा सकता है।",
    ProblExpl: "यदि कुछ टूटा हुआ है या काम नहीं करता है। ठीक/हल के रूप में चिह्नित किया जा सकता है।",
    IdeaExpl: "एक सुझाव। हो गया/कार्यान्वित के रूप में चिह्नित किया जा सकता है।",
    ChatExpl: "एक शायद कभी न खत्म होने वाली बातचीत।",
    PrivChatExpl: "केवल उन लोगों को दिखाई देता है जिन्हें चैट में शामिल होने के लिए आमंत्रित किया जाता है।",

    CustomHtml: "कस्टम HTML पेज",
    InfoPage: "जानकारी पेज",
    Code: "कोड",
    EmbCmts: "एम्बेडेड टिप्पणियाँ",
    About: "के बारे में",
    PrivChat: "निजी चैट",
    Form: "फॉर्म",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "जुड़ने के लिए और कोई समुदाय नहीं है।",
    SelCmty: "समुदाय चुनें ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "सहायता के लिए खोजें",  // MISSING
    TxtToFind: "खोजने के लिए टेक्स्ट",
  },


  // No internet

  ni: {
    NoInet: "कोई इंटरनेट कनेक्शन नहीं",
    PlzRefr: "नवीनतम परिवर्तन देखने के लिए पेज को रिफ्रेश करें। (कनेक्शन टूट गया था)",
    RefrNow: "अभी रिफ्रेश करें",
  },


  PostDeleted: (postNr: number) => `वह पोस्ट, नंबर ${postNr}, हटा दी गई है।`,
  NoSuchPost: (postNr: number) => `इस पेज पर पोस्ट नंबर ${postNr} नहीं है।`,
  NoPageHere: "यह पेज हटा दिया गया है, या यह कभी अस्तित्व में नहीं था, या आप इस तक नहीं पहुंच सकते।",
  GoBackToLastPage: "पिछले पेज पर वापस जाएं",

};
