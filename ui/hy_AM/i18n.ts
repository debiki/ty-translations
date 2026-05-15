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

var t_hy_AM: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Ակտիվ",
  Activity: "Գործունեություն",
  Add: "Ավելացնել",
  AddingDots: "Ավելացվում է ...",
  AddComment: "Ավելացնել մեկնաբանություն",
  Admin: "Ադմին",
  AdvSearch: "Ընդլայնված որոնում",
  Anonym: "Անանուն",
  Away: "Բացակա",
  Back: "Հետ",
  BlogN: "Բլոգ",
  Bookmarks: "Էջանշաններ",
  Cancel: "Չեղարկել",
  Categories: "Կատեգորիաներ",
  Category: "Կատեգորիա",
  ChangeV: "Փոխել",
  ClickToShow: "Սեղմեք ցուցադրելու համար",
  ChangeDots: "Փոխել ...",
  ChatN: "Չաթ",
  Chatting: "Չաթ",
  CheckYourEmail: "Ստուգեք ձեր էլփոստը",
  Close: "Փակել",
  closed: "փակված",
  comments: "մեկնաբանություններ",
  Continue: "Շարունակել",
  Created: "Ստեղծված",
  Delete: "Ջնջել",
  Deleted: "Ջնջված",
  DirectMessage: "Ուղիղ հաղորդագրություն",
  Discussion: "Քննարկում",
  discussion: "քննարկում",
  done: "կատարված",
  EditV: "Խմբագրել",
  Editing: "Խմբագրում",
  EmailC: "Էլփոստ: ",
  EmailAddress: "Էլփոստի հասցե",
  EmailAddresses: "Էլփոստի հասցեներ",
  EmailSentD: "Էլփոստն ուղարկված է:",
  Forum: "Ֆորում",
  GetNotifiedAbout: "Ստանալ ծանուցումներ",
  GroupsC: "Խմբեր:",
  Hide: "Թաքցնել",
  Home: "Գլխավոր",
  Idea: "Գաղափար",
  Join: "Միանալ",
  KbdShrtcsC: "Ստեղնաշարի դյուրանցումներ: ",
  Loading: "Բեռնվում է...",
  LoadMore: "Բեռնել ավելին ...",
  LogIn: "Մուտք գործել",
  LoggedInAs: "Մուտք եք գործել որպես ",
  LogOut: "Դուրս գալ",
  Maybe: "Գուցե",
  Manage: "Կառավարել",
  Members: "Անդամներ",
  MessageN: "Հաղորդագրություն",
  MoreDots: "Ավելին...",
  Move: "Տեղափոխել",
  Name: "Անուն",
  NameC: "Անուն:",
  NewTopic: "Նոր թեմա",
  NoCancel: "Ոչ, չեղարկել",
  Notifications: "Ծանուցումներ",
  NotImplemented: "(Իրականացված չէ)",
  NotYet: "Դեռ ոչ",
  NoTitle: "Առանց վերնագրի",
  NoTopics: "Թեմաներ չկան:",
  Okay: "Լավ",
  OkayDots: "Լավ ...",
  Online: "Առցանց",
  onePerLine: "մեկ տողում մեկ հատ",
  PreviewV: "Նախադիտում",
  Problem: "Խնդիր",
  progressN: "ընթացք",
  Question: "Հարց",
  Recent: "Վերջին",
  Remove: "Հեռացնել",
  Reopen: "Վերաբացել",
  ReplyV: "Պատասխանել",
  Replying: "Պատասխանում է",
  Replies: "Պատասխաններ",
  replies: "պատասխաններ",
  Save: "Պահպանել",
  SavingDots: "Պահպանվում է ...",
  SavedDot: "Պահպանված է:",
  Search: "Որոնել",
  SendMsg: "Ուղարկել հաղորդագրություն",
  ShowPreview: "Ցույց տալ նախադիտումը",
  SignUp: "Միանալ",
  Solution: "Լուծում",
  started: "սկսված",
  Summary: "Ամփոփում",
  Submit: "Ուղարկել",
  Tag: "Պիտակ",
  Tags: "Պիտակներ",
  Tools: "Գործիքներ",
  Topics: "Թեմաներ",
  TopicTitle: "Թեմայի վերնագիր",
  TopicType: "Թեմայի տեսակ",
  UploadingDots: "Վերբեռնվում է...",
  Username: "Օգտանուն",
  Users: "Օգտատերեր",
  Welcome: "Բարի գալուստ",
  Wiki: "Վիքի",
  Yes: "Այո",
  YesBye: "Այո, ցտեսություն",
  YesDoThat: "Այո, արա դա",
  You: "Դուք",
  you: "դուք",

  // Trust levels.
  Guest:  "Հյուր",
  NewMember: "Նոր անդամ",
  BasicMember: "Հիմնական անդամ",
  FullMember: "Լիարժեք անդամ",
  TrustedMember: "Վստահելի անդամ",
  RegularMember: "Վստահելի կանոնավոր",
  CoreMember: "Հիմնական անդամ",

  // Periods.
  PastDay: "Անցյալ օր",
  PastWeek: "Անցյալ շաբաթ",
  PastMonth: "Անցյալ ամիս",
  PastQuarter: "Անցյալ եռամսյակ",
  PastYear: "Անցյալ տարի",
  AllTime: "Ամբողջ ժամանակ",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "ամ",
  daysLtr: "օր",
  hoursLtr: "ժ",
  minsLtr: "ր",
  secsLtr: "վ",

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 օր առաջ" : `${numDays} օր առաջ`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 ժամ առաջ" : `${numHours} ժամ առաջ`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 րոպե առաջ" : `${numMins} րոպե առաջ`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 վայրկյան առաջ" : `${numSecs} վայրկյան առաջ`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Էլփոստը պարտադիր է",
    NoSpcs: "Խնդրում ենք առանց բացատների",
    InvldAddr: "Վավեր էլփոստի հասցե չէ",
    NoBadChrs: "Խնդրում ենք առանց տարօրինակ նշանների",

    // Full name input field:
    NotOnlSpcs: "Խնդրում ենք ոչ միայն բացատներ",
    NoAt: "Խնդրում ենք առանց @-ի",

    // Username input field:
    NoDash: "Խնդրում ենք առանց գծիկների (-)",
    DontInclAt: "Մի ներառեք @-ը",
    StartEndLtrDgt: "Սկսեք և ավարտեք տառով կամ թվանշանով",
    OnlLtrNumEtc: "Միայն տառեր (a-z, A-Z), թվեր և _ (ընդգծում)",
    // This shown just below the username input:
    UnUnqShrt_1: "Ձեր ",
    UnUnqShrt_2: "@օգտանունը",
    UnUnqShrt_3: ", եզակի և կարճ",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Պետք է լինի առնվազն ${minLength} նիշ`,
    TooLong: (maxLength: number) => `Չափազանց երկար է: Պետք է լինի առավելագույնը ${maxLength} նիշ`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Յուրաքանչյուր գրառում",
    EveryPostInTopic: "Դուք կստանաք ծանուցում այս թեմայի բոլոր նոր պատասխանների մասին:",
    EveryPostInCat: "Դուք կստանաք ծանուցում այս կատեգորիայի բոլոր նոր թեմաների և պատասխանների մասին:",
    EveryPostInTopicsWithTag: "Դուք կստանաք ծանուցում այս պիտակով նոր թեմաների և այդ թեմաների բոլոր պատասխանների մասին:",
    EveryPostWholeSite: "Դուք կստանաք ծանուցում բոլոր նոր թեմաների և պատասխանների մասին ամենուրեք:",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Նոր թեմաներ",
    NewTopicsInCat: "Դուք կստանաք ծանուցում այս կատեգորիայի նոր թեմաների մասին:",
    NewTopicsWithTag: "Դուք կստանաք ծանուցում այս պիտակով նոր թեմաների մասին:",
    NewTopicsWholeSite: "Դուք կստանաք ծանուցում նոր թեմաների մասին ամենուրեք:",

    Tracking: "Հետևում",

    Normal: "Նորմալ",
    NormalDescr: "Դուք կստանաք ծանուցում, եթե ինչ-որ մեկը խոսի ձեզ հետ, նաև անուղղակիորեն, օրինակ՝ " +
        "ձեր պատասխանի պատասխանը:",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Լռեցված",
    HushedDescr: "Դուք կստանաք ծանուցում միայն այն դեպքում, եթե ինչ-որ մեկը ուղղակիորեն խոսի ձեզ հետ:",

    Muted: "Անջատված",
    MutedTopic: "Ծանուցումներ չկան:",
  },


  // Forum intro text

  fi: {
    Edit: "Խմբագրել",
    Hide_1: "Թաքցնել",
    Hide_2: ", սեղմեք ",
    Hide_3: " վերաբացելու համար",
  },


  // Forum categories

  fcs: {
    All: "Բոլորը", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Թեմաների ցուցակ",

    // Select category dropdown

    from: "-ից",
    in: "-ում",
    AllCats: "Բոլոր կատեգորիաները",

    // Topic sort order

    Active: "Ակտիվները սկզբում",
    ActiveDescr: "Ցույց է տալիս վերջին ակտիվ թեմաները սկզբում",

    New: "Նոր",
    NewDescr: "Ցույց է տալիս նորագույն թեմաները սկզբում",

    Top: "Հանրաճանաչ",
    TopDescr: "Ցույց է տալիս հանրաճանաչ թեմաները սկզբում",

    // Topic filter dropdown

    AllTopics: "Բոլոր թեմաները",

    ShowAllTopics: "Ցույց տալ բոլոր թեմաները",
    ShowAllTopicsDescr: "Բացի ջնջված թեմաներից",

    WaitingTopics: "Սպասող թեմաներ",
    OnlyWaitingDescr_1: "Ցույց է տալիս միայն այն թեմաները, ",
    OnlyWaitingDescr_2: "որոնք սպասում են ",
    OnlyWaitingDescr_3: "լուծման կամ իրականացման և ավարտի",

    YourTopics: "Ձեր թեմաները",
    AssignedToYou: "Ձեզ հանձնարարված",

    DeletedTopics: "Ցույց տալ ջնջվածները",
    ShowDeleted: "Ցույց տալ ջնջվածները",
    ShowDeletedDescr: "Ցույց է տալիս բոլոր թեմաները, ներառյալ ջնջվածները",

    // Rightmost buttons

    ViewCategories: "Դիտել կատեգորիաները",
    EditCat: "Խմբագրել կատեգորիան",
    CreateCat: "Ստեղծել կատեգորիա",
    CreateTopic: "Ստեղծել թեմա",
    PostIdea: "Տեղադրել գաղափար",
    AskQuestion: "Տալ հարց",
    ReportProblem: "Հայտնել խնդրի մասին",
    CreateMindMap: "Ստեղծել մտքի քարտեզ",
    CreatePage: "Ստեղծել էջ",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Բացատրել պատկերակները...",
    IconExplanation: "Պատկերակների բացատրություն:",
    ExplGenDisc: "Ընդհանուր քննարկում:",
    ExplQuestion: "Հարց՝ առանց ընդունված պատասխանի:",
    ExplAnswer: "Հարց՝ ընդունված պատասխանով:",
    ExplIdea: "Գաղափար / առաջարկ:",
    ExplProblem: "Խնդիր:",
    ExplPlanned: "Ինչ-որ բան, որ մենք պլանավորում ենք անել կամ շտկել:",
    ExplDone: "Ինչ-որ բան, որն արդեն արվել է կամ շտկվել է:",
    ExplClosed: "Թեման փակված է:",
    ExplPinned: "Թեման միշտ նշված է առաջինը (գուցե միայն իր կատեգորիայում):",

    PopularTopicsComma: "Հանրաճանաչ թեմաներ, ",
    TopFirstAllTime: "Ցույց է տալիս ամենահանրաճանաչ թեմաները սկզբում՝ ամբողջ ժամանակի համար:",
    TopFirstPastDay: "Ցույց է տալիս անցյալ օրվա ընթացքում հանրաճանաչ թեմաները:",

    CatHasBeenDeleted: "Այս կատեգորիան ջնջվել է",

    TopicsActiveFirst: "Թեմաներ, վերջին ակտիվները սկզբում",
    TopicsNewestFirst: "Թեմաներ, նորերը սկզբում",

    CreatedOn: "Ստեղծված է ",
    LastReplyOn: "\nՎերջին պատասխանը՝ ",
    EditedOn: "\nԽմբագրված է՝ ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "ստեղծել է թեման",
    frequentPoster: "հաճախակի գրառող",
    mostRecentPoster: "ամենավերջին գրառողը",

    inC: "այստեղ՝ ",

    TitleFixed: "Սա շտկվել է",
    TitleDone: "Սա արվել է",
    TitleStarted: "Մենք սկսել ենք սա",
    TitleStartedFixing: "Մենք սկսել ենք շտկել սա",
    TitleUnsolved: "Սա չլուծված խնդիր է",
    TitleIdea: "Սա գաղափար է",
    TitlePlanningFix: "Մենք պլանավորում ենք շտկել սա",
    TitlePlanningDo: "Մենք պլանավորում ենք անել սա",
    TitleChat: "Սա չաթի ալիք է",
    TitlePrivateChat: "Սա անձնական չաթի ալիք է",
    TitlePrivateMessage: "Անձնական հաղորդագրություն",
    TitleInfoPage: "Սա տեղեկատվական էջ է",
    TitleDiscussion: "Քննարկում",
    IsPinnedGlobally: "\nԱյն ամրացված է, ուստի նշված է առաջինը:",
    IsPinnedInCat: "\nԱյն ամրացված է իր կատեգորիայում, ուստի նշված է առաջինը իր կատեգորիայում:",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Վերջին թեմաները (սպասողները)",
    RecentTopicsInclDel: "Վերջին թեմաները (ներառյալ ջնջվածները)",
    RecentTopics: "Վերջին թեմաները",
    _replies: " պատասխաններ",
    _deleted: " (ջնջված)",
    _defCat: " (կանխադրված կատեգորիա)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Վերջին գրառումները",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " առցանց այս չաթում",    // example: "5 online in this chat"
    NumOnlForum: " առցանց այս ֆորումում",

    // Open left-sidebar button title.
    WatchbBtn: "Ձեր թեմաները",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Ձեր վերջին թեմաները, միացած չաթերը, ուղիղ հաղորդագրությունները",

    // Title shown on user profile pages.
    AbtUsr: "Օգտատիրոջ մասին",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Հետ օգտատիրոջ պրոֆիլից",
    BackFromAdm: "Հետ ադմինիստրատորի տարածքից",

    // Title shown on full text search page.
    SearchPg: "Որոնման էջ",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Ավելացնել ...",
    RecentlyViewed: "Վերջին դիտված թեմաները",
    JoinedChats: "Միացած չաթեր",
    ChatChannels: "Չաթի ալիքներ",
    CreateChat: "Ստեղծել չաթի ալիք",
    DirectMsgs: "Ուղիղ հաղորդագրություններ",
    NoChats: "Չկան",    // meaning: "No chat messages"
    NoDirMsgs: "Չկան",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Գործողություններ թեմայի հետ",
    ViewPeopleHere: "Դիտել մարդկանց այստեղ",
    ViewAddRemoveMembers: "Դիտել / ավելացնել / հեռացնել անդամներին",
    ViewChatMembers: "Դիտել չաթի անդամներին",
    EditChat: "Խմբագրել չաթի նկարագրությունը",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Դուրս գալ այս չաթից",
    LeaveThisCommunity: "Դուրս գալ այս համայնքից",
    JoinThisCommunity: "Միանալ այս համայնքին",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Վերջին մեկնաբանությունները այս թեմայում:",
    NoComments: "Մեկնաբանություններ չկան:",

    YourBookmarks: "Ձեր էջանշանները:",

    UsersOnline: "Առցանց օգտատերեր:",
    UsersOnlineForum: "Առցանց օգտատերեր այս ֆորումում:",
    UsersInThisChat: "Օգտատերեր այս չաթում:",
    UsersInThisTopic: "Օգտատերեր այս թեմայում:",

    GettingStartedGuide: "Ադմինի ուղեցույց",
    AdminGuide: "Ադմինի ուղեցույց",          // ... but what? It's here already, just reuse this transl field
    Guide: "Ուղեցույց",

    // How to hide the sidebar.
    CloseShortcutS: "Փակել (ստեղնաշարի դյուրանցում՝ S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Ավելացնել ավելի շատ մարդկանց",

    // Shown next to one's own username, in a list of users.
    thatsYou: "դա դուք եք",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Միայն դուք, կարծես թե",
    YouAnd: "Դուք և ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " հոգի" : " հոգի";
      const have = numStrangers === 1 ? ", ով" : ", ովքեր";
      return numStrangers + people + have + " մուտք չեն գործել";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.


    RepliesToTheLeft: "Ձախ կողմում գտնվող պատասխանները կարող են դասավորված լինել ըստ ",
    bestFirst: "լավագույնների:",
    ButBelow: "Բայց ստորև ",
    insteadBy: " նույն պատասխանները փոխարենը դասավորված են ըստ ",
    newestFirst: "նորագույնների:",

    SoIfLeave: "Այսպիսով, եթե հեռանաք և հետո վերադառնաք այստեղ, ստորև կգտնեք ",
    allNewReplies: "բոլոր նոր պատասխանները:",
    Click: "Սեղմեք",
    aReplyToReadIt: " ստորև բերված պատասխանի վրա՝ այն կարդալու համար, քանի որ ստորև ցուցադրվում է միայն մի հատված:",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Սեղմեք կարգավիճակը փոխելու համար",
    ClickToViewAnswer: "Սեղմեք պատասխանը դիտելու համար",
    ViewAnswer: "Դիտել պատասխանը",
    ChangeStatusC: "Փոխել կարգավիճակը՝",
    ChangeCatC: "Փոխել կատեգորիան՝",
    ChangeTopicTypeC: "Փոխել թեմայի տեսակը՝",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "հարց",
    hasAccptAns: "ունի ընդունված պատասխան",
    aProblem: "խնդիր",
    planToFix: "պլանավորում ենք շտկել",
    anIdea: "գաղափար",
    planToDo: "պլանավորում ենք անել",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Այս ձևը ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "փակվել է. դուք այլևս չեք կարող լրացնել և տեղադրել այն:",

    ThisTopicClosed_1: "Այս թեման ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Դուք դեռ կարող եք մեկնաբանություններ տեղադրել:",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Այս էջը ջնջվել է",
    CatDeldPageToo: "Կատեգորիան ջնջվել է, ուստի այս էջը նույնպես ջնջվել է",

    ThreadDeld: "Թեման ջնջված է",
    CmntDeld: "Մեկնաբանությունը ջնջված է",
    PostDeld: "Գրառումը ջնջված է",
    DiscDeld: "Քննարկումը ջնջված է",
    PageDeld: "Էջը ջնջված է",
    PagePendAppr: "Էջը սպասում է հաստատման",
    TitlePendAppr: "Վերնագիրը սպասում է հաստատման",
    TextPendingApproval: "Տեքստը սպասում է հաստատման",

    TooltipQuestClosedNoAnsw: "Այս հարցը փակվել է առանց որևէ ընդունված պատասխանի:",
    TooltipTopicClosed: "Այս թեման փակ է:",

    TooltipQuestSolved: "Սա լուծված հարց է",
    TooltipQuestUnsolved: "Սա չլուծված հարց է",

    StatusDone: "Կատարված է",
    TooltipProblFixed: "Սա շտկվել է",
    TooltipDone: "Սա արվել է",

    StatusStarted: "Սկսված է",
    TooltipFixing: "Մենք սկսել ենք շտկել սա",
    TooltipImplementing: "Մենք սկսել ենք անել սա",

    StatusPlanned: "Պլանավորված է",
    TooltipProblPlanned: "Մենք պլանավորում ենք շտկել սա",
    TooltipIdeaPlanned: "Մենք պլանավորում ենք անել սա",   // or "to implement this"?

    StatusNew: "Նոր",
    StatusNewDtl: "Նոր թեմա, քննարկման փուլում",
    TooltipUnsProbl: "Սա չլուծված խնդիր է",
    TooltipIdea: "Սա գաղափար է",

    TooltipPersMsg: "Անձնական հաղորդագրություն",
    TooltipChat: "# նշանակում է չաթի ալիք",
    TooltipPrivChat: "Սա անձնական չաթի ալիք է",

    TooltipPinnedGlob: "\nԱմրացված է գլոբալ մակարդակով:",
    TooltipPinnedCat: "\nԱմրացված է այս կատեգորիայում:",

    SolvedClickView_1: "Լուծված է գրառման մեջ #",
    SolvedClickView_2: ", սեղմեք դիտելու համար",

    PostHiddenClickShow: "Գրառումը թաքցված է. սեղմեք ցուցադրելու համար",
    ClickSeeMoreRepls: "Ցույց տալ ավելի շատ պատասխաններ",
    ClickSeeMoreComments: "Ցույց տալ ավելի շատ մեկնաբանություններ",
    ClickSeeThisComment: "Սեղմեք այս մեկնաբանությունը ցույց տալու համար",
    clickToShow: "սեղմեք ցուցադրելու համար",

    ManyDisagree: "Շատերը համաձայն չեն սրա հետ:",
    SomeDisagree: "Ոմանք համաձայն չեն սրա հետ:",

    PendAppr: "Սպասում է հաստատման",
    CmtPendAppr: "Մեկնաբանությունը սպասում է հաստատման, տեղադրվել է ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Ձեր" : "Ստորև բերված") + " մեկնաբանությունը սպասում է հաստատման:",

    _and: " և",

    repliesTo: "պասախաններ՝",
    InReplyTo: "Ի պատասխան՝",
    YourReplyTo: "Ձեր պատասխանը՝ ",
    YourChatMsg: "Ձեր չաթի հաղորդագրությունը: ",
    YourDraft: "Ձեր սևագիրը",
    YourEdits: "Ձեր խմբագրումները: ",
    YourProgrNoteC: "Ձեր առաջընթացի նշումը:",
    aProgrNote: "առաջընթացի նշում: ",

    ReplyingToC: "Պատասխանել՝",
    ScrollToPrevw_1: "Անցնել ",
    ScrollToPrevw_2: "նախադիտմանը",

    UnfinEdits: "Անավարտ խմբագրումներ",
    ResumeEdting: "Շարունակել խմբագրումը",
    DelDraft: "Ջնջել սևագիրը",

    ClickViewEdits: "Սեղմեք հին խմբագրումները դիտելու համար",

    By: "Հեղինակ՝ ", // ... someones name

    // Discussion ...
    aboutThisIdea: "այն մասին, թե ինչպես և արդյոք պետք է իրականացնել այս գաղափարը",
    aboutThisProbl: "այն մասին, թե ինչպես և արդյոք պետք է շտկել սա",

    AddProgrNote: "Ավելացնել առաջընթացի նշում",
    // Progress ...
    withThisIdea: "այս գաղափարն իրականացնելու վերաբերյալ",
    withThisProbl: "այս խնդրի հետ կապված",
    withThis: "սրա հետ կապված",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Ծանուցումներ այս թեմայի մասին՝",

    // If is a direct message topic, members listed below this text.
    Msg: "Հաղորդագրություն",

    SmrzRepls: "Ամփոփել պատասխանները",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Առկա են ${numReplies} պատասխաններ: Ընթերցման մոտավոր ժամանակը՝ ${minutes} րոպե`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Կատարված է: Ամփոփվել է ${numSummarized} պատասխան, նախկինում ցուցադրված ${numShownBefore} պատասխաններից:`,
  },


  // Post actions

  pa: {
    CloseTopic: "Փակել թեման",
    CloseOwnQuestionTooltip: "Փակեք այս հարցը, եթե այլևս պատասխանի կարիք չունեք:",
    CloseOthersQuestionTooltip: "Փակեք այս հարցը, եթե այն պատասխանի կարիք չունի, օրինակ՝ եթե " +
        "այն թեմայից դուրս է կամ արդեն պատասխանվել է մեկ այլ թեմայում:",
    CloseToDoTooltip: "Փակեք այս առաջադրանքը, եթե այն կարիք չկա կատարել կամ շտկել:",
    CloseTopicTooltip: "Փակեք այս թեման, եթե այն հետագա քննարկման կարիք չունի:",

    AcceptBtnExpl: "Ընդունել սա որպես հարցի կամ խնդրի պատասխան",
    SolutionQ: "Լուծու՞մ:",
    ClickUnaccept: "Սեղմեք այս պատասխանն այլևս ընդունված չհամարելու համար",
    PostAccepted: "Այս գրառումն ընդունվել է որպես պատասխան",

    NumLikes: (num: number) => num === 1 ? "1 Հավանում" : num + " Հավանում",
    NumDisagree: (num: number) => num + " Համաձայն չեմ",
    NumBury: (num: number) => num === 1 ? "1 Թաքցնել" : num + " Թաքցնել",
    NumUnwanted: (num: number) => num === 1 ? "1 Անցանկալի" : num + " Անցանկալի",

    MoreVotes: "Ավելի շատ ձայներ...",
    LikeThis: "Հավանել",
    LinkToPost: "Հղում այս գրառմանը",
    Report: "Բողոքել",
    ReportThisPost: "Բողոքել այս գրառման դեմ",
    Admin: "Ադմին",
    DiscIx: "Քննարկումների ցանկ",

    Disagree: "Համաձայն չեմ",
    DisagreeExpl: "Սեղմեք այստեղ, եթե համաձայն չեք այս գրառման հետ, կամ ուրիշներին փաստացի սխալների մասին զգուշացնելու համար:",
    Bury: "Թաքցնել",
    BuryExpl: "Սեղմեք այլ գրառումներն այս գրառումից առաջ դասավորելու համար: Միայն ֆորումի անձնակազմը կարող է տեսնել ձեր ձայնը:",
    Unwanted: "Անցանկալի",
    UnwantedExpl: "Եթե դուք չեք ցանկանում, որ այս գրառումը լինի այս կայքում: Սա կնվազեցնի իմ վստահությունը " +
            "գրառման հեղինակի նկատմամբ: Միայն ֆորումի անձնակազմը կարող է տեսնել ձեր ձայնը:",

    AddTags: "Ավելացնել/հեռացնել պիտակներ",
    UnWikify: "Դադարեցնել Վիքի լինելը",
    Wikify: "Դարձնել Վիքի",
    PinDeleteEtc: "Ամրացնել / Ջնջել / Կատեգորիա ...",
  },


  // Share dialog

  sd: {
    Copied: "Պատճենված է:",
    CtrlCToCopy: "Սեղմեք CTRL+C պատճենելու համար:",
    ClickToCopy: "Սեղմեք հղումը պատճենելու համար:",
  },


  // Chat

  c: {
    About_1: "Սա ",
    About_2: " չաթի ալիքն է, ստեղծված ",
    ScrollUpViewComments: "Ոլորեք վերև՝ հին մեկնաբանությունները դիտելու համար",
    Purpose: "Նպատակը՝",
    MessageDeleted: "(Հաղորդագրությունը ջնջված է)",
    JoinThisChat: "Միանալ այս չաթին",
    PostMessage: "Տեղադրել հաղորդագրություն",
    AdvancedEditor: "Ընդլայնված խմբագրիչ",
    TypeTitle: "Մուտքագրեք վերնագիր. ինչի՞ մասին է այս չաթը մի քանի բառով:",
    TypePurpose: "Մուտքագրեք նպատակը. կարող է լինել ավելի երկար, քան վերնագիրը, ավելի նկարագրական:",
    TypeHere: "Գրեք այստեղ: Դուք կարող եք օգտագործել Markdown և HTML:",
  },


  // My Menu

  mm: {
    NeedsReview: "Կարիք ունի վերանայման ",
    AdminHelp: "Ադմինի օգնություն ",
    StaffHelp: "Անձնակազմի օգնություն ",
    DraftsEtc: "Սևագրեր, էջանշաններ, առաջադրանքներ",
    MoreNotfs: "Դիտել բոլոր ծանուցումները",
    DismNotfs: "Նշել բոլորը որպես կարդացված",
    ViewProfile: "Դիտել ձեր պրոֆիլը",
    ViewGroups: "Դիտել խմբերը",
    LogOut: "Դուրս գալ",
    UnhideHelp: "Ցուցադրել թաքցված օգնության հաղորդագրությունները",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Ոլորել դեպի՝",
    Scroll: "Ոլորել",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "H",
    Back_2: "et",
    BackExpl: "Ոլորել հետ դեպի ձեր նախորդ դիրքը այս էջում",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Էջի սկիզբ",
    PgTopHelp: "Գնալ էջի սկիզբ: Ստեղնաշարի դյուրանցում՝ 1",
    Repl: "Պատասխաններ",
    ReplHelp: "Գնալ Պատասխանների բաժին: Դյուրանցում՝ 2",
    Progr: "Առաջընթաց",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Գնալ Առաջընթացի բաժին: Դյուրանցում՝ 3",
    PgBtm: "Էջի վերջ",
    Btm: "Վերջ",
    BtmHelp: "Գնալ էջի վերջ: Դյուրանցում՝ 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", և ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " հետ ոլորելու համար",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Ընտրել օգտատերերին",
    AddUsers: "Ավելացնել օգտատերեր",
  },


  // About user dialog

  aud: {
    IsMod: "Մոդերատոր է:",
    IsAdm: "Ադմինիստրատոր է:",
    IsDeld: "Ապաակտիվացված է կամ ջնջված:",
    ThisIsGuest: "Սա հյուր օգտատեր է, իրականում կարող է լինել ցանկացած ոք:",
    ViewInAdm: "Դիտել ադմինիստրատորի տարածքում",
    ViewProfl: "Դիտել պրոֆիլը",
    ViewComments: "Դիտել այլ մեկնաբանություններ",
    RmFromTpc: "Հեռացնել թեմայից",
    EmAdrUnkn: "Էլփոստի հասցեն անհայտ է. այս հյուրը չի ծանուցվի պատասխանների մասին:",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Նախապատվություններ",
    Invites: "Հրավերներ",
    DraftsEtc: "Սևագրեր և այլն",
    About: "Մասին",
    Privacy: "Գաղտնիություն",
    Security: "Անվտանգություն",
    Account: "Հաշիվ",
    Interface: "Ինտերֆեյս",

    // ----- Overview stats

    JoinedC: "Միացել է՝ ",
    PostsMadeC: "Կատարված գրառումներ՝ ",
    LastPostC: "Վերջին գրառումը՝ ",
    LastSeenC: "Վերջին անգամ տեսել են՝ ",
    TrustLevelC: "Վստահության մակարդակ՝ ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Վերբեռնել լուսանկար",
    ChangePhoto: "Փոխել լուսանկարը",
    ImgTooSmall: "Պատկերը չափազանց փոքր է. պետք է լինի առնվազն 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Միայն անձնակազմը և վստահելի հիմնական անդամները կարող են տեսնել սա:",
    OnlyMbrsCanSee: "Միայն այն մարդիկ, ովքեր որոշ ժամանակ ակտիվ անդամ են եղել, կարող են տեսնել սա:",
    Nothing: "Ցուցադրելու ոչինչ չկա",
    Posts: "Գրառումներ",
    NoPosts: "Գրառումներ չկան:",
    Topics: "Թեմաներ",
    NoTopics: "Թեմաներ չկան:",

    // ----- User status

    UserBanned: "Այս օգտատերը արգելափակված է",
    UserSuspended: (dateUtc: string) => `Այս օգտատերը կասեցված է մինչև ${dateUtc} UTC`,
    ReasonC: "Պատճառը՝ ",

    DeactOrDeld: "Ապաակտիվացված է կամ ջնջված:",
    isGroup: " (խումբ)",
    isGuest: " — հյուր օգտատեր, կարող է լինել ցանկացած ոք",
    isMod: " – մոդերատոր",
    isAdmin: " – ադմինիստրատոր",
    you: "(դուք)",

    // ----- Notifications page

    NoNotfs: "Ծանուցումներ չկան",
    NotfsToYouC: "Ծանուցումներ ձեզ՝",
    NotfsToOtherC: (name: string) => `Ծանուցումներ ${name}-ին՝`,
    DefNotfsSiteWide: "Կանխադրված ծանուցումներ ամբողջ կայքի համար",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "համար",

    // ----- Drafts Etc page

    NoDrafts: "Սևագրեր չկան",
    YourDraftsC: "Ձեր սևագրերը՝",
    DraftsByC: (name: string) => `${name}-ի սևագրերը՝`,

    // ----- Invites page

    InvitesIntro: "Այստեղ դուք կարող եք հրավիրել մարդկանց միանալ այս կայքին: ",
    InvitesListedBelow: "Ձեր կողմից արդեն ուղարկված հրավերները նշված են ստորև:",
    NoInvites: "Դուք դեռ ոչ ոքի չեք հրավիրել:",

    InvitedEmail: "Հրավիրված էլփոստ",
    WhoAccepted: "Անդամ, ով ընդունել է",
    InvAccepted: "Հրավերն ընդունված է",
    InvSent: "Հրավերն ուղարկված է",
    JoinedAlready: "Արդեն միացել է",

    SendAnInv: "Հրավիրել մարդկանց", // was: "Send an Invite",
    SendInv: "Ուղարկել հրավերներ",
    SendInvExpl:
        "Մենք ձեր ընկերներին կարճ էլփոստ կուղարկենք: Նրանք կսեղմեն հղմանը " +
        "անմիջապես միանալու համար, մուտք գործել չի պահանջվում: " +
        "Նրանք կդառնան սովորական անդամներ, ոչ թե մոդերատորներ կամ ադմինիստրատորներ:",
    //EnterEmail: "Enter email(s)",
    InvDone: "Կատարված է: Ես նրանց էլփոստ կուղարկեմ:",
    NoOneToInv: "Ոչ ոք չկա հրավիրելու:",
    InvNotfLater: "Ես ձեզ ավելի ուշ կտեղեկացնեմ, երբ հրավիրեմ նրանց:",
    AlreadyInvSendAgainQ: "Սրանք արդեն հրավիրվել են. գուցե ցանկանում եք նորից հրավիրե՞լ:",
    InvErr_1: "Սրանք հանգեցրել են ",
    InvErr_2: "սխալների",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Սրանք արդեն միացել են, ուստի ես նրանց չհրավիրեցի՝",
    ResendInvsQ: "Կրկին ուղարկե՞լ հրավերներ այս մարդկանց: Նրանք արդեն հրավիրվել են:",
    InvAgain: "Հրավիրել կրկին",

    // ----- Preferences, About

    AboutYou: "Ձեր մասին",
    WebLink: "Ձեր ցանկացած կայքը կամ էջը:",

    NotShownCannotChange: "Հրապարակայնորեն չի ցուցադրվում: Հնարավոր չէ փոխել:",

    // The full name or alias:
    NameOpt: "Անուն (ըստ ցանկության)",

    NotShown: "Հրապարակայնորեն չի ցուցադրվում:",

    // The username:
    MayChangeFewTimes: "Դուք կարող եք փոխել այն միայն մի քանի անգամ:",
    notSpecified: "(նշված չէ)",
    ChangeUsername_1: "Դուք կարող եք փոխել ձեր օգտանունը միայն մի քանի անգամ:",
    ChangeUsername_2: "Այն շատ հաճախ փոխելը կարող է շփոթեցնել ուրիշներին. " +
        "նրանք չեն իմանա, թե ինչպես նշել (@mention) ձեզ:",

    NotfAboutAll: "Ծանուցվել յուրաքանչյուր նոր գրառման մասին (եթե չանջատեք թեման կամ կատեգորիան)",
    NotfAboutNewTopics: "Ծանուցվել նոր թեմաների մասին (եթե չանջատեք կատեգորիան)",

    ActivitySummaryEmails: "Գործունեության ամփոփման էլփոստեր",

    EmailSummariesToGroup:
        "Երբ այս խմբի անդամները չեն այցելում այստեղ, ապա, ըստ կանխադրման, ուղարկել նրանց էլփոստ " +
        "հանրաճանաչ թեմաների և այլ բաների ամփոփագրեր.",
    EmailSummariesToMe:
        "Երբ ես չեմ այցելում այստեղ, ուղարկել ինձ " +
        "հանրաճանաչ թեմաների և այլ բաների ամփոփագրեր:",

    AlsoIfTheyVisit: "Էլփոստ ուղարկել նրանց նաև այն դեպքում, եթե նրանք կանոնավոր կերպով այցելում են այստեղ:",
    AlsoIfIVisit: "Էլփոստ ուղարկել ինձ նաև այն դեպքում, եթե ես կանոնավոր կերպով այցելում եմ այստեղ:",

    HowOftenWeSend: "Որքա՞ն հաճախ պետք է ուղարկենք այս էլփոստերը:",
    HowOftenYouWant: "Որքա՞ն հաճախ եք ցանկանում ստանալ այս էլփոստերը:",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Թաքցնե՞լ ձեր վերջին գործունեությունը անծանոթների և նոր անդամների համար:",
    HideActivityStrangers_2: "(Բայց ոչ նրանց համար, ովքեր որոշ ժամանակ ակտիվ անդամ են եղել:)",
    HideActivityAll_1: "Թաքցնե՞լ ձեր վերջին գործունեությունը բոլորի համար:",
    HideActivityAll_2: "(Բացառությամբ անձնակազմի և վստահելի հիմնական անդամների:)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Էլփոստի հասցեներ",
    PrimaryDot: "Հիմնական: ",
    VerifiedDot: "Վավերացված: ",
    NotVerifiedDot: "Վավերացված չէ: ",
    ForLoginWithDot: (provider: string) => `${provider}-ով մուտք գործելու համար: `,
    MakePrimary: "Դարձնել հիմնական",
    AddEmail: "Ավելացնել էլփոստի հասցե",
    TypeNewEmailC: "Մուտքագրեք նոր էլփոստի հասցե՝",
    MaxEmailsInfo: (numMax: number) => `(Դուք չեք կարող ավելացնել ավելի քան ${numMax} հասցե:)`,
    EmailAdded_1: "Ավելացված է: Մենք ձեզ վավերացման էլփոստ ենք ուղարկել — ",
    EmailAdded_2: "ստուգեք ձեր էլփոստի հասցեն:",
    SendVerifEmail: "Ուղարկել վավերացման էլփոստ",

    EmailStatusExpl:
        "('Հիմնական' նշանակում է, որ դուք կարող եք մուտք գործել այս հասցեով, և մենք ծանուցումներ ենք ուղարկում դրան: " +
        "'Վավերացված' նշանակում է, որ դուք սեղմել եք վավերացման հղմանը էլփոստում:)",

    // Password:
    ChangePwdQ: "Փոխե՞լ գաղտնաբառը:",
    CreatePwdQ: "Ստեղծե՞լ գաղտնաբառ:",
    WillGetPwdRstEml: "Դուք կստանաք գաղտնաբառի վերակայման էլփոստ:",
    // This is the "None" in:  "Password: None"
    PwdNone: "Չկա",

    // Logins:
    LoginMethods: "Մուտքի մեթոդներ",
    commaAs: ", որպես՝ ",

    // One's data:
    YourContent: "Ձեր բովանդակությունը",
    DownloadPosts: "Ներբեռնել գրառումները",
    DownloadPostsHelp: "Ստեղծում է JSON ֆայլ ձեր կողմից տեղադրված թեմաների և մեկնաբանությունների պատճենով:",
    DownloadPersData: "Ներբեռնել անձնական տվյալները",
    DownloadPersDataHelp: "Ստեղծում է JSON ֆայլ ձեր անձնական տվյալների պատճենով, օրինակ՝ ձեր անունը " +
        "(եթե նշել եք) և էլփոստի հասցեն:",


    // Delete account:
    DangerZone: "Վտանգավոր գոտի",
    DeleteAccount: "Ջնջել հաշիվը",
    DeleteYourAccountQ:
        "Ջնջե՞լ ձեր հաշիվը: Մենք կհեռացնենք ձեր անունը, կմոռանանք ձեր էլփոստի հասցեն, գաղտնաբառը և " +
        "ցանկացած առցանց ինքնություն (օրինակ՝ Facebook կամ Twitter մուտքը): " +
        "Դուք այլևս չեք կարողանա մուտք գործել: Սա հնարավոր չէ չեղարկել:",
    DeleteUserQ:
        "Ջնջե՞լ այս օգտատիրոջը: Մենք կհեռացնենք անունը, կմոռանանք էլփոստի հասցեն, գաղտնաբառը և " +
        "առցանց ինքնությունները (օրինակ՝ Facebook կամ Twitter մուտքը): " +
        "Օգտատերը այլևս չի կարողանա մուտք գործել: Սա հնարավոր չէ չեղարկել:",
    YesDelete: "Այո, ջնջել",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Խմբի անդամներ",
    NoMembers: "Անդամներ չկան:",
    MayNotListMembers: "Անդամների ցուցակը կարող է չցուցադրվել:",
    AddMembers: "Ավելացնել անդամներ",
    BuiltInCannotModify: "Սա ներկառուցված խումբ է. այն հնարավոր չէ փոփոխել:",
    NumMembers: (num: number) => `${num} անդամ`,
    YouAreMember: "Դուք անդամ եք:",
    CustomGroupsC: "Հատուկ խմբեր՝",
    BuiltInGroupsC: "Ներկառուցված խմբեր՝",
    DeleteGroup: "Ջնջել այս խումբը",
  },


  // Create user dialog

  cud: {
    CreateUser: "Ստեղծել օգտատեր",
    CreateAccount: "Ստեղծել հաշիվ",
    EmailC: "Էլփոստ՝",  // REMOVE move to t.EmailC instead
    keptPriv: "կմնա գաղտնի",
    forNotfsKeptPriv: "պատասխանների ծանուցումների համար, կմնա գաղտնի",
    EmailVerifBy_1: "Ձեր էլփոստը վավերացվել է ",
    EmailVerifBy_2: "-ի կողմից:",
    UsernameC: "Օգտանուն՝",
    FullNameC: "Լրիվ անուն՝",
    optName: "ըստ ցանկության",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Հաշիվը ստեղծված է: Դուք մուտք եք գործել:",  // COULD say if verif email sent too?
    AlmostDone:
        "Գրեթե պատրաստ է: Դուք պարզապես պետք է հաստատեք ձեր էլփոստի հասցեն: Մենք " +
        "ձեզ էլփոստ ենք ուղարկել: Խնդրում ենք սեղմել էլփոստի հղմանը՝ ձեր " +
        "հաշիվն ակտիվացնելու համար: Դուք կարող եք փակել այս էջը:",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Պայմաններ և Գաղտնիություն",

    Accept_1: "Ընդունու՞մ եք մեր ",
    TermsOfService: "Ծառայության պայմանները",
    TermsOfUse: "Օգտագործման պայմանները",
    Accept_2: " և ",
    PrivPol: "Գաղտնիության քաղաքականությունը",
    Accept_3_User: "?",
    Accept_3_Owner: " կայքի տերերի համար:",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Այո, ես ընդունում եմ",
  },


  // Password input

  pwd: {
    PasswordC: "Գաղտնաբառ՝",
    StrengthC: "Ամրություն՝ ",
    FairlyWeak: "Բավականին թույլ:",
    toShort: "չափազանց կարճ",
    TooShort: (minLength: number) => `Չափազանց կարճ է: Պետք է լինի առնվազն ${minLength} նիշ`,
    PlzInclDigit: "Խնդրում ենք ներառել թվանշան կամ հատուկ նշան",
    TooWeak123abc: "Չափազանց թույլ է: Մի օգտագործեք այնպիսի գաղտնաբառեր, ինչպիսիք են '12345' կամ 'abcde':",
    AvoidInclC: "Խուսափեք գաղտնաբառի մեջ ձեր անվան կամ էլփոստի (մասերի) ներառումից՝",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Էջը չի գտնվել, կամ մուտքն արգելված է:",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Դուք հանդես եք գալիս որպես մեկ այլ անձ, ով կարող է մուտք չունենալ այս " +
        "կայքի բոլոր մասերին:",

    IfYouThinkExistsThen: "Եթե կարծում եք, որ էջը գոյություն ունի, մուտք գործեք որպես մեկը, ով ունի մուտքի իրավունք: ",
    LoggedInAlready: "(Դուք արդեն մուտք եք գործել, բայց միգուցե սա սխալ հաշիվ է:) ",
    ElseGoToHome_1: "Հակառակ դեպքում կարող եք ",
    ElseGoToHome_2: "գնալ գլխավոր էջ:",

    CreateAcconut: "Ստեղծել հաշիվ",
    ContinueWithDots: "Շարունակել ...-ով",
    SignUp: "Միանալ",
    LogIn: "Մուտք գործել",
    LogInWithPwd: "Մուտք գործել գաղտնաբառով",
    CreateAdmAcct: "Ստեղծել ադմինիստրատորի հաշիվ՝",
    AuthRequired: "Այս կայք մուտք գործելու համար պահանջվում է նույնականացում",
    LogInToLike: "Մուտք գործեք այս գրառումը հավանելու համար",
    LogInToSubmit: "Մուտք գործեք և ուղարկեք",
    LogInToComment: "Մուտք գործեք մեկնաբանություն գրելու համար",
    LogInToCreateTopic: "Մուտք գործեք թեմա ստեղծելու համար",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "Կամ ",         // "Or "
    OrLogIn_2: "Մուտք գործեք",      // "Log in" (this is a button)
    OrLogIn_3: " փոխարենը",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Կամ ",
    SignUpInstead_2: "Ստեղծեք հաշիվ", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", կամ պարզապես ",
    OrTypeName_2: "գրեք ձեր անունը",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Կամ ստեղծեք հաշիվ՝",
    OrTypeName: "Կամ գրեք ձեր անունը՝",
    OrLogIn: "Կամ մուտք գործեք՝",
    YourNameQ: "Ձեր անունը՞",

    BadCreds: "Սխալ օգտանուն կամ գաղտնաբառ",

    UsernameOrEmailC: "Օգտանուն կամ էլփոստ՝",
    PasswordC: "Գաղտնաբառ՝",
    ForgotPwd: "Մոռացե՞լ եք ձեր գաղտնաբառը:",

    // NoPwd: "You have not yet chosen a password.",
    NoPwd: "Դուք դեռ չեք ընտրել գաղտնաբառ:",
    CreatePwd: "Ստեղծել գաղտնաբառ",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Խնդրում ենք ասել մեզ, թե ինչն է ձեզ անհանգստացնում:",
    ThanksHaveReported: "Շնորհակալություն: Դուք հայտնել եք այդ մասին: Ֆորումի անձնակազմը կվերանայի այն:",
    ReportComment: "Բողոքել մեկնաբանության դեմ",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Այս գրառումը պարունակում է անձնական տվյալներ, օրինակ՝ ինչ-որ մեկի իրական անունը:",
    OptOffensive: "Այս գրառումը պարունակում է վիրավորական կամ չարամիտ բովանդակություն:",
    OptSpam: "Այս գրառումը անցանկալի գովազդ է:",
    OptOther: "Այլ պատճառով տեղեկացնել անձնակազմին այս գրառման մասին:",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Դուք կարող եք նորից ցուցադրել օգնության հաղորդագրությունները, եթե մուտք եք գործել, ",
    YouCanShowAgain_2: "սեղմելով ձեր անվան վրա և հետո «Ցուցադրել թաքցված օգնության հաղորդագրությունները»",
  },


  // Editor

  e: {
    SimilarTopicsC: "Նմանատիպ թեմաներ՝",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Ցավոք, այս պահին դուք կարող եք վերբեռնել միայն մեկ ֆայլ միաժամանակ",
    PleaseFinishPost: "Խնդրում ենք նախ ավարտել ձեր գրառումը գրելը",
    PleaseFinishChatMsg: "Խնդրում ենք նախ ավարտել ձեր չաթի հաղորդագրությունը գրելը",
    PleaseFinishMsg: "Խնդրում ենք նախ ավարտել ձեր հաղորդագրությունը գրելը",
    PleaseSaveEdits: "Խնդրում ենք նախ պահպանել ձեր ընթացիկ խմբագրումները",
    PleaseSaveOrCancel: "Խնդրում ենք նախ պահպանել կամ չեղարկել ձեր նոր թեման",
    CanContinueEditing: "Դուք կարող եք շարունակել խմբագրել ձեր տեքստը, եթե նորից բացեք խմբագրիչը:",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Խնդրում ենք չջնջել ամբողջ տեքստը: Ինչ-որ բան գրեք:",
    PleaseWriteSth: "Խնդրում ենք ինչ-որ բան գրել:",
    PleaseWriteTitle: "Խնդրում ենք գրել թեմայի վերնագիր:",
    PleaseWriteMsgTitle: "Խնդրում ենք գրել հաղորդագրության վերնագիր:",
    PleaseWriteMsg: "Խնդրում ենք հաղորդագրություն գրել:",

    exBold: "թավ տեքստ",
    exEmph: "շեղ տեքստ",
    exPre: "նախաձևաչափված տեքստ",
    exQuoted: "մեջբերված տեքստ",
    ExHeading: "Վերնագիր",

    TitlePlaceholder: "Գրեք վերնագիր. ինչի՞ մասին է սա՝ մեկ կարճ նախադասությամբ:",

    EditPost_1: "Խմբագրել ",
    EditPost_2: "գրառումը ",

    TypeChatMsg: "Գրեք չաթի հաղորդագրություն՝",
    YourMsg: "Ձեր հաղորդագրությունը՝",
    CreateTopic: "Ստեղծել նոր թեմա",
    CreateCustomHtml: "Ստեղծել հատուկ HTML էջ (ավելացրեք ձեր սեփական <h1> վերնագիրը)",
    CreateInfoPage: "Ստեղծել տեղեկատվական էջ",
    CreateCode: "Ստեղծել աղբյուրի կոդի էջ",
    AskQuestion: "Տալ հարց",
    ReportProblem: "Հայտնել խնդրի մասին",
    SuggestIdea: "Առաջարկել գաղափար",
    NewChat: "Չաթի վերնագիր և նպատակ",
    NewPrivChat: "Անձնական չաթի վերնագիր և նպատակ",
    AppendComment: "Ավելացնել մեկնաբանություն էջի վերջում՝",

    ReplyTo: "Պատասխանել՝ ",
    ReplyTo_theOrigPost: "բնօրինակ գրառմանը",
    ReplyTo_post: "գրառմանը ",
    AddCommentC: "Ավելացնել մեկնաբանություն՝",

    PleaseSelectPosts: "Խնդրում ենք ընտրել մեկ կամ ավելի գրառումներ՝ պատասխանելու համար:",

    Save: "Պահպանել",
    edits: "խմբագրումներ",

    PostReply: "Տեղադրել պատասխանը",
    PostComment: "Տեղադրել մեկնաբանությունը",

    Post: "Տեղադրել",
    comment: "մեկնաբանություն",
    question: "հարց",

    PostMessage: "Տեղադրել հաղորդագրությունը",
    SimpleEditor: "Պարզ խմբագրիչ",

    Send: "Ուղարկել",
    message: "հաղորդագրություն",

    Create: "Ստեղծել",
    page: "էջ",
    chat: "չաթ",
    idea: "գաղափար",
    topic: "թեմա",

    Submit: "Ուղարկել",
    problem: "խնդիր",

    ViewOldEdits: "Դիտել հին խմբագրումները",

    UploadBtnTooltip: "Վերբեռնել ֆայլ կամ պատկեր",
    BoldBtnTooltip: "Տեքստը դարձնել թավ",
    EmBtnTooltip: "Շեղել",
    QuoteBtnTooltip: "Մեջբերել",
    PreBtnTooltip: "Նախաձևաչափված տեքստ",
    HeadingBtnTooltip: "Վերնագիր",

    TypeHerePlaceholder: "Գրեք այստեղ: Դուք կարող եք օգտագործել Markdown և HTML: Քաշեք և գցեք պատկերները տեղադրելու համար:",

    Maximize: "Առավելագույնի հասցնել",
    ToNormal: "Վերադառնալ նորմալի",
    TileHorizontally: "Դասավորել հորիզոնական",

    PreviewC: "Նախադիտում՝",
    TitleExcl: " (վերնագիրը բացառված է)",
    ShowEditorAgain: "Նորից ցուցադրել խմբագրիչը",
    Minimize: "Նվազեցնել",

    PreviewInfo: "Այստեղ դուք կարող եք նախադիտել, թե ինչպիսին կլինի ձեր գրառումը:",
    CannotType: "Դուք չեք կարող այստեղ գրել:",

    LoadingDraftDots: "Սևագրի բեռնում...",
    DraftUnchanged: "Անփոփոխ:",
    CannotSaveDraftC: "Հնարավոր չէ պահպանել սևագիրը՝",
    DraftSavedBrwsr: "Սևագիրը պահպանված է բրաուզերում:",
    DraftSaved: (nr: string | number) => `Սևագիր ${nr}-ը պահպանված է:`,
    DraftDeleted: (nr: string | number) => `Սևագիր ${nr}-ը ջնջված է:`,
    WillSaveDraft: (nr: string | number) => `Սևագիր ${nr}-ը կպահպանվի ...`,
    SavingDraft: (nr: string | number) => `Սևագիր ${nr}-ը պահպանվում է ...`,
    DeletingDraft: (nr: string | number) => `Սևագիր ${nr}-ը ջնջվում է ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Ընտրել կատեգորիան",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Ընտրել թեմայի տեսակը՝",
    DiscussionExpl: "Քննարկում ինչ-որ բանի մասին:",
    QuestionExpl: "Մեկ պատասխան կարող է նշվել որպես ընդունված պատասխան:",
    ProblExpl: "Եթե ինչ-որ բան կոտրված է կամ չի աշխատում: Կարող է նշվել որպես շտկված/լուծված:",
    IdeaExpl: "Առաջարկություն: Կարող է նշվել որպես կատարված/իրականացված:",
    ChatExpl: "Հնարավոր է անվերջ խոսակցություն:",
    PrivChatExpl: "Տեսանելի է միայն այն մարդկանց համար, ովքեր հրավիրվել են միանալ չաթին:",

    CustomHtml: "Հատուկ HTML էջ",
    InfoPage: "Տեղեկատվական էջ",
    Code: "Կոդ",
    EmbCmts: "Ներկառուցված մեկնաբանություններ",
    About: "Մասին",
    PrivChat: "Անձնական չաթ",
    Form: "Ձև",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Այլևս միանալու համայնքներ չկան:",
    SelCmty: "Ընտրել համայնքը ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Փնտրել օգնություն",
    TxtToFind: "Փնտրվող տեքստը",
  },


  // No internet

  ni: {
    NoInet: "Ինտերնետ կապ չկա",
    PlzRefr: "Թարմացրեք էջը՝ վերջին փոփոխությունները տեսնելու համար: (Կապն ընդհատվել էր)",
    RefrNow: "Թարմացնել հիմա",
  },


  PostDeleted: (postNr: number) => `Այդ գրառումը, համար ${postNr}, ջնջվել է:`,
  NoSuchPost: (postNr: number) => `Այս էջում չկա համար ${postNr} գրառում:`,
  NoPageHere: "Այս էջը ջնջվել է, կամ այն երբեք գոյություն չի ունեցել, կամ դուք չունեք մուտքի իրավունք:",
  GoBackToLastPage: "Վերադառնալ նախորդ էջին",

};


