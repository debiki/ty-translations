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

var t_is_IS: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Virkur",
  Activity: "Virkni",
  Add: "Bæta við",
  AddingDots: "Bætir við ...",
  AddComment: "Bæta við athugasemd",
  Admin: "Stjórnandi",
  AdvSearch: "Ítarleg leit",
  Anonym: "Nafnlaus",
  Away: "Fjarverandi",
  Back: "Til baka",
  BlogN: "Blogg",
  Bookmarks: "Bókamerki",
  Cancel: "Hætta við",
  Categories: "Flokkar",
  Category: "Flokkur",
  ChangeV: "Breyta",
  ClickToShow: "Smelltu til að sýna",
  ChangeDots: "Breyta ...",
  ChatN: "Spjall",
  Chatting: "Spjallar",
  CheckYourEmail: "Athugaðu tölvupóstinn þinn",
  Close: "Loka",
  closed: "lokað",
  comments: "athugasemdir",   // as in:  "123 comments"
  Continue: "Halda áfram",
  Created: "Búið til",
  Delete: "Eyða",
  Deleted: "Eytt",
  DirectMessage: "Einkaskilaboð",
  Discussion: "Umræða",
  discussion: "umræða",
  done: "búið",
  EditV: "Breyta",
  Editing: "Breytir",
  EmailC: "Netfang: ",
  EmailAddress: "Netfang",
  EmailAddresses: "Netföng",
  EmailSentD: "Tölvupóstur sendur.",
  Forum: "Spjallborð",
  GetNotifiedAbout: "Fá tilkynningar um",
  GroupsC: "Hópar:",
  Hide: "Fela",
  Home: "Heim",
  Idea: "Hugmynd",
  Join: "Gerast meðlimur",
  KbdShrtcsC: "Flýtilyklar: ",
  Loading: "Hleður...",
  LoadMore: "Hlaða meira ...",
  LogIn: "Innskráning",
  LoggedInAs: "Skráður inn sem ",
  LogOut: "Útskráning",
  Maybe: "Kannski",
  Manage: "Stjórna",
  Members: "Meðlimir",
  MessageN: "Skilaboð",
  MoreDots: "Meira...",
  Move: "Færa",
  Name: "Nafn",
  NameC: "Nafn:",
  NewTopic: "Nýtt málefni",
  NoCancel: "Nei, hætta við",
  Notifications: "Tilkynningar",
  NotImplemented: "(Ekki innleitt)",
  NotYet: "Ekki enn",
  NoTitle: "Enginn titill",
  NoTopics: "Engin málefni.",
  Okay: "Í lagi",
  OkayDots: "Í lagi ...",
  Online: "Tengdur",
  onePerLine: "eitt á hverja línu",
  PreviewV: "Forskoðun",
  Problem: "Vandamál",
  progressN: "framvinda",
  Question: "Spurning",
  Recent: "Nýlegt",
  Remove: "Fjarlægja",
  Reopen: "Enduropna",
  ReplyV: "Svara",
  Replying: "Svarar",
  Replies: "Svör",
  replies: "svör",
  Save: "Vista",
  SavingDots: "Vistar ...",
  SavedDot: "Vistað.",
  Search: "Leita",
  SendMsg: "Senda skilaboð",
  ShowPreview: "Sýna forskoðun",
  SignUp: "Gerast meðlimur",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Lausn",
  started: "hafið",
  Summary: "Samantekt",
  Submit: "Senda inn",
  Tag: "Merki",
  Tags: "Merki",
  Tools: "Verkfæri",
  Topics: "Málefni",
  TopicTitle: "Titill málefnis",
  TopicType: "Gerð málefnis",
  UploadingDots: "Hleður upp...",
  Username: "Notandanafn",
  Users: "Notendur",
  Welcome: "Velkomin(n)",
  Wiki: "Wiki",
  Yes: "Já",
  YesBye: "Já, bless",
  YesDoThat: "Já, gerðu það",
  You: "Þú",
  you: "þú",

  // Trust levels.
  Guest:  "Gestur",
  NewMember: "Nýr meðlimur",
  BasicMember: "Almennur meðlimur",
  FullMember: "Fullgildur meðlimur",
  TrustedMember: "Traustur meðlimur",
  RegularMember: "Traustur fastagestur",
  CoreMember: "Kjarnameðlimur",

  // Periods.
  PastDay: "Síðasta sólarhring",
  PastWeek: "Síðustu viku",
  PastMonth: "Síðasta mánuð",
  PastQuarter: "Síðasta ársfjórðung",
  PastYear: "Síðasta árið",
  AllTime: "Frá upphafi",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mán",  // months
  daysLtr: "d",      // days
  hoursLtr: "klst",     // hours
  minsLtr: "mín",      // minutes
  secsLtr: "sek",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "fyrir 1 degi" : `fyrir ${numDays} dögum`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "fyrir 1 klukkustund" : `fyrir ${numHours} klukkustundum`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "fyrir 1 mínútu" : `fyrir ${numMins} mínútum`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "fyrir 1 sekúndu" : `fyrir ${numSecs} sekúndum`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Netfang vantar",
    NoSpcs: "Vinsamlegast engin bil",
    InvldAddr: "Ekki gilt netfang",
    NoBadChrs: "Vinsamlegast enga óvenjulega stafi",

    // Full name input field:
    NotOnlSpcs: "Vinsamlegast ekki bara bil",
    NoAt: "Vinsamlegast ekkert @",

    // Username input field:
    NoDash: "Vinsamlegast enga bandstrik (-)",
    DontInclAt: "Ekki láta @ fylgja með",
    StartEndLtrDgt: "Byrjaðu og endaðu á bókstaf eða tölustaf",
    OnlLtrNumEtc: "Aðeins bókstafir (a-z, A-Z) og tölustafir, og _ (undirstrik)",
    // This shown just below the username input:
    UnUnqShrt_1: "Þitt ",
    UnUnqShrt_2: "@notandanafn",
    UnUnqShrt_3: ", einstakt og stutt",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Ætti að vera að minnsta kosti ${minLength} stafir`,
    TooLong: (maxLength: number) => `Of langt. Ætti að vera að hámarki ${maxLength} stafir`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Hvert innlegg",
    EveryPostInTopic: "Þú munt fá tilkynningu um öll ný svör í þessu málefni.",
    EveryPostInCat: "Þú munt fá tilkynningu um öll ný málefni og svör í þessum flokki.",
    EveryPostInTopicsWithTag: "Þú munt fá tilkynningu um ný málefni með þessu merki, og öll svör í þeim málefnum.",
    EveryPostWholeSite: "Þú munt fá tilkynningu um öll ný málefni og svör, hvar sem er.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Ný málefni",
    NewTopicsInCat: "Þú munt fá tilkynningu um ný málefni í þessum flokki.",
    NewTopicsWithTag: "Þú munt fá tilkynningu um ný málefni með þessu merki.",
    NewTopicsWholeSite: "Þú munt fá tilkynningu um ný málefni, hvar sem er.",

    Tracking: "Fylgist með",

    Normal: "Venjulegt",
    NormalDescr: "Þú munt fá tilkynningu ef einhver talar við þig, einnig óbeint, t.d. svar við svari til þín.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Hljótt",
    HushedDescr: "Þú munt fá tilkynningu aðeins ef einhver talar beint við þig.",

    Muted: "Þaggað",
    MutedTopic: "Engar tilkynningar.",
  },


  // Forum intro text

  fi: {
    Edit: "Breyta",
    Hide_1: "Fela",
    Hide_2: ", smelltu á ",
    Hide_3: " til að enduropna",
  },


  // Forum categories

  fcs: {
    All: "Allt", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Málefnalisti",

    // Select category dropdown

    from: "frá",
    in: "í",
    AllCats: "Allir flokkar",

    // Topic sort order

    Active: "Virkust fyrst",
    ActiveDescr: "Sýnir nýlega virk málefni fyrst",

    New: "Nýtt",
    NewDescr: "Sýnir nýjustu málefnin fyrst",

    Top: "Vinsælt",
    TopDescr: "Sýnir vinsæl málefni fyrst",

    // Topic filter dropdown

    AllTopics: "Öll málefni",

    ShowAllTopics: "Sýna öll málefni",
    ShowAllTopicsDescr: "Ekki eydd málefni þó",

    WaitingTopics: "Málefni í bið",
    OnlyWaitingDescr_1: "Sýnir aðeins málefni ",
    OnlyWaitingDescr_2: "sem bíða ",
    OnlyWaitingDescr_3: "eftir lausn eða að vera innleidd og kláruð",

    YourTopics: "Þín málefni",
    AssignedToYou: "Úthlutað á þig",

    DeletedTopics: "Sýna eytt",
    ShowDeleted: "Sýna eytt",
    ShowDeletedDescr: "Sýnir öll málefni, þar á meðal eydd málefni",

    // Rightmost buttons

    ViewCategories: "Skoða flokka",
    EditCat: "Breyta flokki",
    CreateCat: "Búa til flokk",
    CreateTopic: "Búa til málefni",
    PostIdea: "Senda inn hugmynd",
    AskQuestion: "Spyrja spurningar",
    ReportProblem: "Tilkynna vandamál",
    CreateMindMap: "Búa til hugarkort",
    CreatePage: "Búa til síðu",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Útskýra tákn...",
    IconExplanation: "Skýringar á táknum:",
    ExplGenDisc: "Almenn umræða.",
    ExplQuestion: "Spurning án samþykkts svars.",
    ExplAnswer: "Spurning með samþykktu svari.",
    ExplIdea: "Hugmynd / ábending.",
    ExplProblem: "Vandamál.",
    ExplPlanned: "Eitthvað sem við ætlum að gera eða laga.",
    ExplDone: "Eitthvað sem hefur verið gert eða lagað.",
    ExplClosed: "Málefni lokað.",
    ExplPinned: "Málefni alltaf efst á lista (kannski aðeins í sínum flokki).",

    PopularTopicsComma: "Vinsæl málefni, ",
    TopFirstAllTime: "Sýnir vinsælustu málefnin fyrst, frá upphafi.",
    TopFirstPastDay: "Sýnir vinsæl málefni síðasta sólarhring.",

    CatHasBeenDeleted: "Þessum flokki hefur verið eytt",

    TopicsActiveFirst: "Málefni, nýlega virk fyrst",
    TopicsNewestFirst: "Málefni, nýjustu fyrst",

    CreatedOn: "Búið til þann ",
    LastReplyOn: "\nSíðasta svar þann ",
    EditedOn: "\nBreytt þann ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "bjó til málefnið",
    frequentPoster: "tíður þátttakandi",
    mostRecentPoster: "nýjasti þátttakandi",

    inC: "í: ",

    TitleFixed: "Þetta hefur verið lagað",
    TitleDone: "Þetta hefur verið gert",
    TitleStarted: "Við erum byrjuð á þessu",
    TitleStartedFixing: "Við erum byrjuð að laga þetta",
    TitleUnsolved: "Þetta er óleyst vandamál",
    TitleIdea: "Þetta er hugmynd",
    TitlePlanningFix: "Við ætlum að laga þetta",
    TitlePlanningDo: "Við ætlum að gera þetta",
    TitleChat: "Þetta er spjallrás",
    TitlePrivateChat: "Þetta er lokuð spjallrás",
    TitlePrivateMessage: "Einkaskilaboð",
    TitleInfoPage: "Þetta er upplýsingasíða",
    TitleDiscussion: "Umræða",
    IsPinnedGlobally: "\nÞessu hefur verið fest, svo það er efst á lista.",
    IsPinnedInCat: "\nÞessu hefur verið fest í sínum flokki, svo það er efst á lista í þeim flokki.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Nýleg málefni (þau sem bíða)",
    RecentTopicsInclDel: "Nýleg málefni (þar á meðal eydd)",
    RecentTopics: "Nýleg málefni",
    _replies: " svör",
    _deleted: " (eytt)",
    _defCat: " (sjálfgefinn flokkur)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Nýleg innlegg",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " tengdir í þessu spjalli",    // example: "5 online in this chat"
    NumOnlForum: " tengdir á þessu spjallborði",

    // Open left-sidebar button title.
    WatchbBtn: "Þín málefni",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Þín nýleg málefni, spjallrásir, einkaskilaboð",

    // Title shown on user profile pages.
    AbtUsr: "Um notanda",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Til baka úr notandaprófíl",
    BackFromAdm: "Til baka úr stjórnendasvæði",

    // Title shown on full text search page.
    SearchPg: "Leitarsíða",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Bæta við ...",
    RecentlyViewed: "Nýlega skoðuð málefni",
    JoinedChats: "Þátttaka í spjalli",
    ChatChannels: "Spjallrásir",
    CreateChat: "Búa til spjallrás",
    DirectMsgs: "Einkaskilaboð",
    NoChats: "Engin",    // meaning: "No chat messages"
    NoDirMsgs: "Engin",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Aðgerðir málefnis",
    ViewPeopleHere: "Sjá fólk hér",
    ViewAddRemoveMembers: "Sjá / bæta við / fjarlægja meðlimi",
    ViewChatMembers: "Sjá meðlimi spjalls",
    EditChat: "Breyta lýsingu spjalls",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Yfirgefa þetta spjall",
    LeaveThisCommunity: "Yfirgefa þetta samfélag",
    JoinThisCommunity: "Ganga í þetta samfélag",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Nýlegar athugasemdir í þessu málefni:",
    NoComments: "Engar athugasemdir.",

    YourBookmarks: "Þín bókamerki:",

    UsersOnline: "Tengdir notendur:",
    UsersOnlineForum: "Tengdir notendur á þessu spjallborði:",
    UsersInThisChat: "Notendur í þessu spjalli:",
    UsersInThisTopic: "Notendur í þessu málefni:",

    GettingStartedGuide: "Stjórnandahandbók", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Stjórnandahandbók",          // ... but what? It's here already, just reuse this transl field
    Guide: "Handbók",

    // How to hide the sidebar.
    CloseShortcutS: "Loka (flýtilykill: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Bæta við fleira fólki",

    // Shown next to one's own username, in a list of users.
    thatsYou: "það ert þú",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Aðeins þú, virðist vera",
    YouAnd: "Þú, og ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " manneskja" : " manns";
      const have = numStrangers === 1 ? "er" : "eru";
      return numStrangers + people + " sem " + have + " ekki skráð inn";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Svörin til vinstri gætu verið flokkuð ",
    bestFirst: "bestu-fyrst.",
    ButBelow: "En hér að neðan ",
    insteadBy: " eru sömu svör í staðinn flokkuð ",
    newestFirst: "nýjustu-fyrst.",

    SoIfLeave: "Svo ef þú ferð, og kemur aftur hingað síðar, muntu finna hér að neðan ",
    allNewReplies: "öll ný svör.",
    Click: "Smelltu á",
    aReplyToReadIt: " svar hér að neðan til að lesa það — vegna þess að aðeins brot er sýnt hér að neðan.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Smelltu til að breyta stöðu",
    ClickToViewAnswer: "Smelltu til að sjá svar",
    ViewAnswer: "Sjá svar",
    ChangeStatusC: "Breyta stöðu í:",
    ChangeCatC: "Breyta flokki:",
    ChangeTopicTypeC: "Breyta gerð málefnis:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "spurning",
    hasAccptAns: "er með samþykkt svar",
    aProblem: "vandamál",
    planToFix: "ætlar að laga",
    anIdea: "hugmynd",
    planToDo: "ætlar að gera",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Þessu eyðublaði hefur verið ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "lokað; þú getur ekki lengur fyllt það út og sent inn.",

    ThisTopicClosed_1: "Þessu málefni hefur verið ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Þú getur samt sent inn athugasemdir.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Þessari síðu hefur verið eytt",
    CatDeldPageToo: "Flokki eytt, svo þessari síðu var líka eytt",

    ThreadDeld: "Umræðu eytt",
    CmntDeld: "Athugasemd eytt",
    PostDeld: "Innleggi eytt",
    DiscDeld: "Umræðu eytt",
    PageDeld: "Síðu eytt",
    PagePendAppr: "Síða bíður samþykkis",
    TitlePendAppr: "Titill bíður samþykkis",
    TextPendingApproval: "Texti bíður samþykkis",

    TooltipQuestClosedNoAnsw: "Þessari spurningu hefur verið lokað án samþykkts svars.",
    TooltipTopicClosed: "Þessu málefni er lokað.",

    TooltipQuestSolved: "Þetta er leyst spurning",
    TooltipQuestUnsolved: "Þetta er óleyst spurning",

    StatusDone: "Búið",
    TooltipProblFixed: "Þetta hefur verið lagað",
    TooltipDone: "Þetta hefur verið gert",

    StatusStarted: "Byrjað",
    TooltipFixing: "Við erum byrjuð að laga þetta",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "Við erum byrjuð að gera þetta", // MISSING  -""-

    StatusPlanned: "Planað",
    TooltipProblPlanned: "Við ætlum að laga þetta",
    TooltipIdeaPlanned: "Við ætlum að gera þetta",   // or "to implement this"?

    StatusNew: "Nýtt",
    StatusNewDtl: "Nýtt málefni, í umræðu",
    TooltipUnsProbl: "Þetta er óleyst vandamál",
    TooltipIdea: "Þetta er hugmynd",

    TooltipPersMsg: "Einkaskilaboð",
    TooltipChat: "# merkir spjallrás",
    TooltipPrivChat: "Þetta er lokuð spjallrás",

    TooltipPinnedGlob: "\nFest á heimsvísu.",
    TooltipPinnedCat: "\nFest í þessum flokki.",

    SolvedClickView_1: "Leyst í innleggi #",
    SolvedClickView_2: ", smelltu til að sjá",

    PostHiddenClickShow: "Innlegg falið; smelltu til að sýna",
    ClickSeeMoreRepls: "Sýna fleiri svör",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Sýna fleiri athugasemdir",  // MISSING
    ClickSeeThisComment: "Smelltu til að sýna þessa athugasemd",
    clickToShow: "smelltu til að sýna",

    ManyDisagree: "Margir eru ósammála þessu:",
    SomeDisagree: "Sumir eru ósammála þessu:",

    PendAppr: "Bíður samþykkis",
    CmtPendAppr: "Comment pending approval, posted ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Þín" : "Þessi") + " athugasemd hér að neðan bíður samþykkis.",

    _and: " og",

    repliesTo: "svör við",
    InReplyTo: "Svar við",
    YourReplyTo: "Þitt svar við ",  // MISSING
    YourChatMsg: "Þín spjallskilaboð: ",   // MISSING
    YourDraft: "Þitt uppkast",    // MISSING
    YourEdits: "Þínar breytingar: ",   // MISSING
    YourProgrNoteC: "Þín framvinduathugasemd:",  // MISSING
    aProgrNote: "framvinduathugasemd: ",  // MISSING

    ReplyingToC: "Svarar:",    // MISSING
    ScrollToPrevw_1: "Skruna í ",  // MISSING
    ScrollToPrevw_2: "forskoðun",     // MISSING

    UnfinEdits: "Ókláraðar breytingar",  // MISSING
    ResumeEdting: "Halda áfram að breyta",  // MISSING
    DelDraft: "Eyða uppkasti",   // MISSING

    ClickViewEdits: "Smelltu til að sjá fyrri breytingar",

    By: "Eftir ", // ... someones name

    // Discussion ...
    aboutThisIdea: "um hvernig og hvort eigi að framkvæma þessa hugmynd",
    aboutThisProbl: "um hvernig og hvort eigi að laga þetta",

    AddProgrNote: "Bæta við framvinduathugasemd",
    // Progress ...
    withThisIdea: "við að framkvæma þessa hugmynd",
    withThisProbl: "við að meðhöndla þetta vandamál",
    withThis: "við að gera þetta",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Tilkynningar um þetta málefni:",

    // If is a direct message topic, members listed below this text.
    Msg: "Skilaboð",

    SmrzRepls: "Samantekt á svörum",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Það eru ${numReplies} svör. Áætlaður lestur: ${minutes} mínútur`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Búið. Gerði samantekt á ${numSummarized} svörum, af þeim ${numShownBefore} svörum sem áður voru sýnd.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Loka málefni",
    CloseOwnQuestionTooltip: "Lokaðu þessari spurningu ef þú þarft ekki lengur á svari að halda.",
    CloseOthersQuestionTooltip: "Lokaðu þessari spurningu ef hún þarfnast ekki svars, t.d. ef hún er utan efnis eða henni hefur þegar verið svarað í öðru málefni.",
    CloseToDoTooltip: "Lokaðu þessu verkefni ef það þarf ekki að gera það eða laga.",
    CloseTopicTooltip: "Lokaðu þessu málefni ef það þarfnast ekki frekari athugunar.",

    AcceptBtnExpl: "Samþykkja þetta sem svarið við spurningunni eða vandamálinu",
    SolutionQ: "Lausn?",
    ClickUnaccept: "Smelltu til að afturkalla samþykki á þessu svari",
    PostAccepted: "Þetta innlegg hefur verið samþykkt sem svarið",

    NumLikes: (num: number) => num === 1 ? "1 líkar við" : num + " líkar við",
    NumDisagree: (num: number) => num + " ósammála",
    NumBury: (num: number) => num === 1 ? "1 grafið" : num + " grafin",
    NumUnwanted: (num: number) => num === 1 ? "1 óæskilegt" : num + " óæskileg",

    MoreVotes: "Fleiri atkvæði...",
    LikeThis: "Líkar við þetta",
    LinkToPost: "Hlekkur á þetta innlegg",
    Report: "Tilkynna",
    ReportThisPost: "Tilkynna þetta innlegg",
    Admin: "Stjórnandi",
    DiscIx: "Yfirlit umræðna",

    Disagree: "Ósammála",
    DisagreeExpl: "Smelltu hér til að vera ósammála þessu innleggi, eða til að vara aðra við staðreyndavillum.",
    Bury: "Grafa",
    BuryExpl: "Smelltu til að raða öðrum innleggjum á undan þessu innleggi. Aðeins starfsfólk spjallborðsins getur séð atkvæðið þitt.",
    Unwanted: "Óæskilegt",
    UnwantedExpl: "Ef þú vilt ekki þetta innlegg á þessari vefsíðu. Þetta myndi draga úr trausti mínu á höfundi innleggsins. Aðeins starfsfólk spjallborðsins getur séð atkvæðið þitt.",

    AddTags: "Bæta við/fjarlægja merki",
    UnWikify: "Hætta við Wiki",
    Wikify: "Gera að Wiki",
    PinDeleteEtc: "Festa / Eyða / Flokkur ...",
  },


  // Share dialog

  sd: {
    Copied: "Afritað.",
    CtrlCToCopy: "Ýttu á CTRL+C til að afrita.",
    ClickToCopy: "Smelltu til að afrita hlekk.",
  },


  // Chat

  c: {
    About_1: "Þetta er ",
    About_2: " spjallrásin, búin til af ",
    ScrollUpViewComments: "Skrunaðu upp til að sjá eldri athugasemdir",
    Purpose: "Tilgangur:",
    MessageDeleted: "(Skilaboðum eytt)",
    JoinThisChat: "Ganga í þetta spjall",
    PostMessage: "Senda skilaboð",
    AdvancedEditor: "Ítarlegur ritill",
    TypeTitle: "Sláðu inn titil — um hvað er þetta spjall, í örfáum orðum?",
    TypePurpose: "Sláðu inn tilgang — getur verið lengri en titillinn, nánari lýsing.",
    TypeHere: "Skrifaðu hér. Þú getur notað Markdown og HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Þarfnast yfirlestrar ",
    AdminHelp: "Aðstoð stjórnanda ",
    StaffHelp: "Aðstoð starfsfólks ",
    DraftsEtc: "Uppköst, bókamerki, verkefni",
    MoreNotfs: "Sjá allar tilkynningar",
    DismNotfs: "Merkja öll sem lesin",
    ViewProfile: "Skoða þinn prófíl",
    ViewGroups: "Skoða hópa",
    LogOut: "Útskráning",
    UnhideHelp: "Sýna hjálparskilaboð aftur",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Skruna í:",
    Scroll: "Skruna",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "aka",
    BackExpl: "Skruna aftur í fyrri stöðu á þessari síðu",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Efst á síðu",
    PgTopHelp: "Fara efst á síðuna. Flýtilykill: 1",
    Repl: "Svör",
    ReplHelp: "Fara í svarhlutann. Flýtilykill: 2",
    Progr: "Framvinda",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Fara í framvinduhlutann. Flýtilykill: 3",
    PgBtm: "Neðst á síðu",
    Btm: "Neðst",
    BtmHelp: "Fara neðst á síðuna. Flýtilykill: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", og ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " to scroll back",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Velja notendur",
    AddUsers: "Bæta við notendum",
  },


  // About user dialog

  aud: {
    IsMod: "Er stjórnandi.",
    IsAdm: "Er kerfisstjóri.",
    IsDeld: "Er óvirkt eða eytt.",
    ThisIsGuest: "Þetta er gestanotandi, gæti í raun verið hver sem er.",
    ViewInAdm: "Skoða á stjórnendasvæði",
    ViewProfl: "Skoða prófíl",
    ViewComments: "Skoða aðrar athugasemdir",
    RmFromTpc: "Fjarlægja úr málefni",
    EmAdrUnkn: "Netfang óþekkt — þessi gestur mun ekki fá tilkynningar um svör.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Stillingar",
    Invites: "Boð",
    DraftsEtc: "Uppköst o.fl.",
    About: "Um",
    Privacy: "Friðhelgi",
    Security: "Öryggi",
    Account: "Reikningur",
    Interface: "Viðmót",

    // ----- Overview stats

    JoinedC: "Gekk í: ",
    PostsMadeC: "Innlegg skrifuð: ",
    LastPostC: "Síðasta innlegg: ",
    LastSeenC: "Síðast sést: ",
    TrustLevelC: "Trauststig: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Hlaða upp mynd",
    ChangePhoto: "Breyta mynd",
    ImgTooSmall: "Mynd of lítil: ætti að vera að minnsta kosti 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Aðeins starfsfólk og traustir kjarnameðlimir geta séð þetta.",
    OnlyMbrsCanSee: "Aðeins fólk sem hefur verið virkir meðlimir í dálítinn tíma getur séð þetta.",
    Nothing: "Ekkert til að sýna",
    Posts: "Innlegg",
    NoPosts: "Engin innlegg.",
    Topics: "Málefni",
    NoTopics: "Engin málefni.",

    // ----- User status

    UserBanned: "Þessi notandi er bannaður",
    UserSuspended: (dateUtc: string) => `Aðgangi þessa notanda hefur verið frestað til ${dateUtc} UTC`,
    ReasonC: "Ástæða: ",

    DeactOrDeld: "Hefur verið óvirkjað eða eytt.",
    isGroup: " (hópur)",
    isGuest: " — gestanotandi, gæti verið hver sem er",
    isMod: " – stjórnandi",
    isAdmin: " – kerfisstjóri",
    you: "(þú)",

    // ----- Notifications page

    NoNotfs: "Engar tilkynningar",
    NotfsToYouC: "Tilkynningar til þín:",
    NotfsToOtherC: (name: string) => `Tilkynningar til ${name}:`,
    DefNotfsSiteWide: "Sjálfgefnar tilkynningar fyrir allt svæðið",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "fyrir",

    // ----- Drafts Etc page

    NoDrafts: "Engin uppköst",
    YourDraftsC: "Þín uppköst:",
    DraftsByC: (name: string) => `Uppköst eftir ${name}:`,

    // ----- Invites page

    InvitesIntro: "Hér geturðu boðið fólki að ganga í þetta svæði. ",
    InvitesListedBelow: "Boð sem þú hefur þegar sent eru talin upp hér að neðan.",
    NoInvites: "Þú hefur ekki boðið neinum ennþá.",

    InvitedEmail: "Netfang sem boðið var",
    WhoAccepted: "Meðlimur sem samþykkti",
    InvAccepted: "Boð samþykkt",
    InvSent: "Boð sent",
    JoinedAlready: "Hefur þegar gengið í",

    SendAnInv: "Bjóða fólki", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Senda boð",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Við munum senda vinum þínum stuttan tölvupóst. Þeir smella á hlekk " +
        "til að ganga í strax, án þess að þurfa að skrá sig inn. " +
        "Þeir verða venjulegir meðlimir, ekki stjórnendur eða kerfisstjórar.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Búið. Ég mun senda þeim tölvupóst.",
    NoOneToInv: "Enginn til að bjóða.",
    InvNotfLater: "Ég mun láta þig vita síðar þegar ég hef boðið þeim.",
    AlreadyInvSendAgainQ: "Þessum hefur þegar verid boðið — kannski viltu bjóða þeim aftur?",
    InvErr_1: "Þetta leiddi til ",
    InvErr_2: "villna",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Þessir hafa þegar gengið í, svo ég bauð þeim ekki:",
    ResendInvsQ: "Endursenda boð til þessa fólks? Þeim hefur þegar verið boðið.",
    InvAgain: "Bjóða aftur",

    // ----- Preferences, About

    AboutYou: "Um þig",
    WebLink: "Vefsíða eða síða á þínum vegum.",

    NotShownCannotChange: "Ekki sýnt opinberlega. Getur ekki breytt.",

    // The full name or alias:
    NameOpt: "Nafn (valfrjálst)",

    NotShown: "Ekki sýnt opinberlega.",

    // The username:
    MayChangeFewTimes: "Þú mátt aðeins breyta því nokkrum sinnum.",
    notSpecified: "(ekki tilgreint)",
    ChangeUsername_1: "Þú mátt aðeins breyta notandanafni þínu nokkrum sinnum.",
    ChangeUsername_2: "Að breyta því of oft getur valdið ruglingi hjá öðrum — " +
        "þeir munu ekki vita hvernig þeir eiga að @minnast á þig.",

    NotfAboutAll: "Fá tilkynningu um hvert nýtt innlegg (nema þú þaggir niður í málefninu eða flokknum)",
    NotfAboutNewTopics: "Fá tilkynningu um ný málefni (nema þú þaggir niður í flokknum)",

    ActivitySummaryEmails: "Tölvupóstur með samantekt á virkni",

    EmailSummariesToGroup:
        "Þegar meðlimir þessa hóps koma ekki hingað, sendu þeim þá sjálfgefið tölvupóst " +
        "með samantekt á vinsælum málefnum og öðru.",
    EmailSummariesToMe:
        "Þegar ég kem ekki hingað, sendu mér þá tölvupóst " +
        "með samantekt á vinsælum málefnum og öðru.",

    AlsoIfTheyVisit: "Sendu þeim líka tölvupóst ef þeir koma hingað reglulega.",
    AlsoIfIVisit: "Sendu mér líka tölvupóst ef ég kem hingað reglulega.",

    HowOftenWeSend: "Hversu oft eigum við að senda þessa tölvupósta?",
    HowOftenYouWant: "Hversu oft viltu fá þessa tölvupósta?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Fela nýlega virkni þína fyrir ókunnugum og nýjum meðlimum?",
    HideActivityStrangers_2: "(En ekki fyrir þeim sem hafa verið virkir meðlimir í dálítinn tíma.)",
    HideActivityAll_1: "Fela nýlega virkni þína fyrir öllum?",
    HideActivityAll_2: "(Except for staff and trusted core members.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Netföng",
    PrimaryDot: "Aðal. ",
    VerifiedDot: "Staðfest. ",
    NotVerifiedDot: "Ekki staðfest. ",
    ForLoginWithDot: (provider: string) => `Fyrir innskráningu með ${provider}. `,
    MakePrimary: "Gera að aðal",
    AddEmail: "Bæta við netfangi",
    TypeNewEmailC: "Sláðu inn nýtt netfang:",
    MaxEmailsInfo: (numMax: number) => `(Þú getur ekki bætt við fleiri en ${numMax} netföngum.)`,
    EmailAdded_1: "Bætt við. Við höfum sent þér staðfestingarpóst — ",
    EmailAdded_2: "athugaðu pósthólfið þitt.",
    SendVerifEmail: "Senda staðfestingarpóst",

    EmailStatusExpl:
        "('Aðal' þýðir að þú getur skráð þig inn með þessu netfangi, og við sendum tilkynningar á það. " +
        "'Staðfest' þýðir að þú smelltir á staðfestingartengil í tölvupósti.)",

    // Password:
    ChangePwdQ: "Breyta lykilorði?",
    CreatePwdQ: "Búa til lykilorð?",
    WillGetPwdRstEml: "Þú munt fá tölvupóst til að endurstilla lykilorð.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Ekkert",

    // Logins:
    LoginMethods: "Innskráningaraðferðir",
    commaAs: ", sem: ",

    // One's data:
    YourContent: "Þitt efni",
    DownloadPosts: "Sækja innlegg",
    DownloadPostsHelp: "Býr til JSON skrá með afriti af málefnum og athugasemdum sem þú hefur sent inn.",
    DownloadPersData: "Sækja persónuupplýsingar",
    DownloadPersDataHelp: "Býr til JSON skrá með afriti af persónuupplýsingum þínum, t.d. nafni " +
        "(if you specified a name) og netfangi.",


    // Delete account:
    DangerZone: "Hættusvæði",
    DeleteAccount: "Eyða reikningi",
    DeleteYourAccountQ:
        "Eyða reikningi þínum? Við munum fjarlægja nafnið þitt, gleyma netfanginu þínu, lykilorði og " +
        "öllum auðkennum á netinu (eins og Facebook eða Twitter innskráningu). " +
        "Þú munt ekki geta skráð þig inn aftur. Þessu er ekki hægt að afturkalla.",
    DeleteUserQ:
        "Eyða þessum notanda? Við munum fjarlægja nafnið, gleyma netfanginu, lykilorðið og " +
        "auðkennum á netinu (eins og Facebook eða Twitter innskráningu). " +
        "Notandinn mun ekki geta skráð sig inn aftur. Þessu er ekki hægt að afturkalla.",
    YesDelete: "Já, eyða",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Meðlimir hóps",
    NoMembers: "Engir meðlimir.",
    MayNotListMembers: "Má ekki sýna meðlimi.",
    AddMembers: "Bæta við meðlimum",
    BuiltInCannotModify: "Þetta er innbyggður hópur; honum er ekki hægt að breyta.",
    NumMembers: (num: number) => `${num} meðlimir`,
    YouAreMember: "Þú ert meðlimur.",
    CustomGroupsC: "Sérsniðnir hópar:",
    BuiltInGroupsC: "Innbyggðir hópar:",
    DeleteGroup: "Eyða þessum hópi",
  },


  // Create user dialog

  cud: {
    CreateUser: "Búa til notanda",
    CreateAccount: "Búa til reikning",
    EmailC: "Netfang:",
    keptPriv: "verður haldið lokuðu",
    forNotfsKeptPriv: "fyrir tilkynningar um svör, haldið lokuðu",
    EmailVerifBy_1: "Netfang þitt hefur verið staðfest af ",
    EmailVerifBy_2: ".",
    UsernameC: "Notandanafn:",
    FullNameC: "Fullt nafn:",
    optName: "valfrjálst",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Reikningur búinn til. Þú hefur verið skráð(ur) inn.",  // COULD say if verif email sent too?
    AlmostDone:
        "Alveg að verða búið! Þú þarft bara að staðfesta netfangið þitt. Við höfum " +
        "sent þér tölvupóst. Vinsamlegast smelltu á hlekkinn í tölvupóstinum til að virkja " +
        "reikninginn þinn. Þú getur lokað þessari síðu.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Skilmálar og persónuvernd",

    Accept_1: "Samþykkir þú ",
    TermsOfService: "þjónustuskilmála okkar",
    TermsOfUse: "notkunarskilmála okkar",
    Accept_2: " og ",
    PrivPol: "persónuverndarstefnu",
    Accept_3_User: "?",
    Accept_3_Owner: " fyrir eigendur svæða?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Já ég samþykki",
  },


  // Password input

  pwd: {
    PasswordC: "Lykilorð:",
    StrengthC: "Styrkur: ",
    FairlyWeak: "Gleypilega veikt.",
    toShort: "of stutt",
    TooShort: (minLength: number) => `Of stutt. Ætti að vera að minnsta kosti ${minLength} stafir`,
    PlzInclDigit: "Vinsamlegast láttu tölustaf eða sérstaf fylgja með",
    TooWeak123abc: "Of veikt. Ekki nota lykilorð eins og '12345' eða 'abcde'.",
    AvoidInclC: "Forðastu að láta hluta af nafni þínu eða netfangi fylgja með í lykilorðinu:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Síða fannst ekki, eða aðgangi hafnað.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Þú ert að koma fram sem einhver annar, sem gæti haft takmarkaðan aðgang að hlutum " +
        "þessarar vefsíðu.",

    IfYouThinkExistsThen: "Ef þú telur að síðan sé til, skráðu þig þá inn sem einhver sem hefur aðgang að henni. ",
    LoggedInAlready: "(Þú ert þegar skráður inn, en kannski er þetta rangur reikningur?) ",
    ElseGoToHome_1: "Annars geturðu ",
    ElseGoToHome_2: "farið á forsíðuna.",

    CreateAcconut: "Búa til reikning",
    ContinueWithDots: "Halda áfram með ...",
    SignUp: "Gerast meðlimur",
    LogIn: "Skrá sig inn",
    LogInWithPwd: "Skrá sig inn með lykilorði",
    CreateAdmAcct: "Búa til stjórnandareikning:",
    AuthRequired: "Innskráningar er krafist til að fá aðgang að þessu svæði",
    LogInToLike: "Skráðu þig inn til að líka við þetta innlegg",
    LogInToSubmit: "Skráðu þig inn og sendu inn",
    LogInToComment: "Skráðu þig inn til að skrifa athugasemd",
    LogInToCreateTopic: "Skráðu þig inn til að búa til málefni",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "Eða ",         // "Or "
    OrLogIn_2: "Skráðu þig inn",      // "Log in" (this is a button)
    OrLogIn_3: " í staðinn",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Eða ",
    SignUpInstead_2: "Búa til reikning", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", eða bara ",
    OrTypeName_2: "sláðu inn nafn",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Eða búa til reikning hér:",
    OrTypeName: "Eða sláðu inn nafnið þitt:",
    OrLogIn: "Eða skráðu þig inn:",
    YourNameQ: "Nafnið þitt?",

    BadCreds: "Rangt notandanafn eða lykilorð",

    UsernameOrEmailC: "Notandanafn eða netfang:",
    PasswordC: "Lykilorð:",
    ForgotPwd: "Gleymdirðu lykilorðinu þínu?",

    NoPwd: "Þú hefur ekki enn valið lykilorð.",
    CreatePwd: "Búa til lykilorð",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Vinsamlegast segðu okkur hvað veldur þér áhyggjum.",
    ThanksHaveReported: "Takk. Þú hefur tilkynnt þetta. Starfsfólk spjallborðsins mun skoða málið.",
    ReportComment: "Tilkynna athugasemd",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Þetta innlegg inniheldur persónuupplýsingar, til dæmis raunverulegt nafn einhvers.",
    OptOffensive: "Þetta innlegg inniheldur móðgandi eða dónalegt efni.",
    OptSpam: "Þetta innlegg er óæskileg auglýsing (spam).",
    OptOther: "Láta starfsfólk vita um þetta innlegg af öðrum ástæðum.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Þú getur sýnt hjálparskilaboð aftur, ef þú ert skráð(ur) inn, með því að " +
        "smella á nafnið þitt og síðan ",
    YouCanShowAgain_2: "Sýna hjálparskilaboð aftur",
  },


  // Editor

  e: {
    SimilarTopicsC: "Svipuð málefni:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Því miður en eins og er geturðu aðeins hlaðið upp einni skrá í einu",
    PleaseFinishPost: "Vinsamlegast kláraðu fyrst að skrifa innleggið þitt",
    PleaseFinishChatMsg: "Vinsamlegast kláraðu fyrst að skrifa spjallskilaboðin þín",
    PleaseFinishMsg: "Vinsamlegast kláraðu fyrst að skrifa skilaboðin þín",
    PleaseSaveEdits: "Vinsamlegast vistaðu fyrst núverandi breytingar",
    PleaseSaveOrCancel: "Vinsamlegast annað hvort vistaðu eða hættu við nýja málefnið þitt",
    CanContinueEditing: "Þú getur haldið áfram að breyta textanum þínum ef þú opnar ritilinn aftur.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Vinsamlegast ekki eyða öllum textanum. Skrifaðu eitthvað.",
    PleaseWriteSth: "Vinsamlegast skrifaðu eitthvað.",
    PleaseWriteTitle: "Vinsamlegast skrifaðu titil á málefnið.",
    PleaseWriteMsgTitle: "Vinsamlegast skrifaðu titil á skilaboðin.",
    PleaseWriteMsg: "Vinsamlegast skrifaðu skilaboð.",

    exBold: "feitletraður texti",
    exEmph: "skáletraður texti",
    exPre: "foursniðinn texti",
    exQuoted: "tilvitnaður texti",
    ExHeading: "Fyrirsögn",

    TitlePlaceholder: "Sláðu inn titil — um hvað er þetta, í einni stuttri setningu?",

    EditPost_1: "Breyta ",
    EditPost_2: "innleggi ",

    TypeChatMsg: "Skrifaðu spjallskilaboð:",
    YourMsg: "Þín skilaboð:",
    CreateTopic: "Búa til nýtt málefni",
    CreateCustomHtml: "Búa til sérsniðna HTML síðu (bættu við þínum eigin <h1> titli)",
    CreateInfoPage: "Búa til upplýsingasíðu",
    CreateCode: "Búa til síðu fyrir frumkóða",
    AskQuestion: "Spyrja spurningar",
    ReportProblem: "Tilkynna vandamál",
    SuggestIdea: "Gefa hugmynd",
    NewChat: "Titill og tilgangur spjalls",  // MISSING, changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Titill og tilgangur lokaðs spjalls",  // MISSING, changed from "New private chat" to just "Private chat".
    AppendComment: "Bæta athugasemd við neðst á síðuna:",

    ReplyTo: "Svara ",
    ReplyTo_theOrigPost: "upphaflega innlegginu",
    ReplyTo_post: "innleggi ",
    AddCommentC: "Bæta við athugasemd:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Vinsamlegast veldu eitt eða fleiri innlegg til að svara.",

    Save: "Vista",
    edits: "breytingar",

    PostReply: "Senda svar",
    PostComment: "Senda athugasemd",

    Post: "Senda",
    comment: "athugasemd",
    question: "spurning",

    PostMessage: "Senda skilaboð",
    SimpleEditor: "Einfaldur ritill",

    Send: "Senda",
    message: "skilaboð",

    Create: "Búa til",
    page: "síðu",
    chat: "spjall",
    idea: "hugmynd",
    topic: "málefni",

    Submit: "Senda inn",
    problem: "vandamál",

    ViewOldEdits: "Sjá fyrri breytingar",

    UploadBtnTooltip: "Hlaða upp skrá eða mynd",
    BoldBtnTooltip: "Feitletra texta",
    EmBtnTooltip: "Skáletra",
    QuoteBtnTooltip: "Tilvitnun",
    PreBtnTooltip: "Forsniðinn texti",
    HeadingBtnTooltip: "Fyrirsögn",

    TypeHerePlaceholder: "Skrifaðu hér. Þú getur notað Markdown og HTML. Dragðu og slepptu til að líma myndir.",

    Maximize: "Hámarka",
    ToNormal: "Aftur í venjulega stærð",
    TileHorizontally: "Raða lárétt",

    PreviewC: "Forskoðun:",
    TitleExcl: " (titill undanskilinn)",
    ShowEditorAgain: "Sýna ritil aftur",
    Minimize: "Lágmarka",

    PreviewInfo: "Hér geturðu séð hvernig innleggið þitt mun líta út.",
    CannotType: "Þú getur ekki skrifað hér.",

    LoadingDraftDots: "Hleður uppkasti...",
    DraftUnchanged: "Óbreytt.",
    CannotSaveDraftC: "Gat ekki vistað uppkast:",
    DraftSavedBrwsr: "Uppkast vistað í vafra.",   // MISSING
    DraftSaved: (nr: string | number) => `Uppkast ${nr} vistað.`,
    DraftDeleted: (nr: string | number) => `Uppkast ${nr} eytt.`,
    WillSaveDraft: (nr: string | number) => `Mun vista uppkast ${nr} ...`,
    SavingDraft: (nr: string | number) => `Vistar uppkast ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Eyðir uppkasti ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Veldu flokk",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Veldu gerð málefnis:",
    DiscussionExpl: "Umræða um eitthvað.",
    QuestionExpl: "Hægt er að merkja eitt svar som samþykkt svar.",
    ProblExpl: "Ef eitthvað er bilað eða virkar ekki. Hægt að merkja sem lagað/leyst.",
    IdeaExpl: "Ábending. Hægt að merkja sem búið/innleitt.",
    ChatExpl: "Samtal sem gæti verið endalaust.",
    PrivChatExpl: "Aðeins sýnilegt fólki sem er boðið að taka þátt í spjallinu.",

    CustomHtml: "Sérsniðin HTML síða",
    InfoPage: "Upplýsingasíða",
    Code: "Kóði",
    EmbCmts: "Innfelldar athugasemdir",
    About: "Um",
    PrivChat: "Lokað spjall",
    Form: "Eyðublað",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Engin fleiri samfélög til að ganga í.",
    SelCmty: "Veldu samfélag ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Leita að aðstoð",  // MISSING
    TxtToFind: "Texti til að leita að",
  },


  // No internet

  ni: {
    NoInet: "Engin nettenging",
    PlzRefr: "Endurhlaðið síðuna til að sjá nýjustu breytingar. (Sambandið rofnaði)",
    RefrNow: "Endurhlaða núna",
  },


  PostDeleted: (postNr: number) => `Þessu innleggi, nr ${postNr}, hefur verið eytt.`,
  NoSuchPost: (postNr: number) => `Það er ekkert innlegg nr ${postNr} á þessari síðu.`,
  NoPageHere: "Þessari síðu hefur verið eytt, eða hún var aldrei til, eða þú hefur ekki aðgang að henni.",
  GoBackToLastPage: "Fara aftur á síðustu síðu",

};
