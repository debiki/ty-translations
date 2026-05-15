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

var t_ko_KR: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "활동",
  Activity: "활동",
  Add: "추가",
  AddingDots: "추가 중 ...",
  AddComment: "댓글 추가",
  Admin: "관리자",
  AdvSearch: "고급 검색",
  Anonym: "익명",
  Away: "자리 비움",
  Back: "뒤로",
  BlogN: "블로그",
  Bookmarks: "북마크",
  Cancel: "취소",
  Categories: "카테고리",
  Category: "카테고리",
  ChangeV: "변경",
  ClickToShow: "클릭하여 표시",
  ChangeDots: "변경 ...",
  ChatN: "채팅",
  Chatting: "채팅 중",
  CheckYourEmail: "이메일을 확인하세요",
  Close: "닫기",
  closed: "닫힘",
  comments: "댓글",
  Continue: "계속",
  Created: "작성됨",
  Delete: "삭제",
  Deleted: "삭제됨",
  DirectMessage: "쪽지",
  Discussion: "토론",
  discussion: "토론",
  done: "완료",
  EditV: "수정",
  Editing: "수정 중",
  EmailC: "이메일: ",
  EmailAddress: "이메일 주소",
  EmailAddresses: "이메일 주소",
  EmailSentD: "이메일이 전송되었습니다.",
  Forum: "포럼",
  GetNotifiedAbout: "알림 받기:",
  GroupsC: "그룹:",
  Hide: "숨기기",
  Home: "홈",
  Idea: "아이디어",
  Join: "가입",
  KbdShrtcsC: "단축키: ",
  Loading: "로딩 중...",
  LoadMore: "더 보기 ...",
  LogIn: "로그인",
  LoggedInAs: "로그인 사용자: ",
  LogOut: "로그아웃",
  Maybe: "아마도",
  Manage: "관리",
  Members: "회원",
  MessageN: "메시지",
  MoreDots: "더 보기...",
  Move: "이동",
  Name: "이름",
  NameC: "이름:",
  NewTopic: "새 주제",
  NoCancel: "아니요, 취소",
  Notifications: "알림",
  NotImplemented: "(구현되지 않음)",
  NotYet: "아직 아님",
  NoTitle: "제목 없음",
  NoTopics: "주제 없음.",
  Okay: "확인",
  OkayDots: "확인 ...",
  Online: "온라인",
  onePerLine: "줄당 하나",
  PreviewV: "미리보기",
  Problem: "문제",
  progressN: "진행",
  Question: "질문",
  Recent: "최신",
  Remove: "삭제",
  Reopen: "다시 열기",
  ReplyV: "답글",
  Replying: "답글 작성 중",
  Replies: "답글",
  replies: "답글",
  Save: "저장",
  SavingDots: "저장 중 ...",
  SavedDot: "저장됨.",
  Search: "검색",
  SendMsg: "메시지 보내기",
  ShowPreview: "미리보기 표시",
  SignUp: "가입",
  Solution: "해결책",
  started: "시작됨",
  Summary: "요약",
  Submit: "제출",
  Tag: "태그",
  Tags: "태그",
  Tools: "도구",
  Topics: "주제",
  TopicTitle: "주제 제목",
  TopicType: "주제 유형",
  UploadingDots: "업로드 중...",
  Username: "사용자명",
  Users: "사용자",
  Welcome: "환영합니다",
  Wiki: "위키",
  Yes: "예",
  YesBye: "예, 나갑니다",
  YesDoThat: "예, 그렇게 하세요",
  You: "나",
  you: "나",

  // Trust levels.
  Guest:  "게스트",
  NewMember: "새 회원",
  BasicMember: "일반 회원",
  FullMember: "정회원",
  TrustedMember: "신뢰하는 회원",
  RegularMember: "신뢰하는 일반 회원",
  CoreMember: "핵심 회원",

  // Periods.
  PastDay: "지난 하루",
  PastWeek: "지난 한 주",
  PastMonth: "지난 한 달",
  PastQuarter: "지난 분기",
  PastYear: "지난 일 년",
  AllTime: "전체 기간",

  // Time ago letters.
  monthsLtr: "달",
  daysLtr: "일",
  hoursLtr: "시",
  minsLtr: "분",
  secsLtr: "초",

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    `${numDays}일 전`,

  hoursAgo: (numHours: number) =>
    `${numHours}시간 전`,

  minutesAgo: (numMins: number) =>
    `${numMins}분 전`,

  secondsAgo: (numSecs: number) =>
    `${numSecs}초 전`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "이메일이 필요합니다",
    NoSpcs: "공백은 허용되지 않습니다",
    InvldAddr: "유효한 이메일 주소가 아닙니다",
    NoBadChrs: "잘못된 문자가 포함되어 있습니다",

    // Full name input field:
    NotOnlSpcs: "공백만 입력할 수는 없습니다",
    NoAt: "@ 문자는 허용되지 않습니다",

    // Username input field:
    NoDash: "대시(-)는 허용되지 않습니다",
    DontInclAt: "@를 포함하지 마세요",
    StartEndLtrDgt: "문자나 숫자로 시작하고 끝나야 합니다",
    OnlLtrNumEtc: "문자(a-z, A-Z), 숫자, _(언더스코어)만 사용할 수 있습니다",
    // This shown just below the username input:
    UnUnqShrt_1: "나만의 ",
    UnUnqShrt_2: "@사용자명",
    UnUnqShrt_3: ", 고유하고 짧게",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `최소 ${minLength}자 이상이어야 합니다`,
    TooLong: (maxLength: number) => `너무 깁니다. 최대 ${maxLength}자까지 가능합니다`,
  },


  // Notification levels.

  nl: {
    EveryPost: "모든 게시물",
    EveryPostInTopic: "이 주제의 모든 새 답글에 대해 알림을 받습니다.",
    EveryPostInCat: "이 카테고리의 모든 새 주제와 답글에 대해 알림을 받습니다.",
    EveryPostInTopicsWithTag: "이 태그가 달린 새 주제와 그 주제의 모든 답글에 대해 알림을 받습니다.",
    EveryPostWholeSite: "사이트 전체의 모든 새 주제와 답글에 대해 알림을 받습니다.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "새 주제",
    NewTopicsInCat: "이 카테고리의 새 주제에 대해 알림을 받습니다.",
    NewTopicsWithTag: "이 태그가 달린 새 주제에 대해 알림을 받습니다.",
    NewTopicsWholeSite: "어디서든 새 주제에 대해 알림을 받습니다.",

    Tracking: "추적 중",

    Normal: "일반",
    NormalDescr: "누군가 나에게 직접 또는 간접적으로(예: 내 답글의 답글) 이야기하면 알림을 받습니다.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "조용함",
    HushedDescr: "누군가 나에게 직접 이야기할 때만 알림을 받습니다.",

    Muted: "알림 끔",
    MutedTopic: "알림 없음.",
  },


  // Forum intro text

  fi: {
    Edit: "수정",
    Hide_1: "숨기기",
    Hide_2: ", ",
    Hide_3: "을(를) 클릭하여 다시 열기",
  },


  // Forum categories

  fcs: {
    All: "전체",
  },


  // Forum buttons

  fb: {

    TopicList: "주제 목록",

    // Select category dropdown

    from: "원본:",
    in: "위치:",
    AllCats: "모든 카테고리",

    // Topic sort order

    Active: "최근 활동순",
    ActiveDescr: "최근 활동이 있는 주제를 먼저 표시합니다",

    New: "최신순",
    NewDescr: "가장 최근에 작성된 주제를 먼저 표시합니다",

    Top: "인기순",
    TopDescr: "인기 있는 주제를 먼저 표시합니다",

    // Topic filter dropdown

    AllTopics: "모든 주제",

    ShowAllTopics: "모든 주제 표시",
    ShowAllTopicsDescr: "삭제된 주제 제외",

    WaitingTopics: "대기 중인 주제",
    OnlyWaitingDescr_1: "해결책이나 구현을 ",
    OnlyWaitingDescr_2: "대기 중인 ",
    OnlyWaitingDescr_3: "주제만 표시합니다",

    YourTopics: "내 주제",
    AssignedToYou: "나에게 할당됨",

    DeletedTopics: "삭제된 항목 표시",
    ShowDeleted: "삭제된 항목 표시",
    ShowDeletedDescr: "삭제된 주제를 포함하여 모든 주제를 표시합니다",

    // Rightmost buttons

    ViewCategories: "카테고리 보기",
    EditCat: "카테고리 수정",
    CreateCat: "카테고리 생성",
    CreateTopic: "주제 생성",
    PostIdea: "아이디어 게시",
    AskQuestion: "질문하기",
    ReportProblem: "문제 보고",
    CreateMindMap: "마인드맵 생성",
    CreatePage: "페이지 생성",

  },


  // Forum topic list

  ft: {
    ExplIcons: "아이콘 설명...",
    IconExplanation: "아이콘 설명:",
    ExplGenDisc: "일반적인 토론.",
    ExplQuestion: "채택된 답변이 없는 질문.",
    ExplAnswer: "채택된 답변이 있는 질문.",
    ExplIdea: "아이디어 / 제안.",
    ExplProblem: "문제.",
    ExplPlanned: "수정 또는 구현 계획 중인 항목.",
    ExplDone: "완료 또는 수정된 항목.",
    ExplClosed: "종료된 주제.",
    ExplPinned: "항상 처음에 표시되는 주제 (카테고리 내에서만 해당할 수 있음).",

    PopularTopicsComma: "인기 주제, ",
    TopFirstAllTime: "전체 기간 중 가장 인기 있는 주제를 먼저 표시합니다.",
    TopFirstPastDay: "지난 하루 동안 인기 있었던 주제를 표시합니다.",

    CatHasBeenDeleted: "이 카테고리는 삭제되었습니다",

    TopicsActiveFirst: "주제, 최근 활동순",
    TopicsNewestFirst: "주제, 최신순",

    CreatedOn: "작성일: ",
    LastReplyOn: "\n최근 답글: ",
    EditedOn: "\n수정일: ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "주제 작성자",
    frequentPoster: "자주 참여하는 사용자",
    mostRecentPoster: "최근 참여 사용자",

    inC: "위치: ",

    TitleFixed: "수정되었습니다",
    TitleDone: "완료되었습니다",
    TitleStarted: "시작되었습니다",
    TitleStartedFixing: "수정을 시작했습니다",
    TitleUnsolved: "해결되지 않은 문제입니다",
    TitleIdea: "아이디어입니다",
    TitlePlanningFix: "수정 계획 중입니다",
    TitlePlanningDo: "수행 계획 중입니다",
    TitleChat: "채팅 채널입니다",
    TitlePrivateChat: "비공개 채팅 채널입니다",
    TitlePrivateMessage: "쪽지",
    TitleInfoPage: "정보 페이지입니다",
    TitleDiscussion: "토론",
    IsPinnedGlobally: "\n전역 고정되어 처음에 표시됩니다.",
    IsPinnedInCat: "\n카테고리에 고정되어 카테고리 내 처음에 표시됩니다.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "최근 주제 (대기 중)",
    RecentTopicsInclDel: "최근 주제 (삭제된 항목 포함)",
    RecentTopics: "최근 주제",
    _replies: " 개의 답글",
    _deleted: " (삭제됨)",
    _defCat: " (기본 카테고리)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "최근 게시물",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " 명이 이 채팅에 참여 중",
    NumOnlForum: " 명이 이 포럼에 참여 중",

    // Open left-sidebar button title.
    WatchbBtn: "내 주제",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "최근 주제, 참여한 채팅, 쪽지",

    // Title shown on user profile pages.
    AbtUsr: "사용자 정보",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "사용자 프로필에서 돌아가기",
    BackFromAdm: "관리자 영역에서 돌아가기",

    // Title shown on full text search page.
    SearchPg: "검색 페이지",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "추가 ...",
    RecentlyViewed: "최근 본 주제",
    JoinedChats: "참여 중인 채팅",
    ChatChannels: "채팅 채널",
    CreateChat: "채팅 채널 생성",
    DirectMsgs: "쪽지",
    NoChats: "없음",
    NoDirMsgs: "없음",

    // The click-topic dropdown menu:
    TopicActions: "주제 동작",
    ViewPeopleHere: "참여 인원 보기",
    ViewAddRemoveMembers: "회원 보기 / 추가 / 삭제",
    ViewChatMembers: "채팅 회원 보기",
    EditChat: "채팅 설명 수정",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "이 채팅에서 나가기",
    LeaveThisCommunity: "이 커뮤니티에서 나가기",
    JoinThisCommunity: "이 커뮤니티에 가입",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "이 주제의 최근 댓글:",
    NoComments: "댓글이 없습니다.",

    YourBookmarks: "내 북마크:",

    UsersOnline: "접속 중인 사용자:",
    UsersOnlineForum: "포럼 접속 중인 사용자:",
    UsersInThisChat: "이 채팅의 사용자:",
    UsersInThisTopic: "이 주제의 사용자:",

    GettingStartedGuide: "관리자 가이드",
    AdminGuide: "관리자 가이드",
    Guide: "가이드",

    // How to hide the sidebar.
    CloseShortcutS: "닫기 (단축키: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "사람 추가",

    // Shown next to one's own username, in a list of users.
    thatsYou: "나",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "나뿐인 것 같네요",
    YouAnd: "나, 그리고 ",
    NumStrangers: (numStrangers: number) => {
      const people = "명";
      return `로그인하지 않은 ${numStrangers}${people}`;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "왼쪽의 답글은 ",
    bestFirst: "추천순으로 정렬될 수 있습니다.",
    ButBelow: "하지만 아래에서는 ",
    insteadBy: " 동일한 답글이 ",
    newestFirst: "최신순으로 정렬됩니다.",

    SoIfLeave: "따라서 나갔다가 나중에 다시 오면, 아래에서 ",
    allNewReplies: "모든 새 답글을 찾을 수 있습니다.",
    Click: "클릭하여",
    aReplyToReadIt: " 답글을 읽어보세요. 아래에는 발췌문만 표시됩니다.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "상태를 변경하려면 클릭",
    ClickToViewAnswer: "답변을 보려면 클릭",
    ViewAnswer: "답변 보기",
    ChangeStatusC: "상태 변경:",
    ChangeCatC: "카테고리 변경:",
    ChangeTopicTypeC: "주제 유형 변경:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "질문",
    hasAccptAns: "채택된 답변 있음",
    aProblem: "문제",
    planToFix: "수정 계획 중",
    anIdea: "아이디어",
    planToDo: "수행 계획 중",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "이 양식은 ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "닫혔습니다. 더 이상 작성하여 게시할 수 없습니다.",

    ThisTopicClosed_1: "이 주제는 ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: "되었습니다. 여전히 댓글을 게시할 수 있습니다.",

    ThisPageDeleted: "이 페이지는 삭제되었습니다",
    CatDeldPageToo: "카테고리가 삭제되어 이 페이지도 삭제되었습니다",

    ThreadDeld: "스레드가 삭제되었습니다",
    CmntDeld: "댓글이 삭제되었습니다",
    PostDeld: "게시물이 삭제되었습니다",
    DiscDeld: "토론이 삭제되었습니다",
    PageDeld: "페이지가 삭제되었습니다",
    PagePendAppr: "페이지 승인 대기 중",
    TitlePendAppr: "제목 승인 대기 중",
    TextPendingApproval: "본문 승인 대기 중",

    TooltipQuestClosedNoAnsw: "이 질문은 채택된 답변 없이 종료되었습니다.",
    TooltipTopicClosed: "이 주제는 종료되었습니다.",

    TooltipQuestSolved: "해결된 질문입니다",
    TooltipQuestUnsolved: "해결되지 않은 질문입니다",

    StatusDone: "완료",
    TooltipProblFixed: "수정되었습니다",
    TooltipDone: "완료되었습니다",

    StatusStarted: "시작됨",
    TooltipFixing: "수정을 시작했습니다",
    TooltipImplementing: "수행을 시작했습니다",

    StatusPlanned: "계획됨",
    TooltipProblPlanned: "수정 계획 중입니다",
    TooltipIdeaPlanned: "수행 계획 중입니다",

    StatusNew: "새로움",
    StatusNewDtl: "새 주제, 토론 중",
    TooltipUnsProbl: "해결되지 않은 문제입니다",
    TooltipIdea: "아이디어입니다",

    TooltipPersMsg: "개인 메시지",
    TooltipChat: "# 은 채팅 채널을 의미합니다",
    TooltipPrivChat: "비공개 채팅 채널입니다",

    TooltipPinnedGlob: "\n전역 고정됨.",
    TooltipPinnedCat: "\n이 카테고리에 고정됨.",

    SolvedClickView_1: "게시물 #",
    SolvedClickView_2: "에서 해결됨, 클릭하여 보기",

    PostHiddenClickShow: "숨겨진 게시물입니다. 클릭하여 표시",
    ClickSeeMoreRepls: "답글 더 보기",
    ClickSeeMoreComments: "댓글 더 보기",
    ClickSeeThisComment: "클릭하여 이 댓글 표시",
    clickToShow: "클릭하여 표시",

    ManyDisagree: "많은 사람이 반대합니다:",
    SomeDisagree: "일부 사람이 반대합니다:",

    PendAppr: "승인 대기 중",
    CmtPendAppr: "댓글 승인 대기 중, 게시됨: ",
    CmtBelowPendAppr: (isYour) => (isYour ? "당신의" : "이") + " 댓글은 승인 대기 중입니다.",

    _and: " 그리고",

    repliesTo: "답글 대상:",
    InReplyTo: "답글 대상:",
    YourReplyTo: "대상의 내 답글: ",
    YourChatMsg: "내 채팅 메시지: ",
    YourDraft: "내 임시 저장",
    YourEdits: "내 수정 사항: ",
    YourProgrNoteC: "내 진행 노트:",
    aProgrNote: "진행 노트: ",

    ReplyingToC: "답글 작성 중:",
    ScrollToPrevw_1: "클릭하여 ",
    ScrollToPrevw_2: "미리보기",

    UnfinEdits: "완료되지 않은 수정",
    ResumeEdting: "수정 재개",
    DelDraft: "임시 저장 삭제",

    ClickViewEdits: "이전 수정 내역을 보려면 클릭",

    By: "작성자: ",

    // Discussion ...
    aboutThisIdea: "이 아이디어를 어떻게 수행할지 또는 수행 여부에 대해",
    aboutThisProbl: "이 문제를 어떻게 해결할지 또는 해결 여부에 대해",

    AddProgrNote: "진행 노트 추가",
    // Progress ...
    withThisIdea: "이 아이디어 진행 상황",
    withThisProbl: "이 문제 처리 상황",
    withThis: "진행 상황",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "이 주제에 대한 알림:",

    // If is a direct message topic, members listed below this text.
    Msg: "메시지",

    SmrzRepls: "답글 요약",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies}개의 답글이 있습니다. 예상 읽기 시간: ${minutes}분`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `완료. 이전에 표시된 ${numShownBefore}개의 답글 중 ${numSummarized}개를 요약했습니다.`,
  },


  // Post actions

  pa: {
    CloseTopic: "주제 종료",
    CloseOwnQuestionTooltip: "더 이상 답변이 필요하지 않으면 이 질문을 종료하세요.",
    CloseOthersQuestionTooltip: "주제가 부적절하거나 이미 다른 주제에서 답변된 경우 이 질문을 종료하세요.",
    CloseToDoTooltip: "더 이상 수행하거나 수정할 필요가 없는 경우 이 할 일을 종료하세요.",
    CloseTopicTooltip: "더 이상 고려할 필요가 없는 경우 이 주제를 종료하세요.",

    AcceptBtnExpl: "이 게시물을 질문이나 문제의 해결책으로 채택",
    SolutionQ: "해결책입니까?",
    ClickUnaccept: "클릭하여 채택 취소",
    PostAccepted: "이 게시물이 해결책으로 채택되었습니다",

    NumLikes: (num: number) => `추천 ${num}`,
    NumDisagree: (num: number) => `반대 ${num}`,
    NumBury: (num: number) => `밀어내기 ${num}`,
    NumUnwanted: (num: number) => `원치 않음 ${num}`,

    MoreVotes: "더 많은 투표...",
    LikeThis: "추천",
    LinkToPost: "이 게시물 링크",
    Report: "보고",
    ReportThisPost: "이 게시물 보고",
    Admin: "관리자",
    DiscIx: "토론 인덱스",

    Disagree: "반대",
    DisagreeExpl: "이 게시물에 반대하거나 사실 관계 오류를 알리려면 여기를 클릭하세요.",
    Bury: "밀어내기",
    BuryExpl: "다른 게시물을 이 게시물보다 먼저 표시하도록 합니다. 포럼 스태프만 내 투표를 볼 수 있습니다.",
    Unwanted: "원치 않음",
    UnwantedExpl: "이 게시물이 이 웹사이트에 표시되는 것을 원치 않는 경우 클릭하세요. 작성자에 대한 신뢰도가 낮아집니다. 포럼 스태프만 내 투표를 볼 수 있습니다.",

    AddTags: "태그 추가/삭제",
    UnWikify: "위키 해제",
    Wikify: "위키로 만들기",
    PinDeleteEtc: "고정 / 삭제 / 카테고리 ...",
  },


  // Share dialog

  sd: {
    Copied: "복사되었습니다.",
    CtrlCToCopy: "CTRL+C를 눌러 복사하세요.",
    ClickToCopy: "클릭하여 링크 복사.",
  },


  // Chat

  c: {
    About_1: "이곳은 ",
    About_2: " 채팅 채널입니다. 작성자: ",
    ScrollUpViewComments: "이전 댓글을 보려면 위로 스크롤하세요",
    Purpose: "목적:",
    MessageDeleted: "(메시지 삭제됨)",
    JoinThisChat: "이 채팅에 참여",
    PostMessage: "메시지 게시",
    AdvancedEditor: "고급 에디터",
    TypeTitle: "제목을 입력하세요 - 이 채팅은 무엇에 대한 것인가요?",
    TypePurpose: "목적을 입력하세요 - 제목보다 더 상세할 수 있습니다.",
    TypeHere: "여기에 입력하세요. Markdown 및 HTML을 사용할 수 있습니다.",
  },


  // My Menu

  mm: {
    NeedsReview: "검토 필요 ",
    AdminHelp: "관리자 도움말 ",
    StaffHelp: "스태프 도움말 ",
    DraftsEtc: "임시 저장, 북마크, 할 일",
    MoreNotfs: "모든 알림 보기",
    DismNotfs: "모두 읽음으로 표시",
    ViewProfile: "내 프로필 보기",
    ViewGroups: "그룹 보기",
    LogOut: "로그아웃",
    UnhideHelp: "도움말 메시지 표시",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "스크롤 위치:",
    Scroll: "스크롤",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "뒤로 (B)",
    Back_2: "",
    BackExpl: "이 페이지의 이전 위치로 스크롤합니다",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "페이지 맨 위",
    PgTopHelp: "페이지 맨 위로 이동합니다. 단축키: 1",
    Repl: "답글",
    ReplHelp: "답글 섹션으로 이동합니다. 단축키: 2",
    Progr: "진행 상황",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "진행 상황 섹션으로 이동합니다. 단축키: 3",
    PgBtm: "페이지 맨 아래",
    Btm: "맨 아래",
    BtmHelp: "페이지 맨 아래로 이동합니다. 단축키: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", 그리고 ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " 키로 뒤로 스크롤",
  },


  // Select users dialog
  sud: {
    SelectUsers: "사용자 선택",
    AddUsers: "사용자 추가",
  },


  // About user dialog

  aud: {
    IsMod: "중재자입니다.",
    IsAdm: "관리자입니다.",
    IsDeld: "비활성화되었거나 삭제되었습니다.",
    ThisIsGuest: "게스트 사용자입니다.",
    ViewInAdm: "관리 영역에서 보기",
    ViewProfl: "프로필 보기",
    ViewComments: "다른 댓글 보기",
    RmFromTpc: "주제에서 제거",
    EmAdrUnkn: "이메일 주소를 알 수 없습니다. 이 게스트는 답글 알림을 받지 못합니다.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "환경 설정",
    Invites: "초대",
    DraftsEtc: "임시 저장 등",
    About: "정보",
    Privacy: "개인정보",
    Security: "보안",
    Account: "계정",
    Interface: "인터페이스",

    // ----- Overview stats

    JoinedC: "가입일: ",
    PostsMadeC: "게시물 수: ",
    LastPostC: "최근 게시물: ",
    LastSeenC: "최근 방문: ",
    TrustLevelC: "신뢰 등급: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "사진 업로드",
    ChangePhoto: "사진 변경",
    ImgTooSmall: "이미지가 너무 작습니다. 최소 100 x 100 이상이어야 합니다",

    // ----- Activity

    OnlyStaffCanSee: "스태프와 신뢰하는 핵심 회원만 볼 수 있습니다.",
    OnlyMbrsCanSee: "활동 기간이 일정 이상인 회원만 볼 수 있습니다.",
    Nothing: "표시할 내용 없음",
    Posts: "게시물",
    NoPosts: "게시물 없음.",
    Topics: "주제",
    NoTopics: "주제 없음.",

    // ----- User status

    UserBanned: "차단된 사용자입니다",
    UserSuspended: (dateUtc: string) => `이 사용자는 ${dateUtc} UTC까지 활동이 정지되었습니다`,
    ReasonC: "사유: ",

    DeactOrDeld: "비활성화되었거나 삭제되었습니다.",
    isGroup: " (그룹)",
    isGuest: " — 게스트 사용자",
    isMod: " – 중재자",
    isAdmin: " – 관리자",
    you: "(나)",

    // ----- Notifications page

    NoNotfs: "알림 없음",
    NotfsToYouC: "나에게 온 알림:",
    NotfsToOtherC: (name: string) => `${name}에게 온 알림:`,
    DefNotfsSiteWide: "사이트 기본 알림 설정",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "대상:",

    // ----- Drafts Etc page

    NoDrafts: "임시 저장 없음",
    YourDraftsC: "내 임시 저장:",
    DraftsByC: (name: string) => `${name}의 임시 저장:`,

    // ----- Invites page

    InvitesIntro: "이곳에서 다른 사람들을 이 사이트에 초대할 수 있습니다. ",
    InvitesListedBelow: "이미 보낸 초대는 아래에 표시됩니다.",
    NoInvites: "아직 아무도 초대하지 않았습니다.",

    InvitedEmail: "초대된 이메일",
    WhoAccepted: "수락한 회원",
    InvAccepted: "초대 수락됨",
    InvSent: "초대 보냄",
    JoinedAlready: "이미 가입함",

    SendAnInv: "사람들 초대하기",
    SendInv: "초대 보내기",
    SendInvExpl:
        "친구들에게 간단한 이메일을 보냅니다. 친구들이 링크를 클릭하면 " +
        "로그인 없이 즉시 가입됩니다. " +
        "친구들은 중재자나 관리자가 아닌 일반 회원이 됩니다.",
    //EnterEmail: "Enter email(s)",
    InvDone: "완료. 이메일을 보내겠습니다.",
    NoOneToInv: "초대할 사람이 없습니다.",
    InvNotfLater: "초대가 완료되면 나중에 알려드리겠습니다.",
    AlreadyInvSendAgainQ: "이미 초대된 사람들입니다. 다시 초대하시겠습니까?",
    InvErr_1: "다음에서 ",
    InvErr_2: "오류",
    InvErr_3: " 발생:",
    TheseJoinedAlrdyC: "이미 가입한 사람들이라 초대하지 않았습니다:",
    ResendInvsQ: "이 사람들에게 다시 초대를 보내시겠습니까? 이미 초대된 적이 있습니다.",
    InvAgain: "다시 초대",

    // ----- Preferences, About

    AboutYou: "내 소개",
    WebLink: "개인 웹사이트 또는 페이지.",

    NotShownCannotChange: "공개적으로 표시되지 않습니다. 변경할 수 없습니다.",

    // The full name or alias:
    NameOpt: "이름 (선택 사항)",

    NotShown: "공개적으로 표시되지 않습니다.",

    // The username:
    MayChangeFewTimes: "제한된 횟수만큼만 변경할 수 있습니다.",
    notSpecified: "(지정되지 않음)",
    ChangeUsername_1: "사용자명은 몇 번만 변경할 수 있습니다.",
    ChangeUsername_2: "너무 자주 변경하면 다른 사람들이 혼란스러워할 수 있으며, " +
        "나를 @급급하는 방법을 모르게 될 수 있습니다.",

    NotfAboutAll: "모든 새 게시물에 대해 알림 받기 (주제나 카테고리를 알림 끔으로 설정한 경우 제외)",
    NotfAboutNewTopics: "새 주제에 대해 알림 받기 (카테고리를 알림 끔으로 설정한 경우 제외)",

    ActivitySummaryEmails: "활동 요약 이메일",

    EmailSummariesToGroup:
        "그룹 회원이 방문하지 않을 때, 기본적으로 인기 주제 및 기타 소식의 요약을 " +
        "이메일로 보냅니다.",
    EmailSummariesToMe:
        "내가 방문하지 않을 때, 인기 주제 및 기타 소식의 요약을 " +
        "이메일로 보내줍니다.",

    AlsoIfTheyVisit: "정기적으로 방문하더라도 이메일을 보냅니다.",
    AlsoIfIVisit: "정기적으로 방문하더라도 이메일을 보내줍니다.",

    HowOftenWeSend: "이메일을 얼마나 자주 보낼까요?",
    HowOftenYouWant: "이메일을 얼마나 자주 받고 싶으신가요?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "외부인과 새 회원에게 최근 활동을 숨길까요?",
    HideActivityStrangers_2: "(활동 기간이 어느 정도 된 회원에게는 표시됩니다.)",
    HideActivityAll_1: "모든 사람에게 최근 활동을 숨길까요?",
    HideActivityAll_2: "(스태프와 신뢰하는 핵심 회원에게는 표시됩니다.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "이메일 주소",
    PrimaryDot: "기본. ",
    VerifiedDot: "인증됨. ",
    NotVerifiedDot: "인증되지 않음. ",
    ForLoginWithDot: (provider: string) => `${provider}(으)로 로그인용. `,
    MakePrimary: "기본으로 설정",
    AddEmail: "이메일 주소 추가",
    TypeNewEmailC: "새 이메일 주소 입력:",
    MaxEmailsInfo: (numMax: number) => `(최대 ${numMax}개의 주소까지 추가할 수 있습니다.)`,
    EmailAdded_1: "추가되었습니다. 인증 이메일을 보냈습니다 — ",
    EmailAdded_2: "받은 편지함을 확인하세요.",
    SendVerifEmail: "인증 이메일 보내기",

    EmailStatusExpl:
        "('기본'은 이 주소로 로그인할 수 있고 알림을 받는다는 의미입니다. " +
        "'인증됨'은 주소 인증 이메일의 인증 링크를 클릭했다는 의미입니다.)",

    // Password:
    ChangePwdQ: "비밀번호를 변경하시겠습니까?",
    CreatePwdQ: "비밀번호를 만드시겠습니까?",
    WillGetPwdRstEml: "비밀번호 재설정 이메일이 발송됩니다.",
    // This is the "None" in:  "Password: None"
    PwdNone: "없음",

    // Logins:
    LoginMethods: "로그인 수단",
    commaAs: ", 계정: ",

    // One's data:
    YourContent: "내 콘텐츠",
    DownloadPosts: "게시물 다운로드",
    DownloadPostsHelp: "내가 게시한 주제와 댓글 사본이 포함된 JSON 파일을 생성합니다.",
    DownloadPersData: "개인 데이터 다운로드",
    DownloadPersDataHelp: "내 이름(지정한 경우)과 이메일 주소 등 개인 데이터 사본이 포함된 JSON 파일을 생성합니다.",


    // Delete account:
    DangerZone: "위험 구역",
    DeleteAccount: "계정 삭제",
    DeleteYourAccountQ:
        "계정을 삭제하시겠습니까? 이름, 이메일 주소, 비밀번호 및 " +
        "모든 온라인 아이덴티티(Facebook 또는 Twitter 로그인 등)가 제거됩니다. " +
        "다시는 로그인할 수 없으며, 이 작업은 되돌릴 수 없습니다.",
    DeleteUserQ:
        "이 사용자를 삭제하시겠습니까? 이름, 이메일 주소, 비밀번호 및 " +
        "온라인 아이덴티티(Facebook 또는 Twitter 로그인 등)가 제거됩니다. " +
        "사용자는 다시 로그인할 수 없으며, 이 작업은 되돌릴 수 없습니다.",
    YesDelete: "예, 삭제합니다",
  },


  // Group profile page
  gpp: {
    GroupMembers: "그룹 회원",
    NoMembers: "회원 없음.",
    MayNotListMembers: "회원 목록을 볼 수 없습니다.",
    AddMembers: "회원 추가",
    BuiltInCannotModify: "시스템 기본 그룹입니다. 수정할 수 없습니다.",
    NumMembers: (num: number) => `${num}명의 회원`,
    YouAreMember: "회원입니다.",
    CustomGroupsC: "사용자 정의 그룹:",
    BuiltInGroupsC: "시스템 기본 그룹:",
    DeleteGroup: "이 그룹 삭제",
  },


  // Create user dialog

  cud: {
    CreateUser: "사용자 생성",
    CreateAccount: "계정 생성",
    EmailC: "이메일:",
    keptPriv: "비공개로 유지됩니다",
    forNotfsKeptPriv: "답글 알림용, 비공개 유지",
    EmailVerifBy_1: "이메일이 ",
    EmailVerifBy_2: "에 의해 인증되었습니다.",
    UsernameC: "사용자명:",
    FullNameC: "전체 이름:",
    optName: "선택 사항",

    DoneLoggedIn: "계정이 생성되었습니다. 로그인되었습니다.",
    AlmostDone:
        "거의 다 되었습니다! 이메일 주소를 확인해 주세요. " +
        "이메일을 보냈습니다. 이메일의 링크를 클릭하여 " +
        "계정을 활성화해 주세요. 이 페이지는 닫으셔도 됩니다.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "약관 및 개인정보 보호정책",

    Accept_1: "우리의 ",
    TermsOfService: "서비스 약관",
    TermsOfUse: "이용 약관",
    Accept_2: " 및 ",
    PrivPol: "개인정보 보호정책",
    Accept_3_User: "에 동의하십니까?",
    Accept_3_Owner: "에 동의하십니까? (사이트 소유자용)",

    YesAccept: "예, 동의합니다",
  },


  // Password input

  pwd: {
    PasswordC: "비밀번호:",
    StrengthC: "강도: ",
    FairlyWeak: "상당히 약함.",
    toShort: "너무 짧음",
    TooShort: (minLength: number) => `너무 짧습니다. 최소 ${minLength}자 이상이어야 합니다`,
    PlzInclDigit: "숫자나 특수 문자를 포함해 주세요",
    TooWeak123abc: "너무 약합니다. '12345'나 'abcde'와 같은 비밀번호는 사용하지 마세요.",
    AvoidInclC: "비밀번호에 이름이나 이메일의 일부가 포함되지 않도록 하세요:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "페이지를 찾을 수 없거나 접근이 거부되었습니다.",

    IsImpersonating: "다른 사용자로 활동 중입니다. 이 웹사이트의 모든 부분에 " +
        "접근하지 못할 수도 있습니다.",

    IfYouThinkExistsThen: "페이지가 존재한다고 생각되면 접근 권한이 있는 계정으로 로그인하세요. ",
    LoggedInAlready: "(이미 로그인되어 있지만, 다른 계정인가요?) ",
    ElseGoToHome_1: "또는 ",
    ElseGoToHome_2: "홈페이지로 이동할 수 있습니다.",

    CreateAcconut: "계정 생성",
    ContinueWithDots: "계속하기 ...",
    SignUp: "가입",
    LogIn: "로그인",
    LogInWithPwd: "비밀번호로 로그인",
    CreateAdmAcct: "관리자 계정 생성:",
    AuthRequired: "이 사이트에 접근하려면 인증이 필요합니다",
    LogInToLike: "추천하려면 로그인하세요",
    LogInToSubmit: "로그인하고 제출",
    LogInToComment: "댓글을 쓰려면 로그인하세요",
    LogInToCreateTopic: "주제를 생성하려면 로그인하세요",

    OrLogIn_1: "또는 ",
    OrLogIn_2: "로그인",
    OrLogIn_3: " 하세요",

    SignUpInstead_1: "또는 ",
    SignUpInstead_2: "계정 생성",
    SignUpInstead_3: "",

    OrTypeName_1: ", 또는 ",
    OrTypeName_2: "이름 입력",
    OrTypeName_3: "",

    OrCreateAcctHere: "또는 계정 생성:",
    OrTypeName: "또는 이름 입력:",
    OrLogIn: "또는 로그인:",
    YourNameQ: "이름은 무엇인가요?",

    BadCreds: "잘못된 사용자명 또는 비밀번호",

    UsernameOrEmailC: "사용자명 또는 이메일:",
    PasswordC: "비밀번호:",
    ForgotPwd: "비밀번호를 잊으셨나요?",

    NoPwd: "아직 비밀번호를 설정하지 않았습니다.",
    CreatePwd: "비밀번호 생성",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "우려되는 부분을 알려주세요.",
    ThanksHaveReported: "감사합니다. 보고가 접수되었습니다. 스태프가 확인하겠습니다.",
    ReportComment: "댓글 보고",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "이 게시물에 실제 이름 등 개인 데이터가 포함되어 있습니다.",
    OptOffensive: "이 게시물에 불쾌하거나 모욕적인 내용이 포함되어 있습니다.",
    OptSpam: "이 게시물은 원치 않는 광고입니다.",
    OptOther: "다른 이유로 스태프에게 이 게시물을 알립니다.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "로그인한 경우, 내 이름을 클릭하고 ",
    YouCanShowAgain_2: "도움말 메시지 표시를 클릭하여 다시 볼 수 있습니다.",
  },


  // Editor

  e: {
    SimilarTopicsC: "유사한 주제:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "죄송합니다. 현재 한 번에 하나의 파일만 업로드할 수 있습니다",
    PleaseFinishPost: "먼저 게시물 작성을 완료해 주세요",
    PleaseFinishChatMsg: "먼저 채팅 메시지 작성을 완료해 주세요",
    PleaseFinishMsg: "먼저 메시지 작성을 완료해 주세요",
    PleaseSaveEdits: "먼저 현재 수정을 저장해 주세요",
    PleaseSaveOrCancel: "먼저 새 주제를 저장하거나 취소해 주세요",
    CanContinueEditing: "에디터를 다시 열면 텍스트 수정을 계속할 수 있습니다.",
    PleaseDontDeleteAll: "텍스트를 모두 삭제하지 마세요. 내용을 입력해 주세요.",
    PleaseWriteSth: "무엇이든 입력해 주세요.",
    PleaseWriteTitle: "주제 제목을 입력해 주세요.",
    PleaseWriteMsgTitle: "메시지 제목을 입력해 주세요.",
    PleaseWriteMsg: "메시지를 입력해 주세요.",

    exBold: "굵은 텍스트",
    exEmph: "강조된 텍스트",
    exPre: "서식 있는 텍스트",
    exQuoted: "인용된 텍스트",
    ExHeading: "제목",

    TitlePlaceholder: "제목을 입력하세요 - 간단하게 한 문장으로 무엇에 대한 것인가요?",

    EditPost_1: "수정: ",
    EditPost_2: "게시물 ",

    TypeChatMsg: "채팅 메시지 입력:",
    YourMsg: "내 메시지:",
    CreateTopic: "새 주제 생성",
    CreateCustomHtml: "사용자 정의 HTML 페이지 생성 (직접 <h1> 제목 추가)",
    CreateInfoPage: "정보 페이지 생성",
    CreateCode: "소스 코드 페이지 생성",
    AskQuestion: "질문하기",
    ReportProblem: "문제 보고",
    SuggestIdea: "아이디어 제안",
    NewChat: "채팅 제목 및 목적",
    NewPrivChat: "비공개 채팅 제목 및 목적",
    AppendComment: "페이지 하단에 댓글 추가:",

    ReplyTo: "답글 대상: ",
    ReplyTo_theOrigPost: "원문",
    ReplyTo_post: "게시물 ",
    AddCommentC: "댓글 추가:",

    PleaseSelectPosts: "답글을 달 게시물을 하나 이상 선택해 주세요.",

    Save: "저장",
    edits: "수정 사항",

    PostReply: "답글 게시",
    PostComment: "댓글 게시",

    Post: "게시",
    comment: "댓글",
    question: "질문",

    PostMessage: "메시지 게시",
    SimpleEditor: "일반 에디터",

    Send: "보내기",
    message: "메시지",

    Create: "생성",
    page: "페이지",
    chat: "채팅",
    idea: "아이디어",
    topic: "주제",

    Submit: "제출",
    problem: "문제",

    ViewOldEdits: "이전 수정 내역 보기",

    UploadBtnTooltip: "파일 또는 이미지 업로드",
    BoldBtnTooltip: "텍스트 굵게",
    EmBtnTooltip: "강조",
    QuoteBtnTooltip: "인용",
    PreBtnTooltip: "서식 있는 텍스트",
    HeadingBtnTooltip: "제목",

    TypeHerePlaceholder: "여기에 입력하세요. Markdown 및 HTML을 사용할 수 있습니다. 이미지를 드래그 앤 드롭하여 붙여넣을 수 있습니다.",

    Maximize: "최대화",
    ToNormal: "기본 크기로",
    TileHorizontally: "가로로 배열",

    PreviewC: "미리보기:",
    TitleExcl: " (제목 제외)",
    ShowEditorAgain: "에디터 다시 표시",
    Minimize: "최소화",

    PreviewInfo: "여기서 게시물이 어떻게 보일지 미리 볼 수 있습니다.",
    CannotType: "여기에는 입력할 수 없습니다.",

    LoadingDraftDots: "임시 저장 로딩 중...",
    DraftUnchanged: "변경 사항 없음.",
    CannotSaveDraftC: "임시 저장을 저장할 수 없음:",
    DraftSavedBrwsr: "브라우저에 임시 저장되었습니다.",
    DraftSaved: (nr: string | number) => `임시 저장 ${nr}이(가) 저장되었습니다.`,
    DraftDeleted: (nr: string | number) => `임시 저장 ${nr}이(가) 삭제되었습니다.`,
    WillSaveDraft: (nr: string | number) => `임시 저장 ${nr}을(를) 저장합니다 ...`,
    SavingDraft: (nr: string | number) => `임시 저장 ${nr} 저장 중 ...`,
    DeletingDraft: (nr: string | number) => `임시 저장 ${nr} 삭제 중 ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "카테고리 선택",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "주제 유형 선택:",
    DiscussionExpl: "무언가에 대한 토론입니다.",
    QuestionExpl: "하나의 답변을 채택된 답변으로 표시할 수 있습니다.",
    ProblExpl: "무언가 고장 났거나 작동하지 않는 경우입니다. 수정/해결됨으로 표시할 수 있습니다.",
    IdeaExpl: "제안입니다. 완료/구현됨으로 표시할 수 있습니다.",
    ChatExpl: "끝나지 않는 대화일 수 있습니다.",
    PrivChatExpl: "채팅에 초대된 사람들에게만 표시됩니다.",

    CustomHtml: "사용자 정의 HTML 페이지",
    InfoPage: "정보 페이지",
    Code: "코드",
    EmbCmts: "임베디드 댓글",
    About: "정보",
    PrivChat: "비공개 채팅",
    Form: "양식",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "더 이상 가입할 커뮤니티가 없습니다.",
    SelCmty: "커뮤니티 선택 ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "도움말 검색",
    TxtToFind: "검색할 텍스트",
  },


  // No internet

  ni: {
    NoInet: "인터넷 연결 없음",
    PlzRefr: "최신 변경 사항을 보려면 페이지를 새로고침하세요. (연결이 끊어졌었습니다)",
    RefrNow: "지금 새로고침",
  },


  PostDeleted: (postNr: number) => `해당 게시물(${postNr}번)은 삭제되었습니다.`,
  NoSuchPost: (postNr: number) => `이 페이지에 ${postNr}번 게시물이 없습니다.`,
  NoPageHere: "이 페이지는 삭제되었거나, 존재하지 않거나, 접근 권한이 없습니다.",
  GoBackToLastPage: "이전 페이지로 돌아가기",

};
