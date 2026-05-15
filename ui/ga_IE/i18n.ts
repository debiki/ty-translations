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

var t_ga_IE: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Gníomhach",
  Activity: "Gníomhaíocht",
  Add: "Cuir leis",
  AddingDots: "Ag cur leis ...",
  AddComment: "Cuir Trácht Leis",
  Admin: "Riarthóir",
  AdvSearch: "Ardbharr cuardaigh",
  Anonym: "Gan ainm",
  Away: "As láthair",
  Back: "Ar ais",
  BlogN: "Blag",
  Bookmarks: "Leabharmharcanna",
  Cancel: "Cealaigh",
  Categories: "Catagóirí",
  Category: "Catagóir",
  ChangeV: "Athraigh",
  ClickToShow: "Cliceáil chun taispeáint",
  ChangeDots: "Athraigh ...",
  ChatN: "Comhrá",
  Chatting: "Ag comhrá",
  CheckYourEmail: "Seiceáil do ríomhphost",
  Close: "Dún",
  closed: "dúnta",
  comments: "tráchtanna",   // as in:  "123 comments"
  Continue: "Lean ar aghaidh",
  Created: "Cruthaithe",
  Delete: "Scrios",
  Deleted: "Scriosta",
  DirectMessage: "Teachtaireacht dhíreach",
  Discussion: "Plé",
  discussion: "plé",
  done: "déanta",
  EditV: "Cuir in eagar",
  Editing: "Ag cur in eagar",
  EmailC: "Ríomhphost: ",
  EmailAddress: "Seoladh ríomhphoist",
  EmailAddresses: "Seoltaí ríomhphoist",
  EmailSentD: "Seoladh ríomhphost.",
  Forum: "Fóram",
  GetNotifiedAbout: "Faigh fógraí faoi",
  GroupsC: "Grúpaí:",
  Hide: "Folaigh",
  Home: "Baile",
  Idea: "Smaoineamh",
  Join: "Glac páirt",
  KbdShrtcsC: "Aicearraí méarchláir: ",
  Loading: "Ag lódáil...",
  LoadMore: "Lódáil níos mó ...",
  LogIn: "Logáil Isteach",
  LoggedInAs: "Logáilte isteach mar ",
  LogOut: "Logáil amach",
  Maybe: "B'fhéidir",
  Manage: "Bainistigh",
  Members: "Baill",
  MessageN: "Teachtaireacht",
  MoreDots: "Tuilleadh...",
  Move: "Bog",
  Name: "Ainm",
  NameC: "Ainm:",
  NewTopic: "Ábhar nua",
  NoCancel: "Ní hea, cealaigh",
  Notifications: "Fógraí",
  NotImplemented: "(Gan cur i bhfeidhm)",
  NotYet: "Ní hea fós",
  NoTitle: "Gan teideal",
  NoTopics: "Gan aon ábhar.",
  Okay: "Ceart go leor",
  OkayDots: "Ceart go leor ...",
  Online: "Ar líne",
  onePerLine: "ceann in aghaidh an líne",
  PreviewV: "Réamhamharc",
  Problem: "Fadhb",
  progressN: "dul chun cinn",
  Question: "Ceist",
  Recent: "Le déanaí",
  Remove: "Bain",
  Reopen: "Athoscail",
  ReplyV: "Freagair",
  Replying: "Ag freagairt",
  Replies: "Freagraí",
  replies: "freagraí",
  Save: "Sábháil",
  SavingDots: "Ag sábháil ...",
  SavedDot: "Sábháilte.",
  Search: "Cuardaigh",
  SendMsg: "Seol Teachtaireacht",
  ShowPreview: "Taispeáin réamhamharc",
  SignUp: "Glac páirt",
  Solution: "Réiteach",
  started: "tosaithe",
  Summary: "Achoimre",
  Submit: "Seol",
  Tag: "Clibe",
  Tags: "Clibeanna",
  Tools: "Uirlisí",
  Topics: "Ábhair",
  TopicTitle: "Teideal an ábhair",
  TopicType: "Cineál an ábhair",
  UploadingDots: "Ag uaslódáil...",
  Username: "Ainm úsáideora",
  Users: "Úsáideoirí",
  Welcome: "Fáilte",
  Wiki: "Vicí",
  Yes: "Tá",
  YesBye: "Tá, slán",
  YesDoThat: "Tá, déan é sin",
  You: "Tú",
  you: "tú",

  // Trust levels.
  Guest:  "Aoi",
  NewMember: "Ball nua",
  BasicMember: "Bunbhall",
  FullMember: "Ball iomlán",
  TrustedMember: "Ball iontaofa",
  RegularMember: "Ball rialta iontaofa",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Croí-bhall",

  // Periods.
  PastDay: "An lá deiridh",
  PastWeek: "An tseachtain deiridh",
  PastMonth: "An mhí dheiridh",
  PastQuarter: "An ráithe dheiridh",
  PastYear: "An bhliain dheiridh",
  AllTime: "An t-am ar fad",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mí",  // months
  daysLtr: "l",      // days
  hoursLtr: "u",     // hours
  minsLtr: "n",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 lá ó shin" : `${numDays} lá ó shin`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 uair ó shin" : `${numHours} uair ó shin`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 nóiméad ó shin" : `${numMins} nóiméad ó shin`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 soicind ó shin" : `${numSecs} soicind ó shin`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Ríomhphost de dhíth",
    NoSpcs: "Gan spásanna le do thoil",
    InvldAddr: "Ní seoladh ríomhphoist bailí é",
    NoBadChrs: "Gan carachtair aisteacha le do thoil",

    // Full name input field:
    NotOnlSpcs: "Ní amháin spásanna le do thoil",
    NoAt: "Gan @ le do thoil",

    // Username input field:
    NoDash: "Gan fleiscíní (-) le do thoil",
    DontInclAt: "Ná cuir an @ isteach",
    StartEndLtrDgt: "Tosaigh agus críochnaigh le litir nó le digit",
    OnlLtrNumEtc: "Litreacha (a-z, A-Z), uimhreacha, agus _ (folíne) amháin",
    // This shown just below the username input:
    UnUnqShrt_1: "Do ",
    UnUnqShrt_2: "@ainm_úsáideora",
    UnUnqShrt_3: ", uathúil agus gearr",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Ba chóir go mbeadh ar a laghad ${minLength} carachtar ann`,
    TooLong: (maxLength: number) => `Rófhada. Ba chóir go mbeadh ar a mhéad ${maxLength} carachtar ann`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Gach Post",
    EveryPostInTopic: "Gheobhaidh tú fógra faoi gach freagra nua san ábhar seo.",
    EveryPostInCat: "Gheobhaidh tú fógra faoi gach ábhar agus freagra nua sa chatagóir seo.",
    EveryPostInTopicsWithTag: "Gheobhaidh tú fógra faoi ábhair nua leis an gclibe seo, agus faoi gach freagra sna hábhair sin.",
    EveryPostWholeSite: "Gheobhaidh tú fógra faoi gach ábhar agus freagra nua, áit ar bith.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Ábhair Nua",
    NewTopicsInCat: "Gheobhaidh tú fógra faoi ábhair nua sa chatagóir seo.",
    NewTopicsWithTag: "Gheobhaidh tú fógra faoi ábhair nua leis an gclibe seo.",
    NewTopicsWholeSite: "Gheobhaidh tú fógra faoi ábhair nua, áit ar bith.",

    Tracking: "Ag leanúint",

    Normal: "Normalach",
    NormalDescr: "Gheobhaidh tú fógra má labhraíonn duine éigin leat, go hindíreach freisin, m.sh. freagra ar fhreagra uait.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Ciúinithe",
    HushedDescr: "Ní bhfaighidh tú fógra ach amháin má labhraíonn duine éigin go díreach leat.",

    Muted: "Múchta",
    MutedTopic: "Gan fógraí.",   // removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Cuir in eagar",
    Hide_1: "Folaigh",
    Hide_2: ", cliceáil ",
    Hide_3: " chun athoscailt",
  },


  // Forum categories

  fcs: {
    All: "Gach ceann", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Liosta ábhar",

    // Select category dropdown

    from: "ó",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "i",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Gach catagóir",

    // Topic sort order

    Active: "Gníomhach ar dtús",      // didn't add "first" yet to transls
    ActiveDescr: "Taispeánann sé na hábhair is déanaí a bhí gníomhach ar dtús",

    New: "Nua",
    NewDescr: "Taispeánann sé na hábhair is nuaí ar dtús",

    Top: "Coitianta",              // didn't rename from Top to Popular in transls
    TopDescr: "Taispeánann sé ábhair choitianta ar dtús",

    // Topic filter dropdown

    AllTopics: "Gach ábhar",

    ShowAllTopics: "Taispeáin gach ábhar",
    ShowAllTopicsDescr: "Ach ní ábhair scriosta",

    WaitingTopics: "Ábhair ag feitheamh",          
    OnlyWaitingDescr_1: "Taispeánann sé ábhair amháin ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "atá ag feitheamh ",
    OnlyWaitingDescr_3: "ar réiteach nó le bheith curtha i bhfeidhm agus déanta",  // rewrote

    YourTopics: "Do chuid ábhar",       
    AssignedToYou: "Sannaithe duitse", 

    DeletedTopics: "Taispeáin scriosta",   
    ShowDeleted: "Taispeáin scriosta",
    ShowDeletedDescr: "Taispeánann sé gach ábhar, lena n-áirítear ábhair scriosta",

    // Rightmost buttons

    ViewCategories: "Féach ar chatagóirí",  
    EditCat: "Cuir Catagóir in eagar",
    CreateCat: "Cruthaigh Catagóir",
    CreateTopic: "Cruthaigh Ábhar",
    PostIdea: "Postáil Smaoineamh",
    AskQuestion: "Cuir Ceist",
    ReportProblem: "Tuairiscigh Fadhb",
    CreateMindMap: "Cruthaigh Léarscáil Intinne",
    CreatePage: "Cruthaigh Leathanach",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Mínigh deilbhíní...",
    IconExplanation: "Míniú ar dheilbhíní:",
    ExplGenDisc: "Plé ginearálta.",
    ExplQuestion: "Ceist gan aon fhreagra glactha leis.",
    ExplAnswer: "Ceist le freagra glactha leis.",
    ExplIdea: "Smaoineamh / moladh.",
    ExplProblem: "Fadhb.",
    ExplPlanned: "Rud éigin atáimid ag pleanáil a dhéanamh nó a dheisiú.",
    ExplDone: "Rud éigin atá déanta nó deisithe.",
    ExplClosed: "Ábhar dúnta.",
    ExplPinned: "Ábhar atá liostaithe ar dtús i gcónaí (b'fhéidir ina chatagóir féin amháin).",

    PopularTopicsComma: "Ábhair choitianta, ",
    TopFirstAllTime: "Taispeánann sé na hábhair is coitianta ar dtús, an t-am ar fad.",
    TopFirstPastDay: "Taispeánann sé ábhair choitianta le linn an lae deiridh.",

    CatHasBeenDeleted: "Scriosadh an chatagóir seo",

    TopicsActiveFirst: "Ábhair, gníomhach le déanaí ar dtús",
    TopicsNewestFirst: "Ábhair, nua ar dtús",

    CreatedOn: "Cruthaithe an ",
    LastReplyOn: "\nFreagra deireanach an ",
    EditedOn: "\nCurtha in eagar an ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "chruthaigh an t-ábhar",
    frequentPoster: "postálaí rialta",
    mostRecentPoster: "postálaí is déanaí",

    inC: "i: ",

    TitleFixed: "Tá sé seo deisithe",
    TitleDone: "Tá sé seo déanta",
    TitleStarted: "Táimid tar éis tús a chur leis seo",
    TitleStartedFixing: "Táimid tar éis tús a chur le deisiú seo",
    TitleUnsolved: "Is fadhb gan réiteach í seo",
    TitleIdea: "Is smaoineamh é seo",
    TitlePlanningFix: "Táimid ag pleanáil é seo a dheisiú",
    TitlePlanningDo: "Táimid ag pleanáil é seo a dhéanamh",
    TitleChat: "Is cainéal comhrá é seo",
    TitlePrivateChat: "Is cainéal comhrá príobháideach é seo",
    TitlePrivateMessage: "Teachtaireacht phríobháideach",
    TitleInfoPage: "Is leathanach eolais é seo",
    TitleDiscussion: "Plé",
    IsPinnedGlobally: "\nTá sé bioraithe, mar sin tá sé liostaithe ar dtús.",
    IsPinnedInCat: "\nTá sé bioraithe ina chatagóir, mar sin tá sé liostaithe ar dtús ina chatagóir.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Ábhair le déanaí (iad siúd atá ag feitheamh)",
    RecentTopicsInclDel: "Ábhair le déanaí (lena n-áirítear scriosta)",
    RecentTopics: "Ábhair le déanaí",
    _replies: " freagraí",
    _deleted: " (scriosta)",
    _defCat: " (catagóir réamhshocraithe)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Poist le déanaí",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " ar líne sa chomhrá seo",    // example: "5 online in this chat"
    NumOnlForum: " ar líne sa fhóram seo",

    // Open left-sidebar button title.
    WatchbBtn: "Do chuid ábhar",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Do chuid ábhar le déanaí, comhráite ar ghlac tú páirt iontu, teachtaireachtaí díreacha",

    // Title shown on user profile pages.
    AbtUsr: "Faoi Úsáideoir",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Ar ais ó phróifíl an úsáideora",
    BackFromAdm: "Ar ais ón limistéar riaracháin",

    // Title shown on full text search page.
    SearchPg: "Leathanach Cuardaigh",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Cuir leis ...",
    RecentlyViewed: "Ábhair a breathnaíodh orthu le déanaí",  // " topics"
    JoinedChats: "Comhráite ar ghlac tú páirt iontu",
    ChatChannels: "Cainéil Chomhrá",
    CreateChat: "Cruthaigh cainéal comhrá",
    DirectMsgs: "Teachtaireachtaí Díreacha",
    NoChats: "Dada",    // meaning: "No chat messages"
    NoDirMsgs: "Dada",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Gníomhartha ábhair",
    ViewPeopleHere: "Féach ar dhaoine anseo",
    ViewAddRemoveMembers: "Féach / cuir leis / bain baill",
    ViewChatMembers: "Féach ar bhaill an chomhrá",
    EditChat: "Cuir cur síos an chomhrá in eagar",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Fág an comhrá seo",
    LeaveThisCommunity: "Fág an pobal seo",
    JoinThisCommunity: "Glac páirt sa phobal seo",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Tráchtanna le déanaí san ábhar seo:",
    NoComments: "Gan aon trácht.",

    YourBookmarks: "Do chuid leabharmharcanna:",

    UsersOnline: "Úsáideoirí ar líne:",
    UsersOnlineForum: "Úsáideoirí ar líne sa fhóram seo:",
    UsersInThisChat: "Úsáideoirí sa chomhrá seo:",
    UsersInThisTopic: "Úsáideoirí san ábhar seo:",

    GettingStartedGuide: "Treoir Riaracháin", // in other langs, was: "Getting Started Guide".
    AdminGuide: "Treoir Riaracháin",          // ... but what? It's here already, just reuse this transl field
    Guide: "Treoir",

    // How to hide the sidebar.
    CloseShortcutS: "Dún (aicearra méarchláir: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Cuir tuilleadh daoine leis",

    // Shown next to one's own username, in a list of users.
    thatsYou: "is tú sin",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Tusa amháin, mar is cosúil",
    YouAnd: "Tú féin, agus ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " duine" : " duine";
      const have = numStrangers === 1 ? "nach bhfuil" : "nach bhfuil";
      return numStrangers + people + " " + have + " logáilte isteach";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "Seans go bhfuil na freagraí ar chlé curtha in eagar de réir ",
    bestFirst: "is fearr ar dtús.",
    ButBelow: "Ach thíos ",
    insteadBy: " tá na freagraí céanna curtha in eagar de réir ",
    newestFirst: "is nuaí ar dtús.",

    SoIfLeave: "Mar sin má fhágann tú, agus má thagann tú ar ais anseo níos déanaí, gheobhaidh tú thíos ",
    allNewReplies: "gach freagra nua.",
    Click: "Cliceáil",
    aReplyToReadIt: " freagra thíos chun é a léamh — toisc nach dtaispeántar ach sliocht thíos.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Cliceáil chun stádas a athrú",
    ClickToViewAnswer: "Cliceáil chun freagra a fheiceáil",
    ViewAnswer: "Féach ar fhreagra",
    ChangeStatusC: "Athraigh stádas go:",
    ChangeCatC: "Athraigh catagóir:",
    ChangeTopicTypeC: "Athraigh cineál an ábhair:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "ceist",
    hasAccptAns: "tá freagra glactha leis aige",
    aProblem: "fadhb",
    planToFix: "plean le deisiú",
    anIdea: "smaoineamh",
    planToDo: "plean le déanamh",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Tá an fhoirm seo ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "dúnta; ní féidir leat í a líonadh isteach agus a phostáil a thuilleadh.",

    ThisTopicClosed_1: "Tá an t-ábhar seo ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Is féidir leat tráchtanna a phostáil fós.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Scriosadh an leathanach seo",
    CatDeldPageToo: "Scriosadh an chatagóir, mar sin scriosadh an leathanach seo freisin",

    ThreadDeld: "Snáithe scriosta",
    CmntDeld: "Trácht scriosta",
    PostDeld: "Postáil scriosta",
    DiscDeld: "Plé scriosta",
    PageDeld: "Leathanach scriosta",
    PagePendAppr: "Leathanach ag feitheamh le ceadú",
    TitlePendAppr: "Teideal ag feitheamh le ceadú",
    TextPendingApproval: "Téacs ag feitheamh le ceadú",

    TooltipQuestClosedNoAnsw: "Dúnadh the cheist seo gan aon fhreagra glactha leis.",
    TooltipTopicClosed: "Tá an t-ábhar seo dúnta.",

    TooltipQuestSolved: "Is ceist réitithe í seo",
    TooltipQuestUnsolved: "Is ceist gan réiteach í seo",

    StatusDone: "Déanta",
    TooltipProblFixed: "Tá sé seo deisithe",
    TooltipDone: "Tá sé seo déanta",

    StatusStarted: "Tosaithe",
    TooltipFixing: "Táimid tar éis tús a chur le deisiú seo",      // "We're currently" —> "We've started"
    TooltipImplementing: "Táimid tar éis tús a chur leis seo a dhéanamh", //  -""-

    StatusPlanned: "Pleanáilte",
    TooltipProblPlanned: "Táimid ag pleanáil é seo a dheisiú",
    TooltipIdeaPlanned: "Táimid ag pleanáil é seo a dhéanamh",   // or "to implement this"?

    StatusNew: "Nua",
    StatusNewDtl: "Ábhar nua, á phlé",
    TooltipUnsProbl: "Is fadhb gan réiteach í seo",
    TooltipIdea: "Is smaoineamh é seo",

    TooltipPersMsg: "Teachtaireacht phearsanta",
    TooltipChat: "Ciallaíonn # Cainéal Comhrá",
    TooltipPrivChat: "Is cainéal comhrá príobháideach é seo",

    TooltipPinnedGlob: "\nBioraithe go domhanda.",
    TooltipPinnedCat: "\nBioraithe sa chatagóir seo.",

    SolvedClickView_1: "Réitithe i bpostáil #",
    SolvedClickView_2: ", cliceáil chun é a fheiceáil",

    PostHiddenClickShow: "Postáil folaithe; cliceáil chun taispeáint",
    ClickSeeMoreRepls: "Taispeáin tuilleadh freagraí",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Taispeáin tuilleadh tráchtanna",  
    ClickSeeThisComment: "Cliceáil chun an trácht seo a thaispeáint",
    clickToShow: "cliceáil chun taispeáint",

    ManyDisagree: "Aontaíonn go leor i gcoinne seo:",
    SomeDisagree: "Aontaíonn roinnt i gcoinne seo:",

    PendAppr: "Ag feitheamh le ceadú",
    CmtPendAppr: "Comment pending approval, posted ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Do" : "An") + " trácht thíos ag feitheamh le ceadú.",

    _and: " agus",

    repliesTo: "freagraí ar",
    InReplyTo: "Mar fhreagra ar",
    YourReplyTo: "Do fhreagra ar ",  
    YourChatMsg: "Do theachtaireacht chomhrá: ",   
    YourDraft: "Do dhréacht",    
    YourEdits: "Do chuid eagarthóireachta: ",   
    YourProgrNoteC: "Do nóta dul chun cinn:",  
    aProgrNote: "nóta dul chun cinn: ",  

    ReplyingToC: "Ag freagairt do:",    
    ScrollToPrevw_1: "Scrollaigh go dtí ",  
    ScrollToPrevw_2: "réamhamharc",     

    UnfinEdits: "Eagarthóireacht neamhchríochnaithe",  
    ResumeEdting: "Atosaigh an eagarthóireacht",  
    DelDraft: "Scrios an dréacht",   

    ClickViewEdits: "Cliceáil chun sean-eagarthóireacht a fheiceáil",

    By: "Ag ", // ... someones name

    // Discussion ...
    aboutThisIdea: "faoi conas agus an ceart an smaoineamh seo a dhéanamh",
    aboutThisProbl: "faoi conas agus an ceart an fhadhb seo a dheisiú",

    AddProgrNote: "Cuir nóta dul chun cinn leis",
    // Progress ...
    withThisIdea: "leis an smaoineamh seo a dhéanamh",
    withThisProbl: "leis an bhfadhb seo a láimhseáil",
    withThis: "leis seo a dhéanamh",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Fógraí faoin ábhar seo:",

    // If is a direct message topic, members listed below this text.
    Msg: "Teachtaireacht",

    SmrzRepls: "Achoimre ar Fhreagraí",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Tá ${numReplies} freagra ann. Am léitheoireachta measta: ${minutes} nóiméad`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Déanta. Achoimre déanta ar ${numSummarized} freagra, as an ${numShownBefore} freagra a léiríodh roimhe seo.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Dún an t-ábhar",  
    CloseOwnQuestionTooltip: "Dún an cheist seo mura bhfuil freagra uait a thuilleadh.",
    CloseOthersQuestionTooltip: "Dún an cheist seo mura bhfuil freagra de dhíth uirthi, m.sh. má tá sí as ábhar nó má tá freagra uirthi in ábhar eile cheana féin.",
    CloseToDoTooltip: "Dún an To-Do seo mura gá é a dhéanamh nó a dheisiú.",
    CloseTopicTooltip: "Dún an t-ábhar seo mura bhfuil gá le breis breithnithe.",

    AcceptBtnExpl: "Glac leis seo mar fhreagra ar an gceist nó ar an bhfadhb",
    SolutionQ: "Réiteach?",
    ClickUnaccept: "Cliceáil chun neamh-ghlacadh leis an bhfreagra seo",
    PostAccepted: "Glactha leis an bpostáil seo mar an freagra",

    NumLikes: (num: number) => num === 1 ? "1 Is maith liom" : num + " Is maith liom",
    NumDisagree: (num: number) => num + " Easaontú",
    NumBury: (num: number) => num === 1 ? "1 Cur faoi thalamh" : num + " Cur faoi thalamh",
    NumUnwanted: (num: number) => num === 1 ? "1 Neamh-inmhianaithe" : num + " Neamh-inmhianaithe",

    MoreVotes: "Tuilleadh vótaí...",
    LikeThis: "Is maith liom é seo",
    LinkToPost: "Nasc chuig an bpostáil seo",
    Report: "Tuairiscigh",
    ReportThisPost: "Tuairiscigh an bpostáil seo",
    Admin: "Riarthóir",
    DiscIx: "Innéacs na bpléití",

    Disagree: "Easaontaigh",
    DisagreeExpl: "Cliceáil anseo chun easaontú leis an bpostáil seo, nó chun rabhadh a thabhairt do dhaoine eile faoi earráidí fíorasacha.",
    Bury: "Cuir faoi thalamh",
    BuryExpl: "Cliceáil chun postálacha eile a chur chun tosaigh ar an bpostáil seo. Ní féidir ach le foireann an fhóraim do vóta a fheiceáil.",
    Unwanted: "Neamh-inmhianaithe",
    UnwantedExpl: "Mura dteastaíonn uait an bpostáil seo ar an suíomh Gréasáin seo. Laghdódh sé seo an t-iontaobhas atá agam in údar na postála. Ní féidir ach le foireann an fhóraim do vóta a fheiceáil.",

    AddTags: "Cuir clibeanna leis/bain clibeanna de",
    UnWikify: "Dí-Vicí",
    Wikify: "Vicí",
    PinDeleteEtc: "Bioráin / Scrios / Catagóir ...",
  },


  // Share dialog

  sd: {
    Copied: "Cóipeáilte.",
    CtrlCToCopy: "Brúigh CTRL+C chun cóipeáil.",
    ClickToCopy: "Cliceáil chun an nasc a chóipeáil.",
  },


  // Chat

  c: {
    About_1: "Is é seo an cainéal comhrá ",
    About_2: ", cruthaithe ag ",
    ScrollUpViewComments: "Scrollaigh suas chun sean-tráchtanna a fheiceáil",
    Purpose: "Cuspóir:",
    MessageDeleted: "(Teachtaireacht scriosta)",
    JoinThisChat: "Glac páirt sa chomhrá seo",
    PostMessage: "Postáil teachtaireacht",
    AdvancedEditor: "Eagarthóir chun cinn",
    TypeTitle: "Scríobh teideal — cad faoi atá an comhrá seo, i gcúpla focal?",
    TypePurpose: "Scríobh cuspóir — is féidir leis a bheith níos faide ná an teideal, níos tuairisciúla.",
    TypeHere: "Scríobh anseo. Is féidir leat Markdown agus HTML a úsáid.",
  },


  // My Menu

  mm: {
    NeedsReview: "Review de dhíth ",
    AdminHelp: "Cabhair riarthóra ",
    StaffHelp: "Cabhair foirne ",
    DraftsEtc: "Dréachtaí, leabharmharcanna, tascanna",
    MoreNotfs: "Féach ar gach fógra",
    DismNotfs: "Marcáil gach ceann mar léite",
    ViewProfile: "Féach ar do phróifíl",
    ViewGroups: "Féach ar ghrúpaí",
    LogOut: "Logáil amach",
    UnhideHelp: "Taispeáin teachtaireachtaí cabhrach",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Scrollaigh go dtí:",
    Scroll: "Scrollaigh",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "A",
    Back_2: "r ais",
    BackExpl: "Scrollaigh ar ais go dtí do sheasamh roimhe seo ar an leathanach seo",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Barr an leathanaigh",
    PgTopHelp: "Téigh go barr an leathanaigh. Aicearra méarchláir: 1",
    Repl: "Freagraí",
    ReplHelp: "Téigh go dtí an rannóg Freagraí. Aicearra: 2",
    Progr: "Dul chun cinn",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Téigh go dtí an rannóg Dul chun cinn. Aicearra: 3",
    PgBtm: "Bun an leathanaigh",
    Btm: "Bun",
    BtmHelp: "Téigh go bun an leathanaigh. Aicearra: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", agus ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " chun scrollú ar ais",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Roghnaigh úsáideoirí",
    AddUsers: "Cuir úsáideoirí leis",
  },


  // About user dialog

  aud: {
    IsMod: "Is modhnóir é/í.",
    IsAdm: "Is riarthóir é/í.",
    IsDeld: "Díghníomhachtaithe nó scriosta.",
    ThisIsGuest: "Is úsáideoir aoi é seo, d'fhéadfadh sé a bheith ina dhuine ar bith.",
    ViewInAdm: "Féach sa Limistéar Riaracháin",
    ViewProfl: "Féach ar Phróifíl",
    ViewComments: "Féach ar thráchtanna eile",
    RmFromTpc: "Bain den ábhar",
    EmAdrUnkn: "Seoladh ríomhphoist anaithnid — ní bhfaighidh an t-aoi seo fógra faoi fhreagraí.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Sainroghanna",
    Invites: "Cuirí",
    DraftsEtc: "Dréachtaí srl",
    About: "Faoi",
    Privacy: "Príobháideacht",
    Security: "Slándáil",
    Account: "Cuntas",
    Interface: "Comhéadan",

    // ----- Overview stats

    JoinedC: "Cláraithe: ",
    PostsMadeC: "Poist déanta: ",
    LastPostC: "Postáil dheireanach: ",
    LastSeenC: "Feicthe go deireanach: ",
    TrustLevelC: "Leibhéal iontaobhais: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Uaslódáil grianghraf",
    ChangePhoto: "Athraigh grianghraf",
    ImgTooSmall: "Íomhá róbheag: ba chóir go mbeadh sí ar a laghad 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Ní féidir ach le foireann agus croí-bhaill iontaofa é seo a fheiceáil.",
    OnlyMbrsCanSee: "Ní féidir ach le daoine a bhí ina mbaill ghníomhacha ar feadh tamaill é seo a fheiceáil.",
    Nothing: "Dada le taispeáint",
    Posts: "Poist",
    NoPosts: "Gan aon phostáil.",
    Topics: "Ábhair",
    NoTopics: "Gan aon ábhar.",

    // ----- User status

    UserBanned: "Tá cosc ar an úsáideoir seo",
    UserSuspended: (dateUtc: string) => `Tá an t-úsáideoir seo curtha ar fionraí go dtí ${dateUtc} UTC`,
    ReasonC: "Cúis: ",

    DeactOrDeld: "Díghníomhachtaithe nó scriosta.",
    isGroup: " (grúpa)",
    isGuest: " — úsáideoir aoi, d'fhéadfadh sé a bheith ina dhuine ar bith",
    isMod: " – modhnóir",
    isAdmin: " – riarthóir",
    you: "(tú)",

    // ----- Notifications page

    NoNotfs: "Gan aon fhógra",
    NotfsToYouC: "Fógraí chugat:",
    NotfsToOtherC: (name: string) => `Fógraí chuig ${name}:`,
    DefNotfsSiteWide: "Default notifications, site wide",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "do",

    // ----- Drafts Etc page

    NoDrafts: "Gan aon dhréacht",
    YourDraftsC: "Do chuid dréachtaí:",
    DraftsByC: (name: string) => `Dréachtaí ag ${name}:`,

    // ----- Invites page

    InvitesIntro: "Anseo is féidir leat cuireadh a thabhairt do dhaoine páirt a ghlacadh sa suíomh seo. ",
    InvitesListedBelow: "Tá na cuirí atá seolta agat cheana féin liostaithe thíos.",
    NoInvites: "Níor thug tú cuireadh do dhuine ar bith fós.",

    InvitedEmail: "Ríomhphost ar tugadh cuireadh dó",
    WhoAccepted: "Ball a ghlac leis",
    InvAccepted: "Cuireadh glactha leis",
    InvSent: "Cuireadh seolta",
    JoinedAlready: "Cláraithe cheana féin",

    SendAnInv: "Tabhair cuireadh do dhaoine", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Seol cuirí",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Seolfaidh muid ríomhphost gearr chuig do chairde. Cliceálfaidh siad nasc " +
        "chun clárú láithreach, gan aon logáil isteach de dhíth. " +
        "Beidh siad ina mbaill rialta, ní ina modhnóirí nó ina riarthóirí.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Déanta. Seolfaidh mé ríomhphost chucu.",
    NoOneToInv: "Níl aon duine le cuireadh a thabhairt dó.",
    InvNotfLater: "Cuirfidh mé fógra chugat níos déanaí, nuair a bheidh cuireadh tugtha agam dóibh.",
    AlreadyInvSendAgainQ: "Tugadh cuireadh dóibh seo cheana féin — b'fhéidir gur mhaith leat cuireadh a thabhairt dóibh arís?",
    InvErr_1: "Mar thoradh orthu seo bhí ",
    InvErr_2: "earráidí",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Tá siad seo cláraithe cheana féin, mar sin níor thug mé cuireadh dóibh:",
    ResendInvsQ: "Athsheol cuirí chuig na daoine seo? Tugadh cuireadh dóibh cheana féin.",
    InvAgain: "Tabhair cuireadh arís",

    // ----- Preferences, About

    AboutYou: "Fút féin",
    WebLink: "Aon suíomh Gréasáin nó leathanach leat.",

    NotShownCannotChange: "Ní thaispeántar go poiblí é. Ní féidir é a athrú.",

    // The full name or alias:
    NameOpt: "Ainm (roghnach)",

    NotShown: "Ní thaispeántar go poiblí é.",

    // The username:
    MayChangeFewTimes: "Ní féidir leat é a athrú ach cúpla uair.",
    notSpecified: "(gan sonrú)",
    ChangeUsername_1: "Ní féidir leat d'ainm úsáideora a athrú ach cúpla uair.",
    ChangeUsername_2: "Má athraíonn tú é ró-mhinic, d'fhéadfadh sé mearbhall a chur ar dhaoine eile — " +
        "ní bheidh a fhios acu conas tú a @lua.",

    NotfAboutAll: "Faigh fógra faoi gach postáil nua (mura múchann tú an t-ábhar nó an chatagóir)",
    NotfAboutNewTopics: "Faigh fógra faoi ábhair nua (mura múchann tú an chatagóir)",

    ActivitySummaryEmails: "Ríomhphoist achoimre gníomhaíochta",

    EmailSummariesToGroup:
        "Nuair nach dtugann baill an ghrúpa seo cuairt anseo, seol ríomhphost chucu, de réir réamhshocraithe, " +
        "le hachoimrí ar ábhair choitianta agus rudaí eile.",
    EmailSummariesToMe:
        "Nuair nach dtugaim cuairt anseo, seol ríomhphost chugam " +
        "le hachoimrí ar ábhair choitianta agus rudaí eile.",

    AlsoIfTheyVisit: "Seol ríomhphost chucu freisin má thugann siad cuairt anseo go rialta.",
    AlsoIfIVisit: "Seol ríomhphost chugam freisin má thugaim cuairt anseo go rialta.",

    HowOftenWeSend: "Cé chomh minic ba chóir dúinn na ríomhphoist seo a sheoladh?",
    HowOftenYouWant: "Cé chomh minic is mian leat na ríomhphoist seo?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Folaigh do ghníomhaíocht le déanaí do strainséirí agus do bhaill nua?",
    HideActivityStrangers_2: "(Ach ní dóibh siúd a bhí ina mbaill ghníomhacha ar feadh tamaill.)",
    HideActivityAll_1: "Folaigh do ghníomhaíocht le déanaí do gach duine?",
    HideActivityAll_2: "(Seachas foireann agus croí-bhaill iontaofa.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Seoltaí ríomhphoist",
    PrimaryDot: "Príomhúil. ",
    VerifiedDot: "Fíoraithe. ",
    NotVerifiedDot: "Gan fíorú. ",
    ForLoginWithDot: (provider: string) => `Chun logáil isteach le ${provider}. `,
    MakePrimary: "Déan Príomhúil",
    AddEmail: "Cuir seoladh ríomhphoist leis",
    TypeNewEmailC: "Scríobh seoladh ríomhphoist nua:",
    MaxEmailsInfo: (numMax: number) => `(Ní féidir leat níos mó ná ${numMax} seoladh a chur leis.)`,
    EmailAdded_1: "Curtha leis. Tá ríomhphost fíoraithe seolta againn chugat — ",
    EmailAdded_2: "seiceáil do bhosca isteach ríomhphoist.",
    SendVerifEmail: "Seol ríomhphost fíoraithe",

    EmailStatusExpl:
        "('Príomhúil' ciallaíonn sé gur féidir leat logáil isteach tríd an seoladh seo, agus seolaimid fógraí chuige. " +
        "'Fíoraithe' ciallaíonn sé gur chliceáil tú ar nasc fíoraithe i ríomhphost fíoraithe seolta.)",

    // Password:
    ChangePwdQ: "Athraigh pasfhocal?",
    CreatePwdQ: "Cruthaigh pasfhocal?",
    WillGetPwdRstEml: "Gheobhaidh tú ríomhphost chun an pasfhocal a athshocrú.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Dada",

    // Logins:
    LoginMethods: "Modhanna logála isteach",
    commaAs: ", mar: ",

    // One's data:
    YourContent: "D'inneachar",
    DownloadPosts: "Íoslódáil poist",
    DownloadPostsHelp: "Cruthaíonn sé comhad JSON le cóip de na hábhair agus de na tráchtanna a phostáil tú.",
    DownloadPersData: "Íoslódáil sonraí pearsanta",
    DownloadPersDataHelp: "Cruthaíonn sé comhad JSON le cóip de do shonraí pearsanta, m.sh. d'ainm " +
        "(má shonraigh tú ainm) agus do sheoladh ríomhphoist.",


    // Delete account:
    DangerZone: "Limistéar contúirte",
    DeleteAccount: "Scrios an cuntas",
    DeleteYourAccountQ:
        "Scrios do chuntas? Bainfidh muid d'ainm, déanfaimid dearmad ar do sheoladh ríomhphoist, ar do phasfhocal agus " +
        "ar aon aitheantais ar líne (mar logáil isteach Facebook nó Twitter). " +
        "Ní bheidh tú in ann logáil isteach arís. Ní féidir é seo a chur ar ceal.",
    DeleteUserQ:
        "Scrios an t-úsáideoir seo? Bainfidh muid an t-ainm, déanfaimid dearmad ar an seoladh ríomhphoist, ar an bpasfhocal agus " +
        "ar aitheantais ar líne (mar logáil isteach Facebook nó Twitter). " +
        "Ní bheidh an t-úsáideoir in ann logáil isteach arís. Ní féidir é seo a chur ar ceal.",
    YesDelete: "Tá, scrios",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Baill an ghrúpa",
    NoMembers: "Gan aon bhall.",
    MayNotListMembers: "Ní féidir baill a liostú.",
    AddMembers: "Cuir Baill leis",
    BuiltInCannotModify: "Is grúpa ionsuite é seo; ní féidir é a athrú.",
    NumMembers: (num: number) => `${num} ball`,
    YouAreMember: "Is ball tú.",
    CustomGroupsC: "Grúpaí saincheaptha:",
    BuiltInGroupsC: "Grúpaí ionsuite:",
    DeleteGroup: "Scrios an grúpa seo",
  },


  // Create user dialog

  cud: {
    CreateUser: "Cruthaigh Úsáideoir",
    CreateAccount: "Cruthaigh Cuntas",
    EmailC: "Ríomhphost:",  // REMOVE move to t.EmailC instead
    keptPriv: "coinneofar príobháideach é",
    forNotfsKeptPriv: "le haghaidh fógraí freagartha, coinnithe príobháideach",
    EmailVerifBy_1: "Tá do ríomhphost fíoraithe ag ",
    EmailVerifBy_2: ".",
    UsernameC: "Ainm úsáideora:",
    FullNameC: "Ainm iomlán:",
    optName: "roghnach",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Cuntas cruthaithe. Tá tú logáilte isteach.",  // COULD say if verif email sent too?
    AlmostDone:
        "Beagnach déanta! Ní mór duit ach do sheoladh ríomhphoist a dhearbhú. Tá " +
        "ríomhphost seolta againn chugat. Cliceáil ar an nasc sa ríomhphost le do thoil chun do chuntas a " +
        "ghníomhachtú. Is féidir leat an leathanach seo a dhúnadh.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Téarmaí agus Príobháideacht",

    Accept_1: "An nglacann tú lenár ",
    TermsOfService: "dTéarmaí Seirbhíse",
    TermsOfUse: "dTéarmaí Úsáide",
    Accept_2: " agus lenár ",
    PrivPol: "bPolasaí Príobháideachta",
    Accept_3_User: "?",
    Accept_3_Owner: " do úinéirí suímh?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Tá, glacaim leo",
  },


  // Password input

  pwd: {
    PasswordC: "Pasfhocal:",
    StrengthC: "Neart: ",
    FairlyWeak: "Snaidhm lag go leor.",
    toShort: "ró-ghearr",
    TooShort: (minLength: number) => `Ró-ghearr. Ba chóir go mbeadh ar a laghad ${minLength} carachtar ann`,
    PlzInclDigit: "Cuir digit nó carachtar speisialta isteach le do thoil",
    TooWeak123abc: "Ró-lag. Ná húsáid pasfhocail mar '12345' nó 'abcde'.",
    AvoidInclC: "Seachain d'ainm nó do ríomhphost (codanna díobh) a chur sa phasfhocal:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Leathanach gan aimsiú, nó Rochtain Diúltaithe.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Tá tú ag gníomhú mar dhuine eile, nach mbeadh rochtain aige/aici ar gach cuid " +
        "den suíomh Gréasáin seo b'fhéidir.",

    IfYouThinkExistsThen: "Má cheapann tú go bhfuil an leathanach ann, logáil isteach mar dhuine a bhfuil cead aige/aici rochtain a fháil air. ",
    LoggedInAlready: "(Tá tú logáilte isteach cheana féin, ach b'fhéidir gurb é an cuntas mícheart é?) ",
    ElseGoToHome_1: "Seachas sin, is féidir leat ",
    ElseGoToHome_2: "dul chuig an leathanach baile.",

    CreateAcconut: "Cruthaigh cuntas",
    ContinueWithDots: "Lean ar aghaidh le ...",
    SignUp: "Glac páirt",
    LogIn: "Logáil isteach",
    LogInWithPwd: "Logáil isteach le Pasfhocal",
    CreateAdmAcct: "Cruthaigh cuntas riarthóra:",
    AuthRequired: "Tá fíordheimhniú de dhíth chun rochtain a fháil ar an suíomh seo",
    LogInToLike: "Logáil isteach chun 'Is maith liom' a chur leis an bpostáil seo",
    LogInToSubmit: "Logáil isteach agus seol",
    LogInToComment: "Logáil isteach chun trácht a scríobh",
    LogInToCreateTopic: "Logáil isteach chun ábhar a chruthú",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "Nó ",         // "Or "
    OrLogIn_2: "Logáil isteach",      // "Log in" (this is a button)
    OrLogIn_3: " ina ionad sin",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Nó ",
    SignUpInstead_2: "Cruthaigh cuntas", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", or díreach ",
    OrTypeName_2: "scríobh ainm",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Nó cruthaigh cuntas:",
    OrTypeName: "Nó scríobh d'ainm:",
    OrLogIn: "Nó logáil isteach:",
    YourNameQ: "D'ainm?",

    BadCreds: "Ainm úsáideora nó pasfhocal mícheart",

    UsernameOrEmailC: "Ainm úsáideora nó ríomhphost:",
    PasswordC: "Pasfhocal:",
    ForgotPwd: "Ar dhearmad tú do phasfhocal?",

    NoPwd: "Níor roghnaigh tú pasfhocal fós.",
    CreatePwd: "Cruthaigh pasfhocal",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Inis dúinn cad faoi a bhfuil tú buartha le do thoil.",
    ThanksHaveReported: "Go raibh maith agat. Tá sé tuairiscithe agat. Breathnóidh foireann an fhóraim air.",
    ReportComment: "Tuairiscigh Trácht",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Tá sonraí pearsanta sa phostáil seo, mar shampla fíorainm duine éigin.",
    OptOffensive: "Tá inneachar maslach nó drochúsáideach sa phostáil seo.",
    OptSpam: "Is fógra neamh-inmhianaithe é an phostáil seo.",
    OptOther: "Cuir an fhoireann ar an eolas faoin bpostáil seo ar chúis éigin eile.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Is féidir leat teachtaireachtaí cabhrach a thaispeáint arís, má tá tú logáilte isteach, trí " +
        "chliceáil ar d'ainm agus ansin ar ",
    YouCanShowAgain_2: "Taispeáin teachtaireachtaí cabhrach",
  },


  // Editor

  e: {
    SimilarTopicsC: "Ábhair chomhchosúla:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Tá brón orainn ach faoi láthair ní féidir leat ach comhad amháin a uaslódáil ag an am",
    PleaseFinishPost: "Críochnaigh do phostáil ar dtús le do thoil",
    PleaseFinishChatMsg: "Críochnaigh do theachtaireacht chomhrá ar dtús le do thoil",
    PleaseFinishMsg: "Críochnaigh do theachtaireacht ar dtús le do thoil",
    PleaseSaveEdits: "Sábháil do chuid eagarthóireachta reatha ar dtús le do thoil",
    PleaseSaveOrCancel: "Sábháil nó cealaigh d'ábhar nua ar dtús le do thoil",
    CanContinueEditing: "Is féidir leat leanúint ar aghaidh ag cur do théacs in eagar, má osclaíonn tú an t-eagarthóir arís.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Ná scrios an téacs ar fad le do thoil. Scríobh rud éigin.",
    PleaseWriteSth: "Scríobh rud éigin le do thoil.",
    PleaseWriteTitle: "Scríobh teideal don ábhar le do thoil.",
    PleaseWriteMsgTitle: "Scríobh teideal don teachtaireacht le do thoil.",
    PleaseWriteMsg: "Scríobh teachtaireacht le do thoil.",

    exBold: "téacs trom",
    exEmph: "téacs treisithe",
    exPre: "téacs réamhfhoirmithe",
    exQuoted: "téacs luaite",
    ExHeading: "Ceannteideal",

    TitlePlaceholder: "Scríobh teideal — cad faoi atá sé seo, in abairt ghairid amháin?",

    EditPost_1: "Cuir ",
    EditPost_2: "postáil in eagar ",

    TypeChatMsg: "Scríobh teachtaireacht chomhrá:",
    YourMsg: "Do theachtaireacht:",
    CreateTopic: "Cruthaigh ábhar nua",
    CreateCustomHtml: "Cruthaigh leathanach HTML saincheaptha (cuir do theideal <h1> féin leis)",
    CreateInfoPage: "Cruthaigh leathanach eolais",
    CreateCode: "Cruthaigh leathanach cód foinseach",
    AskQuestion: "Cuir ceist",
    ReportProblem: "Tuairiscigh fadhb",
    SuggestIdea: "Mol smaoineamh",
    NewChat: "Teideal agus cuspóir an chomhrá",  // changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Teideal agus cuspóir an chomhrá phríobháidigh",  // changed from "New private chat" to just "Private chat".
    AppendComment: "Cuir trácht leis ag bun an leathanaigh:",

    ReplyTo: "Freagra ar ",
    ReplyTo_theOrigPost: "an Postáil Bhunaidh",
    ReplyTo_post: "postáil ",
    AddCommentC: "Cuir trácht leis:",   

    PleaseSelectPosts: "Roghnaigh postáil amháin nó níos mó le freagairt dóibh le do thoil.",

    Save: "Sábháil",
    edits: "eagarthóireacht",

    PostReply: "Postáil freagra",
    PostComment: "Postáil trácht",

    Post: "Postáil",
    comment: "trácht",
    question: "ceist",

    PostMessage: "Postáil teachtaireacht",
    SimpleEditor: "Eagarthóir simplí",

    Send: "Seol",
    message: "teachtaireacht",

    Create: "Cruthaigh",
    page: "leathanach",
    chat: "comhrá",
    idea: "smaoineamh",
    topic: "ábhar",

    Submit: "Seol",
    problem: "fadhb",

    ViewOldEdits: "Féach ar shean-eagarthóireacht",

    UploadBtnTooltip: "Uaslódáil comhad nó íomhá",
    BoldBtnTooltip: "Déan an téacs trom",
    EmBtnTooltip: "Treisigh",
    QuoteBtnTooltip: "Luaigh",
    PreBtnTooltip: "Téacs réamhfhoirmithe",
    HeadingBtnTooltip: "Ceannteideal",

    TypeHerePlaceholder: "Scríobh anseo. Is féidir leat Markdown agus HTML a úsáid. Tarraing agus scaoil chun íomhánna a ghreamú.",

    Maximize: "Uasmhéadaigh",
    ToNormal: "Ar ais go gnáth",
    TileHorizontally: "Tíl go cothrománach",

    PreviewC: "Réamhamharc:",
    TitleExcl: " (teideal eisiata)",
    ShowEditorAgain: "Taispeáin an t-eagarthóir arís",
    Minimize: "Íoslaghdaigh",

    PreviewInfo: "Anseo is féidir leat réamhamharc a fháil ar conas a bhreathnóidh do phostáil.",
    CannotType: "Ní féidir leat scríobh anseo.",

    LoadingDraftDots: "Ag lódáil aon dréacht...",
    DraftUnchanged: "Gan athrú.",
    CannotSaveDraftC: "Ní féidir an dréacht a shábháil:",
    DraftSavedBrwsr: "Dréacht sábháilte, sa bhrabhsálaí.",   
    DraftSaved: (nr: string | number) => `Dréacht ${nr} sábháilte.`,
    DraftDeleted: (nr: string | number) => `Dréacht ${nr} scriosta.`,
    WillSaveDraft: (nr: string | number) => `Sábhálfar dréacht ${nr} ...`,
    SavingDraft: (nr: string | number) => `Ag sábháil dréacht ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Ag scriosadh dréacht ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Roghnaigh catagóir",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Roghnaigh cineál an ábhair:",
    DiscussionExpl: "Plé faoi rud éigin.",
    QuestionExpl: "Is féidir freagra amháin a mharcáil mar an freagra glactha leis.",
    ProblExpl: "Má tá rud éigin briste nó mura n-oibríonn sé. Is féidir é a mharcáil mar dheisithe/réitithe.",
    IdeaExpl: "Moladh. Is féidir é a mharcáil mar dhéanta/curtha i bhfeidhm.",
    ChatExpl: "Comhrá a d'fhéadfadh a bheith gan deireadh.",
    PrivChatExpl: "Ní fheiceann ach na daoine a bhfaigheann cuireadh páirt a ghlacadh sa chomhrá é.",

    CustomHtml: "Leathanach HTML saincheaptha",
    InfoPage: "Leathanach eolais",
    Code: "Cód",
    EmbCmts: "Tráchtanna leabaithe",
    About: "Faoi",
    PrivChat: "Comhrá Príobháideach",
    Form: "Foirm",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Níl a thuilleadh pobal le dul isteach iontu.",
    SelCmty: "Roghnaigh pobal ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Cuardaigh cabhair",  
    TxtToFind: "Téacs le cuardach",
  },


  // No internet

  ni: {
    NoInet: "Gan nasc idirlín",
    PlzRefr: "Athnuaigh an leathanach chun aon athruithe is déanaí a fheiceáil. (Bhí briseadh sa nasc)",
    RefrNow: "Athnuaigh anois",
  },


  PostDeleted: (postNr: number) => `Scriosadh an phostáil sin, uimh ${postNr}.`,
  NoSuchPost: (postNr: number) => `Níl aon phostáil uimh ${postNr} ar an leathanach seo.`,
  NoPageHere: "Scriosadh an leathanach seo, nó ní raibh sé ann riamh, nó b'fhéidir nach bhfuil cead agat rochtain a fháil air.",
  GoBackToLastPage: "Téigh ar ais go dtí an leathanach deireanach",

};
