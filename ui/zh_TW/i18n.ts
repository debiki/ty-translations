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

var t_zh_TW: TalkyardTranslations = (t = {
  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "活躍",
  Activity: "活動",
  Add: "新增",
  AddingDots: "正在新增...",
  AddComment: "新增評論",
  Admin: "管理員",
  AdvSearch: "進階搜尋",
  Anonym: "匿名",
  Away: "離開",
  Back: "返回",
  BlogN: "網誌",
  Bookmarks: "書籤",
  Cancel: "取消",
  Categories: "分類",
  Category: "分類",
  ChangeV: "更改",
  ClickToShow: "點擊顯示",
  ChangeDots: "正在更改...",
  ChatN: "聊天",
  Chatting: "聊天中",
  CheckYourEmail: "檢查您的電子郵件",
  Close: "關閉",
  closed: "已關閉",
  comments: "評論數",
  Continue: "繼續",
  Created: "已建立",
  Delete: "刪除",
  Deleted: "已刪除",
  DirectMessage: "私訊",
  Discussion: "討論",
  discussion: "討論",
  done: "完成",
  EditV: "編輯",
  Editing: "編輯中",
  EmailC: "電子郵件：",
  EmailAddress: "電子郵件地址",
  EmailAddresses: "電子郵件地址",
  EmailSentD: "電子郵件已發送。",
  Forum: "論壇",
  GetNotifiedAbout: "獲取通知",
  GroupsC: "群組：",
  Hide: "隱藏",
  Home: "首頁",
  Idea: "想法",
  Join: "加入",
  KbdShrtcsC: "鍵盤快捷鍵：",
  Loading: "載入中...",
  LoadMore: "載入更多...",
  LogIn: "登入",
  LoggedInAs: "登入身份為",
  LogOut: "登出",
  Maybe: "或許",
  Manage: "管理",
  Members: "成員",
  MessageN: "訊息",
  MoreDots: "更多...",
  Move: "移動",
  Name: "名稱",
  NameC: "名稱：",
  NewTopic: "新話題",
  NoCancel: "不，取消",
  Notifications: "通知",
  NotImplemented: "（未實作）",
  NotYet: "尚未",
  NoTitle: "無標題",
  NoTopics: "無話題",
  Okay: "好的",
  OkayDots: "好的...",
  Online: "在線",
  onePerLine: "每行一個",
  PreviewV: "預覽",
  Problem: "問題",
  progressN: "進度",
  Question: "問題",
  Recent: "最近",
  Remove: "移除",
  Reopen: "重新開啟",
  ReplyV: "回覆",
  Replying: "回覆中",
  Replies: "回覆",
  replies: "回覆",
  Save: "儲存",
  SavingDots: "正在儲存...",
  SavedDot: "已儲存。",
  Search: "搜尋",
  SendMsg: "發送訊息",
  ShowPreview: "顯示預覽",
  SignUp: "加入",
  Solution: "解決方案",
  started: "開始",
  Summary: "摘要",
  Submit: "提交",
  Tag: "標籤",
  Tags: "標籤",
  Tools: "工具",
  Topics: "話題",
  TopicTitle: "話題標題",
  TopicType: "話題類型",
  UploadingDots: "上傳中...",
  Username: "使用者名稱",
  Users: "使用者",
  Welcome: "歡迎",
  Wiki: "維基",
  Yes: "是",
  YesBye: "是的，再見",
  YesDoThat: "是的，這樣做",
  You: "您",
  you: "您",

  // 信任等級
  Guest: "訪客",
  NewMember: "新成員",
  BasicMember: "基礎成員",
  FullMember: "完整成員",
  TrustedMember: "受信任成員",
  RegularMember: "普通成員", // 之前的 Regular Member 已經更名為 Trusted Regular [RENREGLS]
  CoreMember: "核心成員",

  // 時段
  PastDay: "過去一天",
  PastWeek: "過去一週",
  PastMonth: "過去一個月",
  PastQuarter: "過去一個季度",
  PastYear: "過去一年",
  AllTime: "全部時間",

  // 時間距離的字母縮寫
  // 例如：英文中的“3d”在論壇主題列表中表示3天前。“5h”表示5小時。
  monthsLtr: "月", // 月份
  daysLtr: "天", // 天數
  hoursLtr: "小時", // 小時數
  minsLtr: "分", // 分鐘數
  secsLtr: "秒", // 秒數

  // 時間距離的長文本版本。
  daysAgo: (numDays: number) => (numDays === 1 ? "1天前" : `${numDays}天前`),

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1小時前" : `${numHours}小時前`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1分鐘前" : `${numMins}分鐘前`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1秒鐘前" : `${numSecs}秒鐘前`,

  // 輸入欄位，例如電子郵件、姓名等。

  inp: {
    // 電子郵件地址輸入欄位：
    EmReq: "必須輸入電子郵件地址",
    NoSpcs: "請勿輸入空格",
    InvldAddr: "不是有效的電子郵件地址",
    NoBadChrs: "請勿輸入奇怪的字元",

    // 全名輸入欄位：
    NotOnlSpcs: "請勿只輸入空格",
    NoAt: "請勿輸入 @ 符號",

    // 使用者名稱輸入欄位：
    NoDash: "請勿輸入破折號（-）",
    DontInclAt: "請勿包含 @ 符號",
    StartEndLtrDgt: "必須以字母或數字開頭和結尾",
    OnlLtrNumEtc: "僅允許字母（a-z, A-Z）、數字和 _（底線）",
    // 此訊息顯示在使用者名稱輸入欄位下面：
    UnUnqShrt_1: "您的",
    UnUnqShrt_2: "@使用者名稱",
    UnUnqShrt_3: "，唯一且簡短",

    // 適用於所有輸入欄位的通用訊息：
    TooShort: (minLength: number) => `至少應為 ${minLength} 個字元`,
    TooLong: (maxLength: number) => `過長。最多應為 ${maxLength} 個字元`,
  },

  // 通知等級。

  nl: {
    EveryPost: "每篇文章",
    EveryPostInTopic: "您將收到此話題中所有新回覆的通知。",
    EveryPostInCat: "您將收到此分類中所有新話題和回覆的通知。",
    EveryPostInTopicsWithTag:
      "您將收到帶有此標籤的新話題和這些話題中所有回覆的通知。",
    EveryPostWholeSite: "您將收到任何地方的所有新話題和回覆的通知。",

    // 只會收到新話題的*第一篇*文章的通知。也就是原始文章
    // （在討論論壇話題中，第一篇文章就是原始文章）。
    NewTopics: "新話題",
    NewTopicsInCat: "您將收到此分類中的新話題的通知。",
    NewTopicsWithTag: "您將收到帶有此標籤的新話題的通知。",
    NewTopicsWholeSite: "您將收到任何地方的新話題的通知。",

    Tracking: "追蹤",

    Normal: "普通",
    NormalDescr:
      "如果有人與您交談，即使是間接地（例如回覆您的回覆），您也會收到通知。",
    //NormalTopic_1: "如果有人與您交談，或提到您的",
    //NormalTopic_2: "@name",

    Hushed: "安靜",
    HushedDescr: "只有當有人直接與您交談時，您才會收到通知。",

    Muted: "已靜音",
    MutedTopic: "沒有通知。", // MISSING 移除“關於這個話題”
  },

  // 論壇介紹文本

  fi: {
    Edit: "編輯",
    Hide_1: "隱藏",
    Hide_2: "，點擊",
    Hide_3: "重新開啟",
  },

  // 論壇分類

  fcs: {
    All: "所有分類", // "所有（分類）"，比 AllCats 更短
  },

  // 論壇按鈕

  fb: {
    TopicList: "話題列表",

    // 選擇分類下拉選單

    from: "來自", // MISSING 使用方式：“來自 <Category Name>”或“來自所有分類”
    in: "在", // MISSING 使用方式：“在 <Category Name>”或“在所有分類中”
    AllCats: "所有分類",

    // 話題排序順序
    Active: "活躍優先", // MISSING 尚未添加“優先”到翻譯中
    ActiveDescr: "優先顯示最近活躍的話題",

    New: "最新",
    NewDescr: "優先顯示最新的話題",

    Top: "熱門", // MISSING 從“置頂”改名為“熱門”。
    TopDescr: "優先顯示熱門話題",

    // 話題過濾下拉選單
    AllTopics: "所有話題",
    ShowAllTopics: "顯示所有話題",
    ShowAllTopicsDescr: "不包括已刪除的話題",
    WaitingTopics: "待處理話題",
    OnlyWaitingDescr_1: "僅顯示",
    OnlyWaitingDescr_2: "等待",
    OnlyWaitingDescr_3: "解決方案或被實施和完成的話題",
    YourTopics: "您的話題",
    AssignedToYou: "指派給您的話題",
    DeletedTopics: "顯示已刪除",
    ShowDeleted: "顯示已刪除的話題",
    ShowDeletedDescr: "顯示所有話題，包括已刪除的話題",

    // 右側按鈕

    ViewCategories: "查看分類",
    EditCat: "編輯分類",
    CreateCat: "建立分類",
    CreateTopic: "建立話題",
    PostIdea: "發布想法",
    AskQuestion: "提問",
    ReportProblem: "回報問題",
    CreateMindMap: "建立心智圖",
    CreatePage: "建立頁面",
  },

  // 論壇話題列表

  ft: {
    ExplIcons: "解釋圖示...",
    IconExplanation: "圖示說明：",
    ExplGenDisc: "一般討論。",
    ExplQuestion: "一個沒有被採納答案的問題。",
    ExplAnswer: "一個有被採納答案的問題。",
    ExplIdea: "一個想法/建議。",
    ExplProblem: "一個問題。",
    ExplPlanned: "我們正在計畫實作或修復的事情。",
    ExplDone: "已經完成或修復的事情。",
    ExplClosed: "話題已關閉。",
    ExplPinned: "話題始終排在第一位（可能僅在其自己的類別中）。",
    PopularTopicsComma: "熱門話題，",
    TopFirstAllTime: "優先顯示最受歡迎的話題（所有時間）。",
    TopFirstPastDay: "顯示過去一天受歡迎的話題。",
    CatHasBeenDeleted: "此類別已被刪除",
    TopicsActiveFirst: "話題，最近活躍優先",
    TopicsNewestFirst: "話題，最新優先",
    CreatedOn: "建立於 ",
    LastReplyOn: "\n上次回覆時間 ",
    EditedOn: "\n編輯於 ",

    // 這些被顯示為滑鼠懸停工具提示或行動電話觸控提示，在論壇話題列表中使用者頭像圖示上。
    createdTheTopic: "建立了話題",
    frequentPoster: "常發帖者",
    mostRecentPoster: "最新發帖者",
    inC: "在：",
    TitleFixed: "此問題已解決",
    TitleDone: "此事情已完成",
    TitleStarted: "我們已經開始了",
    TitleStartedFixing: "我們已經開始修復此問題",
    TitleUnsolved: "這是一個未解決的問題",
    TitleIdea: "這是一個想法",
    TitlePlanningFix: "我們正在計畫修復此問題",
    TitlePlanningDo: "我們正在計畫做這件事",
    TitleChat: "這是一個聊天頻道",
    TitlePrivateChat: "這是一個私人聊天頻道",
    TitlePrivateMessage: "一條私人訊息",
    TitleInfoPage: "這是一個資訊頁面",
    TitleDiscussion: "一次討論",
    IsPinnedGlobally: "\n它被置頂，所以排在首位。",
    IsPinnedInCat: "\n它在該類別中被置頂，所以在該類別中排在首位。",
  },

  // 論壇類別列表

  fc: {
    RecentTopicsWaiting: "最近的話題（等待中）",
    RecentTopicsInclDel: "最近的話題（包括已刪除的）",
    RecentTopics: "最近的話題",
    _replies: " 回覆",
    _deleted: "（已刪除）",
    _defCat: "（預設類別）",
  },

  // 頂部列

  // 顯示在頁面頂部。包括登入和註冊按鈕，或使用者的使用者名稱選單。

  tb: {
    // 打開右側邊欄並列出當前話題中最近的文章。
    RecentPosts: "最近的文章",

    // 在線使用者數滑鼠懸停時，打開右側邊欄按鈕的提示訊息。
    NumOnlChat: "目前聊天室在線人數為", // 示例：“目前聊天室在線人數為 5”
    NumOnlForum: "目前論壇在線人數為",

    // 打開左側邊欄按鈕的標題。
    WatchbBtn: "您的話題", // REMOVE

    // 滑鼠懸停在打開左側邊欄按鈕時顯示的提示訊息。
    WatchbToolt: "您的最近話題、已加入聊天室、直接訊息",

    // 在使用者個人資料頁面上顯示的標題。
    AbtUsr: "關於使用者",

    // 快捷方式，離開使用者個人資料頁面或工作人員區域，返回討論話題。
    BackFromUsr: "從使用者資料返回",
    BackFromAdm: "從管理區返回",

    // 在全文搜尋頁面上顯示的標題。
    SearchPg: "搜尋頁面",
  },

  // 左側邊欄

  wb: {
    AddCommunity: "新增 ...",
    RecentlyViewed: "最近查看的話題", // MISSING "話題"
    JoinedChats: "已加入的聊天室",
    ChatChannels: "聊天室頻道",
    CreateChat: "建立聊天室頻道",
    DirectMsgs: "直接訊息",
    NoChats: "沒有聊天訊息", // 意思是：“沒有聊天訊息”
    NoDirMsgs: "沒有直接訊息", // 意思是：“沒有直接訊息”

    // 單擊話題下拉選單：
    TopicActions: "話題操作",
    ViewPeopleHere: "查看這裡的人員",
    ViewAddRemoveMembers: "查看/新增/刪除成員",
    ViewChatMembers: "查看聊天成員",
    EditChat: "編輯聊天描述",
    //EditChat: "編輯聊天標題和目的", // 保留，以防新增回編輯標題輸入
    LeaveThisChat: "離開此聊天室",
    LeaveThisCommunity: "退出此社群",
    JoinThisCommunity: "加入此社群",
  },

  // 右側邊欄

  cb: {
    RecentComments: "本話題的最近評論：",
    NoComments: "沒有評論。",

    YourBookmarks: "您的書籤：",

    UsersOnline: "在線使用者：",
    UsersOnlineForum: "本論壇在線使用者：",
    UsersInThisChat: "本聊天中的使用者：",
    UsersInThisTopic: "本話題中的使用者：",

    GettingStartedGuide: "入門指南",
    AdminGuide: "管理指南",
    Guide: "指南",

    // 如何隱藏側邊欄。
    CloseShortcutS: "關閉（鍵盤快捷鍵：S）",

    // ----- 在線使用者列表 / 當前話題中的使用者

    AddPeople: "新增更多人",

    // 在使用者列表中顯示在自己的使用者名稱旁邊。
    thatsYou: "這就是您",

    // 關於哪些人在線的訊息。
    // 例如，在英文中：“在線使用者：您和 5 個未登入的人”
    OnlyYou: "似乎只有您在線",
    YouAnd: "您和 ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " 個人" : " 人";
      const have = numStrangers === 1 ? "尚未" : "沒有";
      return numStrangers + people + " " + have + "登入";
    },

    // ----- 最近評論列表

    // 這解釋了側邊欄中“最近”選項卡的工作原理。

    RepliesToTheLeft: "左側的回覆可能會按照最佳順序排序",
    bestFirst: "（最佳優先）。",
    ButBelow: "但在下面，",
    insteadBy: " 相同的回覆將按",
    newestFirst: "最新優先排序。",

    SoIfLeave: "因此，如果您離開並稍後返回這裡，則將找到",
    allNewReplies: "所有新的回覆。",
    Click: "點擊",
    aReplyToReadIt: "下面的回覆以閱讀它 — 因為下面僅顯示摘要。",
  },

  // Change page dialog
  cpd: {
    ClickToChange: "點擊更改狀態",
    ClickToViewAnswer: "點擊查看答案",
    ViewAnswer: "查看答案",
    ChangeStatusC: "更改狀態為：",
    ChangeCatC: "更改類別：",
    ChangeTopicTypeC: "更改話題類型：",
  },

  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "一個問題",
    hasAccptAns: "有一個被採納的答案",
    aProblem: "一個問題",
    planToFix: "計畫修復",
    anIdea: "一個想法",
    planToDo: "計畫去做",
  },

  // 討論/非聊天頁面

  d: {
    // 這些文本被分成 1、2 或 1、2、3 等部分，因為在文本之間，
    // 會顯示圖示以幫助人們理解這些圖示的含義。

    ThisFormClosed_1: "這個表單已經被",
    // 在此處顯示了一個話題已關閉的圖示，在文本部分 1（上面）和部分 2（下面）之間。
    ThisFormClosed_2: "關閉，您不能再填寫和發布它。",

    ThisTopicClosed_1: "這個話題已經被",
    // 在此處顯示了一個話題已關閉的圖示和文本“已關閉”。
    ThisTopicClosed_2: "。您仍然可以發布評論。", // SYNC 刪除了“不會讓...提高...”

    ThisPageDeleted: "此頁面已被刪除",
    CatDeldPageToo: "類別已刪除，因此此頁面也已被刪除",

    ThreadDeld: "討論串已刪除",
    CmntDeld: "評論已刪除",
    PostDeld: "文章已刪除",
    DiscDeld: "討論已刪除",
    PageDeld: "頁面已刪除",
    PagePendAppr: "頁面等待批准",
    TitlePendAppr: "標題等待批准",
    TextPendingApproval: "文本等待批准",

    TooltipQuestClosedNoAnsw: "此問題已關閉，沒有接受的答案。",
    TooltipTopicClosed: "此話題已關閉。",

    TooltipQuestSolved: "這是一個已解決的問題",
    TooltipQuestUnsolved: "這是一個未解決的問題",

    StatusDone: "完成",
    TooltipProblFixed: "已經解決了這個問題",
    TooltipDone: "已經完成了這個事情",

    StatusStarted: "已開始",
    TooltipFixing: "我們已經開始解決這個問題", // MISSING "我們目前正在" —> "我們已經開始"
    TooltipImplementing: "我們已經開始做這個事情", // MISSING  -""-

    StatusPlanned: "已計畫",
    TooltipProblPlanned: "我們正在計畫解決這個問題",
    TooltipIdeaPlanned: "我們正在計畫做這個事情", // 或者“實施這個事情”？

    StatusNew: "新的",
    StatusNewDtl: "新的話題，正在討論中",
    TooltipUnsProbl: "這是一個未解決的問題",
    TooltipIdea: "這是一個想法",

    TooltipPersMsg: "個人訊息",
    TooltipChat: "# 表示聊天頻道",
    TooltipPrivChat: "這是一個私人聊天頻道",

    TooltipPinnedGlob: "\n被全域置頂。",
    TooltipPinnedCat: "\n被該類別置頂。",

    SolvedClickView_1: "在文章 # 中已解決",
    SolvedClickView_2: "，點擊查看",
    PostHiddenClickShow: "文章已隱藏，點擊顯示",
    ClickSeeMoreRepls: "顯示更多回覆",
    ClickSeeMoreComments: "顯示更多評論",
    ClickSeeThisComment: "點擊顯示此評論",
    clickToShow: "點擊顯示",

    ManyDisagree: "許多人不同意此觀點：",
    SomeDisagree: "一些人不同意此觀點：",

    PendAppr: "待批准",
    CmtPendAppr: "評論待批准，發布於",
    CmtBelowPendAppr: (isYour) => (isYour ? "您的" : "該") + "評論待批准。",
    _and: "和",
    repliesTo: "回覆",
    InReplyTo: "回覆",
    YourReplyTo: "您的回覆",
    YourChatMsg: "您的聊天訊息：",
    YourDraft: "您的草稿",
    YourEdits: "您的編輯：",
    YourProgrNoteC: "您的進展記錄：",
    aProgrNote: "一條進展記錄：",
    ReplyingToC: "回覆：",
    ScrollToPrevw_1: "捲動到",
    ScrollToPrevw_2: "預覽",
    UnfinEdits: "未完成的編輯",
    ResumeEdting: "繼續編輯",
    DelDraft: "刪除草稿",
    ClickViewEdits: "點擊查看舊的編輯",
    By: "作者：", // ... someones name

    // Discussion ...
    aboutThisIdea: "關於如何以及是否執行此想法",
    aboutThisProbl: "關於如何以及是否修復此問題",

    AddProgrNote: "新增進展記錄",
    // Progress ...
    withThisIdea: "與執行此想法有關",
    withThisProbl: "與解決此問題有關",
    withThis: "與此有關",
  },

  // Metabar（元欄）

  // 在原始文章和所有回覆之間顯示。

  mb: {
    NotfsAbtThisC: "關於此話題的通知：",
    // 如果是直接訊息話題，則在此文本下方列出成員。
    Msg: "訊息",

    SmrzRepls: "總結回覆",

    // 不必擔心“1 個回覆”，“2,3,4 個回覆”的正確性。
    // 只需始終寫“回覆”？（即使只有一個）

    EstTime: (numReplies: number, minutes: number) =>
      `有 ${numReplies} 個回覆。預計閱讀時間：${minutes} 分鐘`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
      `完成。總結了 ${numSummarized} 個回覆，之前顯示了 ${numShownBefore} 個回覆。`,
  },

  // 文章操作

  pa: {
    CloseTopic: "關閉話題", // MISSING（缺少）
    CloseOwnQuestionTooltip: "如果您不需要回答，請關閉此問題。",
    CloseOthersQuestionTooltip:
      "如果此問題不需要回答（例如，如果屬於非話題或已在另一個話題中回答），請關閉此問題。",
    CloseToDoTooltip: "如果此待辦事項不需要完成或修復，請關閉。",
    CloseTopicTooltip: "如果不需要進一步考慮此話題，請關閉此話題。",
    AcceptBtnExpl: "接受此作為問題或問題的答案",
    SolutionQ: "解決方案？",
    ClickUnaccept: "點擊取消接受此答案",
    PostAccepted: "此文章已被接受為答案",

    NumLikes: (num: number) => (num === 1 ? "1 個讚" : num + " 個讚"),
    NumDisagree: (num: number) => num + " 不同意",
    NumBury: (num: number) => (num === 1 ? "1 個掩埋" : num + " 個掩埋"),
    NumUnwanted: (num: number) => (num === 1 ? "1 個不需要" : num + " 個不需要"),

    MoreVotes: "更多投票...",
    LikeThis: "喜歡這個",
    LinkToPost: "連結到此文章",
    Report: "回報",
    ReportThisPost: "回報此文章",
    Admin: "管理員",
    DiscIx: "討論索引",

    Disagree: "不同意",
    DisagreeExpl: "點擊此處不同意此文章，或警告其他人存在事實錯誤。",
    Bury: "掩埋",
    BuryExpl:
      "點擊此處將其他文章排序在此文章之前。只有論壇工作人員可以看到您的投票。",
    Unwanted: "不想要",
    UnwantedExpl:
      "如果您不想要這篇文章出現在這個網站上。這會減少我對文章作者的信任。只有論壇工作人員能看到您的投票。",
    AddTags: "新增/刪除標籤",
    UnWikify: "取消維基化",
    Wikify: "維基化",
    PinDeleteEtc: "置頂 / 刪除 / 分類 ...",
  },

  // 分享對話框
  sd: {
    Copied: "已複製。",
    CtrlCToCopy: "按 Ctrl+C 鍵複製。",
    ClickToCopy: "點擊複製連結。",
  },

  // 聊天
  c: {
    About_1: "這是由 ",
    About_2: " 建立的聊天頻道。",
    ScrollUpViewComments: "向上捲動查看舊評論",
    Purpose: "目的：",
    MessageDeleted: "（訊息已刪除）",
    JoinThisChat: "加入此聊天",
    PostMessage: "發布訊息",
    AdvancedEditor: "進階編輯器",
    TypeHere: "在此輸入。您可以使用 Markdown 和 HTML。",
  },

  // 我的選單
  mm: {
    NeedsReview: "需要審核",
    AdminHelp: "管理員幫助",
    StaffHelp: "工作人員幫助",
    DraftsEtc: "草稿、書籤、任務",
    MoreNotfs: "查看所有通知",
    DismNotfs: "全部標記為已讀",
    ViewProfile: "查看您的個人資料",
    ViewGroups: "查看群組",
    LogOut: "登出",
    UnhideHelp: "取消隱藏幫助訊息",
  },

  // 捲動按鈕
  sb: {
    ScrollToC: "捲動到：",
    Scroll: "捲動",
    // 返回按鈕，字母 B 是一個鍵盤快捷鍵。
    // 如果在您的語言中，“返回”不以“B”開頭，則將 Back_1 設置為空字串（空文本），並將 Back_2 設置為：“返回（B）” - 而不是“返回”（但不是“B”）
    // 翻譯成您的語言。
    Back_1: "B",
    Back_2: "ack",
    BackExpl: "捲動回到頁面上的上一個位置",

    // 這些在行動裝置上很有用 — 然後，沒有 Home（= 捲動到頂部）和 End 按鈕的鍵盤。
    // 一旦您習慣了鍵盤，點擊 1 到達頂部，點擊 2 查看第一個回覆，B 返回，F 前進等等，這樣挺好的。
    PgTop: "頁面頂部",
    PgTopHelp: "轉到頁面頂部。鍵盤快捷鍵：1",
    Repl: "回覆",
    ReplHelp: "轉到回覆部分。快捷鍵：2",
    Progr: "進展",
    // 進展部分在頁面的末尾，那裡會顯示類似於“Alice 將狀態更改為正在進行”和“Alice 標記為完成”以及“話題由...關閉”之類的内容。
    // （如果需要，還可以顯示工作人員或參與該問題的人員的評論。）
    ProgrHelp: "轉到進展部分。快捷鍵：3",
    PgBtm: "頁面底部",
    Btm: "底部",
    BtmHelp: "轉到頁面底部。快捷鍵：4",

    // “鍵盤快捷鍵：...，B 捲動回退”
    Kbd_1: "，並且 ",
    // 然後是字母 'B'（不管語言如何）
    Kbd_2: " 捲動回退",
  },

  // 選擇使用者對話框
  sud: {
    SelectUsers: "選擇使用者",
    AddUsers: "新增使用者",
  },

  // 關於使用者對話框

  aud: {
    IsMod: "是版主。",
    IsAdm: "是管理員。",
    IsDeld: "已停用或刪除。",
    ThisIsGuest: "這是一個訪客使用者，實際上可能是任何人。",
    ViewInAdm: "在管理區域查看",
    ViewProfl: "查看個人資料",
    ViewComments: "查看其他評論",
    RmFromTpc: "從話題中刪除",
    EmAdrUnkn: "電子郵件地址未知 — 此訪客不會收到有關回覆的通知。",
  },

  upp: {
    // ----- 連結
    Preferences: "偏好設定",
    Invites: "邀請",
    DraftsEtc: "草稿等",
    About: "關於",
    Privacy: "隱私",
    Security: "安全",
    Account: "帳號",
    Interface: "介面",

    // ----- 總覽統計

    JoinedC: "加入日期：",
    PostsMadeC: "發表文章：",
    LastPostC: "最後發文：",
    LastSeenC: "最後活動時間：",
    TrustLevelC: "信任等級：",

    // ----- 操作按鈕

    // ----- 頭像

    UploadPhoto: "上傳頭像",
    ChangePhoto: "更改頭像",
    ImgTooSmall: "圖片太小：應至少為 100 x 100",

    // ----- 活動

    OnlyStaffCanSee: "只有工作人員和受信任的核心成員才能查看。",
    OnlyMbrsCanSee: "只有活躍成員一段時間後才能查看。",
    Nothing: "無內容",
    Posts: "文章",
    NoPosts: "無文章。",
    Topics: "話題",
    NoTopics: "無話題。",

    // ----- 使用者狀態

    UserBanned: "此使用者已被禁止",
    UserSuspended: (dateUtc: string) =>
      `此使用者已被暫停使用，直到 ${dateUtc} UTC`,
    ReasonC: "原因：",

    DeactOrDeld: "已停用或已刪除。",
    isGroup: "（一個組）",
    isGuest: " — 訪客使用者，可能是任何人",
    isMod: " – 版主",
    isAdmin: " – 管理員",
    you: "（您）",

    // ----- 通知頁面

    NoNotfs: "無通知",
    NotfsToYouC: "發給您的通知：",
    NotfsToOtherC: (name: string) => `發給 ${name} 的通知：`,
    DefNotfsSiteWide: "預設通知，整個站台",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "發給",

    // ----- 草稿等頁面

    NoDrafts: "無草稿",
    YourDraftsC: "您的草稿：",
    DraftsByC: (name: string) => `${name} 的草稿：`,

    // ----- 邀請頁面
    InvitesIntro: "在這裡您可以邀請其他人加入本站。",
    InvitesListedBelow: "您已經發送的邀請如下所示。",
    NoInvites: "您還沒有邀請任何人。",

    InvitedEmail: "邀請電子郵件",
    WhoAccepted: "接受邀請的成員",
    InvAccepted: "接受邀請",
    InvSent: "已發送邀請",
    JoinedAlready: "已經加入",

    SendAnInv: "邀請人", // 原文："Send an Invite"，其他語言缺失
    SendInv: "發送邀請", // 其他語言中只有單數形式："Send invite"
    SendInvExpl:
      "我們將向您的朋友發送一封簡短的電子郵件。他們將點擊連結立即加入，無需登入。他們將成為普通成員，而不是版主或管理員。",
    //EnterEmail: "輸入電子郵件",
    InvDone: "完成。我將發送電子郵件。",
    NoOneToInv: "沒有人可邀請。",
    InvNotfLater: "稍後我會通知您，當我邀請他們時。",
    AlreadyInvSendAgainQ: "這些人已經被邀請了 — 您是否想再次邀請他們？",
    InvErr_1: "出現了 ",
    InvErr_2: " 個錯誤",
    InvErr_3: "：",
    TheseJoinedAlrdyC: "這些人已經加入了，所以我沒有邀請他們：",
    ResendInvsQ: "再次向這些人發送邀請？他們已經被邀請過了。",
    InvAgain: "再次邀請",

    // ----- 偏好設定，關於

    AboutYou: "關於您",
    WebLink: "您的任何網站或頁面。",

    NotShownCannotChange: "不公開顯示。無法更改。",

    // 全名或別名：
    NameOpt: "名稱（選填）",

    NotShown: "不公開顯示。",

    // 使用者名稱：
    MayChangeFewTimes: "您只能更改幾次。",
    notSpecified: "（未指定）",
    ChangeUsername_1: "您只能更改使用者名稱幾次。",
    ChangeUsername_2:
      "過於頻繁的更改會讓其他人感到困惑 — 他們不知道如何 @ 提到您。",

    NotfAboutAll: "通知每個新文章（除非您將話題或類別靜音）",
    NotfAboutNewTopics: "通知新話題（除非您將類別靜音）",

    ActivitySummaryEmails: "活動摘要電子郵件",

    EmailSummariesToGroup:
      "當此組的成員不訪問此處時，預設情況下會向他們發送熱門話題和其他内容的摘要電子郵件。",
    EmailSummariesToMe:
      "當我不在此處訪問時，向我發送熱門話題和其他内容的摘要電子郵件。",

    AlsoIfTheyVisit: "即使他們經常訪問這裡，也要給他們發送電子郵件。",
    AlsoIfIVisit: "即使我經常訪問這裡，也要給我發送電子郵件。",

    HowOftenWeSend: "我們應該多久發送這些電子郵件？",
    HowOftenYouWant: "您想多久收到這些電子郵件？",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "為陌生人和新成員隱藏您最近的活動？",
    HideActivityStrangers_2: "（但不包括那些成為活躍成員一段時間的人。）",
    HideActivityAll_1: "對所有人隱藏您最近的活動？",
    HideActivityAll_2: "（除了工作人員和受信任的核心成員。）",

    // ----- Preferences, Account

    // 關於電子郵件地址：
    EmailAddresses: "電子郵件地址",
    PrimaryDot: "主要。",
    VerifiedDot: "已驗證。",
    NotVerifiedDot: "未驗證。",
    ForLoginWithDot: (provider: string) => `用於 ${provider} 登入。`,
    MakePrimary: "設為主要",
    AddEmail: "新增電子郵件地址",
    TypeNewEmailC: "輸入一個新的電子郵件地址：",
    MaxEmailsInfo: (numMax: number) => `（您不能新增超過 ${numMax} 個地址。）`,
    EmailAdded_1: "已新增。我們已向您發送了一封驗證電子郵件 — ",
    EmailAdded_2: "請查收您的電子郵件收件匣。",
    SendVerifEmail: "發送驗證電子郵件",

    EmailStatusExpl:
      "（'主要'表示您可以通過此地址登入，並且我們向其發送通知。" +
      " '已驗證'表示您在地址驗證電子郵件中點擊了驗證連結。）",

    // 密碼：
    ChangePwdQ: "更改密碼？",
    CreatePwdQ: "建立密碼？",
    WillGetPwdRstEml: "您將收到一封重設密碼電子郵件。",
    // 這是“無”的翻譯："密碼：無"
    PwdNone: "無",

    // 登入：
    LoginMethods: "登入方式",
    commaAs: "，作為：",

    // 個人資料：
    YourContent: "您的內容",
    DownloadPosts: "下載文章",
    DownloadPostsHelp: "建立一個帶有您發布的話題和評論副本的 JSON 檔案。",
    DownloadPersData: "下載個人資料",
    DownloadPersDataHelp:
      "建立一個包含您的個人資料副本的 JSON 檔案，例如您的姓名（如果您指定了姓名）和電子郵件地址。",

    // 刪除帳號:
    DangerZone: "危險區",
    DeleteAccount: "刪除帳號",
    DeleteYourAccountQ:
      "是否刪除您的帳號？我們將刪除您的姓名，忘記您的電子郵件地址、密碼和任何線上身份（例如 Facebook 或 Twitter 登入）。" +
      "您將無法再次登入。此操作無法撤銷。",
    DeleteUserQ:
      "是否刪除此使用者？我們將刪除該使用者的姓名，忘記其電子郵件地址、密碼和線上身份（例如 Facebook 或 Twitter 登入）。" +
      "該使用者將無法再次登入。此操作無法撤銷。",
    YesDelete: "是的，刪除",
  },

  gpp: {
    GroupMembers: "小組成員",
    NoMembers: "暫無成員。",
    MayNotListMembers: "可能無法列出成員。",
    AddMembers: "新增成員",
    BuiltInCannotModify: "這是一個內建的組，無法修改。",
    NumMembers: (num: number) => `${num} 名成員`,
    YouAreMember: "您是成員。",
    CustomGroupsC: "自定義組:",
    BuiltInGroupsC: "內建組:",
    DeleteGroup: "刪除該組",
  },

  // 建立使用者對話框

  cud: {
    CreateUser: "建立使用者",
    CreateAccount: "建立帳號",
    EmailC: "電子郵件：", // REMOVE move to t.EmailC instead
    keptPriv: "將被保密",
    forNotfsKeptPriv: "用於回覆通知，將被保密",
    EmailVerifBy_1: "您的電子郵件已被 ",
    EmailVerifBy_2: " 驗證。",
    UsernameC: "使用者名稱：",
    FullNameC: "全名：",
    optName: "選填",
    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "帳號已建立，您已登入。", // COULD say if verif email sent too?
    AlmostDone:
      "快完成了！您只需要確認您的電子郵件地址。我們已經發送了一封郵件給您。請點擊郵件中的連結以啟用您的帳號。您可以關閉此頁面。",
  },

  // 接受條款和隱私權政策？

  terms: {
    TermsAndPrivacy: "條款和隱私權政策",
    Accept_1: "您是否接受我們的 ",
    TermsOfService: "服務條款",
    TermsOfUse: "使用條款",
    Accept_2: " 和 ",
    PrivPol: "隱私權政策",
    Accept_3_User: "？",
    Accept_3_Owner: " 適用於網站管理員？", // (see just below)

    // 關於上面的“適用於網站管理員？”：
    // 如果有人通過此提供的軟體作為軟體即服務代管建立自己的社群，則需要同意略有不同的服務條款，
    // 因為成為社群維護者/所有者與僅註冊發表評論是不同的（責任更大）。

    YesAccept: "是的，我接受",
  },

  // 密碼輸入

  pwd: {
    PasswordC: "密碼：",
    StrengthC: "強度：",
    FairlyWeak: "相當弱。",
    toShort: "太短",
    TooShort: (minLength: number) => `太短了，應至少為 ${minLength} 個字元`,
    PlzInclDigit: "請包含數字或特殊字元",
    TooWeak123abc: "太弱了。不要使用像 '12345' 或 'abcde' 這樣的密碼。",
    AvoidInclC: "避免在密碼中包含（部分）您的姓名或電子郵件：",
  },

  // 登入對話框

  ld: {
    NotFoundOrPrivate: "頁面未找到或存取被拒絕。",
    // 這是管理員點擊“冒充”按鈕以成為其他人的情況下，如果您以其他使用者的身份打開登入對話框
    // （可能是因為導覽到了該使用者無法存取的站點的不同部分）- 那麼就會顯示該錯誤訊息：在您停止模擬第一個使用者之前，您不能以“其他人”的身分登入以存取社群的那部分。（否則，一切都會變得太複雜。）
    IsImpersonating:
      "您正在扮演其他人的角色，該使用者可能無法存取本網站的所有部分。",

    IfYouThinkExistsThen:
      "如果您認為該頁面存在，請登入為可能存取該頁面的某個人。 ",
    LoggedInAlready: "（您已經登入了，但也許是錯誤的帳戶？）",
    ElseGoToHome_1: "否則，您可以 ",
    ElseGoToHome_2: "返回首頁。",

    CreateAcconut: "建立帳號",
    ContinueWithDots: "繼續...",
    SignUp: "註冊",
    LogIn: "登入",
    LogInWithPwd: "用密碼登入",
    CreateAdmAcct: "建立管理員帳戶：",
    AuthRequired: "需要身份驗證才能存取此站點",
    LogInToLike: "登入以喜歡此文章",
    LogInToSubmit: "登入並提交",
    LogInToComment: "登入以撰寫評論",
    LogInToCreateTopic: "登入以建立話題",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "或者 ", // "Or "
    OrLogIn_2: "登入", // "Log in" (this is a button)
    OrLogIn_3: "。", // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "或者 ",
    SignUpInstead_2: "建立帳號", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: "，或者只需 ",
    OrTypeName_2: "輸入名稱", // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "或在此處建立帳戶：",
    OrTypeName: "或輸入您的名稱：",
    OrLogIn: "或登入：",
    YourNameQ: "您的姓名？",

    BadCreds: "使用者名稱或密碼錯誤",

    UsernameOrEmailC: "使用者名稱或電子郵件：",
    PasswordC: "密碼：",
    ForgotPwd: "忘記密碼了嗎？",

    NoPwd: "您尚未選擇密碼。",
    CreatePwd: "建立密碼",
  },

  // Flag dialog

  fd: {
    PleaseTellConcerned: "請告訴我們您的關注點。",
    ThanksHaveReported:
      "謝謝，您已經檢舉了此內容。論壇工作人員將會查看此內容。",
    ReportComment: "檢舉評論",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "此文包含個人資料，例如某人的真實姓名。",
    OptOffensive: "此文包含冒犯或濫用內容。",
    OptSpam: "此文為不受歡迎的廣告。",
    OptOther: "因其他原因通知工作人員有關此文。",
  },

  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "如果您已經登入，可以通過點擊您的名稱然後點擊 ",
    YouCanShowAgain_2: "取消隱藏幫助訊息",
  },

  // 編輯器

  e: {
    SimilarTopicsC: "類似話題：",
    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "抱歉，目前您一次只能上傳一個檔案",
    PleaseFinishPost: "請先完成您的文章",
    PleaseFinishChatMsg: "請先完成您的聊天訊息",
    PleaseFinishMsg: "請先完成您的訊息",
    PleaseSaveEdits: "請先儲存您目前的編輯",
    PleaseSaveOrCancel: "請先儲存或取消您的新話題",
    CanContinueEditing: "如果您再次打開編輯器，可以繼續編輯您的文本。",
    //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "請不要刪除所有文本。請寫點東西。",
    PleaseWriteSth: "請寫點東西。",
    PleaseWriteTitle: "請寫一個話題標題。",
    PleaseWriteMsgTitle: "請寫一條訊息標題。",
    PleaseWriteMsg: "請寫一條訊息。",

    exBold: "粗體文本",
    exEmph: "強調文本",
    exPre: "預格式化文本",
    exQuoted: "引用文本",
    ExHeading: "標題",

    TitlePlaceholder: "輸入一個標題 — 簡潔地說明這是關於什麼的？",

    EditPost_1: "編輯 ",
    EditPost_2: " 文章 ",

    TypeChatMsg: "輸入聊天訊息：",
    YourMsg: "您的訊息：",
    CreateTopic: "建立新話題",
    CreateCustomHtml: "建立自定義 HTML 頁面（新增您自己的 <h1> 標題）",
    CreateInfoPage: "建立資訊頁面",
    CreateCode: "建立原始碼頁面",
    AskQuestion: "提出問題",
    ReportProblem: "回報問題",
    SuggestIdea: "建議一個想法",
    NewChat: "新聊天頻道的標題和目的",
    NewPrivChat: "新的私人聊天標題和目的",
    AppendComment: "在頁面底部新增評論：",

    ReplyTo: "回覆 ",
    ReplyTo_theOrigPost: "原始文章",
    ReplyTo_post: "文章 ",
    AddCommentC: "新增評論：", // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "請選擇一個或多個文章進行回覆。",

    Save: "儲存",
    edits: " 次編輯",

    PostReply: "發布回覆",
    PostComment: "發布評論",
    Post: "發布",
    comment: "評論",
    question: "問題",

    PostMessage: "發布訊息",
    SimpleEditor: "簡單編輯器",

    Send: "發送",
    message: "訊息",

    Create: "建立",
    page: "頁面",
    chat: "聊天",
    idea: "想法",
    topic: "話題",

    Submit: "提交",
    problem: "問題",

    ViewOldEdits: "查看舊編輯",

    UploadBtnTooltip: "上傳檔案或圖片",
    BoldBtnTooltip: "加粗文字",
    EmBtnTooltip: "強調",
    QuoteBtnTooltip: "引用",
    PreBtnTooltip: "預格式化文本",
    HeadingBtnTooltip: "標題",

    TypeHerePlaceholder:
      "在此處輸入。您可以使用 Markdown 和 HTML。拖放以貼上圖片。",

    Maximize: "最大化",
    ToNormal: "恢復正常",
    TileHorizontally: "水平平鋪",

    PreviewC: "預覽：",
    TitleExcl: "（不包括標題）",
    ShowEditorAgain: "再次顯示編輯器",
    Minimize: "最小化",

    PreviewInfo: "您可以在此處預覽您的發布內容。",
    CannotType: "您無法在此處鍵入。",

    LoadingDraftDots: "正在載入任何草稿...",
    DraftUnchanged: "未更改。",
    CannotSaveDraftC: "無法儲存草稿：",
    DraftSavedBrwsr: "草稿已儲存（在瀏覽器中）。", // 缺失翻譯
    DraftSaved: (nr: string | number) => `已儲存草稿 ${nr}。`,
    DraftDeleted: (nr: string | number) => `已刪除草稿 ${nr}。`,
    WillSaveDraft: (nr: string | number) => `將儲存草稿 ${nr}...`,
    SavingDraft: (nr: string | number) => `正在儲存草稿 ${nr}...`,
    DeletingDraft: (nr: string | number) => `正在刪除草稿 ${nr}...`,
  },

  // 選擇分類下拉框

  scd: {
    SelCat: "選擇分類",
  },

  // 頁面類型下拉框

  pt: {
    SelectTypeC: "選擇話題類型：",
    DiscussionExpl: "討論某個話題。",
    QuestionExpl: "一個答案可以被標記為被採納的答案。",
    ProblExpl: "如果有些東西壞了或不起作用。可以被標記為已修復/已解決。",
    IdeaExpl: "一個建議。可以被標記為已完成/已實作。",
    ChatExpl: "一個或許永無止境的對話。",
    PrivChatExpl: "只有被邀請加入聊天的人才能看到。",
    CustomHtml: "自定義 HTML 頁面",
    InfoPage: "資訊頁面",
    Code: "程式碼",
    EmbCmts: "嵌入式評論",
    About: "關於",
    PrivChat: "私人聊天",
    Form: "表單",
  },

  // 加入子社群對話框

  jscd: {
    NoMoreToJoin: "沒有更多的社群可加入。",
    SelCmty: "選擇社群...",
  },

  // 搜尋對話框和搜尋頁面。

  s: {
    SearchForHelp: "搜尋幫助", // MISSING
    TxtToFind: "要搜尋的文字",
  },

  // 無網路

  ni: {
    NoInet: "無網路連線",
    PlzRefr: "重新整理頁面以查看最新更改。（發生了斷網）",
    RefrNow: "立即重新整理",
  },

  PostDeleted: (postNr: number) => `該文章（編號 ${postNr}）已被刪除。`,
  NoSuchPost: (postNr: number) => `本頁上沒有編號為 ${postNr} 的文章。`,
  NoPageHere: "該頁面已被刪除，或從未存在，或您無權存取它。",
  GoBackToLastPage: "返回上一頁",
});
