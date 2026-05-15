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

var t_bn_BD: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "সক্রিয়",
  Activity: "কার্যক্রম",
  Add: "যোগ করুন",
  AddingDots: "যোগ করা হচ্ছে ...",
  AddComment: "মন্তব্য যোগ করুন",
  Admin: "অ্যাডমিন",
  AdvSearch: "উন্নত অনুসন্ধান",
  Anonym: "বেনামী",
  Away: "দূরে",
  Back: "ফিরে যান",
  BlogN: "ব্লগ",
  Bookmarks: "বুকমার্ক",
  Cancel: "বাতিল করুন",
  Categories: "বিভাগসমূহ",
  Category: "বিভাগ",
  ChangeV: "পরিবর্তন করুন",
  ClickToShow: "দেখাতে ক্লিক করুন",
  ChangeDots: "পরিবর্তন ...",
  ChatN: "চ্যাট",
  Chatting: "চ্যাটিং",
  CheckYourEmail: "আপনার ইমেল চেক করুন",
  Close: "বন্ধ করুন",
  closed: "বন্ধ",
  comments: "মন্তব্য",   // as in:  "123 comments"
  Continue: "চালিয়ে যান",
  Created: "তৈরি করা হয়েছে",
  Delete: "মুছে ফেলুন",
  Deleted: "মুছে ফেলা হয়েছে",
  DirectMessage: "সরাসরি বার্তা",
  Discussion: "আলোচনা",
  discussion: "আলোচনা",
  done: "সম্পন্ন",
  EditV: "সম্পাদনা করুন",
  Editing: "সম্পাদনা করা হচ্ছে",
  EmailC: "ইমেল: ",
  EmailAddress: "ইমেল ঠিকানা",
  EmailAddresses: "ইমেল ঠিকানাসমূহ",
  EmailSentD: "ইমেল পাঠানো হয়েছে।",
  Forum: "ফোরাম",
  GetNotifiedAbout: "বিজ্ঞপ্তি পান",
  GroupsC: "গ্রুপসমূহ:",
  Hide: "লুকান",
  Home: "হোম",
  Idea: "ধারণা",
  Join: "যোগ দিন",
  KbdShrtcsC: "কীবোর্ড শর্টকাট: ",
  Loading: "লোড হচ্ছে...",
  LoadMore: "আরও লোড করুন ...",
  LogIn: "লগ ইন করুন",
  LoggedInAs: "লগ ইন করেছেন ",
  LogOut: "লগ আউট করুন",
  Maybe: "হতে পারে",
  Manage: "পরিচালনা করুন",
  Members: "সদস্যবৃন্দ",
  MessageN: "বার্তা",
  MoreDots: "আরও...",
  Move: "সরান",
  Name: "নাম",
  NameC: "নাম:",
  NewTopic: "নতুন আলোচনা",
  NoCancel: "না, বাতিল করুন",
  Notifications: "বিজ্ঞপ্তি",
  NotImplemented: "(বাস্তবায়িত হয়নি)",
  NotYet: "এখনও নয়",
  NoTitle: "কোনো শিরোনাম নেই",
  NoTopics: "কোনো আলোচনা নেই।",
  Okay: "ঠিক আছে",
  OkayDots: "ঠিক আছে ...",
  Online: "অনলাইন",
  onePerLine: "লাইনে একটি করে",
  PreviewV: "প্রাকদর্শন",
  Problem: "সমস্যা",
  progressN: "অগ্রগতি",
  Question: "প্রশ্ন",
  Recent: "সাম্প্রতিক",
  Remove: "সরিয়ে ফেলুন",
  Reopen: "পুনরায় খুলুন",
  ReplyV: "উত্তর দিন",
  Replying: "উত্তর দেওয়া হচ্ছে",
  Replies: "উত্তর",
  replies: "উত্তর",
  Save: "সংরক্ষণ করুন",
  SavingDots: "সংরক্ষণ করা হচ্ছে ...",
  SavedDot: "সংরক্ষিত।",
  Search: "অনুসন্ধান করুন",
  SendMsg: "বার্তা পাঠান",
  ShowPreview: "প্রাকদর্শন দেখান",
  SignUp: "যোগ দিন",
  Solution: "সমাধান",
  started: "শুরু হয়েছে",
  Summary: "সারসংক্ষেপ",
  Submit: "জমা দিন",
  Tag: "ট্যাগ",
  Tags: "ট্যাগসমূহ",
  Tools: "সরঞ্জাম",
  Topics: "বিষয়সমূহ",
  TopicTitle: "আলোচনার শিরোনাম",
  TopicType: "আলোচনার ধরণ",
  UploadingDots: "আপলোড হচ্ছে...",
  Username: "ইউজারনেম",
  Users: "ব্যবহারকারী",
  Welcome: "স্বাগতম",
  Wiki: "উইকি",
  Yes: "হ্যাঁ",
  YesBye: "হ্যাঁ, বিদায়",
  YesDoThat: "হ্যাঁ, সেটি করুন",
  You: "আপনি",
  you: "আপনি",

  // Trust levels.
  Guest:  "অতিথি",
  NewMember: "নতুন সদস্য",
  BasicMember: "সাধারণ সদস্য",
  FullMember: "পূর্ণ সদস্য",
  TrustedMember: "বিশ্বস্ত সদস্য",
  RegularMember: "বিশ্বস্ত নিয়মিত",
  CoreMember: "মূল সদস্য",

  // Periods.
  PastDay: "গত একদিন",
  PastWeek: "গত এক সপ্তাহ",
  PastMonth: "গত এক মাস",
  PastQuarter: "গত তিন মাস",
  PastYear: "গত এক বছর",
  AllTime: "সব সময়",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "মাস",  // months
  daysLtr: "দিন",      // days
  hoursLtr: "ঘণ্টা",     // hours
  minsLtr: "মিনিট",      // minutes
  secsLtr: "সেকেন্ড",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "১ দিন আগে" : `${numDays} দিন আগে`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "১ ঘণ্টা আগে" : `${numHours} ঘণ্টা আগে`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "১ মিনিট আগে" : `${numMins} মিনিট আগে`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "১ সেকেন্ড আগে" : `${numSecs} সেকেন্ড আগে`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "ইমেল প্রয়োজন",
    NoSpcs: "অনুগ্রহ করে কোনো স্পেস দেবেন না",
    InvldAddr: "এটি সঠিক ইমেল ঠিকানা নয়",
    NoBadChrs: "অনুগ্রহ করে কোনো বিশেষ অক্ষর ব্যবহার করবেন না",

    // Full name input field:
    NotOnlSpcs: "শুধুমাত্র স্পেস নয়",
    NoAt: "@ ব্যবহার করবেন না",

    // Username input field:
    NoDash: "হাইফেন (-) ব্যবহার করবেন না",
    DontInclAt: "@ অন্তর্ভুক্ত করবেন না",
    StartEndLtrDgt: "অক্ষর বা সংখ্যা দিয়ে শুরু এবং শেষ করুন",
    OnlLtrNumEtc: "শুধুমাত্র অক্ষর (a-z, A-Z), সংখ্যা এবং _ (আন্ডারস্কোর)",
    // This shown just below the username input:
    UnUnqShrt_1: "আপনার ",
    UnUnqShrt_2: "@ইউজারনেম",
    UnUnqShrt_3: ", অনন্য এবং সংক্ষিপ্ত",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `কমপক্ষে ${minLength}টি অক্ষর হতে হবে`,
    TooLong: (maxLength: number) => `খুব দীর্ঘ। সর্বোচ্চ ${maxLength}টি অক্ষর হতে হবে`,
  },


  // Notification levels.

  nl: {
    EveryPost: "প্রতিটি পোস্ট",
    EveryPostInTopic: "আপনাকে এই আলোচনার সকল নতুন উত্তরের জন্য জানানো হবে।",
    EveryPostInCat: "আপনাকে এই বিভাগের সকল নতুন আলোচনা এবং উত্তরের জন্য জানানো হবে।",
    EveryPostInTopicsWithTag: "আপনাকে এই ট্যাগের নতুন আলোচনা এবং সেই আলোচনার সকল উত্তরের জন্য জানানো হবে।",
    EveryPostWholeSite: "আপনাকে যেকোনো জায়গার সকল নতুন আলোচনা এবং উত্তরের জন্য জানানো হবে।",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "নতুন আলোচনা",
    NewTopicsInCat: "আপনাকে এই বিভাগের নতুন আলোচনার জন্য জানানো হবে।",
    NewTopicsWithTag: "আপনাকে এই ট্যাগের নতুন আলোচনার জন্য জানানো হবে।",
    NewTopicsWholeSite: "আপনাকে যেকোনো জায়গার নতুন আলোচনার জন্য জানানো হবে।",

    Tracking: "ট্র্যাকিং",

    Normal: "সাধারণ",
    NormalDescr: "কেউ আপনার সাথে কথা বললে বা আপনার উত্তরের উত্তর দিলে আপনাকে জানানো হবে।",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "সীমিত",
    HushedDescr: "কেউ সরাসরি আপনার সাথে কথা বললে কেবল তখনই আপনাকে জানানো হবে।",

    Muted: "নীরব",
    MutedTopic: "কোনো বিজ্ঞপ্তি নেই।",
  },


  // Forum intro text

  fi: {
    Edit: "সম্পাদনা",
    Hide_1: "লুকান",
    Hide_2: ", ক্লিক করুন ",
    Hide_3: " পুনরায় খুলতে",
  },


  // Forum categories

  fcs: {
    All: "সকল", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "আলোচনার তালিকা",

    // Select category dropdown

    from: "থেকে",
    in: "বিভাগে",
    AllCats: "সকল বিভাগ",

    // Topic sort order

    Active: "প্রথমে সক্রিয়",
    ActiveDescr: "সম্প্রতি সক্রিয় আলোচনাগুলো প্রথমে দেখায়",

    New: "নতুন",
    NewDescr: "নতুন আলোচনাগুলো প্রথমে দেখায়",

    Top: "জনপ্রিয়",
    TopDescr: "জনপ্রিয় আলোচনাগুলো প্রথমে দেখায়",

    // Topic filter dropdown

    AllTopics: "সকল আলোচনা",

    ShowAllTopics: "সকল আলোচনা দেখান",
    ShowAllTopicsDescr: "তবে মুছে ফেলা আলোচনাগুলো নয়",

    WaitingTopics: "অপেক্ষমান আলোচনা",
    OnlyWaitingDescr_1: "শুধুমাত্র সেই আলোচনাগুলো দেখায় ",
    OnlyWaitingDescr_2: "যা অপেক্ষমান ",
    OnlyWaitingDescr_3: "সমাধানের জন্য বা বাস্তবায়িত হওয়ার জন্য",

    YourTopics: "আপনার আলোচনাগুলো",
    AssignedToYou: "আপনাকে অর্পিত",

    DeletedTopics: "মুছে ফেলা আলোচনা দেখান",
    ShowDeleted: "মুছে ফেলা আলোচনা দেখান",
    ShowDeletedDescr: "মুছে ফেলা আলোচনা সহ সকল আলোচনা দেখায়",

    // Rightmost buttons

    ViewCategories: "বিভাগগুলো দেখুন",
    EditCat: "বিভাগ সম্পাদনা করুন",
    CreateCat: "বিভাগ তৈরি করুন",
    CreateTopic: "নতুন আলোচনা শুরু করুন",
    PostIdea: "একটি ধারণা পোস্ট করুন",
    AskQuestion: "একটি প্রশ্ন জিজ্ঞাসা করুন",
    ReportProblem: "একটি সমস্যা রিপোর্ট করুন",
    CreateMindMap: "মাইন্ড ম্যাপ তৈরি করুন",
    CreatePage: "পেজ তৈরি করুন",

  },


  // Forum topic list

  ft: {
    ExplIcons: "আইকনগুলোর ব্যাখ্যা...",
    IconExplanation: "আইকনগুলোর ব্যাখ্যা:",
    ExplGenDisc: "একটি সাধারণ আলোচনা।",
    ExplQuestion: "একটি প্রশ্ন যার কোনো গৃহীত উত্তর নেই।",
    ExplAnswer: "একটি প্রশ্ন যার একটি গৃহীত উত্তর আছে।",
    ExplIdea: "একটি ধারণা / প্রস্তাব।",
    ExplProblem: "একটি সমস্যা।",
    ExplPlanned: "এমন কিছু যা আমরা করার বা সমাধান করার পরিকল্পনা করছি।",
    ExplDone: "এমন কিছু যা করা বা সমাধান করা হয়েছে।",
    ExplClosed: "আলোচনা বন্ধ।",
    ExplPinned: "আলোচনাটি সবসময় প্রথমে তালিকাভুক্ত থাকে (সম্ভবত কেবল তার নিজস্ব বিভাগে)।",

    PopularTopicsComma: "জনপ্রিয় আলোচনা, ",
    TopFirstAllTime: "সবসময় জনপ্রিয় আলোচনাগুলো প্রথমে দেখায়।",
    TopFirstPastDay: "গত একদিনে জনপ্রিয় হওয়া আলোচনাগুলো দেখায়।",

    CatHasBeenDeleted: "এই বিভাগটি মুছে ফেলা হয়েছে",

    TopicsActiveFirst: "আলোচনা, সম্প্রতি সক্রিয়গুলো প্রথমে",
    TopicsNewestFirst: "আলোচনা, নতুনগুলো প্রথমে",

    CreatedOn: "তৈরি করা হয়েছে ",
    LastReplyOn: "\nশেষ উত্তর দেওয়া হয়েছে ",
    EditedOn: "\nসম্পাদনা করা হয়েছে ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "আলোচনাটি শুরু করেছেন",
    frequentPoster: "নিয়মিত পোস্টকারী",
    mostRecentPoster: "সাম্প্রতিকতম পোস্টকারী",

    inC: "বিভাগে: ",

    TitleFixed: "এটি সমাধান করা হয়েছে",
    TitleDone: "এটি করা হয়েছে",
    TitleStarted: "আমরা এটি শুরু করেছি",
    TitleStartedFixing: "আমরা এটি সমাধান করতে শুরু করেছি",
    TitleUnsolved: "এটি একটি অমীমাংসিত সমস্যা",
    TitleIdea: "এটি একটি ধারণা",
    TitlePlanningFix: "আমরা এটি সমাধান করার পরিকল্পনা করছি",
    TitlePlanningDo: "আমরা এটি করার পরিকল্পনা করছি",
    TitleChat: "এটি একটি চ্যাট চ্যানেল",
    TitlePrivateChat: "এটি একটি ব্যক্তিগত চ্যাট চ্যানেল",
    TitlePrivateMessage: "একটি ব্যক্তিগত বার্তা",
    TitleInfoPage: "এটি একটি তথ্য পাতা",
    TitleDiscussion: "একটি আলোচনা",
    IsPinnedGlobally: "\nএটি পিন করা হয়েছে, তাই এটি প্রথমে তালিকাভুক্ত আছে।",
    IsPinnedInCat: "\nএটি এর বিভাগে পিন করা হয়েছে, তাই এর বিভাগে এটি প্রথমে তালিকাভুক্ত আছে।",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "সাম্প্রতিক আলোচনা (যা অপেক্ষমান)",
    RecentTopicsInclDel: "সাম্প্রতিক আলোচনা (মুছে ফেলা সহ)",
    RecentTopics: "সাম্প্রতিক আলোচনা",
    _replies: " টি উত্তর",
    _deleted: " (মুছে ফেলা)",
    _defCat: " (ডিফল্ট বিভাগ)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "সাম্প্রতিক পোস্ট",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " জন এই চ্যাটে অনলাইনে আছেন",    // example: "5 online in this chat"
    NumOnlForum: " জন এই ফোরামে অনলাইনে আছেন",

    // Open left-sidebar button title.
    WatchbBtn: "আপনার আলোচনাগুলো",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "আপনার সাম্প্রতিক আলোচনা, যুক্ত হওয়া চ্যাট, সরাসরি বার্তা",

    // Title shown on user profile pages.
    AbtUsr: "ব্যবহারকারী সম্পর্কে",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "ব্যবহারকারীর প্রোফাইল থেকে ফিরে যান",
    BackFromAdm: "অ্যাডমিন এলাকা থেকে ফিরে যান",

    // Title shown on full text search page.
    SearchPg: "অনুসন্ধান পাতা",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "যোগ করুন ...",
    RecentlyViewed: "সম্প্রতি দেখা আলোচনাগুলো",
    JoinedChats: "যুক্ত হওয়া চ্যাট",
    ChatChannels: "চ্যাট চ্যানেল",
    CreateChat: "চ্যাট চ্যানেল তৈরি করুন",
    DirectMsgs: "সরাসরি বার্তা",
    NoChats: "কোনোটি নেই",    // meaning: "No chat messages"
    NoDirMsgs: "কোনোটি নেই",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "আলোচনার কার্যক্রম",
    ViewPeopleHere: "এখানে থাকা ব্যক্তিদের দেখুন",
    ViewAddRemoveMembers: "সদস্য দেখুন / যোগ করুন / সরান",
    ViewChatMembers: "চ্যাটের সদস্যদের দেখুন",
    EditChat: "চ্যাটের বিবরণ সম্পাদনা করুন",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "এই চ্যাটটি ত্যাগ করুন",
    LeaveThisCommunity: "এই কমিউনিটি ত্যাগ করুন",
    JoinThisCommunity: "এই কমিউনিটিতে যোগ দিন",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "এই আলোচনার সাম্প্রতিক মন্তব্যগুলো:",
    NoComments: "কোনো মন্তব্য নেই।",

    YourBookmarks: "আপনার বুকমার্ক:",

    UsersOnline: "অনলাইন ব্যবহারকারী:",
    UsersOnlineForum: "এই ফোরামে অনলাইন ব্যবহারকারী:",
    UsersInThisChat: "এই চ্যাটে থাকা ব্যবহারকারী:",
    UsersInThisTopic: "এই আলোচনায় থাকা ব্যবহারকারী:",

    GettingStartedGuide: "অ্যাডমিন গাইড",
    AdminGuide: "অ্যাডমিন গাইড",          // ... but what? It's here already, just reuse this transl field
    Guide: "গাইড",

    // How to hide the sidebar.
    CloseShortcutS: "বন্ধ করুন (কীবোর্ড শর্টকাট: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "আরও মানুষ যোগ করুন",

    // Shown next to one's own username, in a list of users.
    thatsYou: "এটি আপনি",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "মনে হচ্ছে কেবল আপনিই আছেন",
    YouAnd: "আপনি এবং ",
    NumStrangers: (numStrangers: number) => {
      return numStrangers + " জন যারা লগ ইন করেননি";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

  
    RepliesToTheLeft: "বাম দিকের উত্তরগুলো সাজানো হতে পারে ",
    bestFirst: "সেরাগুলো প্রথমে।",
    ButBelow: "কিন্তু নিচে ",
    insteadBy: " একই উত্তরগুলো পরিবর্তে সাজানো হয়েছে ",
    newestFirst: "নতুনগুলো প্রথমে।",

    SoIfLeave: "তাই আপনি চলে গেলে এবং পরে এখানে ফিরে এলে নিচে আপনি পাবেন ",
    allNewReplies: "সকল নতুন উত্তর।",
    Click: "ক্লিক করুন",
    aReplyToReadIt: " নিচের কোনো উত্তরে সেটি পড়ার জন্য — কারণ নিচে কেবল একটি অংশ দেখানো হয়েছে।",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "স্ট্যাটাস পরিবর্তন করতে ক্লিক করুন",
    ClickToViewAnswer: "উত্তর দেখতে ক্লিক করুন",
    ViewAnswer: "উত্তর দেখুন",
    ChangeStatusC: "স্ট্যাটাস পরিবর্তন করুন:",
    ChangeCatC: "বিভাগ পরিবর্তন করুন:",
    ChangeTopicTypeC: "আলোচনার ধরণ পরিবর্তন করুন:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "একটি প্রশ্ন",
    hasAccptAns: "একটি গৃহীত উত্তর আছে",
    aProblem: "একটি সমস্যা",
    planToFix: "সমাধানের পরিকল্পনা",
    anIdea: "একটি ধারণা",
    planToDo: "করার পরিকল্পনা",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "এই ফর্মটি ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "বন্ধ করা হয়েছে; আপনি এটি আর পূরণ করতে এবং পোস্ট করতে পারবেন না।",

    ThisTopicClosed_1: "এই আলোচনাটি ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: "। আপনি এখনও মন্তব্য করতে পারেন।",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "এই পাতাটি মুছে ফেলা হয়েছে",
    CatDeldPageToo: "বিভাগ মুছে ফেলা হয়েছে, তাই এই পাতাটিও মুছে ফেলা হয়েছে",

    ThreadDeld: "থ্রেড মুছে ফেলা হয়েছে",
    CmntDeld: "মন্তব্য মুছে ফেলা হয়েছে",
    PostDeld: "পোস্ট মুছে ফেলা হয়েছে",
    DiscDeld: "আলোচনা মুছে ফেলা হয়েছে",
    PageDeld: "পাতা মুছে ফেলা হয়েছে",
    PagePendAppr: "পাতাটি অনুমোদনের অপেক্ষায় আছে",
    TitlePendAppr: "শিরোনাম অনুমোদনের অপেক্ষায় আছে",
    TextPendingApproval: "লেখা অনুমোদনের অপেক্ষায় আছে",

    TooltipQuestClosedNoAnsw: "এই প্রশ্নটি কোনো গৃহীত উত্তর ছাড়াই বন্ধ করা হয়েছে।",
    TooltipTopicClosed: "এই আলোচনাটি বন্ধ।",

    TooltipQuestSolved: "এটি একটি সমাধানকৃত প্রশ্ন",
    TooltipQuestUnsolved: "এটি একটি অমীমাংসিত প্রশ্ন",

    StatusDone: "সম্পন্ন",
    TooltipProblFixed: "এটি সমাধান করা হয়েছে",
    TooltipDone: "এটি করা হয়েছে",

    StatusStarted: "শুরু হয়েছে",
    TooltipFixing: "আমরা এটি সমাধান করতে শুরু করেছি",    
    TooltipImplementing: "আমরা এটি করতে শুরু করেছি",

    StatusPlanned: "পরিকল্পিত",
    TooltipProblPlanned: "আমরা এটি সমাধান করার পরিকল্পনা করছি",
    TooltipIdeaPlanned: "আমরা এটি করার পরিকল্পনা করছি",   // or "to implement this"?

    StatusNew: "নতুন",
    StatusNewDtl: "নতুন আলোচনা, আলোচনাধীন",
    TooltipUnsProbl: "এটি একটি অমীমাংসিত সমস্যা",
    TooltipIdea: "এটি একটি ধারণা",

    TooltipPersMsg: "ব্যক্তিগত বার্তা",
    TooltipChat: "# মানে চ্যাট চ্যানেল",
    TooltipPrivChat: "এটি একটি ব্যক্তিগত চ্যাট চ্যানেল",

    TooltipPinnedGlob: "\nবিশ্বব্যাপী পিন করা হয়েছে।",
    TooltipPinnedCat: "\nএই বিভাগে পিন করা হয়েছে।",

    SolvedClickView_1: "পোস্ট নং # এ সমাধান করা হয়েছে",
    SolvedClickView_2: "। দেখতে ক্লিক করুন",

    PostHiddenClickShow: "পোস্ট লুকানো আছে; দেখতে ক্লিক করুন",
    ClickSeeMoreRepls: "আরও উত্তর দেখান",    
    ClickSeeMoreComments: "আরও মন্তব্য দেখান",
    ClickSeeThisComment: "এই মন্তব্যটি দেখতে ক্লিক করুন",
    clickToShow: "দেখতে ক্লিক করুন",

    ManyDisagree: "অনেকে এর সাথে একমত নন:",
    SomeDisagree: "কেউ কেউ এর সাথে একমত নন:",

    PendAppr: "অনুমোদনের অপেক্ষায়",
    CmtPendAppr: "Comment pending approval, posted ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "আপনার" : "নিচের") + " মন্তব্যটি অনুমোদনের অপেক্ষায় আছে।",

    _and: " এবং",

    repliesTo: "উত্তর দেওয়া হয়েছে",
    InReplyTo: "এর উত্তরে",
    YourReplyTo: "আপনার উত্তর ",
    YourChatMsg: "আপনার চ্যাট বার্তা: ", 
    YourDraft: "আপনার ড্রাফট",  
    YourEdits: "আপনার সম্পাদনা: ", 
    YourProgrNoteC: "আপনার অগ্রগতির নোট:",
    aProgrNote: "একটি অগ্রগতির নোট: ",

    ReplyingToC: "উত্তর দিচ্ছেন:",  
    ScrollToPrevw_1: "স্ক্রল করুন ",
    ScrollToPrevw_2: "প্রাকদর্শনের জন্য",   

    UnfinEdits: "অসমাপ্ত সম্পাদনা",
    ResumeEdting: "পুনরায় সম্পাদনা শুরু করুন",
    DelDraft: "ড্রাফট মুছে ফেলুন", 

    ClickViewEdits: "পুরনো সম্পাদনাগুলো দেখতে ক্লিক করুন",

    By: "করেছেন ", // ... someones name

    // Discussion ...
    aboutThisIdea: "এই ধারণাটি কীভাবে এবং আদৌ করা হবে কি না সে সম্পর্কে",
    aboutThisProbl: "এটি কীভাবে এবং আদৌ সমাধান করা হবে কি না সে সম্পর্কে",

    AddProgrNote: "Add progress note",
    // Progress ...
    withThisIdea: "এই ধারণাটি করার ক্ষেত্রে",
    withThisProbl: "এই সমস্যাটি সমাধান করার ক্ষেত্রে",
    withThis: "এটি করার ক্ষেত্রে",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "এই আলোচনা সম্পর্কে বিজ্ঞপ্তি:",

    // If is a direct message topic, members listed below this text.
    Msg: "বার্তা",

    SmrzRepls: "উত্তরের সারসংক্ষেপ করুন",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies}টি উত্তর আছে। আনুমানিক পড়ার সময়: ${minutes} মিনিট`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `সম্পন্ন। পূর্বে দেখানো ${numShownBefore}টি উত্তরের মধ্যে ${numSummarized}টি উত্তরের সারসংক্ষেপ করা হয়েছে।`,
  },


  // Post actions

  pa: {
    CloseTopic: "আলোচনা বন্ধ করুন",
    CloseOwnQuestionTooltip: "আপনার আর উত্তরের প্রয়োজন না হলে এই প্রশ্নটি বন্ধ করুন।",
    CloseOthersQuestionTooltip: "এই প্রশ্নটি বন্ধ করুন যদি এর আর উত্তরের প্রয়োজন না থাকে, যেমন যদি এটি বিষয়ের বাইরে হয় বা অন্য কোনো আলোচনায় ইতিমধ্যে উত্তর দেওয়া হয়ে থাকে।",
    CloseToDoTooltip: "এই টু-ডু (To-Do) বন্ধ করুন যদি এটি আর করার বা সমাধান করার প্রয়োজন না থাকে।",
    CloseTopicTooltip: "এই আলোচনাটি বন্ধ করুন যদি এতে আর কোনো বিবেচনার প্রয়োজন না থাকে।",

    AcceptBtnExpl: "এটিকে প্রশ্ন বা সমস্যার উত্তর হিসেবে গ্রহণ করুন",
    SolutionQ: "সমাধান?",
    ClickUnaccept: "এই উত্তরটি বাতিল করতে ক্লিক করুন",
    PostAccepted: "এই পোস্টটিকে উত্তর হিসেবে গ্রহণ করা হয়েছে",

    NumLikes: (num: number) => num === 1 ? "১টি পছন্দ" : num + "টি পছন্দ",
    NumDisagree: (num: number) => num + "টি দ্বিমত",
    NumBury: (num: number) => num === 1 ? "১টি বাতিল ভোট" : num + "টি বাতিল ভোট",
    NumUnwanted: (num: number) => num === 1 ? "১টি অবাঞ্ছিত" : num + "টি অবাঞ্ছিত",

    MoreVotes: "আরও ভোট...",
    LikeThis: "পছন্দ করুন",
    LinkToPost: "এই পোস্টের লিঙ্ক",
    Report: "রিপোর্ট করুন",
    ReportThisPost: "এই পোস্টটি রিপোর্ট করুন",
    Admin: "অ্যাডমিন",
    DiscIx: "আলোচনার ইনডেক্স",

    Disagree: "দ্বিমত পোষণ করুন",
    DisagreeExpl: "এই পোস্টের সাথে দ্বিমত পোষণ করতে বা কোনো ভুল তথ্য সম্পর্কে অন্যদের সতর্ক করতে এখানে ক্লিক করুন।",
    Bury: "সরিয়ে দিন",
    BuryExpl: "এই পোস্টটিকে অন্য পোস্টগুলোর নিচে পাঠাতে ক্লিক করুন। কেবল ফোরামের কর্মীরা আপনার ভোট দেখতে পাবেন।",
    Unwanted: "অবাঞ্ছিত",
    UnwantedExpl: "আপনি যদি এই ওয়েবসাইটে এই পোস্টটি না চান। এটি পোস্ট লেখকের প্রতি আমার বিশ্বাস কমিয়ে দেবে। কেবল ফোরামের কর্মীরা আপনার ভোট দেখতে পাবেন।",

    AddTags: "ট্যাগ যোগ করুন / সরান",
    UnWikify: "উইকি মোড বাতিল করুন",
    Wikify: "উইকি মোড চালু করুন",
    PinDeleteEtc: "পিন / মুছে ফেলা / বিভাগ ...",
  },


  // Share dialog

  sd: {
    Copied: "কপি করা হয়েছে।",
    CtrlCToCopy: "কপি করতে CTRL+C চাপুন।",
    ClickToCopy: "লিঙ্ক কপি করতে ক্লিক করুন।",
  },


  // Chat

  c: {
    About_1: "এটি হলো ",
    About_2: " চ্যাট চ্যানেল, যা তৈরি করেছেন ",
    ScrollUpViewComments: "পুরনো মন্তব্য দেখতে উপরে স্ক্রল করুন",
    Purpose: "উদ্দেশ্য:",
    MessageDeleted: "(বার্তা মুছে ফেলা হয়েছে)",
    JoinThisChat: "এই চ্যাটে যোগ দিন",
    PostMessage: "বার্তা পোস্ট করুন",
    AdvancedEditor: "উন্নত এডিটর",
    TypeTitle: "একটি শিরোনাম লিখুন — এই চ্যাটটি কী সম্পর্কে, অল্প কথায়?",
    TypePurpose: "একটি উদ্দেশ্য লিখুন — এটি শিরোনামের চেয়ে বড় এবং বিস্তারিত হতে পারে।",
    TypeHere: "এখানে লিখুন। আপনি মার্কডাউন এবং এইচটিএমএল (HTML) ব্যবহার করতে পারেন।",
  },


  // My Menu

  mm: {
    NeedsReview: "রিভিউ প্রয়োজন ",
    AdminHelp: "অ্যাডমিন সাহায্য ",
    StaffHelp: "কর্মীদের সাহায্য ",
    DraftsEtc: "ড্রাফট, বুকমার্ক, কাজসমূহ",
    MoreNotfs: "সকল বিজ্ঞপ্তি দেখুন",
    DismNotfs: "সবগুলো পড়া হয়েছে হিসেবে চিহ্নিত করুন",
    ViewProfile: "আপনার প্রোফাইল দেখুন",
    ViewGroups: "গ্রুপগুলো দেখুন",
    LogOut: "লগ আউট করুন",
    UnhideHelp: "সাহায্যমূলক বার্তাগুলো দেখান",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "স্ক্রল করুন:",
    Scroll: "স্ক্রল",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "B",
    Back_2: "ack",
    BackExpl: "এই পাতার আপনার পূর্ববর্তী অবস্থানে ফিরে যান",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Page top",
    PgTopHelp: "Go to the top of the page. Keyboard shortcut: 1",
    Repl: "Replies",
    ReplHelp: "Go to the Replies section. Shortcut: 2",
    Progr: "Progress",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Go to the Progress section. Shortcut: 3",
    PgBtm: "Page bottom",
    Btm: "Bottom",
    BtmHelp: "Go to the bottom of the page. Shortcut: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", এবং ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " চেপে পেছনে ফিরে যান",
  },


  // Select users dialog
  sud: {
    SelectUsers: "ব্যবহারকারী নির্বাচন করুন",
    AddUsers: "ব্যবহারকারী যোগ করুন",
  },


  // About user dialog

  aud: {
    IsMod: "একজন মডারেটর।",
    IsAdm: "একজন অ্যাডমিনিস্ট্রেটর।",
    IsDeld: "নিষ্ক্রিয় বা মুছে ফেলা হয়েছে।",
    ThisIsGuest: "এটি একজন অতিথি ব্যবহারকারী, বাস্তবে যে কেউ হতে পারে।",
    ViewInAdm: "অ্যাডমিন এলাকায় দেখুন",
    ViewProfl: "প্রোফাইল দেখুন",
    ViewComments: "অন্যান্য মন্তব্য দেখুন",
    RmFromTpc: "আলোচনা থেকে সরিয়ে দিন",
    EmAdrUnkn: "ইমেল ঠিকানা অজানা — এই অতিথিকে উত্তরের জন্য কোনো বিজ্ঞপ্তি পাঠানো হবে না।",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "পছন্দসমূহ",
    Invites: "আমন্ত্রণ",
    DraftsEtc: "ড্রাফট ইত্যাদি",
    About: "সম্পর্কে",
    Privacy: "গোপনীয়তা",
    Security: "নিরাপত্তা",
    Account: "অ্যাকাউন্ট",
    Interface: "ইন্টারফেস",

    // ----- Overview stats

    JoinedC: "যোগ দিয়েছেন: ",
    PostsMadeC: "পোস্ট করেছেন: ",
    LastPostC: "শেষ পোস্ট: ",
    LastSeenC: "শেষ দেখা গেছে: ",
    TrustLevelC: "ট্রাস্ট লেভেল: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "ছবি আপলোড করুন",
    ChangePhoto: "ছবি পরিবর্তন করুন",
    ImgTooSmall: "ছবি খুব ছোট: কমপক্ষে ১০০ x ১০০ হতে হবে",

    // ----- Activity

    OnlyStaffCanSee: "কেবল কর্মীরা এবং বিশ্বস্ত মূল সদস্যরা এটি দেখতে পারেন।",
    OnlyMbrsCanSee: "কেবল সেই ব্যক্তিরা এটি দেখতে পারেন যারা বেশ কিছু সময় ধরে সক্রিয় সদস্য।",
    Nothing: "দেখানোর মতো কিছু নেই",
    Posts: "পোস্টসমূহ",
    NoPosts: "কোনো পোস্ট নেই।",
    Topics: "বিষয়সমূহ",
    NoTopics: "কোনো বিষয় নেই।",

    // ----- User status

    UserBanned: "এই ব্যবহারকারী নিষিদ্ধ",
    UserSuspended: (dateUtc: string) => `এই ব্যবহারকারীকে ${dateUtc} UTC পর্যন্ত স্থগিত করা হয়েছে`,
    ReasonC: "কারণ: ",

    DeactOrDeld: "নিষ্ক্রিয় বা মুছে ফেলা হয়েছে।",
    isGroup: " (একটি গ্রুপ)",
    isGuest: " — একজন অতিথি ব্যবহারকারী, যে কেউ হতে পারে",
    isMod: " – মডারেটর",
    isAdmin: " – অ্যাডমিনিস্ট্রেটর",
    you: "(আপনি)",

    // ----- Notifications page

    NoNotfs: "কোনো বিজ্ঞপ্তি নেই",
    NotfsToYouC: "আপনাকে পাঠানো বিজ্ঞপ্তি:",
    NotfsToOtherC: (name: string) => `${name}-কে পাঠানো বিজ্ঞপ্তি:`,
    DefNotfsSiteWide: "ডিফল্ট বিজ্ঞপ্তি, সাইট জুড়ে",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "জন্য",

    // ----- Drafts Etc page

    NoDrafts: "কোনো ড্রাফট নেই",
    YourDraftsC: "আপনার ড্রাফটসমূহ:",
    DraftsByC: (name: string) => `${name}-এর ড্রাফটসমূহ:`,

    // ----- Invites page

    InvitesIntro: "এখানে আপনি এই সাইটে যোগ দেওয়ার জন্য অন্যদের আমন্ত্রণ জানাতে পারেন। ",
    InvitesListedBelow: "আপনার পাঠানো আমন্ত্রণগুলো নিচে তালিকাভুক্ত করা হয়েছে।",
    NoInvites: "আপনি এখনও কাউকে আমন্ত্রণ জানাননি।",

    InvitedEmail: "আমন্ত্রণ জানানো ইমেল",
    WhoAccepted: "সদস্য যিনি গ্রহণ করেছেন",
    InvAccepted: "আমন্ত্রণ গ্রহণ করা হয়েছে",
    InvSent: "আমন্ত্রণ পাঠানো হয়েছে",
    JoinedAlready: "ইতিমধ্যে যোগ দিয়েছেন",

    SendAnInv: "মানুষকে আমন্ত্রণ জানান", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "আমন্ত্রণ পাঠান", 
    SendInvExpl:
        "আমরা আপনার বন্ধুদের একটি সংক্ষিপ্ত ইমেল পাঠাব। তারা সরাসরি যোগ দেওয়ার জন্য একটি লিঙ্কে ক্লিক করবেন, কোনো লগ ইনের প্রয়োজন নেই। " +
        "তারা সাধারণ সদস্য হবেন, মডারেটর বা অ্যাডমিন নয়।",
    //EnterEmail: "Enter email(s)",
    InvDone: "সম্পন্ন। আমি তাদের একটি ইমেল পাঠাব।",
    NoOneToInv: "আমন্ত্রণ জানানোর মতো কেউ নেই।",
    InvNotfLater: "আমি আপনাকে পরে জানাব যখন আমি তাদের আমন্ত্রণ পাঠাব।",
    AlreadyInvSendAgainQ: "এদের ইতিমধ্যে আমন্ত্রণ জানানো হয়েছে — আপনি কি তাদের আবার আমন্ত্রণ জানাতে চান?",
    InvErr_1: "এগুলোর ফলে ",
    InvErr_2: "ত্রুটি",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "এরা ইতিমধ্যে যোগ দিয়েছেন, তাই আমি তাদের আমন্ত্রণ জানাইনি:",
    ResendInvsQ: "এই ব্যক্তিদের কি পুনরায় আমন্ত্রণ পাঠাতে চান? তাদের ইতিমধ্যে আমন্ত্রণ জানানো হয়েছে।",
    InvAgain: "পুনরায় আমন্ত্রণ জানান",

    // ----- Preferences, About

    AboutYou: "আপনার সম্পর্কে",
    WebLink: "আপনার কোনো ওয়েবসাইট বা পেজ।",

    NotShownCannotChange: "জনসমক্ষে দেখানো হয় না। পরিবর্তন করা যাবে না।",

    // The full name or alias:
    NameOpt: "নাম (ঐচ্ছিক)",

    NotShown: "জনসমক্ষে দেখানো হয় না।",

    // The username:
    MayChangeFewTimes: "আপনি এটি কেবল কয়েকবার পরিবর্তন করতে পারেন।",
    notSpecified: "(উল্লেখ নেই)",
    ChangeUsername_1: "আপনি আপনার ইউজারনেম কেবল কয়েকবার পরিবর্তন করতে পারেন।",
    ChangeUsername_2: "এটি খুব ঘনঘন পরিবর্তন করলে অন্যরা বিভ্রান্ত হতে পারে — " +
        "তারা জানবে না কীভাবে আপনাকে @মেনশন করতে হবে।",

    NotfAboutAll: "প্রতিটি নতুন পোস্ট সম্পর্কে জানানো হবে (যদি না আপনি সেই আলোচনা বা বিভাগটি মিউট করেন)",
    NotfAboutNewTopics: "নতুন বিষয় সম্পর্কে জানানো হবে (যদি না আপনি সেই বিভাগটি মিউট করেন)",

    ActivitySummaryEmails: "কার্যক্রমের সারসংক্ষেপ ইমেল",

    EmailSummariesToGroup:
        "যখন সদস্যরা এই গ্রুপে আসবেন না, তখন ডিফল্টভাবে তাদের ইমেল করুন " +
        "জনপ্রিয় বিষয় এবং অন্যান্য জিনিসের সারসংক্ষেপ।",
    EmailSummariesToMe:
        "আমি যখন এখানে আসব না, তখন আমাকে জনপ্রিয় বিষয় এবং অন্যান্য জিনিসের " +
        "সারসংক্ষেপ ইমেল করুন।",

    AlsoIfTheyVisit: "তারা নিয়মিত এখানে আসলেও তাদের ইমেল করুন।",
    AlsoIfIVisit: "আমি যখন এখানে নিয়মিত আসব, তখনও আমাকে ইমেল করুন।",

    HowOftenWeSend: "কত ঘনঘন আমরা এই ইমেলগুলো পাঠাব?",
    HowOftenYouWant: "আপনি কত ঘনঘন এই ইমেলগুলো পেতে চান?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "অপরিচিত এবং নতুন সদস্যদের কাছ থেকে আপনার সাম্প্রতিক কার্যক্রম লুকিয়ে রাখবেন?",
    HideActivityStrangers_2: "(তবে তাদের জন্য নয় যারা বেশ কিছু সময় ধরে সক্রিয় সদস্য।)",
    HideActivityAll_1: "সবার কাছ থেকে আপনার সাম্প্রতিক কার্যক্রম লুকিয়ে রাখবেন?",
    HideActivityAll_2: "(কেবল কর্মী এবং বিশ্বস্ত মূল সদস্যরা ছাড়া।)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "ইমেল ঠিকানাসমূহ",
    PrimaryDot: "প্রধান। ",
    VerifiedDot: "যাচাইকৃত। ",
    NotVerifiedDot: "যাচাই করা হয়নি। ",
    ForLoginWithDot: (provider: string) => `${provider}-এর মাধ্যমে লগ ইন করার জন্য। `,
    MakePrimary: "প্রধান করুন",
    AddEmail: "ইমেল ঠিকানা যোগ করুন",
    TypeNewEmailC: "একটি নতুন ইমেল ঠিকানা লিখুন:",
    MaxEmailsInfo: (numMax: number) => `(আপনি ${numMax}টির বেশি ঠিকানা যোগ করতে পারবেন না।)`,
    EmailAdded_1: "যোগ করা হয়েছে। আমরা আপনাকে একটি যাচাইকরণ ইমেল পাঠিয়েছি — ",
    EmailAdded_2: "আপনার ইমেল ইনবক্স চেক করুন।",
    SendVerifEmail: "যাচাইকরণ ইমেল পাঠান",

    EmailStatusExpl:
        "('প্রধান' মানে আপনি এই ঠিকানার মাধ্যমে লগ ইন করতে পারবেন এবং আমরা এতে বিজ্ঞপ্তি পাঠাব। " +
        "'যাচাইকৃত' মানে আপনি যাচাইকরণ ইমেলের লিঙ্কে ক্লিক করেছেন।)",

    // Password:
    ChangePwdQ: "পাসওয়ার্ড পরিবর্তন করবেন?",
    CreatePwdQ: "পাসওয়ার্ড তৈরি করবেন?",
    WillGetPwdRstEml: "আপনি একটি পাসওয়ার্ড রিসেট ইমেল পাবেন।",
    // This is the "None" in:  "Password: None"
    PwdNone: "নেই",

    // Logins:
    LoginMethods: "লগ ইন পদ্ধতি",
    commaAs: ", হিসেবে: ",

    // One's data:
    YourContent: "আপনার কন্টেন্ট",
    DownloadPosts: "পোস্ট ডাউনলোড করুন",
    DownloadPostsHelp: "আপনি যে সকল বিষয় এবং মন্তব্য পোস্ট করেছেন তার একটি কপি সহ একটি JSON ফাইল তৈরি করে।",
    DownloadPersData: "ব্যক্তিগত তথ্য ডাউনলোড করুন",
    DownloadPersDataHelp: "আপনার ব্যক্তিগত তথ্যের একটি কপি সহ একটি JSON ফাইল তৈরি করে, যেমন আপনার নাম " +
        "(যদি উল্লেখ করে থাকেন) এবং ইমেল ঠিকানা।",


    // Delete account:
    DangerZone: "বিপদজনক এলাকা",
    DeleteAccount: "অ্যাকাউন্ট মুছে ফেলুন",
    DeleteYourAccountQ:
        "আপনার অ্যাকাউন্ট মুছে ফেলবেন? আমরা আপনার নাম সরিয়ে দেব, আপনার ইমেল ঠিকানা, পাসওয়ার্ড এবং " +
        "অনলাইন পরিচয় (যেমন ফেসবুক বা টুইটার লগ ইন) ভুলে যাব। " +
        "আপনি আর লগ ইন করতে পারবেন না। এটি আর ফিরিয়ে আনা সম্ভব নয়।",
    DeleteUserQ:
        "এই ব্যবহারকারীকে মুছে ফেলবেন? আমরা নাম সরিয়ে দেব, ইমেল ঠিকানা, পাসওয়ার্ড এবং " +
        "অনলাইন পরিচয় (যেমন ফেসবুক বা টুইটার লগ ইন) ভুলে যাব। " +
        "ব্যবহারকারী আর লগ ইন করতে পারবেন না। এটি আর ফিরিয়ে আনা সম্ভব নয়।",
    YesDelete: "হ্যাঁ, মুছে ফেলুন",
  },


  // Group profile page
  gpp: {
    GroupMembers: "গ্রুপের সদস্যবৃন্দ",
    NoMembers: "কোনো সদস্য নেই।",
    MayNotListMembers: "সদস্যদের তালিকা নাও দেখাতে পারে।",
    AddMembers: "সদস্য যোগ করুন",
    BuiltInCannotModify: "এটি একটি বিল্ট-ইন গ্রুপ; এটি পরিবর্তন করা যাবে না।",
    NumMembers: (num: number) => `${num} জন সদস্য`,
    YouAreMember: "আপনি একজন সদস্য।",
    CustomGroupsC: "কাস্টম গ্রুপসমূহ:",
    BuiltInGroupsC: "বিল্ট-ইন গ্রুপসমূহ:",
    DeleteGroup: "এই গ্রুপটি মুছে ফেলুন",
  },


  // Create user dialog

  cud: {
    CreateUser: "ব্যবহারকারী তৈরি করুন",
    CreateAccount: "অ্যাকাউন্ট তৈরি করুন",
    EmailC: "ইমেল:",  // REMOVE move to t.EmailC instead
    keptPriv: "ব্যক্তিগত রাখা হবে",
    forNotfsKeptPriv: "উত্তরের বিজ্ঞপ্তির জন্য, ব্যক্তিগত রাখা হবে",
    EmailVerifBy_1: "আপনার ইমেল যাচাই করেছেন ",
    EmailVerifBy_2: "।",
    UsernameC: "ইউজারনেম:",
    FullNameC: "পুরো নাম:",
    optName: "ঐচ্ছিক",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "অ্যাকাউন্ট তৈরি করা হয়েছে। আপনাকে লগ ইন করানো হয়েছে।",  // COULD say if verif email sent too?
    AlmostDone:
        "প্রায় সম্পন্ন! আপনাকে কেবল আপনার ইমেল ঠিকানাটি নিশ্চিত করতে হবে। আমরা " +
        "আপনাকে একটি ইমেল পাঠিয়েছি। আপনার অ্যাকাউন্ট সক্রিয় করতে ইমেলের লিঙ্কে ক্লিক করুন। " +
        "আপনি এই পাতাটি বন্ধ করতে পারেন।",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "শর্তাবলী এবং গোপনীয়তা",

    Accept_1: "আপনি কি আমাদের ",
    TermsOfService: "সেবার শর্তাবলী",
    TermsOfUse: "ব্যবহারের শর্তাবলী",
    Accept_2: " এবং ",
    PrivPol: "গোপনীয়তা নীতি",
    Accept_3_User: " মেনে নিচ্ছেন?",
    Accept_3_Owner: " সাইট মালিকদের জন্য মেনে নিচ্ছেন?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "হ্যাঁ, আমি মেনে নিচ্ছি",
  },


  // Password input

  pwd: {
    PasswordC: "পাসওয়ার্ড:",
    StrengthC: "শক্তি: ",
    FairlyWeak: "বেশ দুর্বল।",
    toShort: "খুব ছোট",
    TooShort: (minLength: number) => `খুব ছোট। কমপক্ষে ${minLength}টি অক্ষর হতে হবে`,
    PlzInclDigit: "অনুগ্রহ করে একটি সংখ্যা বা বিশেষ অক্ষর অন্তর্ভুক্ত করুন",
    TooWeak123abc: "খুব দুর্বল। '12345' বা 'abcde'-এর মতো পাসওয়ার্ড ব্যবহার করবেন না।",
    AvoidInclC: "পাসওয়ার্ডে আপনার নাম বা ইমেলের (অংশবিশেষ) ব্যবহার এড়িয়ে চলুন:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "পাতাটি পাওয়া যায়নি, অথবা অ্যাক্সেস অস্বীকার করা হয়েছে।",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "আপনি অন্য কারোর ছদ্মবেশ ধারণ করছেন, যার হয়তো এই ওয়েবসাইটের সকল অংশে অ্যাক্সেস নেই।",

    IfYouThinkExistsThen: "আপনি যদি মনে করেন পাতাটি আছে, তাহলে এমন কেউ হিসেবে লগ ইন করুন যার এটি দেখার অনুমতি আছে। ",
    LoggedInAlready: "(আপনি ইতিমধ্যে লগ ইন করেছেন, কিন্তু হয়তো এটি ভুল অ্যাকাউন্ট?) ",
    ElseGoToHome_1: "অন্যথায়, আপনি ",
    ElseGoToHome_2: "হোমপেজে যেতে পারেন।",

    CreateAcconut: "অ্যাকাউন্ট তৈরি করুন",
    ContinueWithDots: "চালিয়ে যান ...",
    SignUp: "যোগ দিন",
    LogIn: "লগ ইন করুন",
    LogInWithPwd: "পাসওয়ার্ড দিয়ে লগ ইন করুন",
    CreateAdmAcct: "অ্যাডমিন অ্যাকাউন্ট তৈরি করুন:",
    AuthRequired: "এই সাইটটি অ্যাক্সেস করার জন্য প্রমাণীকরণ প্রয়োজন",
    LogInToLike: "এই পোস্টটি পছন্দ করতে লগ ইন করুন",
    LogInToSubmit: "লগ ইন করুন এবং জমা দিন",
    LogInToComment: "একটি মন্তব্য করতে লগ ইন করুন",
    LogInToCreateTopic: "নতুন বিষয় তৈরি করতে লগ ইন করুন",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "অথবা ",         // "Or "
    OrLogIn_2: "লগ ইন করুন",      // "Log in" (this is a button)
    OrLogIn_3: " পরিবর্তে",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "অথবা ",
    SignUpInstead_2: "অ্যাকাউন্ট তৈরি করুন", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", অথবা কেবল ",
    OrTypeName_2: "একটি নাম লিখুন",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "অথবা অ্যাকাউন্ট তৈরি করুন:",
    OrTypeName: "অথবা আপনার নাম লিখুন:",
    OrLogIn: "অথবা লগ ইন করুন:",
    YourNameQ: "আপনার নাম?",

    BadCreds: "ভুল ইউজারনেম বা পাসওয়ার্ড",

    UsernameOrEmailC: "ইউজারনেম বা ইমেল:",
    PasswordC: "পাসওয়ার্ড:",
    ForgotPwd: "আপনি কি আপনার পাসওয়ার্ড ভুলে গেছেন?",

    NoPwd: "আপনি এখনও কোনো পাসওয়ার্ড পছন্দ করেননি।",
    CreatePwd: "পাসওয়ার্ড তৈরি করুন",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "আপনি কী নিয়ে চিন্তিত তা আমাদের জানান।",
    ThanksHaveReported: "ধন্যবাদ। আপনি রিপোর্ট করেছেন। ফোরামের কর্মীরা বিষয়টি দেখবেন।",
    ReportComment: "মন্তব্য রিপোর্ট করুন",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "এই পোস্টে ব্যক্তিগত তথ্য আছে, যেমন কারো আসল নাম।",
    OptOffensive: "এই পোস্টে আপত্তিকর বা অবমাননাকর কন্টেন্ট আছে।",
    OptSpam: "এই পোস্টটি একটি অবাঞ্ছিত বিজ্ঞাপন।",
    OptOther: "অন্য কোনো কারণে এই পোস্ট সম্পর্কে কর্মীদের জানান।",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "আপনি যদি লগ ইন করে থাকেন তবে আপনার নামের উপর ক্লিক করে এবং তারপর ",
    YouCanShowAgain_2: "সাহায্যমূলক বার্তাগুলো দেখান",
  },


  // Editor

  e: {
    SimilarTopicsC: "সদৃশ বিষয়সমূহ:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "দুঃখিত, বর্তমানে আপনি একবারে কেবল একটি ফাইল আপলোড করতে পারেন",
    PleaseFinishPost: "অনুগ্রহ করে আগে আপনার পোস্ট লেখা শেষ করুন",
    PleaseFinishChatMsg: "অনুগ্রহ করে আগে আপনার চ্যাট বার্তা লেখা শেষ করুন",
    PleaseFinishMsg: "অনুগ্রহ করে আগে আপনার বার্তা লেখা শেষ করুন",
    PleaseSaveEdits: "অনুগ্রহ করে আগে আপনার বর্তমান সম্পাদনা সংরক্ষণ করুন",
    PleaseSaveOrCancel: "অনুগ্রহ করে আপনার নতুন বিষয়টি সংরক্ষণ অথবা বাতিল করুন",
    CanContinueEditing: "আপনি যদি এডিটর আবার খোলেন তবে আপনি আপনার লেখা চালিয়ে যেতে পারবেন।",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "অনুগ্রহ করে সব লেখা মুছে ফেলবেন না। কিছু লিখুন।",
    PleaseWriteSth: "অনুগ্রহ করে কিছু লিখুন।",
    PleaseWriteTitle: "অনুগ্রহ করে আলোচনার শিরোনাম লিখুন।",
    PleaseWriteMsgTitle: "অনুগ্রহ করে বার্তার শিরোনাম লিখুন।",
    PleaseWriteMsg: "অনুগ্রহ করে একটি বার্তা লিখুন।",

    exBold: "বোল্ড টেক্সট",
    exEmph: "এমফাসাইজড টেক্সট",
    exPre: "প্রি-ফরম্যাটেড টেক্সট",
    exQuoted: "কোটেড টেক্সট",
    ExHeading: "শিরোনাম",

    TitlePlaceholder: "একটি শিরোনাম লিখুন — এটি কী সম্পর্কে, একটি সংক্ষিপ্ত বাক্যে?",

    EditPost_1: "সম্পাদনা করুন ",
    EditPost_2: "পোস্ট ",

    TypeChatMsg: "একটি চ্যাট বার্তা লিখুন:",
    YourMsg: "আপনার বার্তা:",
    CreateTopic: "নতুন বিষয় তৈরি করুন",
    CreateCustomHtml: "একটি কাস্টম HTML পাতা তৈরি করুন (আপনার নিজস্ব <h1> শিরোনাম যোগ করুন)",
    CreateInfoPage: "একটি তথ্য পাতা তৈরি করুন",
    CreateCode: "একটি সোর্স কোড পাতা তৈরি করুন",
    AskQuestion: "একটি প্রশ্ন জিজ্ঞাসা করুন",
    ReportProblem: "একটি সমস্যা রিপোর্ট করুন",
    SuggestIdea: "একটি ধারণা প্রস্তাব করুন",
    NewChat: "চ্যাটের শিরোনাম এবং উদ্দেশ্য",
    NewPrivChat: "ব্যক্তিগত চ্যাটের শিরোনাম এবং উদ্দেশ্য",
    AppendComment: "পাতার একদম নিচে একটি মন্তব্য যোগ করুন:",

    ReplyTo: "উত্তর দিন ",
    ReplyTo_theOrigPost: "মূল পোস্টে",
    ReplyTo_post: "পোস্টে ",
    AddCommentC: "একটি মন্তব্য যোগ করুন:", 

    PleaseSelectPosts: "উত্তর দেওয়ার জন্য অনুগ্রহ করে এক বা একাধিক পোস্ট নির্বাচন করুন।",

    Save: "সংরক্ষণ করুন",
    edits: "সম্পাদনা",

    PostReply: "উত্তর পোস্ট করুন",
    PostComment: "মন্তব্য পোস্ট করুন",

    Post: "পোস্ট করুন",
    comment: "মন্তব্য",
    question: "প্রশ্ন",

    PostMessage: "বার্তা পোস্ট করুন",
    SimpleEditor: "সাধারণ এডিটর",

    Send: "পাঠান",
    message: "বার্তা",

    Create: "তৈরি করুন",
    page: "পাতা",
    chat: "চ্যাট",
    idea: "ধারণা",
    topic: "বিষয়",

    Submit: "জমা দিন",
    problem: "সমস্যা",

    ViewOldEdits: "পুরনো সম্পাদনাগুলো দেখুন",

    UploadBtnTooltip: "ফাইল বা ছবি আপলোড করুন",
    BoldBtnTooltip: "বোল্ড করুন",
    EmBtnTooltip: "এমফাসাইজ করুন",
    QuoteBtnTooltip: "কোট করুন",
    PreBtnTooltip: "প্রি-ফরম্যাটেড টেক্সট",
    HeadingBtnTooltip: "শিরোনাম",

    TypeHerePlaceholder: "এখানে লিখুন। আপনি মার্কডাউন এবং এইচটিএমএল (HTML) ব্যবহার করতে পারেন। ছবি পেস্ট করতে ড্র্যাগ এবং ড্রপ করুন।",

    Maximize: "বড় করুন",
    ToNormal: "স্বাভাবিক অবস্থায় ফিরুন",
    TileHorizontally: "পাশাপাশি সাজান",

    PreviewC: "প্রাকদর্শন:",
    TitleExcl: " (শিরোনাম বাদে)",
    ShowEditorAgain: "এডিটর আবার দেখান",
    Minimize: "ছোট করুন",

    PreviewInfo: "আপনার পোস্টটি কেমন দেখাবে তা এখানে প্রাকদর্শন করতে পারেন।",
    CannotType: "আপনি এখানে লিখতে পারবেন না।",

    LoadingDraftDots: "ড্রাফট লোড হচ্ছে...",
    DraftUnchanged: "অপরিবর্তিত।",
    CannotSaveDraftC: "ড্রাফট সংরক্ষণ করা যাচ্ছে না:",
    DraftSavedBrwsr: "ড্রাফট ব্রাউজারে সংরক্ষিত হয়েছে।", 
    DraftSaved: (nr: string | number) => `ড্রাফট ${nr} সংরক্ষিত হয়েছে।`,
    DraftDeleted: (nr: string | number) => `ড্রাফট ${nr} মুছে ফেলা হয়েছে।`,
    WillSaveDraft: (nr: string | number) => `ড্রাফট ${nr} সংরক্ষণ করা হবে ...`,
    SavingDraft: (nr: string | number) => `ড্রাফট ${nr} সংরক্ষণ করা হচ্ছে ...`,
    DeletingDraft: (nr: string | number) => `ড্রাফট ${nr} মুছে ফেলা হচ্ছে ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "বিভাগ নির্বাচন করুন",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "আলোচনার ধরণ নির্বাচন করুন:",
    DiscussionExpl: "কোনো কিছু সম্পর্কে আলোচনা।",
    QuestionExpl: "একটি উত্তরকে গৃহীত উত্তর হিসেবে চিহ্নিত করা যেতে পারে।",
    ProblExpl: "যদি কিছু কাজ না করে বা সমস্যা থাকে। এটি সমাধানকৃত হিসেবে চিহ্নিত করা যেতে পারে।",
    IdeaExpl: "একটি প্রস্তাব। এটি সম্পন্ন বা বাস্তবায়িত হিসেবে চিহ্নিত করা যেতে পারে।",
    ChatExpl: "একটি সম্ভবত কখনোই শেষ না হওয়া কথোপকথন।",
    PrivChatExpl: "কেবল সেই ব্যক্তিদের কাছে দৃশ্যমান যাদের চ্যাটে যোগ দেওয়ার জন্য আমন্ত্রণ জানানো হয়েছে।",

    CustomHtml: "কাস্টম HTML পাতা",
    InfoPage: "তথ্য পাতা",
    Code: "কোড",
    EmbCmts: "এমবেডেড মন্তব্য",
    About: "সম্পর্কে",
    PrivChat: "ব্যক্তিগত চ্যাট",
    Form: "ফর্ম",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "যোগ দেওয়ার জন্য আর কোনো কমিউনিটি নেই।",
    SelCmty: "কমিউনিটি নির্বাচন করুন ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "সাহায্যের জন্য অনুসন্ধান করুন",
    TxtToFind: "অনুসন্ধানের টেক্সট",
  },


  // No internet

  ni: {
    NoInet: "কোনো ইন্টারনেট সংযোগ নেই",
    PlzRefr: "সর্বশেষ পরিবর্তনগুলো দেখতে পাতাটি রিফ্রেশ করুন। (সংযোগ বিচ্ছিন্ন হয়েছিল)",
    RefrNow: "এখনই রিফ্রেশ করুন",
  },


  PostDeleted: (postNr: number) => `সেই পোস্টটি (নং ${postNr}) মুছে ফেলা হয়েছে।`,
  NoSuchPost: (postNr: number) => `এই পাতায় ${postNr} নং কোনো পোস্ট নেই।`,
  NoPageHere: "এই পাতাটি মুছে ফেলা হয়েছে, অথবা এর কোনো অস্তিত্ব নেই, অথবা আপনার এটি দেখার অনুমতি নেই।",
  GoBackToLastPage: "আগের পাতায় ফিরে যান",

};


