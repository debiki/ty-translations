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

var t_ku_TR: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Çalak",
  Activity: "Çalakî",
  Add: "Lê zêde bike",
  AddingDots: "Tê zêdekirin ...",
  AddComment: "Şirove lê zêde bike",
  Admin: "Admin",
  AdvSearch: "Lêgerîna pêşketî",
  Anonym: "Anonîm",
  Away: "Dûr",
  Back: "Paşve",
  BlogN: "Blog",
  Bookmarks: "Bijare",
  Cancel: "Betal bike",
  Categories: "Kategorî",
  Category: "Kategorî",
  ChangeV: "Guhertin",
  ClickToShow: "Ji bo nîşandanê bitikîne",
  ChangeDots: "Biguhere ...",
  ChatN: "Sîrpan",
  Chatting: "Sîrpanî kirin",
  CheckYourEmail: "E-peyama xwe kontrol bike",
  Close: "Bigire",
  closed: "girtî",
  comments: "şirove",   // as in:  "123 comments"
  Continue: "Berdewam bike",
  Created: "Hatiye afirandin",
  Delete: "Jê bibe",
  Deleted: "Hatiye jêbirin",
  DirectMessage: "Peyama rasterast",
  Discussion: "Gotûbêj",
  discussion: "gotûbêj",
  done: "qediya",
  EditV: "Sererast bike",
  Editing: "Tê sererastkirin",
  EmailC: "E-peyam: ",
  EmailAddress: "Navnîşana e-peyamê",
  EmailAddresses: "Navnîşanên e-peyamê",
  EmailSentD: "E-peyam hat şandin.",
  Forum: "Forum",
  GetNotifiedAbout: "Agahdarî werbigire derbarê",
  GroupsC: "Kom:",
  Hide: "Veşêre",
  Home: "Mal",
  Idea: "Fikir",
  Join: "Tevlî bibe",
  KbdShrtcsC: "Kurtebirên klavyeyê: ",
  Loading: "Tê barkirin...",
  LoadMore: "Zêdetir bar bike ...",
  LogIn: "Têkeve",
  LoggedInAs: "Têketî wekî ",
  LogOut: "Derkeve",
  Maybe: "Belkî",
  Manage: "Birêve bibe",
  Members: "Endam",
  MessageN: "Peyam",
  MoreDots: "Zêdetir...",
  Move: "Veguhêze",
  Name: "Nav",
  NameC: "Nav:",
  NewTopic: "Mijara nû",
  NoCancel: "Na, betal bike",
  Notifications: "Agahdarî",
  NotImplemented: "(Hîn nehatiye kirin)",
  NotYet: "Hêj na",
  NoTitle: "Bê sernav",
  NoTopics: "Mijar tune ne.",
  Okay: "Temam",
  OkayDots: "Temam ...",
  Online: "Serhêl",
  onePerLine: "her rêzekê yek",
  PreviewV: "Pêşdîtin",
  Problem: "Pirsgirêk",
  progressN: "pêşkeftin",
  Question: "Pirs",
  Recent: "Yên dawî",
  Remove: "Rake",
  Reopen: "Dîsa veke",
  ReplyV: "Bersiv bide",
  Replying: "Bersiv tê dayîn",
  Replies: "Bersiv",
  replies: "bersiv",
  Save: "Tomar bike",
  SavingDots: "Tê tomarkirin ...",
  SavedDot: "Hat tomarkirin.",
  Search: "Lêgerîn",
  SendMsg: "Peyamê bişîne",
  ShowPreview: "Pêşdîtinê nîşan bide",
  SignUp: "Tevlî bibe",
  Solution: "Çareserî",
  started: "dest pê kir",
  Summary: "Kurtasî",
  Submit: "Bişîne",
  Tag: "Etîket",
  Tags: "Etîket",
  Tools: "Amûr",
  Topics: "Mijar",
  TopicTitle: "Sernavê mijarê",
  TopicType: "Cureyê mijarê",
  UploadingDots: "Tê barkirin...",
  Username: "Navê bikarhêner",
  Users: "Bikarhêner",
  Welcome: "Bi xêr hatî",
  Wiki: "Wîkî",
  Yes: "Erê",
  YesBye: "Erê, bi xatirê te",
  YesDoThat: "Erê, wiha bike",
  You: "Tu",
  you: "tu",

  // Trust levels.
  Guest:  "Mêvan",
  NewMember: "Endamê nû",
  BasicMember: "Endamê bingehîn",
  FullMember: "Endamê tije",
  TrustedMember: "Endamê pêbawer",
  RegularMember: "Endamê pêbawer ê asayî",
  CoreMember: "Endamê bingehîn",

  // Periods.
  PastDay: "Roja dawî",
  PastWeek: "Hefteya dawî",
  PastMonth: "Meha dawî",
  PastQuarter: "Çaryeka dawî",
  PastYear: "Sala dawî",
  AllTime: "Hemû dem",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "m",  // months
  daysLtr: "r",      // days
  hoursLtr: "s",     // hours
  minsLtr: "x",      // minutes
  secsLtr: "ç",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "Berî 1 rojê" : `Berî ${numDays} rojan`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "Berî 1 saetê" : `Berî ${numHours} saetan`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "Berî 1 xulekê" : `Berî ${numMins} xulekan`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "Berî 1 çirkeyê" : `Berî ${numSecs} çirkeyan`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-peyam hewce ye",
    NoSpcs: "Ji kerema xwe valahiyan bikar neyîne",
    InvldAddr: "Navnîşana e-peyamê ne derbasdar e",
    NoBadChrs: "Ji kerema xwe karakterên ecêb bikar neyîne",

    // Full name input field:
    NotOnlSpcs: "Ji kerema xwe ne tenê valahiyan bikar bîne",
    NoAt: "Ji kerema xwe @ bikar neyîne",

    // Username input field:
    NoDash: "Ji kerema xwe tire (-) bikar neyîne",
    DontInclAt: "@ tevlê neke",
    StartEndLtrDgt: "Bi tîp an jî reqemekê dest pê bike û biqedîne",
    OnlLtrNumEtc: "Tenê tîp (a-z, A-Z), reqem û _ (binxêz)",
    // This shown just below the username input:
    UnUnqShrt_1: "Navê te yê ",
    UnUnqShrt_2: "@bikarhêner",
    UnUnqShrt_3: ", bêhempa û kurt",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Divê herî kêm ${minLength} karakter be`,
    TooLong: (maxLength: number) => `Zêde dirêj e. Divê herî zêde ${maxLength} karakter be`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Her Peyam",
    EveryPostInTopic: "Tu yê derbarê hemû bersivên nû yên di vê mijarê de bêyî agahdarkirin.",
    EveryPostInCat: "Tu yê derbarê hemû mijar û bersivên nû yên di vê kategoriyê de bêyî agahdarkirin.",
    EveryPostInTopicsWithTag: "Tu yê derbarê mijarên nû yên bi vê etîketê û hemû bersivên wan mijaran de bêyî agahdarkirin.",
    EveryPostWholeSite: "Tu yê derbarê hemû mijar û bersivên nû yên li her derê bêyî agahdarkirin.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Mijarên Nû",
    NewTopicsInCat: "Tu yê derbarê mijarên nû yên di vê kategoriyê de bêyî agahdarkirin.",
    NewTopicsWithTag: "Tu yê derbarê mijarên nû yên bi vê etîketê bêyî agahdarkirin.",
    NewTopicsWholeSite: "Tu yê derbarê mijarên nû yên li her derê bêyî agahdarkirin.",

    Tracking: "Şopandin",

    Normal: "Asayî",
    NormalDescr: "Heke kesek bi te re biavêje, her weha nerasterast jî (mînak bersivek ji bo bersiva te), tu yê bêyî agahdarkirin.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Kêm-deng",
    HushedDescr: "Tenê heke kesek rasterast bi te re biavêje, tu yê bêyî agahdarkirin.",

    Muted: "Bêdeng",
    MutedTopic: "Agahdarî tune ne.",
  },


  // Forum intro text

  fi: {
    Edit: "Sererast bike",
    Hide_1: "Veşêre",
    Hide_2: ", ji bo dîsa vekirinê ",
    Hide_3: " bitikîne",
  },


  // Forum categories

  fcs: {
    All: "Hemû", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Lîsteya mijaran",

    // Select category dropdown

    from: "ji",
    in: "di nav de",
    AllCats: "Hemû kategorî",

    // Topic sort order

    Active: "Yên çalak pêşî",
    ActiveDescr: "Mijarên ku herî dawî çalak bûne pêşî nîşan dide",

    New: "Nû",
    NewDescr: "Mijarên herî nû pêşî nîşan dide",

    Top: "Populer",
    TopDescr: "Mijarên populer pêşî nîşan dide",

    // Topic filter dropdown

    AllTopics: "Hemû mijar",

    ShowAllTopics: "Hemû mijaran nîşan bide",
    ShowAllTopicsDescr: "Mijarên jêbirî ne tê de",

    WaitingTopics: "Mijarên li bendê",
    OnlyWaitingDescr_1: "Tenê mijarên ku ",
    OnlyWaitingDescr_2: "li benda ",
    OnlyWaitingDescr_3: "çareseriyekê ne an jî yên ku dê bên kirin nîşan dide",

    YourTopics: "Mijarên te",
    AssignedToYou: "Ji bo te hatine erkdarkirin",

    DeletedTopics: "Yên jêbirî nîşan bide",
    ShowDeleted: "Yên jêbirî nîşan bide",
    ShowDeletedDescr: "Hemû mijaran nîşan bide, mijarên jêbirî jî tê de",

    // Rightmost buttons

    ViewCategories: "Kategoriyan bibîne",
    EditCat: "Kategoriyê Sererast bike",
    CreateCat: "Kategoriyê Biafirîne",
    CreateTopic: "Mijarê Biafirîne",
    PostIdea: "Fikirekê Parve bike",
    AskQuestion: "Pirsekê Bipirse",
    ReportProblem: "Pirsgirêkekê Ragihîne",
    CreateMindMap: "Nexşeya Hiş Biafirîne",
    CreatePage: "Rûpelê Biafirîne",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Îkonan rave bike...",
    IconExplanation: "Ravekirina îkonan:",
    ExplGenDisc: "Gotûbêjeke giştî.",
    ExplQuestion: "Pirsek ku bersiva wê nehatiye pejirandin.",
    ExplAnswer: "Pirsek ku bersiva wê hatiye pejirandin.",
    ExplIdea: "Fikirek / pêşniyarek.",
    ExplProblem: "Pirsgirêkek.",
    ExplPlanned: "Tiştekî ku em plan dikin bikin an jî sererast bikin.",
    ExplDone: "Tiştekî ku hatiye kirin an jî sererastkirin.",
    ExplClosed: "Mijar hatiye girtin.",
    ExplPinned: "Mijara ku her dem di serî de tê lîstekirin.",

    PopularTopicsComma: "Mijarên populer, ",
    TopFirstAllTime: "Mijarên herî populer ên hemû deman pêşî nîşan dide.",
    TopFirstPastDay: "Mijarên ku di roja dawî de populer bûne nîşan dide.",

    CatHasBeenDeleted: "Ev kategorî hatiye jêbirin",

    TopicsActiveFirst: "Mijar, yên ku herî dawî çalak bûne pêşî",
    TopicsNewestFirst: "Mijar, yên herî nû pêşî",

    CreatedOn: "Dema afirandinê: ",
    LastReplyOn: "\nBersiva dawî: ",
    EditedOn: "\nDema sererastkirinê: ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "mijar afirand",
    frequentPoster: "nivîskarê domdar",
    mostRecentPoster: "nivîskarê herî dawî",

    inC: "di: ",

    TitleFixed: "Ev hatiye sererastkirin",
    TitleDone: "Ev hatiye kirin",
    TitleStarted: "Me dest bi vê kir",
    TitleStartedFixing: "Me dest bi sererastkirina vê kir",
    TitleUnsolved: "Ev pirsgirêkeke neçareserkirî ye",
    TitleIdea: "Ev fikirek e",
    TitlePlanningFix: "Em plan dikin ku vê sererast bikin",
    TitlePlanningDo: "Em plan dikin ku vê bikin",
    TitleChat: "Ev kanaleke sîrpanê ye",
    TitlePrivateChat: "Ev kanaleke sîrpanê ya taybet e",
    TitlePrivateMessage: "Peyameke taybet",
    TitleInfoPage: "Ev rûpeleke agahdarî ye",
    TitleDiscussion: "Gotûbêjek",
    IsPinnedGlobally: "\nHatiye nîşankirin, lewma di serî de tê nîşandan.",
    IsPinnedInCat: "\nDi kategoriya xwe de hatiye nîşankirin, lewma di kategoriya xwe de di serî de tê nîşandan.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Mijarên dawî (yên li bendê)",
    RecentTopicsInclDel: "Mijarên dawî (yên jêbirî jî tê de)",
    RecentTopics: "Mijarên dawî",
    _replies: " bersiv",
    _deleted: " (jêbirî)",
    _defCat: " (kategoriya standard)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Peyamên dawî",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " di vê sîrpanê de serhêl in",    // example: "5 online in this chat"
    NumOnlForum: " di vê forumê de serhêl in",

    // Open left-sidebar button title.
    WatchbBtn: "Mijarên te",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Mijarên te yên dawî, sîrpanên te, peyamên rasterast",

    // Title shown on user profile pages.
    AbtUsr: "Derbarê Bikarhêner de",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Ji profîla bikarhêner vegere",
    BackFromAdm: "Ji beşa admin vegere",

    // Title shown on full text search page.
    SearchPg: "Rûpela Lêgerînê",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Lê zêde bike ...",
    RecentlyViewed: "Mijarên ku herî dawî hatine dîtin",
    JoinedChats: "Sîrpanên ku tu tevlî bûyî",
    ChatChannels: "Kanalên Sîrpanê",
    CreateChat: "Kanala sîrpanê biafirîne",
    DirectMsgs: "Peyamên Rasterast",
    NoChats: "Tune ne",    // meaning: "No chat messages"
    NoDirMsgs: "Tune ne",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Çalakiyên mijarê",
    ViewPeopleHere: "Mirovan li vir bibîne",
    ViewAddRemoveMembers: "Endaman bibîne / lê zêde bike / rake",
    ViewChatMembers: "Endamên sîrpanê bibîne",
    EditChat: "Daxuyaniya sîrpanê sererast bike",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Ji vê sîrpanê derkeve",
    LeaveThisCommunity: "Ji vê civakê derkeve",
    JoinThisCommunity: "Tevlî vê civakê bibe",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Şiroveyên dawî yên di vê mijarê de:",
    NoComments: "Şirove tune ne.",

    YourBookmarks: "Bijareyên te:",

    UsersOnline: "Bikarhênerên serhêl:",
    UsersOnlineForum: "Bikarhênerên di vê forumê de serhêl:",
    UsersInThisChat: "Bikarhênerên di vê sîrpanê de:",
    UsersInThisTopic: "Bikarhênerên di vê mijarê de:",

    GettingStartedGuide: "Rêberê Admin", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Rêberê Admin",          // ... but what? It's here already, just reuse this transl field
    Guide: "Rêber",

    // How to hide the sidebar.
    CloseShortcutS: "Bigire (kurtebira klavyeyê: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Zêdetir mirov lê zêde bike",

    // Shown next to one's own username, in a list of users.
    thatsYou: "ev tu yî",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Tenê tu heyî, wekî xuya dike",
    YouAnd: "Tu, û ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " kesekî" : ` ${numStrangers} kesên`;
      const have = numStrangers === 1 ? "ku tê de neketî" : "ên ku tê de neketine";
      return people + " " + have;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Bersivên li milê çepê dibe ku bi ",
    bestFirst: "yên herî baş pêşî hatibin rêzkirin.",
    ButBelow: "Lê li jêr ",
    insteadBy: " heman bersiv li şûna wê bi ",
    newestFirst: "yên herî nû pêşî têne rêzkirin.",

    SoIfLeave: "Ji ber vê yekê heke tu derkeve û paşê vegere vir, li jêr tu yê ",
    allNewReplies: "hemû bersivên nû bibînî.",
    Click: "Bitikîne",
    aReplyToReadIt: " bersivek li jêr ji bo xwendina wê — ji ber ku li jêr tenê kurtasî tê nîşandan.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Ji bo guhertina statuyê bitikîne",
    ClickToViewAnswer: "Ji bo dîtina bersivê bitikîne",
    ViewAnswer: "Bersivê bibîne",
    ChangeStatusC: "Statuyê biguhere bo:",
    ChangeCatC: "Kategoriyê biguhere:",
    ChangeTopicTypeC: "Cureyê mijarê biguhere:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "pirsek e",
    hasAccptAns: "bersiveke pejirandî heye",
    aProblem: "pirsgirêkek e",
    planToFix: "plana sererastkirinê",
    anIdea: "fikirek e",
    planToDo: "plana kirinê",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Ev form hatiye ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "girtin; tu êdî nikarî wê tijî bikî û parve bikî.",

    ThisTopicClosed_1: "Ev mijar hatiye ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Tu hîn jî dikarî şiroveyan parve bikî.",   // SYNC removed "won't make ... bump ...

    ThisPageDeleted: "Ev rûpel hatiye jêbirin",
    CatDeldPageToo: "Kategorî hatiye jêbirin, lewma ev rûpel jî hat jêbirin",

    ThreadDeld: "Mijar hat jêbirin",
    CmntDeld: "Şirove hat jêbirin",
    PostDeld: "Peyam hat jêbirin",
    DiscDeld: "Gotûbêj hat jêbirin",
    PageDeld: "Rûpel hat jêbirin",
    PagePendAppr: "Rûpel li benda pejirandinê ye",
    TitlePendAppr: "Sernav li benda pejirandinê ye",
    TextPendingApproval: "Nivîs li benda pejirandinê ye",

    TooltipQuestClosedNoAnsw: "Ev pirs hatiye girtin bêyî ku bersiveke pejirandî hebe.",
    TooltipTopicClosed: "Ev mijar girtî ye.",

    TooltipQuestSolved: "Ev pirsek çareserkirî ye",
    TooltipQuestUnsolved: "Ev pirsek neçareserkirî ye",

    StatusDone: "Qediya",
    TooltipProblFixed: "Ev hatiye sererastkirin",
    TooltipDone: "Ev hatiye kirin",

    StatusStarted: "Dest pê kir",
    TooltipFixing: "Me dest bi sererastkirina vê kir",
    TooltipImplementing: "Me dest bi kirina vê kir",

    StatusPlanned: "Plankirî",
    TooltipProblPlanned: "Em plan dikin ku vê sererast bikin",
    TooltipIdeaPlanned: "Em plan dikin ku vê bikin",

    StatusNew: "Nû",
    StatusNewDtl: "Mijara nû, tê gotûbêjkirin",
    TooltipUnsProbl: "Ev pirsgirêkeke neçareserkirî ye",
    TooltipIdea: "Ev fikirek e",

    TooltipPersMsg: "Peyama kesane",
    TooltipChat: "# tê wateya Kanala Sîrpanê",
    TooltipPrivChat: "Ev kanaleke sîrpanê ya taybet e",

    TooltipPinnedGlob: "\nBi giştî hatiye nîşankirin.",
    TooltipPinnedCat: "\nDi vê kategoriyê de hatiye nîşankirin.",

    SolvedClickView_1: "Di peyama #",
    SolvedClickView_2: " de hat çareserkirin, ji bo dîtinê bitikîne",

    PostHiddenClickShow: "Peyam hatiye veşartin; ji bo nîşandanê bitikîne",
    ClickSeeMoreRepls: "Zêdetir bersivan nîşan bide",
    ClickSeeMoreComments: "Zêdetir şiroveyan nîşan bide",
    ClickSeeThisComment: "Ji bo nîşandana vê şiroveyê bitikîne",
    clickToShow: "ji bo nîşandanê bitikîne",

    ManyDisagree: "Gelek kes li dijî vê ne:",
    SomeDisagree: "Hinek kes li dijî vê ne:",

    PendAppr: "Li benda pejirandinê ye",
    CmtPendAppr: "Şirove li benda pejirandinê ye, hat parvekirin ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Şiroveya te ya li jêr" : "Şiroveya li jêr") + " li benda pejirandinê ye.",

    _and: " û",

    repliesTo: "bersiv ji bo",
    InReplyTo: "Di bersiva",
    YourReplyTo: "Bersiva te ji bo ",
    YourChatMsg: "Peyama te ya sîrpanê: ",
    YourDraft: "Pêşnivîsa te",
    YourEdits: "Sererastkirinên te: ",
    YourProgrNoteC: "Nîşeya te ya pêşkeftinê:",
    aProgrNote: "nîşeyeke pêşkeftinê: ",

    ReplyingToC: "Bersiv ji bo:",
    ScrollToPrevw_1: "Biçe ",
    ScrollToPrevw_2: "pêşdîtinê",

    UnfinEdits: "Sererastkirinên neqediyayî",
    ResumeEdting: "Dîsa dest bi sererastkirinê bike",
    DelDraft: "Pêşnivîsê jê bibe",

    ClickViewEdits: "Ji bo dîtina sererastkirinên kevin bitikîne",

    By: "Ji hêla ", // ... someones name

    // Discussion ...
    aboutThisIdea: "derbarê vê fikrê de ku em ê çawa û gelo bikin",
    aboutThisProbl: "derbarê vê pirsgirêkê de ku em ê çawa û gelo sererast bikin",

    AddProgrNote: "Nîşeya pêşkeftinê lê zêde bike",
    // Progress ...
    withThisIdea: "bi kirina vê fikrê",
    withThisProbl: "bi çareserkirina vê pirsgirêkê",
    withThis: "bi kirina vê",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Agahdarî derbarê vê mijarê de:",

    // If is a direct message topic, members listed below this text.
    Msg: "Peyam",

    SmrzRepls: "Bersivan Kurt bike",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} bersiv hene. Dema xwendinê ya texmînî: ${minutes} xulek`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Qediya. Ji ${numShownBefore} bersivên ku berê dihatin nîşandan, ${numSummarized} bersiv hatin kurtkirin.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Mijarê bigire",
    CloseOwnQuestionTooltip: "Heke êdî hewcedariya te bi bersivekê tune be, vê pirsê bigire.",
    CloseOthersQuestionTooltip: "Heke hewcedarî bi bersivekê tune be, mînak heke ne li ser mijarê be an jî berê di mijarek din de hatibe bersivandin, vê pirsê bigire.",
    CloseToDoTooltip: "Heke hewce nake ku were kirin an sererastkirin, vê Karê-dê-were-kirin bigire.",
    CloseTopicTooltip: "Heke êdî hewcedarî bi gotûbêjeke din tune be, vê mijarê bigire.",

    AcceptBtnExpl: "Vê wekî bersiva pirs an pirsgirêkê bipejirîne",
    SolutionQ: "Çareserî?",
    ClickUnaccept: "Ji bo betalkirina pejirandina vê bersivê bitikîne",
    PostAccepted: "Ev peyam wekî bersiv hat pejirandin",

    NumLikes: (num: number) => num === 1 ? "1 Ecibandin" : num + " Ecibandin",
    NumDisagree: (num: number) => num + " Li dijî",
    NumBury: (num: number) => num === 1 ? "1 Binaxkirin" : num + " Binaxkirin",
    NumUnwanted: (num: number) => num === 1 ? "1 Nexwestî" : num + " Nexwestî",

    MoreVotes: "Zêdetir deng...",
    LikeThis: "Vê biecibîne",
    LinkToPost: "Lînka vê peyamê",
    Report: "Ragihîne",
    ReportThisPost: "Vê peyamê ragihîne",
    Admin: "Admin",
    DiscIx: "Endeksa gotûbêjan",

    Disagree: "Li dijî me",
    DisagreeExpl: "Ji bo ku tu li dijî vê peyamê yî an jî ji bo ku kesên din derbarê xeletiyên rastîn de agahdar bikî li vir bitikîne.",
    Bury: "Binax bike",
    BuryExpl: "Ji bo ku peyamên din berî vê peyamê werin rêzkirin bitikîne. Tenê xebatkarên forumê dikarin dengê te bibînin.",
    Unwanted: "Nexwestî",
    UnwantedExpl: "Heke tu vê peyamê li ser vê malperê naxwazî. Ev ê pêbaweriya ku ez bi nivîskarê peyamê re heye kêm bike. Tenê xebatkarên forumê dikarin dengê te bibînin.",

    AddTags: "Etîketan lê zêde bike/rake",
    UnWikify: "Ji Wîkî derxe",
    Wikify: "Bike Wîkî",
    PinDeleteEtc: "Nîşan bike / Jê bibe / Kategorî ...",
  },


  // Share dialog

  sd: {
    Copied: "Hat kopîkirin.",
    CtrlCToCopy: "Ji bo kopîkirinê CTRL+C bitikîne.",
    ClickToCopy: "Ji bo kopîkirina lînkê bitikîne.",
  },


  // Chat

  c: {
    About_1: "Ev kanala sîrpanê ya ",
    About_2: " ye, ku ji hêla ",
    ScrollUpViewComments: "Ji bo dîtina şiroveyên kevn ber bi jor ve herê",
    Purpose: "Armanc:",
    MessageDeleted: "(Peyam hat jêbirin)",
    JoinThisChat: "Tevlî vê sîrpanê bibe",
    PostMessage: "Peyamê parve bike",
    AdvancedEditor: "Sererastkerê pêşketî",
    TypeTitle: "Sernavek binivîse — ev sîrpan bi çend peyvan derbarê çi de ye?",
    TypePurpose: "Armancek binivîse — dikare ji sernavê dirêjtir û raveker be.",
    TypeHere: "Li vir binivîse. Tu dikarî Markdown û HTML bikar bînî.",
  },


  // My Menu

  mm: {
    NeedsReview: "Hewceyî nirxandinê ye ",
    AdminHelp: "Alîkariya admin ",
    StaffHelp: "Alîkariya xebatkaran ",
    DraftsEtc: "Pêşnivîs, bijare, kar",
    MoreNotfs: "Hemû agahdariyan bibîne",
    DismNotfs: "Hemûyan wekî xwendî nîşan bike",
    ViewProfile: "Profîla xwe bibîne",
    ViewGroups: "Koman bibîne",
    LogOut: "Derkeve",
    UnhideHelp: "Peyamên alîkariyê nîşan bide",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Biçe ser:",
    Scroll: "Biçe",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "aç (vegere)",
    BackExpl: "Vegere ser pozîsyona xwe ya berê ya li ser vê rûpelê",

    PgTop: "Serê rûpelê",
    PgTopHelp: "Biçe serê rûpelê. Kurtebira klavyeyê: 1",
    Repl: "Bersiv",
    ReplHelp: "Biçe beşa Bersivan. Kurtebir: 2",
    Progr: "Pêşkeftin",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Biçe beşa Pêşkeftinê. Kurtebir: 3",
    PgBtm: "Binê rûpelê",
    Btm: "Bin",
    BtmHelp: "Biçe binê rûpelê. Kurtebir: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", û ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " ji bo vegera paşve",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Bikarhêneran hilbijêre",
    AddUsers: "Bikarhêneran lê zêde bike",
  },


  // About user dialog

  aud: {
    IsMod: "Moderator e.",
    IsAdm: "Admin e.",
    IsDeld: "Hatiye deaktîvkirin an jî jêbirin.",
    ThisIsGuest: "Ev bikarhênerek mêvan e, dikare bibe her kes.",
    ViewInAdm: "Di Beşa Admin de Bibîne",
    ViewProfl: "Profîlê Bibîne",
    ViewComments: "Şiroveyên din bibîne",
    RmFromTpc: "Ji mijarê rake",
    EmAdrUnkn: "Navnîşana e-peyamê nayê zanîn — dê derbarê bersivan de agahdarî neyê şandin ji vê mêvanî re.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Vebijêrk",
    Invites: "Vexwendin",
    DraftsEtc: "Pêşnivîs hwd.",
    About: "Derbarê",
    Privacy: "Veşarî",
    Security: "Ewlehî",
    Account: "Hesab",
    Interface: "Navber",

    // ----- Overview stats

    JoinedC: "Tevlîbûn: ",
    PostsMadeC: "Peyamên hatine parvekirin: ",
    LastPostC: "Peyama dawî: ",
    LastSeenC: "Dîtina dawî: ",
    TrustLevelC: "Asta pêbaweriyê: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Wêneyê bar bike",
    ChangePhoto: "Wêneyê biguhere",
    ImgTooSmall: "Wêne pir piçûk e: divê herî kêm 100 x 100 be",

    // ----- Activity

    OnlyStaffCanSee: "Tenê xebatkar û endamên bingehîn ên pêbawer dikarin vê bibînin.",
    OnlyMbrsCanSee: "Tenê mirovên ku ji bo demekê endamên çalak bûne dikarin vê bibînin.",
    Nothing: "Tiştek tune ku were nîşandan",
    Posts: "Peyam",
    NoPosts: "Peyam tune ne.",
    Topics: "Mijar",
    NoTopics: "Mijar tune ne.",

    // ----- User status

    UserBanned: "Ev bikarhêner hatiye qedexekirin",
    UserSuspended: (dateUtc: string) => `Ev bikarhêner heta ${dateUtc} UTC hatiye sekinandin`,
    ReasonC: "Sedem: ",

    DeactOrDeld: "Hatiye deaktîvkirin an jî jêbirin.",
    isGroup: " (komek e)",
    isGuest: " — bikarhênerek mêvan, dikare bibe her kes",
    isMod: " – moderator",
    isAdmin: " – admin",
    you: "(tu)",

    // ----- Notifications page

    NoNotfs: "Agahdarî tune ne",
    NotfsToYouC: "Agahdarî ji bo te:",
    NotfsToOtherC: (name: string) => `Agahdarî ji bo ${name}:`,
    DefNotfsSiteWide: "Agahdariyên standard, li seranserê malperê",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "ji bo",

    // ----- Drafts Etc page

    NoDrafts: "Pêşnivîs tune ne",
    YourDraftsC: "Pêşnivîsên te:",
    DraftsByC: (name: string) => `Pêşnivîsên ${name}:`,

    // ----- Invites page

    InvitesIntro: "Li vir tu dikarî mirovan vexwendî vê malperê bikî. ",
    InvitesListedBelow: "Vexwendinên ku te berê şandine li jêr têne lîstekirin.",
    NoInvites: "Te hîn tu kes vexwendî nekiriye.",

    InvitedEmail: "E-peyama vexwendî",
    WhoAccepted: "Endamê ku pejirand",
    InvAccepted: "Vexwendin hat pejirandin",
    InvSent: "Vexwendin hat şandin",
    JoinedAlready: "Berê tevlî bûye",

    SendAnInv: "Mirovan vexwendî bike",
    SendInv: "Vexwendinan bişîne",
    SendInvExpl:
        "Em ê ji hevalên te re e-peyamek kurt bişînin. Ew ê li ser lînkekê bitikînin " +
        "da ku tavilê tevlî bibin, têketin hewce nake. " +
        "Ew ê bibin endamên asayî, ne moderator an admin.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Temam. Ez ê ji wan re e-peyamek bişînim.",
    NoOneToInv: "Kes tune ku were vexwendin.",
    InvNotfLater: "Gava ku min ew vexwendin, ez ê paşê te agahdar bikim.",
    AlreadyInvSendAgainQ: "Ev berê hatine vexwendin — belkî tu bixwazî wan dîsa vexwendî bikî?",
    InvErr_1: "Encama van ",
    InvErr_2: "xeletî",
    InvErr_3: " bûn:",
    TheseJoinedAlrdyC: "Ev berê tevlî bûne, lewma min ew vexwendî nekirin:",
    ResendInvsQ: "Vexwendinan dîsa ji van kesên re bişîne? Ew berê hatine vexwendin.",
    InvAgain: "Dîsa vexwendî bike",

    // ----- Preferences, About

    AboutYou: "Derbarê te de",
    WebLink: "Her malper an rûpela te.",

    NotShownCannotChange: "Bi giştî nayê nîşandan. Nayê guhertin.",

    // The full name or alias:
    NameOpt: "Nav (bijartî)",

    NotShown: "Bi giştî nayê nîşandan.",

    // The username:
    MayChangeFewTimes: "Tu dikarî tenê çend caran biguherînî.",
    notSpecified: "(nehatiye diyarkirin)",
    ChangeUsername_1: "Tu dikarî navê bikarhêner tenê çend caran biguherînî.",
    ChangeUsername_2: "Guhertina wê ya pir caran dikare serê kesên din tevlihev bike — " +
        "ew ê nizanibin çawa te @binav bikin.",

    NotfAboutAll: "Ji bo her peyamek nû bêyî agahdarkirin (heya ku tu mijar an kategoriyê bêdeng nekî)",
    NotfAboutNewTopics: "Ji bo mijarên nû bêyî agahdarkirin (heya ku tu kategoriyê bêdeng nekî)",

    ActivitySummaryEmails: "E-peyamên kurteya çalakiyan",

    EmailSummariesToGroup:
        "Dema ku endamên vê komê serdana vir nekin, bi awayekî standard, kurteya mijarên populer û " +
        "tiştên din ji wan re bi e-peyamê bişîne.",
    EmailSummariesToMe:
        "Dema ku ez serdana vir nekim, kurteya mijarên populer û tiştên din ji min re bi e-peyamê bişîne.",

    AlsoIfTheyVisit: "Heke ew bi rêkûpêk serdana vir bikin jî ji wan re bi e-peyamê bişîne.",
    AlsoIfIVisit: "Heke ez bi rêkûpêk serdana vir bikim jî ji min re bi e-peyamê bişîne.",

    HowOftenWeSend: "Em ê van e-peyaman her çend caran bişînin?",
    HowOftenYouWant: "Tu van e-peyaman her çend caran dixwazî?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Çalakiya te ya dawî ji biyaniyan û endamên nû re were veşartin?",
    HideActivityStrangers_2: "(Lê ne ji bo kesên ku ji bo demekê endamên çalak bûne.)",
    HideActivityAll_1: "Çalakiya te ya dawî ji her kesî re were veşartin?",
    HideActivityAll_2: "(Ji xeynî xebatkar û endamên bingehîn ên pêbawer.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Navnîşanên e-peyamê",
    PrimaryDot: "Sereke. ",
    VerifiedDot: "Pejirandî. ",
    NotVerifiedDot: "Nehatiye pejirandin. ",
    ForLoginWithDot: (provider: string) => `Ji bo têketina bi ${provider}. `,
    MakePrimary: "Bike Sereke",
    AddEmail: "Navnîşana e-peyamê lê zêde bike",
    TypeNewEmailC: "Navnîşaneke nû ya e-peyamê binivîse:",
    MaxEmailsInfo: (numMax: number) => `(Tu nikarî zêdetirî ${numMax} navnîşanan lê zêde bikî.)`,
    EmailAdded_1: "Hat lêzêdekirin. Me ji te re e-peyamek pejirandinê şand — ",
    EmailAdded_2: "e-peyama xwe kontrol bike.",
    SendVerifEmail: "E-peyama pejirandinê bişîne",

    EmailStatusExpl:
        "('Sereke' tê wateya ku tu dikarî bi vê navnîşanê têkevî, û em agahdariyan ji bo wê dişînin. " +
        "'Pejirandî' tê wateya ku te li ser lînka pejirandinê ya di e-peyama pejirandina navnîşanê de tikandiye.)",

    // Password:
    ChangePwdQ: "Şîfreyê biguhere?",
    CreatePwdQ: "Şîfreyê biafirîne?",
    WillGetPwdRstEml: "Dê ji te re e-peyama nûkirina şîfreyê were şandin.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Tune",

    // Logins:
    LoginMethods: "Rêbazên têketinê",
    commaAs: ", wekî: ",

    // One's data:
    YourContent: "Naveroka te",
    DownloadPosts: "Peyaman daxîne",
    DownloadPostsHelp: "Kopyaya mijar û şiroveyên ku te parve kirine bi pelê JSON diafirîne.",
    DownloadPersData: "Daneyên kesane daxîne",
    DownloadPersDataHelp: "Kopyaya daneyên te yên kesane, mînak navê te (heke te diyarkiribe) û " +
        "navnîşana e-peyamê bi pelê JSON diafirîne.",


    // Delete account:
    DangerZone: "Beşa xeternak",
    DeleteAccount: "Hesab jê bibe",
    DeleteYourAccountQ:
        "Hesabê te were jêbirin? Em ê navê te rakin, navnîşana e-peyamê, şîfre û " +
        "her nasnameyên serhêl (mînak têketina Facebook an Twitter) ji bîr bikin. " +
        "Tu êdî nikarî têkevî. Ev nayê vegerandin.",
    DeleteUserQ:
        "Ev bikarhêner were jêbirin? Em ê navê rakin, navnîşana e-peyamê, şîfre û " +
        "nasnameyên serhêl (mînak têketina Facebook an Twitter) ji bîr bikin. " +
        "Bikarhêner êdî nikare têkeve. Ev nayê vegerandin.",
    YesDelete: "Erê, jê bibe",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Endamên komê",
    NoMembers: "Endam tune ne.",
    MayNotListMembers: "Dibe ku endam neyên lîstekirin.",
    AddMembers: "Endaman lê zêde bike",
    BuiltInCannotModify: "Ev komeke navxweyî ye; nayê guhertin.",
    NumMembers: (num: number) => `${num} endam`,
    YouAreMember: "Tu endam î.",
    CustomGroupsC: "Komên taybet:",
    BuiltInGroupsC: "Komên navxweyî:",
    DeleteGroup: "Vê komê jê bibe",
  },


  // Create user dialog

  cud: {
    CreateUser: "Bikarhêner Biafirîne",
    CreateAccount: "Hesab Biafirîne",
    EmailC: "E-peyam:",
    keptPriv: "dê veşartî were girtin",
    forNotfsKeptPriv: "ji bo agahdariyên bersivê, veşartî tê girtin",
    EmailVerifBy_1: "E-peyama te ji hêla ",
    EmailVerifBy_2: " ve hat pejirandin.",
    UsernameC: "Navê bikarhêner:",
    FullNameC: "Navê tam:",
    optName: "bijartî",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Hesab hat afirandin. Tu ketî hundir.",
    AlmostDone:
        "Hema hema qediya! Tenê hewce ye ku tu navnîşana e-peyama xwe piştrast bikî. Me " +
        "ji te re e-peyamek şand. Ji kerema xwe li ser lînka di e-peyamê de bitikîne da ku " +
        "hesabê xwe çalak bikî. Tu dikarî vê rûpelê bigirî.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Merc û Veşarî",

    Accept_1: "Tu me qebûl dikî ",
    TermsOfService: "Mercên Karûbar",
    TermsOfUse: "Mercên Bikaranînê",
    Accept_2: " û ",
    PrivPol: "Polîtîkaya Veşariyê",
    Accept_3_User: "?",
    Accept_3_Owner: " ji bo xwediyên malperê?",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Erê ez qebûl dikim",
  },


  // Password input

  pwd: {
    PasswordC: "Şîfre:",
    StrengthC: "Hêz: ",
    FairlyWeak: "Hinekî qels e.",
    toShort: "pir kurt e",
    TooShort: (minLength: number) => `Pir kurt e. Divê herî kêm ${minLength} karakter be`,
    PlzInclDigit: "Ji kerema xwe reqemek an karakterek taybet tevlê bike",
    TooWeak123abc: "Pir qels e. Şîfreyên mîna '12345' an jî 'abcde' bikar neyîne.",
    AvoidInclC: "Di nav şîfreyê de ji navê xwe an e-peyama xwe (parçeyên wan) dûr bisekine:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Rûpel nehat dîtin, an jî Gihîştin hat Redkirin.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Tu di şûna kesek din de yî, dibe ku ew kes gihîştina wî/wê bi hemû beşên " +
        "vê malperê re tune be.",

    IfYouThinkExistsThen: "Heke tu difikirî ku rûpel heye, wekî kesek ku dikare bigihîje rûpelê têkeve. ",
    LoggedInAlready: "(Tu berê ketî hundir, lê belkî hesabê xelet e?) ",
    ElseGoToHome_1: "Wekî din, tu dikarî ",
    ElseGoToHome_2: "biçî rûpela sereke.",

    CreateAcconut: "Hesab biafirîne",
    ContinueWithDots: "Berdewam bike bi ...",
    SignUp: "Tevlî bibe",
    LogIn: "Têkeve",
    LogInWithPwd: "Bi Şîfreyê Têkeve",
    CreateAdmAcct: "Hesabê admin biafirîne:",
    AuthRequired: "Ji bo gihîştina vê malperê nasname hewce ye",
    LogInToLike: "Ji bo Ecibandina vê peyamê têkeve",
    LogInToSubmit: "Têkeve û bişîne",
    LogInToComment: "Ji bo nivîsandina şiroveyekê têkeve",
    LogInToCreateTopic: "Ji bo afirandina mijarê têkeve",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "An jî ",         // "Or "
    OrLogIn_2: "Têkeve",      // "Log in" (this is a button)
    OrLogIn_3: "",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "An jî ",
    SignUpInstead_2: "Hesab biafirîne", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", an jî tenê ",
    OrTypeName_2: "navekî binivîse",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "An jî hesab biafirîne:",
    OrTypeName: "An jî navê xwe binivîse:",
    OrLogIn: "An jî têkeve:",
    YourNameQ: "Navê te?",

    BadCreds: "Navê bikarhêner an şîfre xelet e",

    UsernameOrEmailC: "Navê bikarhêner an e-peyam:",
    PasswordC: "Şîfre:",
    ForgotPwd: "Te şîfreya xwe ji bîr kiriye?",

    NoPwd: "Te hîn şîfreyek hilnebijartiye.",
    CreatePwd: "Şîfreyê biafirîne",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Ji kerema xwe ji me re bêje ka fikarên te çi ne.",
    ThanksHaveReported: "Spas. Te ew ragihand. Xebatkarên forumê dê lê binerin.",
    ReportComment: "Şiroveyê Ragihîne",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Di vê peyamê de daneyên kesane hene, mînak navê rastîn ê kesekî.",
    OptOffensive: "Di vê peyamê de naveroka êrîşkar an jî xirab heye.",
    OptSpam: "Ev peyam reklameke nexwestî ye.",
    OptOther: "Ji bo sedemek din xebatkaran derbarê vê peyamê de agahdar bike.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Tu dikarî peyamên alîkariyê dîsa nîşan bidî, heke tu têketî bî, bi ",
    YouCanShowAgain_2: "tikandina navê xwe û dûv re nîşandana peyamên alîkariyê",
  },


  // Editor

  e: {
    SimilarTopicsC: "Mijarên dişibin hev:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Bibore leh niha tu dikarî tenê di carekê de pelekî bar bikî",
    PleaseFinishPost: "Ji kerema xwe pêşî nivîsandina peyama xwe biqedîne",
    PleaseFinishChatMsg: "Ji kerema xwe pêşî nivîsandina peyama sîrpanê biqedîne",
    PleaseFinishMsg: "Ji kerema xwe pêşî nivîsandina peyama xwe biqedîne",
    PleaseSaveEdits: "Ji kerema xwe pêşî sererastkirinên xwe yên niha tomar bike",
    PleaseSaveOrCancel: "Ji kerema xwe pêşî mijara xwe ya nû tomar bike an betal bike",
    CanContinueEditing: "Heke tu sererastker dîsa vekî, tu dikarî berdewam bikî sererastkirina nivîsa xwe.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Ji kerema xwe hemû nivîsê jê nebe. Tiştekî binivîse.",
    PleaseWriteSth: "Ji kerema xwe tiştekî binivîse.",
    PleaseWriteTitle: "Ji kerema xwe sernavekî mijarê binivîse.",
    PleaseWriteMsgTitle: "Ji kerema xwe sernavekî peyamê binivîse.",
    PleaseWriteMsg: "Ji kerema xwe peyamekê binivîse.",

    exBold: "nivîsa stûr",
    exEmph: "nivîsa bişidandî",
    exPre: "nivîsa pêş-formatkirî",
    exQuoted: "nivîsa jêgirtî",
    ExHeading: "Sernav",

    TitlePlaceholder: "Sernavekî binivîse — ev derbarê çi de ye, bi hevokeke kurt?",

    EditPost_1: "Sererast bike ",
    EditPost_2: "peyamê ",

    TypeChatMsg: "Peyama sîrpanê binivîse:",
    YourMsg: "Peyama te:",
    CreateTopic: "Mijara nû biafirîne",
    CreateCustomHtml: "Rûpeleke HTML ya taybet biafirîne (sernavê xwe yê <h1> lê zêde bike)",
    CreateInfoPage: "Rûpeleke agahdarî biafirîne",
    CreateCode: "Rûpeleke koda çavkaniyê biafirîne",
    AskQuestion: "Pirsekê bipirse",
    ReportProblem: "Pirsgirêkekê ragihîne",
    SuggestIdea: "Fikirekê pêşniyar bike",
    NewChat: "Sernav û armanca sîrpanê",
    NewPrivChat: "Sernav û armanca sîrpanê ya taybet",
    AppendComment: "Li binê rûpelê şiroveyekê lê zêde bike:",

    ReplyTo: "Bersiv ji bo ",
    ReplyTo_theOrigPost: "Peyama Sereke",
    ReplyTo_post: "peyamê ",
    AddCommentC: "Şiroveyekê lê zêde bike:",

    PleaseSelectPosts: "Ji kerema xwe yek an çend peyaman hilbijêre ku tu bersivê bidî wan.",

    Save: "Tomar bike",
    edits: "sererastkirin",

    PostReply: "Bersivê parve bike",
    PostComment: "Şiroveyê parve bike",

    Post: "Parve bike",
    comment: "şirove",
    question: "pirs",

    PostMessage: "Peyamê parve bike",
    SimpleEditor: "Sererastkerê hêsan",

    Send: "Bişîne",
    message: "peyam",

    Create: "Biafirîne",
    page: "rûpel",
    chat: "sîrpan",
    idea: "fikir",
    topic: "mijar",

    Submit: "Bişîne",
    problem: "pirsgirêk",

    ViewOldEdits: "Sererastkirinên kevin bibîne",

    UploadBtnTooltip: "Pelekî an wêneyekî bar bike",
    BoldBtnTooltip: "Nivîsê stûr bike",
    EmBtnTooltip: "Bişidîne",
    QuoteBtnTooltip: "Jê bigire",
    PreBtnTooltip: "Nivîsa pêş-formatkirî",
    HeadingBtnTooltip: "Sernav",

    TypeHerePlaceholder: "Li vir binivîse. Tu dikarî Markdown û HTML bikar bînî. Ji bo barkirina wêneyan kaş bike û bihêle.",

    Maximize: "Mezin bike",
    ToNormal: "Vegere rewşa asayî",
    TileHorizontally: "Asayî rêz bike",

    PreviewC: "Pêşdîtin:",
    TitleExcl: " (sernav ne tê de ye)",
    ShowEditorAgain: "Sererastker dîsa nîşan bide",
    Minimize: "Biçûk bike",

    PreviewInfo: "Li vir tu dikarî bibînî ku peyama te dê çawa xuya bike.",
    CannotType: "Tu nikarî li vir binivîsî.",

    LoadingDraftDots: "Pêşnivîs tê barkirin...",
    DraftUnchanged: "Neguherî.",
    CannotSaveDraftC: "Pêşnivîs nayê tomarkirin:",
    DraftSavedBrwsr: "Pêşnivîs di gerokê de hat tomarkirin.",
    DraftSaved: (nr: string | number) => `Pêşnivîsa ${nr} hat tomarkirin.`,
    DraftDeleted: (nr: string | number) => `Pêşnivîsa ${nr} hat jêbirin.`,
    WillSaveDraft: (nr: string | number) => `Pêşnivîsa ${nr} dê were tomarkirin ...`,
    SavingDraft: (nr: string | number) => `Pêşnivîsa ${nr} tê tomarkirin ...`,
    DeletingDraft: (nr: string | number) => `Pêşnivîsa ${nr} tê jêbirin ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Kategoriyê hilbijêre",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Cureyê mijarê hilbijêre:",
    DiscussionExpl: "Gotûbêjek derbarê tiştekî de.",
    QuestionExpl: "Bersivek dikare wekî bersiva pejirandî were nîşankirin.",
    ProblExpl: "Heke tiştek şikestî be an naxebite. Dikare wekî sererastkirî/çareserkirî were nîşankirin.",
    IdeaExpl: "Pêşniyarek. Dikare wekî qediyayî/hatiye kirin were nîşankirin.",
    ChatExpl: "Gotûbêjeke ku dibe ku qet neqede.",
    PrivChatExpl: "Tenê ji bo mirovên ku vexwendî sîrpanê bûne xuya dibe.",

    CustomHtml: "Rûpela HTML ya taybet",
    InfoPage: "Rûpela agahdarî",
    Code: "Kod",
    EmbCmts: "Şiroveyên pêvekirî",
    About: "Derbarê",
    PrivChat: "Sîrpana Taybet",
    Form: "Form",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Civakên din tune ne ku tu tevlî bibe.",
    SelCmty: "Civakê hilbijêre ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Li alîkariyê bigere",
    TxtToFind: "Nivîsa ku dê lê were gerîn",
  },


  // No internet

  ni: {
    NoInet: "Girêdana înternetê tune ye",
    PlzRefr: "Rûpelê nû bike da ku guhertinên herî dawî bibînî. (Girêdan qut bû)",
    RefrNow: "Niha nû bike",
  },


  PostDeleted: (postNr: number) => `Ew peyam, nr ${postNr}, hatiye jêbirin.`,
  NoSuchPost: (postNr: number) => `Li ser vê rûpelê peyama nr ${postNr} tune ye.`,
  NoPageHere: "Ev rûpel hatiye jêbirin, an jî qet tunebû, an jî tu nikarî bigihîjî wê.",
  GoBackToLastPage: "Vegere rûpela dawî",

};
