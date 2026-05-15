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

var t_id_ID: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktif",
  Activity: "Aktivitas",
  Add: "Tambah",
  AddingDots: "Menambah ...",
  AddComment: "Tambah Komentar",  // MISSING, & dupl t.e.AddCommentC
  Admin: "Admin",
  AdvSearch: "Pencarian lanjutan",
  Anonym: "Anonim",
  Away: "Sedang tidak di tempat",
  Back: "Kembali",
  BlogN: "Blog",
  Bookmarks: "Bookmark",
  Cancel: "Batal",
  Categories: "Kategori",
  Category: "Kategori",
  ChangeV: "Ubah",
  ClickToShow: "Klik untuk menampilkan",
  ChangeDots: "Ubah ...",
  ChatN: "Obrolan",
  Chatting: "Mengobrol",
  CheckYourEmail: "Periksa email Anda",
  Close: "Tutup",
  closed: "ditutup",
  comments: "komentar",   // as in:  "123 comments"
  Continue: "Lanjut",
  Created: "Dibuat",
  Delete: "Hapus",
  Deleted: "Dihapus",
  DirectMessage: "Pesan langsung",
  Discussion: "Diskusi",
  discussion: "diskusi",
  done: "selesai",
  EditV: "Edit",
  Editing: "Mengedit",
  EmailC: "Email: ",   // MISSING  copy t.cud.EmailC to here
  EmailAddress: "Alamat email",
  EmailAddresses: "Alamat email",
  EmailSentD: "Email terkirim.",
  Forum: "Forum",
  GetNotifiedAbout: "Dapatkan notifikasi tentang",
  GroupsC: "Grup:",
  Hide: "Sembunyikan",
  Home: "Beranda",
  Idea: "Ide",
  Join: "Gabung",
  KbdShrtcsC: "Pintasan papan ketik: ",
  Loading: "Memuat...",
  LoadMore: "Muat lebih banyak ...",
  LogIn: "Masuk",
  LoggedInAs: "Masuk sebagai ",
  LogOut: "Keluar",
  Maybe: "Mungkin",
  Manage: "Kelola",
  Members: "Anggota",
  MessageN: "Pesan",
  MoreDots: "Lainnya...",
  Move: "Pindahkan",
  Name: "Nama",
  NameC: "Nama:",
  NewTopic: "Topik baru",
  NoCancel: "Tidak, batalkan",
  Notifications: "Notifikasi",
  NotImplemented: "(Belum diimplementasikan)",
  NotYet: "Belum",
  NoTitle: "Tanpa judul",
  NoTopics: "Tidak ada topik.",
  Okay: "Oke",
  OkayDots: "Oke ...",
  Online: "Online",
  onePerLine: "satu per baris",
  PreviewV: "Pratinjau",
  Problem: "Masalah",
  progressN: "kemajuan",
  Question: "Pertanyaan",
  Recent: "Terbaru",
  Remove: "Hapus",
  Reopen: "Buka kembali",
  ReplyV: "Balas",
  Replying: "Membalas",
  Replies: "Balasan",
  replies: "balasan",
  Save: "Simpan",
  SavingDots: "Menyimpan ...",
  SavedDot: "Tersimpan.",
  Search: "Cari",
  SendMsg: "Kirim Pesan",
  ShowPreview: "Tampilkan pratinjau",  // MISSING
  SignUp: "Gabung",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Solusi",
  started: "dimulai",
  Summary: "Ringkasan",
  Submit: "Kirim",
  Tag: "Tag",  // MISSING
  Tags: "Tag",  // MISSING
  Tools: "Alat",
  Topics: "Topik",
  TopicTitle: "Judul topik",
  TopicType: "Tipe topik",
  UploadingDots: "Mengunggah...",
  Username: "Nama pengguna",
  Users: "Pengguna",
  Welcome: "Selamat datang",
  Wiki: "Wiki",
  Yes: "Ya",
  YesBye: "Ya, sampai jumpa",
  YesDoThat: "Ya, lakukan itu",
  You: "Anda",
  you: "anda",

  // Trust levels.
  Guest:  "Tamu",
  NewMember: "Anggota baru",
  BasicMember: "Anggota dasar",
  FullMember: "Anggota penuh",
  TrustedMember: "Anggota terpercaya",
  RegularMember: "Anggota reguler terpercaya",  // MISSING renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Anggota inti",

  // Periods.
  PastDay: "Hari Terakhir",
  PastWeek: "Minggu Terakhir",
  PastMonth: "Bulan Terakhir",
  PastQuarter: "Kuartal Terakhir",
  PastYear: "Tahun Terakhir",
  AllTime: "Sepanjang Waktu",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "bln",  // months
  daysLtr: "h",      // days
  hoursLtr: "j",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "d",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 hari yang lalu" : `${numDays} hari yang lalu`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 jam yang lalu" : `${numHours} jam yang lalu`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 menit yang lalu" : `${numMins} menit yang lalu`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 detik yang lalu" : `${numSecs} detik yang lalu`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Email wajib diisi",
    NoSpcs: "Mohon tidak menggunakan spasi",
    InvldAddr: "Bukan alamat email yang valid",
    NoBadChrs: "Mohon tidak menggunakan karakter aneh",

    // Full name input field:
    NotOnlSpcs: "Mohon tidak hanya spasi",
    NoAt: "Mohon tidak menggunakan @",

    // Username input field:
    NoDash: "Mohon tidak menggunakan tanda hubung (-) ",
    DontInclAt: "Jangan sertakan @",
    StartEndLtrDgt: "Mulai dan akhiri dengan huruf atau angka",
    OnlLtrNumEtc: "Hanya huruf (a-z, A-Z) dan angka, serta _ (garis bawah)",
    // This shown just below the username input:
    UnUnqShrt_1: "Pilih ",
    UnUnqShrt_2: "@nama_pengguna",
    UnUnqShrt_3: ", yang unik dan pendek",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Setidaknya harus ${minLength} karakter`,
    TooLong: (maxLength: number) => `Terlalu panjang. Maksimal harus ${maxLength} karakter`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Setiap Kiriman",
    EveryPostInTopic: "Anda akan mendapatkan notifikasi untuk semua balasan baru di topik ini.",
    EveryPostInCat: "Anda akan mendapatkan notifikasi untuk semua topik dan balasan baru di kategori ini.",
    EveryPostInTopicsWithTag: "Anda akan mendapatkan notifikasi untuk topik baru dengan tag ini, dan semua balasan di topik tersebut.",
    EveryPostWholeSite: "Anda akan mendapatkan notifikasi untuk semua topik dan balasan baru di mana saja.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Topik Baru",
    NewTopicsInCat: "Anda akan mendapatkan notifikasi untuk topik baru di kategori ini.",
    NewTopicsWithTag: "Anda akan mendapatkan notifikasi untuk topik baru dengan tag ini.",
    NewTopicsWholeSite: "Anda akan mendapatkan notifikasi untuk topik baru di mana saja.",

    Tracking: "Mengikuti",

    Normal: "Normal",
    NormalDescr: "Anda akan mendapatkan notifikasi jika seseorang berbicara kepada Anda, juga secara tidak langsung, misal " +
        "balasan untuk balasan Anda.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Senyap",
    HushedDescr: "Anda akan mendapatkan notifikasi hanya jika seseorang berbicara langsung kepada Anda.",

    Muted: "Dibisukan",
    MutedTopic: "Tanpa notifikasi.",   // MISSING removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Edit",
    Hide_1: "Sembunyikan",
    Hide_2: ", klik ",
    Hide_3: " untuk membuka kembali",
  },


  // Forum categories

  fcs: {
    All: "Semua", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Daftar topik",

    // Select category dropdown

    from: "dari",  // MISSING used like so:  "From <Category Name>" or "From All Categories"
    in: "di",      // MISSING used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Semua kategori",

    // Topic sort order

    Active: "Aktif dulu",      // MISSING didn't add "first" yet to transls
    ActiveDescr: "Tampilkan topik yang baru aktif terlebih dahulu",

    New: "Baru",
    NewDescr: "Tampilkan topik terbaru terlebih dahulu",

    Top: "Populer",              // MISSING didn't rename from Top to Popular in transls
    TopDescr: "Tampilkan topik populer terlebih dahulu",

    // Topic filter dropdown

    AllTopics: "Semua topik",

    ShowAllTopics: "Tampilkan semua topik",
    ShowAllTopicsDescr: "Tapi bukan topik yang dihapus",

    WaitingTopics: "Topik menunggu",          // MISSING
    OnlyWaitingDescr_1: "Hanya tampilkan topik ", // MISSING changed "questions" to "topics"
    OnlyWaitingDescr_2: "yang menunggu ",
    OnlyWaitingDescr_3: "solusi atau untuk diimplementasikan dan selesai",  // MISSING rewrote

    YourTopics: "Topik Anda",       // MISSING
    AssignedToYou: "Ditugaskan kepada Anda", // MISSING

    DeletedTopics: "Tampilkan yang dihapus",   // MISSING
    ShowDeleted: "Tampilkan yang dihapus",
    ShowDeletedDescr: "Tampilkan semua topik, termasuk topik yang dihapus",

    // Rightmost buttons

    ViewCategories: "Lihat kategori",  // MISSING
    EditCat: "Edit Kategori",
    CreateCat: "Buat Kategori",
    CreateTopic: "Buat Topik",
    PostIdea: "Kirim Ide",
    AskQuestion: "Ajukan Pertanyaan",
    ReportProblem: "Laporkan Masalah",
    CreateMindMap: "Buat Mind Map",
    CreatePage: "Buat Halaman",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Penjelasan ikon...",
    IconExplanation: "Penjelasan ikon:",
    ExplGenDisc: "Diskusi umum.",
    ExplQuestion: "Pertanyaan tanpa jawaban yang diterima.",
    ExplAnswer: "Pertanyaan dengan jawaban yang diterima.",
    ExplIdea: "Ide / saran.",
    ExplProblem: "Masalah.",
    ExplPlanned: "Sesuatu yang kami rencanakan untuk dilakukan atau diperbaiki.",
    ExplDone: "Sesuatu yang telah dilakukan atau diperbaiki.",
    ExplClosed: "Topik ditutup.",
    ExplPinned: "Topik selalu terdaftar pertama (mungkin hanya di kategorinya sendiri).",

    PopularTopicsComma: "Topik populer, ",
    TopFirstAllTime: "Tampilkan topik terpopuler pertama, sepanjang waktu.",
    TopFirstPastDay: "Tampilkan topik populer selama hari terakhir.",

    CatHasBeenDeleted: "Kategori ini telah dihapus",

    TopicsActiveFirst: "Topik, baru aktif pertama",
    TopicsNewestFirst: "Topik, baru pertama",

    CreatedOn: "Dibuat pada ",
    LastReplyOn: "\nBalasan terakhir pada ",
    EditedOn: "\nDiedit pada ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "membuat topik",
    frequentPoster: "pengirim sering",
    mostRecentPoster: "pengirim terbaru",

    inC: "di: ",

    TitleFixed: "Ini telah diperbaiki",
    TitleDone: "Ini telah dilakukan",
    TitleStarted: "Kami telah memulai ini",
    TitleStartedFixing: "Kami telah mulai memperbaiki ini",
    TitleUnsolved: "Ini adalah masalah yang belum terpecahkan",
    TitleIdea: "Ini adalah sebuah ide",
    TitlePlanningFix: "Kami berencana untuk memperbaiki ini",
    TitlePlanningDo: "Kami berencana untuk melakukan ini",
    TitleChat: "Ini adalah saluran obrolan",
    TitlePrivateChat: "Ini adalah saluran obrolan pribadi",
    TitlePrivateMessage: "Pesan pribadi",
    TitleInfoPage: "Ini adalah halaman info",
    TitleDiscussion: "Sebuah diskusi",
    IsPinnedGlobally: "\nIni telah disematkan, jadi terdaftar pertama.",
    IsPinnedInCat: "\nIni telah disematkan di kategorinya, jadi terdaftar pertama, di kategorinya.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Topik terbaru (yang menunggu)",
    RecentTopicsInclDel: "Topik terbaru (termasuk yang dihapus)",
    RecentTopics: "Topik terbaru",
    _replies: " balasan",
    _deleted: " (dihapus)",
    _defCat: " (kategori default)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Kiriman terbaru",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online di obrolan ini",    // example: "5 online in this chat"
    NumOnlForum: " online di forum ini",

    // Open left-sidebar button title.
    WatchbBtn: "Topik Anda",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Topik terbaru Anda, obrolan yang diikuti, pesan langsung",

    // Title shown on user profile pages.
    AbtUsr: "Tentang Pengguna",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Kembali dari profil pengguna",
    BackFromAdm: "Kembali dari area admin",

    // Title shown on full text search page.
    SearchPg: "Halaman Pencarian",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Tambah ...",
    RecentlyViewed: "Topik yang baru dilihat",  // MISSING " topics"
    JoinedChats: "Obrolan Diikuti",
    ChatChannels: "Saluran Obrolan",
    CreateChat: "Buat saluran obrolan",
    DirectMsgs: "Pesan Langsung",
    NoChats: "Tidak ada",    // meaning: "No chat messages"
    NoDirMsgs: "Tidak ada",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Tindakan topik",
    ViewPeopleHere: "Lihat orang di sini",
    ViewAddRemoveMembers: "Lihat / tambah / hapus anggota",
    ViewChatMembers: "Lihat anggota obrolan",
    EditChat: "Edit deskripsi obrolan",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Tinggalkan obrolan ini",
    LeaveThisCommunity: "Tinggalkan komunitas ini",
    JoinThisCommunity: "Gabung komunitas ini",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Komentar terbaru di topik ini:",
    NoComments: "Tidak ada komentar.",

    YourBookmarks: "Bookmark Anda:",

    UsersOnline: "Pengguna online:",
    UsersOnlineForum: "Pengguna online di forum ini:",
    UsersInThisChat: "Pengguna di obrolan ini:",
    UsersInThisTopic: "Pengguna di topik ini:",

    GettingStartedGuide: "Panduan Admin", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Panduan Admin",          // ... but what? It's here already, just reuse this transl field
    Guide: "Panduan",

    // How to hide the sidebar.
    CloseShortcutS: "Tutup (pintasan papan ketik: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Tambah lebih banyak orang",

    // Shown next to one's own username, in a list of users.
    thatsYou: "itu Anda",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Hanya Anda, sepertinya",
    YouAnd: "Anda, dan ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " orang" : " orang";
      const have = numStrangers === 1 ? "belum" : "belum";
      return numStrangers + people + " yang " + have + " masuk";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Balasan di sebelah kiri mungkin diurutkan berdasarkan ",
    bestFirst: "terbaik-terdahulu.",
    ButBelow: "Tapi di bawah ini ",
    insteadBy: " balasan yang sama justru diurutkan berdasarkan ",
    newestFirst: "terbaru-terdahulu.",

    SoIfLeave: "Jadi jika Anda pergi, dan kembali ke sini nanti, di bawah ini Anda akan menemukan ",
    allNewReplies: "semua balasan baru.",
    Click: "Klik",
    aReplyToReadIt: " balasan di bawah ini untuk membacanya — karena hanya kutipan yang ditampilkan di bawah ini.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klik untuk mengubah status",
    ClickToViewAnswer: "Klik untuk melihat jawaban",
    ViewAnswer: "Lihat jawaban",
    ChangeStatusC: "Ubah status ke:",
    ChangeCatC: "Ubah kategori:",
    ChangeTopicTypeC: "Ubah tipe topik:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "sebuah pertanyaan",
    hasAccptAns: "memiliki jawaban yang diterima",
    aProblem: "sebuah masalah",
    planToFix: "rencana untuk diperbaiki",
    anIdea: "sebuah ide",
    planToDo: "rencana untuk dilakukan",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Formulir ini telah ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "ditutup; Anda tidak dapat lagi mengisi dan mengirimnya.",

    ThisTopicClosed_1: "Topik ini telah ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Anda masih dapat mengirim komentar.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Halaman ini telah dihapus",
    CatDeldPageToo: "Kategori dihapus, jadi halaman ini juga dihapus",

    ThreadDeld: "Thread dihapus",
    CmntDeld: "Komentar dihapus",
    PostDeld: "Kiriman dihapus",
    DiscDeld: "Diskusi dihapus",
    PageDeld: "Halaman dihapus",
    PagePendAppr: "Halaman menunggu persetujuan",
    TitlePendAppr: "Judul menunggu persetujuan",
    TextPendingApproval: "Teks menunggu persetujuan",

    TooltipQuestClosedNoAnsw: "Pertanyaan ini telah ditutup tanpa jawaban yang diterima.",
    TooltipTopicClosed: "Topik ini ditutup.",

    TooltipQuestSolved: "Ini adalah pertanyaan yang sudah terjawab",
    TooltipQuestUnsolved: "Ini adalah pertanyaan yang belum terjawab",

    StatusDone: "Selesai",
    TooltipProblFixed: "Ini telah diperbaiki",
    TooltipDone: "Ini telah dilakukan",

    StatusStarted: "Dimulai",
    TooltipFixing: "Kami telah mulai memperbaiki ini",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "Kami telah mulai melakukan ini", // MISSING  -""-

    StatusPlanned: "Direncanakan",
    TooltipProblPlanned: "Kami berencana untuk memperbaiki ini",
    TooltipIdeaPlanned: "Kami berencana untuk melakukan ini",   // or "to implement this"?

    StatusNew: "Baru",
    StatusNewDtl: "Topik baru, sedang didiskusikan",
    TooltipUnsProbl: "Ini adalah masalah yang belum terpecahkan",
    TooltipIdea: "Ini adalah sebuah ide",

    TooltipPersMsg: "Pesan pribadi",
    TooltipChat: "# berarti Saluran Obrolan",
    TooltipPrivChat: "Ini adalah saluran obrolan pribadi",

    TooltipPinnedGlob: "\nDisematkan secara global.",
    TooltipPinnedCat: "\nDisematkan di kategori ini.",

    SolvedClickView_1: "Terpecahkan di kiriman #",
    SolvedClickView_2: ", klik untuk melihat",

    PostHiddenClickShow: "Kiriman tersembunyi; klik untuk menampilkan",
    ClickSeeMoreRepls: "Tampilkan lebih banyak balasan",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Tampilkan lebih banyak komentar",  // MISSING
    ClickSeeThisComment: "Klik untuk menampilkan komentar ini",
    clickToShow: "klik untuk menampilkan",

    ManyDisagree: "Banyak yang tidak setuju dengan ini:",
    SomeDisagree: "Beberapa tidak setuju dengan ini:",

    PendAppr: "Menunggu persetujuan",
    CmtPendAppr: "Komentar menunggu persetujuan, dikirim ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Komentar Anda" : "Komentar") + " di bawah ini menunggu persetujuan.",

    _and: " dan",

    repliesTo: "balasan untuk",
    InReplyTo: "Membalas ke",
    YourReplyTo: "Balasan Anda untuk ",  // MISSING
    YourChatMsg: "Pesan obrolan Anda: ",   // MISSING
    YourDraft: "Draf Anda",    // MISSING
    YourEdits: "Edit Anda: ",   // MISSING
    YourProgrNoteC: "Catatan kemajuan Anda:",  // MISSING
    aProgrNote: "sebuah catatan kemajuan: ",  // MISSING

    ReplyingToC: "Membalas ke:",    // MISSING
    ScrollToPrevw_1: "Gulir ke ",  // MISSING
    ScrollToPrevw_2: "pratinjau",     // MISSING

    UnfinEdits: "Edit yang belum selesai",  // MISSING
    ResumeEdting: "Lanjutkan mengedit",  // MISSING
    DelDraft: "Hapus draf",   // MISSING

    ClickViewEdits: "Klik untuk melihat edit lama",

    By: "Oleh ", // ... someones name

    // Discussion ...
    aboutThisIdea: "tentang bagaimana dan apakah akan melakukan ide ini",
    aboutThisProbl: "tentang bagaimana dan apakah akan memperbaiki ini",

    AddProgrNote: "Tambah catatan kemajuan",
    // Progress ...
    withThisIdea: "dengan melakukan ide ini",
    withThisProbl: "dengan menangani masalah ini",
    withThis: "dengan melakukan ini",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notifikasi tentang topik ini:",

    // If is a direct message topic, members listed below this text.
    Msg: "Pesan",

    SmrzRepls: "Ringkas Balasan",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Ada ${numReplies} balasan. Estimasi waktu membaca: ${minutes} menit`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Selesai. Meringkas ${numSummarized} balasan, dari ${numShownBefore} balasan yang ditampilkan sebelumnya.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Tutup topik",  // MISSING
    CloseOwnQuestionTooltip: "Tutup pertanyaan ini jika Anda tidak lagi memerlukan jawaban.",
    CloseOthersQuestionTooltip: "Tutup pertanyaan ini jika tidak memerlukan jawaban, misal jika " +
        "di luar topik atau sudah dijawab di topik lain.",
    CloseToDoTooltip: "Tutup To-Do ini jika tidak perlu dilakukan atau diperbaiki.",
    CloseTopicTooltip: "Tutup topik ini jika tidak perlu dipertimbangkan lebih lanjut.",

    AcceptBtnExpl: "Terima ini sebagai jawaban untuk pertanyaan atau masalah",
    SolutionQ: "Solusi?",
    ClickUnaccept: "Klik untuk membatalkan penerimaan jawaban ini",
    PostAccepted: "Kiriman ini telah diterima sebagai jawaban",

    NumLikes: (num: number) => num === 1 ? "1 Suka" : num + " Suka",
    NumDisagree: (num: number) => num + " Tidak Setuju",
    NumBury: (num: number) => num === 1 ? "1 Kubur" : num + " Kubur",
    NumUnwanted: (num: number) => num === 1 ? "1 Tidak Diinginkan" : num + " Tidak Diinginkan",

    MoreVotes: "Lebih banyak suara...",
    LikeThis: "Suka ini",
    LinkToPost: "Tautan ke kiriman ini",
    Report: "Laporkan",
    ReportThisPost: "Laporkan kiriman ini",
    Admin: "Admin",
    DiscIx: "Indeks diskusi",

    Disagree: "Tidak Setuju",
    DisagreeExpl: "Klik di sini untuk tidak setuju dengan kiriman ini, atau untuk memperingatkan orang lain tentang kesalahan faktual.",
    Bury: "Kubur",
    BuryExpl: "Klik untuk mengurutkan kiriman lain sebelum kiriman ini. Hanya staf forum yang dapat melihat suara Anda.",
    Unwanted: "Tidak Diinginkan",
    UnwantedExpl: "Jika Anda tidak ingin kiriman ini ada di situs web ini. Ini akan mengurangi kepercayaan saya " +
            "pada penulis kiriman. Hanya staf forum yang dapat melihat suara Anda.",

    AddTags: "Tambah/hapus tag",
    UnWikify: "Hapus-Wikify",
    Wikify: "Wikify",
    PinDeleteEtc: "Sematkan / Hapus / Kategori ...",
  },


  // Share dialog

  sd: {
    Copied: "Disalin.",
    CtrlCToCopy: "Tekan CTRL+C untuk menyalin.",
    ClickToCopy: "Klik untuk menyalin tautan.",
  },


  // Chat

  c: {
    About_1: "Ini adalah saluran obrolan ",
    About_2: ", dibuat oleh ",
    ScrollUpViewComments: "Gulir ke atas untuk melihat komentar lama",
    Purpose: "Tujuan:",
    MessageDeleted: "(Pesan dihapus)",
    JoinThisChat: "Gabung obrolan ini",
    PostMessage: "Kirim pesan",
    AdvancedEditor: "Editor lanjutan",
    TypeTitle: "Ketik judul — tentang apa obrolan ini, dalam beberapa kata?",
    TypePurpose: "Ketik tujuan — bisa lebih panjang dari judul, lebih deskriptif.",
    TypeHere: "Ketik di sini. Anda dapat menggunakan Markdown dan HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Perlu tinjauan ",
    AdminHelp: "Bantuan admin ",
    StaffHelp: "Bantuan staf ",
    DraftsEtc: "Draf, bookmark, tugas",
    MoreNotfs: "Lihat semua notifikasi",
    DismNotfs: "Tandai semua telah dibaca",
    ViewProfile: "Lihat profil Anda",
    ViewGroups: "Lihat grup",
    LogOut: "Keluar",
    UnhideHelp: "Tampilkan kembali pesan bantuan",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Gulir ke:",
    Scroll: "Gulir",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "K",
    Back_2: "embali",
    BackExpl: "Gulir kembali ke posisi sebelumnya di halaman ini",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Halaman atas",
    PgTopHelp: "Pergi ke bagian atas halaman. Pintasan papan ketik: 1",
    Repl: "Balasan",
    ReplHelp: "Pergi ke bagian Balasan. Pintasan: 2",
    Progr: "Kemajuan",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Pergi ke bagian Kemajuan. Pintasan: 3",
    PgBtm: "Halaman bawah",
    Btm: "Bawah",
    BtmHelp: "Pergi ke bagian bawah halaman. Pintasan: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", dan ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " untuk gulir kembali",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Pilih pengguna",
    AddUsers: "Tambah pengguna",
  },


  // About user dialog

  aud: {
    IsMod: "Adalah moderator.",
    IsAdm: "Adalah administrator.",
    IsDeld: "Dinonaktifkan atau dihapus.",
    ThisIsGuest: "Ini adalah pengguna tamu, bisa jadi siapa saja.",
    ViewInAdm: "Lihat di Area Admin",
    ViewProfl: "Lihat Profil",
    ViewComments: "Lihat komentar lainnya",
    RmFromTpc: "Hapus dari topik",
    EmAdrUnkn: "Alamat email tidak diketahui — tamu ini tidak akan mendapatkan notifikasi tentang balasan.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Preferensi",
    Invites: "Undangan",
    DraftsEtc: "Draf dll",
    About: "Tentang",
    Privacy: "Privasi",
    Security: "Keamanan",
    Account: "Akun",
    Interface: "Antarmuka",

    // ----- Overview stats

    JoinedC: "Bergabung: ",
    PostsMadeC: "Kiriman dibuat: ",
    LastPostC: "Kiriman terakhir: ",
    LastSeenC: "Terakhir terlihat: ",
    TrustLevelC: "Tingkat kepercayaan: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Unggah foto",
    ChangePhoto: "Ubah foto",
    ImgTooSmall: "Gambar terlalu kecil: harus setidaknya 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Hanya staf dan anggota inti terpercaya yang dapat melihat ini.",
    OnlyMbrsCanSee: "Hanya orang yang telah menjadi anggota aktif selama beberapa waktu yang dapat melihat ini.",
    Nothing: "Tidak ada yang ditampilkan",
    Posts: "Kiriman",
    NoPosts: "Tidak ada kiriman.",
    Topics: "Topik",
    NoTopics: "Tidak ada topik.",

    // ----- User status

    UserBanned: "Pengguna ini diblokir",
    UserSuspended: (dateUtc: string) => `Pengguna ini ditangguhkan hingga ${dateUtc} UTC`,
    ReasonC: "Alasan: ",

    DeactOrDeld: "Telah dinonaktifkan atau dihapus.",
    isGroup: " (sebuah grup)",
    isGuest: " — pengguna tamu, bisa jadi siapa saja",
    isMod: " – moderator",
    isAdmin: " – administrator",
    you: "(Anda)",

    // ----- Notifications page

    NoNotfs: "Tidak ada notifikasi",
    NotfsToYouC: "Notifikasi untuk Anda:",
    NotfsToOtherC: (name: string) => `Notifikasi untuk ${name}:`,
    DefNotfsSiteWide: "Notifikasi default, di seluruh situs",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "untuk",

    // ----- Drafts Etc page

    NoDrafts: "Tidak ada draf",
    YourDraftsC: "Draf Anda:",
    DraftsByC: (name: string) => `Draf oleh ${name}:`,

    // ----- Invites page

    InvitesIntro: "Di sini Anda dapat mengundang orang untuk bergabung dengan situs ini. ",
    InvitesListedBelow: "Undangan yang telah Anda kirim tercantum di bawah ini.",
    NoInvites: "Anda belum mengundang siapa pun.",

    InvitedEmail: "Email yang diundang",
    WhoAccepted: "Anggota yang menerima",
    InvAccepted: "Undangan diterima",
    InvSent: "Undangan dikirim",
    JoinedAlready: "Sudah bergabung",

    SendAnInv: "Undang orang", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Kirim undangan",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Kami akan mengirimkan email singkat kepada teman Anda. Mereka akan mengklik tautan " +
        "untuk segera bergabung, tidak perlu masuk. " +
        "Mereka akan menjadi anggota biasa, bukan moderator atau admin.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Selesai. Saya akan mengirimkan email kepada mereka.",
    NoOneToInv: "Tidak ada yang bisa diundang.",
    InvNotfLater: "Saya akan memberi tahu Anda nanti, setelah saya mengundang mereka.",
    AlreadyInvSendAgainQ: "Ini sudah diundang — mungkin Anda ingin mengundang mereka lagi?",
    InvErr_1: "Ini menghasilkan ",
    InvErr_2: "kesalahan",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Ini sudah bergabung, jadi saya tidak mengundang mereka:",
    ResendInvsQ: "Kirim ulang undangan kepada orang-orang ini? Mereka sudah diundang sebelumnya.",
    InvAgain: "Undang lagi",

    // ----- Preferences, About

    AboutYou: "Tentang Anda",
    WebLink: "Situs web atau halaman Anda.",

    NotShownCannotChange: "Tidak ditampilkan secara publik. Tidak dapat diubah.",

    // The full name or alias:
    NameOpt: "Nama (opsional)",

    NotShown: "Tidak ditampilkan secara publik.",

    // The username:
    MayChangeFewTimes: "Anda hanya boleh mengubahnya beberapa kali saja.",
    notSpecified: "(tidak ditentukan)",
    ChangeUsername_1: "Anda hanya boleh mengubah nama pengguna beberapa kali saja.",
    ChangeUsername_2: "Terlalu sering mengubahnya dapat membuat orang lain bingung — " +
        "mereka tidak akan tahu cara menyapa Anda dengan @mention.",

    NotfAboutAll: "Dapatkan notifikasi tentang setiap kiriman baru (kecuali jika Anda membisukan topik atau kategori)",
    NotfAboutNewTopics: "Dapatkan notifikasi tentang topik baru (kecuali jika Anda membisukan kategori)",

    ActivitySummaryEmails: "Email ringkasan aktivitas",

    EmailSummariesToGroup:
        "Jika anggota grup ini tidak berkunjung ke sini, maka, secara default, kirimkan email " +
        "ringkasan topik populer dan hal lainnya.",
    EmailSummariesToMe:
        "Jika saya tidak berkunjung ke sini, kirimkan email kepada saya " +
        "ringkasan topik populer dan hal lainnya.",

    AlsoIfTheyVisit: "Kirimkan juga email jika mereka berkunjung secara teratur.",
    AlsoIfIVisit: "Kirimkan juga email jika saya berkunjung secara teratur.",

    HowOftenWeSend: "Seberapa sering kami harus mengirim email ini?",
    HowOftenYouWant: "Seberapa sering Anda menginginkan email ini?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Sembunyikan aktivitas terbaru Anda untuk orang asing dan anggota baru?",
    HideActivityStrangers_2: "(Tapi tidak bagi mereka yang sudah lama menjadi anggota aktif.)",
    HideActivityAll_1: "Sembunyikan aktivitas terbaru Anda untuk semua orang?",
    HideActivityAll_2: "(Kecuali untuk staf dan anggota inti terpercaya.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Alamat email",
    PrimaryDot: "Utama. ",
    VerifiedDot: "Terverifikasi. ",
    NotVerifiedDot: "Tidak terverifikasi. ",
    ForLoginWithDot: (provider: string) => `Untuk masuk dengan ${provider}. `,
    MakePrimary: "Jadikan Utama",
    AddEmail: "Tambah alamat email",
    TypeNewEmailC: "Ketik alamat email baru:",
    MaxEmailsInfo: (numMax: number) => `(Anda tidak dapat menambah lebih dari ${numMax} alamat.)`,
    EmailAdded_1: "Ditambahkan. Kami telah mengirimkan email verifikasi — ",
    EmailAdded_2: "periksa kotak masuk email Anda.",
    SendVerifEmail: "Kirim email verifikasi",

    EmailStatusExpl:
        "('Utama' berarti Anda dapat masuk melalui alamat ini, dan kami mengirimkan notifikasi ke alamat tersebut. " +
        "'Terverifikasi' berarti Anda mengeklik tautan verifikasi di email verifikasi alamat.)",

    // Password:
    ChangePwdQ: "Ubah kata sandi?",
    CreatePwdQ: "Buat kata sandi?",
    WillGetPwdRstEml: "Anda akan mendapatkan email pengaturan ulang kata sandi.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Tidak ada",

    // Logins:
    LoginMethods: "Metode masuk",
    commaAs: ", sebagai: ",

    // One's data:
    YourContent: "Konten Anda",
    DownloadPosts: "Unduh kiriman",
    DownloadPostsHelp: "Membuat file JSON berisi salinan topik dan komentar yang Anda kirimkan.",
    DownloadPersData: "Unduh data pribadi",
    DownloadPersDataHelp: "Membuat file JSON berisi salinan data pribadi Anda, misal nama Anda " +
        "(jika Anda menentukan nama) dan alamat email.",


    // Delete account:
    DangerZone: "Zona bahaya",
    DeleteAccount: "Hapus akun",
    DeleteYourAccountQ:
        "Hapus akun Anda? Kami akan menghapus nama Anda, melupakan alamat email, kata sandi, dan " +
        "identitas online apa pun (seperti login Facebook atau Twitter). " +
        "Anda tidak akan bisa masuk lagi. Ini tidak bisa dibatalkan.",
    DeleteUserQ:
        "Hapus pengguna ini? Kami akan menghapus namanya, melupakan alamat email, kata sandi, dan " +
        "identitas online (seperti login Facebook atau Twitter). " +
        "Pengguna tidak akan bisa masuk lagi. Ini tidak bisa dibatalkan.",
    YesDelete: "Ya, hapus",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Anggota grup",
    NoMembers: "Tidak ada anggota.",
    MayNotListMembers: "Mungkin tidak mencantumkan anggota.",
    AddMembers: "Tambah Anggota",
    BuiltInCannotModify: "Ini adalah grup bawaan; itu tidak bisa dimodifikasi.",
    NumMembers: (num: number) => `${num} anggota`,
    YouAreMember: "Anda adalah anggota.",
    CustomGroupsC: "Grup kustom:",
    BuiltInGroupsC: "Grup bawaan:",
    DeleteGroup: "Hapus grup ini",
  },


  // Create user dialog

  cud: {
    CreateUser: "Buat Pengguna",
    CreateAccount: "Buat Akun",
    EmailC: "Email:",  // REMOVE move to t.EmailC instead
    keptPriv: "akan dijaga kerahasiaannya",
    forNotfsKeptPriv: "untuk notifikasi balasan, dijaga kerahasiaannya",
    EmailVerifBy_1: "Email Anda telah diverifikasi oleh ",
    EmailVerifBy_2: ".",
    UsernameC: "Nama pengguna:",
    FullNameC: "Nama lengkap:",
    optName: "opsional",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Akun dibuat. Anda telah masuk.",  // COULD say if verif email sent too?
    AlmostDone:
        "Hampir selesai! Anda hanya perlu mengonfirmasi alamat email Anda. Kami telah " +
        "mengirim email kepada Anda. Silakan klik tautan di email untuk mengaktifkan " +
        "akun Anda. Anda dapat menutup halaman ini.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Ketentuan dan Privasi",

    Accept_1: "Apakah Anda menerima ",
    TermsOfService: "Ketentuan Layanan",
    TermsOfUse: "Ketentuan Penggunaan",
    Accept_2: " kami dan ",
    PrivPol: "Kebijakan Privasi",
    Accept_3_User: "?",
    Accept_3_Owner: " untuk pemilik situs?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Ya saya menerima",
  },


  // Password input

  pwd: {
    PasswordC: "Kata sandi:",
    StrengthC: "Kekuatan: ",
    FairlyWeak: "Cukup lemah.",
    toShort: "terlalu pendek",
    TooShort: (minLength: number) => `Terlalu pendek. Setidaknya harus ${minLength} karakter`,
    PlzInclDigit: "Mohon sertakan angka atau karakter khusus",
    TooWeak123abc: "Terlalu lemah. Jangan gunakan kata sandi seperti '12345' atau 'abcde'.",
    AvoidInclC: "Hindari menyertakan (bagian dari) nama atau email Anda dalam kata sandi:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Halaman tidak ditemukan, atau Akses Ditolak.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Anda sedang meniru identitas seseorang, yang mungkin tidak memiliki akses ke semua bagian " +
        "situs web ini.",

    IfYouThinkExistsThen: "Jika menurut Anda halaman tersebut ada, masuklah sebagai orang yang boleh mengaksesnya. ",
    LoggedInAlready: "(Anda sudah masuk, tetapi mungkin akunnya salah?) ",
    ElseGoToHome_1: "Jika tidak, Anda dapat ",
    ElseGoToHome_2: "pergi ke beranda.",

    CreateAcconut: "Buat akun",
    ContinueWithDots: "Lanjutkan dengan ...",
    SignUp: "Gabung",
    LogIn: "Masuk",
    LogInWithPwd: "Masuk dengan Kata Sandi",
    CreateAdmAcct: "Buat akun admin:",
    AuthRequired: "Otentikasi diperlukan untuk mengakses situs ini",
    LogInToLike: "Masuk untuk Menyukai kiriman ini",
    LogInToSubmit: "Masuk dan kirim",
    LogInToComment: "Masuk untuk menulis komentar",
    LogInToCreateTopic: "Masuk untuk membuat topik",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "Atau ",         // "Or "
    OrLogIn_2: "Masuk",      // "Log in" (this is a button)
    OrLogIn_3: " saja",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Atau ",
    SignUpInstead_2: "Buat akun", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", atau cukup ",
    OrTypeName_2: "ketik sebuah nama",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Atau buat akun:",
    OrTypeName: "Atau ketik nama Anda:",
    OrLogIn: "Atau masuk:",
    YourNameQ: "Nama Anda?",

    BadCreds: "Nama pengguna atau kata sandi salah",

    UsernameOrEmailC: "Nama pengguna atau email:",
    PasswordC: "Kata sandi:",
    ForgotPwd: "Apakah Anda lupa kata sandi Anda?",

    NoPwd: "Anda belum memilih kata sandi.",
    CreatePwd: "Buat kata sandi",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Beri tahu kami apa yang Anda khawatirkan.",
    ThanksHaveReported: "Terima kasih. Anda telah melaporkannya. Staf forum akan memeriksanya.",
    ReportComment: "Laporkan Komentar",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Kiriman ini berisi data pribadi, misalnya nama asli seseorang.",
    OptOffensive: "Kiriman ini berisi konten yang menyinggung atau kasar.",
    OptSpam: "Kiriman ini adalah iklan yang tidak diinginkan.",
    OptOther: "Beritahu staf tentang kiriman ini karena alasan lain.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Anda dapat menampilkan pesan bantuan lagi, jika Anda sudah masuk, dengan " +
        "mengeklik nama Anda lalu ",
    YouCanShowAgain_2: "Tampilkan kembali pesan bantuan",
  },


  // Editor

  e: {
    SimilarTopicsC: "Topik serupa:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Maaf, saat ini Anda hanya dapat mengunggah satu file dalam satu waktu",
    PleaseFinishPost: "Harap selesaikan menulis kiriman Anda terlebih dahulu",
    PleaseFinishChatMsg: "Harap selesaikan menulis pesan obrolan Anda terlebih dahulu",
    PleaseFinishMsg: "Harap selesaikan menulis pesan Anda terlebih dahulu",
    PleaseSaveEdits: "Harap simpan edit Anda saat ini terlebih dahulu",
    PleaseSaveOrCancel: "Harap simpan atau batalkan topik baru Anda terlebih dahulu",
    CanContinueEditing: "Anda dapat terus mengedit teks, jika Anda membuka editor lagi.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Mohon jangan menghapus semua teks. Tulis sesuatu.",
    PleaseWriteSth: "Mohon tulis sesuatu.",
    PleaseWriteTitle: "Mohon tulis judul topik.",
    PleaseWriteMsgTitle: "Mohon tulis judul pesan.",
    PleaseWriteMsg: "Mohon tulis pesan.",

    exBold: "teks tebal",
    exEmph: "teks miring",
    exPre: "teks yang diformat sebelumnya",
    exQuoted: "teks kutipan",
    ExHeading: "Judul",

    TitlePlaceholder: "Ketik judul — tentang apa ini, dalam satu kalimat singkat?",

    EditPost_1: "Edit ",
    EditPost_2: "kiriman ",

    TypeChatMsg: "Ketik pesan obrolan:",
    YourMsg: "Pesan Anda:",
    CreateTopic: "Buat topik baru",
    CreateCustomHtml: "Buat halaman HTML khusus (tambahkan judul <h1> Anda sendiri)",
    CreateInfoPage: "Buat halaman info",
    CreateCode: "Buat halaman kode sumber",
    AskQuestion: "Ajukan pertanyaan",
    ReportProblem: "Laporkan masalah",
    SuggestIdea: "Sarankan ide",
    NewChat: "Judul dan tujuan obrolan",  // MISSING, changed from "New chat channel ..." to just "Chat".
    NewPrivChat: "Judul dan tujuan obrolan pribadi",  // MISSING, changed from "New private chat" to just "Private chat".
    AppendComment: "Tambahkan komentar di bagian bawah halaman:",

    ReplyTo: "Balas ke ",
    ReplyTo_theOrigPost: "Kiriman Asli",
    ReplyTo_post: "kiriman ",
    AddCommentC: "Tambah komentar:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Silakan pilih satu atau beberapa kiriman untuk dibalas.",

    Save: "Simpan",
    edits: "edit",

    PostReply: "Kirim balasan",
    PostComment: "Kirim komentar",

    Post: "Kirim",
    comment: "komentar",
    question: "pertanyaan",

    PostMessage: "Kirim pesan",
    SimpleEditor: "Editor sederhana",

    Send: "Kirim",
    message: "pesan",

    Create: "Buat",
    page: "halaman",
    chat: "obrolan",
    idea: "ide",
    topic: "topik",

    Submit: "Kirim",
    problem: "masalah",

    ViewOldEdits: "Lihat edit lama",

    UploadBtnTooltip: "Unggah file atau gambar",
    BoldBtnTooltip: "Buat teks tebal",
    EmBtnTooltip: "Miringkan",
    QuoteBtnTooltip: "Kutip",
    PreBtnTooltip: "Teks terformat",
    HeadingBtnTooltip: "Judul",

    TypeHerePlaceholder: "Ketik di sini. Anda dapat menggunakan Markdown dan HTML. Seret dan lepas untuk menempelkan gambar.",

    Maximize: "Maksimalkan",
    ToNormal: "Kembali normal",
    TileHorizontally: "Ubin secara horizontal",

    PreviewC: "Pratinjau:",
    TitleExcl: " (tidak termasuk judul)",
    ShowEditorAgain: "Tampilkan editor lagi",
    Minimize: "Minimalkan",

    PreviewInfo: "Di sini Anda dapat melihat pratinjau tampilan kiriman Anda.",
    CannotType: "Anda tidak dapat mengetik di sini.",

    LoadingDraftDots: "Memuat draf...",
    DraftUnchanged: "Tidak berubah.",
    CannotSaveDraftC: "Tidak dapat menyimpan draf:",
    DraftSavedBrwsr: "Draf disimpan, di browser.",   // MISSING
    DraftSaved: (nr: string | number) => `Draf ${nr} tersimpan.`,
    DraftDeleted: (nr: string | number) => `Draf ${nr} dihapus.`,
    WillSaveDraft: (nr: string | number) => `Akan menyimpan draf ${nr} ...`,
    SavingDraft: (nr: string | number) => `Menyimpan draf ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Menghapus draf ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Pilih kategori",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Pilih tipe topik:",
    DiscussionExpl: "Diskusi tentang sesuatu.",
    QuestionExpl: "Satu jawaban dapat ditandai sebagai jawaban yang diterima.",
    ProblExpl: "Jika ada yang rusak atau tidak berfungsi. Dapat ditandai sebagai diperbaiki/selesai.",
    IdeaExpl: "Sebuah saran. Dapat ditandai sebagai selesai/diimplementasikan.",
    ChatExpl: "Percakapan yang mungkin tidak pernah berakhir.",
    PrivChatExpl: "Hanya dapat dilihat oleh orang yang diundang untuk bergabung dalam obrolan.",

    CustomHtml: "Halaman HTML khusus",
    InfoPage: "Halaman info",
    Code: "Kode",
    EmbCmts: "Komentar yang disematkan",
    About: "Tentang",
    PrivChat: "Obrolan Pribadi",
    Form: "Formulir",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Tidak ada lagi komunitas untuk diikuti.",
    SelCmty: "Pilih komunitas ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Cari bantuan",  // MISSING
    TxtToFind: "Teks yang dicari",
  },


  // No internet

  ni: {
    NoInet: "Tidak ada koneksi internet",
    PlzRefr: "Segarkan halaman untuk melihat perubahan terbaru. (Terjadi diskoneksi)",
    RefrNow: "Segarkan sekarang",
  },


  PostDeleted: (postNr: number) => `Kiriman tersebut, nr ${postNr}, telah dihapus.`,
  NoSuchPost: (postNr: number) => `Tidak ada kiriman nr ${postNr} di halaman ini.`,
  NoPageHere: "Halaman ini telah dihapus, atau tidak pernah ada, atau Anda tidak boleh mengaksesnya.",
  GoBackToLastPage: "Kembali ke halaman terakhir",

};


