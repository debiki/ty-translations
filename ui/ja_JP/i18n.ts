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

var t_ja_JP: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "アクティブ",
  Activity: "アクティビティ",
  Add: "追加",
  AddingDots: "追加中...",
  AddComment: "コメントを追加",
  Admin: "管理",
  AdvSearch: "詳細検索",
  Anonym: "匿名",
  Away: "離席中",
  Back: "戻る",
  BlogN: "ブログ",
  Bookmarks: "ブックマーク",
  Cancel: "キャンセル",
  Categories: "カテゴリー",
  Category: "カテゴリー",
  ChangeV: "変更",
  ClickToShow: "クリックで表示",
  ChangeDots: "変更...",
  ChatN: "チャット",
  Chatting: "チャット中",
  CheckYourEmail: "メールを確認してください",
  Close: "閉じる",
  closed: "終了",
  comments: "コメント",   // as in:  "123 comments"
  Continue: "続行",
  Created: "作成日",
  Delete: "削除",
  Deleted: "削除済み",
  DirectMessage: "ダイレクトメッセージ",
  Discussion: "ディスカッション",
  discussion: "ディスカッション",
  done: "完了",
  EditV: "編集",
  Editing: "編集内容",
  EmailC: "メールアドレス: ",
  EmailAddress: "メールアドレス",
  EmailAddresses: "メールアドレス",
  EmailSentD: "メールを送信しました。",
  Forum: "フォーラム",
  GetNotifiedAbout: "通知を受け取る",
  GroupsC: "グループ:",
  Hide: "非表示",
  Home: "ホーム",
  Idea: "アイデア",
  Join: "参加",
  KbdShrtcsC: "キーボードショートカット: ",
  Loading: "読み込み中...",
  LoadMore: "もっと読み込む...",
  LogIn: "ログイン",
  LoggedInAs: "ログイン中: ",
  LogOut: "ログアウト",
  Maybe: "検討中",
  Manage: "管理",
  Members: "メンバー",
  MessageN: "メッセージ",
  MoreDots: "詳細...",
  Move: "移動",
  Name: "名前",
  NameC: "名前:",
  NewTopic: "新しいトピック",
  NoCancel: "いいえ、キャンセルします",
  Notifications: "通知",
  NotImplemented: "(未実装)",
  NotYet: "まだ",
  NoTitle: "タイトルなし",
  NoTopics: "トピックはありません。",
  Okay: "OK",
  OkayDots: "OK...",
  Online: "オンライン",
  onePerLine: "1行に1つ",
  PreviewV: "プレビュー",
  Problem: "問題",
  progressN: "進行状況",
  Question: "質問",
  Recent: "最新",
  Remove: "削除",
  Reopen: "再開",
  ReplyV: "返信",
  Replying: "返信中",
  Replies: "返信",
  replies: "返信",
  Save: "保存",
  SavingDots: "保存中...",
  SavedDot: "保存しました。",
  Search: "検索",
  SendMsg: "メッセージを送信",
  ShowPreview: "プレビューを表示",
  SignUp: "参加",  // don't change to "Sign Up" [join_or_signup]
  Solution: "解決策",
  started: "開始済み",
  Summary: "要約",
  Submit: "送信",
  Tag: "タグ",
  Tags: "タグ",
  Tools: "ツール",
  Topics: "トピック",
  TopicTitle: "トピックのタイトル",
  TopicType: "トピックの種類",
  UploadingDots: "アップロード中...",
  Username: "ユーザー名",
  Users: "ユーザー",
  Welcome: "ようこそ",
  Wiki: "Wiki",
  Yes: "はい",
  YesBye: "はい、さようなら",
  YesDoThat: "はい、お願いします",
  You: "あなた",
  you: "あなた",

  // Trust levels.
  Guest:  "ゲスト",
  NewMember: "新しいメンバー",
  BasicMember: "一般メンバー",
  FullMember: "正メンバー",
  TrustedMember: "信頼されたメンバー",
  RegularMember: "信頼されたレギュラー",
  CoreMember: "コアメンバー",

  // Periods.
  PastDay: "過去24時間",
  PastWeek: "過去1週間",
  PastMonth: "過去1ヶ月",
  PastQuarter: "過去3ヶ月",
  PastYear: "過去1年",
  AllTime: "全期間",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "ヶ月",  // months
  daysLtr: "日",      // days
  hoursLtr: "時間",     // hours
  minsLtr: "分",      // minutes
  secsLtr: "秒",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    `${numDays}日前`,

  hoursAgo: (numHours: number) =>
    `${numHours}時間前`,

  minutesAgo: (numMins: number) =>
    `${numMins}分前`,

  secondsAgo: (numSecs: number) =>
    `${numSecs}秒前`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "メールアドレスを入力してください",
    NoSpcs: "スペースは入れないでください",
    InvldAddr: "有効なメールアドレスではありません",
    NoBadChrs: "特殊文字は入れないでください",

    // Full name input field:
    NotOnlSpcs: "スペース以外も入力してください",
    NoAt: "@は入れないでください",

    // Username input field:
    NoDash: "ダッシュ(-)は入れないでください",
    DontInclAt: "@は含めないでください",
    StartEndLtrDgt: "先頭と末尾は英数字にしてください",
    OnlLtrNumEtc: "英数字(a-z, A-Z, 0-9)とアンダースコア(_)のみ使用可能です",
    // This shown just below the username input:
    UnUnqShrt_1: "あなたの ",
    UnUnqShrt_2: "@ユーザー名",
    UnUnqShrt_3: ", 短くてユニークなもの",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `少なくとも${minLength}文字必要です`,
    TooLong: (maxLength: number) => `長すぎます。最大${maxLength}文字です`,
  },


  // Notification levels.

  nl: {
    EveryPost: "すべての投稿",
    EveryPostInTopic: "このトピックのすべての新しい返信について通知されます。",
    EveryPostInCat: "このカテゴリーのすべての新しいトピックと返信について通知されます。",
    EveryPostInTopicsWithTag: "このタグが付いた新しいトピックと、そのトピック内のすべての返信について通知されます。",
    EveryPostWholeSite: "サイト全体のすべての新しいトピックと返信について通知されます。",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "新しいトピックのみ",
    NewTopicsInCat: "このカテゴリーの新しいトピックについて通知されます。",
    NewTopicsWithTag: "このタグが付いた新しいトピックについて通知されます。",
    NewTopicsWholeSite: "サイト全体の新しいトピックについて通知されます。",

    Tracking: "トラッキング中",

    Normal: "通常",
    NormalDescr: "あなた宛て、またはあなたへの返信に対する返信などの間接的な言及があった場合に通知されます。",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "控えめ",
    HushedDescr: "あなたに直接話しかけられた場合のみ通知されます。",

    Muted: "ミュート",
    MutedTopic: "通知なし。",
  },


  // Forum intro text

  fi: {
    Edit: "編集",
    Hide_1: "非表示",
    Hide_2: "。再表示するには",
    Hide_3: "をクリックしてください",
  },


  // Forum categories

  fcs: {
    All: "すべて", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "トピック一覧",

    // Select category dropdown

    from: "から",  // MISSING used like so:  "From <Category Name>" or "From All Categories"
    in: "の",      // MISSING used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "すべてのカテゴリー",

    // Topic sort order

    Active: "アクティブ順",      // MISSING didn't add "first" yet to transls
    ActiveDescr: "最近アクティブになったトピックを最初に表示します",

    New: "最新順",
    NewDescr: "新しいトピックを最初に表示します",

    Top: "人気順",              // MISSING didn't rename from Top to Popular in transls
    TopDescr: "人気のトピックを最初に表示します",

    // Topic filter dropdown

    AllTopics: "すべてのトピック",

    ShowAllTopics: "すべてのトピックを表示",
    ShowAllTopicsDescr: "削除されたものは除きます",

    WaitingTopics: "回答待ちトピック",          // MISSING
    OnlyWaitingDescr_1: "解決策や実装、完了を", // MISSING changed "questions" to "topics"
    OnlyWaitingDescr_2: "待っている",
    OnlyWaitingDescr_3: "トピックのみを表示します",  // MISSING rewrote

    YourTopics: "自分のトピック",       // MISSING
    AssignedToYou: "自分に割り当て済み", // MISSING

    DeletedTopics: "削除済みを表示",   // MISSING
    ShowDeleted: "削除済みを表示",
    ShowDeletedDescr: "削除されたトピックを含むすべてのトピックを表示します",

    // Rightmost buttons

    ViewCategories: "カテゴリーを表示",  // MISSING
    EditCat: "カテゴリーを編集",
    CreateCat: "カテゴリーを作成",
    CreateTopic: "トピックを作成",
    PostIdea: "アイデアを投稿",
    AskQuestion: "質問する",
    ReportProblem: "問題を報告",
    CreateMindMap: "マインドマップを作成",
    CreatePage: "ページを作成",

  },


  // Forum topic list

  ft: {
    ExplIcons: "アイコンの説明...",
    IconExplanation: "アイコンの説明:",
    ExplGenDisc: "一般的なディスカッションです。",
    ExplQuestion: "未解決の質問です。",
    ExplAnswer: "解決済みの質問です。",
    ExplIdea: "アイデア / 提案です。",
    ExplProblem: "問題です。",
    ExplPlanned: "対応または修正を予定しています。",
    ExplDone: "対応または修正が完了しました。",
    ExplClosed: "トピックは終了しました。",
    ExplPinned: "トピックは常に最初に表示されます (そのカテゴリー内のみの場合もあります)。",

    PopularTopicsComma: "人気のトピック、",
    TopFirstAllTime: "全期間で最も人気のトピックを最初に表示します。",
    TopFirstPastDay: "過去24時間で人気のトピックを表示します。",

    CatHasBeenDeleted: "このカテゴリーは削除されました",

    TopicsActiveFirst: "トピック (最近アクティブになった順)",
    TopicsNewestFirst: "トピック (新しい順)",

    CreatedOn: "作成日: ",
    LastReplyOn: "\n最新の返信: ",
    EditedOn: "\n編集日: ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "トピックを作成",
    frequentPoster: "頻繁に投稿",
    mostRecentPoster: "最新の投稿者",

    inC: "カテゴリー: ",

    TitleFixed: "修正済み",
    TitleDone: "完了",
    TitleStarted: "着手済み",
    TitleStartedFixing: "修正に着手済み",
    TitleUnsolved: "未解決の問題",
    TitleIdea: "アイデア",
    TitlePlanningFix: "修正を予定",
    TitlePlanningDo: "対応を予定",
    TitleChat: "チャットチャンネル",
    TitlePrivateChat: "プライベートチャットチャンネル",
    TitlePrivateMessage: "プライベートメッセージ",
    TitleInfoPage: "情報ページ",
    TitleDiscussion: "ディスカッション",
    IsPinnedGlobally: "\n全体にピン留めされているため、最初に表示されます。",
    IsPinnedInCat: "\nカテゴリー内にピン留めされているため、そのカテゴリー内で最初に表示されます。",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "最新のトピック (回答待ち)",
    RecentTopicsInclDel: "最新のトピック (削除済みを含む)",
    RecentTopics: "最新のトピック",
    _replies: " 件の返信",
    _deleted: " (削除済み)",
    _defCat: " (デフォルトのカテゴリー)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "最新の投稿",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " 人がこのチャットにオンラインです",    // example: "5 online in this chat"
    NumOnlForum: " 人がこのフォーラムにオンラインです",

    // Open left-sidebar button title.
    WatchbBtn: "自分のトピック",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "自分の最近のトピック、参加中のチャット、ダイレクトメッセージ",

    // Title shown on user profile pages.
    AbtUsr: "ユーザーについて",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "ユーザープロフィールから戻る",
    BackFromAdm: "管理画面から戻る",

    // Title shown on full text search page.
    SearchPg: "検索ページ",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "追加...",
    RecentlyViewed: "最近表示したトピック",  // MISSING " topics"
    JoinedChats: "参加中のチャット",
    ChatChannels: "チャットチャンネル",
    CreateChat: "チャットチャンネルを作成",
    DirectMsgs: "ダイレクトメッセージ",
    NoChats: "なし",    // meaning: "No chat messages"
    NoDirMsgs: "なし",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "トピックのアクション",
    ViewPeopleHere: "ここにいる人を表示",
    ViewAddRemoveMembers: "メンバーを表示 / 追加 / 削除",
    ViewChatMembers: "チャットメンバーを表示",
    EditChat: "チャットの説明を編集",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "このチャットから抜ける",
    LeaveThisCommunity: "このコミュニティから抜ける",
    JoinThisCommunity: "このコミュニティに参加する",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "このトピックの最近のコメント:",
    NoComments: "コメントはありません。",

    YourBookmarks: "あなたのブックマーク:",

    UsersOnline: "オンラインユーザー:",
    UsersOnlineForum: "フォーラムのオンラインユーザー:",
    UsersInThisChat: "このチャットのユーザー:",
    UsersInThisTopic: "このトピックのユーザー:",

    GettingStartedGuide: "管理者ガイド", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "管理者ガイド",          // ... but what? It's here already, just reuse this transl field
    Guide: "ガイド",

    // How to hide the sidebar.
    CloseShortcutS: "閉じる (ショートカット: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "ユーザーを追加",

    // Shown next to one's own username, in a list of users.
    thatsYou: "あなた",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "あなただけのようです",
    YouAnd: "あなたと、",
    NumStrangers: (numStrangers: number) => {
      return "ログインしていない " + numStrangers + " 人のユーザー";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "左側の返信は",
    bestFirst: "ベスト順",
    ButBelow: "に並んでいる場合があります。しかし、以下では",
    insteadBy: "同じ返信が",
    newestFirst: "新しい順",

    SoIfLeave: "に並んでいます。そのため、一度離れて後で戻ってきたとき、以下には",
    allNewReplies: "すべての新しい返信が表示されます。",
    Click: "",
    aReplyToReadIt: "以下の返信をクリックして読んでください。ここでは抜粋のみが表示されています。",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "クリックしてステータスを変更",
    ClickToViewAnswer: "クリックして回答を表示",
    ViewAnswer: "回答を表示",
    ChangeStatusC: "ステータスを以下に変更:",
    ChangeCatC: "カテゴリーを変更:",
    ChangeTopicTypeC: "トピックの種類を変更:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "質問",
    hasAccptAns: "解決済みの回答あり",
    aProblem: "問題",
    planToFix: "修正予定",
    anIdea: "アイデア",
    planToDo: "実施予定",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "このフォームは",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "終了しました。これ以上入力して投稿することはできません。",

    ThisTopicClosed_1: "このトピックは",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: "しました。引き続きコメントを投稿することは可能です。",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "このページは削除されました",
    CatDeldPageToo: "カテゴリーが削除されたため、このページも削除されました",

    ThreadDeld: "スレッドが削除されました",
    CmntDeld: "コメントが削除されました",
    PostDeld: "投稿が削除されました",
    DiscDeld: "ディスカッションが削除されました",
    PageDeld: "ページが削除されました",
    PagePendAppr: "ページは承認待ちです",
    TitlePendAppr: "タイトルは承認待ちです",
    TextPendingApproval: "本文は承認待ちです",

    TooltipQuestClosedNoAnsw: "この質問は解決策が提示されないまま終了しました。",
    TooltipTopicClosed: "このトピックは終了しました。",

    TooltipQuestSolved: "解決済みの質問",
    TooltipQuestUnsolved: "未解決の質問",

    StatusDone: "完了",
    TooltipProblFixed: "修正済み",
    TooltipDone: "完了",

    StatusStarted: "着手",
    TooltipFixing: "修正に着手しました",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "対応に着手しました", // MISSING  -""-

    StatusPlanned: "予定",
    TooltipProblPlanned: "修正を予定しています",
    TooltipIdeaPlanned: "対応を予定しています",   // or "to implement this"?

    StatusNew: "新規",
    StatusNewDtl: "新規トピック、議論中",
    TooltipUnsProbl: "未解決の問題",
    TooltipIdea: "アイデア",

    TooltipPersMsg: "個人メッセージ",
    TooltipChat: "# はチャットチャンネルを意味します",
    TooltipPrivChat: "プライベートチャットチャンネル",

    TooltipPinnedGlob: "\n全体にピン留めされています。",
    TooltipPinnedCat: "\nこのカテゴリーにピン留めされています。",

    SolvedClickView_1: "投稿 #",
    SolvedClickView_2: " で解決しました。クリックして表示",

    PostHiddenClickShow: "非表示の投稿。クリックして表示",
    ClickSeeMoreRepls: "返信をもっと表示",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "コメントをもっと表示",  // MISSING
    ClickSeeThisComment: "クリックしてコメントを表示",
    clickToShow: "クリックで表示",

    ManyDisagree: "多くの人が反対しています:",
    SomeDisagree: "何人かが反対しています:",

    PendAppr: "承認待ち",
    CmtPendAppr: "承認待ちのコメント、投稿日: ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "あなた" : "以下") + "のコメントは承認待ちです。",

    _and: " および",

    repliesTo: "への返信",
    InReplyTo: "返信先:",
    YourReplyTo: "あなたの返信先: ",  // MISSING
    YourChatMsg: "あなたのチャットメッセージ: ",   // MISSING
    YourDraft: "下書き",    // MISSING
    YourEdits: "あなたの編集: ",   // MISSING
    YourProgrNoteC: "進捗ノート:",  // MISSING
    aProgrNote: "進捗ノート: ",  // MISSING

    ReplyingToC: "返信先:",    // MISSING
    ScrollToPrevw_1: "スクロールして",  // MISSING
    ScrollToPrevw_2: "プレビューを表示",     // MISSING

    UnfinEdits: "未完了の編集",  // MISSING
    ResumeEdting: "編集を再開",  // MISSING
    DelDraft: "下書きを削除",   // MISSING

    ClickViewEdits: "クリックして過去の編集を表示",

    By: "投稿者: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "このアイデアをどのように、そして実施するかどうかについて",
    aboutThisProbl: "この問題をどのように、そして修正するかどうかについて",

    AddProgrNote: "進捗ノートを追加",
    // Progress ...
    withThisIdea: "このアイデアの実施について",
    withThisProbl: "この問題への対処について",
    withThis: "これの実施について",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "このトピックに関する通知:",

    // If is a direct message topic, members listed below this text.
    Msg: "メッセージ",

    SmrzRepls: "返信を要約する",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} 件の返信があります。推定読了時間: ${minutes} 分`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `完了しました。表示されていた ${numShownBefore} 件の返信のうち ${numSummarized} 件を要約しました。`,
  },


  // Post actions

  pa: {
    CloseTopic: "トピックを終了する",  // MISSING
    CloseOwnQuestionTooltip: "これ以上回答が必要ない場合は、この質問を終了してください。",
    CloseOthersQuestionTooltip: "この質問が不適切である場合や、別のトピックで回答済みである場合は終了してください。",
    CloseToDoTooltip: "このToDoを実施または修正する必要がなくなった場合は終了してください。",
    CloseTopicTooltip: "これ以上の検討が必要ない場合は、このトピックを終了してください。",

    AcceptBtnExpl: "これを質問または問題の解決策として承認する",
    SolutionQ: "解決しましたか？",
    ClickUnaccept: "クリックして承認を取り消す",
    PostAccepted: "この投稿は解決策として承認されました",

    NumLikes: (num: number) => `${num} いいね`,
    NumDisagree: (num: number) => `${num} 反対`,
    NumBury: (num: number) => `${num} 非表示推奨`,
    NumUnwanted: (num: number) => `${num} 不適切`,

    MoreVotes: "その他の投票...",
    LikeThis: "いいね",
    LinkToPost: "この投稿へのリンク",
    Report: "報告",
    ReportThisPost: "この投稿を報告",
    Admin: "管理",
    DiscIx: "ディスカッション一覧",

    Disagree: "反対",
    DisagreeExpl: "この投稿に反対する場合や、事実誤認を指摘する場合にクリックしてください。",
    Bury: "非表示推奨",
    BuryExpl: "この投稿の表示順位を下げる場合にクリックしてください。この投票はスタッフのみが確認できます。",
    Unwanted: "不適切",
    UnwantedExpl: "この投稿がサイトにふさわしくないと思う場合にクリックしてください。著者の信頼性が低下します。この投票はスタッフのみが確認できます。",

    AddTags: "タグを追加/削除",
    UnWikify: "Wiki化を解除",
    Wikify: "Wiki化",
    PinDeleteEtc: "ピン留め / 削除 / カテゴリー...",
  },


  // Share dialog

  sd: {
    Copied: "コピーしました。",
    CtrlCToCopy: "CTRL+C を押してコピーしてください。",
    ClickToCopy: "クリックしてリンクをコピー。",
  },


  // Chat

  c: {
    About_1: "ここは ",
    About_2: " チャットチャンネルです。作成者: ",
    ScrollUpViewComments: "上にスクロールして過去のコメントを表示",
    Purpose: "目的:",
    MessageDeleted: "(メッセージは削除されました)",
    JoinThisChat: "このチャットに参加する",
    PostMessage: "メッセージを投稿",
    AdvancedEditor: "高度なエディタ",
    TypeTitle: "タイトルを入力してください。このチャットの内容を数単語で表すと？",
    TypePurpose: "目的を入力してください。タイトルより長く、具体的な説明が可能です。",
    TypeHere: "ここに入力してください。Markdown と HTML が使用可能です。",
  },


  // My Menu

  mm: {
    NeedsReview: "要確認 ",
    AdminHelp: "管理者ヘルプ ",
    StaffHelp: "スタッフヘルプ ",
    DraftsEtc: "下書き、ブックマーク、タスク",
    MoreNotfs: "すべての通知を表示",
    DismNotfs: "すべて既読にする",
    ViewProfile: "プロフィールを表示",
    ViewGroups: "グループを表示",
    LogOut: "ログアウト",
    UnhideHelp: "ヘルプメッセージを再表示",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "スクロール先:",
    Scroll: "スクロール",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "戻る (B)",
    BackExpl: "このページの前の位置にスクロールで戻ります",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "ページ最上部",
    PgTopHelp: "ページの最上部に移動します。ショートカット: 1",
    Repl: "返信",
    ReplHelp: "返信セクションに移動します。ショートカット: 2",
    Progr: "進捗",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "進捗セクションに移動します。ショートカット: 3",
    PgBtm: "ページ最下部",
    Btm: "最下部",
    BtmHelp: "ページの最下部に移動します。ショートカット: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", および ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " で戻る",
  },


  // Select users dialog
  sud: {
    SelectUsers: "ユーザーを選択",
    AddUsers: "ユーザーを追加",
  },


  // About user dialog

  aud: {
    IsMod: "モデレーターです。",
    IsAdm: "管理者です。",
    IsDeld: "停止中または削除済みです。",
    ThisIsGuest: "ゲストユーザーです。誰であるかは特定できません。",
    ViewInAdm: "管理エリアで表示",
    ViewProfl: "プロフィールを表示",
    ViewComments: "他のコメントを表示",
    RmFromTpc: "トピックから削除",
    EmAdrUnkn: "メールアドレスが不明です。このゲストには返信の通知が届きません。",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "設定",
    Invites: "招待",
    DraftsEtc: "下書きなど",
    About: "概要",
    Privacy: "プライバシー",
    Security: "セキュリティ",
    Account: "アカウント",
    Interface: "インターフェース",

    // ----- Overview stats

    JoinedC: "登録日: ",
    PostsMadeC: "投稿数: ",
    LastPostC: "最新の投稿: ",
    LastSeenC: "最終訪問日: ",
    TrustLevelC: "信頼レベル: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "写真をアップロード",
    ChangePhoto: "写真を変更",
    ImgTooSmall: "画像が小さすぎます。100 x 100 以上にしてください。",

    // ----- Activity

    OnlyStaffCanSee: "スタッフおよび信頼されたコアメンバーのみが閲覧可能です。",
    OnlyMbrsCanSee: "一定期間活動しているメンバーのみが閲覧可能です。",
    Nothing: "表示するものがありません",
    Posts: "投稿",
    NoPosts: "投稿はありません。",
    Topics: "トピック",
    NoTopics: "トピックはありません。",

    // ----- User status

    UserBanned: "このユーザーは禁止されています",
    UserSuspended: (dateUtc: string) => `このユーザーは ${dateUtc} UTC まで停止されています`,
    ReasonC: "理由: ",

    DeactOrDeld: "停止中または削除済みです。",
    isGroup: " (グループ)",
    isGuest: " — ゲストユーザー。誰であるかは特定できません。",
    isMod: " – モデレーター",
    isAdmin: " – 管理者",
    you: "(あなた)",

    // ----- Notifications page

    NoNotfs: "通知はありません",
    NotfsToYouC: "あなたへの通知:",
    NotfsToOtherC: (name: string) => `${name} への通知:`,
    DefNotfsSiteWide: "サイト全体のデフォルト通知設定",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "対象:",

    // ----- Drafts Etc page

    NoDrafts: "下書きはありません",
    YourDraftsC: "あなたの下書き:",
    DraftsByC: (name: string) => `${name} の下書き:`,

    // ----- Invites page

    InvitesIntro: "ここでは、他の人をこのサイトに招待できます。",
    InvitesListedBelow: "送信済みの招待は以下の通りです。",
    NoInvites: "まだ誰も招待していません。",

    InvitedEmail: "招待したメールアドレス",
    WhoAccepted: "参加したメンバー",
    InvAccepted: "招待を承認",
    InvSent: "招待を送信",
    JoinedAlready: "参加済み",

    SendAnInv: "招待する", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "招待を送信",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "簡単なメールを送信します。受信者はログイン不要で、リンクをクリックするだけで即座に参加できます。" +
        "招待された人は通常メンバーになります。モデレーターや管理者にはなりません。",
    //EnterEmail: "Enter email(s)",
    InvDone: "完了しました。メールを送信します。",
    NoOneToInv: "招待する相手がいません。",
    InvNotfLater: "招待が完了したらお知らせします。",
    AlreadyInvSendAgainQ: "これらは既に招待済みです。再送しますか？",
    InvErr_1: "以下の宛先で",
    InvErr_2: "エラー",
    InvErr_3: "が発生しました:",
    TheseJoinedAlrdyC: "これらは既に参加しているため、招待は送信されませんでした:",
    ResendInvsQ: "これらに招待メールを再送しますか？既に招待済みです。",
    InvAgain: "再招待",

    // ----- Preferences, About

    AboutYou: "あなたについて",
    WebLink: "Webサイトまたは自分のページ。",

    NotShownCannotChange: "公開されません。変更できません。",

    // The full name or alias:
    NameOpt: "名前 (任意)",

    NotShown: "公開されません。",

    // The username:
    MayChangeFewTimes: "数回しか変更できません。",
    notSpecified: "(未指定)",
    ChangeUsername_1: "ユーザー名は数回しか変更できません。",
    ChangeUsername_2: "頻繁に変更すると他のユーザーが混乱し、@メンションができなくなる可能性があります。",

    NotfAboutAll: "（ミュートしていない限り）すべての新しい投稿について通知を受け取る",
    NotfAboutNewTopics: "（ミュートしていない限り）新しいトピックについて通知を受け取る",

    ActivitySummaryEmails: "アクティビティ要約メール",

    EmailSummariesToGroup:
        "このグループのメンバーがしばらく訪問していない場合、デフォルトで人気のトピックなどの要約をメールで送信します。",
    EmailSummariesToMe:
        "私がしばらく訪問していない場合、人気のトピックなどの要約をメールで送信してください。",

    AlsoIfTheyVisit: "定期的に訪問している場合でもメールを送信する。",
    AlsoIfIVisit: "定期的に訪問している場合でもメールを送信する。",

    HowOftenWeSend: "メールの送信頻度を選択してください。",
    HowOftenYouWant: "メールの送信頻度を選択してください。",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "外部ユーザーや新しいメンバーに最近のアクティビティを非表示にしますか？",
    HideActivityStrangers_2: "（一定期間活動しているメンバーには表示されます。）",
    HideActivityAll_1: "すべての人に最近のアクティビティを非表示にしますか？",
    HideActivityAll_2: "（スタッフおよび信頼されたコアメンバーには表示されます。）",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "メールアドレス",
    PrimaryDot: "メイン。 ",
    VerifiedDot: "確認済み。 ",
    NotVerifiedDot: "未確認。 ",
    ForLoginWithDot: (provider: string) => `${provider} でログイン用。 `,
    MakePrimary: "メインにする",
    AddEmail: "メールアドレスを追加",
    TypeNewEmailC: "新しいメールアドレスを入力してください:",
    MaxEmailsInfo: (numMax: number) => `（${numMax} 個以上のメールアドレスは追加できません。）`,
    EmailAdded_1: "追加されました。確認メールを送信しました — ",
    EmailAdded_2: "受信トレイを確認してください。",
    SendVerifEmail: "確認メールを送信",

    EmailStatusExpl:
        "（'メイン' はログインに使用され、通知が送信されるアドレスです。'確認済み' は確認メールのリンクをクリック済みであることを意味します。）",

    // Password:
    ChangePwdQ: "パスワードを変更しますか？",
    CreatePwdQ: "パスワードを作成しますか？",
    WillGetPwdRstEml: "パスワードリセットメールが送信されます。",
    // This is the "None" in:  "Password: None"
    PwdNone: "なし",

    // Logins:
    LoginMethods: "ログイン方法",
    commaAs: "、ログイン名: ",

    // One's data:
    YourContent: "あなたのコンテンツ",
    DownloadPosts: "投稿をダウンロード",
    DownloadPostsHelp: "投稿したトピックやコメントのコピーを JSON ファイルとして作成します。",
    DownloadPersData: "個人データをダウンロード",
    DownloadPersDataHelp: "個人データ（名前、メールアドレスなど）のコピーを JSON ファイルとして作成します。",


    // Delete account:
    DangerZone: "危険な操作",
    DeleteAccount: "アカウントを削除",
    DeleteYourAccountQ:
        "アカウントを削除しますか？あなたの名前、メールアドレス、パスワード、および外部連携（Facebook や Twitter など）の情報を削除します。" +
        "以後ログインできなくなります。この操作は取り消せません。",
    DeleteUserQ:
        "このユーザーを削除しますか？名前、メールアドレス、パスワード、および外部連携（Facebook や Twitter など）の情報を削除します。" +
        "ユーザーは以後ログインできなくなります。この操作は取り消せません。",
    YesDelete: "はい、削除します",
  },


  // Group profile page
  gpp: {
    GroupMembers: "グループメンバー",
    NoMembers: "メンバーはいません。",
    MayNotListMembers: "メンバー一覧を表示できません。",
    AddMembers: "メンバーを追加",
    BuiltInCannotModify: "これは組み込みのグループであり、変更できません。",
    NumMembers: (num: number) => `${num} 人のメンバー`,
    YouAreMember: "あなたはメンバーです。",
    CustomGroupsC: "カスタムグループ:",
    BuiltInGroupsC: "組み込みグループ:",
    DeleteGroup: "このグループを削除",
  },


  // Create user dialog

  cud: {
    CreateUser: "ユーザーを作成",
    CreateAccount: "アカウントを作成",
    EmailC: "メールアドレス:",  // REMOVE move to t.EmailC instead
    keptPriv: "公開されません",
    forNotfsKeptPriv: "返信通知用（公開されません）",
    EmailVerifBy_1: "メールアドレスは ",
    EmailVerifBy_2: " によって確認されました。",
    UsernameC: "ユーザー名:",
    FullNameC: "氏名:",
    optName: "任意",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "アカウントが作成され、ログインしました。",  // COULD say if verif email sent too?
    AlmostDone:
        "あと少しです！メールアドレスを確認する必要があります。メールを送信しましたので、" +
        "メール内のリンクをクリックしてアカウントを有効化してください。このページは閉じても構いません。",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "利用規約とプライバシーポリシー",

    Accept_1: "当サイトの ",
    TermsOfService: "利用規約",
    TermsOfUse: "利用規約",
    Accept_2: " および ",
    PrivPol: "プライバシーポリシー",
    Accept_3_User: " に同意しますか？",
    Accept_3_Owner: "（サイトオーナー向け）に同意しますか？",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "はい、同意します",
  },


  // Password input

  pwd: {
    PasswordC: "パスワード:",
    StrengthC: "強度: ",
    FairlyWeak: "やや弱いです。",
    toShort: "短すぎます",
    TooShort: (minLength: number) => `短すぎます。少なくとも${minLength}文字必要です。`,
    PlzInclDigit: "数字または特殊文字を含めてください",
    TooWeak123abc: "弱すぎます。'12345' や 'abcde' のようなパスワードは避けてください。",
    AvoidInclC: "パスワードに名前やメールアドレスの一部を含めないでください:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "ページが見つからないか、アクセスが拒否されました。",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "現在他のユーザーとして操作中です。そのユーザーにはアクセス権限がない可能性があります。",

    IfYouThinkExistsThen: "ページが存在するはずだと思う場合は、アクセス権限のあるアカウントでログインしてください。",
    LoggedInAlready: "（既にログインしていますが、別のアカウントが必要ですか？）",
    ElseGoToHome_1: "または、",
    ElseGoToHome_2: "ホームページに移動してください。",

    CreateAcconut: "アカウントを作成",
    ContinueWithDots: "外部サービスで続行...",
    SignUp: "参加",
    LogIn: "ログイン",
    LogInWithPwd: "パスワードでログイン",
    CreateAdmAcct: "管理者アカウントを作成:",
    AuthRequired: "このサイトにアクセスするには認証が必要です",
    LogInToLike: "この投稿にいいねするにはログインしてください",
    LogInToSubmit: "ログインして送信",
    LogInToComment: "ログインしてコメントを書く",
    LogInToCreateTopic: "ログインしてトピックを作成",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "または ",         // "Or "
    OrLogIn_2: "ログイン",      // "Log in" (this is a button)
    OrLogIn_3: " してください",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "または ",
    SignUpInstead_2: "アカウントを作成", // (this is a button)
    SignUpInstead_3: "してください",

    OrTypeName_1: "、または単に ",
    OrTypeName_2: "名前を入力",   // is a button
    OrTypeName_3: "してください",

    OrCreateAcctHere: "またはアカウントを作成:",
    OrTypeName: "または名前を入力:",
    OrLogIn: "またはログイン:",
    YourNameQ: "お名前は？",

    BadCreds: "ユーザー名またはパスワードが間違っています",

    UsernameOrEmailC: "ユーザー名またはメールアドレス:",
    PasswordC: "パスワード:",
    ForgotPwd: "パスワードを忘れましたか？",

    NoPwd: "パスワードが設定されていません。",
    CreatePwd: "パスワードを作成",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "問題の内容を教えてください。",
    ThanksHaveReported: "ありがとうございます。報告を受け付けました。スタッフが確認いたします。",
    ReportComment: "コメントを報告",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "この投稿には個人情報（実名など）が含まれています。",
    OptOffensive: "この投稿には不快または攻撃的な内容が含まれています。",
    OptSpam: "この投稿はスパム（迷惑広告）です。",
    OptOther: "その他の理由でスタッフに通知します。",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "ログインしている場合は、自分の名前をクリックして ",
    YouCanShowAgain_2: "「ヘルプメッセージを再表示」をクリックすることで、再度表示できます。",
  },


  // Editor

  e: {
    SimilarTopicsC: "類似のトピック:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "申し訳ありませんが、現在は一度に1つのファイルしかアップロードできません",
    PleaseFinishPost: "まず投稿を書き終えてください",
    PleaseFinishChatMsg: "まずチャットメッセージを書き終えてください",
    PleaseFinishMsg: "まずメッセージを書き終えてください",
    PleaseSaveEdits: "まず現在の編集を保存してください",
    PleaseSaveOrCancel: "まず新しいトピックを保存するかキャンセルしてください",
    CanContinueEditing: "エディタを再度開くと、編集を再開できます。",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "すべてのテキストを削除しないでください。何か入力してください。",
    PleaseWriteSth: "何か入力してください。",
    PleaseWriteTitle: "トピックのタイトルを入力してください。",
    PleaseWriteMsgTitle: "メッセージのタイトルを入力してください。",
    PleaseWriteMsg: "メッセージを入力してください。",

    exBold: "太字",
    exEmph: "強調",
    exPre: "整形済みテキスト",
    exQuoted: "引用テキスト",
    ExHeading: "見出し",

    TitlePlaceholder: "タイトルを入力してください — 内容を一文で表すと？",

    EditPost_1: "投稿の",
    EditPost_2: "編集",

    TypeChatMsg: "チャットメッセージを入力:",
    YourMsg: "あなたのメッセージ:",
    CreateTopic: "新しいトピックを作成",
    CreateCustomHtml: "カスタム HTML ページを作成（<h1> タイトルを自分で追加してください）",
    CreateInfoPage: "情報ページを作成",
    CreateCode: "ソースコードページを作成",
    AskQuestion: "質問する",
    ReportProblem: "問題を報告",
    SuggestIdea: "アイデアを提案",
    NewChat: "チャットのタイトルと目的",  // MISSING, changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "プライベートチャットのタイトルと目的",  // MISSING, changed from "New private chat" to just "Private chat".
    AppendComment: "ページの下部にコメントを追加:",

    ReplyTo: "返信先: ",
    ReplyTo_theOrigPost: "最初の投稿",
    ReplyTo_post: "投稿 ",
    AddCommentC: "コメントを追加:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "返信先の投稿を1つ以上選択してください。",

    Save: "保存",
    edits: "編集内容",

    PostReply: "返信を投稿",
    PostComment: "コメントを投稿",

    Post: "投稿",
    comment: "コメント",
    question: "質問",

    PostMessage: "メッセージを投稿",
    SimpleEditor: "シンプルエディタ",

    Send: "送信",
    message: "メッセージ",

    Create: "作成",
    page: "ページ",
    chat: "チャット",
    idea: "アイデア",
    topic: "トピック",

    Submit: "送信",
    problem: "問題",

    ViewOldEdits: "過去の編集を表示",

    UploadBtnTooltip: "ファイルまたは画像をアップロード",
    BoldBtnTooltip: "太字",
    EmBtnTooltip: "強調",
    QuoteBtnTooltip: "引用",
    PreBtnTooltip: "整形済みテキスト",
    HeadingBtnTooltip: "見出し",

    TypeHerePlaceholder: "ここに入力してください。Markdown と HTML が使用可能です。画像をドラッグ＆ドロップで貼り付けられます。",

    Maximize: "最大化",
    ToNormal: "元に戻す",
    TileHorizontally: "水平に並べる",

    PreviewC: "プレビュー:",
    TitleExcl: " （タイトルを除く）",
    ShowEditorAgain: "エディタを再表示",
    Minimize: "最小化",

    PreviewInfo: "ここでは、投稿がどのように表示されるかを確認できます。",
    CannotType: "ここでは入力できません。",

    LoadingDraftDots: "下書きを読み込み中...",
    DraftUnchanged: "変更なし。",
    CannotSaveDraftC: "下書きを保存できません:",
    DraftSavedBrwsr: "下書きをブラウザに保存しました。",   // MISSING
    DraftSaved: (nr: string | number) => `下書き ${nr} を保存しました。`,
    DraftDeleted: (nr: string | number) => `下書き ${nr} を削除しました。`,
    WillSaveDraft: (nr: string | number) => `下書き ${nr} を保存します...`,
    SavingDraft: (nr: string | number) => `下書き ${nr} を保存中...`,
    DeletingDraft: (nr: string | number) => `下書き ${nr} を削除中...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "カテゴリーを選択",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "トピックの種類を選択:",
    DiscussionExpl: "何かについてのディスカッション。",
    QuestionExpl: "回答の1つを解決策としてマークできます。",
    ProblExpl: "何かが壊れている、または機能しない場合。修正済み/解決済みとしてマークできます。",
    IdeaExpl: "提案。完了/実施済みとしてマークできます。",
    ChatExpl: "終わりのない会話。",
    PrivChatExpl: "招待されたユーザーのみが閲覧可能なチャット。",

    CustomHtml: "カスタム HTML ページ",
    InfoPage: "情報ページ",
    Code: "コード",
    EmbCmts: "埋め込みコメント",
    About: "概要",
    PrivChat: "プライベートチャット",
    Form: "フォーム",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "参加可能なコミュニティはこれ以上ありません。",
    SelCmty: "コミュニティを選択...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "ヘルプを検索",  // MISSING
    TxtToFind: "検索するテキスト",
  },


  // No internet

  ni: {
    NoInet: "インターネット接続がありません",
    PlzRefr: "最新の変更を表示するにはページを更新してください。（切断されました）",
    RefrNow: "今すぐ更新",
  },


  PostDeleted: (postNr: number) => `投稿番号 ${postNr} は削除されました。`,
  NoSuchPost: (postNr: number) => `このページに投稿番号 ${postNr} は存在しません。`,
  NoPageHere: "このページは削除されたか、存在しないか、アクセス権限がありません。",
  GoBackToLastPage: "前のページに戻る",

};


