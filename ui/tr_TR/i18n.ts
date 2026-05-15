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

var t_tr_TR: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktif",
  Activity: "Etkinlik",
  Add: "Ekle",
  AddingDots: "Ekleniyor ...",
  AddComment: "Yorum Ekle",
  Admin: "Yönetici",
  AdvSearch: "Gelişmiş arama",
  Anonym: "Anonim",
  Away: "Dışarıda",
  Back: "Geri",
  BlogN: "Blog",
  Bookmarks: "Yer İmleri",
  Cancel: "İptal",
  Categories: "Kategoriler",
  Category: "Kategori",
  ChangeV: "Değiştir",
  ClickToShow: "Göstermek için tıkla",
  ChangeDots: "Değiştir ...",
  ChatN: "Sohbet",
  Chatting: "Sohbet ediyor",
  CheckYourEmail: "E-postanızı kontrol edin",
  Close: "Kapat",
  closed: "kapalı",
  comments: "yorum",   // as in:  "123 comments"
  Continue: "Devam et",
  Created: "Oluşturuldu",
  Delete: "Sil",
  Deleted: "Silindi",
  DirectMessage: "Doğrudan mesaj",
  Discussion: "Tartışma",
  discussion: "tartışma",
  done: "tamamlandı",
  EditV: "Düzenle",
  Editing: "Düzenleniyor",
  EmailC: "E-posta: ",
  EmailAddress: "E-posta adresi",
  EmailAddresses: "E-posta adresleri",
  EmailSentD: "E-posta gönderildi.",
  Forum: "Forum",
  GetNotifiedAbout: "Şunun hakkında bildirim al",
  GroupsC: "Gruplar:",
  Hide: "Gizle",
  Home: "Ana Sayfa",
  Idea: "Fikir",
  Join: "Katıl",
  KbdShrtcsC: "Klavye kısayolları: ",
  Loading: "Yükleniyor...",
  LoadMore: "Daha fazla yükle ...",
  LogIn: "Giriş Yap",
  LoggedInAs: "Giriş yapıldı: ",
  LogOut: "Çıkış yap",
  Maybe: "Belki",
  Manage: "Yönet",
  Members: "Üyeler",
  MessageN: "Mesaj",
  MoreDots: "Daha fazla...",
  Move: "Taşı",
  Name: "İsim",
  NameC: "İsim:",
  NewTopic: "Yeni konu",
  NoCancel: "Hayır, iptal et",
  Notifications: "Bildirimler",
  NotImplemented: "(Henüz eklenmedi)",
  NotYet: "Henüz değil",
  NoTitle: "Başlık yok",
  NoTopics: "Konu yok.",
  Okay: "Tamam",
  OkayDots: "Tamam ...",
  Online: "Çevrimiçi",
  onePerLine: "her satıra bir tane",
  PreviewV: "Önizleme",
  Problem: "Sorun",
  progressN: "ilerleme",
  Question: "Soru",
  Recent: "Son",
  Remove: "Kaldır",
  Reopen: "Yeniden aç",
  ReplyV: "Yanıtla",
  Replying: "Yanıtlanıyor",
  Replies: "Yanıtlar",
  replies: "yanıtlar",
  Save: "Kaydet",
  SavingDots: "Kaydediliyor ...",
  SavedDot: "Kaydedildi.",
  Search: "Ara",
  SendMsg: "Mesaj Gönder",
  ShowPreview: "Önizlemeyi göster",
  SignUp: "Katıl",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Çözüm",
  started: "başlatıldı",
  Summary: "Özet",
  Submit: "Gönder",
  Tag: "Etiket",
  Tags: "Etiketler",
  Tools: "Araçlar",
  Topics: "Konular",
  TopicTitle: "Konu başlığı",
  TopicType: "Konu türü",
  UploadingDots: "Yükleniyor...",
  Username: "Kullanıcı adı",
  Users: "Kullanıcılar",
  Welcome: "Hoş geldiniz",
  Wiki: "Wiki",
  Yes: "Evet",
  YesBye: "Evet, hoşça kal",
  YesDoThat: "Evet, öyle yap",
  You: "Siz",
  you: "siz",

  // Trust levels.
  Guest:  "Ziyaretçi",
  NewMember: "Yeni üye",
  BasicMember: "Temel üye",
  FullMember: "Tam üye",
  TrustedMember: "Güvenilir üye",
  RegularMember: "Güvenilir müdavim",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Çekirdek üye",

  // Periods.
  PastDay: "Son Gün",
  PastWeek: "Son Hafta",
  PastMonth: "Son Ay",
  PastQuarter: "Son Çeyrek",
  PastYear: "Son Yıl",
  AllTime: "Tüm Zamanlar",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "ay",  // months
  daysLtr: "g",      // days
  hoursLtr: "s",     // hours
  minsLtr: "dk",      // minutes
  secsLtr: "sn",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 gün önce" : `${numDays} gün önce`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 saat önce" : `${numHours} saat önce`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 dakika önce" : `${numMins} dakika önce`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 saniye önce" : `${numSecs} saniye önce`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-posta gerekli",
    NoSpcs: "Lütfen boşluk bırakmayın",
    InvldAddr: "Geçerli bir e-posta adresi değil",
    NoBadChrs: "Lütfen tuhaf karakterler kullanmayın",

    // Full name input field:
    NotOnlSpcs: "Lütfen sadece boşluk olmasın",
    NoAt: "Lütfen @ kullanmayın",

    // Username input field:
    NoDash: "Lütfen tire (-) kullanmayın",
    DontInclAt: "@ işaretini dahil etmeyin",
    StartEndLtrDgt: "Bir harf veya rakamla başlayıp bitmelidir",
    OnlLtrNumEtc: "Sadece harfler (a-z, A-Z) ve rakamlar ve _ (alt çizgi)",
    // This shown just below the username input:
    UnUnqShrt_1: "",
    UnUnqShrt_2: "@kullanıcıadınız",
    UnUnqShrt_3: ", benzersiz ve kısa",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `En az ${minLength} karakter olmalıdır`,
    TooLong: (maxLength: number) => `Çok uzun. En fazla ${maxLength} karakter olmalıdır`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Her Gönderi",
    EveryPostInTopic: "Bu konudaki tüm yeni yanıtlardan haberdar edileceksiniz.",
    EveryPostInCat: "Bu kategorideki tüm yeni konulardan ve yanıtlardan haberdar edileceksiniz.",
    EveryPostInTopicsWithTag: "Bu etikete sahip yeni konulardan ve bu konulardaki tüm yanıtlardan haberdar edileceksiniz.",
    EveryPostWholeSite: "Herhangi bir yerdeki tüm yeni konulardan ve yanıtlardan haberdar edileceksiniz.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Yeni Konular",
    NewTopicsInCat: "Bu kategorideki yeni konulardan haberdar edileceksiniz.",
    NewTopicsWithTag: "Bu etikete sahip yeni konulardan haberdar edileceksiniz.",
    NewTopicsWholeSite: "Herhangi bir yerdeki yeni konulardan haberdar edileceksiniz.",

    Tracking: "Takip ediliyor",

    Normal: "Normal",
    NormalDescr: "Biri sizinle konuşursa, ayrıca dolaylı olarak, örneğin size verilen bir yanıta yanıt verilirse haberdar edileceksiniz.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Sessiz",
    HushedDescr: "Sadece birisi doğrudan sizinle konuşursa haberdar edileceksiniz.",

    Muted: "Susturulmuş",
    MutedTopic: "Bildirim yok.",   // removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Düzenle",
    Hide_1: "Gizle",
    Hide_2: ", yeniden açmak için ",
    Hide_3: " tıkla",
  },


  // Forum categories

  fcs: {
    All: "Tümü", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Konu listesi",

    // Select category dropdown

    from: "şuradan",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "şurada",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Tüm kategoriler",

    // Topic sort order

    Active: "Önce aktifler",      // didn't add "first" yet to transls
    ActiveDescr: "Son zamanlarda aktif olan konuları önce gösterir",

    New: "Yeni",
    NewDescr: "En yeni konuları önce gösterir",

    Top: "Popüler",              // didn't rename from Top to Popular in transls
    TopDescr: "Popüler konuları önce gösterir",

    // Topic filter dropdown

    AllTopics: "Tüm konular",

    ShowAllTopics: "Tüm konuları göster",
    ShowAllTopicsDescr: "Silinen konular hariç",

    WaitingTopics: "Bekleyen konular",
    OnlyWaitingDescr_1: "Sadece çözüm bekleyen veya uygulanıp tamamlanmayı ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "bekleyen ",
    OnlyWaitingDescr_3: "konuları gösterir",  // rewrote

    YourTopics: "Konularınız",
    AssignedToYou: "Size atananlar",

    DeletedTopics: "Silinenleri göster",
    ShowDeleted: "Silinenleri göster",
    ShowDeletedDescr: "Silinen konular da dahil olmak üzere tüm konuları gösterir",

    // Rightmost buttons

    ViewCategories: "Kategorileri görüntüle",
    EditCat: "Kategoriyi Düzenle",
    CreateCat: "Kategori Oluştur",
    CreateTopic: "Konu Oluştur",
    PostIdea: "Fikir Paylaş",
    AskQuestion: "Soru Sor",
    ReportProblem: "Sorun Bildir",
    CreateMindMap: "Zihin Haritası Oluştur",
    CreatePage: "Sayfa Oluştur",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Simgeleri açıkla...",
    IconExplanation: "Simge açıklaması:",
    ExplGenDisc: "Genel bir tartışma.",
    ExplQuestion: "Kabul edilmiş bir cevabı olmayan bir soru.",
    ExplAnswer: "Kabul edilmiş bir cevabı olan bir soru.",
    ExplIdea: "Bir fikir / öneri.",
    ExplProblem: "Bir sorun.",
    ExplPlanned: "Yapmayı veya düzeltmeyi planladığımız bir şey.",
    ExplDone: "Yapılan veya düzeltilen bir şey.",
    ExplClosed: "Konu kapalı.",
    ExplPinned: "Konu her zaman ilk sırada listelenir (belki sadece kendi kategorisinde).",

    PopularTopicsComma: "Popüler konular, ",
    TopFirstAllTime: "Tüm zamanların en popüler konularını önce gösterir.",
    TopFirstPastDay: "Geçen günün popüler konularını gösterir.",

    CatHasBeenDeleted: "Bu kategori silindi",

    TopicsActiveFirst: "Konular, önce son aktifler",
    TopicsNewestFirst: "Konular, önce yeniler",

    CreatedOn: "Oluşturulma tarihi: ",
    LastReplyOn: "\nSon yanıt: ",
    EditedOn: "\nDüzenlenme tarihi: ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "konuyu oluşturdu",
    frequentPoster: "sık mesaj gönderen",
    mostRecentPoster: "en son mesaj gönderen",

    inC: "şurada: ",

    TitleFixed: "Bu düzeltildi",
    TitleDone: "Bu yapıldı",
    TitleStarted: "Buna başladık",
    TitleStartedFixing: "Bunu düzeltmeye başladık",
    TitleUnsolved: "Bu çözülmemiş bir sorun",
    TitleIdea: "Bu bir fikir",
    TitlePlanningFix: "Bunu düzeltmeyi planlıyoruz",
    TitlePlanningDo: "Bunu yapmayı planlıyoruz",
    TitleChat: "Bu bir sohbet kanalı",
    TitlePrivateChat: "Bu özel bir sohbet kanalı",
    TitlePrivateMessage: "Özel bir mesaj",
    TitleInfoPage: "Bu bir bilgi sayfası",
    TitleDiscussion: "Bir tartışma",
    IsPinnedGlobally: "\nSabitlendi, bu yüzden ilk sırada listeleniyor.",
    IsPinnedInCat: "\nKategorisinde sabitlendi, bu yüzden kategorisinde ilk sırada listeleniyor.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Son konular (bekleyenler)",
    RecentTopicsInclDel: "Son konular (silinenler dahil)",
    RecentTopics: "Son konular",
    _replies: " yanıt",
    _deleted: " (silindi)",
    _defCat: " (varsayılan kategori)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Son gönderiler",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " bu sohbette çevrimiçi",    // example: "5 online in this chat"
    NumOnlForum: " bu forumda çevrimiçi",

    // Open left-sidebar button title.
    WatchbBtn: "Konularınız",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Son konularınız, katıldığınız sohbetler, doğrudan mesajlar",

    // Title shown on user profile pages.
    AbtUsr: "Kullanıcı Hakkında",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Kullanıcı profilinden geri dön",
    BackFromAdm: "Yönetici alanından geri dön",

    // Title shown on full text search page.
    SearchPg: "Arama Sayfası",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Ekle ...",
    RecentlyViewed: "Son görüntülenen konular",
    JoinedChats: "Katıldığınız Sohbetler",
    ChatChannels: "Sohbet Kanalları",
    CreateChat: "Sohbet kanalı oluştur",
    DirectMsgs: "Doğrudan Mesajlar",
    NoChats: "Yok",    // meaning: "No chat messages"
    NoDirMsgs: "Yok",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Konu eylemleri",
    ViewPeopleHere: "Buradaki kişileri görüntüle",
    ViewAddRemoveMembers: "Üyeleri görüntüle / ekle / kaldır",
    ViewChatMembers: "Sohbet üyelerini görüntüle",
    EditChat: "Sohbet açıklamasını düzenle",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Bu sohbetten ayrıl",
    LeaveThisCommunity: "Bu topluluktan ayrıl",
    JoinThisCommunity: "Bu topluluğa katıl",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Bu konudaki son yorumlar:",
    NoComments: "Yorum yok.",

    YourBookmarks: "Yer imleriniz:",

    UsersOnline: "Çevrimiçi kullanıcılar:",
    UsersOnlineForum: "Bu forumda çevrimiçi kullanıcılar:",
    UsersInThisChat: "Bu sohbetteki kullanıcılar:",
    UsersInThisTopic: "Bu konudaki kullanıcılar:",

    GettingStartedGuide: "Yönetici Rehberi", // was: "Getting Started Guide".
    AdminGuide: "Yönetici Rehberi",          // ... but what? It's here already, just reuse this transl field
    Guide: "Rehber",

    // How to hide the sidebar.
    CloseShortcutS: "Kapat (klavye kısayolu: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Daha fazla kişi ekle",

    // Shown next to one's own username, in a list of users.
    thatsYou: "bu sizsiniz",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Sadece siz varsınız gibi görünüyor",
    YouAnd: "Siz ve ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " kişi" : " kişi";
      const have = "henüz giriş yapmamış";
      return numStrangers + people + " " + have;
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "Soldaki yanıtlar ",
    bestFirst: "en iyiye göre sıralanmış olabilir.",
    ButBelow: "Ancak aşağıda ",
    insteadBy: " aynı yanıtlar bunun yerine ",
    newestFirst: "en yeniye göre sıralanmıştır.",

    SoIfLeave: "Bu yüzden ayrılıp daha sonra buraya geri dönerseniz, aşağıda ",
    allNewReplies: "tüm yeni yanıtları bulacaksınız.",
    Click: "Tıkla",
    aReplyToReadIt: " okumak için aşağıdaki bir yanıta tıklayın — çünkü aşağıda sadece bir alıntı gösteriliyor.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Durumu değiştirmek için tıkla",
    ClickToViewAnswer: "Cevabı görüntülemek için tıkla",
    ViewAnswer: "Cevabı görüntüle",
    ChangeStatusC: "Durumu şuna değiştir:",
    ChangeCatC: "Kategoriyi değiştir:",
    ChangeTopicTypeC: "Konu türünü değiştir:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "bir soru",
    hasAccptAns: "kabul edilmiş bir cevabı var",
    aProblem: "bir sorun",
    planToFix: "düzeltme planı",
    anIdea: "bir fikir",
    planToDo: "yapma planı",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Bu form ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "kapatıldı; artık doldurup gönderemezsiniz.",

    ThisTopicClosed_1: "Bu konu ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Hala yorum gönderebilirsiniz.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Bu sayfa silindi",
    CatDeldPageToo: "Kategori silindi, bu yüzden bu sayfa da silindi",

    ThreadDeld: "İş parçacığı silindi",
    CmntDeld: "Yorum silindi",
    PostDeld: "Gönderi silindi",
    DiscDeld: "Tartışma silindi",
    PageDeld: "Sayfa silindi",
    PagePendAppr: "Sayfa onay bekliyor",
    TitlePendAppr: "Başlık onay bekliyor",
    TextPendingApproval: "Metin onay bekliyor",

    TooltipQuestClosedNoAnsw: "Bu soru, herhangi bir kabul edilmiş cevap olmadan kapatıldı.",
    TooltipTopicClosed: "Bu konu kapalı.",

    TooltipQuestSolved: "Bu çözülmüş bir soru",
    TooltipQuestUnsolved: "Bu çözülmemiş bir soru",

    StatusDone: "Tamamlandı",
    TooltipProblFixed: "Bu düzeltildi",
    TooltipDone: "Bu yapıldı",

    StatusStarted: "Başlatıldı",
    TooltipFixing: "Bunu düzeltmeye başladık",      // "We're currently" —> "We've started"
    TooltipImplementing: "Bunu yapmaya başladık", // -""-

    StatusPlanned: "Planlandı",
    TooltipProblPlanned: "Bunu düzeltmeyi planlıyoruz",
    TooltipIdeaPlanned: "Bunu yapmayı planlıyoruz",   // or "to implement this"?

    StatusNew: "Yeni",
    StatusNewDtl: "Yeni konu, tartışılıyor",
    TooltipUnsProbl: "Bu çözülmemiş bir sorun",
    TooltipIdea: "Bu bir fikir",

    TooltipPersMsg: "Kişisel mesaj",
    TooltipChat: "# Sohbet Kanalı demektir",
    TooltipPrivChat: "Bu özel bir sohbet kanalı",

    TooltipPinnedGlob: "\nGenel olarak sabitlendi.",
    TooltipPinnedCat: "\nBu kategoride sabitlendi.",

    SolvedClickView_1: "Gönderide çözüldü #",
    SolvedClickView_2: ", görüntülemek için tıkla",

    PostHiddenClickShow: "Gönderi gizli; göstermek için tıkla",
    ClickSeeMoreRepls: "Daha fazla yanıt göster",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Daha fazla yorum göster",
    ClickSeeThisComment: "Bu yorumu göstermek için tıkla",
    clickToShow: "göstermek için tıkla",

    ManyDisagree: "Birçok kişi buna katılmıyor:",
    SomeDisagree: "Bazı kişiler buna katılmıyor:",

    PendAppr: "Onay bekliyor",
    CmtPendAppr: "Comment pending approval, posted ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Aşağıdaki yorumunuz" : "Aşağıdaki yorum") + " onay bekliyor.",

    _and: " ve",

    repliesTo: "şuna yanıtlar:",
    InReplyTo: "Şuna yanıt olarak:",
    YourReplyTo: "Şuna yanıtınız: ",
    YourChatMsg: "Sohbet mesajınız: ",
    YourDraft: "Taslağınız",
    YourEdits: "Düzenlemeleriniz: ",
    YourProgrNoteC: "İlerleme notunuz:",
    aProgrNote: "bir ilerleme notu: ",

    ReplyingToC: "Şuna yanıt veriliyor:",
    ScrollToPrevw_1: "Şuraya ",
    ScrollToPrevw_2: "kaydır: önizleme",

    UnfinEdits: "Tamamlanmamış düzenlemeler",
    ResumeEdting: "Düzenlemeye devam et",
    DelDraft: "Taslağı sil",

    ClickViewEdits: "Eski düzenlemeleri görüntülemek için tıkla",

    By: "Yazan: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "bu fikrin nasıl ve yapılıp yapılmayacağı hakkında",
    aboutThisProbl: "bunun nasıl ve düzeltilip düzeltilmeyeceği hakkında",

    AddProgrNote: "İlerleme notu ekle",
    // Progress ...
    withThisIdea: "bu fikri gerçekleştirme ile ilgili",
    withThisProbl: "bu sorunu ele alma ile ilgili",
    withThis: "bunu yapma ile ilgili",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Bu konu hakkındaki bildirimler:",

    // If is a direct message topic, members listed below this text.
    Msg: "Mesaj",

    SmrzRepls: "Yanıtları Özetle",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `${numReplies} yanıt var. Tahmini okuma süresi: ${minutes} dakika`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Tamamlandı. Daha önce gösterilen ${numShownBefore} yanıttan ${numSummarized} tanesi özetlendi.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Konuyu kapat",
    CloseOwnQuestionTooltip: "Artık bir cevaba ihtiyacınız yoksa bu soruyu kapatın.",
    CloseOthersQuestionTooltip: "Cevaba ihtiyacı yoksa bu soruyu kapatın, örneğin konu dışıysa veya başka bir konuda zaten cevaplanmışsa.",
    CloseToDoTooltip: "Yapılması veya düzeltilmesi gerekmiyorsa bu yapılacak işi kapatın.",
    CloseTopicTooltip: "Daha fazla değerlendirmeye gerek yoksa bu konuyu kapatın.",

    AcceptBtnExpl: "Bunu soru veya sorunun cevabı olarak kabul et",
    SolutionQ: "Çözüm?",
    ClickUnaccept: "Bu cevabı kabul etmekten vazgeçmek için tıkla",
    PostAccepted: "Bu gönderi cevap olarak kabul edildi",

    NumLikes: (num: number) => num === 1 ? "1 Beğeni" : num + " Beğeni",
    NumDisagree: (num: number) => num + " Katılmıyorum",
    NumBury: (num: number) => num === 1 ? "1 Göm" : num + " Göm",
    NumUnwanted: (num: number) => num === 1 ? "1 İstenmeyen" : num + " İstenmeyen",

    MoreVotes: "Daha fazla oy...",
    LikeThis: "Bunu beğen",
    LinkToPost: "Bu gönderiye bağlantı ver",
    Report: "Bildir",
    ReportThisPost: "Bu gönderiyi bildir",
    Admin: "Yönetici",
    DiscIx: "Tartışmalar dizini",

    Disagree: "Katılmıyorum",
    DisagreeExpl: "Bu gönderiye katılmadığınızı belirtmek veya başkalarını olgusal hatalar hakkında uyarmak için buraya tıklayın.",
    Bury: "Göm",
    BuryExpl: "Diğer gönderileri bu gönderiden önce sıralamak için tıklayın. Oyunuzu sadece forum personeli görebilir.",
    Unwanted: "İstenmeyen",
    UnwantedExpl: "Bu gönderiyi bu web sitesinde istemiyorsanız. Bu durum gönderi yazarına olan güvenimi azaltacaktır. Oyunuzu sadece forum personeli görebilir.",

    AddTags: "Etiket ekle/kaldır",
    UnWikify: "Wiki'den Çıkar",
    Wikify: "Wiki Yap",
    PinDeleteEtc: "Sabitle / Sil / Kategori ...",
  },


  // Share dialog

  sd: {
    Copied: "Kopyalandı.",
    CtrlCToCopy: "Kopyalamak için CTRL+C tuşlarına basın.",
    ClickToCopy: "Bağlantıyı kopyalamak için tıkla.",
  },


  // Chat

  c: {
    About_1: "Bu, ",
    About_2: " sohbet kanalıdır, oluşturan: ",
    ScrollUpViewComments: "Eski yorumları görüntülemek için yukarı kaydırın",
    Purpose: "Amaç:",
    MessageDeleted: "(Mesaj silindi)",
    JoinThisChat: "Bu sohbete katıl",
    PostMessage: "Mesaj gönder",
    AdvancedEditor: "Gelişmiş düzenleyici",
    TypeTitle: "Bir başlık yazın — bu sohbet birkaç kelimeyle ne hakkında?",
    TypePurpose: "Bir amaç yazın — başlıktan daha uzun ve daha açıklayıcı olabilir.",
    TypeHere: "Buraya yazın. Markdown ve HTML kullanabilirsiniz.",
  },


  // My Menu

  mm: {
    NeedsReview: "İnceleme gerekiyor ",
    AdminHelp: "Yönetici yardımı ",
    StaffHelp: "Personel yardımı ",
    DraftsEtc: "Taslaklar, yer imleri, görevler",
    MoreNotfs: "Tüm bildirimleri görüntüle",
    DismNotfs: "Tümünü okundu olarak işaretle",
    ViewProfile: "Profilinizi görüntüleyin",
    ViewGroups: "Grupları görüntüle",
    LogOut: "Çıkış yap",
    UnhideHelp: "Yardım mesajlarını göster",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Şuraya kaydır:",
    Scroll: "Kaydır",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "G",
    Back_2: "eri",
    BackExpl: "Bu sayfadaki önceki konumunuza geri dönün",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Sayfa başı",
    PgTopHelp: "Sayfanın başına git. Klavye kısayolu: 1",
    Repl: "Yanıtlar",
    ReplHelp: "Yanıtlar bölümüne git. Kısayol: 2",
    Progr: "İlerleme",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Go to the Progress section. Shortcut: 3",
    PgBtm: "Sayfa sonu",
    Btm: "En alt",
    BtmHelp: "Go to the bottom of the page. Shortcut: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " ve ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " geri kaydırmak için",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Kullanıcıları seç",
    AddUsers: "Kullanıcıları ekle",
  },


  // About user dialog

  aud: {
    IsMod: "Moderatördür.",
    IsAdm: "Yöneticidir.",
    IsDeld: "Devre dışı bırakılmış veya silinmiş.",
    ThisIsGuest: "Bu bir ziyaretçi kullanıcıdır, aslında herkes olabilir.",
    ViewInAdm: "Yönetici Alanında Görüntüle",
    ViewProfl: "Profili Görüntüle",
    ViewComments: "Diğer yorumları görüntüle",
    RmFromTpc: "Konudan kaldır",
    EmAdrUnkn: "E-posta adresi bilinmiyor — bu ziyaretçi yanıtlardan haberdar edilmeyecek.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Tercihler",
    Invites: "Davetler",
    DraftsEtc: "Taslaklar vb.",
    About: "Hakkında",
    Privacy: "Gizlilik",
    Security: "Güvenlik",
    Account: "Hesap",
    Interface: "Arayüz",

    // ----- Overview stats

    JoinedC: "Katılma tarihi: ",
    PostsMadeC: "Yapılan gönderiler: ",
    LastPostC: "Son gönderi: ",
    LastSeenC: "Son görülme: ",
    TrustLevelC: "Güven seviyesi: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Fotoğraf yükle",
    ChangePhoto: "Fotoğrafı değiştir",
    ImgTooSmall: "Resim çok küçük: en az 100 x 100 olmalıdır",

    // ----- Activity

    OnlyStaffCanSee: "Bunu sadece personel ve güvenilir çekirdek üyeler görebilir.",
    OnlyMbrsCanSee: "Bunu sadece bir süredir aktif üye olan kişiler görebilir.",
    Nothing: "Gösterilececek bir şey yok",
    Posts: "Gönderiler",
    NoPosts: "Gönderi yok.",
    Topics: "Konular",
    NoTopics: "Konu yok.",

    // ----- User status

    UserBanned: "Bu kullanıcı yasaklandı",
    UserSuspended: (dateUtc: string) => `Bu kullanıcı ${dateUtc} UTC tarihine kadar askıya alındı`,
    ReasonC: "Sebep: ",

    DeactOrDeld: "Devre dışı bırakıldı veya silindi.",
    isGroup: " (bir grup)",
    isGuest: " — bir ziyaretçi kullanıcı, herkes olabilir",
    isMod: " – moderatör",
    isAdmin: " – yönetici",
    you: "(siz)",

    // ----- Notifications page

    NoNotfs: "Bildirim yok",
    NotfsToYouC: "Size gelen bildirimler:",
    NotfsToOtherC: (name: string) => `${name} kişisine gelen bildirimler:`,
    DefNotfsSiteWide: "Varsayılan bildirimler, site genelinde",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "için",

    // ----- Drafts Etc page

    NoDrafts: "No drafts",
    YourDraftsC: "Taslaklarınız:",
    DraftsByC: (name: string) => `${name} tarafından hazırlanan taslaklar:`,

    // ----- Invites page

    InvitesIntro: "Buradan kişileri bu siteye katılmaya davet edebilirsiniz. ",
    InvitesListedBelow: "Zaten gönderdiğiniz davetler aşağıda listelenmiştir.",
    NoInvites: "Henüz kimseyi davet etmediniz.",

    InvitedEmail: "Davet edilen e-posta",
    WhoAccepted: "Kabul eden üye",
    InvAccepted: "Davet kabul edildi",
    InvSent: "Davet gönderildi",
    JoinedAlready: "Zaten katıldı",

    SendAnInv: "Kişileri davet et", // was: "Send an Invite",
    SendInv: "Davetiyeleri gönder",   // is just "Send invite" (singularis) in all other langs
    SendInvExpl:
        "Arkadaşlarınıza kısa bir e-posta göndereceğiz. Hemen katılmak için bir bağlantıya tıklayacaklar, " +
        "giriş yapmaları gerekmeyecek. " +
        "Moderatör veya yönetici değil, normal üyeler olacaklar.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Tamam. Onlara bir e-posta göndereceğim.",
    NoOneToInv: "Davet edilecek kimse yok.",
    InvNotfLater: "Davet ettiğimde sizi daha sonra bilgilendireceğim.",
    AlreadyInvSendAgainQ: "Bunlar zaten davet edilmiş — belki onları tekrar davet etmek istersiniz?",
    InvErr_1: "Bunlar şununla sonuçlandı: ",
    InvErr_2: "hatalar",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Bunlar zaten katıldı, bu yüzden onları davet etmedim:",
    ResendInvsQ: "Bu kişilere tekrar davetiye gönderilsin mi? Zaten davet edildiler.",
    InvAgain: "Tekrar davet et",

    // ----- Preferences, About

    AboutYou: "Hakkınızda",
    WebLink: "Size ait herhangi bir web sitesi veya sayfa.",

    NotShownCannotChange: "Herkese açık gösterilmez. Değiştirilemez.",

    // The full name or alias:
    NameOpt: "İsim (isteğe bağlı)",

    NotShown: "Herkese açık gösterilmez.",

    // The username:
    MayChangeFewTimes: "Sadece birkaç kez değiştirebilirsiniz.",
    notSpecified: "(belirtilmedi)",
    ChangeUsername_1: "Kullanıcı adınızı sadece birkaç kez değiştirebilirsiniz.",
    ChangeUsername_2: "Çok sık değiştirmek başkalarının kafasını karıştırabilir — " +
        "sizden @bahsetmeyi bilemeyebilirler.",

    NotfAboutAll: "Her yeni gönderiden haberdar ol (konuyu veya kategoriyi susturmadığın sürece)",
    NotfAboutNewTopics: "Yeni konulardan haberdar ol (kategoriyi susturmadığın sürece)",

    ActivitySummaryEmails: "Etkinlik özeti e-postaları",

    EmailSummariesToGroup:
        "Bu grubun üyeleri burayı ziyaret etmediğinde, varsayılan olarak onlara " +
        "popüler konuların ve diğer şeylerin özetlerini e-postayla gönder.",
    EmailSummariesToMe:
        "Burayı ziyaret etmediğimde, bana " +
        "popüler konuların ve diğer şeylerin özetlerini e-postayla gönder.",

    AlsoIfTheyVisit: "Burayı düzenli olarak ziyaret etseler bile onlara e-posta gönder.",
    AlsoIfIVisit: "Burayı düzenli olarak ziyaret etsem bile bana e-posta gönder.",

    HowOftenWeSend: "Bu e-postaları ne sıklıkla gönderelim?",
    HowOftenYouWant: "bu e-postaları ne sıklıkla istiyorsunuz?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Son etkinliğiniz yabancılardan ve yeni üyelerden gizlensin mi?",
    HideActivityStrangers_2: "(Ancak bir süredir aktif üye olanlardan değil.)",
    HideActivityAll_1: "Son etkinliğiniz herkesten gizlensin mi?",
    HideActivityAll_2: "(Personel ve güvenilir çekirdek üyeler hariç.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "E-posta adresleri",
    PrimaryDot: "Birincil. ",
    VerifiedDot: "Doğrulanmış. ",
    NotVerifiedDot: "Doğrulanmamış. ",
    ForLoginWithDot: (provider: string) => `${provider} ile giriş için. `,
    MakePrimary: "Birincil Yap",
    AddEmail: "E-posta adresi ekle",
    TypeNewEmailC: "Yeni bir e-posta adresi yazın:",
    MaxEmailsInfo: (numMax: number) => `(${numMax} adresten fazlasını ekleyemezsiniz.)`,
    EmailAdded_1: "Eklendi. Size bir doğrulama e-postası gönderdik — ",
    EmailAdded_2: "e-posta gelen kutunuzu kontrol edin.",
    SendVerifEmail: "Doğrulama e-postası gönder",

    EmailStatusExpl:
        "('Birincil', bu adres üzerinden giriş yapabileceğiniz ve bildirimleri bu adrese gönderdiğimiz anlamına gelir. " +
        "'Doğrulanmış', bir adres doğrulama e-postasındaki doğrulama bağlantısını tıkladığınız anlamına gelir.)",

    // Password:
    ChangePwdQ: "Şifre değiştirilsin mi?",
    CreatePwdQ: "Şifre oluşturulsun mi?",
    WillGetPwdRstEml: "Şifre sıfırlama e-postası alacaksınız.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Yok",

    // Logins:
    LoginMethods: "Giriş yöntemleri",
    commaAs: ", olarak: ",

    // One's data:
    YourContent: "İçeriğiniz",
    DownloadPosts: "Gönderileri indir",
    DownloadPostsHelp: "Paylaştığınız konuların ve yorumların bir kopyasını içeren bir JSON dosyası oluşturur.",
    DownloadPersData: "Kişisel verileri indir",
    DownloadPersDataHelp: "Kişisel verilerinizin bir kopyasını (örneğin adınız -belirttiyseniz- ve e-posta adresiniz) içeren bir JSON dosyası oluşturur.",


    // Delete account:
    DangerZone: "Tehlikeli bölge",
    DeleteAccount: "Hesabı sil",
    DeleteYourAccountQ:
        "Hesabınız silinsin mi? Adınızı kaldıracağız, e-posta adresinizi, şifrenizi ve " +
        "tüm çevrimiçi kimliklerinizi (Facebook veya Twitter girişi gibi) unutacağız. " +
        "Tekrar giriş yapamayacaksınız. Bu işlem geri alınamaz.",
    DeleteUserQ:
        "Bu kullanıcı silinsin mi? Adı kaldıracağız, e-posta adresini, şifreyi ve " +
        "çevrimiçi kimlikleri (Facebook veya Twitter girişi gibi) unutacağız. " +
        "Kullanıcı tekrar giriş yapamayacak. Bu işlem geri alınamaz.",
    YesDelete: "Evet, sil",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Grup üyeleri",
    NoMembers: "Üye yok.",
    MayNotListMembers: "Üyeleri listeleyemeyebilir.",
    AddMembers: "Üye Ekle",
    BuiltInCannotModify: "Bu yerleşik bir gruptur; değiştirilemez.",
    NumMembers: (num: number) => `${num} üye`,
    YouAreMember: "Üyesiniz.",
    CustomGroupsC: "Özel gruplar:",
    BuiltInGroupsC: "Yerleşik gruplar:",
    DeleteGroup: "Bu grubu sil",
  },


  // Create user dialog

  cud: {
    CreateUser: "Kullanıcı Oluştur",
    CreateAccount: "Hesap Oluştur",
    EmailC: "E-posta:",  // REMOVE move to t.EmailC instead
    keptPriv: "gizli tutulacak",
    forNotfsKeptPriv: "yanıt bildirimleri için, gizli tutulacak",
    EmailVerifBy_1: "E-postanız şunun tarafından doğrulandı: ",
    EmailVerifBy_2: ".",
    UsernameC: "Kullanıcı adı:",
    FullNameC: "Tam isim:",
    optName: "isteğe bağlı",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Hesap oluşturuldu. Giriş yaptınız.",  // COULD say if verif email sent too?
    AlmostDone:
        "Neredeyse bitti! Sadece e-posta adresinizi onaylamanız gerekiyor. Size bir " +
        "e-posta gönderdik. Hesabınızı etkinleştirmek için lütfen e-postadaki " +
        "bağlantıya tıklayın. Bu sayfayı kapatabilirsiniz.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Şartlar ve Gizlilik",

    Accept_1: "Şunları kabul ediyor musunuz: ",
    TermsOfService: "Hizmet Şartları",
    TermsOfUse: "Kullanım Şartları",
    Accept_2: " ve ",
    PrivPol: "Gizlilik Politikası",
    Accept_3_User: "?",
    Accept_3_Owner: " (site sahipleri için)?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Evet, kabul ediyorum",
  },


  // Password input

  pwd: {
    PasswordC: "Şifre:",
    StrengthC: "Güç: ",
    FairlyWeak: "Oldukça zayıf.",
    toShort: "çok kısa",
    TooShort: (minLength: number) => `Çok kısa. En az ${minLength} karakter olmalıdır`,
    PlzInclDigit: "Lütfen bir rakam veya özel karakter ekleyin",
    TooWeak123abc: "Çok zayıf. '12345' veya 'abcde' gibi şifreler kullanmayın.",
    AvoidInclC: "Şifrede adınızın veya e-postanızın (bir kısmını) kullanmaktan kaçının:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Sayfa bulunamadı veya Erişim Reddedildi.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Bu web sitesinin tüm bölümlerine erişimi olmayabilecek birinin kimliğine bürünüyorsunuz.",

    IfYouThinkExistsThen: "Sayfanın var olduğunu düşünüyorsanız, erişebilecek biri olarak giriş yapın. ",
    LoggedInAlready: "(Zaten giriş yaptınız, ancak belki de yanlış hesaptır?) ",
    ElseGoToHome_1: "Aksi takdirde, ",
    ElseGoToHome_2: "ana sayfaya gidebilirsiniz.",

    CreateAcconut: "Hesap oluştur",
    ContinueWithDots: "Şununla devam et ...",
    SignUp: "Katıl",
    LogIn: "Giriş yap",
    LogInWithPwd: "Şifre ile Giriş Yap",
    CreateAdmAcct: "Yönetici hesabı oluştur:",
    AuthRequired: "Bu siteye erişmek için kimlik doğrulaması gerekiyor",
    LogInToLike: "Bu gönderiyi Beğenmek için giriş yapın",
    LogInToSubmit: "Giriş yap ve gönder",
    LogInToComment: "Yorum yazmak için giriş yapın",
    LogInToCreateTopic: "Konu oluşturmak için giriş yapın",

    //AlreadyHaveAcctQ: "You have an account? ",   changed "Already have...?" to "You have...?"
    OrLogIn_1: "Veya ",         // "Or "
    OrLogIn_2: "Giriş yap",      // "Log in" (this is a button)
    OrLogIn_3: " ",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Veya ",
    SignUpInstead_2: "Hesap oluştur", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", veya sadece ",
    OrTypeName_2: "bir isim yazın",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Veya hesap oluşturun:",
    OrTypeName: "Veya isminizi yazın:",
    OrLogIn: "Veya giriş yapın:",
    YourNameQ: "İsminiz?",

    BadCreds: "Yanlış kullanıcı adı veya şifre",

    UsernameOrEmailC: "Kullanıcı adı veya e-posta:",
    PasswordC: "Şifre:",
    ForgotPwd: "Şifrenizi mi unuttunuz?",

    NoPwd: "Henüz bir şifre seçmediniz.",
    CreatePwd: "Şifre oluştur",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Lütfen bizi neyin endişelendirdiğini söyleyin.",
    ThanksHaveReported: "Teşekkürler. Bildirdiniz. Forum personeli bir göz atacak.",
    ReportComment: "Yorumu Bildir",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "This post contains personal data, for example someones' real name.",
    OptOffensive: "Bu gönderi saldırgan veya aşağılayıcı içerik barındırıyor.",
    OptSpam: "Bu gönderi istenmeyen bir reklamdır.",
    OptOther: "Personeli başka bir nedenle bu gönderi hakkında bilgilendirin.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Giriş yaptıysanız, isminize ve ardından ",
    YouCanShowAgain_2: "Yardım mesajlarını göster seçeneğine tıklayarak yardım mesajlarını tekrar gösterebilirsiniz.",
  },


  // Editor

  e: {
    SimilarTopicsC: "Benzer konular:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Üzgünüz ancak şu anda aynı anda sadece bir dosya yükleyebilirsiniz",
    PleaseFinishPost: "Lütfen önce gönderinizi yazmayı bitirin",
    PleaseFinishChatMsg: "Lütfen önce sohbet mesajınızı yazmayı bitirin",
    PleaseFinishMsg: "Lütfen önce mesajınızı yazmayı bitirin",
    PleaseSaveEdits: "Lütfen önce mevcut düzenlemelerinizi kaydedin",
    PleaseSaveOrCancel: "Lütfen önce yeni konunuzu kaydedin veya iptal edin",
    CanContinueEditing: "Düzenleyiciyi tekrar açarsanız metninizi düzenlemeye devam edebilirsiniz.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Lütfen tüm metni silmeyin. Bir şeyler yazın.",
    PleaseWriteSth: "Lütfen bir şeyler yazın.",
    PleaseWriteTitle: "Lütfen bir konu başlığı yazın.",
    PleaseWriteMsgTitle: "Lütfen bir mesaj başlığı yazın.",
    PleaseWriteMsg: "Lütfen bir mesaj yazın.",

    exBold: "kalın metin",
    exEmph: "vurgulanmış metin",
    exPre: "önceden biçimlendirilmiş metin",
    exQuoted: "alıntı metin",
    ExHeading: "Başlık",

    TitlePlaceholder: "Bir başlık yazın — bu ne hakkında, tek bir kısa cümlede?",

    EditPost_1: "Düzenle: ",
    EditPost_2: "gönderi ",

    TypeChatMsg: "Bir sohbet mesajı yazın:",
    YourMsg: "Mesajınız:",
    CreateTopic: "Yeni konu oluştur",
    CreateCustomHtml: "Özel bir HTML sayfası oluştur (kendi <h1> başlığınızı ekleyin)",
    CreateInfoPage: "Bir bilgi sayfası oluştur",
    CreateCode: "Bir kaynak kodu sayfası oluştur",
    AskQuestion: "Soru sor",
    ReportProblem: "Sorun bildir",
    SuggestIdea: "Fikir öner",
    NewChat: "Sohbet başlığı ve amacı",  // changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Özel sohbet başlığı ve amacı",  // changed from "New private chat" to just "Private chat".
    AppendComment: "Sayfanın sonuna bir yorum ekle:",

    ReplyTo: "Şuna yanıt ver: ",
    ReplyTo_theOrigPost: "Orijinal Gönderi",
    ReplyTo_post: "gönderi ",
    AddCommentC: "Yorum ekle:",   // & dupl t.AddComment

    PleaseSelectPosts: "Lütfen yanıtlamak için bir veya daha fazla gönderi seçin.",

    Save: "Kaydet",
    edits: "düzenlemeler",

    PostReply: "Yanıtı gönder",
    PostComment: "Yorum gönder",

    Post: "Gönder",
    comment: "yorum",
    question: "soru",

    PostMessage: "Mesaj gönder",
    SimpleEditor: "Basit düzenleyici",

    Send: "Gönder",
    message: "mesaj",

    Create: "Oluştur",
    page: "sayfa",
    chat: "sohbet",
    idea: "fikir",
    topic: "topic",

    Submit: "Gönder",
    problem: "sorun",

    ViewOldEdits: "Eski düzenlemeleri görüntüle",

    UploadBtnTooltip: "Bir dosya veya resim yükle",
    BoldBtnTooltip: "Metni kalın yap",
    EmBtnTooltip: "Vurgula",
    QuoteBtnTooltip: "Alıntı",
    PreBtnTooltip: "Önceden biçimlendirilmiş metin",
    HeadingBtnTooltip: "Başlık",

    TypeHerePlaceholder: "Buraya yazın. Markdown ve HTML kullanabilirsiniz. Resimleri yapıştırmak için sürükleyip bırakın.",

    Maximize: "Ekranı kapla",
    ToNormal: "Normale dön",
    TileHorizontally: "Yatay olarak döşe",

    PreviewC: "Önizleme:",
    TitleExcl: " (başlık hariç)",
    ShowEditorAgain: "Düzenleyiciyi tekrar göster",
    Minimize: "Simge durumuna küçült",

    PreviewInfo: "Burada gönderinizin nasıl görüneceğini önizleyebilirsiniz.",
    CannotType: "Buraya yazamazsınız.",

    LoadingDraftDots: "Taslak yükleniyor...",
    DraftUnchanged: "Değişmedi.",
    CannotSaveDraftC: "Taslak kaydedilemiyor:",
    DraftSavedBrwsr: "Taslak tarayıcıya kaydedildi.",   
    DraftSaved: (nr: string | number) => `Taslak ${nr} kaydedildi.`,
    DraftDeleted: (nr: string | number) => `Taslak ${nr} silindi.`,
    WillSaveDraft: (nr: string | number) => `Taslak ${nr} kaydedilecek ...`,
    SavingDraft: (nr: string | number) => `Taslak ${nr} kaydediliyor ...`,
    DeletingDraft: (nr: string | number) => `Taslak ${nr} siliniyor ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Kategori seç",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Konu türünü seç:",
    DiscussionExpl: "Bir şey hakkında bir tartışma.",
    QuestionExpl: "Bir cevap kabul edilmiş cevap olarak işaretlenebilir.",
    ProblExpl: "Bir şey bozuksa veya çalışmıyorsa. Düzeltildi/çözüldü olarak işaretlenebilir.",
    IdeaExpl: "Bir öneri. Yapıldı/uygulandı olarak işaretlenebilir.",
    ChatExpl: "Belki de hiç bitmeyen bir konuşma.",
    PrivChatExpl: "Sadece sohbete davet edilen kişiler tarafından görülebilir.",

    CustomHtml: "Özel HTML sayfası",
    InfoPage: "Bilgi sayfası",
    Code: "Kod",
    EmbCmts: "Gömülü yorumlar",
    About: "Hakkında",
    PrivChat: "Özel Sohbet",
    Form: "Form",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Katılacak başka topluluk yok.",
    SelCmty: "Topluluk seç ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Yardım ara",
    TxtToFind: "Aranacak metin",
  },


  // No internet

  ni: {
    NoInet: "İnternet bağlantısı yok",
    PlzRefr: "En son değişiklikleri görmek için sayfayı yenileyin. (Bağlantı kesildi)",
    RefrNow: "Şimdi yenile",
  },


  PostDeleted: (postNr: number) => `${postNr} numaralı gönderi silindi.`,
  NoSuchPost: (postNr: number) => `Bu sayfada ${postNr} numaralı bir gönderi yok.`,
  NoPageHere: "Bu sayfa silindi, hiç var olmadı veya buraya erişiminiz yok.",
  GoBackToLastPage: "Son sayfaya geri dön",

};
