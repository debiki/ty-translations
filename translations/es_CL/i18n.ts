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

var t_es_CL: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Activo",
  Activity: "Actividad",
  Add: "Agregar",
  AddingDots: "Agregando ...",
  AddComment: "Agregar comentario",  // MISSING, & dupl t.e.AddCommentC
  Admin: "Admin",
  AdvSearch: "Busqueda Avanzada",
  Away: "Alejado",
  Back: "De vuelta",
  BlogN: "Blog",
  Bookmarks: "Favoritos",
  Cancel: "Cancelar",
  Categories: "Categorias",
  Category: "Categoría",
  ChangeV: "Cambiar",
  ClickToShow: "Clic para mostrar",
  ChangeDots: "Cambiar ...",
  ChatN: "Chat",
  Chatting: "Chateando",
  CheckYourEmail: "Revisa tu correo electrónico",
  Close: "Cerrar",
  closed: "cerrado",
  comments: "comentarios",   // as in:  "123 comments"
  Continue: "Continuar",
  Created: "Creado",
  Delete: "Borrar",
  Deleted: "Borrado",
  DirectMessage: "Mensaje directo",
  Discussion: "Conversación",
  discussion: "conversación",
  done: "hecho",
  EditV: "Editar",
  Editing: "Editando",
  EmailC: "Correo-e: ",   // MISSING  copy t.cud.EmailC to here
  EmailAddress: "Dirección de correo electrónico",
  EmailAddresses: "Direcciones de correo electrónico",
  EmailSentD: "Correo enviado",
  Forum: "Foro",
  GetNotifiedAbout: "Recibir notificaciones sobre",
  GroupsC: "Grupos:",
  Hide: "Ocultar",
  Home: "Página principal",
  Idea: "Idea",
  Join: "Unirse",
  KbdShrtcsC: "Atajos del teclado: ",
  Loading: "Cargando...",
  LoadMore: "Cargar más ...",
  LogIn: "Entrar",
  LoggedInAs: "Registrado como ",
  LogOut: "Salir",
  Maybe: "Quizás",
  Manage: "Manejar",
  Members: "Miembros",
  MessageN: "Mensaje",
  MoreDots: "Más...",
  Move: "Mover",
  Name: "Nombre",
  NameC: "Nombre:",
  NewTopic: "Nueva conversación:",
  NoCancel: "No, cancelar",
  Notifications: "Notificaciones",
  NotImplemented: "(No implementado)",
  NotYet: "Aún no",
  NoTitle: "Sin título",
  NoTopics: "No hay conversaciones.",
  Okay: "Ok",
  OkayDots: "Ok ...",
  Online: "En línea",
  onePerLine: "uno por línea",
  PreviewV: "Vista previa",
  Problem: "Problema",
  progressN: "progreso",
  Question: "Pregunta",
  Recent: "Reciente",
  Remove: "Eliminar",
  Reopen: "Reabrir",
  ReplyV: "Responder",
  Replying: "Respondiendo",
  Replies: "Respuestas",
  replies: "respuestas",
  Save: "Guardar",
  SavingDots: "Guardando ...",
  SavedDot: "Guardado.",
  Search: "Buscar",
  SendMsg: "Enviar mensaje",
  ShowPreview: "Mostrar vista previa",  // MISSING
  SignUp: "Registrarse",
  Solution: "Solución",
  started: "iniciado",
  Summary: "Resumen",
  Submit: "Publicar",
  Tag: "Etiqueta",  // MISSING
  Tags: "Etiquetas",  // MISSING
  Tools: "Herramientas",
  Topics: "Conversaciones",
  TopicTitle: "Título de conversación",
  TopicType: "Tipo de conversación",
  UploadingDots: "Subiendo...",
  Username: "Nombre de usuario",
  Users: "Usuarios",
  Welcome: "Bienvenido",
  Wiki: "Wiki",
  Yes: "Sí",
  YesBye: "Sí, adiós",
  YesDoThat: "Sí, haz eso",
  You: "Tú",
  you: "tú",

  // Trust levels.
  Guest:  "Invitado",
  NewMember: "Miembro nuevo",
  BasicMember: "Miembro básico",
  FullMember: "Miembro avanzado",
  TrustedMember: "Miembro de confianza",
  RegularMember: "Miembro corriente",  // MISSING renamed Regular Member —> Trusted Regular [RENREGLS]
  CoreMember: "Miembro central",

  // Periods.
  PastDay: "Ayer",
  PastWeek: "Semana pasada",
  PastMonth: "Mes pasado",
  PastQuarter: "Trimestre pasado",
  PastYear: "Año pasado",
  AllTime: "Todo el tiempo",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "meses",  // months
  daysLtr: "dias",      // days
  hoursLtr: "horas",     // hours
  minsLtr: "mins",      // minutes
  secsLtr: "segs",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "1 dias atrás" : `${numDays} days ago`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "1 horas atrás" : `${numHours} hours ago`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "1 minutos atrás" : `${numMins} minutes ago`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "1 segundos atrás" : `${numSecs} seconds ago`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "Correo-e requerido",
    NoSpcs: "Sin espacios",
    InvldAddr: "no es una dirección válida",
    NoBadChrs: "Sin caracteres especiales",

    // Full name input field:
    NotOnlSpcs: "Veo sólo espacios (mal)",
    NoAt: "Sin @",

    // Username input field:
    NoDash: "Sin guiones (-)",
    DontInclAt: "No incluya la @",
    StartEndLtrDgt: "Comience y termine con una letra o dígito",
    OnlLtrNumEtc: "Sólo letras (a-z, A-Z) y números, y _ (underscore)",
    // This shown just below the username input:
    UnUnqShrt_1: "Su ",
    UnUnqShrt_2: "@NombreDeUsuario",
    UnUnqShrt_3: ", único y corto",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Debe tener al menos ${minLength} caracteres`,
    TooLong: (maxLength: number) => `Demasiado largo. Debe tener máximo ${maxLength} caracteres`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Cada Post",
    EveryPostInTopic: "Recibirás notificación por cada respuesta nueva en esta conversación.",
    EveryPostInCat: "Recibiráss notificación por cada nueva conversación y respuesta en esta categoría.",
    EveryPostInTopicsWithTag: "Recibirás notificaciones de nuevas conversaciones con esta etiqueta, y todas las respuestas en esas conversaciones.",
    EveryPostWholeSite: "Recibirás notificaciones de todas las nuevas conversaciones y respuestas, en todo el sitio.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Nuevas conversaciones",
    NewTopicsInCat: "Serás notificado de nuevas conversaciones en esta categoría.",
    NewTopicsWithTag: "Serás notificado de nuevas conversaciones con esta etiqueta.",
    NewTopicsWholeSite: "Serás notificado de nuevas conversaciones en todo el sitio",

    Tracking: "Siguiendo",

    Normal: "Normal",
    NormalDescr: "Serás notificado si alguien te habla, también indirectamente. Ejemplo, una " +
        "respuesta a una respuesta a tí.",
    //NormalTopic_1: "Serás notificado si alguien te habla o menciona tu  ",
    //NormalTopic_2: "@nombre",

    Hushed: "Reducido",
    HushedDescr: "Serás notificado sólo si alguien te habla directamente.",

    Muted: "Silenciado",
    MutedTopic: "Sin notificaciones.",   // MISSING removed "about this topic"
  },


  // Forum intro text

  fi: {
    Edit: "Editar",
    Hide_1: "Ocultar",
    Hide_2: ", clic ",
    Hide_3: " para volver a abrir",
  },


  // Forum categories

  fcs: {
    All: "Todas", // "Todas (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Lista de conversaciones",

    // Select category dropdown

    from: "de",  // MISSING used like so:  "From <Category Name>" or "From All Categories"
    in: "en",      // MISSING used like so:  "in <Category Name>" or "in All Categories"
    AllCats: "Todas las categorias",

    // Topic sort order

    Active: "Más activas primero",      // MISSING didn't add "first" yet to transls
    ActiveDescr: "Muestra primero las conversaciones con actividad más reciente.",

    New: "Nuevas",
    NewDescr: "Muestra primero las conversaciones más nuevas",

    Top: "Popular",              // MISSING didn't rename from Top to Popular in transls
    TopDescr: "Muestra primero las conversaciones más populares",

    // Topic filter dropdown

    AllTopics: "Todas las conversaciones",

    ShowAllTopics: "Mostrar todas la conversaciones",
    ShowAllTopicsDescr: "Una lista de todas las conversaciones",

    WaitingTopics: "Conversaciones en espera",          // MISSING
    OnlyWaitingDescr_1: "Muestra sólo conversaciones ", // MISSING changed "questions" to "topics"
    OnlyWaitingDescr_2: "esperando ",
    OnlyWaitingDescr_3: "que se implemente una solución",  // MISSING rewrote

    YourTopics: "Tus conversaciones",       // MISSING
    AssignedToYou: "Asignadas a ti", // MISSING

    DeletedTopics: "Mostrar borradas",   // MISSING
    ShowDeleted: "Mostrar borradas",
    ShowDeletedDescr: "Mostrar todas las conversaciones, incluso las borradas",

    // Rightmost buttons

    ViewCategories: "Ver categorias",  // MISSING
    EditCat: "Editar categoría",
    CreateCat: "Crear Categoría",
    CreateTopic: "Crear Conversación",
    PostIdea: "Publicar una idea",
    AskQuestion: "Hacer una pregunta",
    ReportProblem: "Informar un problema",
    CreateMindMap: "Crear Mapa Mental",
    CreatePage: "Crear Página",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Explicar íconos...",
    IconExplanation: "Explicación de íconos:",
    ExplGenDisc: "Una conversación general.",
    ExplQuestion: "Una pregunta sin respuesta aceptada.",
    ExplAnswer: "Una pregunta con respuesta aceptada.",
    ExplIdea: "Una idea o sugerencia.",
    ExplProblem: "Un problema",
    ExplPlanned: "Algo que estamos planeando hacer o arreglar.",
    ExplDone: "Algo que ha sido hecho o arreglado.",
    ExplClosed: "Conversación cerrada.",
    ExplPinned: "Conversación que siempre se muestra primero (quizás sólo en su propia categoría).",

    PopularTopicsComma: "Conversaciones populares, ",
    TopFirstAllTime: "Muestra la conversación más popular, de todos los tiempos (en este sitio).",
    TopFirstPastDay: "Muestra conversaciones populares durante el día de ayer.",

    CatHasBeenDeleted: "Esta categoría ha sido eliminada",

    TopicsActiveFirst: "Conversaciones, primero la que tenga actividad mas reciente",
    TopicsNewestFirst: "Conversaciones, la mas nueva primero",

    CreatedOn: "Creada ",
    LastReplyOn: "\nÚltima respuesta ",
    EditedOn: "\nEditada ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "creó la conversación",
    frequentPoster: "participante frecuente",
    mostRecentPoster: "participante más reciente",

    inC: "in: ",

    TitleFixed: "Esto ha sido arreglado",
    TitleDone: "Esto ha sido hecho",
    TitleStarted: "Hemos comenzado esto",
    TitleStartedFixing: "Hemos comenzado a arreglar esto",
    TitleUnsolved: "Este es un problema no resuelto",
    TitleIdea: "Esta es una idea",
    TitlePlanningFix: "Planeamos arreglar esto",
    TitlePlanningDo: "Planeamos hacer esto",
    TitleChat: "Este es un canal de chat",
    TitlePrivateChat: "Este es un canal de chat privado",
    TitlePrivateMessage: "Un mensaje privado",
    TitleInfoPage: "Esta es una página de información",
    TitleDiscussion: "Una conversación",
    IsPinnedGlobally: "\nHa sido destacada, por eso está primero en la lista.",
    IsPinnedInCat: "\nHa sido destacada en esta categoriía, por eso está primero en la lista de esta categoría.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Conversaciones recientes (aquellas esperando)",
    RecentTopicsInclDel: "Conversaciones recientes (incluye borradas)",
    RecentTopics: "Conversaciones recientes",
    _replies: " respuestas",
    _deleted: " (borradas)",
    _defCat: " (categoría por defecto)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Publicaciones recientes",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " en línea en este chat",    // example: "5 online in this chat"
    NumOnlForum: " en línea en este foro",

    // Open left-sidebar button title.
    WatchbBtn: "Tus conversaciones",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Tus conversaciones recientes, chats, mensajes directos",

    // Title shown on user profile pages.
    AbtUsr: "Perfil de usuario",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Volver desde perfil de usuario",
    BackFromAdm: "Volver desde área de administración",

    // Title shown on full text search page.
    SearchPg: "Página de búsqueda",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Agregar ...",
    RecentlyViewed: "Conversaciones vistas recientemente",  // MISSING " topics"
    JoinedChats: "Chats a los que te has unido",
    ChatChannels: "Canales de chat",
    CreateChat: "Crear canal de chat",
    DirectMsgs: "Mensajes directos",
    NoChats: "Ninguno",    // meaning: "No chat messages"
    NoDirMsgs: "Ninguno",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Acciones de la conversación",
    ViewPeopleHere: "Ver gente aquí",
    ViewAddRemoveMembers: "Ver / agergar / eliminar miembros",
    ViewChatMembers: "Ver miembros del chat",
    EditChat: "Editar descripción del chat",
    //EditChat: "Editar título y propósito del chat", // Keep, in case adds back edit-title input
    LeaveThisChat: "Abandonar el chat",
    LeaveThisCommunity: "Abandonar esta comunidad",
    JoinThisCommunity: "Unirse a esta comunidad",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Comentarios recientes en esta conversación:",
    NoComments: "No hay comentarios.",

    YourBookmarks: "Tus favoritos:",

    UsersOnline: "Usuarios en línea:",
    UsersOnlineForum: "Usuarios en línea en este foro:",
    UsersInThisChat: "Usuarios en este chat:",
    UsersInThisTopic: "Usuarios en esta conversación:",

    GettingStartedGuide: "Guía del administrador", // MISSING in other langs, was: "Getting Started Guide".
    AdminGuide: "Guía del administrador",          // ... but what? It's here already, just reuse this transl field
    Guide: "Guía",

    // How to hide the sidebar.
    CloseShortcutS: "Cerrar (atajo del teclado: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Agregar más gente",

    // Shown next to one's own username, in a list of users.
    thatsYou: "Este eres tú",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Sólo tú, al parecer",
    YouAnd: "Tú y  ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " person" : " personas";
      const have = numStrangers === 1 ? "ha" : "han";
      return numStrangers + people + " que " + have + " observado sin registrarse";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    RepliesToTheLeft: "Las respuestas a la izquierda están ordenadas por ",
    bestFirst: "la-mejor-primero.",
    ButBelow: "Pero abajo ",
    insteadBy: " las mismas respuestas están ordenadas por ",
    newestFirst: "nuevas-primero.",

    SoIfLeave: "Si te vas ahora, y vuelves más tarde, abajo encontrarás ",
    allNewReplies: "todas las nuevas respuestas.",
    Click: "Clic",
    aReplyToReadIt: " en una respuesta para leerla — Porque se muestra solo un extracto, abajo.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Clic para cambiar status",
    ClickToViewAnswer: "Clic para ver respuesta",
    ViewAnswer: "Ver respuesta",
    ChangeStatusC: "Cambiar estado a:",
    ChangeCatC: "Cambiar categoría:",
    ChangeTopicTypeC: "Cambiar tipo de conversación:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "una pregunta",
    hasAccptAns: "tiene una respuesta aceptada",
    aProblem: "un problema",
    planToFix: "un plan para arreglar",
    anIdea: "una idea",
    planToDo: "un plan para realizar",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Este formulario ha sido ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "cerrado; ya no puedes llenarlo ni enviarlo.",

    ThisTopicClosed_1: "Esta conversación ha sido ",
    // A Topic-has-been-Closed icon, + the text "cerrada", shown here.
    ThisTopicClosed_2: ". Aún puedes publicar comentarios.",   // SYNC removed "won't make ... bump ..."

    ThisPageDeleted: "Esta página ha sido borrada",
    CatDeldPageToo: "Categoría borrada, por ende esta página ha sido borrada también",

    ThreadDeld: "Hilo borrado",
    CmntDeld: "Comentario Borrado",
    PostDeld: "Post borrado",
    DiscDeld: "Conversación borrada",
    PageDeld: "Página borrada",
    TitlePendAppr: "Título pendiente de ser aprobado",
    TextPendingApproval: "Texto pendiente de aprobación",

    TooltipQuestClosedNoAnsw: "Esta pregunta ha sido cerrada sin ninguna respuesta aceptada.",
    TooltipTopicClosed: "Esta conversación está cerrada.",

    TooltipQuestSolved: "Esta es una pregunta resuelta",
    TooltipQuestUnsolved: "Esta es una pregunta no resuelta",

    StatusDone: "Hecho",
    TooltipProblFixed: "Esto ha sido arreglado",
    TooltipDone: "Esto ha sido realizado",

    StatusStarted: "Iniciado",
    TooltipFixing: "Hemos comenzado a arreglar esto",      // MISSING "We're currently" —> "We've started"
    TooltipImplementing: "Hemos comenzado a realizar esto", // MISSING  -""-

    StatusPlanned: "Planeado",
    TooltipProblPlanned: "Planeamos arreglar esto",
    TooltipIdeaPlanned: "Planeamos realizar esto",   // or "to implement this"?

    StatusNew: "Nuevo",
    StatusNewDtl: "Nueva conversación, en discusión",
    TooltipUnsProbl: "Este es un problema no resuelto",
    TooltipIdea: "Esta es una idea",

    TooltipPersMsg: "Mensaje personal",
    TooltipChat: "# significa canal de chat",
    TooltipPrivChat: "Este es un canal de chat privado",

    TooltipPinnedGlob: "\nDestacada globalmente.",
    TooltipPinnedCat: "\nDestacada en esta categoría.",

    SolvedClickView_1: "Resuelto en post #",
    SolvedClickView_2: ", clic para ver",

    PostHiddenClickShow: "Publiación olculta; clic para ver",
    ClickSeeMoreRepls: "Mostrar más respuestas",      // MISSING  removed "Click to .." but only in en_US
    ClickSeeMoreComments: "Mostrar más comentarios",  // MISSING
    ClickSeeThisComment: "Clic para mostrar este comentario",
    clickToShow: "clic para mostrar",

    ManyDisagree: "Muchos están en desacuerdo con esto:",
    SomeDisagree: "Algunos están en desacuerdo con esto:",

    CmtPendAppr: "Comentario pendiente de aprobación, publicado ",
    CmtBelowPendAppr: (isYour) => (isYour ? "Tu" : "El") + " comentario de abajo está pendiente de aprobación.",

    _and: " y",

    repliesTo: "responde a",
    InReplyTo: "En respuesta a",
    YourReplyTo: "Tu respuesta a ",  // MISSING
    YourChatMsg: "Tu mensaje de chat: ",   // MISSING
    YourDraft: "Tu borrador",    // MISSING
    YourEdits: "Tus ediciones: ",   // MISSING
    YourProgrNoteC: "Tu nota de progreso:",  // MISSING
    aProgrNote: "una nota de progreso: ",   / MISSING

    ReplyingToC: "Respondiendo a:",    // MISSING
    ScrollToPrevw_1: "Ir a ",  // MISSING
    ScrollToPrevw_2: "vista previa",     // MISSING

    UnfinEdits: "Ediciones no finalizadas",  // MISSING
    ResumeEdting: "Resumir edición",  // MISSING
    DelDraft: "Borrar borrador",   // MISSING

    ClickViewEdits: "Clic para ver ediciones antiguas",

    By: "Por ", // ... someones name

    // Discussion ...
    aboutThisIdea: "sobre si realizar esta idea y como",
    aboutThisProbl: "sobre si arreglar esto y como",

    AddProgrNote: "agregar nota de progreso",
    // Progress ...
    withThisIdea: "con realizar esta idea",
    withThisProbl: "con manejar este problema",
    withThis: "con hacer esto",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notificaciones acerca de esta conversación:",

    // If is a direct message topic, members listed below this text.
    Msg: "Mensaje",

    SmrzRepls: "Resumir respuestas",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Hay ${numReplies} respuestas. Tiempo de lectura estimado: ${minutes} minutos`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Hecho. Resumidas ${numSummarized} respuestas, de las ${numShownBefore} respuestas mostradas previamente.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Conversación cerrada",  // MISSING
    CloseOwnQuestionTooltip: "Cerrar esta pregunta si ya no necesitas una respuesta.",
    CloseOthersQuestionTooltip: "Cerrar esta pregunta si no necesita una respuesta, por ejemplo, si " +
        "es off-topic o ya ha sido resuelta en otra conversación.",
    CloseToDoTooltip: "Cerrar este Por-Hacer si no necesita ser hecho o arreglado.",
    CloseTopicTooltip: "Cerrar esta conversación si ya no requiere mayor atención.",

    AcceptBtnExpl: "Aceptar esto como la respuesta a la pregunta o problema",
    SolutionQ: "¿Solución?",
    ClickUnaccept: "Clic para desaceptar esta respuesta",
    PostAccepted: "Este post ha sido aceptado como la respuesta",

    NumLikes: (num: number) => num === 1 ? "1 Me gusta" : num + " Me gusta",
    NumDisagree: (num: number) => num + " En desacuerdo",
    NumBury: (num: number) => num === 1 ? "1 Enterrar" : num + " Enterrar",
    NumUnwanted: (num: number) => num === 1 ? "1 Indeseada" : num + " Indeseadas",

    MoreVotes: "Más votos...",
    LikeThis: "Dar Me Gusta",
    LinkToPost: "Enlace a este post",
    Report: "Denunciar",
    ReportThisPost: "Denunciar este post",
    Admin: "Admin",
    DiscIx: "Indice de conversaciones",

    Disagree: "En Desacuerdo",
    DisagreeExpl: "Cilc aquí para demostrar desacuerdo con este post, o para advertir a otros de errores factuales.",
    Bury: "Enterrar",
    BuryExpl: "Clic para que otros posts tengan prioridad antes que este. Sólo el equipo de moderadores podrá ver tu voto.",
    Unwanted: "Indeseado",
    UnwantedExpl: "Si crees que este post no deberia estar en este sitio. Esto reduciría la confianza que tenemos " +
            "en el autor del post. Sólo el equipo de moderadores podrá ver tu voto.",

    AddTags: "Agregar/eliminar etiquetas",
    UnWikify: "Deswikificar",
    Wikify: "Wikificar",
    PinDeleteEtc: "Destacar / Borrar / Categoría ...",
  },


  // Share dialog

  sd: {
    Copied: "Copiado.",
    CtrlCToCopy: "Presiona CTRL+C para copiar.",
    ClickToCopy: "Clic para copiar enlace.",
  },


  // Chat

  c: {
    About_1: "Este es el ",
    About_2: " canal de chat, creado por ",
    ScrollUpViewComments: "Ir hacia arriba para ver comentarios anteriores",
    Purpose: "Propósito:",
    edit: "editar",
    'delete': "borrar",
    MessageDeleted: "(Mensaje borrado)",
    JoinThisChat: "Unirse al chat",
    PostMessage: "Publicar mensaje",
    AdvancedEditor: "Editor avanzado",
    TypeHere: "Escribe aquí. Puedes usar Markdown y HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Necesita revisión ",
    AdminHelp: "Ayuda del Admin ",
    StaffHelp: "Ayuda del staff ",
    DraftsEtc: "Borradores, favoritos, tareas",
    MoreNotfs: "Ver todas la notificaciones",
    DismNotfs: "Marcar todo como leído",
    ViewProfile: "Ver tu perfil",
    ViewGroups: "Ver grupos",
    LogOut: "Salir",
    UnhideHelp: "Desocultar mensajes de ayuda",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Ir a:",
    Scroll: "Ir",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Atrás (B)",
    BackExpl: "Volver a tu posición previa en esta página",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Inicio de la página",
    PgTopHelp: "Ir al inicio de la página. Atajo del teclado: 1",
    Repl: "Respuestas",
    ReplHelp: "Ir a la sección de respuestas. Atajo del teclado: 2",
    Progr: "Progreso",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Ir a la sección de progreso. Atajo del teclado: 3",
    PgBtm: "Final de la página",
    Btm: "Final",
    BtmHelp: "Ir al final de la página. Atajo del teclado: 4",

    // "Atajos del teclado: ..., y B para volver atrás"
    Kbd_1: ", y ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " para volver atrás",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Seleccionar usuarios",
    AddUsers: "Agregar usuarios",
  },


  // About user dialog

  aud: {
    IsMod: "Es un moderador.",
    IsAdm: "Es un administrador.",
    IsDeld: "Se ha desactivado o eliminado.",
    ThisIsGuest: "Este es un usuario invitado, podría de hecho ser cualquiera.",
    ViewInAdm: "Ver en área de administrador",
    ViewProfl: "Ver Perfil",
    ViewComments: "Ver otros comentarios",
    RmFromTpc: "Eliminar de la conversación",
    EmAdrUnkn: "Dirección de correo desconocida — este invitado no recibirá notificaciones de respuestas.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Preferencias",
    Invites: "Invitaciones",
    DraftsEtc: "Borradores etc",
    About: "Acerca de",
    Privacy: "Privacidad",
    Account: "Cuenta",
    Interface: "Interfaz",

    // ----- Overview stats

    JoinedC: "Se unió: ",
    PostsMadeC: "Publicaciones: ",
    LastPostC: "Ultima publicación: ",
    LastSeenC: "Visto por última vez: ",
    TrustLevelC: "Nivel de confianza: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Subir foto",
    ChangePhoto: "Cambiar foto",
    ImgTooSmall: "Imagen demasiado pequeña: debe ser de al menos 100 x 100 pixeles",

    // ----- Activity

    OnlyStaffCanSee: "Sólo el  staff y miembros de alta confianza pueden ver esto",
    OnlyMbrsCanSee: "Sólo gente que ha sido miembro activo por algún tiempo puede ver esto.",
    Nothing: "Nada que mostrar", 
    Posts: "Posts",
    NoPosts: "No hay posts.",
    Topics: "Conversaciones",
    NoTopics: "No hay conversaciones.",

    // ----- User status

    UserBanned: "Este usuario ha sido expulsado",
    UserSuspended: (dateUtc: string) => `Este usuario ha sido suspendido hasta ${dateUtc} UTC`,
    ReasonC: "Motivo: ",

    DeactOrDeld: "Desactivado o eliminado.",
    isGroup: " (un grupo)",
    isGuest: " — un usuario invitado, podría ser cualquiera",
    isMod: " – moderador",
    isAdmin: " – administrador",
    you: "(tú)",

    // ----- Notifications page

    NoNotfs: "No hay notificaciones",
    NotfsToYouC: "Notificaciones para ti:",
    NotfsToOtherC: (name: string) => `Notificaciones para ${name}:`,
    DefNotfsSiteWide: "Notificaciones por defecto, de todo el sitio",
    // The "for" in:  "Notificaciones por defecto, de todo el sitio, para (el nombre de alguien)".
    forWho: "para",

    // ----- Drafts Etc page

    NoDrafts: "No hay borradores",
    YourDraftsC: "Tus borradores:",
    DraftsByC: (name: string) => `Borradores por ${name}:`,

    // ----- Invites page

    InvitesIntro: "Aquí puedes invitar gente a unirse a este sitio. ",
    InvitesListedBelow: "Invitaciones que ya has enviado en esta lista.",
    NoInvites: "No has invitado a nadie aún.",

    InvitedEmail: "Correo invitado",
    WhoAccepted: "Miembro que aceptó",
    InvAccepted: "Invitación aceptada",
    InvSent: "Invitación enviada",
    JoinedAlready: "Ya se ha unido",

    SendAnInv: "Invitar personas", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Enviar invitaciones",   // MISSING I18N is just "Send invite" (singularis) in all other langs
    SendInvExpl:  // MISSING I18N changed to pluralis
        "Le enviaremos a tus amigos un breve correo. Ellos harán clic en un enlace " +
        "para unirse inmediatamente, sin registrarse. " +
        "Ellos serán miembros normales, no moderadores ni administradores.",
    //EnterEmail: "Escribir correo",
    InvDone: "Hecho. Se les enviará un correo.",
    NoOneToInv: "Nadie a quien invitar.",
    InvNotfLater: "Se te notificará mas tarde, cuando se les haya invitado.",
    AlreadyInvSendAgainQ: "Ellos ya han sido invitados — ¿Quieres volver a invitarlos?",
    InvErr_1: "Esto resultó en ",
    InvErr_2: "errores",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Ellos ya se han unido, por lo tanto no han sido invitados:",
    ResendInvsQ: "¿Reenviar invitaciones a estas personas? Ya han sido invitadas.",
    InvAgain: "Invitar nuevamente",

    // ----- Preferences, About

    AboutYou: "Acerca de ti",
    WebLink: "Cualquier sitio web tuyo.",

    NotShownCannotChange: "No se muestra publicamente. No se puede cambiar.",

    // The full name or alias:
    NameOpt: "Nombre (opcional)",

    NotShown: "No se muestra publicamente.",

    // The username:
    MayChangeFewTimes: "Puedes cambiarlo sólo unas cuantas veces.",
    notSpecified: "(no especificado)",
    ChangeUsername_1: "Puedes cambiar tu nombre de usuario solo unas cuantas veces.",
    ChangeUsername_2: "Cambiarlo demasiado a menudo puede confundir a los demás — " +
        "no sabrán como @mencionarte.",

    NotfAboutAll: "Ser notificado acerca de cada post (a menos que hayas silenciado la conversación o categoría)",
    NotfAboutNewTopics: "Ser notificado acerca de nuevas conversaciones (a menos que hayas silenciado la categoría)",

    ActivitySummaryEmails: "Correos de resumen de actividad",

    EmailSummariesToGroup:
        "Cuando miembros de este grupo no visitan, entonces, por defecto, enviarles un correo " +
        "con resúmenes de conversaciones populares y otras cosas.",
    EmailSummariesToMe:
        "Cuando no visito el sitio, enviarme correos " +
        "con resúmenes de conversaciones populares y otros temas.",

    AlsoIfTheyVisit: "Enviarles correos incluso si visitan el sitio regularmente.",
    AlsoIfIVisit: "Enviarme correos incluso si visito este sitio regularmente.",

    HowOftenWeSend: "¿Cuán a menudo deben enviarse estos correos?",
    HowOftenYouWant: "¿Cuán a menudo quieres recibir estos correos?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "¿Ocultar tu actividad reciente para extraños y miembros nuevos?",
    HideActivityStrangers_2: "(Pero no para quienes han sido miembros activos por un tiempo.)",
    HideActivityAll_1: "¿Ocultar tu actividad reciente para todos?",
    HideActivityAll_2: "(Excepto para el staff y miembros de confianza.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Correos electrónicos",
    PrimaryDot: "Primario. ",
    VerifiedDot: "Verificado. ",
    NotVerifiedDot: "No verificado. ",
    ForLoginWithDot: (provider: string) => `Para ingreso con ${provider}. `,
    MakePrimary: "Hacerlo primario",
    AddEmail: "Agregar dirección de correo",
    TypeNewEmailC: "Escribir una nueva dirección de correo:",
    MaxEmailsInfo: (numMax: number) => `(No puedes agregar mas de ${numMax} direcciones.)`,
    EmailAdded_1: "Agregada. Te hemos enviado un mensaje de verificación — ",
    EmailAdded_2: "Revisa tu correo electrónico.",
    SendVerifEmail: "Enviar correo de verificación",

    EmailStatusExpl:
        "('Primario' significa que puedes ingresar con este correo, y allí enviaremos notificaciones. " +
        "'Verificado' significa que hiciste clic en un enlace de verificación dentro de un correo de verifiación.)",

    // Password:
    ChangePwdQ: "¿Cambiar contraseña?",
    CreatePwdQ: "¿Crear contraseña?",
    WillGetPwdRstEml: "Recibirás un correo de verificación de contraseña.",
    // This is the "None" in:  "Contraseña: ninguna"
    PwdNone: "Ninguna",

    // Logins:
    LoginMethods: "Métodos de ingreso",
    commaAs: ", como: ",

    // One's data:
    YourContent: "Tu contenido",
    DownloadPosts: "Descargar mensajes",
    DownloadPostsHelp: "Crea un archivo JSON con una copia de conversaciones y comentarios que has publicado.",
    DownloadPersData: "Descargar datos personales",
    DownloadPersDataHelp: "Crea un archivo JSON con una copia de tus datos personales, por ejemplo, tu nombre " +
        "(si has especificado uno) y dirección de correo electrónico.",


    // Delete account:
    DangerZone: "Zona de peligo",
    DeleteAccount: "Eliminar cuenta",
    DeleteYourAccountQ:
        "¿Eliminar tu cuenta? Eliminaremos tu nombre, olvidaremos tu correo, contraseña  " +
        "cualquier identidad virtual (como Facebook o Twitter). " +
        "No podrás ingresar denuevo. Esta acción no se puede deshacer.",
    DeleteUserQ:
        "¿Eliminar este usuario? Eliminaremos el nombre, olvidaremos el correo electrónico, contraseña y " +
        "otras identidades virtuales (como Facebook o Twitter). " +
        "El usuario no podrá ingresar denuevo. Esta acción no se puede deshacer.",
    YesDelete: "Sí, eliminar",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Miembros del grupo",
    NoMembers: "No hay miembros.",
    MayNotListMembers: "No se pueden mostrar miembros.",
    AddMembers: "Agregar miembros",
    BuiltInCannotModify: "Este es un grupo integrado en el software; no se puede modificar.",
    NumMembers: (num: number) => `${num} miembros`,
    YouAreMember: "Eres miembro.",
    CustomGroupsC: "Grupos personalizados:",
    BuiltInGroupsC: "Grupos integrados en el software:",
    DeleteGroup: "Elimina este grupo",
  },


  // Create user dialog

  cud: {
    CreateUser: "Crear usuario",
    CreateAccount: "Crear cuenta",
    EmailC: "Correo electrónico:",  // REMOVE move to t.EmailC instead
    keptPriv: "se mantendrá en privado",
    forNotfsKeptPriv: "para notificaciones de respuesta, se mantendrá en privado",
    EmailVerifBy_1: "Tu correo ha sido verificado por ",
    EmailVerifBy_2: ".",
    UsernameC: "Nombre de usuario:",
    FullNameC: "Nombre completo:",
    optName: "opcional",

    OrCreateAcct_1: "O ",
    OrCreateAcct_2: "crear una cuenta",
    OrCreateAcct_3: " con ",
    OrCreateAcct_4: "@NombreDeUsuario",
    OrCreateAcct_5: " y contraseña",

    DoneLoggedIn: "Cuenta creada. Has ingresado.",  // COULD say if verif email sent too?
    AlmostDone:
        "¡Casi listo! Debes confirmar tu dirección de correo. Te hemos " +
        "enviado un correo. Por favor haz clic en el enlace para activar " +
        "tu cuenta. Puedes cerrar esta ventana.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Términos y Privacidad",

    Accept_1: "¿Aceptas nuestros ",
    TermsOfService: "Términos de Servicio",
    TermsOfUse: "Términos de Uso",
    Accept_2: " y ",
    PrivPol: "Política de Privacidad",
    Accept_3_User: "?",
    Accept_3_Owner: " para dueños de sitios?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Sí, acepto",
  },


  // Password input

  pwd: {
    PasswordC: "Contraseña:",
    StrengthC: "Fortaleza: ",
    FairlyWeak: "Bastante débil.",
    toShort: "Demasiado corta",
    TooShort: (minLength: number) => `Demasiado corta. Debe tener por lo menos $minLength} caracteres`,
    PlzInclDigit: "Por favor incluir un dígito o carácter especial (símbolos)",
    TooWeak123abc: "Demasiado débil. No uses contraseñas cómo '12345' o 'abcde'.",
    AvoidInclC: "Evita incluir (partes de) tu nombre o correo electrónico en la contraseña:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Página no encontrada, o acceso denegado.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Estás suplantando a alguien, que puede no tener acceso a todas los lugares " +
        "de este sitio web.",

    IfYouThinkExistsThen: "Si crees que esta página existe, ingresa como alguien que tenga acceso a ella. ",
    LoggedInAlready: "(Ya has ingresado, pero ¿quizás es la cuenta equivocada?) ",
    ElseGoToHome_1: "O puedes ",
    ElseGoToHome_2: "ir a la página de inicio.",

    CreateAcconut: "Crear cuenta",
    ContinueWithDots: "Continuar con ...",
    SignUp: "Registrarse",
    LogIn: "Ingresar",
    LogInWithPwd: "Ingresar con contraseña",
    CreateAdmAcct: "Crear cuenta de administrador:",
    AuthRequired: "Se requiere registro para ingresar a este sitio",
    LogInToLike: "Ingresa para dar 'Me Gusta' a este post",
    LogInToSubmit: "Ingresar y publicar",
    LogInToComment: "Ingresa para escribir un comentario",
    LogInToCreateTopic: "Ingresar para iniciar una conversación",

    AlreadyHaveAcctQ: "¿Tienes una cuenta? ",  // MISSING changed "Already have...?" to "You have...?"
    LogInInstead_1: "",
    LogInInstead_2: "Ingresa",   // "Log in" (this is a button)
    LogInInstead_3: " ", // "instead"

    NewUserQ: "¿Nuevo usuario? ",
    SignUpInstead_1: "",
    SignUpInstead_2: "Regístrate",
    SignUpInstead_3: "",

    OrCreateAcctHere: "O crea una cuenta:",
    OrTypeName: "O escribe tu nombre:",
    OrLogIn: "O ingresa:",
    YourNameQ: "¿Tu nombre?",

    BadCreds: "Nombre de usuario o contraseñña no válidos",

    UsernameOrEmailC: "Nombre de usuario o correo electrónico:",
    PasswordC: "Contraseña:",
    ForgotPwd: "¿Olvidaste tu contraseña?",

    NoPwd: "Aún no has elegido una contraseña.",
    CreatePwd: "Crear contraseña",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Indícanos que es lo que te preocupa.",
    ThanksHaveReported: "Gracias. Ya lo has denunciado. El staff del foro echará un vistazo.",
    ReportComment: "Denunciar comentario",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Este mensaje contiene datos personales, por ejemplo el nombre real de alguien.",
    OptOffensive: "Este post es abusivo u ofensivo.",
    OptSpam: "Este post contiene publicidad no deseada.",
    OptOther: "Notificar al staff acerca de este post por alguna otra razón.",
  },


  // Help message dialog
  help: {
    YouCanShowAgain_1: "Puedes mostrar mensajes de ayuda nuevamente, si has ingresado, " +
        "haciendo clic en tu nombre y luego ",
    YouCanShowAgain_2: "en 'desocultar mensajes de Ayuda'",
  },


  // Editor

  e: {
    SimilarTopicsC: "Conversaciones similares:",

    //WritingSomethingWarning: "¿Estabas escribiendo algo?",
    UploadMaxOneFile: "Lo sentimos pero actualmente solo puedes subir un archivo a la vez",
    PleaseFinishPost: "Primero finaliza de escribir tu post",
    PleaseFinishChatMsg: "Primero finaliza de escribir tu mensaje de chat",
    PleaseFinishMsg: "Primero finaliza de escribir tu mensaje",
    PleaseSaveEdits: "Primero guarda tu edición actual",
    PleaseSaveOrCancel: "Primero guarda o cancela tu nueva conversación",
    CanContinueEditing: "Puedes continuar editando tu texto, si abres el editor nuevamente",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Por favor no borres todo el texto. Escribe algo.",
    PleaseWriteSth: "Por favor escribe algo.",
    PleaseWriteTitle: "Por favor escribe un título de conversación.",
    PleaseWriteMsgTitle: "Por favor escribir un título de mensaje.",
    PleaseWriteMsg: "Por favor escribir un mensaje.",

    exBold: "texto en negrita",
    exEmph: "texto enfatizado",
    exPre: "texto preformateado",
    exQuoted: "texto citado",
    ExHeading: "Encabezado",

    TitlePlaceholder: "Escribe un título",

    EditPost_1: "Editar ",
    EditPost_2: "post ",

    TypeChatMsg: "Escribe un mensaje de chat:",
    YourMsg: "Tu mensaje:",
    CreateTopic: "Crear nueva conversación",
    CreateCustomHtml: "Crear una pagina HTML personalizada (agrega tu propio título <h1>)",
    CreateInfoPage: "Crear una página de información",
    CreateCode: "Crear una página de código de fuente",
    AskQuestion: "Hacer una pregunta",
    ReportProblem: "Informar un problema",
    SuggestIdea: "Sugerir una idea",
    NewChat: "Nuevo canal de chat, título y propósito",
    NewPrivChat: "Nuevo canal privado de chat, título y propósito",
    AppendComment: "Agregar un comentario al final de la página:",

    ReplyTo: "Responder a ",
    ReplyTo_theOrigPost: "el post original",
    ReplyTo_post: "post ",
    AddCommentC: "Agregar un comentario:",   // MISSING, & dupl t.AddComment

    PleaseSelectPosts: "Seleccionar uno o más post a los cuales responder.",

    Save: "Guardar",
    edits: "ediciones",

    PostReply: "Publicar respuesta",
    PostComment: "Publicar comentario",

    Post: "Publicar",
    comment: "comentario",
    question: "pregunta",

    PostMessage: "Publicar mensaje",
    SimpleEditor: "Editor simple",

    Send: "Enviar",
    message: "mensaje",

    Create: "Crear",
    page: "página",
    chat: "chat",
    idea: "idea",
    topic: "conversación",

    Submit: "Enviar",
    problem: "problema",

    ViewOldEdits: "Ver ediciones anteriores",

    UploadBtnTooltip: "Subir un archivo o imagen",
    BoldBtnTooltip: "Agregar negrita",
    EmBtnTooltip: "Enfatizar",
    QuoteBtnTooltip: "Citar",
    PreBtnTooltip: "Texto preformateado",
    HeadingBtnTooltip: "Encabezado",

    TypeHerePlaceholder: "Escribir aquí. Puedes usar Markdown y HTML. Arrastra y suelta para pegar imagenes.",

    Maximize: "Maximizar",
    ToNormal: "Volver al tamaño normal",
    TileHorizontally: "Mosaico horizontal",

    PreviewC: "Vista previa:",
    TitleExcl: " (se excluye el título)",
    ShowEditorAgain: "Mostrar editor nuevamente",
    Minimize: "Minimizar",

    IPhoneKbdSpace_1: "(este espacio gris está reservado",
    IPhoneKbdSpace_2: "para el teclado iPhone.)",

    PreviewInfo: "Aquí puedes ver como lucirá tu post.",
    CannotType: "No puedes escribir aquí.",

    LoadingDraftDots: "Cargando cualquier borrador...",
    DraftUnchanged: "No hay cambios.",
    CannotSaveDraftC: "No se puede guardar borrador:",
    DraftSavedBrwsr: "Borrador guardado en navegador.",   // MISSING
    DraftSaved: (nr: string | number) => `Borrador ${nr} guardado.`,
    DraftDeleted: (nr: string | number) => `Borrador ${nr} guardado.`,
    WillSaveDraft: (nr: string | number) => `Se guardará borrador ${nr} ...`,
    SavingDraft: (nr: string | number) => `Guardando borrador ${nr} ...`,
    DeletingDraft: (nr: string | number) => `Eliminando borrador ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Seleccionar categoría",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Seleccionar un tipo de conversación:",
    DiscussionExpl: "Una conversación acerca de algo.",
    QuestionExpl: "Una respuesta puede ser marcada como la respuesta aceptada.",
    ProblExpl: "Para cuando algo está roto o no funciona. Puede ser marcado como arreglado o resuelto.",
    IdeaExpl: "Una sugerencia. Puede ser marcada como realizada o implementada.",
    ChatExpl: "Una conversación, quizás sin fin.",
    PrivChatExpl: "Sólo visible para personas invitadas a unirse al chat.",

    CustomHtml: "Página HTML personalizada",
    InfoPage: "Página de información",
    Code: "Código",
    EmbCmts: "Comentarios incrustados",
    About: "Acerca de",
    PrivChat: "Chat privado",
    Form: "Formulario",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "No hay más comunidades para unirse.",
    SelCmty: "Seleccionar comunidad ...",
  },


  // Search dialogs and the search page.

  s: {
    TxtToFind: "Texto a buscar",
  },


  // No internet

  ni: {
    NoInet: "No hay conexión a internet",
    PlzRefr: "Recarga la página para ver los últimos cambios (hubo una desconexión))",
    RefrNow: "Recargar ahora",
  },


  PostDeleted: (postNr: number) => `Ese post, nr ${postNr}, ha sido borrado.`,
  NoSuchPost: (postNr: number) => `No existe el post nr ${postNr} en esta página.`,
  NoPageHere: "Esta página ha sido borrada, o nunca existió, o puedes no tener acceso a ella.",
  GoBackToLastPage: "Volver a la última página",

};