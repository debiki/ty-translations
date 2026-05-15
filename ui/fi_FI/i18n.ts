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

var t_fi_FI: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Aktiivinen",
  Activity: "Aktiviteetti",
  Add: "Lisää",
  AddingDots: "Lisätään ...",
  AddComment: "Lisää kommentti",
  Admin: "Ylläpitäjä",
  AdvSearch: "Tarkennettu haku",
  Anonym: "Anonyymi",
  Away: "Poissa",
  Back: "Takaisin",
  BlogN: "Blogi",
  Bookmarks: "Kirjanmerkit",
  Cancel: "Peruuta",
  Categories: "Kategoriat",
  Category: "Kategoria",
  ChangeV: "Muuta",
  ClickToShow: "Näytä klikkaamalla",
  ChangeDots: "Muuta ...",
  ChatN: "Chat",
  Chatting: "Chattaa",
  CheckYourEmail: "Tarkista sähköpostisi",
  Close: "Sulje",
  closed: "suljettu",
  comments: "kommenttia",   // as in:  "123 comments"
  Continue: "Jatka",
  Created: "Luotu",
  Delete: "Poista",
  Deleted: "Poistettu",
  DirectMessage: "Yksityisviesti",
  Discussion: "Keskustelu",
  discussion: "keskustelu",
  done: "valmis",
  EditV: "Muokkaa",
  Editing: "Muokataan",
  EmailC: "Sähköposti: ",
  EmailAddress: "Sähköpostiosoite",
  EmailAddresses: "Sähköpostiosoitteet",
  EmailSentD: "Sähköposti lähetetty.",
  Forum: "Foorumi",
  GetNotifiedAbout: "Tilaa ilmoitukset:",
  GroupsC: "Ryhmät:",
  Hide: "Piilota",
  Home: "Koti",
  Idea: "Idea",
  Join: "Liity",
  KbdShrtcsC: "Näppäimistöoikotiet: ",
  Loading: "Ladataan...",
  LoadMore: "Lataa lisää ...",
  LogIn: "Kirjaudu sisään",
  LoggedInAs: "Kirjautuneena käyttäjänä ",
  LogOut: "Kirjaudu ulos",
  Maybe: "Ehkä",
  Manage: "Hallinnoi",
  Members: "Jäsenet",
  MessageN: "Viesti",
  MoreDots: "Lisää...",
  Move: "Siirrä",
  Name: "Nimi",
  NameC: "Nimi:",
  NewTopic: "Uusi aihe",
  NoCancel: "Ei, peruuta",
  Notifications: "Ilmoitukset",
  NotImplemented: "(Ei toteutettu)",
  NotYet: "Ei vielä",
  NoTitle: "Ei otsikkoa",
  NoTopics: "Ei aiheita.",
  Okay: "Selvä",
  OkayDots: "Selvä ...",
  Online: "Paikalla",
  onePerLine: "yksi per rivi",
  PreviewV: "Esikatsele",
  Problem: "Ongelma",
  progressN: "edistyminen",
  Question: "Kysymys",
  Recent: "Tuoreimmat",
  Remove: "Poista",
  Reopen: "Avaa uudelleen",
  ReplyV: "Vastaa",
  Replying: "Vastataan",
  Replies: "Vastaukset",
  replies: "vastausta",
  Save: "Tallenna",
  SavingDots: "Tallennetaan ...",
  SavedDot: "Tallennettu.",
  Search: "Hae",
  SendMsg: "Lähetä viesti",
  ShowPreview: "Näytä esikatselu",
  SignUp: "Liity",
  Solution: "Ratkaisu",
  started: "aloitettu",
  Summary: "Yhteenveto",
  Submit: "Lähetä",
  Tag: "Avainsana",
  Tags: "Avainsanat",
  Tools: "Työkalut",
  Topics: "Aiheet",
  TopicTitle: "Aiheen otsikko",
  TopicType: "Aiheen tyyppi",
  UploadingDots: "Ladataan palvelimelle...",
  Username: "Käyttäjätunnus",
  Users: "Käyttäjät",
  Welcome: "Tervetuloa",
  Wiki: "Wiki",
  Yes: "Kyllä",
  YesBye: "Kyllä, hei hei",
  YesDoThat: "Kyllä, tee niin",
  You: "Sinä",
  you: "sinä",

  // Trust levels.
  Guest:  "Vieras",
  NewMember: "Uusi jäsen",
  BasicMember: "Perusjäsen",
  FullMember: "Täysjäsen",
  TrustedMember: "Luotettu jäsen",
  RegularMember: "Luotettu vakiojäsen",
  CoreMember: "Ydinjäsen",

  // Periods.
  PastDay: "Viimeisin vuorokausi",
  PastWeek: "Viimeisin viikko",
  PastMonth: "Viimeisin kuukausi",
  PastQuarter: "Viimeisin neljännesvuosi",
  PastYear: "Viimeisin vuosi",
  AllTime: "Kaikki",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "kk",  // months
  daysLtr: "pv",      // days
  hoursLtr: "t",     // hours
  minsLtr: "min",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 päivä sitten" : `${numDays} päivää sitten`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 tunti sitten" : `${numHours} tuntia sitten`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minuutti sitten" : `${numMins} minuuttia sitten`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 sekunti sitten" : `${numSecs} sekuntia sitten`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Sähköposti vaaditaan",
    NoSpcs: "Ei välilyöntejä, kiitos",
    InvldAddr: "Epäkelpo sähköpostiosoite",
    NoBadChrs: "Ei erikoismerkkejä, kiitos",

    // Full name input field:
    NotOnlSpcs: "Ei pelkkiä välilyöntejä, kiitos",
    NoAt: "Ei @-merkkiä, kiitos",

    // Username input field:
    NoDash: "Ei ajatusviivoja (-), kiitos",
    DontInclAt: "Älä sisällytä @-merkkiä",
    StartEndLtrDgt: "Aloita ja lopeta kirjaimella tai numerolla",
    OnlLtrNumEtc: "Vain kirjaimia (a-z, A-Z), numeroita ja alaviivoja (_)",
    // This shown just below the username input:
    UnUnqShrt_1: "Sinun ",
    UnUnqShrt_2: "@käyttäjätunnuksesi",
    UnUnqShrt_3: ", uniikki ja lyhyt",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Pituuden on oltava vähintään ${minLength} merkkiä`,
    TooLong: (maxLength: number) => `Liian pitkä. Pituuden on oltava enintään ${maxLength} merkkiä`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Jokainen viesti",
    EveryPostInTopic: "Saat ilmoituksen kaikista uusista vastauksista tässä aiheessa.",
    EveryPostInCat: "Saat ilmoituksen kaikista uusista aiheista ja vastauksista tässä kategoriassa.",
    EveryPostInTopicsWithTag: "Saat ilmoituksen uusista aiheista tällä avainsanalla ja kaikista vastauksista niissä.",
    EveryPostWholeSite: "Saat ilmoituksen kaikista uusista aiheista ja vastauksista kaikkialla.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Uudet aiheet",
    NewTopicsInCat: "Saat ilmoituksen uusista aiheista tässä kategoriassa.",
    NewTopicsWithTag: "Saat ilmoituksen uusista aiheista tällä avainsanalla.",
    NewTopicsWholeSite: "Saat ilmoituksen uusista aiheista kaikkialla.",

    Tracking: "Seurataan",

    Normal: "Normaali",
    NormalDescr: "Saat ilmoituksen, jos joku puhuu sinulle, myös epäsuorasti, esim. " +
        "vastaus vastaukseesi.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Hiljainen",
    HushedDescr: "Saat ilmoituksen vain, jos joku puhuu suoraan sinulle.",

    Muted: "Mykistetty",
    MutedTopic: "Ei ilmoituksia.",
  },


  // Forum intro text

  fi: {
    Edit: "Muokkaa",
    Hide_1: "Piilota",
    Hide_2: ", klikkaa ",
    Hide_3: " avataksesi uudelleen",
  },


  // Forum categories

  fcs: {
    All: "Kaikki", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Aihelista",

    // Select category dropdown

    from: "kategoriasta",
    in: "kategoriassa",
    AllCats: "Kaikki kategoriat",

    // Topic sort order

    Active: "Aktiiviset ensin",
    ActiveDescr: "Näyttää viimeksi aktiiviset aiheet ensin",

    New: "Uudet",
    NewDescr: "Näyttää uusimmat aiheet ensin",

    Top: "Suositut",
    TopDescr: "Näyttää suositut aiheet ensin",

    // Topic filter dropdown

    AllTopics: "Kaikki aiheet",

    ShowAllTopics: "Näytä kaikki aiheet",
    ShowAllTopicsDescr: "Ei kuitenkaan poistettuja aiheita",

    WaitingTopics: "Odottavat aiheet",
    OnlyWaitingDescr_1: "Näyttää vain aiheet ",
    OnlyWaitingDescr_2: "jotka odottavat ",
    OnlyWaitingDescr_3: "ratkaisua tai toteutusta",

    YourTopics: "Sinun aiheesi",
    AssignedToYou: "Sinulle osoitetut",

    DeletedTopics: "Näytä poistetut",
    ShowDeleted: "Näytä poistetut",
    ShowDeletedDescr: "Näyttää kaikki aiheet, mukaan lukien poistetut",

    // Rightmost buttons

    ViewCategories: "Näytä kategoriat",
    EditCat: "Muokkaa kategoriaa",
    CreateCat: "Luo kategoria",
    CreateTopic: "Luo aihe",
    PostIdea: "Lähetä idea",
    AskQuestion: "Kysy kysymys",
    ReportProblem: "Ilmoita ongelmasta",
    CreateMindMap: "Luo miellekartta",
    CreatePage: "Luo sivu",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Kuvakkeiden selitykset...",
    IconExplanation: "Kuvakkeiden selitykset:",
    ExplGenDisc: "Yleinen keskustelu.",
    ExplQuestion: "Kysymys, jolla ei ole hyväksyttyä vastausta.",
    ExplAnswer: "Kysymys, jolla on hyväksytty vastaus.",
    ExplIdea: "Idea / ehdotus.",
    ExplProblem: "Ongelma.",
    ExplPlanned: "Jotain, mitä aiomme tehdä tai korjata.",
    ExplDone: "Jotain, mikä on tehty tai korjattu.",
    ExplClosed: "Aihe suljettu.",
    ExplPinned: "Aihe listataan aina ensimmäisenä (mahdollisesti vain omassa kategoriassaan).",

    PopularTopicsComma: "Suositut aiheet, ",
    TopFirstAllTime: "Näyttää suosituimmat aiheet ensin (kaikki ajat).",
    TopFirstPastDay: "Näyttää viimeisimmän vuorokauden suositut aiheet.",

    CatHasBeenDeleted: "Tämä kategoria on poistettu",

    TopicsActiveFirst: "Aiheet, viimeksi aktiiviset ensin",
    TopicsNewestFirst: "Aiheet, uusimmat ensin",

    CreatedOn: "Luotu: ",
    LastReplyOn: "\nViimeisin vastaus: ",
    EditedOn: "\nMuokattu: ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "loi aiheen",
    frequentPoster: "aktiivinen kirjoittaja",
    mostRecentPoster: "viimeisin kirjoittaja",

    inC: "kategoriassa: ",

    TitleFixed: "Tämä on korjattu",
    TitleDone: "Tämä on tehty",
    TitleStarted: "Olemme aloittaneet tämän",
    TitleStartedFixing: "Olemme aloittaneet tämän korjaamisen",
    TitleUnsolved: "Tämä on ratkaisematon ongelma",
    TitleIdea: "Tämä on idea",
    TitlePlanningFix: "Aiomme korjata tämän",
    TitlePlanningDo: "Aiomme tehdä tämän",
    TitleChat: "Tämä on chat-kanava",
    TitlePrivateChat: "Tämä on yksityinen chat-kanava",
    TitlePrivateMessage: "Yksityisviesti",
    TitleInfoPage: "Tämä on tietosivu",
    TitleDiscussion: "Keskustelu",
    IsPinnedGlobally: "\nTämä on kiinnitetty, joten se listataan ensimmäisenä.",
    IsPinnedInCat: "\nTämä on kiinnitetty kategoriaansa, joten se listataan ensimmäisenä kategoriassaan.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Viimeisimmät aiheet (odottavat)",
    RecentTopicsInclDel: "Viimeisimmät aiheet (mukaan lukien poistetut)",
    RecentTopics: "Viimeisimmät aiheet",
    _replies: " vastausta",
    _deleted: " (poistettu)",
    _defCat: " (oletuskategoria)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Viimeisimmät viestit",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " paikalla tässä chatissa",    // example: "5 online in this chat"
    NumOnlForum: " paikalla tässä foorumissa",

    // Open left-sidebar button title.
    WatchbBtn: "Sinun aiheesi",  // REMOVE

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Viimeisimmät aiheesi, liitytyt chatit, yksityisviestit",

    // Title shown on user profile pages.
    AbtUsr: "Tietoa käyttäjästä",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Takaisin profiilista",
    BackFromAdm: "Takaisin ylläpitoalueelta",

    // Title shown on full text search page.
    SearchPg: "Hakusivu",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Lisää ...",
    RecentlyViewed: "Viimeksi katsotut aiheet",
    JoinedChats: "Liitytyt chatit",
    ChatChannels: "Chat-kanavat",
    CreateChat: "Luo chat-kanava",
    DirectMsgs: "Yksityisviestit",
    NoChats: "Ei mitään",    // meaning: "No chat messages"
    NoDirMsgs: "Ei mitään",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Aiheen toiminnot",
    ViewPeopleHere: "Näytä täällä olevat ihmiset",
    ViewAddRemoveMembers: "Näytä / lisää / poista jäseniä",
    ViewChatMembers: "Näytä chatin jäsenet",
    EditChat: "Muokkaa chatin kuvausta",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Poistu tästä chatista",
    LeaveThisCommunity: "Poistu tästä yhteisöstä",
    JoinThisCommunity: "Liity tähän yhteisöön",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Viimeisimmät kommentit tässä aiheessa:",
    NoComments: "Ei kommentteja.",

    YourBookmarks: "Kirjanmerkkisi:",

    UsersOnline: "Paikalla olevat käyttäjät:",
    UsersOnlineForum: "Paikalla foorumissa:",
    UsersInThisChat: "Tässä chatissa:",
    UsersInThisTopic: "Tässä aiheessa:",

    GettingStartedGuide: "Ylläpitäjän opas",
    AdminGuide: "Ylläpitäjän opas",
    Guide: "Opas",

    // How to hide the sidebar.
    CloseShortcutS: "Sulje (pikanäppäin: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Lisää ihmisiä",

    // Shown next to one's own username, in a list of users.
    thatsYou: "sinä",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Vain sinä, näyttää siltä",
    YouAnd: "Sinä ja ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " henkilö" : " henkilöä";
      const have = numStrangers === 1 ? "ei ole" : "eivät ole";
      return numStrangers + people + ", joka " + have + " kirjautunut sisään";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    // MISSING "are sorted by" —> "might be"
    RepliesToTheLeft: "Vastaukset vasemmalla saattavat olla järjestetty ",
    bestFirst: "parhaat ensin.",
    ButBelow: "Mutta alla ",
    insteadBy: " samat vastaukset ovat sen sijaan järjestetty ",
    newestFirst: "uusimmat ensin.",

    SoIfLeave: "Joten jos poistut ja palaat myöhemmin, löydät alta ",
    allNewReplies: "kaikki uudet vastaukset.",
    Click: "Klikkaa",
    aReplyToReadIt: " vastausta lukeaksesi sen — alla näytetään vain ote.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Klikkaa muuttaaksesi tilaa",
    ClickToViewAnswer: "Klikkaa nähdäksesi vastauksen",
    ViewAnswer: "Näytä vastaus",
    ChangeStatusC: "Muuta tilaksi:",
    ChangeCatC: "Muuta kategoriaa:",
    ChangeTopicTypeC: "Muuta aiheen tyyppiä:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "kysymys",
    hasAccptAns: "on hyväksytty vastaus",
    aProblem: "ongelma",
    planToFix: "suunnitelma korjata",
    anIdea: "idea",
    planToDo: "suunnitelma toteuttaa",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Tämä lomake on ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "suljettu; et voi enää täyttää ja lähettää sitä.",

    ThisTopicClosed_1: "Tämä aihe on ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Voit silti lähettää kommentteja.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Tämä sivu on poistettu",
    CatDeldPageToo: "Kategoria poistettu, joten tämä sivu poistettiin myös",

    ThreadDeld: "Ketju poistettu",
    CmntDeld: "Kommentti poistettu",
    PostDeld: "Viesti poistettu",
    DiscDeld: "Keskustelu poistettu",
    PageDeld: "Sivu poistettu",
    PagePendAppr: "Sivu odottaa hyväksyntää",
    TitlePendAppr: "Otsikko odottaa hyväksyntää",
    TextPendingApproval: "Teksti odottaa hyväksyntää",

    TooltipQuestClosedNoAnsw: "Tämä kysymys on suljettu ilman hyväksyttyä vastausta.",
    TooltipTopicClosed: "Tämä aihe on suljettu.",

    TooltipQuestSolved: "Tämä on ratkaistu kysymys",
    TooltipQuestUnsolved: "Tämä on ratkaisematon kysymys",

    StatusDone: "Valmis",
    TooltipProblFixed: "Tämä on korjattu",
    TooltipDone: "Tämä on tehty",

    StatusStarted: "Aloitettu",
    TooltipFixing: "Olemme aloittaneet tämän korjaamisen",
    TooltipImplementing: "Olemme aloittaneet tämän toteuttamisen",

    StatusPlanned: "Suunniteltu",
    TooltipProblPlanned: "Aiomme korjata tämän",
    TooltipIdeaPlanned: "Aiomme toteuttaa tämän",

    StatusNew: "Uusi",
    StatusNewDtl: "Uusi aihe, keskusteltavana",
    TooltipUnsProbl: "Tämä on ratkaisematon ongelma",
    TooltipIdea: "Tämä on idea",

    TooltipPersMsg: "Yksityisviesti",
    TooltipChat: "# tarkoittaa chat-kanavaa",
    TooltipPrivChat: "Tämä on yksityinen chat-kanava",

    TooltipPinnedGlob: "\nKiinnitetty globaalisti.",
    TooltipPinnedCat: "\nKiinnitetty tähän kategoriaan.",

    SolvedClickView_1: "Ratkaistu viestissä #",
    SolvedClickView_2: ", klikkaa nähdäksesi",

    PostHiddenClickShow: "Viesti piilotettu; klikkaa näyttääksesi",
    ClickSeeMoreRepls: "Näytä lisää vastauksia",
    ClickSeeMoreComments: "Näytä lisää kommentteja",
    ClickSeeThisComment: "Klikkaa näyttääksesi tämä kommentti",
    clickToShow: "näytä klikkaamalla",

    ManyDisagree: "Monet ovat eri mieltä tästä:",
    SomeDisagree: "Jotkut ovat eri mieltä tästä:",

    PendAppr: "Odottaa hyväksyntää",
    CmtPendAppr: "Kommentti odottaa hyväksyntää, lähetetty ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Sinun" : "") + " alla oleva kommenttisi odottaa hyväksyntää.",

    _and: " ja",

    repliesTo: "vastaukset käyttäjälle",
    InReplyTo: "Vastauksena viestiin",
    YourReplyTo: "Vastauksesi käyttäjälle ",
    YourChatMsg: "Chat-viestisi: ",
    YourDraft: "Luonnoksesi",
    YourEdits: "Muokkauksesi: ",
    YourProgrNoteC: "Edistymisviestisi:",
    aProgrNote: "edistymisviesti: ",

    ReplyingToC: "Vastataan käyttäjälle:",
    ScrollToPrevw_1: "Vieritä ",
    ScrollToPrevw_2: "esikatseluun",

    UnfinEdits: "Keskeneräiset muokkaukset",
    ResumeEdting: "Jatka muokkaamista",
    DelDraft: "Poista luonnos",

    ClickViewEdits: "Klikkaa nähdäksesi vanhat muokkaukset",

    By: "Kirjoittaja: ", // ... someones name

    // Discussion ...
    aboutThisIdea: "siitä, miten ja pitäisikö tämä idea toteuttaa",
    aboutThisProbl: "siitä, miten ja pitäisikö tämä korjata",

    AddProgrNote: "Lisää edistymisviesti",
    // Progress ...
    withThisIdea: "tämän idean toteuttamisessa",
    withThisProbl: "tämän ongelman käsittelyssä",
    withThis: "tämän tekemisessä",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Ilmoitukset tästä aiheesta:",

    // If is a direct message topic, members listed below this text.
    Msg: "Viesti",

    SmrzRepls: "Tiivistä vastaukset",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Vastauksia on ${numReplies}. Arvioitu lukuaika: ${minutes} minuuttia`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Valmis. Tiivistetty ${numSummarized} vastausta ${numShownBefore} aiemmin näytetystä vastauksesta.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Sulje aihe",
    CloseOwnQuestionTooltip: "Sulje tämä kysymys, jos et tarvitse enää vastausta.",
    CloseOthersQuestionTooltip: "Sulje tämä kysymys, jos se ei kaipaa vastausta, esim. jos " +
        "se ei kuulu aiheeseen tai siihen on jo vastattu toisessa aiheessa.",
    CloseToDoTooltip: "Sulje tämä tehtävä, jos sitä ei tarvitse tehdä tai korjata.",
    CloseTopicTooltip: "Sulje tämä aihe, jos se ei vaadi enempää huomiota.",

    AcceptBtnExpl: "Hyväksy tämä vastaukseksi kysymykseen tai ongelmaan",
    SolutionQ: "Ratkaisu?",
    ClickUnaccept: "Klikkaa peruaksesi tämän vastauksen hyväksynnän",
    PostAccepted: "Tämä viesti on hyväksytty vastaukseksi",

    NumLikes: (num: number) => num === 1 ? "1 tykkäys" : num + " tykkäystä",
    NumDisagree: (num: number) => num + " eri mieltä",
    NumBury: (num: number) => num === 1 ? "1 hautaaminen" : num + " hautaamista",
    NumUnwanted: (num: number) => num === 1 ? "1 epätoivottu" : num + " epätoivottua",

    MoreVotes: "Lisää ääniä...",
    LikeThis: "Tykkää tästä",
    LinkToPost: "Linkki tähän viestiin",
    Report: "Raportoi",
    ReportThisPost: "Raportoi tämä viesti",
    Admin: "Ylläpitäjä",
    DiscIx: "Keskusteluindeksi",

    Disagree: "Eri mieltä",
    DisagreeExpl: "Klikkaa tästä, jos olet eri mieltä tämän viestin kanssa tai haluat varoittaa muita asiavirheistä.",
    Bury: "Hautaa",
    BuryExpl: "Klikkaa järjestääksesi muut viestit tämän edelle. Vain ylläpito näkee äänesi.",
    Unwanted: "Epätoivottu",
    UnwantedExpl: "Jos et halua tätä viestiä tälle sivustolle. Tämä vähentää luottamustani " +
            "viestin kirjoittajaan. Vain ylläpito näkee äänesi.",

    AddTags: "Lisää/poista avainsanoja",
    UnWikify: "Poista Wiki-tila",
    Wikify: "Muuta Wikiksi",
    PinDeleteEtc: "Kiinnitä / Poista / Kategoria ...",
  },


  // Share dialog

  sd: {
    Copied: "Kopioitu.",
    CtrlCToCopy: "Paina CTRL+C kopioidaksesi.",
    ClickToCopy: "Klikkaa kopioidaksesi linkin.",
  },


  // Chat

  c: {
    About_1: "Tämä on ",
    About_2: " chat-kanava, luonut ",
    ScrollUpViewComments: "Vieritä ylös nähdäksesi vanhemmat kommentit",
    Purpose: "Tarkoitus:",
    MessageDeleted: "(Viesti poistettu)",
    JoinThisChat: "Liity tähän chattiin",
    PostMessage: "Lähetä viesti",
    AdvancedEditor: "Edistynyt muokkain",
    TypeTitle: "Kirjoita otsikko — mistä tässä chatissa on kyse parilla sanalla?",
    TypePurpose: "Kirjoita tarkoitus — voi olla pidempi ja kuvaavampi kuin otsikko.",
    TypeHere: "Kirjoita tähän. Voit käyttää Markdownia ja HTML:ää.",
  },


  // My Menu

  mm: {
    NeedsReview: "Kaipaa tarkistusta ",
    AdminHelp: "Ylläpitoapu ",
    StaffHelp: "Henkilökunta-apu ",
    DraftsEtc: "Luonnokset, kirjanmerkit, tehtävät",
    MoreNotfs: "Näytä kaikki ilmoitukset",
    DismNotfs: "Merkitse kaikki luetuiksi",
    ViewProfile: "Näytä profiilisi",
    ViewGroups: "Näytä ryhmät",
    LogOut: "Kirjaudu ulos",
    UnhideHelp: "Näytä ohjeviestit",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Vieritä kohtaan:",
    Scroll: "Vieritä",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Takaisin (B)",
    BackExpl: "Vieritä takaisin edelliseen sijaintiisi tällä sivulla",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Sivun alkuun",
    PgTopHelp: "Siirry sivun alkuun. Pikanäppäin: 1",
    Repl: "Vastaukset",
    ReplHelp: "Siirry vastauksiin. Pikanäppäin: 2",
    Progr: "Edistyminen",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Siirry edistymis-osioon. Pikanäppäin: 3",
    PgBtm: "Sivun loppuun",
    Btm: "Loppuun",
    BtmHelp: "Siirry sivun loppuun. Pikanäppäin: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " ja ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " vierittääksesi takaisin",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Valitse käyttäjät",
    AddUsers: "Lisää käyttäjiä",
  },


  // About user dialog

  aud: {
    IsMod: "On moderaattori.",
    IsAdm: "On ylläpitäjä.",
    IsDeld: "On deaktivoitu tai poistettu.",
    ThisIsGuest: "Tämä on vieraskäyttäjä, voi olla kuka tahansa.",
    ViewInAdm: "Näytä ylläpitoalueella",
    ViewProfl: "Näytä profiili",
    ViewComments: "Näytä muut kommentit",
    RmFromTpc: "Poista aiheesta",
    EmAdrUnkn: "Sähköpostiosoite tuntematon — tätä vierasta ei ilmoiteta vastauksista.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Asetukset",
    Invites: "Kutsut",
    DraftsEtc: "Luonnokset jne",
    About: "Tietoa",
    Privacy: "Yksityisyys",
    Security: "Turvallisuus",
    Account: "Tili",
    Interface: "Käyttöliittymä",

    // ----- Overview stats

    JoinedC: "Liittynyt: ",
    PostsMadeC: "Viestejä kirjoitettu: ",
    LastPostC: "Viimeisin viesti: ",
    LastSeenC: "Viimeksi nähty: ",
    TrustLevelC: "Luottamustaso: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Lataa kuva",
    ChangePhoto: "Vaihda kuva",
    ImgTooSmall: "Kuva on liian pieni: sen pitäisi olla vähintään 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Vain henkilökunta ja luotetut ydinjäsenet näkevät tämän.",
    OnlyMbrsCanSee: "Vain ihmiset, jotka ovat olleet aktiivisia jäseniä jonkin aikaa, näkevät tämän.",
    Nothing: "Ei mitään näytettävää",
    Posts: "Viestit",
    NoPosts: "Ei viestejä.",
    Topics: "Aiheet",
    NoTopics: "Ei aiheita.",

    // ----- User status

    UserBanned: "Tämä käyttäjä on porttikiellossa",
    UserSuspended: (dateUtc: string) => `Tämä käyttäjä on jäähyllä ${dateUtc} UTC asti`,
    ReasonC: "Syy: ",

    DeactOrDeld: "On deaktivoitu tai poistettu.",
    isGroup: " (ryhmä)",
    isGuest: " — vieraskäyttäjä, voi olla kuka tahansa",
    isMod: " – moderaattori",
    isAdmin: " – ylläpitäjä",
    you: "(sinä)",

    // ----- Notifications page

    NoNotfs: "Ei ilmoituksia",
    NotfsToYouC: "Ilmoitukset sinulle:",
    NotfsToOtherC: (name: string) => `Ilmoitukset käyttäjälle ${name}:`,
    DefNotfsSiteWide: "Oletusilmoitukset koko sivustolla",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "käyttäjälle",

    // ----- Drafts Etc page

    NoDrafts: "Ei luonnoksia",
    YourDraftsC: "Luonnoksesi:",
    DraftsByC: (name: string) => `Käyttäjän ${name} luonnokset:`,

    // ----- Invites page

    InvitesIntro: "Täällä voit kutsua ihmisiä liittymään tälle sivustolle. ",
    InvitesListedBelow: "Jo lähettämäsi kutsut on listattu alla.",
    NoInvites: "Et ole vielä kutsunut ketään.",

    InvitedEmail: "Kutsuttu sähköposti",
    WhoAccepted: "Jäsen, joka hyväksyi",
    InvAccepted: "Kutsu hyväksytty",
    InvSent: "Kutsu lähetetty",
    JoinedAlready: "Liittynyt jo",

    SendAnInv: "Kutsu ihmisiä",
    SendInv: "Lähetä kutsut",
    SendInvExpl:
        "Lähetämme ystävillesi lyhyen sähköpostin. He voivat liittyä " +
        "heti klikkaamalla linkkiä, kirjautumista ei vaadita. " +
        "Heistä tulee tavallisia jäseniä, ei moderaattoreita tai ylläpitäjiä.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Valmis. Lähetän heille sähköpostin.",
    NoOneToInv: "Ei kutsuttavia.",
    InvNotfLater: "Ilmoitan sinulle myöhemmin, kun olen kutsunut heidät.",
    AlreadyInvSendAgainQ: "Nämä on jo kutsuttu — ehkä haluaisit kutsua heidät uudelleen?",
    InvErr_1: "Nämä johtivat ",
    InvErr_2: "virheisiin",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Nämä ovat jo liittyneet, joten en kutsunut heitä:",
    ResendInvsQ: "Lähetetäänkö kutsut uudelleen näille ihmisille? Heidät on jo kutsuttu aiemmin.",
    InvAgain: "Kutsu uudelleen",

    // ----- Preferences, About

    AboutYou: "Tietoa sinusta",
    WebLink: "Linkki verkkosivullesi.",

    NotShownCannotChange: "Ei näytetä julkisesti. Ei voida muuttaa.",

    // The full name or alias:
    NameOpt: "Nimi (valinnainen)",

    NotShown: "Ei näytetä julkisesti.",

    // The username:
    MayChangeFewTimes: "Voit muuttaa tätä vain muutaman kerran.",
    notSpecified: "(ei määritelty)",
    ChangeUsername_1: "Voit muuttaa käyttäjätunnuksesi vain muutaman kerran.",
    ChangeUsername_2: "Liian usein muuttaminen voi hämmentää muita — " +
        "he eivät tiedä miten @mainita sinut.",

    NotfAboutAll: "Saa ilmoitus jokaisesta uudesta viestistä (ellet mykistä aihetta tai kategoriaa)",
    NotfAboutNewTopics: "Saa ilmoitus uusista aiheista (ellet mykistä kategoriaa)",

    ActivitySummaryEmails: "Aktiivisuusyhteenveto-sähköpostit",

    EmailSummariesToGroup:
        "Kun tämän ryhmän jäsenet eivät vieraile täällä, lähetä heille oletuksena " +
        "sähköpostilla yhteenvetoja suosituista aiheista ja muusta.",
    EmailSummariesToMe:
        "Kun en vieraile täällä, lähetä minulle " +
        "sähköpostilla yhteenvetoja suosituista aiheista ja muusta.",

    AlsoIfTheyVisit: "Lähetä heille sähköpostia myös, vaikka he vierailisivat täällä säännöllisesti.",
    AlsoIfIVisit: "Lähetä minulle sähköpostia myös, vaikka vierailisin täällä säännöllisesti.",

    HowOftenWeSend: "Kuinka usein lähetämme nämä sähköpostit?",
    HowOftenYouWant: "Kuinka usein haluat nämä sähköpostit?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Piilotetaanko viimeaikainen aktiviteettisi vierailta ja uusilta jäseniltä?",
    HideActivityStrangers_2: "(Mutta ei niiltä, jotka ovat olleet aktiivisia jäseniä jo jonkin aikaa.)",
    HideActivityAll_1: "Piilotetaanko viimeaikainen aktiviteettisi kaikilta?",
    HideActivityAll_2: "(Paitsi henkilökunnalta ja luotetuilta ydinjäseniltä.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Sähköpostiosoitteet",
    PrimaryDot: "Ensisijainen. ",
    VerifiedDot: "Vahvistettu. ",
    NotVerifiedDot: "Ei vahvistettu. ",
    ForLoginWithDot: (provider: string) => `Kirjautumiseen palvelulla ${provider}. `,
    MakePrimary: "Tee ensisijaiseksi",
    AddEmail: "Lisää sähköpostiosoite",
    TypeNewEmailC: "Kirjoita uusi sähköpostiosoite:",
    MaxEmailsInfo: (numMax: number) => `(Voit lisätä enintään ${numMax} osoitetta.)`,
    EmailAdded_1: "Lisätty. Olemme lähettäneet sinulle vahvistussähköpostin — ",
    EmailAdded_2: "tarkista sähköpostisi.",
    SendVerifEmail: "Lähetä vahvistussähköposti",

    EmailStatusExpl:
        "('Ensisijainen' tarkoittaa, että voit kirjautua tällä osoitteella ja lähetämme ilmoitukset siihen. " +
        "'Vahvistettu' tarkoittaa, että klikkasit vahvistuslinkkiä sähköpostissa.)",

    // Password:
    ChangePwdQ: "Vaihda salasana?",
    CreatePwdQ: "Luo salasana?",
    WillGetPwdRstEml: "Saat salasanan palautussähköpostin.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Ei ole",

    // Logins:
    LoginMethods: "Kirjautumistavat",
    commaAs: ", käyttäjänä: ",

    // One's data:
    YourContent: "Sisältösi",
    DownloadPosts: "Lataa viestit",
    DownloadPostsHelp: "Luo JSON-tiedoston, joka sisältää kopion lähettämistäsi aiheista ja kommenteista.",
    DownloadPersData: "Lataa henkilötiedot",
    DownloadPersDataHelp: "Luo JSON-tiedoston, joka sisältää kopion henkilötiedoistasi, esim. nimesi " +
        "(jos olet määrittänyt nimen) ja sähköpostiosoitteesi.",


    // Delete account:
    DangerZone: "Vaaravyöhyke",
    DeleteAccount: "Poista tili",
    DeleteYourAccountQ:
        "Poistetaanko tilisi? Poistamme nimesi, unohdamme sähköpostiosoitteesi, salasanasi ja " +
        "kaikki verkkoidentiteettisi (kuten Facebook- tai Twitter-kirjautumisen). " +
        "Et voi kirjautua enää sisään. Tätä ei voi peruuttaa.",
    DeleteUserQ:
        "Poistetaanko tämä käyttäjä? Poistamme nimen, unohdamme sähköpostiosoitteen, salasanan ja " +
        "verkkoidentiteetit (kuten Facebook- tai Twitter-kirjautumisen). " +
        "Käyttäjä ei voi kirjautua enää sisään. Tätä ei voi peruuttaa.",
    YesDelete: "Kyllä, poista",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Ryhmän jäsenet",
    NoMembers: "Ei jäseniä.",
    MayNotListMembers: "Ei saa listata jäseniä.",
    AddMembers: "Lisää jäseniä",
    BuiltInCannotModify: "Tämä on sisäänrakennettu ryhmä; sitä ei voi muokata.",
    NumMembers: (num: number) => `${num} jäsentä`,
    YouAreMember: "Olet jäsen.",
    CustomGroupsC: "Omat ryhmät:",
    BuiltInGroupsC: "Sisäänrakennetut ryhmät:",
    DeleteGroup: "Poista tämä ryhmä",
  },


  // Create user dialog

  cud: {
    CreateUser: "Luo käyttäjä",
    CreateAccount: "Luo tili",
    EmailC: "Sähköposti:",
    keptPriv: "pysyy yksityisenä",
    forNotfsKeptPriv: "vastausilmoituksia varten, pysyy yksityisenä",
    EmailVerifBy_1: "Sähköpostisi on vahvistettu palvelulla ",
    EmailVerifBy_2: ".",
    UsernameC: "Käyttäjätunnus:",
    FullNameC: "Koko nimi:",
    optName: "valinnainen",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Tili luotu. Olet kirjautunut sisään.",
    AlmostDone:
        "Melkein valmista! Sinun täytyy vain vahvistaa sähköpostiosoitteesi. Olemme " +
        "lähettäneet sinulle sähköpostin. Klikkaa sähköpostissa olevaa linkkiä aktivoidaksesi " +
        "tilisi. Voit sulkea tämän sivun.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Ehdot ja yksityisyys",

    Accept_1: "Hyväksytkö ",
    TermsOfService: "käyttöehtomme",
    TermsOfUse: "käyttöehtomme",
    Accept_2: " ja ",
    PrivPol: "tietosuojaselosteemme",
    Accept_3_User: "?",
    Accept_3_Owner: " sivuston omistajille?",

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Kyllä, hyväksyn",
  },


  // Password input

  pwd: {
    PasswordC: "Salasana:",
    StrengthC: "Vahvuus: ",
    FairlyWeak: "Melko heikko.",
    toShort: "liian lyhyt",
    TooShort: (minLength: number) => `Liian lyhyt. Pituuden on oltava vähintään ${minLength} merkkiä`,
    PlzInclDigit: "Sisällytä numero tai erikoismerkki",
    TooWeak123abc: "Liian heikko. Älä käytä salasanoja kuten '12345' tai 'abcde'.",
    AvoidInclC: "Vältä sisällyttämästä nimeäsi tai sähköpostiasi (tai niiden osia) salasanaan:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Sivua ei löytynyt tai pääsy estetty.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Toimit toisena käyttäjänä, jolla ei välttämättä ole pääsyä kaikkiin sivuston osiin.",

    IfYouThinkExistsThen: "Jos uskot sivun olevan olemassa, kirjaudu sisään käyttäjänä, jolla on pääsy sille. ",
    LoggedInAlready: "(Olet jo kirjautunut sisään, mutta ehkä väärällä tilillä?) ",
    ElseGoToHome_1: "Muussa tapauksessa voit ",
    ElseGoToHome_2: "siirtyä etusivulle.",

    CreateAcconut: "Luo tili",
    ContinueWithDots: "Jatka palvelulla ...",
    SignUp: "Liity",
    LogIn: "Kirjaudu sisään",
    LogInWithPwd: "Kirjaudu sisään salasanalla",
    CreateAdmAcct: "Luo ylläpitotili:",
    AuthRequired: "Tämä sivusto vaatii kirjautumisen",
    LogInToLike: "Kirjaudu sisään tykätäksesi tästä viestistä",
    LogInToSubmit: "Kirjaudu sisään ja lähetä",
    LogInToComment: "Kirjaudu sisään kirjoittaaksesi kommentin",
    LogInToCreateTopic: "Kirjaudu sisään luodaksesi aiheen",

    //AlreadyHaveAcctQ: "You have an account? ",  // MISSING changed "Already have...?" to "You have...?"
    OrLogIn_1: "Tai ",
    OrLogIn_2: "Kirjaudu sisään",
    OrLogIn_3: "",

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Tai ",
    SignUpInstead_2: "Luo tili",
    SignUpInstead_3: "",

    OrTypeName_1: ", tai vain ",
    OrTypeName_2: "kirjoita nimi",
    OrTypeName_3: "",

    OrCreateAcctHere: "Tai luo tili:",
    OrTypeName: "Tai kirjoita nimesi:",
    OrLogIn: "Tai kirjaudu sisään:",
    YourNameQ: "Nimesi?",

    BadCreds: "Väärä käyttäjätunnus tai salasana",

    UsernameOrEmailC: "Käyttäjätunnus tai sähköposti:",
    PasswordC: "Salasana:",
    ForgotPwd: "Unohditko salasanasi?",

    NoPwd: "Et ole vielä valinnut salasanaa.",
    CreatePwd: "Luo salasana",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Kerro meille, mikä huolestuttaa sinua.",
    ThanksHaveReported: "Kiitos. Olet raportoinut tämän. Ylläpito tarkistaa asian.",
    ReportComment: "Raportoi kommentti",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Tämä viesti sisältää henkilötietoja, esimerkiksi jonkun oikean nimen.",
    OptOffensive: "Tämä viesti sisältää loukkaavaa tai herjaavaa sisältöä.",
    OptSpam: "Tämä viesti on epätoivottu mainos.",
    OptOther: "Ilmoita ylläpidolle tästä viestistä jostain muusta syystä.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Voit näyttää ohjeviestit uudelleen, jos olet kirjautunut sisään, klikkaamalla nimeäsi ja sitten ",
    YouCanShowAgain_2: "Näytä ohjeviestit",
  },


  // Editor

  e: {
    SimilarTopicsC: "Samanlaisia aiheita:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Anteeksi, mutta tällä hetkellä voit ladata vain yhden tiedoston kerrallaan",
    PleaseFinishPost: "Viimeistele ensin viestisi kirjoittaminen",
    PleaseFinishChatMsg: "Viimeistele ensin chat-viestisi kirjoittaminen",
    PleaseFinishMsg: "Viimeistele ensin viestisi kirjoittaminen",
    PleaseSaveEdits: "Tallenna ensin nykyiset muokkauksesi",
    PleaseSaveOrCancel: "Tallenna tai peruuta ensin uusi aiheesi",
    CanContinueEditing: "Voit jatkaa tekstisi muokkaamista, if you open the editor again.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Älä poista kaikkea tekstiä. Kirjoita jotain.",
    PleaseWriteSth: "Kirjoita jotain.",
    PleaseWriteTitle: "Kirjoita aiheen otsikko.",
    PleaseWriteMsgTitle: "Kirjoita viestin otsikko.",
    PleaseWriteMsg: "Kirjoita viesti.",

    exBold: "lihavoitu teksti",
    exEmph: "kursivoitu teksti",
    exPre: "valmiiksi muotoiltu teksti",
    exQuoted: "lainattu teksti",
    ExHeading: "Otsikko",

    TitlePlaceholder: "Kirjoita otsikko — mistä tässä on kyse yhdellä lyhyellä lauseella?",

    EditPost_1: "Muokkaa ",
    EditPost_2: "viestiä ",

    TypeChatMsg: "Kirjoita chat-viesti:",
    YourMsg: "Viestisi:",
    CreateTopic: "Luo uusi aihe",
    CreateCustomHtml: "Luo oma HTML-sivu (lisää oma <h1>-otsikkosi)",
    CreateInfoPage: "Luo tietosivu",
    CreateCode: "Luo lähdekoodisivu",
    AskQuestion: "Kysy kysymys",
    ReportProblem: "Ilmoita ongelmasta",
    SuggestIdea: "Ehdotuta ideaa",
    NewChat: "Chatin otsikko ja tarkoitus",
    NewPrivChat: "Yksityisen chatin otsikko ja tarkoitus",
    AppendComment: "Lisää kommentti sivun loppuun:",

    ReplyTo: "Vastaa käyttäjälle ",
    ReplyTo_theOrigPost: "alkuperäiseen viestiin",
    ReplyTo_post: "viestiin ",
    AddCommentC: "Lisää kommentti:",

    PleaseSelectPosts: "Valitse yksi tai useampi viesti, joihin vastata.",

    Save: "Tallenna",
    edits: "muokkaukset",

    PostReply: "Lähetä vastaus",
    PostComment: "Lähetä kommentti",

    Post: "Lähetä",
    comment: "kommentti",
    question: "kysymys",

    PostMessage: "Lähetä viesti",
    SimpleEditor: "Yksinkertainen muokkain",

    Send: "Lähetä",
    message: "viesti",

    Create: "Luo",
    page: "sivu",
    chat: "chat",
    idea: "idea",
    topic: "aihe",

    Submit: "Lähetä",
    problem: "ongelma",

    ViewOldEdits: "Näytä vanhat muokkaukset",

    UploadBtnTooltip: "Lataa tiedosto tai kuva",
    BoldBtnTooltip: "Lihavoi teksti",
    EmBtnTooltip: "Kursivoi",
    QuoteBtnTooltip: "Lainaa",
    PreBtnTooltip: "Valmiiksi muotoiltu teksti",
    HeadingBtnTooltip: "Otsikko",

    TypeHerePlaceholder: "Kirjoita tähän. Voit käyttää Markdownia ja HTML:ää. Vedä ja pudota liittääksesi kuvia.",

    Maximize: "Suurenna",
    ToNormal: "Takaisin normaaliksi",
    TileHorizontally: "Järjestä vierekkäin",

    PreviewC: "Esikatselu:",
    TitleExcl: " (ilman otsikkoa)",
    ShowEditorAgain: "Näytä muokkain uudelleen",
    Minimize: "Pienennä",

    PreviewInfo: "Tässä voit esikatsella, miltä viestisi näyttää.",
    CannotType: "Et voi kirjoittaa tähän.",

    LoadingDraftDots: "Ladataan mahdollista luonnosta...",
    DraftUnchanged: "Ei muutoksia.",
    CannotSaveDraftC: "Luonnosta ei voitu tallentaa:",
    DraftSavedBrwsr: "Luonnos tallennettu selaimeen.",
    DraftSaved: (nr: string | number) => `Luonnos ${nr} tallennettu.`,
    DraftDeleted: (nr: string | number) => `Luonnos ${nr} poistettu.`,
    WillSaveDraft: (nr: string | number) => `Tallennetaan luonnos ${nr} ...`,
    SavingDraft: (nr: string | number) => `Tallennetaan luonnosta ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Poistetaan luonnosta ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Valitse kategoria",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Valitse aiheen tyyppi:",
    DiscussionExpl: "Keskustelu jostakin.",
    QuestionExpl: "Yksi vastaus voidaan merkitä hyväksytyksi vastaukseksi.",
    ProblExpl: "Jos jokin on rikki tai ei toimi. Voidaan merkitä korjatuksi/ratkaistuksi.",
    IdeaExpl: "Ehdotus. Voidaan merkitä tehdyksi/toteutetuksi.",
    ChatExpl: "Mahdollisesti päättymätön keskustelu.",
    PrivChatExpl: "Näkyy vain ihmisille, jotka kutsutaan mukaan chattiin.",

    CustomHtml: "Oma HTML-sivu",
    InfoPage: "Tietosivu",
    Code: "Koodi",
    EmbCmts: "Upotetut kommentit",
    About: "Tietoa",
    PrivChat: "Yksityinen chat",
    Form: "Lomake",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Ei enää yhteisöjä, joihin liittyä.",
    SelCmty: "Valitse yhteisö ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Hae apua",
    TxtToFind: "Haettava teksti",
  },


  // No internet

  ni: {
    NoInet: "Ei internetyhteyttä",
    PlzRefr: "Päivitä sivu nähdäksesi viimeisimmät muutokset. (Yhteys katkesi)",
    RefrNow: "Päivitä nyt",
  },


  PostDeleted: (postNr: number) => `Viesti numero ${postNr} on poistettu.`,
  NoSuchPost: (postNr: number) => `Sivulla ei ole viestiä numero ${postNr}.`,
  NoPageHere: "Tämä sivu on poistettu, sitä ei ole koskaan ollut olemassa tai sinulla ei ole pääsyä sille.",
  GoBackToLastPage: "Palaa edelliselle sivulle",

};
