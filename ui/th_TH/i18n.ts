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

var t_th_TH: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "ใช้งานอยู่",
  Activity: "กิจกรรม",
  Add: "เพิ่ม",
  AddingDots: "กำลังเพิ่ม ...",
  AddComment: "เพิ่มความคิดเห็น",  // & dupl t.e.AddCommentC
  Admin: "ผู้ดูแลระบบ",
  AdvSearch: "ค้นหาขั้นสูง",
  Anonym: "ไม่ระบุตัวตน",
  Away: "ไม่อยู่",
  Back: "กลับ",
  BlogN: "บล็อก",
  Bookmarks: "บุ๊กมาร์ก",
  Cancel: "ยกเลิก",
  Categories: "หมวดหมู่",
  Category: "หมวดหมู่",
  ChangeV: "เปลี่ยน",
  ClickToShow: "คลิกเพื่อแสดง",
  ChangeDots: "เปลี่ยน ...",
  ChatN: "แชท",
  Chatting: "กำลังแชท",
  CheckYourEmail: "ตรวจสอบอีเมลของคุณ",
  Close: "ปิด",
  closed: "ปิดแล้ว",
  comments: "ความคิดเห็น",   // as in:  "123 comments"
  Continue: "ดำเนินการต่อ",
  Created: "สร้างแล้ว",
  Delete: "ลบ",
  Deleted: "ลบแล้ว",
  DirectMessage: "ข้อความส่วนตัว",
  Discussion: "การสนทนา",
  discussion: "การสนทนา",
  done: "เสร็จสิ้น",
  EditV: "แก้ไข",
  Editing: "กำลังแก้ไข",
  EmailC: "อีเมล: ",   // copy t.cud.EmailC to here
  EmailAddress: "ที่อยู่อีเมล",
  EmailAddresses: "ที่อยู่อีเมล",
  EmailSentD: "ส่งอีเมลแล้ว",
  Forum: "ฟอรัม",
  GetNotifiedAbout: "รับการแจ้งเตือนเกี่ยวกับ",
  GroupsC: "กลุ่ม:",
  Hide: "ซ่อน",
  Home: "หน้าแรก",
  Idea: "ไอเดีย",
  Join: "เข้าร่วม",
  KbdShrtcsC: "ปุ่มลัดคีย์บอร์ด: ",
  Loading: "กำลังโหลด...",
  LoadMore: "โหลดเพิ่มเติม ...",
  LogIn: "เข้าสู่ระบบ",
  LoggedInAs: "เข้าสู่ระบบในชื่อ ",
  LogOut: "ออกจากระบบ",
  Maybe: "อาจจะ",
  Manage: "จัดการ",
  Members: "สมาชิก",
  MessageN: "ข้อความ",
  MoreDots: "เพิ่มเติม...",
  Move: "ย้าย",
  Name: "ชื่อ",
  NameC: "ชื่อ:",
  NewTopic: "หัวข้อใหม่",
  NoCancel: "ไม่ ยกเลิก",
  Notifications: "การแจ้งเตือน",
  NotImplemented: "(ยังไม่รองรับ)",
  NotYet: "ยังไม่ใช่",
  NoTitle: "ไม่มีชื่อเรื่อง",
  NoTopics: "ไม่มีหัวข้อ",
  Okay: "ตกลง",
  OkayDots: "ตกลง ...",
  Online: "ออนไลน์",
  onePerLine: "หนึ่งรายการต่อบรรทัด",
  PreviewV: "ตัวอย่าง",
  Problem: "ปัญหา",
  progressN: "ความคืบหน้า",
  Question: "คำถาม",
  Recent: "ล่าสุด",
  Remove: "เอาออก",
  Reopen: "เปิดใหม่",
  ReplyV: "ตอบกลับ",
  Replying: "กำลังตอบกลับ",
  Replies: "การตอบกลับ",
  replies: "การตอบกลับ",
  Save: "บันทึก",
  SavingDots: "กำลังบันทึก ...",
  SavedDot: "บันทึกแล้ว",
  Search: "ค้นหา",
  SendMsg: "ส่งข้อความ",
  ShowPreview: "แสดงตัวอย่าง",
  SignUp: "เข้าร่วม",  // don't change to "Sign Up" [join_or_signup]
  Solution: "คำตอบ",
  started: "เริ่มต้นแล้ว",
  Summary: "สรุป",
  Submit: "ส่ง",
  Tag: "แท็ก",
  Tags: "แท็ก",
  Tools: "เครื่องมือ",
  Topics: "หัวข้อ",
  TopicTitle: "ชื่อหัวข้อ",
  TopicType: "ประเภทหัวข้อ",
  UploadingDots: "กำลังอัปโหลด...",
  Username: "ชื่อผู้ใช้",
  Users: "ผู้ใช้",
  Welcome: "ยินดีต้อนรับ",
  Wiki: "วิกิ",
  Yes: "ใช่",
  YesBye: "ใช่ ลาก่อน",
  YesDoThat: "ใช่ ทำเลย",
  You: "คุณ",
  you: "คุณ",

  // Trust levels.
  Guest:  "ผู้เยี่ยมชม",
  NewMember: "สมาชิกใหม่",
  BasicMember: "สมาชิกทั่วไป",
  FullMember: "สมาชิกเต็มตัว",
  TrustedMember: "สมาชิกที่น่าเชื่อถือ",
  RegularMember: "สมาชิกประจำที่น่าเชื่อถือ",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "สมาชิกหลัก",

  // Periods.
  PastDay: "วันที่ผ่านมา",
  PastWeek: "สัปดาห์ที่ผ่านมา",
  PastMonth: "เดือนที่ผ่านมา",
  PastQuarter: "ไตรมาสที่ผ่านมา",
  PastYear: "ปีที่ผ่านมา",
  AllTime: "ทั้งหมด",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "ด.",  // months
  daysLtr: "ว.",      // days
  hoursLtr: "ชม.",     // hours
  minsLtr: "น.",      // minutes
  secsLtr: "ว.",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 วันที่แล้ว" : `${numDays} วันที่แล้ว`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 ชั่วโมงที่แล้ว" : `${numHours} ชั่วโมงที่แล้ว`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 นาทีที่แล้ว" : `${numMins} นาทีที่แล้ว`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 วินาทีที่แล้ว" : `${numSecs} วินาทีที่แล้ว`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "จำเป็นต้องระบุอีเมล",
    NoSpcs: "กรุณาอย่าเว้นวรรค",
    InvldAddr: "ที่อยู่อีเมลไม่ถูกต้อง",
    NoBadChrs: "กรุณาอย่าใช้อักขระพิเศษ",

    // Full name input field:
    NotOnlSpcs: "กรุณาอย่าใส่แค่ช่องว่าง",
    NoAt: "กรุณาอย่าใช้ @",

    // Username input field:
    NoDash: "กรุณาอย่าใช้เครื่องหมายขีด (-)",
    DontInclAt: "ไม่ต้องใส่ @",
    StartEndLtrDgt: "เริ่มต้นและจบด้วยตัวอักษรหรือตัวเลข",
    OnlLtrNumEtc: "เฉพาะตัวอักษร (a-z, A-Z) และตัวเลข และ _ (ขีดล่าง) เท่านั้น",
    // This shown just below the username input:
    UnUnqShrt_1: "ของคุณ ",
    UnUnqShrt_2: "@ชื่อผู้ใช้",
    UnUnqShrt_3: ", สั้นและไม่ซ้ำใคร",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `ควรมีอย่างน้อย ${minLength} ตัวอักษร`,
    TooLong: (maxLength: number) => `ยาวเกินไป ควรมีไม่เกิน ${maxLength} ตัวอักษร`,
  },


  // Notification levels.

  nl: {
    EveryPost: "ทุกโพสต์",
    EveryPostInTopic: "คุณจะได้รับการแจ้งเตือนทุกครั้งที่มีการตอบกลับใหม่ในหัวข้อนี้",
    EveryPostInCat: "คุณจะได้รับการแจ้งเตือนทุกครั้งที่มีหัวข้อใหม่และการตอบกลับในหมวดหมู่นี้",
    EveryPostInTopicsWithTag: "คุณจะได้รับการแจ้งเตือนเมื่อมีหัวข้อใหม่พร้อมแท็กนี้ และการตอบกลับทั้งหมดในหัวข้อเหล่านั้น",
    EveryPostWholeSite: "คุณจะได้รับการแจ้งเตือนหัวข้อใหม่และการตอบกลับทั้งหมด จากทุกที่",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "หัวข้อใหม่",
    NewTopicsInCat: "คุณจะได้รับการแจ้งเตือนเมื่อมีหัวข้อใหม่ในหมวดหมู่นี้",
    NewTopicsWithTag: "คุณจะได้รับการแจ้งเตือนเมื่อมีหัวข้อใหม่ที่มีแท็กนี้",
    NewTopicsWholeSite: "คุณจะได้รับการแจ้งเตือนเมื่อมีหัวข้อใหม่จากทุกที่",

    Tracking: "กำลังติดตาม",

    Normal: "ปกติ",
    NormalDescr: "คุณจะได้รับการแจ้งเตือนหากมีคนคุยกับคุณ หรือตอบกลับการตอบกลับของคุณ",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "เงียบ",
    HushedDescr: "คุณจะได้รับการแจ้งเตือนเมื่อมีคนคุยกับคุณโดยตรงเท่านั้น",

    Muted: "ปิดเสียง",
    MutedTopic: "ไม่มีการแจ้งเตือน",   // removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "แก้ไข",
    Hide_1: "ซ่อน",
    Hide_2: ", คลิก ",
    Hide_3: " เพื่อเปิดใหม่",
  },


  // Forum categories

  fcs: {
    All: "ทั้งหมด", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "รายการหัวข้อ",

    // Select category dropdown

    from: "จาก",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "ใน",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "ทุกหมวดหมู่",

    // Topic sort order

    Active: "ที่ใช้งานอยู่ก่อน",      // didn't add "first" yet to transls
    ActiveDescr: "แสดงหัวข้อที่เพิ่งมีการเคลื่อนไหวก่อน",

    New: "ใหม่",
    NewDescr: "แสดงหัวข้อใหม่ล่าสุดก่อน",

    Top: "เป็นที่นิยม",              // didn't rename from Top to Popular in transls
    TopDescr: "แสดงหัวข้อที่เป็นที่นิยมก่อน",

    // Topic filter dropdown

    AllTopics: "หัวข้อทั้งหมด",

    ShowAllTopics: "แสดงหัวข้อทั้งหมด",
    ShowAllTopicsDescr: "แต่ไม่รวมหัวข้อที่ถูกลบ",

    WaitingTopics: "หัวข้อที่รออยู่",          
    OnlyWaitingDescr_1: "แสดงเฉพาะหัวข้อที่ ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "กำลังรอ ",
    OnlyWaitingDescr_3: "คำตอบหรือการดำเนินการให้เสร็จสิ้น",  // rewrote

    YourTopics: "หัวข้อของคุณ",       
    AssignedToYou: "ได้รับมอบหมายให้คุณ", 

    DeletedTopics: "แสดงที่ลบแล้ว",   
    ShowDeleted: "แสดงที่ลบแล้ว",
    ShowDeletedDescr: "แสดงหัวข้อทั้งหมด รวมถึงหัวข้อที่ถูกลบ",

    // Rightmost buttons

    ViewCategories: "ดูหมวดหมู่",  
    EditCat: "แก้ไขหมวดหมู่",
    CreateCat: "สร้างหมวดหมู่",
    CreateTopic: "สร้างหัวข้อ",
    PostIdea: "โพสต์ไอเดีย",
    AskQuestion: "ถามคำถาม",
    ReportProblem: "รายงานปัญหา",
    CreateMindMap: "สร้างแผนผังความคิด",
    CreatePage: "สร้างหน้า",

  },


  // Forum topic list

  ft: {
    ExplIcons: "คำอธิบายไอคอน...",
    IconExplanation: "คำอธิบายไอคอน:",
    ExplGenDisc: "การสนทนาทั่วไป",
    ExplQuestion: "คำถามที่ยังไม่มีคำตอบที่ยอมรับ",
    ExplAnswer: "คำถามที่มีคำตอบที่ยอมรับแล้ว",
    ExplIdea: "ไอเดีย / ข้อเสนอแนะ",
    ExplProblem: "ปัญหา",
    ExplPlanned: "สิ่งที่เรากำลังวางแผนจะทำหรือแก้ไข",
    ExplDone: "สิ่งที่ทำเสร็จแล้วหรือแก้ไขแล้ว",
    ExplClosed: "ปิดหัวข้อแล้ว",
    ExplPinned: "หัวข้อที่ปักหมุดไว้เป็นอันดับแรกเสมอ (อาจเป็นเฉพาะในหมวดหมู่ของตัวเอง)",

    PopularTopicsComma: "หัวข้อที่เป็นที่นิยม, ",
    TopFirstAllTime: "แสดงหัวข้อที่เป็นที่นิยมที่สุดก่อน ตลอดกาล",
    TopFirstPastDay: "แสดงหัวข้อที่เป็นที่นิยมในช่วงวันที่ผ่านมา",

    CatHasBeenDeleted: "หมวดหมู่นี้ถูกลบแล้ว",

    TopicsActiveFirst: "หัวข้อ, ที่เพิ่งมีการเคลื่อนไหวก่อน",
    TopicsNewestFirst: "หัวข้อ, ใหม่ล่าสุดก่อน",

    CreatedOn: "สร้างเมื่อ ",
    LastReplyOn: "\nตอบกลับล่าสุดเมื่อ ",
    EditedOn: "\nแก้ไขล่าสุดเมื่อ ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "สร้างหัวข้อนี้",
    frequentPoster: "โพสต์บ่อย",
    mostRecentPoster: "โพสต์ล่าสุด",

    inC: "ใน: ",

    TitleFixed: "สิ่งนี้ได้รับการแก้ไขแล้ว",
    TitleDone: "สิ่งนี้ทำเสร็จแล้ว",
    TitleStarted: "เราได้เริ่มดำเนินการนี้แล้ว",
    TitleStartedFixing: "เราได้เริ่มแก้ไขสิ่งนี้แล้ว",
    TitleUnsolved: "นี่เป็นปัญหาที่ยังไม่ได้รับการแก้ไข",
    TitleIdea: "นี่คือไอเดีย",
    TitlePlanningFix: "เรากำลังวางแผนที่จะแก้ไขสิ่งนี้",
    TitlePlanningDo: "เรากำลังวางแผนที่จะทำสิ่งนี้",
    TitleChat: "นี่คือช่องแชท",
    TitlePrivateChat: "นี่คือช่องแชทส่วนตัว",
    TitlePrivateMessage: "ข้อความส่วนตัว",
    TitleInfoPage: "นี่คือหน้าข้อมูล",
    TitleDiscussion: "การสนทนา",
    IsPinnedGlobally: "\nหัวข้อนี้ถูกปักหมุดไว้ทั่วโลก จึงแสดงเป็นอันดับแรก",
    IsPinnedInCat: "\nหัวข้อนี้ถูกปักหมุดไว้ในหมวดหมู่ จึงแสดงเป็นอันดับแรกในหมวดหมู่นี้",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "หัวข้อล่าสุด (ที่กำลังรอ)",
    RecentTopicsInclDel: "หัวข้อล่าสุด (รวมที่ถูกลบ)",
    RecentTopics: "หัวข้อล่าสุด",
    _replies: " การตอบกลับ",
    _deleted: " (ลบแล้ว)",
    _defCat: " (หมวดหมู่เริ่มต้น)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "โพสต์ล่าสุด",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " ออนไลน์ในแชทนี้",    // example: "5 online in this chat"
    NumOnlForum: " ออนไลน์ในฟอรัมนี้",

    // Open left-sidebar button title.
    WatchbBtn: "หัวข้อของคุณ",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "หัวข้อล่าสุดของคุณ, แชทที่เข้าร่วม, ข้อความส่วนตัว",

    // Title shown on user profile pages.
    AbtUsr: "เกี่ยวกับผู้ใช้",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "กลับจากโปรไฟล์ผู้ใช้",
    BackFromAdm: "กลับจากพื้นที่ผู้ดูแลระบบ",

    // Title shown on full text search page.
    SearchPg: "หน้าการค้นหา",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "เพิ่ม ...",
    RecentlyViewed: "หัวข้อที่เพิ่งดูล่าสุด",  // " topics"
    JoinedChats: "แชทที่เข้าร่วม",
    ChatChannels: "ช่องแชท",
    CreateChat: "สร้างช่องแชท",
    DirectMsgs: "ข้อความส่วนตัว",
    NoChats: "ไม่มี",    // meaning: "No chat messages"
    NoDirMsgs: "ไม่มี",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "การดำเนินการกับหัวข้อ",
    ViewPeopleHere: "ดูผู้คนที่นี่",
    ViewAddRemoveMembers: "ดู / เพิ่ม / ลบ สมาชิก",
    ViewChatMembers: "ดูสมาชิกแชท",
    EditChat: "แก้ไขคำอธิบายแชท",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "ออกจากแชทนี้",
    LeaveThisCommunity: "ออกจากชุมชนนี้",
    JoinThisCommunity: "เข้าร่วมชุมชนนี้",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "ความคิดเห็นล่าสุดในหัวข้อนี้:",
    NoComments: "ไม่มีความคิดเห็น",

    YourBookmarks: "บุ๊กมาร์กของคุณ:",

    UsersOnline: "ผู้ใช้ออนไลน์:",
    UsersOnlineForum: "ผู้ใช้ออนไลน์ในฟอรัมนี้:",
    UsersInThisChat: "ผู้ใช้ในแชทนี้:",
    UsersInThisTopic: "ผู้ใช้ในหัวข้อนี้:",

    GettingStartedGuide: "คู่มือผู้ดูแลระบบ", // in other langs, was: "Getting Started Guide".
    AdminGuide: "คู่มือผู้ดูแลระบบ",          // ... but what? It's here already, just reuse this transl field
    Guide: "คู่มือ",

    // How to hide the sidebar.
    CloseShortcutS: "ปิด (ปุ่มลัด: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "เพิ่มคนอื่นๆ",

    // Shown next to one's own username, in a list of users.
    thatsYou: "นั่นคือคุณ",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "ดูเหมือนจะมีแค่คุณ",
    YouAnd: "คุณ และ ",
    NumStrangers: (numStrangers: number) => {
      const people = " คน";
      const have = "";
      return numStrangers + people + " ที่ยังไม่ได้เข้าสู่ระบบ";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "การตอบกลับทางด้านซ้ายอาจถูกจัดเรียงตาม ",
    bestFirst: "ดีที่สุดก่อน",
    ButBelow: "แต่ด้านล่างนี้ ",
    insteadBy: " การตอบกลับชุดเดียวกันถูกจัดเรียงตาม ",
    newestFirst: "ใหม่ล่าสุดก่อน",

    SoIfLeave: "ดังนั้นหากคุณออกไปและกลับมาที่นี่ในภายหลัง คุณจะพบกับ ",
    allNewReplies: "การตอบกลับใหม่ทั้งหมด",
    Click: "คลิก",
    aReplyToReadIt: " ที่การตอบกลับด้านล่างเพื่ออ่านฉบับเต็ม เพราะด้านล่างนี้จะแสดงเพียงบางส่วนเท่านั้น",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "คลิกเพื่อเปลี่ยนสถานะ",
    ClickToViewAnswer: "คลิกเพื่อดูคำตอบ",
    ViewAnswer: "ดูคำตอบ",
    ChangeStatusC: "เปลี่ยนสถานะเป็น:",
    ChangeCatC: "เปลี่ยนหมวดหมู่:",
    ChangeTopicTypeC: "เปลี่ยนประเภทหัวข้อ:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "คำถาม",
    hasAccptAns: "มีคำตอบที่ยอมรับแล้ว",
    aProblem: "ปัญหา",
    planToFix: "แผนการแก้ไข",
    anIdea: "ไอเดีย",
    planToDo: "แผนการดำเนินการ",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "ฟอร์มนี้ถูก ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "ปิดแล้ว คุณไม่สามารถกรอกข้อมูลและส่งโพสต์ได้อีก",

    ThisTopicClosed_1: "หัวข้อนี้ถูก ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". คุณยังคงสามารถโพสต์ความคิดเห็นได้",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "หน้านี้ถูกลบแล้ว",
    CatDeldPageToo: "หมวดหมู่ถูกลบ ดังนั้นหน้านี้จึงถูกลบไปด้วย",

    ThreadDeld: "เธรดถูกลบแล้ว",
    CmntDeld: "ความคิดเห็นถูกลบแล้ว",
    PostDeld: "โพสต์ถูกลบแล้ว",
    DiscDeld: "การสนทนาถูกลบแล้ว",
    PageDeld: "หน้าถูกลบแล้ว",
    PagePendAppr: "หน้าที่รอการอนุมัติ",
    TitlePendAppr: "ชื่อเรื่องที่รอการอนุมัติ",
    TextPendingApproval: "ข้อความที่รอการอนุมัติ",

    TooltipQuestClosedNoAnsw: "คำถามนี้ถูกปิดแล้วโดยไม่มีคำตอบที่ยอมรับ",
    TooltipTopicClosed: "หัวข้อนี้ปิดแล้ว",

    TooltipQuestSolved: "นี่คือคำถามที่ได้รับคำตอบแล้ว",
    TooltipQuestUnsolved: "นี่คือคำถามที่ยังไม่ได้รับคำตอบ",

    StatusDone: "เสร็จสิ้น",
    TooltipProblFixed: "สิ่งนี้ได้รับการแก้ไขแล้ว",
    TooltipDone: "สิ่งนี้ทำเสร็จแล้ว",

    StatusStarted: "เริ่มต้นแล้ว",
    TooltipFixing: "เราได้เริ่มแก้ไขสิ่งนี้แล้ว",      // "We're currently" —> "We've started"
    TooltipImplementing: "เราได้เริ่มดำเนินการนี้แล้ว", //  -""-

    StatusPlanned: "วางแผนไว้",
    TooltipProblPlanned: "เรากำลังวางแผนที่จะแก้ไขสิ่งนี้",
    TooltipIdeaPlanned: "เรากำลังวางแผนที่จะทำสิ่งนี้",   // or "to implement this"?

    StatusNew: "ใหม่",
    StatusNewDtl: "หัวข้อใหม่ อยู่ระหว่างการสนทนา",
    TooltipUnsProbl: "นี่เป็นปัญหาที่ยังไม่ได้รับการแก้ไข",
    TooltipIdea: "นี่คือไอเดีย",

    TooltipPersMsg: "ข้อความส่วนตัว",
    TooltipChat: "# หมายถึงช่องแชท",
    TooltipPrivChat: "นี่คือช่องแชทส่วนตัว",

    TooltipPinnedGlob: "\nปักหมุดไว้ทั่วโลก",
    TooltipPinnedCat: "\nปักหมุดไว้ในหมวดหมู่นี้",

    SolvedClickView_1: "แก้ไขแล้วในโพสต์ที่ #",
    SolvedClickView_2: ", คลิกเพื่อดู",

    PostHiddenClickShow: "โพสต์ถูกซ่อนไว้ คลิกเพื่อแสดง",
    ClickSeeMoreRepls: "แสดงการตอบกลับเพิ่มเติม",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "แสดงความคิดเห็นเพิ่มเติม",  
    ClickSeeThisComment: "คลิกเพื่อแสดงความคิดเห็นนี้",
    clickToShow: "คลิกเพื่อแสดง",

    ManyDisagree: "หลายคนไม่เห็นด้วยกับสิ่งนี้:",
    SomeDisagree: "บางคนไม่เห็นด้วยกับสิ่งนี้:",

    PendAppr: "รอการอนุมัติ",
    CmtPendAppr: "ความคิดเห็นรอการอนุมัติ โพสต์เมื่อ ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "ความคิดเห็นของคุณ" : "ความคิดเห็น") + " ด้านล่างนี้กำลังรอการอนุมัติ",

    _and: " และ",

    repliesTo: "การตอบกลับไปยัง",
    InReplyTo: "ตอบกลับไปยัง",
    YourReplyTo: "การตอบกลับของคุณไปยัง ",  
    YourChatMsg: "ข้อความแชทของคุณ: ",   
    YourDraft: "ร่างของคุณ",    
    YourEdits: "การแก้ไขของคุณ: ",   
    YourProgrNoteC: "บันทึกความคืบหน้าของคุณ:",  
    aProgrNote: "บันทึกความคืบหน้า: ",  

    ReplyingToC: "กำลังตอบกลับไปยัง:",    
    ScrollToPrevw_1: "เลื่อนไปที่ ",  
    ScrollToPrevw_2: "ตัวอย่าง",     

    UnfinEdits: "การแก้ไขที่ยังไม่เสร็จสิ้น",  
    ResumeEdting: "แก้ไขต่อ",  
    DelDraft: "ลบฉบับร่าง",   

    ClickViewEdits: "คลิกเพื่อดูการแก้ไขเก่า",

    By: "โดย ", // ... someones name

    // Discussion ...
    aboutThisIdea: "เกี่ยวกับวิธีและว่าจะทำไอเดียนี้หรือไม่",
    aboutThisProbl: "เกี่ยวกับวิธีและว่าจะแก้ไขปัญหานี้หรือไม่",

    AddProgrNote: "เพิ่มบันทึกความคืบหน้า",
    // Progress ...
    withThisIdea: "กับการทำไอเดียนี้",
    withThisProbl: "กับการจัดการปัญหานี้",
    withThis: "กับการทำสิ่งนี้",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "การแจ้งเตือนเกี่ยวกับหัวข้อนี้:",

    // If is a direct message topic, members listed below this text.
    Msg: "ข้อความ",

    SmrzRepls: "สรุปการตอบกลับ",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `มีการตอบกลับ ${numReplies} รายการ ใช้เวลาอ่านโดยประมาณ: ${minutes} นาที`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `เสร็จสิ้น สรุปการตอบกลับ ${numSummarized} รายการ จากทั้งหมด ${numShownBefore} รายการที่แสดงก่อนหน้านี้`,
  },


  // Post actions

  pa: {
    CloseTopic: "ปิดหัวข้อ",  
    CloseOwnQuestionTooltip: "ปิดคำถามนี้หากคุณไม่ต้องการคำตอบแล้ว",
    CloseOthersQuestionTooltip: "ปิดคำถามนี้หากไม่ต้องการคำตอบแล้ว เช่น หากเป็นหัวข้อที่ไม่เกี่ยวข้องหรือมีคำตอบในหัวข้ออื่นแล้ว",
    CloseToDoTooltip: "ปิดรายการที่ต้องทำนี้หากไม่จำเป็นต้องทำหรือแก้ไขแล้ว",
    CloseTopicTooltip: "ปิดหัวข้อนี้หากไม่จำเป็นต้องพิจารณาเพิ่มเติม",

    AcceptBtnExpl: "ยอมรับสิ่งนี้เป็นคำตอบสำหรับคำถามหรือปัญหา",
    SolutionQ: "คำตอบ?",
    ClickUnaccept: "คลิกเพื่อยกเลิกการยอมรับคำตอบนี้",
    PostAccepted: "โพสต์นี้ได้รับการยอมรับว่าเป็นคำตอบแล้ว",

    NumLikes: (num: number) => num === 1 ? "1 ถูกใจ" : num + " ถูกใจ",
    NumDisagree: (num: number) => num + " ไม่เห็นด้วย",
    NumBury: (num: number) => num === 1 ? "1 ฝัง" : num + " ฝัง",
    NumUnwanted: (num: number) => num === 1 ? "1 ไม่ต้องการ" : num + " ไม่ต้องการ",

    MoreVotes: "คะแนนเสียงเพิ่มเติม...",
    LikeThis: "ถูกใจสิ่งนี้",
    LinkToPost: "ลิงก์ไปยังโพสต์นี้",
    Report: "รายงาน",
    ReportThisPost: "รายงานโพสต์นี้",
    Admin: "ผู้ดูแลระบบ",
    DiscIx: "ดัชนีการสนทนา",

    Disagree: "ไม่เห็นด้วย",
    DisagreeExpl: "คลิกที่นี่เพื่อไม่เห็นด้วยกับโพสต์นี้ หรือเพื่อเตือนผู้อื่นเกี่ยวกับข้อผิดพลาดของข้อมูล",
    Bury: "ฝัง",
    BuryExpl: "คลิกเพื่อจัดเรียงโพสต์อื่นก่อนโพสต์นี้ เฉพาะทีมงานฟอรัมเท่านั้นที่สามารถเห็นการลงคะแนนของคุณ",
    Unwanted: "ไม่ต้องการ",
    UnwantedExpl: "หากคุณไม่ต้องการให้โพสต์นี้อยู่บนเว็บไซต์นี้ สิ่งนี้จะลดความเชื่อถือที่มีต่อผู้เขียนโพสต์ เฉพาะทีมงานฟอรัมเท่านั้นที่สามารถเห็นการลงคะแนนของคุณ",

    AddTags: "เพิ่ม/ลบ แท็ก",
    UnWikify: "ยกเลิกวิกิ",
    Wikify: "ทำให้เป็นวิกิ",
    PinDeleteEtc: "ปักหมุด / ลบ / หมวดหมู่ ...",
  },


  // Share dialog

  sd: {
    Copied: "คัดลอกแล้ว",
    CtrlCToCopy: "กด CTRL+C เพื่อคัดลอก",
    ClickToCopy: "คลิกเพื่อคัดลอกลิงก์",
  },


  // Chat

  c: {
    About_1: "นี่คือช่องแชท ",
    About_2: " สร้างโดย ",
    ScrollUpViewComments: "เลื่อนขึ้นเพื่อดูความคิดเห็นเก่า",
    Purpose: "วัตถุประสงค์:",
    MessageDeleted: "(ข้อความถูกลบ)",
    JoinThisChat: "เข้าร่วมแชทนี้",
    PostMessage: "โพสต์ข้อความ",
    AdvancedEditor: "ตัวแก้ไขขั้นสูง",
    TypeTitle: "พิมพ์หัวเรื่อง — แชทนี้เกี่ยวกับอะไร ในไม่กี่คำ?",
    TypePurpose: "พิมพ์วัตถุประสงค์ — สามารถยาวกว่าหัวเรื่องและอธิบายได้ละเอียดกว่า",
    TypeHere: "พิมพ์ที่นี่ คุณสามารถใช้ Markdown และ HTML ได้",
  },


  // My Menu

  mm: {
    NeedsReview: "รอการตรวจสอบ ",
    AdminHelp: "ความช่วยเหลือสำหรับผู้ดูแลระบบ ",
    StaffHelp: "ความช่วยเหลือสำหรับทีมงาน ",
    DraftsEtc: "ร่างจดหมาย, บุ๊กมาร์ก, งาน",
    MoreNotfs: "ดูการแจ้งเตือนทั้งหมด",
    DismNotfs: "ทำเครื่องหมายทั้งหมดว่าอ่านแล้ว",
    ViewProfile: "ดูโปรไฟล์ของคุณ",
    ViewGroups: "ดูกลุ่ม",
    LogOut: "ออกจากระบบ",
    UnhideHelp: "แสดงข้อความช่วยเหลือ",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "เลื่อนไปที่:",
    Scroll: "เลื่อน",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "ก",
    Back_2: "ลับ",
    BackExpl: "เลื่อนกลับไปยังตำแหน่งก่อนหน้าของคุณในหน้านี้",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "บนสุดของหน้า",
    PgTopHelp: "ไปที่ด้านบนสุดของหน้า ปุ่มลัด: 1",
    Repl: "การตอบกลับ",
    ReplHelp: "ไปที่ส่วนการตอบกลับ ปุ่มลัด: 2",
    Progr: "ความคืบหน้า",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "ไปที่ส่วนความคืบหน้า ปุ่มลัด: 3",
    PgBtm: "ล่างสุดของหน้า",
    Btm: "ล่างสุด",
    BtmHelp: "ไปที่ด้านล่างสุดของหน้า ปุ่มลัด: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", และ ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " เพื่อเลื่อนกลับ",
  },


  // Select users dialog
  sud: {
    SelectUsers: "เลือกผู้ใช้",
    AddUsers: "เพิ่มผู้ใช้",
  },


  // About user dialog

  aud: {
    IsMod: "เป็นผู้ดูแล (Moderator)",
    IsAdm: "เป็นผู้ดูแลระบบ (Administrator)",
    IsDeld: "ถูกระงับการใช้งานหรือถูกลบแล้ว",
    ThisIsGuest: "นี่คือผู้เยี่ยมชม ซึ่งอาจจะเป็นใครก็ได้",
    ViewInAdm: "ดูในพื้นที่ผู้ดูแลระบบ",
    ViewProfl: "ดูโปรไฟล์",
    ViewComments: "ดูความคิดเห็นอื่นๆ",
    RmFromTpc: "เอาออกจากหัวข้อ",
    EmAdrUnkn: "ไม่ทราบที่อยู่อีเมล — ผู้เยี่ยมชมรายนี้จะไม่ได้รับการแจ้งเตือนเกี่ยวกับการตอบกลับ",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "การตั้งค่า",
    Invites: "คำเชิญ",
    DraftsEtc: "ฉบับร่าง ฯลฯ",
    About: "เกี่ยวกับ",
    Privacy: "ความเป็นส่วนตัว",
    Security: "ความปลอดภัย",
    Account: "บัญชี",
    Interface: "ส่วนติดต่อผู้ใช้",

    // ----- Overview stats

    JoinedC: "เข้าร่วมเมื่อ: ",
    PostsMadeC: "โพสต์ที่สร้าง: ",
    LastPostC: "โพสต์ล่าสุด: ",
    LastSeenC: "เห็นล่าสุดเมื่อ: ",
    TrustLevelC: "ระดับความน่าเชื่อถือ: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "อัปโหลดรูปภาพ",
    ChangePhoto: "เปลี่ยนรูปภาพ",
    ImgTooSmall: "รูปภาพเล็กเกินไป: ควรมีขนาดอย่างน้อย 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "เฉพาะทีมงานและสมาชิกหลักที่เชื่อถือได้เท่านั้นที่เห็นสิ่งนี้",
    OnlyMbrsCanSee: "เฉพาะผู้ที่เป็นสมาชิกที่ใช้งานมาระยะหนึ่งแล้วเท่านั้นที่เห็นสิ่งนี้",
    Nothing: "ไม่มีอะไรจะแสดง",
    Posts: "โพสต์",
    NoPosts: "ไม่มีโพสต์",
    Topics: "หัวข้อ",
    NoTopics: "ไม่มีหัวข้อ",

    // ----- User status

    UserBanned: "ผู้ใช้รายนี้ถูกแบน",
    UserSuspended: (dateUtc: string) => `ผู้ใช้รายนี้ถูกระงับการใช้งานจนถึง ${dateUtc} UTC`,
    ReasonC: "เหตุผล: ",

    DeactOrDeld: "ถูกระงับการใช้งานหรือถูกลบแล้ว",
    isGroup: " (กลุ่ม)",
    isGuest: " — ผู้เยี่ยมชม อาจเป็นใครก็ได้",
    isMod: " – ผู้ดูแล (Moderator)",
    isAdmin: " – ผู้ดูแลระบบ (Administrator)",
    you: "(คุณ)",

    // ----- Notifications page

    NoNotfs: "ไม่มีการแจ้งเตือน",
    NotfsToYouC: "การแจ้งเตือนถึงคุณ:",
    NotfsToOtherC: (name: string) => `การแจ้งเตือนถึง ${name}:`,
    DefNotfsSiteWide: "การแจ้งเตือนเริ่มต้น ทั่วทั้งไซต์",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "สำหรับ",

    // ----- Drafts Etc page

    NoDrafts: "ไม่มีฉบับร่าง",
    YourDraftsC: "ฉบับร่างของคุณ:",
    DraftsByC: (name: string) => `ฉบับร่างโดย ${name}:`,

    // ----- Invites page

    InvitesIntro: "คุณสามารถเชิญผู้คนให้เข้าร่วมไซต์นี้ได้ที่นี่ ",
    InvitesListedBelow: "คำเชิญที่คุณส่งไปแล้วจะแสดงอยู่ด้านล่าง",
    NoInvites: "คุณยังไม่ได้เชิญใครเลย",

    InvitedEmail: "อีเมลที่เชิญ",
    WhoAccepted: "สมาชิกที่ตอบรับ",
    InvAccepted: "ตอบรับคำเชิญแล้ว",
    InvSent: "ส่งคำเชิญแล้ว",
    JoinedAlready: "เข้าร่วมแล้ว",

    SendAnInv: "เชิญผู้คน", // was: "Send an Invite",   
    SendInv: "ส่งคำเชิญ",   // is just "Send invite" (singularis) in all other langs
    SendInvExpl:  
        "เราจะส่งอีเมลสั้นๆ ให้เพื่อนของคุณ พวกเขาเพียงแค่คลิกลิงก์เพื่อเข้าร่วมได้ทันทีโดยไม่ต้องเข้าสู่ระบบ " +
        "พวกขาจะกลายเป็นสมาชิกปกติ ไม่ใช่ผู้ดูแลหรือผู้ดูแลระบบ",
    //EnterEmail: "Enter email(s)",
    InvDone: "เสร็จสิ้น ฉันจะส่งอีเมลหาพวกเขา",
    NoOneToInv: "ไม่มีใครให้เชิญ",
    InvNotfLater: "ฉันจะแจ้งให้คุณทราบในภายหลังเมื่อฉันเชิญพวกเขาแล้ว",
    AlreadyInvSendAgainQ: "คนเหล่านี้เคยถูกเชิญแล้ว — คุณต้องการเชิญพวกเขาอีกครั้งไหม?",
    InvErr_1: "สิ่งเหล่านี้ทำให้เกิด ",
    InvErr_2: "ข้อผิดพลาด",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "คนเหล่านี้เข้าร่วมแล้ว ฉันจึงไม่ได้เชิญพวกเขา:",
    ResendInvsQ: "ส่งคำเชิญใหม่ให้คนเหล่านี้ไหม? พวกเขาเคยถูกเชิญไปแล้ว",
    InvAgain: "เชิญอีกครั้ง",

    // ----- Preferences, About

    AboutYou: "เกี่ยวกับคุณ",
    WebLink: "เว็บไซต์หรือหน้าเว็บของคุณ",

    NotShownCannotChange: "ไม่แสดงต่อสาธารณะ ไม่สามารถเปลี่ยนได้",

    // The full name or alias:
    NameOpt: "ชื่อ (ไม่บังคับ)",

    NotShown: "ไม่แสดงต่อสาธารณะ",

    // The username:
    MayChangeFewTimes: "คุณสามารถเปลี่ยนได้เพียงไม่กี่ครั้งเท่านั้น",
    notSpecified: "(ไม่ได้ระบุ)",
    ChangeUsername_1: "คุณสามารถเปลี่ยนชื่อผู้ใช้ได้เพียงไม่กี่ครั้งเท่านั้น",
    ChangeUsername_2: "การเปลี่ยนบ่อยเกินไปอาจทำให้ผู้อื่นสับสน — " +
        "พวกเขาจะไม่รู้วิธีกล่าวถึง (@mention) คุณ",

    NotfAboutAll: "รับการแจ้งเตือนเกี่ยวกับทุกโพสต์ใหม่ (เว้นแต่คุณจะปิดเสียงหัวข้อหรือหมวดหมู่)",
    NotfAboutNewTopics: "รับการแจ้งเตือนเกี่ยวกับหัวข้อใหม่ (เว้นแต่คุณจะปิดเสียงหมวดหมู่)",

    ActivitySummaryEmails: "อีเมลสรุปกิจกรรม",

    EmailSummariesToGroup:
        "เมื่อสมาชิกของกลุ่มนี้ไม่มาเยี่ยมชมที่นี่ ให้ส่งอีเมลสรุปหัวข้อที่ได้รับความนิยมและสิ่งอื่นๆ ให้พวกเขาโดยอัตโนมัติ",
    EmailSummariesToMe:
        "เมื่อฉันไม่มาเยี่ยมชมที่นี่ ให้ส่งอีเมลสรุปหัวข้อที่ได้รับความนิยมและสิ่งอื่นๆ ให้ฉัน",

    AlsoIfTheyVisit: "ส่งอีเมลหาพวกเขาด้วยหากพวกเขามาเยี่ยมชมเป็นประจำ",
    AlsoIfIVisit: "ส่งอีเมลหาฉันด้วยหากฉันมาเยี่ยมชมเป็นประจำ",

    HowOftenWeSend: "เราควรส่งอีเมลเหล่านี้บ่อยแค่ไหน?",
    HowOftenYouWant: "คุณต้องการรับอีเมลเหล่านี้บ่อยแค่ไหน?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "ซ่อนกิจกรรมล่าสุดของคุณจากคนแปลกหน้าและสมาชิกใหม่หรือไม่?",
    HideActivityStrangers_2: "(แต่ไม่ใช่สำหรับผู้ที่เป็นสมาชิกที่ใช้งานมาระยะหนึ่งแล้ว)",
    HideActivityAll_1: "ซ่อนกิจกรรมล่าสุดของคุณจากทุกคนหรือไม่?",
    HideActivityAll_2: "(ยกเว้นทีมงานและสมาชิกหลักที่เชื่อถือได้)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "ที่อยู่อีเมล",
    PrimaryDot: "หลัก ",
    VerifiedDot: "ยืนยันแล้ว ",
    NotVerifiedDot: "ยังไม่ได้ยืนยัน ",
    ForLoginWithDot: (provider: string) => `สำหรับการเข้าสู่ระบบด้วย ${provider} `,
    MakePrimary: "ทำให้เป็นอีเมลหลัก",
    AddEmail: "เพิ่มที่อยู่อีเมล",
    TypeNewEmailC: "พิมพ์ที่อยู่อีเมลใหม่:",
    MaxEmailsInfo: (numMax: number) => `(คุณไม่สามารถเพิ่มที่อยู่ได้เกิน ${numMax} รายการ)`,
    EmailAdded_1: "เพิ่มแล้ว เราได้ส่งอีเมลยืนยันให้คุณแล้ว — ",
    EmailAdded_2: "ตรวจสอบกล่องจดหมายของคุณ",
    SendVerifEmail: "ส่งอีเมลยืนยัน",

    EmailStatusExpl:
        "('หลัก' หมายถึงคุณสามารถเข้าสู่ระบบผ่านที่อยู่นี้ และเราจะส่งการแจ้งเตือนไปที่นั่น " +
        "'ยืนยันแล้ว' หมายถึงคุณได้คลิกลิงก์ยืนยันในอีเมลยืนยันที่อยู่แล้ว)",

    // Password:
    ChangePwdQ: "เปลี่ยนรหัสผ่าน?",
    CreatePwdQ: "สร้างรหัสผ่าน?",
    WillGetPwdRstEml: "คุณจะได้รับอีเมลสำหรับตั้งรหัสผ่านใหม่",
    // This is the "None" in:  "Password: None"
    PwdNone: "ไม่มี",

    // Logins:
    LoginMethods: "วิธีการเข้าสู่ระบบ",
    commaAs: ", ในชื่อ: ",

    // One's data:
    YourContent: "เนื้อหาของคุณ",
    DownloadPosts: "ดาวน์โหลดโพสต์",
    DownloadPostsHelp: "สร้างไฟล์ JSON พร้อมสำเนาหัวข้อและความคิดเห็นที่คุณโพสต์",
    DownloadPersData: "ดาวน์โหลดข้อมูลส่วนบุคคล",
    DownloadPersDataHelp: "สร้างไฟล์ JSON พร้อมสำเนาข้อมูลส่วนบุคคลของคุณ เช่น ชื่อของคุณ " +
        "(หากคุณระบุไว้) และที่อยู่อีเมล",


    // Delete account:
    DangerZone: "เขตอันตราย",
    DeleteAccount: "ลบบัญชี",
    DeleteYourAccountQ:
        "ลบบัญชีของคุณ? เราจะลบชื่อของคุณ ลืมที่อยู่อีเมล รหัสผ่าน และ" +
        "ตัวตนออนไลน์ใดๆ (เช่น การเข้าสู่ระบบด้วย Facebook หรือ Twitter) " +
        "คุณจะไม่สามารถเข้าสู่ระบบได้อีก สิ่งนี้ไม่สามารถย้อนกลับได้",
    DeleteUserQ:
        "ลบผู้ใช้รายนี้? เราจะลบชื่อ ลืมที่อยู่อีเมล รหัสผ่าน และ" +
        "ตัวตนออนไลน์ใดๆ (เช่น การเข้าสู่ระบบด้วย Facebook หรือ Twitter) " +
        "ผู้ใช้จะไม่สามารถเข้าสู่ระบบได้อีก สิ่งนี้ไม่สามารถย้อนกลับได้",
    YesDelete: "ใช่ ลบเลย",
  },


  // Group profile page
  gpp: {
    GroupMembers: "สมาชิกกลุ่ม",
    NoMembers: "ไม่มีสมาชิก",
    MayNotListMembers: "อาจไม่แสดงรายชื่อสมาชิก",
    AddMembers: "เพิ่มสมาชิก",
    BuiltInCannotModify: "นี่เป็นกลุ่มที่สร้างมากับระบบ ไม่สามารถแก้ไขได้",
    NumMembers: (num: number) => `${num} สมาชิก`,
    YouAreMember: "คุณเป็นสมาชิก",
    CustomGroupsC: "กลุ่มที่กำหนดเอง:",
    BuiltInGroupsC: "กลุ่มที่สร้างมากับระบบ:",
    DeleteGroup: "ลบกลุ่มนี้",
  },


  // Create user dialog

  cud: {
    CreateUser: "สร้างผู้ใช้",
    CreateAccount: "สร้างบัญชี",
    EmailC: "อีเมล:",  // REMOVE move to t.EmailC instead
    keptPriv: "จะถูกเก็บเป็นความลับ",
    forNotfsKeptPriv: "สำหรับการแจ้งเตือนการตอบกลับ จะถูกเก็บเป็นความลับ",
    EmailVerifBy_1: "อีเมลของคุณได้รับการยืนยันโดย ",
    EmailVerifBy_2: ".",
    UsernameC: "ชื่อผู้ใช้:",
    FullNameC: "ชื่อเต็ม:",
    optName: "ไม่บังคับ",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "สร้างบัญชีแล้ว คุณได้เข้าสู่ระบบแล้ว",  // COULD say if verif email sent too?
    AlmostDone:
        "เกือบจะเสร็จแล้ว! คุณเพียงแค่ต้องยืนยันที่อยู่อีเมลของคุณ เราได้ส่งอีเมล" +
        "หาคุณแล้ว โปรดคลิกลิงก์ในอีเมลเพื่อเปิดใช้งานบัญชีของคุณ คุณสามารถปิดหน้านี้ได้",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "ข้อกำหนดและความเป็นส่วนตัว",

    Accept_1: "คุณยอมรับ ",
    TermsOfService: "ข้อกำหนดในการให้บริการ",
    TermsOfUse: "ข้อกำหนดการใช้งาน",
    Accept_2: " และ ",
    PrivPol: "นโยบายความเป็นส่วนตัว",
    Accept_3_User: " ของเราหรือไม่?",
    Accept_3_Owner: " สำหรับเจ้าของไซต์หรือไม่?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "ใช่ ฉันยอมรับ",
  },


  // Password input

  pwd: {
    PasswordC: "รหัสผ่าน:",
    StrengthC: "ความแข็งแกร่ง: ",
    FairlyWeak: "ค่อนข้างอ่อนแอ",
    toShort: "สั้นเกินไป",
    TooShort: (minLength: number) => `สั้นเกินไป ควรมีอย่างน้อย ${minLength} ตัวอักษร`,
    PlzInclDigit: "โปรดรวมตัวเลขหรืออักขระพิเศษ",
    TooWeak123abc: "อ่อนแอเกินไป อย่าใช้รหัสผ่านเช่น '12345' หรือ 'abcde'",
    AvoidInclC: "หลีกเลี่ยงการรวม (บางส่วนของ) ชื่อหรืออีเมลของคุณในรหัสผ่าน:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "ไม่พบหน้าเว็บ หรือการเข้าถึงถูกปฏิเสธ",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "คุณกำลังสวมรอยเป็นผู้อื่น ซึ่งอาจไม่สามารถเข้าถึงทุกส่วนของเว็บไซต์นี้ได้",

    IfYouThinkExistsThen: "หากคุณคิดว่าหน้านี้มีอยู่จริง โปรดเข้าสู่ระบบด้วยบัญชีที่สามารถเข้าถึงได้ ",
    LoggedInAlready: "(คุณเข้าสู่ระบบอยู่แล้ว แต่บางทีอาจเป็นบัญชีที่ผิด?) ",
    ElseGoToHome_1: "หรือคุณสามารถ ",
    ElseGoToHome_2: "ไปที่หน้าหลัก",

    CreateAcconut: "สร้างบัญชี",
    ContinueWithDots: "ดำเนินการต่อด้วย ...",
    SignUp: "เข้าร่วม",
    LogIn: "เข้าสู่ระบบ",
    LogInWithPwd: "เข้าสู่ระบบด้วยรหัสผ่าน",
    CreateAdmAcct: "สร้างบัญชีผู้ดูแลระบบ:",
    AuthRequired: "ต้องมีการตรวจสอบสิทธิ์เพื่อเข้าถึงไซต์นี้",
    LogInToLike: "เข้าสู่ระบบเพื่อถูกใจโพสต์นี้",
    LogInToSubmit: "เข้าสู่ระบบและส่งข้อมูล",
    LogInToComment: "เข้าสู่ระบบเพื่อเขียนความคิดเห็น",
    LogInToCreateTopic: "เข้าสู่ระบบเพื่อสร้างหัวข้อ",

    //AlreadyHaveAcctQ: "You have an account? ",  
    OrLogIn_1: "หรือ ",         // "Or "
    OrLogIn_2: "เข้าสู่ระบบ",      // "Log in" (this is a button)
    OrLogIn_3: " แทน",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "หรือ ",
    SignUpInstead_2: "สร้างบัญชี", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", หรือแค่ ",
    OrTypeName_2: "พิมพ์ชื่อ",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "หรือสร้างบัญชี:",
    OrTypeName: "หรือพิมพ์ชื่อของคุณ:",
    OrLogIn: "หรือเข้าสู่ระบบ:",
    YourNameQ: "ชื่อของคุณ?",

    BadCreds: "ชื่อผู้ใช้หรือรหัสผ่านผิด",

    UsernameOrEmailC: "ชื่อผู้ใช้หรืออีเมล:",
    PasswordC: "รหัสผ่าน:",
    ForgotPwd: "คุณลืมรหัสผ่านใช่หรือไม่?",

    NoPwd: "คุณยังไม่ได้เลือกรหัสผ่าน",
    CreatePwd: "สร้างรหัสผ่าน",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "โปรดบอกเราว่าคุณกังวลเกี่ยวกับเรื่องใด",
    ThanksHaveReported: "ขอบคุณ คุณได้รายงานแล้ว ทีมงานฟอรัมจะตรวจสอบในภายหลัง",
    ReportComment: "รายงานความคิดเห็น",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "โพสต์นี้มีข้อมูลส่วนบุคคล เช่น ชื่อจริงของใครบางคน",
    OptOffensive: "โพสต์นี้มีเนื้อหาที่ก้าวร้าวหรือหยาบคาย",
    OptSpam: "โพสต์นี้เป็นโฆษณาที่ไม่ต้องการ",
    OptOther: "แจ้งทีมงานเกี่ยวกับโพสต์นี้ด้วยเหตุผลอื่น",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "คุณสามารถแสดงข้อความช่วยเหลือได้อีกครั้งหากคุณเข้าสู่ระบบ โดยคลิกที่" +
        "ชื่อของคุณแล้วเลือก ",
    YouCanShowAgain_2: "แสดงข้อความช่วยเหลือ",
  },


  // Editor

  e: {
    SimilarTopicsC: "หัวข้อที่คล้ายกัน:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "ขออภัย แต่ขณะนี้คุณสามารถอัปโหลดได้ทีละไฟล์เท่านั้น",
    PleaseFinishPost: "โปรดเขียนโพสต์ของคุณให้เสร็จก่อน",
    PleaseFinishChatMsg: "โปรดเขียนข้อความแชทของคุณให้เสร็จก่อน",
    PleaseFinishMsg: "โปรดเขียนข้อความของคุณให้เสร็จก่อน",
    PleaseSaveEdits: "โปรดบันทึกการแก้ไขปัจจุบันของคุณก่อน",
    PleaseSaveOrCancel: "โปรดบันทึกหรือยกเลิกหัวข้อใหม่ของคุณก่อน",
    CanContinueEditing: "คุณสามารถแก้ไขข้อความต่อได้หากเปิดตัวแก้ไขอีกครั้ง",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "โปรดอย่าลบข้อความทั้งหมด โปรดเขียนบางอย่างลงไป",
    PleaseWriteSth: "โปรดเขียนบางอย่าง",
    PleaseWriteTitle: "โปรดเขียนชื่อหัวข้อ",
    PleaseWriteMsgTitle: "โปรดเขียนชื่อเรื่องของข้อความ",
    PleaseWriteMsg: "โปรดเขียนข้อความ",

    exBold: "ข้อความตัวหนา",
    exEmph: "ข้อความตัวเอียง",
    exPre: "ข้อความที่จัดรูปแบบไว้ล่วงหน้า",
    exQuoted: "ข้อความอ้างอิง",
    ExHeading: "หัวเรื่อง",

    TitlePlaceholder: "พิมพ์ชื่อเรื่อง — เรื่องนี้เกี่ยวกับอะไร ในหนึ่งประโยคสั้นๆ?",

    EditPost_1: "แก้ไข ",
    EditPost_2: "โพสต์ ",

    TypeChatMsg: "พิมพ์ข้อความแชท:",
    YourMsg: "ข้อความของคุณ:",
    CreateTopic: "สร้างหัวข้อใหม่",
    CreateCustomHtml: "สร้างหน้า HTML ที่กำหนดเอง (เพิ่มหัวเรื่อง <h1> ของคุณเอง)",
    CreateInfoPage: "สร้างหน้าข้อมูล",
    CreateCode: "สร้างหน้าซอร์สโค้ด",
    AskQuestion: "ถามคำถาม",
    ReportProblem: "รายงานปัญหา",
    SuggestIdea: "แนะนำไอเดีย",
    NewChat: "ชื่อและวัตถุประสงค์ของแชท",  // changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "ชื่อและวัตถุประสงค์ของแชทส่วนตัว",  // changed from "New private chat" to just "Private chat".
    AppendComment: "เพิ่มความคิดเห็นที่ด้านล่างของหน้า:",

    ReplyTo: "ตอบกลับไปยัง ",
    ReplyTo_theOrigPost: "โพสต์ต้นฉบับ",
    ReplyTo_post: "โพสต์ ",
    AddCommentC: "เพิ่มความคิดเห็น:",   // & dupl t.AddComment

    PleaseSelectPosts: "โปรดเลือกโพสต์อย่างน้อยหนึ่งโพสต์เพื่อตอบกลับ",

    Save: "บันทึก",
    edits: "การแก้ไข",

    PostReply: "โพสต์การตอบกลับ",
    PostComment: "โพสต์ความคิดเห็น",

    Post: "โพสต์",
    comment: "ความคิดเห็น",
    question: "คำถาม",

    PostMessage: "โพสต์ข้อความ",
    SimpleEditor: "ตัวแก้ไขแบบง่าย",

    Send: "ส่ง",
    message: "ข้อความ",

    Create: "สร้าง",
    page: "หน้า",
    chat: "แชท",
    idea: "ไอเดีย",
    topic: "หัวข้อ",

    Submit: "ส่ง",
    problem: "ปัญหา",

    ViewOldEdits: "ดูการแก้ไขเก่า",

    UploadBtnTooltip: "อัปโหลดไฟล์หรือรูปภาพ",
    BoldBtnTooltip: "ทำให้ข้อความเป็นตัวหนา",
    EmBtnTooltip: "เน้นข้อความ (ตัวเอียง)",
    QuoteBtnTooltip: "อ้างอิง",
    PreBtnTooltip: "ข้อความที่จัดรูปแบบไว้ล่วงหน้า",
    HeadingBtnTooltip: "หัวเรื่อง",

    TypeHerePlaceholder: "พิมพ์ที่นี่ คุณสามารถใช้ Markdown และ HTML ได้ ลากและวางเพื่อวางรูปภาพ",

    Maximize: "ขยายใหญ่สุด",
    ToNormal: "กลับสู่ขนาดปกติ",
    TileHorizontally: "เรียงตามแนวนอน",

    PreviewC: "ตัวอย่าง:",
    TitleExcl: " (ไม่รวมชื่อเรื่อง)",
    ShowEditorAgain: "แสดงตัวแก้ไขอีกครั้ง",
    Minimize: "ย่อเล็กสุด",

    PreviewInfo: "คุณสามารถดูตัวอย่างได้ที่นี่ว่าโพสต์ของคุณจะออกมาเป็นอย่างไร",
    CannotType: "คุณไม่สามารถพิมพ์ที่นี่ได้",

    LoadingDraftDots: "กำลังโหลดฉบับร่าง...",
    DraftUnchanged: "ไม่มีการเปลี่ยนแปลง",
    CannotSaveDraftC: "ไม่สามารถบันทึกฉบับร่างได้:",
    DraftSavedBrwsr: "บันทึกฉบับร่างในเบราว์เซอร์แล้ว",   
    DraftSaved: (nr: string | number) => `บันทึกฉบับร่าง ${nr} แล้ว`,
    DraftDeleted: (nr: string | number) => `ลบฉบับร่าง ${nr} แล้ว`,
    WillSaveDraft: (nr: string | number) => `กำลังจะบันทึกฉบับร่าง ${nr} ...`,
    SavingDraft: (nr: string | number) => `กำลังบันทึกฉบับร่าง ${nr} ...`,
    DeletingDraft: (nr: string | number) => `กำลังลบฉบับร่าง ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "เลือกหมวดหมู่",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "เลือกประเภทหัวข้อ:",
    DiscussionExpl: "การสนทนาเกี่ยวกับบางสิ่งบางอย่าง",
    QuestionExpl: "สามารถทำเครื่องหมายการตอบกลับหนึ่งรายการว่าเป็นคำตอบที่ยอมรับได้",
    ProblExpl: "หากบางอย่างเสียหรือไม่ทำงาน สามารถทำเครื่องหมายว่าได้รับการแก้ไขแล้ว",
    IdeaExpl: "ข้อเสนอแนะ สามารถทำเครื่องหมายว่าเสร็จสิ้นหรือดำเนินการแล้ว",
    ChatExpl: "การสนทนาที่อาจไม่มีวันสิ้นสุด",
    PrivChatExpl: "มองเห็นได้เฉพาะผู้ที่ได้รับเชิญให้เข้าร่วมแชทเท่านั้น",

    CustomHtml: "หน้า HTML ที่กำหนดเอง",
    InfoPage: "หน้าข้อมูล",
    Code: "รหัส (Code)",
    EmbCmts: "ความคิดเห็นแบบฝัง",
    About: "เกี่ยวกับ",
    PrivChat: "แชทส่วนตัว",
    Form: "ฟอร์ม",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "ไม่มีชุมชนให้เข้าร่วมอีกแล้ว",
    SelCmty: "เลือกชุมชน ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "ค้นหาความช่วยเหลือ",  
    TxtToFind: "ข้อความที่ต้องการค้นหา",
  },


  // No internet

  ni: {
    NoInet: "ไม่มีการเชื่อมต่ออินเทอร์เน็ต",
    PlzRefr: "รีเฟรชหน้าเพื่อดูการเปลี่ยนแปลงล่าสุด (มีการตัดการเชื่อมต่อ)",
    RefrNow: "รีเฟรชตอนนี้",
  },


  PostDeleted: (postNr: number) => `โพสต์หมายเลข ${postNr} ถูกลบแล้ว`,
  NoSuchPost: (postNr: number) => `ไม่มีโพสต์หมายเลข ${postNr} ในหน้านี้`,
  NoPageHere: "หน้านี้ถูกลบไปแล้ว หรือไม่เคยมีอยู่จริง หรือคุณไม่ได้รับอนุญาตให้เข้าถึง",
  GoBackToLastPage: "กลับไปหน้าที่แล้ว",

};
