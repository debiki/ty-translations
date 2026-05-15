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

var t_el_GR: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Ενεργός",
  Activity: "Δραστηριότητα",
  Add: "Προσθήκη",
  AddingDots: "Προσθήκη ...",
  AddComment: "Προσθήκη σχολίου",  // & dupl t.e.AddCommentC
  Admin: "Διαχειριστής",
  AdvSearch: "Προηγμένη αναζήτηση",
  Anonym: "Ανώνυμος",
  Away: "Απουσιάζει",
  Back: "Πίσω",
  BlogN: "Ιστολόγιο",
  Bookmarks: "Σελιδοδείκτες",
  Cancel: "Ακύρωση",
  Categories: "Κατηγορίες",
  Category: "Κατηγορία",
  ChangeV: "Αλλαγή",
  ClickToShow: "Κάντε κλικ για εμφάνιση",
  ChangeDots: "Αλλαγή ...",
  ChatN: "Συνομιλία",
  Chatting: "Σε συνομιλία",
  CheckYourEmail: "Ελέγξτε το email σας",
  Close: "Κλείσιμο",
  closed: "κλειστό",
  comments: "σχόλια",   // as in:  "123 comments"
  Continue: "Συνέχεια",
  Created: "Δημιουργήθηκε",
  Delete: "Διαγραφή",
  Deleted: "Διαγράφηκε",
  DirectMessage: "Προσωπικό μήνυμα",
  Discussion: "Συζήτηση",
  discussion: "συζήτηση",
  done: "έγινε",
  EditV: "Επεξεργασία",
  Editing: "Επεξεργασία",
  EmailC: "Email: ",   // copy t.cud.EmailC to here
  EmailAddress: "Διεύθυνση email",
  EmailAddresses: "Διευθύνσεις email",
  EmailSentD: "Το email στάλθηκε.",
  Forum: "Φόρουμ",
  GetNotifiedAbout: "Λάβετε ειδοποιήσεις για",
  GroupsC: "Ομάδες:",
  Hide: "Απόκρυψη",
  Home: "Αρχική",
  Idea: "Ιδέα",
  Join: "Συμμετοχή",
  KbdShrtcsC: "Συντομεύσεις πληκτρολογίου: ",
  Loading: "Φόρτωση...",
  LoadMore: "Φόρτωση περισσότερων ...",
  LogIn: "Σύνδεση",
  LoggedInAs: "Συνδεδεμένος ως ",
  LogOut: "Αποσύνδεση",
  Maybe: "Ίσως",
  Manage: "Διαχείριση",
  Members: "Μέλη",
  MessageN: "Μήνυμα",
  MoreDots: "Περισσότερα...",
  Move: "Μετακίνηση",
  Name: "Όνομα",
  NameC: "Όνομα:",
  NewTopic: "Νέο θέμα",
  NoCancel: "Όχι, ακύρωση",
  Notifications: "Ειδοποιήσεις",
  NotImplemented: "(Δεν έχει υλοποιηθεί)",
  NotYet: "Όχι ακόμα",
  NoTitle: "Χωρίς τίτλο",
  NoTopics: "Δεν υπάρχουν θέματα.",
  Okay: "ΟΚ",
  OkayDots: "ΟΚ ...",
  Online: "Συνδεδεμένος",
  onePerLine: "ένα ανά γραμμή",
  PreviewV: "Προεπισκόπηση",
  Problem: "Πρόβλημα",
  progressN: "πρόοδος",
  Question: "Ερώτηση",
  Recent: "Πρόσφατα",
  Remove: "Αφαίρεση",
  Reopen: "Επαναφορά",
  ReplyV: "Απάντηση",
  Replying: "Απάντηση",
  Replies: "Απαντήσεις",
  replies: "απαντήσεις",
  Save: "Αποθήκευση",
  SavingDots: "Αποθήκευση ...",
  SavedDot: "Αποθηκεύτηκε.",
  Search: "Αναζήτηση",
  SendMsg: "Αποστολή μηνύματος",
  ShowPreview: "Εμφάνιση προεπισκόπησης",
  SignUp: "Συμμετοχή",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Λύση",
  started: "ξεκίνησε",
  Summary: "Σύνοψη",
  Submit: "Υποβολή",
  Tag: "Ετικέτα",
  Tags: "Ετικέτες",
  Tools: "Εργαλεία",
  Topics: "Θέματα",
  TopicTitle: "Τίτλος θέματος",
  TopicType: "Τύπος θέματος",
  UploadingDots: "Μεταφόρτωση...",
  Username: "Όνομα χρήστη",
  Users: "Χρήστες",
  Welcome: "Καλώς ήρθατε",
  Wiki: "Wiki",
  Yes: "Ναι",
  YesBye: "Ναι, αντίο",
  YesDoThat: "Ναι, κάντε το",
  You: "Εσείς",
  you: "εσείς",

  // Trust levels.
  Guest:  "Επισκέπτης",
  NewMember: "Νέο μέλος",
  BasicMember: "Βασικό μέλος",
  FullMember: "Πλήρες μέλος",
  TrustedMember: "Έμπιστο μέλος",
  RegularMember: "Έμπιστος τακτικός",  // renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Βασικό μέλος",

  // Periods.
  PastDay: "Τελευταία ημέρα",
  PastWeek: "Τελευταία εβδομάδα",
  PastMonth: "Τελευταίος μήνας",
  PastQuarter: "Τελευταίο τρίμηνο",
  PastYear: "Τελευταίο έτος",
  AllTime: "Όλες οι εποχές",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "μήν",  // months
  daysLtr: "ημ",      // days
  hoursLtr: "ώ",     // hours
  minsLtr: "λ",      // minutes
  secsLtr: "δ",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 ημέρα πριν" : `${numDays} ημέρες πριν`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 ώρα πριν" : `${numHours} ώρες πριν`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 λεπτό πριν" : `${numMins} λεπτά πριν`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 δευτερόλεπτο πριν" : `${numSecs} δευτερόλεπτα πριν`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Απαιτείται email",
    NoSpcs: "Παρακαλώ χωρίς κενά",
    InvldAddr: "Μη έγκυρη διεύθυνση email",
    NoBadChrs: "Παρακαλώ χωρίς περίεργους χαρακτήρες",

    // Full name input field:
    NotOnlSpcs: "Όχι μόνο κενά παρακαλώ",
    NoAt: "Όχι @ παρακαλώ",

    // Username input field:
    NoDash: "Παρακαλώ χωρίς παύλες (-)",
    DontInclAt: "Μην συμπεριλαμβάνετε το @",
    StartEndLtrDgt: "Ξεκινήστε και τελειώστε με γράμμα ή ψηφίο",
    OnlLtrNumEtc: "Μόνο γράμματα (a-z, A-Z), αριθμούς και _ (κάτω παύλα)",
    // This shown just below the username input:
    UnUnqShrt_1: "Το δικό σας ",
    UnUnqShrt_2: "@username",
    UnUnqShrt_3: ", μοναδικό και σύντομο",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Πρέπει να είναι τουλάχιστον ${minLength} χαρακτήρες`,
    TooLong: (maxLength: number) => `Πολύ μεγάλο. Πρέπει να είναι το πολύ ${maxLength} χαρακτήρες`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Κάθε ανάρτηση",
    EveryPostInTopic: "Θα ειδοποιείστε για όλες τις νέες απαντήσεις σε αυτό το θέμα.",
    EveryPostInCat: "Θα ειδοποιείστε για όλα τα νέα θέματα και απαντήσεις σε αυτήν την κατηγορία.",
    EveryPostInTopicsWithTag: "Θα ειδοποιείστε για νέα θέματα με αυτήν την ετικέτα και όλες τις απαντήσεις σε αυτά τα θέματα.",
    EveryPostWholeSite: "Θα ειδοποιείστε για όλα τα νέα θέματα και απαντήσεις οπουδήποτε.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Νέα θέματα",
    NewTopicsInCat: "Θα ειδοποιείστε για νέα θέματα σε αυτήν την κατηγορία.",
    NewTopicsWithTag: "Θα ειδοποιείστε για νέα θέματα με αυτήν την ετικέτα.",
    NewTopicsWholeSite: "Θα ειδοποιείστε για νέα θέματα οπουδήποτε.",

    Tracking: "Παρακολούθηση",

    Normal: "Κανονική",
    NormalDescr: "Θα ειδοποιείστε εάν κάποιος σας μιλήσει, επίσης έμμεσα, π.χ. μια " +
        "απάντηση σε μια απάντηση σε εσάς.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Χαμηλή",
    HushedDescr: "Θα ειδοποιείστε μόνο εάν κάποιος σας μιλήσει απευθείας.",

    Muted: "Σε σίγαση",
    MutedTopic: "Καμία ειδοποίηση.",   // removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Επεξεργασία",
    Hide_1: "Απόκρυψη",
    Hide_2: ", κάντε κλικ στο ",
    Hide_3: " για να ανοίξει ξανά",
  },


  // Forum categories

  fcs: {
    All: "Όλες", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Λίστα θεμάτων",

    // Select category dropdown

    from: "από",  // used like so:  "From <Category Name>" or "From All Categories"
    in: "σε",      // used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Όλες οι κατηγορίες",

    // Topic sort order

    Active: "Πρόσφατα ενεργά",      // didn't add "first" yet to transls
    ActiveDescr: "Εμφανίζει πρώτα τα πρόσφατα ενεργά θέματα",

    New: "Νέα",
    NewDescr: "Εμφανίζει πρώτα τα νεότερα θέματα",

    Top: "Δημοφιλή",              // didn't rename from Top to Popular in transls
    TopDescr: "Εμφανίζει πρώτα τα δημοφιλή θέματα",

    // Topic filter dropdown

    AllTopics: "Όλα τα θέματα",

    ShowAllTopics: "Εμφάνιση όλων των θεμάτων",
    ShowAllTopicsDescr: "Όχι όμως τα διαγραμμένα θέματα",

    WaitingTopics: "Θέματα σε αναμονή",
    OnlyWaitingDescr_1: "Εμφανίζει μόνο θέματα ", // changed "questions" to "topics"
    OnlyWaitingDescr_2: "σε αναμονή ",
    OnlyWaitingDescr_3: "για λύση ή για να υλοποιηθούν και να ολοκληρωθούν",  // rewrote

    YourTopics: "Τα θέματα σας",
    AssignedToYou: "Ανατέθηκαν σε εσάς",

    DeletedTopics: "Εμφάνιση διαγραμμένων",
    ShowDeleted: "Εμφάνιση διαγραμμένων",
    ShowDeletedDescr: "Εμφανίζει όλα τα θέματα, συμπεριλαμβανομένων των διαγραμμένων θεμάτων",

    // Rightmost buttons

    ViewCategories: "Εμφάνιση κατηγοριών",
    EditCat: "Επεξεργασία κατηγορίας",
    CreateCat: "Δημιουργία κατηγορίας",
    CreateTopic: "Δημιουργία θέματος",
    PostIdea: "Δημοσίευση ιδέας",
    AskQuestion: "Υποβολή ερώτησης",
    ReportProblem: "Αναφορά προβλήματος",
    CreateMindMap: "Δημιουργία νοητικού χάρτη",
    CreatePage: "Δημιουργία σελίδας",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Επεξήγηση εικονιδίων...",
    IconExplanation: "Επεξήγηση εικονιδίου:",
    ExplGenDisc: "Μια γενική συζήτηση.",
    ExplQuestion: "Μια ερώτηση χωρίς αποδεκτή απάντηση.",
    ExplAnswer: "Μια ερώτηση με αποδεκτή απάντηση.",
    ExplIdea: "Μια ιδέα / πρόταση.",
    ExplProblem: "Ένα πρόβλημα.",
    ExplPlanned: "Κάτι που σχεδιάζουμε να κάνουμε ή να διορθώσουμε.",
    ExplDone: "Κάτι που έχει γίνει ή διορθωθεί.",
    ExplClosed: "Το θέμα έκλεισε.",
    ExplPinned: "Θέμα που εμφανίζεται πάντα πρώτο (ίσως μόνο στην κατηγορία του).",

    PopularTopicsComma: "Δημοφιλή θέματα, ",
    TopFirstAllTime: "Εμφανίζει πρώτα τα πιο δημοφιλή θέματα, όλων των εποχών.",
    TopFirstPastDay: "Εμφανίζει θέματα δημοφιλή κατά την τελευταία ημέρα.",

    CatHasBeenDeleted: "Αυτή η κατηγορία έχει διαγραφεί",

    TopicsActiveFirst: "Θέματα, πρόσφατα ενεργά πρώτα",
    TopicsNewestFirst: "Θέματα, νέα πρώτα",

    CreatedOn: "Δημιουργήθηκε στις ",
    LastReplyOn: "\nΤελευταία απάντηση στις ",
    EditedOn: "\nΕπεξεργάστηκε στις ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "δημιούργησε το θέμα",
    frequentPoster: "συχνός χρήστης",
    mostRecentPoster: "πιο πρόσφατος χρήστης",

    inC: "σε: ",

    TitleFixed: "Αυτό έχει διορθωθεί",
    TitleDone: "Αυτό έχει γίνει",
    TitleStarted: "Το έχουμε ξεκινήσει αυτό",
    TitleStartedFixing: "Έχουμε ξεκινήσει τη διόρθωση αυτού",
    TitleUnsolved: "Αυτό είναι ένα άλυτο πρόβλημα",
    TitleIdea: "Αυτή είναι μια ιδέα",
    TitlePlanningFix: "Σχεδιάζουμε να το διορθώσουμε αυτό",
    TitlePlanningDo: "Σχεδιάζουμε να το κάνουμε αυτό",
    TitleChat: "Αυτό είναι ένα κανάλι συνομιλίας",
    TitlePrivateChat: "Αυτό είναι ένα ιδιωτικό κανάλι συνομιλίας",
    TitlePrivateMessage: "Ένα προσωπικό μήνυμα",
    TitleInfoPage: "Αυτή είναι μια σελίδα πληροφοριών",
    TitleDiscussion: "Μια συζήτηση",
    IsPinnedGlobally: "\nΈχει καρφιτσωθεί, επομένως εμφανίζεται πρώτο.",
    IsPinnedInCat: "\nΈχει καρφιτσωθεί στην κατηγορία του, επομένως εμφανίζεται πρώτο, στην κατηγορία του.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Πρόσφατα θέματα (σε αναμονή)",
    RecentTopicsInclDel: "Πρόσφατα θέματα (συμπεριλαμβανομένων των διαγραμμένων)",
    RecentTopics: "Πρόσφατα θέματα",
    _replies: " απαντήσεις",
    _deleted: " (διαγράφηκε)",
    _defCat: " (προεπιλεγμένη κατηγορία)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Πρόσφατες αναρτήσεις",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " συνδεδεμένοι σε αυτήν τη συνομιλία",    // example: "5 online in this chat"
    NumOnlForum: " συνδεδεμένοι σε αυτό το φόρουμ",

    // Open left-sidebar button title.
    WatchbBtn: "Τα θέματα σας",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Τα πρόσφατα θέματα σας, συνομιλίες που συμμετέχετε, προσωπικά μηνύματα",

    // Title shown on user profile pages.
    AbtUsr: "Σχετικά με τον χρήστη",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Επιστροφή από το προφίλ χρήστη",
    BackFromAdm: "Επιστροφή από την περιοχή διαχειριστή",

    // Title shown on full text search page.
    SearchPg: "Σελίδα αναζήτησης",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Προσθήκη ...",
    RecentlyViewed: "Πρόσφατα θέματα",
    JoinedChats: "Συνομιλίες που συμμετέχετε",
    ChatChannels: "Κανάλια συνομιλίας",
    CreateChat: "Δημιουργία καναλιού συνομιλίας",
    DirectMsgs: "Προσωπικά μηνύματα",
    NoChats: "Κανένα",    // meaning: "No chat messages"
    NoDirMsgs: "Κανένα",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Ενέργειες θέματος",
    ViewPeopleHere: "Εμφάνιση ατόμων εδώ",
    ViewAddRemoveMembers: "Εμφάνιση / προσθήκη / αφαίρεση μελών",
    ViewChatMembers: "Εμφάνιση μελών συνομιλίας",
    EditChat: "Επεξεργασία περιγραφής συνομιλίας",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Αποχώρηση από αυτήν τη συνομιλία",
    LeaveThisCommunity: "Αποχώρηση από αυτήν την κοινότητα",
    JoinThisCommunity: "Συμμετοχή σε αυτήν την κοινότητα",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Πρόσφατα σχόλια σε αυτό το θέμα:",
    NoComments: "Δεν υπάρχουν σχόλια.",

    YourBookmarks: "Οι σελιδοδείκτες σας:",

    UsersOnline: "Συνδεδεμένοι χρήστες:",
    UsersOnlineForum: "Συνδεδεμένοι χρήστες σε αυτό το φόρουμ:",
    UsersInThisChat: "Χρήστες σε αυτήν τη συνομιλία:",
    UsersInThisTopic: "Χρήστες σε αυτό το θέμα:",

    GettingStartedGuide: "Οδηγός διαχειριστή", // was: "Getting Started Guide".
    AdminGuide: "Οδηγός διαχειριστή",          // ... but what? It's here already, just reuse this transl field
    Guide: "Οδηγός",

    // How to hide the sidebar.
    CloseShortcutS: "Κλείσιμο (συντόμευση πληκτρολογίου: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Προσθήκη περισσότερων ατόμων",

    // Shown next to one's own username, in a list of users.
    thatsYou: "αυτός είστε εσείς",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Μόνο εσείς, απ' ό,τι φαίνεται",
    YouAnd: "Εσείς, και ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " άτομο" : " άτομα";
      const have = numStrangers === 1 ? "δεν έχει" : "δεν έχουν";
      return numStrangers + people + " που " + have + " συνδεθεί";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // "are sorted by" —> "might be"
    RepliesToTheLeft: "Οι απαντήσεις στα αριστερά μπορεί να είναι ταξινομημένες κατά ",
    bestFirst: "καλύτερες-πρώτα.",
    ButBelow: "Αλλά παρακάτω ",
    insteadBy: " οι ίδιες απαντήσεις είναι αντίθετα ταξινομημένες κατά ",
    newestFirst: "νεότερες-πρώτα.",

    SoIfLeave: "Επομένως, εάν φύγετε και επιστρέψετε εδώ αργότερα, παρακάτω θα βρείτε ",
    allNewReplies: "όλες τις νέες απαντήσεις.",
    Click: "Κάντε κλικ σε",
    aReplyToReadIt: " μια απάντηση παρακάτω για να τη διαβάσετε — επειδή παρακάτω εμφανίζεται μόνο ένα απόσπασμα.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Κάντε κλικ για αλλαγή κατάστασης",
    ClickToViewAnswer: "Κάντε κλικ για εμφάνιση απάντησης",
    ViewAnswer: "Εμφάνιση απάντησης",
    ChangeStatusC: "Αλλαγή κατάστασης σε:",
    ChangeCatC: "Αλλαγή κατηγορίας:",
    ChangeTopicTypeC: "Αλλαγή τύπου θέματος:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "μια ερώτηση",
    hasAccptAns: "έχει μια αποδεκτή απάντηση",
    aProblem: "ένα πρόβλημα",
    planToFix: "σχέδιο διόρθωσης",
    anIdea: "μια ιδέα",
    planToDo: "σχέδιο υλοποίησης",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Αυτή η φόρμα έχει ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "κλείσει. Δεν μπορείτε πλέον να τη συμπληρώσετε και να τη δημοσιεύσετε.",

    ThisTopicClosed_1: "Αυτό το θέμα έχει ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Μπορείτε ακόμα να δημοσιεύετε σχόλια.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Αυτή η σελίδα έχει διαγραφεί",
    CatDeldPageToo: "Η κατηγορία διαγράφηκε, επομένως διαγράφηκε και αυτή η σελίδα",

    ThreadDeld: "Το νήμα διαγράφηκε",
    CmntDeld: "Το σχόλιο διαγράφηκε",
    PostDeld: "Η ανάρτηση διαγράφηκε",
    DiscDeld: "Η συζήτηση διαγράφηκε",
    PageDeld: "Η σελίδα διαγράφηκε",
    PagePendAppr: "Σελίδα σε αναμονή έγκρισης",
    TitlePendAppr: "Τίτλος σε αναμονή έγκρισης",
    TextPendingApproval: "Κείμενο σε αναμονή έγκρισης",

    TooltipQuestClosedNoAnsw: "Αυτή η ερώτηση έκλεισε χωρίς καμία αποδεκτή απάντηση.",
    TooltipTopicClosed: "Αυτό το θέμα είναι κλειστό.",

    TooltipQuestSolved: "Αυτή είναι μια λυμένη ερώτηση",
    TooltipQuestUnsolved: "Αυτή είναι μια άλυτη ερώτηση",

    StatusDone: "Έγινε",
    TooltipProblFixed: "Αυτό έχει διορθωθεί",
    TooltipDone: "Αυτό έχει γίνει",

    StatusStarted: "Ξεκίνησε",
    TooltipFixing: "Έχουμε ξεκινήσει τη διόρθωση αυτού",      // "We're currently" —> "We've started"
    TooltipImplementing: "Έχουμε ξεκινήσει την υλοποίηση αυτού", //  -""-

    StatusPlanned: "Σχεδιάστηκε",
    TooltipProblPlanned: "Σχεδιάζουμε να το διορθώσουμε αυτό",
    TooltipIdeaPlanned: "Σχεδιάζουμε να το κάνουμε αυτό",   // or "to implement this"?

    StatusNew: "Νέο",
    StatusNewDtl: "Νέο θέμα, υπό συζήτηση",
    TooltipUnsProbl: "Αυτό είναι ένα άλυτο πρόβλημα",
    TooltipIdea: "Αυτή είναι μια ιδέα",

    TooltipPersMsg: "Προσωπικό μήνυμα",
    TooltipChat: "# σημαίνει Κανάλι Συνομιλίας",
    TooltipPrivChat: "Αυτό είναι ένα ιδιωτικό κανάλι συνομιλίας",

    TooltipPinnedGlob: "\nΚαρφιτσωμένο καθολικά.",
    TooltipPinnedCat: "\nΚαρφιτσωμένο σε αυτήν την κατηγορία.",

    SolvedClickView_1: "Λύθηκε στην ανάρτηση #",
    SolvedClickView_2: ", κάντε κλικ για εμφάνιση",

    PostHiddenClickShow: "Η ανάρτηση είναι κρυφή. Κάντε κλικ για εμφάνιση",
    ClickSeeMoreRepls: "Εμφάνιση περισσότερων απαντήσεων",      // removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Εμφάνιση περισσότερων σχολίων",
    ClickSeeThisComment: "Κάντε κλικ για εμφάνιση αυτού του σχολίου",
    clickToShow: "κάντε κλικ για εμφάνιση",

    ManyDisagree: "Πολλοί διαφωνούν με αυτό:",
    SomeDisagree: "Ορισμένοι διαφωνούν με αυτό:",

    PendAppr: "Σε αναμονή έγκρισης",
    CmtPendAppr: "Σχόλιο σε αναμονή έγκρισης, δημοσιεύτηκε ",  // REMOVE  too complicated
    CmtBelowPendAppr: (isYour) => (isYour ? "Το δικό σας" : "Το") + " σχόλιο παρακάτω είναι σε αναμονή έγκρισης.",

    _and: " και",

    repliesTo: "απαντήσεις σε",
    InReplyTo: "Σε απάντηση στο",
    YourReplyTo: "Η απάντηση σας στο ",
    YourChatMsg: "Το μήνυμα συνομιλίας σας: ",
    YourDraft: "Το προσχέδιο σας",
    YourEdits: "Οι επεξεργασίες σας: ",
    YourProgrNoteC: "Η σημείωση προόδου σας:",
    aProgrNote: "μια σημείωση προόδου: ",

    ReplyingToC: "Απάντηση σε:",
    ScrollToPrevw_1: "Κύλιση στην ",
    ScrollToPrevw_2: "προεπισκόπηση",

    UnfinEdits: "Ημιτελείς επεξεργασίες",
    ResumeEdting: "Συνέχιση επεξεργασίας",
    DelDraft: "Διαγραφή προσχεδίου",

    ClickViewEdits: "Κάντε κλικ για εμφάνιση παλιών επεξεργασιών",

    By: "Από ", // ... someones name

    // Discussion ...
    aboutThisIdea: "σχετικά με το πώς και αν θα υλοποιηθεί αυτή η ιδέα",
    aboutThisProbl: "σχετικά με το πώς και αν θα διορθωθεί αυτό",

    AddProgrNote: "Προσθήκη σημείωσης προόδου",
    // Progress ...
    withThisIdea: "με την υλοποίηση αυτής της ιδέας",
    withThisProbl: "με τον χειρισμό αυτού του προβλήματος",
    withThis: "με την υλοποίηση αυτού",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Ειδοποιήσεις για αυτό το θέμα:",

    // If is a direct message topic, members listed below this text.
    Msg: "Μήνυμα",

    SmrzRepls: "Σύνοψη απαντήσεων",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Υπάρχουν ${numReplies} απαντήσεις. Εκτιμώμενος χρόνος ανάγνωσης: ${minutes} λεπτά`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Έγινε. Συνοψίστηκαν ${numSummarized} απαντήσεις, από τις ${numShownBefore} απαντήσεις που εμφανίζονταν προηγουμένως.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Κλείσιμο θέματος",
    CloseOwnQuestionTooltip: "Κλείστε αυτήν την ερώτηση εάν δεν χρειάζεστε πλέον απάντηση.",
    CloseOthersQuestionTooltip: "Κλείστε αυτήν την ερώτηση εάν δεν χρειάζεται απάντηση, π.χ. εάν " +
        "είναι εκτός θέματος ή έχει ήδη απαντηθεί σε άλλο θέμα.",
    CloseToDoTooltip: "Κλείστε αυτήν την εργασία εάν δεν χρειάζεται να γίνει ή να διορθωθεί.",
    CloseTopicTooltip: "Κλείστε αυτό το θέμα εάν δεν χρειάζεται περαιτέρω εξέταση.",

    AcceptBtnExpl: "Αποδοχή αυτού ως απάντηση στην ερώτηση ή στο πρόβλημα",
    SolutionQ: "Λύση;",
    ClickUnaccept: "Κάντε κλικ για αναίρεση αποδοχής αυτής της απάντησης",
    PostAccepted: "Αυτή η ανάρτηση έχει γίνει αποδεκτή ως απάντηση",

    NumLikes: (num: number) => num === 1 ? "1 Like" : num + " Likes",
    NumDisagree: (num: number) => num + " Διαφωνώ",
    NumBury: (num: number) => num === 1 ? "1 Θάψιμο" : num + " Θαψίματα",
    NumUnwanted: (num: number) => num === 1 ? "1 Ανεπιθύμητο" : num + " Ανεπιθύμητα",

    MoreVotes: "Περισσότερες ψήφοι...",
    LikeThis: "Μου αρέσει",
    LinkToPost: "Σύνδεσμος προς αυτήν την ανάρτηση",
    Report: "Αναφορά",
    ReportThisPost: "Αναφορά αυτής της ανάρτησης",
    Admin: "Διαχειριστής",
    DiscIx: "Ευρετήριο συζητήσεων",

    Disagree: "Διαφωνώ",
    DisagreeExpl: "Κάντε κλικ εδώ για να διαφωνήσετε με αυτήν την ανάρτηση ή για να προειδοποιήσετε τους άλλους για πραγματικά λάθη.",
    Bury: "Θάψιμο",
    BuryExpl: "Κάντε κλικ για να ταξινομήσετε άλλες αναρτήσεις πριν από αυτήν την ανάρτηση. Μόνο το προσωπικό του φόρουμ μπορεί να δει την ψήφο σας.",
    Unwanted: "Ανεπιθύμητο",
    UnwantedExpl: "Εάν δεν θέλετε αυτήν την ανάρτηση σε αυτόν τον ιστότοπο. Αυτό θα μείωνε την εμπιστοσύνη που έχω " +
            "στον συντάκτη της ανάρτησης. Μόνο το προσωπικό του φόρουμ μπορεί να δει την ψήφο σας.",

    AddTags: "Προσθήκη/αφαίρεση ετικετών",
    UnWikify: "Αναίρεση Wiki",
    Wikify: "Μετατροπή σε Wiki",
    PinDeleteEtc: "Καρφίτσωμα / Διαγραφή / Κατηγορία ...",
  },


  // Share dialog

  sd: {
    Copied: "Αντιγράφηκε.",
    CtrlCToCopy: "Πατήστε CTRL+C για αντιγραφή.",
    ClickToCopy: "Κάντε κλικ για αντιγραφή συνδέσμου.",
  },


  // Chat

  c: {
    About_1: "Αυτό είναι το κανάλι συνομιλίας ",
    About_2: ", δημιουργήθηκε από ",
    ScrollUpViewComments: "Κυλήστε προς τα πάνω για να δείτε παλαιότερα σχόλια",
    Purpose: "Σκοπός:",
    MessageDeleted: "(Το μήνυμα διαγράφηκε)",
    JoinThisChat: "Συμμετοχή σε αυτήν τη συνομιλία",
    PostMessage: "Δημοσίευση μηνύματος",
    AdvancedEditor: "Προηγμένο πρόγραμμα επεξεργασίας",
    TypeTitle: "Πληκτρολογήστε έναν τίτλο — περί τίνος πρόκειται αυτή η συνομιλία, με λίγα λόγια;",
    TypePurpose: "Πληκτρολογήστε έναν σκοπό — μπορεί να είναι μεγαλύτερος από τον τίτλο, πιο περιγραφικός.",
    TypeHere: "Πληκτρολογήστε εδώ. Μπορείτε να χρησιμοποιήσετε Markdown και HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Χρειάζεται έλεγχο ",
    AdminHelp: "Βοήθεια διαχειριστή ",
    StaffHelp: "Βοήθεια προσωπικού ",
    DraftsEtc: "Προσχέδια, σελιδοδείκτες, εργασίες",
    MoreNotfs: "Εμφάνιση όλων των ειδοποιήσεων",
    DismNotfs: "Σήμανση όλων ως αναγνωσμένων",
    ViewProfile: "Εμφάνιση του προφίλ σας",
    ViewGroups: "Εμφάνιση ομάδων",
    LogOut: "Αποσύνδεση",
    UnhideHelp: "Επανεμφάνιση μηνυμάτων βοήθειας",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Κύλιση σε:",
    Scroll: "Κύλιση",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Πίσω (B)",
    BackExpl: "Κύλιση πίσω στην προηγούμενη θέση σας σε αυτήν τη σελίδα",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Κορυφή σελίδας",
    PgTopHelp: "Μετάβαση στην κορυφή της σελίδας. Συντόμευση πληκτρολογίου: 1",
    Repl: "Απαντήσεις",
    ReplHelp: "Μετάβαση στην ενότητα Απαντήσεις. Συντόμευση: 2",
    Progr: "Πρόοδος",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Μετάβαση στην ενότητα Πρόοδος. Συντόμευση: 3",
    PgBtm: "Τέλος σελίδας",
    Btm: "Τέλος",
    BtmHelp: "Μετάβαση στο τέλος της σελίδας. Συντόμευση: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: ", και ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " για κύλιση πίσω",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Επιλογή χρηστών",
    AddUsers: "Προσθήκη χρηστών",
  },


  // About user dialog

  aud: {
    IsMod: "Είναι συντονιστής.",
    IsAdm: "Είναι διαχειριστής.",
    IsDeld: "Είναι ανενεργός ή διαγραμμένος.",
    ThisIsGuest: "Αυτός είναι ένας επισκέπτης, θα μπορούσε στην πραγματικότητα να είναι οποιοσδήποτε.",
    ViewInAdm: "Εμφάνιση στην Περιοχή Διαχειριστή",
    ViewProfl: "Εμφάνιση προφίλ",
    ViewComments: "Εμφάνιση άλλων σχολίων",
    RmFromTpc: "Αφαίρεση από το θέμα",
    EmAdrUnkn: "Η διεύθυνση email είναι άγνωστη — αυτός ο επισκέπτης δεν θα ειδοποιηθεί για απαντήσεις.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Προτιμήσεις",
    Invites: "Προσκλήσεις",
    DraftsEtc: "Προσχέδια κλπ",
    About: "Σχετικά",
    Privacy: "Απόρρητο",
    Security: "Ασφάλεια",
    Account: "Λογαριασμός",
    Interface: "Διεπαφή",

    // ----- Overview stats

    JoinedC: "Εγγράφηκε: ",
    PostsMadeC: "Αναρτήσεις: ",
    LastPostC: "Τελευταία ανάρτηση: ",
    LastSeenC: "Εθεάθη τελευταία φορά: ",
    TrustLevelC: "Επίπεδο εμπιστοσύνης: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Μεταφόρτωση φωτογραφίας",
    ChangePhoto: "Αλλαγή φωτογραφίας",
    ImgTooSmall: "Η εικόνα είναι πολύ μικρή: πρέπει να είναι τουλάχιστον 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Μόνο το προσωπικό και τα έμπιστα βασικά μέλη μπορούν να το δουν αυτό.",
    OnlyMbrsCanSee: "Μόνο άτομα που είναι ενεργά μέλη για κάποιο διάστημα μπορούν να το δουν αυτό.",
    Nothing: "Τίποτα προς εμφάνιση",
    Posts: "Αναρτήσεις",
    NoPosts: "Δεν υπάρχουν αναρτήσεις.",
    Topics: "Θέματα",
    NoTopics: "Δεν υπάρχουν θέματα.",

    // ----- User status

    UserBanned: "Αυτός ο χρήστης είναι αποκλεισμένος",
    UserSuspended: (dateUtc: string) => `Αυτός ο χρήστης είναι σε αναστολή μέχρι τις ${dateUtc} UTC`,
    ReasonC: "Αιτία: ",

    DeactOrDeld: "Έχει απενεργοποιηθεί ή διαγραφεί.",
    isGroup: " (ομάδα)",
    isGuest: " — επισκέπτης, θα μπορούσε να είναι οποιοσδήποτε",
    isMod: " – συντονιστής",
    isAdmin: " – διαχειριστής",
    you: "(εσείς)",

    // ----- Notifications page

    NoNotfs: "Δεν υπάρχουν ειδοποιήσεις",
    NotfsToYouC: "Ειδοποιήσεις προς εσάς:",
    NotfsToOtherC: (name: string) => `Ειδοποιήσεις προς ${name}:`,
    DefNotfsSiteWide: "Προεπιλεγμένες ειδοποιήσεις, για όλο τον ιστότοπο",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "για",

    // ----- Drafts Etc page

    NoDrafts: "Δεν υπάρχουν προσχέδια",
    YourDraftsC: "Τα προσχέδια σας:",
    DraftsByC: (name: string) => `Προσχέδια από ${name}:`,

    // ----- Invites page

    InvitesIntro: "Εδώ μπορείτε να προσκαλέσετε άτομα να συμμετάσχουν σε αυτόν τον ιστότοπο. ",
    InvitesListedBelow: "Οι προσκλήσεις που έχετε ήδη στείλει παρατίθενται παρακάτω.",
    NoInvites: "Δεν έχετε προσκαλέσει κανέναν ακόμα.",

    InvitedEmail: "Email προσκεκλημένου",
    WhoAccepted: "Μέλος που αποδέχτηκε",
    InvAccepted: "Η πρόσκληση έγινε αποδεκτή",
    InvSent: "Η πρόσκληση στάλθηκε",
    JoinedAlready: "Συμμετέχει ήδη",

    SendAnInv: "Πρόσκληση ατόμων", // was: "Send an Invite",
    SendInv: "Αποστολή προσκλήσεων",
    SendInvExpl:
        "Θα στείλουμε στους φίλους σας ένα σύντομο email. Θα κάνουν κλικ σε έναν σύνδεσμο " +
        "για να συμμετάσχουν αμέσως, χωρίς να απαιτείται σύνδεση. " +
        "Θα γίνουν κανονικά μέλη, όχι συντονιστές ή διαχειριστές.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Έγινε. Θα τους στείλω ένα email.",
    NoOneToInv: "Κανείς για πρόσκληση.",
    InvNotfLater: "Θα σας ειδοποιήσω αργότερα, όταν τους έχω προσκαλέσει.",
    AlreadyInvSendAgainQ: "Αυτοί έχουν ήδη προσκληθεί — ίσως θα θέλατε να τους προσκαλέσετε ξανά;",
    InvErr_1: "Αυτά κατέληξαν σε ",
    InvErr_2: "σφάλματα",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Αυτοί έχουν ήδη συμμετάσχει, επομένως δεν τους προσκάλεσα:",
    ResendInvsQ: "Επαναποστολή προσκλήσεων σε αυτά τα άτομα; Έχουν ήδη προσκληθεί.",
    InvAgain: "Πρόσκληση ξανά",

    // ----- Preferences, About

    AboutYou: "Σχετικά με εσάς",
    WebLink: "Οποιοσδήποτε ιστότοπος ή σελίδα σας.",

    NotShownCannotChange: "Δεν εμφανίζεται δημόσια. Δεν μπορεί να αλλάξει.",

    // The full name or alias:
    NameOpt: "Όνομα (προαιρετικό)",

    NotShown: "Δεν εμφανίζεται δημόσια.",

    // The username:
    MayChangeFewTimes: "Μπορείτε να το αλλάξετε μόνο λίγες φορές.",
    notSpecified: "(δεν καθορίστηκε)",
    ChangeUsername_1: "Μπορείτε να αλλάξετε το όνομα χρήστη σας μόνο λίγες φορές.",
    ChangeUsername_2: "Η πολύ συχνή αλλαγή του μπορεί να προκαλέσει σύγχυση στους άλλους — " +
        "δεν θα ξέρουν πώς να σας αναφέρουν με @.",

    NotfAboutAll: "Ειδοποίηση για κάθε νέα ανάρτηση (εκτός εάν βάλετε σε σίγαση το θέμα ή την κατηγορία)",
    NotfAboutNewTopics: "Ειδοποίηση για νέα θέματα (εκτός εάν βάλετε σε σίγαση την κατηγορία)",

    ActivitySummaryEmails: "Email σύνοψης δραστηριότητας",

    EmailSummariesToGroup:
        "Όταν τα μέλη αυτής της ομάδας δεν επισκέπτονται τον ιστότοπο, τότε, από προεπιλογή, στείλτε τους με email " +
        "συνοψεις δημοφιλών θεμάτων και άλλων πραγμάτων.",
    EmailSummariesToMe:
        "Όταν δεν επισκέπτομαι τον ιστότοπο, στείλτε μου με email " +
        "συνοψεις δημοφιλών θεμάτων και άλλων πραγμάτων.",

    AlsoIfTheyVisit: "Στείλτε τους email ακόμα και αν επισκέπτονται τον ιστότοπο τακτικά.",
    AlsoIfIVisit: "Στείλτε μου email ακόμα και αν επισκέπτομαι τον ιστότοπο τακτικά.",

    HowOftenWeSend: "Πόσο συχνά θα στέλνουμε αυτά τα email;",
    HowOftenYouWant: "Πόσο συχνά θέλετε αυτά τα email;",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Απόκρυψη της πρόσφατης δραστηριότητάς σας από αγνώστους και νέα μέλη;",
    HideActivityStrangers_2: "(Αλλά όχι από όσους είναι ενεργά μέλη για κάποιο διάστημα.)",
    HideActivityAll_1: "Απόκρυψη της πρόσφατης δραστηριότητάς σας από όλους;",
    HideActivityAll_2: "(Εκτός από το προσωπικό και τα έμπιστα βασικά μέλη.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Διευθύνσεις email",
    PrimaryDot: "Κύρια. ",
    VerifiedDot: "Επαληθευμένη. ",
    NotVerifiedDot: "Μη επαληθευμένη. ",
    ForLoginWithDot: (provider: string) => `Για σύνδεση με ${provider}. `,
    MakePrimary: "Ορισμός ως κύρια",
    AddEmail: "Προσθήκη διεύθυνσης email",
    TypeNewEmailC: "Πληκτρολογήστε μια νέα διεύθυνση email:",
    MaxEmailsInfo: (numMax: number) => `(Δεν μπορείτε να προσθέσετε περισσότερες από ${numMax} διευθύνσεις.)`,
    EmailAdded_1: "Προστέθηκε. Σας στείλαμε ένα email επαλήθευσης — ",
    EmailAdded_2: "ελέγξτε τα εισερχόμενά σας.",
    SendVerifEmail: "Αποστολή email επαλήθευσης",

    EmailStatusExpl:
        "('Κύρια' σημαίνει ότι μπορείτε να συνδεθείτε μέσω αυτής της διεύθυνσης και στέλνουμε ειδοποιήσεις σε αυτήν. " +
        "'Επαληθευμένη' σημαίνει ότι κάνατε κλικ σε έναν σύνδεσμο επαλήθευσης σε ένα email επαλήθευσης διεύθυνσης.)",

    // Password:
    ChangePwdQ: "Αλλαγή κωδικού πρόσβασης;",
    CreatePwdQ: "Δημιουργία κωδικού πρόσβασης;",
    WillGetPwdRstEml: "Θα λάβετε ένα email επαναφοράς κωδικού πρόσβασης.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Κανένας",

    // Logins:
    LoginMethods: "Μέθοδοι σύνδεσης",
    commaAs: ", ως: ",

    // One's data:
    YourContent: "Το περιεχόμενο σας",
    DownloadPosts: "Λήψη αναρτήσεων",
    DownloadPostsHelp: "Δημιουργεί ένα αρχείο JSON με ένα αντίγραφο των θεμάτων και των σχολίων που έχετε δημοσιεύσει.",
    DownloadPersData: "Λήψη προσωπικών δεδομένων",
    DownloadPersDataHelp: "Δημιουργεί ένα αρχείο JSON με ένα αντίγραφο των προσωπικών σας δεδομένων, π.χ. το όνομά σας " +
        "(εάν καθορίσατε όνομα) και τη διεύθυνση email σας.",


    // Delete account:
    DangerZone: "Επικίνδυνη ζώνη",
    DeleteAccount: "Διαγραφή λογαριασμού",
    DeleteYourAccountQ:
        "Διαγραφή του λογαριασμού σας; Θα αφαιρέσουμε το όνομά σας, θα ξεχάσουμε τη διεύθυνση email σας, τον κωδικό πρόσβασης και " +
        "οποιεσδήποτε διαδικτυακές ταυτότητες (όπως σύνδεση μέσω Facebook ή Twitter). " +
        "Δεν θα μπορείτε να συνδεθείτε ξανά. Αυτό δεν μπορεί να αναιρεθεί.",
    DeleteUserQ:
        "Διαγραφή αυτού του χρήστη; Θα αφαιρέσουμε το όνομα, θα ξεχάσουμε τη διεύθυνση email, τον κωδικό πρόσβασης και " +
        "τις διαδικτυακές ταυτότητες (όπως σύνδεση μέσω Facebook ή Twitter). " +
        "Ο χρήστης δεν θα μπορεί να συνδεθεί ξανά. Αυτό δεν μπορεί να αναιρεθεί.",
    YesDelete: "Ναι, διαγραφή",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Μέλη ομάδας",
    NoMembers: "Δεν υπάρχουν μέλη.",
    MayNotListMembers: "Ενδέχεται να μην εμφανίζονται τα μέλη.",
    AddMembers: "Προσθήκη μελών",
    BuiltInCannotModify: "Αυτή είναι μια ενσωματωμένη ομάδα. δεν μπορεί να τροποποιηθεί.",
    NumMembers: (num: number) => `${num} μέλη`,
    YouAreMember: "Είστε μέλος.",
    CustomGroupsC: "Προσαρμοσμένες ομάδες:",
    BuiltInGroupsC: "Ενσωματωμένες ομάδες:",
    DeleteGroup: "Διαγραφή αυτής της ομάδας",
  },


  // Create user dialog

  cud: {
    CreateUser: "Δημιουργία χρήστη",
    CreateAccount: "Δημιουργία λογαριασμού",
    EmailC: "Email:",
    keptPriv: "θα παραμείνει ιδιωτικό",
    forNotfsKeptPriv: "για ειδοποιήσεις απαντήσεων, παραμένει ιδιωτικό",
    EmailVerifBy_1: "Το email σας επαληθεύτηκε από το ",
    EmailVerifBy_2: ".",
    UsernameC: "Όνομα χρήστη:",
    FullNameC: "Πλήρες όνομα:",
    optName: "προαιρετικό",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Ο λογαριασμός δημιουργήθηκε. Έχετε συνδεθεί.",  // COULD say if verif email sent too?
    AlmostDone:
        "Σχεδόν έτοιμο! Απλώς πρέπει να επιβεβαιώσετε τη διεύθυνση email σας. Έχουμε " +
        "σας στείλαμε ένα email. Κάντε κλικ στον σύνδεσμο στο email για να ενεργοποιήσετε " +
        "τον λογαριασμό σας. Μπορείτε να κλείσετε αυτήν τη σελίδα.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Όροι και Απόρρητο",

    Accept_1: "Αποδέχεστε τους ",
    TermsOfService: "Όρους Παροχής Υπηρεσιών",
    TermsOfUse: "Όρους Χρήσης",
    Accept_2: " και την ",
    PrivPol: "Πολιτική Απορρήτου",
    Accept_3_User: " μας;",
    Accept_3_Owner: " για ιδιοκτήτες ιστότοπων;",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Ναι, αποδέχομαι",
  },


  // Password input

  pwd: {
    PasswordC: "Κωδικός πρόσβασης:",
    StrengthC: "Ισχύς: ",
    FairlyWeak: "Αρκετά αδύναμος.",
    toShort: "πολύ μικρός",
    TooShort: (minLength: number) => `Πολύ μικρός. Πρέπει να είναι τουλάχιστον ${minLength} χαρακτήρες`,
    PlzInclDigit: "Παρακαλούμε συμπεριλάβετε ένα ψηφίο ή ειδικό χαρακτήρα",
    TooWeak123abc: "Πολύ αδύναμος. Μην χρησιμοποιείτε κωδικούς όπως '12345' ή 'abcde'.",
    AvoidInclC: "Αποφύγετε να συμπεριλάβετε (μέρη από) το όνομα ή το email σας στον κωδικό πρόσβασης:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Η σελίδα δεν βρέθηκε ή η πρόσβαση δεν επιτρέπεται.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Παρουσιάζεστε ως κάποιος άλλος, ο οποίος μπορεί να μην έχει πρόσβαση σε όλα τα μέρη " +
        "αυτού του ιστότοπου.",

    IfYouThinkExistsThen: "Εάν πιστεύετε ότι η σελίδα υπάρχει, συνδεθείτε ως κάποιος που μπορεί να έχει πρόσβαση σε αυτήν. ",
    LoggedInAlready: "(Είστε ήδη συνδεδεμένοι, αλλά ίσως είναι λάθος λογαριασμός;) ",
    ElseGoToHome_1: "Διαφορετικά, μπορείτε να ",
    ElseGoToHome_2: "μεταβείτε στην αρχική σελίδα.",

    CreateAcconut: "Δημιουργία λογαριασμού",
    ContinueWithDots: "Συνέχεια με ...",
    SignUp: "Συμμετοχή",
    LogIn: "Σύνδεση",
    LogInWithPwd: "Σύνδεση με κωδικό πρόσβασης",
    CreateAdmAcct: "Δημιουργία λογαριασμού διαχειριστή:",
    AuthRequired: "Απαιτείται έλεγχος ταυτότητας για την πρόσβαση σε αυτόν τον ιστότοπο",
    LogInToLike: "Συνδεθείτε για να σας αρέσει αυτή η ανάρτηση",
    LogInToSubmit: "Συνδεθείτε και υποβάλετε",
    LogInToComment: "Συνδεθείτε για να γράψετε ένα σχόλιο",
    LogInToCreateTopic: "Συνδεθείτε για να δημιουργήσετε θέμα",

    //AlreadyHaveAcctQ: "You have an account? ",
    OrLogIn_1: "Ή ",         // "Or "
    OrLogIn_2: "Συνδεθείτε",      // "Log in" (this is a button)
    OrLogIn_3: " αντίθετα",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Ή ",
    SignUpInstead_2: "Δημιουργήστε λογαριασμό", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", ή απλώς ",
    OrTypeName_2: "πληκτρολογήστε ένα όνομα",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Ή δημιουργήστε λογαριασμό:",
    OrTypeName: "Ή πληκτρολογήστε το όνομά σας:",
    OrLogIn: "Ή συνδεθείτε:",
    YourNameQ: "Το όνομά σας;",

    BadCreds: "Λάθος όνομα χρήστη ή κωδικός πρόσβασης",

    UsernameOrEmailC: "Όνομα χρήστη ή email:",
    PasswordC: "Κωδικός πρόσβασης:",
    ForgotPwd: "Ξεχάσατε τον κωδικό πρόσβασής σας;",

    NoPwd: "Δεν έχετε επιλέξει ακόμα κωδικό πρόσβασης.",
    CreatePwd: "Δημιουργία κωδικού πρόσβασης",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Πείτε μας τι σας απασχολεί.",
    ThanksHaveReported: "Ευχαριστούμε. Το αναφέρατε. Το προσωπικό του φόρουμ θα ρίξει μια ματιά.",
    ReportComment: "Αναφορά σχολίου",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Αυτή η ανάρτηση περιέχει προσωπικά δεδομένα, για παράδειγμα το πραγματικό όνομα κάποιου.",
    OptOffensive: "Αυτή η ανάρτηση περιέχει προσβλητικό ή υβριστικό περιεόμενο.",
    OptSpam: "Αυτή η ανάρτηση είναι μια ανεπιθύμητη διαφήμιση.",
    OptOther: "Ειδοποιήστε το προσωπικό για αυτήν την ανάρτηση για κάποιο άλλο λόγο.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Μπορείτε να εμφανίσετε ξανά τα μηνύματα βοήθειας, εάν είστε συνδεδεμένοι, κάνοντας ",
    YouCanShowAgain_2: "κλικ στο όνομά σας και στη συνέχεια Επανεμφάνιση μηνυμάτων βοήθειας",
  },


  // Editor

  e: {
    SimilarTopicsC: "Παρόμοια θέματα:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Λυπούμαστε, αλλά προς το παρόν μπορείτε να μεταφορτώσετε μόνο ένα αρχείο τη φορά",
    PleaseFinishPost: "Ολοκληρώστε πρώτα τη συγγραφή της ανάρτησής σας",
    PleaseFinishChatMsg: "Ολοκληρώστε πρώτα τη συγγραφή του μηνύματος συνομιλίας σας",
    PleaseFinishMsg: "Ολοκληρώστε πρώτα τη συγγραφή του μηνύματός σας",
    PleaseSaveEdits: "Αποθηκεύστε πρώτα τις τρέχουσες επεξεργασίες σας",
    PleaseSaveOrCancel: "Παρακαλούμε πρώτα είτε αποθηκεύστε είτε ακυρώστε το νέο σας θέμα",
    CanContinueEditing: "Μπορείτε να συνεχίσετε την επεξεργασία του κειμένου σας, εάν ανοίξετε ξανά το πρόγραμμα επεξεργασίας.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Παρακαλώ μην διαγράφετε όλο το κείμενο. Γράψτε κάτι.",
    PleaseWriteSth: "Παρακαλώ γράψτε κάτι.",
    PleaseWriteTitle: "Παρακαλώ γράψτε έναν τίτλο θέματος.",
    PleaseWriteMsgTitle: "Παρακαλώ γράψτε έναν τίτλο μηνύματος.",
    PleaseWriteMsg: "Παρακαλώ γράψτε ένα μήνυμα.",

    exBold: "έντονο κείμενο",
    exEmph: "πλάγιο κείμενο",
    exPre: "προμορφωμένο κείμενο",
    exQuoted: "παρατιθέμενο κείμενο",
    ExHeading: "Επικεφαλίδα",

    TitlePlaceholder: "Πληκτρολογήστε έναν τίτλο — περί τίνος πρόκειται, σε μια σύντομη πρόταση;",

    EditPost_1: "Επεξεργασία ",
    EditPost_2: "ανάρτησης ",

    TypeChatMsg: "Πληκτρολογήστε ένα μήνυμα συνομιλίας:",
    YourMsg: "Το μήνυμά σας:",
    CreateTopic: "Δημιουργία νέου θέματος",
    CreateCustomHtml: "Δημιουργία προσαρμοσμένης σελίδας HTML (προσθέστε τον δικό σας τίτλο <h1>)",
    CreateInfoPage: "Δημιουργία σελίδας πληροφοριών",
    CreateCode: "Δημιουργία σελίδας πηγαίου κώδικα",
    AskQuestion: "Υποβολή ερώτησης",
    ReportProblem: "Αναφορά προβλήματος",
    SuggestIdea: "Πρόταση ιδέας",
    NewChat: "Τίτλος και σκοπός συνομιλίας",
    NewPrivChat: "Τίτλος και σκοπός ιδιωτικής συνομιλίας",
    AppendComment: "Προσθήκη σχολίου στο τέλος της σελίδας:",

    ReplyTo: "Απάντηση στο ",
    ReplyTo_theOrigPost: "την Αρχική Ανάρτηση",
    ReplyTo_post: "ανάρτηση ",
    AddCommentC: "Προσθήκη σχολίου:",

    PleaseSelectPosts: "Επιλέξτε μία ή περισσότερες αναρτήσεις για να απαντήσετε.",

    Save: "Αποθήκευση",
    edits: "επεξεργασίες",

    PostReply: "Δημοσίευση απάντησης",
    PostComment: "Δημοσίευση σχολίου",

    Post: "Δημοσίευση",
    comment: "σχόλιο",
    question: "ερώτηση",

    PostMessage: "Δημοσίευση μηνύματος",
    SimpleEditor: "Απλό πρόγραμμα επεξεργασίας",

    Send: "Αποστολή",
    message: "μήνυμα",

    Create: "Δημιουργία",
    page: "σελίδα",
    chat: "συνομιλία",
    idea: "ιδέα",
    topic: "θέμα",

    Submit: "Υποβολή",
    problem: "πρόβλημα",

    ViewOldEdits: "Εμφάνιση παλιών επεξεργασιών",

    UploadBtnTooltip: "Μεταφόρτωση αρχείου ή εικόνας",
    BoldBtnTooltip: "Έντονη γραφή",
    EmBtnTooltip: "Πλάγια γραφή",
    QuoteBtnTooltip: "Παράθεση",
    PreBtnTooltip: "Προμορφωμένο κείμενο",
    HeadingBtnTooltip: "Επικεφαλίδα",

    TypeHerePlaceholder: "Πληκτρολογήστε εδώ. Μπορείτε να χρησιμοποιήσετε Markdown και HTML. Σύρετε και αποθέστε για να επικολλήσετε εικόνες.",

    Maximize: "Μεγιστοποίηση",
    ToNormal: "Επαναφορά στο κανονικό",
    TileHorizontally: "Οριζόντια παράθεση",

    PreviewC: "Προεπισκόπηση:",
    TitleExcl: " (τίτλος εξαιρείται)",
    ShowEditorAgain: "Εμφάνιση προγράμματος επεξεργασίας ξανά",
    Minimize: "Ελαχιστοποίηση",

    PreviewInfo: "Εδώ μπορείτε να δείτε μια προεπισκόπηση του πώς θα φαίνεται η ανάρτησή σας.",
    CannotType: "Δεν μπορείτε να πληκτρολογήσετε εδώ.",

    LoadingDraftDots: "Φόρτωση προσχεδίου...",
    DraftUnchanged: "Χωρίς αλλαγή.",
    CannotSaveDraftC: "Δεν είναι δυνατή η αποθήκευση του προσχεδίου:",
    DraftSavedBrwsr: "Το προσχέδιο αποθηκεύτηκε στο πρόγραμμα περιήγησης.",
    DraftSaved: (nr: string | number) => `Το προσχέδιο ${nr} αποθηκεύτηκε.`,
    DraftDeleted: (nr: string | number) => `Το προσχέδιο ${nr} διαγράφηκε.`,
    WillSaveDraft: (nr: string | number) => `Θα αποθηκευτεί το προσχέδιο ${nr} ...`,
    SavingDraft: (nr: string | number) => `Αποθήκευση προσχεδίου ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Διαγραφή προσχεδίου ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Επιλογή κατηγορίας",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Επιλογή τύπου θέματος:",
    DiscussionExpl: "Μια συζήτηση για κάτι.",
    QuestionExpl: "Μία απάντηση μπορεί να χαρακτηριστεί ως η αποδεκτή απάντηση.",
    ProblExpl: "Εάν κάτι έχει χαλάσει ή δεν λειτουργεί. Μπορεί να χαρακτηριστεί ως διορθωμένο/λυμένο.",
    IdeaExpl: "Μια πρόταση. Μπορεί να χαρακτηριστεί ως ολοκληρωμένη/υλοποιημένη.",
    ChatExpl: "Μια ίσως ατελείωτη συζήτηση.",
    PrivChatExpl: "Ορατό μόνο σε άτομα που λαμβάνουν πρόσκληση να συμμετάσχουν στη συνομιλία.",

    CustomHtml: "Προσαρμοσμένη σελίδα HTML",
    InfoPage: "Σελίδα πληροφοριών",
    Code: "Κώδικας",
    EmbCmts: "Ενσωματωμένα σχόλια",
    About: "Σχετικά",
    PrivChat: "Ιδιωτική συνομιλία",
    Form: "Φόρμα",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Δεν υπάρχουν άλλες κοινότητες για να συμμετάσχετε.",
    SelCmty: "Επιλογή κοινότητας ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Αναζήτηση για βοήθεια",
    TxtToFind: "Κείμενο προς αναζήτηση",
  },


  // No internet

  ni: {
    NoInet: "Δεν υπάρχει σύνδεση στο διαδίκτυο",
    PlzRefr: "Ανανεώστε τη σελίδα για να δείτε τις τελευταίες αλλαγές. (Υπήρξε αποσύνδεση)",
    RefrNow: "Ανανέωση τώρα",
  },


  PostDeleted: (postNr: number) => `Αυτή η ανάρτηση, αρ. ${postNr}, έχει διαγραφεί.`,
  NoSuchPost: (postNr: number) => `Δεν υπάρχει ανάρτηση αρ. ${postNr} σε αυτήν τη σελίδα.`,
  NoPageHere: "Αυτή η σελίδα έχει διαγραφεί, ή δεν υπήρξε ποτέ, ή δεν έχετε πρόσβαση σε αυτήν.",
  GoBackToLastPage: "Επιστροφή στην τελευταία σελίδα",

};
