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

var t_pt_PT: TalkyardTranslations = t = {

  // A single or a few words, sorted alphabetically, to reuse everywhere.

  Active: "Ativo",
  Activity: "Atividade",
  Add: "Adicionar",
  AddingDots: "A adicionar ...",
  AddComment: "Adicionar Comentário",  
  Admin: "Admin",
  AdvSearch: "Pesquisa avançada",
  Anonym: "Anónimo",
  Away: "Ausente",
  Back: "Voltar",
  BlogN: "Blog",
  Bookmarks: "Favoritos",
  Cancel: "Cancelar",
  Categories: "Categorias",
  Category: "Categoria",
  ChangeV: "Alterar",
  ClickToShow: "Clique para mostrar",
  ChangeDots: "Alterar ...",
  ChatN: "Chat",
  Chatting: "No chat",
  CheckYourEmail: "Verifique o seu e-mail",
  Close: "Fechar",
  closed: "fechado",
  comments: "comentários",   // as in:  "123 comments"
  Continue: "Continuar",
  Created: "Criado",
  Delete: "Eliminar",
  Deleted: "Eliminado",
  DirectMessage: "Mensagem direta",
  Discussion: "Discussão",
  discussion: "discussão",
  done: "concluído",
  EditV: "Editar",
  Editing: "A editar",
  EmailC: "E-mail: ",   
  EmailAddress: "Endereço de e-mail",
  EmailAddresses: "Endereços de e-mail",
  EmailSentD: "E-mail enviado.",
  Forum: "Fórum",
  GetNotifiedAbout: "Receber notificações sobre",
  GroupsC: "Grupos:",
  Hide: "Ocultar",
  Home: "Início",
  Idea: "Ideia",
  Join: "Aderir",
  KbdShrtcsC: "Atalhos de teclado: ",
  Loading: "A carregar...",
  LoadMore: "Carregar mais ...",
  LogIn: "Iniciar sessão",
  LoggedInAs: "Sessão iniciada como ",
  LogOut: "Sair",
  Maybe: "Talvez",
  Manage: "Gerir",
  Members: "Membros",
  MessageN: "Mensagem",
  MoreDots: "Mais...",
  Move: "Mover",
  Name: "Nome",
  NameC: "Nome:",
  NewTopic: "Novo tópico",
  NoCancel: "Não, cancelar",
  Notifications: "Notificações",
  NotImplemented: "(Não implementado)",
  NotYet: "Ainda não",
  NoTitle: "Sem título",
  NoTopics: "Sem tópicos.",
  Okay: "OK",
  OkayDots: "OK ...",
  Online: "Online",
  onePerLine: "um por linha",
  PreviewV: "Pré-visualizar",
  Problem: "Problema",
  progressN: "progresso",
  Question: "Pergunta",
  Recent: "Recente",
  Remove: "Remover",
  Reopen: "Reabrir",
  ReplyV: "Responder",
  Replying: "A responder",
  Replies: "Respostas",
  replies: "respostas",
  Save: "Guardar",
  SavingDots: "A guardar ...",
  SavedDot: "Guardado.",
  Search: "Pesquisar",
  SendMsg: "Enviar Mensagem",
  ShowPreview: "Mostrar pré-visualização",  
  SignUp: "Aderir",  // don't change to "Sign Up" [join_or_signup]
  Solution: "Solução",
  started: "iniciado",
  Summary: "Resumo",
  Submit: "Submeter",
  Tag: "Etiqueta",  
  Tags: "Etiquetas",  
  Tools: "Ferramentas",
  Topics: "Tópicos",
  TopicTitle: "Título do tópico",
  TopicType: "Tipo de tópico",
  UploadingDots: "A carregar...",
  Username: "Nome de utilizador",
  Users: "Utilizadores",
  Welcome: "Bem-vindo",
  Wiki: "Wiki",
  Yes: "Sim",
  YesBye: "Sim, adeus",
  YesDoThat: "Sim, faça isso",
  You: "Você",
  you: "você",

  // Trust levels.
  Guest:  "Convidado",
  NewMember: "Novo membro",
  BasicMember: "Membro básico",
  FullMember: "Membro pleno",
  TrustedMember: "Membro de confiança",
  RegularMember: "Regular de confiança",  
  CoreMember: "Membro nuclear",

  // Periods.
  PastDay: "Último dia",
  PastWeek: "Última semana",
  PastMonth: "Último mês",
  PastQuarter: "Último trimestre",
  PastYear: "Último ano",
  AllTime: "Desde sempre",

  // Time ago letters.
  // English examples: "3d" in forum topic list means 3 days ago. "5h" is 5 hours.
  monthsLtr: "mês",  // months
  daysLtr: "d",      // days
  hoursLtr: "h",     // hours
  minsLtr: "m",      // minutes
  secsLtr: "s",      // seconds

  // Time ago, long text versions.
  daysAgo: (numDays: number) =>
    numDays === 1 ? "há 1 dia" : `há ${numDays} dias`,

  hoursAgo: (numHours: number) =>
    numHours === 1 ? "há 1 hora" : `há ${numHours} horas`,

  minutesAgo: (numMins: number) =>
    numMins === 1 ? "há 1 minuto" : `há ${numMins} minutos`,

  secondsAgo: (numSecs: number) =>
    numSecs === 1 ? "há 1 segundo" : `há ${numSecs} segundos`,


  // Input fields, e.g. email, name etc.

  inp: {
    // Email address input field:
    EmReq: "E-mail obrigatório",
    NoSpcs: "Sem espaços, por favor",
    InvldAddr: "Endereço de e-mail inválido",
    NoBadChrs: "Sem carateres estranhos, por favor",

    // Full name input field:
    NotOnlSpcs: "Não use apenas espaços, por favor",
    NoAt: "Não use @, por favor",

    // Username input field:
    NoDash: "Não use traços (-), por favor",
    DontInclAt: "Não inclua o @",
    StartEndLtrDgt: "Comece e termine com uma letra ou um dígito",
    OnlLtrNumEtc: "Apenas letras (a-z, A-Z), números e _ (sublinhado)",
    // This shown just below the username input:
    UnUnqShrt_1: "O seu ",
    UnUnqShrt_2: "@nome-de-utilizador",
    UnUnqShrt_3: ", único e curto",

    // Generic messages for all input fields:
    TooShort: (minLength: number) => `Deve ter pelo menos ${minLength} carateres`,
    TooLong: (maxLength: number) => `Demasiado longo. Deve ter no máximo ${maxLength} carateres`,
  },


  // Notification levels.

  nl: {
    EveryPost: "Todas as publicações",
    EveryPostInTopic: "Será notificado de todas as novas respostas neste tópico.",
    EveryPostInCat: "Será notificado de todos os novos tópicos e respostas nesta categoria.",
    EveryPostInTopicsWithTag: "Será notificado de novos tópicos com esta etiqueta e de todas as respostas nesses tópicos.",
    EveryPostWholeSite: "Será notificado de todos os novos tópicos e respostas em qualquer lugar.",

    // One will be notified about the *first* post in a new topic, only. That is, the Original Post
    // (that's what the first post is called, in a discussion forum topic).
    NewTopics: "Novos tópicos",
    NewTopicsInCat: "Será notificado de novos tópicos nesta categoria.",
    NewTopicsWithTag: "Será notificado de novos tópicos com esta etiqueta.",
    NewTopicsWholeSite: "Será notificado de novos tópicos em qualquer lugar.",

    Tracking: "A acompanhar",

    Normal: "Normal",
    NormalDescr: "Será notificado se alguém falar consigo, também indiretamente, por ex. uma " +
        "resposta a uma resposta sua.",
    //NormalTopic_1: "You'll be notified if someone talks to you, or mentions your ",
    //NormalTopic_2: "@name",

    Hushed: "Sussurrado",
    HushedDescr: "Será notificado apenas se alguém falar diretamente consigo.",

    Muted: "Silenciado",
    MutedTopic: "Sem notificações.",   
  },


  // Forum intro text

  fi: {
    Edit: "Editar",
    Hide_1: "Ocultar",
    Hide_2: ", clique em ",
    Hide_3: " para reabrir",
  },


  // Forum categories

  fcs: {
    All: "Todas", // "All (categories)", shorter than AllCats
  },


  // Forum buttons

  fb: {

    TopicList: "Lista de tópicos",

    // Select category dropdown

    from: "de",  
    in: "em",      
    AllCats: "Todas as categorias",

    // Topic sort order

    Active: "Ativos primeiro",      
    ActiveDescr: "Mostra os tópicos recentemente ativos primeiro",

    New: "Novos",
    NewDescr: "Mostra os tópicos mais recentes primeiro",

    Top: "Populares",              
    TopDescr: "Mostra os tópicos populares primeiro",

    // Topic filter dropdown

    AllTopics: "Todos os tópicos",

    ShowAllTopics: "Mostrar todos os tópicos",
    ShowAllTopicsDescr: "Mas não os tópicos eliminados",

    WaitingTopics: "Tópicos pendentes",          
    OnlyWaitingDescr_1: "Mostra apenas tópicos ", 
    OnlyWaitingDescr_2: "a aguardar ",
    OnlyWaitingDescr_3: "por uma solução ou para serem implementados e concluídos",  

    YourTopics: "Os seus tópicos",       
    AssignedToYou: "Atribuídos a si", 

    DeletedTopics: "Mostrar eliminados",   
    ShowDeleted: "Mostrar eliminados",
    ShowDeletedDescr: "Mostra todos os tópicos, incluindo os eliminados",

    // Rightmost buttons

    ViewCategories: "Ver categorias",  
    EditCat: "Editar Categoria",
    CreateCat: "Criar Categoria",
    CreateTopic: "Criar Tópico",
    PostIdea: "Publicar uma Ideia",
    AskQuestion: "Fazer uma Pergunta",
    ReportProblem: "Reportar um Problema",
    CreateMindMap: "Criar Mapa Mental",
    CreatePage: "Criar Página",

  },


  // Forum topic list

  ft: {
    ExplIcons: "Explicação dos ícones...",
    IconExplanation: "Explicação dos ícones:",
    ExplGenDisc: "Uma discussão geral.",
    ExplQuestion: "Uma pergunta sem resposta aceite.",
    ExplAnswer: "Uma pergunta com uma resposta aceite.",
    ExplIdea: "Uma ideia / sugestão.",
    ExplProblem: "Um problema.",
    ExplPlanned: "Algo que estamos a planear fazer ou corrigir.",
    ExplDone: "Algo que já foi feito ou corrigido.",
    ExplClosed: "Tópico fechado.",
    ExplPinned: "Tópico listado sempre em primeiro lugar (talvez apenas na sua própria categoria).",

    PopularTopicsComma: "Tópicos populares, ",
    TopFirstAllTime: "Mostra os tópicos mais populares de sempre primeiro.",
    TopFirstPastDay: "Mostra tópicos populares durante o último dia.",

    CatHasBeenDeleted: "Esta categoria foi eliminada",

    TopicsActiveFirst: "Tópicos, recentemente ativos primeiro",
    TopicsNewestFirst: "Tópicos, novos primeiro",

    CreatedOn: "Criado em ",
    LastReplyOn: "\nÚltima resposta em ",
    EditedOn: "\nEditado em ",

    // These are shown as mouse-hover tooltips, or mobile-phone-touch-tips, over the user
    // avatar icons, in the forum topic list.
    createdTheTopic: "criou o tópico",
    frequentPoster: "participante frequente",
    mostRecentPoster: "participante mais recente",

    inC: "em: ",

    TitleFixed: "Isto foi corrigido",
    TitleDone: "Isto foi concluído",
    TitleStarted: "Iniciámos isto",
    TitleStartedFixing: "Iniciámos a correção disto",
    TitleUnsolved: "Isto é um problema não resolvido",
    TitleIdea: "Isto é uma ideia",
    TitlePlanningFix: "Estamos a planear corrigir isto",
    TitlePlanningDo: "Estamos a planear fazer isto",
    TitleChat: "Este é um canal de chat",
    TitlePrivateChat: "Este é um canal de chat privado",
    TitlePrivateMessage: "Uma mensagem privada",
    TitleInfoPage: "Esta é uma página de informações",
    TitleDiscussion: "Uma discussão",
    IsPinnedGlobally: "\nFoi fixado, por isso aparece em primeiro.",
    IsPinnedInCat: "\nFoi fixado na sua categoria, por isso aparece em primeiro na sua categoria.",
  },


  // Forum categories list

  fc: {
    RecentTopicsWaiting: "Tópicos recentes (pendentes)",
    RecentTopicsInclDel: "Tópicos recentes (incluindo eliminados)",
    RecentTopics: "Tópicos recentes",
    _replies: " respostas",
    _deleted: " (eliminado)",
    _defCat: " (categoria predefinida)",
  },


  // Topbar

  // Shown at the top of the page. Includes login and signup buttons, or one's username menu.

  tb: {

    // Opens the right hand sidebar and litst the most recent posts in the current topic.
    RecentPosts: "Publicações recentes",

    // Open right-hand-sidebar button tooltip, if mouse-hovering online-user-count.
    NumOnlChat: " online neste chat",    // example: "5 online in this chat"
    NumOnlForum: " online neste fórum",

    // Open left-sidebar button title.
    WatchbBtn: "Os seus tópicos",

    // Tooltip, shown if mouse-hovering the open-left-sidebar button.
    WatchbToolt: "Os seus tópicos recentes, chats e mensagens diretas",

    // Title shown on user profile pages.
    AbtUsr: "Sobre o Utilizador",

    // Shortcuts to leave the user profile page, or staff area, and go back to the discussion topics.
    BackFromUsr: "Voltar do perfil do utilizador",
    BackFromAdm: "Voltar da área de administração",

    // Title shown on full text search page.
    SearchPg: "Página de Pesquisa",
  },


  // Watchbar (the sidebar to the left)

  wb: {
    AddCommunity: "Adicionar ...",
    RecentlyViewed: "Tópicos visualizados recentemente",  
    JoinedChats: "Chats em que participa",
    ChatChannels: "Canais de Chat",
    CreateChat: "Criar canal de chat",
    DirectMsgs: "Mensagens Diretas",
    NoChats: "Nenhum",    // meaning: "No chat messages"
    NoDirMsgs: "Nenhuma",  // meaning: "No direct messages"

    // The click-topic dropdown menu:
    TopicActions: "Ações do tópico",
    ViewPeopleHere: "Ver pessoas aqui",
    ViewAddRemoveMembers: "Ver / adicionar / remover membros",
    ViewChatMembers: "Ver membros do chat",
    EditChat: "Editar descrição do chat",
    //EditChat: "Edit chat title and purpose", // Keep, in case adds back edit-title input
    LeaveThisChat: "Sair deste chat",
    LeaveThisCommunity: "Sair desta comunidade",
    JoinThisCommunity: "Aderir a esta comunidade",
  },


  // Contextbar (the sidebar to the right)

  cb: {
    RecentComments: "Comentários recentes neste tópico:",
    NoComments: "Sem comentários.",

    YourBookmarks: "Os seus favoritos:",

    UsersOnline: "Utilizadores online:",
    UsersOnlineForum: "Utilizadores online neste fórum:",
    UsersInThisChat: "Utilizadores neste chat:",
    UsersInThisTopic: "Utilizadores neste tópico:",

    GettingStartedGuide: "Guia do Admin", 
    AdminGuide: "Guia do Admin",          // ... but what? It's here already, just reuse this transl field
    Guide: "Guide",

    // How to hide the sidebar.
    CloseShortcutS: "Fechar (atalho de teclado: S)",

    // ----- Online users list / Users in current topic

    AddPeople: "Adicionar mais pessoas",

    // Shown next to one's own username, in a list of users.
    thatsYou: "você",

    // Info about which people are online.
    // Example, in English: "Online users: You, and 5 people who have not logged in"
    OnlyYou: "Parece que está sozinho",
    YouAnd: "Você e ",
    NumStrangers: (numStrangers: number) => {
      const people = numStrangers === 1 ? " pessoa" : " pessoas";
      const have = numStrangers === 1 ? "não iniciou" : "não iniciaram";
      return numStrangers + people + " que " + have + " sessão";
    },

    // ----- Recent comments list

    // This explains how the Recent tab in the sidebar works.

    
    RepliesToTheLeft: "As respostas à esquerda podem estar ordenadas por ",
    bestFirst: "melhores primeiro.",
    ButBelow: "Mas abaixo ",
    insteadBy: " as mesmas respostas estão ordenadas por ",
    newestFirst: "mais recentes primeiro.",

    SoIfLeave: "Portanto, se sair e voltar mais tarde, encontrará abaixo ",
    allNewReplies: "todas as novas respostas.",
    Click: "Clique",
    aReplyToReadIt: " numa resposta abaixo para a ler — porque apenas é mostrado um excerto.",
  },


  // Change page dialog
  cpd: {
    ClickToChange: "Clique para alterar o estado",
    ClickToViewAnswer: "Clique para ver a resposta",
    ViewAnswer: "Ver resposta",
    ChangeStatusC: "Alterar estado para:",
    ChangeCatC: "Alterar categoria:",
    ChangeTopicTypeC: "Alterar tipo de tópico:",
  },


  // Page doing status, PageDoingStatus
  pds: {
    aQuestion: "uma pergunta",
    hasAccptAns: "tem uma resposta aceite",
    aProblem: "um problema",
    planToFix: "planeia corrigir",
    anIdea: "uma ideia",
    planToDo: "planeia fazer",
  },


  // Discussion / non-chat page

  d: {
    // These texts are split into parts 1,2 or 1,2,3 ec, because in between the texts,
    // icons are shown, to help people understand what those icons mean.

    ThisFormClosed_1: "Este formulário foi ",
    // A Topic-has-been-Closed icon shown here, between text parts 1 (just above) and 2 (below).
    ThisFormClosed_2: "fechado; já não pode preenchê-lo e publicá-lo.",

    ThisTopicClosed_1: "Este tópico foi ",
    // A Topic-has-been-Closed icon, + the text "closed", shown here.
    ThisTopicClosed_2: ". Ainda pode publicar comentários.",   

    ThisPageDeleted: "Esta página foi eliminada",
    CatDeldPageToo: "Categoria eliminada, por isso esta página também foi eliminada",

    ThreadDeld: "Discussão eliminada",
    CmntDeld: "Comentário eliminado",
    PostDeld: "Publicação eliminada",
    DiscDeld: "Discussão eliminada",
    PageDeld: "Página eliminada",
    PagePendAppr: "Página a aguardar aprovação",
    TitlePendAppr: "Título a aguardar aprovação",
    TextPendingApproval: "Texto a aguardar aprovação",

    TooltipQuestClosedNoAnsw: "Esta pergunta foi fechada sem nenhuma resposta aceite.",
    TooltipTopicClosed: "Este tópico está fechado.",

    TooltipQuestSolved: "Esta é uma pergunta resolvida",
    TooltipQuestUnsolved: "Esta é uma pergunta não resolvida",

    StatusDone: "Concluído",
    TooltipProblFixed: "Isto foi corrigido",
    TooltipDone: "Isto foi concluído",

    StatusStarted: "Iniciado",
    TooltipFixing: "Iniciámos a correção disto",      
    TooltipImplementing: "Iniciámos a implementação disto", 

    StatusPlanned: "Planeado",
    TooltipProblPlanned: "Estamos a planear corrigir isto",
    TooltipIdeaPlanned: "Estamos a planear fazer isto",   // or "to implement this"?

    StatusNew: "Novo",
    StatusNewDtl: "Novo tópico, em discussão",
    TooltipUnsProbl: "Isto é um problema não resolvido",
    TooltipIdea: "Isto é uma ideia",

    TooltipPersMsg: "Mensagem pessoal",
    TooltipChat: "# significa Canal de Chat",
    TooltipPrivChat: "Este é um canal de chat privado",

    TooltipPinnedGlob: "\nFixado globalmente.",
    TooltipPinnedCat: "\nFixado nesta categoria.",

    SolvedClickView_1: "Resolvido na publicação #",
    SolvedClickView_2: ", clique para ver",

    PostHiddenClickShow: "Publicação oculta; clique para mostrar",
    ClickSeeMoreRepls: "Mostrar mais respostas",      
    ClickSeeMoreComments: "Mostrar mais comentários",  
    ClickSeeThisComment: "Clique para mostrar este comentário",
    clickToShow: "clique para mostrar",

    ManyDisagree: "Muitos discordam disto:",
    SomeDisagree: "Alguns discordam disto:",

    PendAppr: "A aguardar aprovação",
    CmtPendAppr: "Comentário a aguardar aprovação, publicado ",  
    CmtBelowPendAppr: (isYour) => (isYour ? "O seu" : "O") + " comentário abaixo está a aguardar aprovação.",

    _and: " e",

    repliesTo: "respostas a",
    InReplyTo: "Em resposta a",
    YourReplyTo: "A sua resposta a ",  
    YourChatMsg: "A sua mensagem de chat: ",   
    YourDraft: "O seu rascunho",    
    YourEdits: "As suas edições: ",   
    YourProgrNoteC: "A sua nota de progresso:",  
    aProgrNote: "uma nota de progresso: ",  

    ReplyingToC: "A responder a:",    
    ScrollToPrevw_1: "Deslizar para ",  
    ScrollToPrevw_2: "pré-visualização",     

    UnfinEdits: "Edições inacabadas",  
    ResumeEdting: "Retomar edição",  
    DelDraft: "Eliminar rascunho",   

    ClickViewEdits: "Clique para ver edições antigas",

    By: "Por ", // ... someones name

    // Discussion ...
    aboutThisIdea: "sobre como e se deve ser feita esta ideia",
    aboutThisProbl: "sobre como e se deve ser corrigido isto",

    AddProgrNote: "Adicionar nota de progresso",
    // Progress ...
    withThisIdea: "com a realização desta ideia",
    withThisProbl: "com a resolução deste problema",
    withThis: "com a realização disto",
  },


  // Metabar

  // Shown between the original post and all replies.

  mb: {
    NotfsAbtThisC: "Notificações sobre este tópico:",

    // If is a direct message topic, members listed below this text.
    Msg: "Mensagem",

    SmrzRepls: "Resumir Respostas",

    // Don't bother about being correct with "1 reply", "2,3,4 replies".
    // Just write "replies" always instead? (also if only one)

    EstTime: (numReplies: number, minutes: number) =>
        `Existem ${numReplies} respostas. Tempo de leitura estimado: ${minutes} minutos`,

    DoneSummarizing: (numSummarized: number, numShownBefore: number) =>
        `Concluído. Resumidas ${numSummarized} respostas, das ${numShownBefore} respostas anteriormente mostradas.`,
  },


  // Post actions

  pa: {
    CloseTopic: "Fechar tópico",  
    CloseOwnQuestionTooltip: "Feche esta pergunta se já não precisar de uma resposta.",
    CloseOthersQuestionTooltip: "Feche esta pergunta se ela não precisar de uma resposta, por ex. se " +
        "estiver fora do tópico ou já tiver sido respondida noutro tópico.",
    CloseToDoTooltip: "Feche este Item Pendente se não precisar de ser feito ou corrigido.",
    CloseTopicTooltip: "Feche este tópico se não for necessária mais consideração.",

    AcceptBtnExpl: "Aceitar como a resposta para a pergunta ou problema",
    SolutionQ: "Solução?",
    ClickUnaccept: "Clique para desmarcar esta resposta como aceite",
    PostAccepted: "Esta publicação foi aceite como a resposta",

    NumLikes: (num: number) => num === 1 ? "1 Gosto" : num + " Gostos",
    NumDisagree: (num: number) => num + " Discordam",
    NumBury: (num: number) => num === 1 ? "1 Ocultar" : num + " Ocultar",
    NumUnwanted: (num: number) => num === 1 ? "1 Indesejada" : num + " Indesejadas",

    MoreVotes: "Mais votos...",
    LikeThis: "Gostar disto",
    LinkToPost: "Ligação para esta publicação",
    Report: "Reportar",
    ReportThisPost: "Reportar esta publicação",
    Admin: "Admin",
    DiscIx: "Índice de discussões",

    Disagree: "Discordar",
    DisagreeExpl: "Clique aqui para discordar desta publicação, ou para avisar outros sobre erros factuais.",
    Bury: "Ocultar",
    BuryExpl: "Clique para ordenar outras publicações antes desta. Apenas a equipa do fórum pode ver o seu voto.",
    Unwanted: "Indesejada",
    UnwantedExpl: "Se não quer esta publicação neste website. Isto reduzirá a confiança que tenho " +
            "no autor da publicação. Apenas a equipa do fórum pode ver o seu voto.",

    AddTags: "Adicionar/remover etiquetas",
    UnWikify: "Remover Wiki",
    Wikify: "Tornar Wiki",
    PinDeleteEtc: "Fixar / Eliminar / Categoria ...",
  },


  // Share dialog

  sd: {
    Copied: "Copiado.",
    CtrlCToCopy: "Pressione CTRL+C para copiar.",
    ClickToCopy: "Clique para copiar a ligação.",
  },


  // Chat

  c: {
    About_1: "Este é o canal de chat ",
    About_2: ", criado por ",
    ScrollUpViewComments: "Deslize para cima para ver comentários mais antigos",
    Purpose: "Objetivo:",
    MessageDeleted: "(Mensagem eliminada)",
    JoinThisChat: "Aderir a este chat",
    PostMessage: "Publicar mensagem",
    AdvancedEditor: "Editor avançado",
    TypeTitle: "Escreva um título — sobre o que é este chat, em poucas palavras?",
    TypePurpose: "Escreva um objetivo — pode ser mais longo que o título, mais descritivo.",
    TypeHere: "Escreva aqui. Pode usar Markdown e HTML.",
  },


  // My Menu

  mm: {
    NeedsReview: "Necessita de revisão ",
    AdminHelp: "Ajuda do Admin ",
    StaffHelp: "Ajuda da Equipa ",
    DraftsEtc: "Rascunhos, favoritos, tarefas",
    MoreNotfs: "Ver todas as notificações",
    DismNotfs: "Marcar todas como lidas",
    ViewProfile: "Ver o seu perfil",
    ViewGroups: "Ver grupos",
    LogOut: "Sair",
    UnhideHelp: "Mostrar mensagens de ajuda",
  },


  // Scroll buttons

  sb: {
    ScrollToC: "Deslizar para:",
    Scroll: "Deslizar",

    // The Back button, and the letter B is a keyboard shortcut.
    // If in your language, "Back" doesn't start with 'B', then instead
    // set Back_1 to '' (empty text), and Back_2 to:  "Back (B)" — and "Back" (but not "B")
    // translated to your language.
    Back_1: "",
    Back_2: "Voltar (B)",
    BackExpl: "Voltar à sua posição anterior nesta página",

    // These are useful on mobile — then, no keybard with Home (= scroll to top) and End buttons.
    // And, on a keyboard, once you get used to it, it's quite nice to click 1 to go to the
    // top, and 2 to see the first reply, and B to go back, F forward, so on.
    PgTop: "Topo da página",
    PgTopHelp: "Ir para o topo da página. Atalho de teclado: 1",
    Repl: "Respostas",
    ReplHelp: "Ir para a secção de Respostas. Atalho: 2",
    Progr: "Progresso",
    // The Progress section is at the end of the page, and there, things like
    // "Alice changed status to Doing" and "Alise marked this as Done" and "Topic closed by ..."
    // are shown. (And, optionally, comments by staff or the people working with the issue.)
    ProgrHelp: "Ir para a secção de Progresso. Atalho: 3",
    PgBtm: "Fim da página",
    Btm: "Fim",
    BtmHelp: "Ir para o fim da página. Atalho: 4",

    // "Keyboard shrotcuts: ..., and B to scroll back"
    Kbd_1: " e ",
    // then the letter 'B' (regardless of language)
    Kbd_2: " para voltar",
  },


  // Select users dialog
  sud: {
    SelectUsers: "Selecionar utilizadores",
    AddUsers: "Adicionar utilizadores",
  },


  // About user dialog

  aud: {
    IsMod: "É moderador.",
    IsAdm: "É administrador.",
    IsDeld: "Está desativado ou eliminado.",
    ThisIsGuest: "Este é um utilizador convidado, pode ser qualquer pessoa.",
    ViewInAdm: "Ver na Área de Administração",
    ViewProfl: "Ver Perfil",
    ViewComments: "Ver outros comentários",
    RmFromTpc: "Remover do tópico",
    EmAdrUnkn: "Endereço de e-mail desconhecido — este convidado não será notificado sobre respostas.",
  },


  // User's profile page

  upp: {
    // ----- Links

    Preferences: "Preferências",
    Invites: "Convites",
    DraftsEtc: "Rascunhos etc",
    About: "Sobre",
    Privacy: "Privacidade",
    Security: "Segurança",
    Account: "Conta",
    Interface: "Interface",

    // ----- Overview stats

    JoinedC: "Aderiu em: ",
    PostsMadeC: "Publicações feitas: ",
    LastPostC: "Última publicação: ",
    LastSeenC: "Visto pela última vez: ",
    TrustLevelC: "Nível de confiança: ",

    // ----- Action buttons

    // ----- Profile pic

    UploadPhoto: "Carregar foto",
    ChangePhoto: "Alterar foto",
    ImgTooSmall: "Imagem demasiado pequena: deve ter pelo menos 100 x 100",

    // ----- Activity

    OnlyStaffCanSee: "Apenas a equipa e membros nucleares de confiança podem ver isto.",
    OnlyMbrsCanSee: "Apenas pessoas que têm sido membros ativos há algum tempo podem ver isto.",
    Nothing: "Nada para mostrar",
    Posts: "Publicações",
    NoPosts: "Sem publicações.",
    Topics: "Tópicos",
    NoTopics: "Sem tópicos.",

    // ----- User status

    UserBanned: "Este utilizador está banido",
    UserSuspended: (dateUtc: string) => `Este utilizador está suspenso até ${dateUtc} UTC`,
    ReasonC: "Motivo: ",

    DeactOrDeld: "Foi desativado ou eliminado.",
    isGroup: " (um grupo)",
    isGuest: " — um utilizador convidado, pode ser qualquer pessoa",
    isMod: " – moderador",
    isAdmin: " – administrador",
    you: "(você)",

    // ----- Notifications page

    NoNotfs: "Sem notificações",
    NotfsToYouC: "Notificações para si:",
    NotfsToOtherC: (name: string) => `Notificações para ${name}:`,
    DefNotfsSiteWide: "Notificações predefinidas, para todo o site",
    // The "for" in:  "Default notifications, site wide, for (someone's name)".
    forWho: "para",

    // ----- Drafts Etc page

    NoDrafts: "Sem rascunhos",
    YourDraftsC: "Os seus rascunhos:",
    DraftsByC: (name: string) => `Rascunhos de ${name}:`,

    // ----- Invites page

    InvitesIntro: "Aqui pode convidar pessoas para aderirem a este site. ",
    InvitesListedBelow: "Os convites que já enviou estão listados abaixo.",
    NoInvites: "Ainda não convidou ninguém.",

    InvitedEmail: "E-mail convidado",
    WhoAccepted: "Membro que aceitou",
    InvAccepted: "Convite aceite",
    InvSent: "Convite enviado",
    JoinedAlready: "Já aderiu",

    SendAnInv: "Convidar pessoas", // was: "Send an Invite",   MISSING I18N all other langs
    SendInv: "Enviar convites",   
    SendInvExpl:  
        "Enviaremos aos seus amigos um e-mail curto. Eles clicarão numa ligação " +
        "para aderir imediatamente, sem necessidade de login. " +
        "Eles tornar-se-ão membros normais, não moderadores ou admins.",
    //EnterEmail: "Enter email(s)",
    InvDone: "Concluído. Vou enviar-lhes um e-mail.",
    NoOneToInv: "Ninguém para convidar.",
    InvNotfLater: "Vou notificá-lo mais tarde, quando os tiver convidado.",
    AlreadyInvSendAgainQ: "Estes já foram convidados — talvez queira convidá-los novamente?",
    InvErr_1: "Estes resultaram em ",
    InvErr_2: "erros",
    InvErr_3: ":",
    TheseJoinedAlrdyC: "Estes já aderiram, por isso não os convidei:",
    ResendInvsQ: "Reenviar convites para estas pessoas? Elas já foram convidadas.",
    InvAgain: "Convidar novamente",

    // ----- Preferences, About

    AboutYou: "Sobre si",
    WebLink: "Qualquer website ou página sua.",

    NotShownCannotChange: "Não mostrado publicamente. Não pode ser alterado.",

    // The full name or alias:
    NameOpt: "Nome (opcional)",

    NotShown: "Não mostrado publicamente.",

    // The username:
    MayChangeFewTimes: "Pode alterá-lo apenas algumas vezes.",
    notSpecified: "(não especificado)",
    ChangeUsername_1: "Pode alterar o seu nome de utilizador apenas algumas vezes.",
    ChangeUsername_2: "Alterá-lo com demasiada frequência pode confundir os outros — " +
        "eles não saberão como mencioná-lo com @.",

    NotfAboutAll: "Ser notificado sobre cada nova publicação (a menos que silencie o tópico ou categoria)",
    NotfAboutNewTopics: "Ser notificado sobre novos tópicos (a menos que silencie a categoria)",

    ActivitySummaryEmails: "E-mails de resumo de atividade",

    EmailSummariesToGroup:
        "Quando os membros deste grupo não visitarem o site, envie-lhes por predefinição e-mails " +
        "com resumos de tópicos populares e outras coisas.",
    EmailSummariesToMe:
        "Quando eu não visitar o site, envie-me e-mails " +
        "com resumos de tópicos populares e outras coisas.",

    AlsoIfTheyVisit: "Envie-lhes e-mails também se eles visitarem o site regularmente.",
    AlsoIfIVisit: "Envie-me e-mails também se eu visitar o site regularmente.",

    HowOftenWeSend: "Com que frequência devemos enviar estes e-mails?",
    HowOftenYouWant: "Com que frequência deseja estes e-mails?",

    // ----- Preferences, Privacy

    HideActivityStrangers_1: "Ocultar a sua atividade recente de estranhos e novos membros?",
    HideActivityStrangers_2: "(Mas não daqueles que são membros ativos há algum tempo.)",
    HideActivityAll_1: "Ocultar a sua atividade recente de todos?",
    HideActivityAll_2: "(Exceto para a equipa e membros nucleares de confiança.)",

    // ----- Preferences, Account

    // About email address:
    EmailAddresses: "Endereços de e-mail",
    PrimaryDot: "Principal. ",
    VerifiedDot: "Verificado. ",
    NotVerifiedDot: "Não verificado. ",
    ForLoginWithDot: (provider: string) => `Para iniciar sessão com ${provider}. `,
    MakePrimary: "Tornar Principal",
    AddEmail: "Adicionar endereço de e-mail",
    TypeNewEmailC: "Escreva um novo endereço de e-mail:",
    MaxEmailsInfo: (numMax: number) => `(Não pode adicionar mais de ${numMax} endereços.)`,
    EmailAdded_1: "Adicionado. Enviámos-lhe um e-mail de verificação — ",
    EmailAdded_2: "verifique a sua caixa de entrada.",
    SendVerifEmail: "Enviar e-mail de verificação",

    EmailStatusExpl:
        "('Principal' significa que pode iniciar sessão através deste endereço e que enviamos notificações para ele. " +
        "'Verificado' significa que clicou numa ligação de verificação num e-mail de verificação de endereço.)",

    // Password:
    ChangePwdQ: "Alterar palavra-passe?",
    CreatePwdQ: "Criar palavra-passe?",
    WillGetPwdRstEml: "Irá receber um e-mail para repor a palavra-passe.",
    // This is the "None" in:  "Password: None"
    PwdNone: "Nenhuma",

    // Logins:
    LoginMethods: "Métodos de início de sessão",
    commaAs: ", como: ",

    // One's data:
    YourContent: "O seu conteúdo",
    DownloadPosts: "Descarregar publicações",
    DownloadPostsHelp: "Cria um ficheiro JSON com uma cópia dos tópicos e comentários que publicou.",
    DownloadPersData: "Descarregar dados pessoais",
    DownloadPersDataHelp: "Cria um ficheiro JSON com uma cópia dos seus dados pessoais, por ex. o seu nome " +
        "(se especificou um nome) e endereço de e-mail.",


    // Delete account:
    DangerZone: "Zona de perigo",
    DeleteAccount: "Eliminar conta",
    DeleteYourAccountQ:
        "Eliminar a sua conta? Removeremos o seu nome, esqueceremos o seu endereço de e-mail, palavra-passe e " +
        "quaisquer identidades online (como o login do Facebook ou Twitter). " +
        "Não poderá iniciar sessão novamente. Isto não pode ser desfeito.",
    DeleteUserQ:
        "Eliminar este utilizador? Removeremos o nome, esqueceremos o endereço de e-mail, palavra-passe e " +
        "identidades online (como o login do Facebook ou Twitter). " +
        "O utilizador não poderá iniciar sessão novamente. Isto não pode ser desfeito.",
    YesDelete: "Sim, eliminar",
  },


  // Group profile page
  gpp: {
    GroupMembers: "Membros do grupo",
    NoMembers: "Sem membros.",
    MayNotListMembers: "Pode não listar membros.",
    AddMembers: "Adicionar Membros",
    BuiltInCannotModify: "Este é um grupo incorporado; não pode ser modificado.",
    NumMembers: (num: number) => `${num} membros`,
    YouAreMember: "É um membro.",
    CustomGroupsC: "Grupos personalizados:",
    BuiltInGroupsC: "Grupos incorporados:",
    DeleteGroup: "Eliminar este grupo",
  },


  // Create user dialog

  cud: {
    CreateUser: "Criar Utilizador",
    CreateAccount: "Criar Conta",
    EmailC: "E-mail:",  
    keptPriv: "será mantido privado",
    forNotfsKeptPriv: "para notificações de resposta, mantido privado",
    EmailVerifBy_1: "O seu e-mail foi verificado por ",
    EmailVerifBy_2: ".",
    UsernameC: "Nome de utilizador:",
    FullNameC: "Nome completo:",
    optName: "opcional",

    // OrCreateAcct_1: "Or ",
    // OrCreateAcct_2: "create an account",
    // OrCreateAcct_3: " with ",
    // OrCreateAcct_4: "@username",
    // OrCreateAcct_5: " & password",

    DoneLoggedIn: "Conta criada. Sessão iniciada.",  // COULD say if verif email sent too?
    AlmostDone:
        "Quase concluído! Só precisa de confirmar o seu endereço de e-mail. " +
        "Enviámos-lhe um e-mail. Por favor, clique na ligação no e-mail para ativar " +
        "a sua conta. Pode fechar esta página.",
  },


  // Accept terms and privacy policy?

  terms: {
    TermsAndPrivacy: "Termos e Privacidade",

    Accept_1: "Aceita os nossos ",
    TermsOfService: "Termos de Serviço",
    TermsOfUse: "Termos de Utilização",
    Accept_2: " e a ",
    PrivPol: "Política de Privacidade",
    Accept_3_User: "?",
    Accept_3_Owner: " para proprietários de sites?",  // (see just below)

    // About "for site owners?" above:
    // That's if someone creates his/her own community, via this software provided as
    // Software-as-a-Service hosting. Then, there is / will-be a bit different
    // Terms-of-Service to agree with, since being a community maintainer/owner, is different
    // (more responsibility) than just signing up to post comments.

    YesAccept: "Sim, eu aceito",
  },


  // Password input

  pwd: {
    PasswordC: "Palavra-passe:",
    StrengthC: "Força: ",
    FairlyWeak: "Bastante fraca.",
    toShort: "demasiado curta",
    TooShort: (minLength: number) => `Demasiado curta. Deve ter pelo menos ${minLength} carateres`,
    PlzInclDigit: "Por favor, inclua um dígito ou carater especial",
    TooWeak123abc: "Demasiado fraca. Não use palavras-passe como '12345' ou 'abcde'.",
    AvoidInclC: "Evite incluir (partes do) seu nome ou e-mail na palavra-passe:",
  },


  // Login dialog

  ld: {
    NotFoundOrPrivate: "Página não encontrada ou Acesso Negado.",

    // This is if you're admin, and click the Impersonate button to become someone else
    // (maybe to troubleshoot problems with his/her account s/he has asked for help about),
    // and then you, being that other user, somehow happen to open a login dialog
    // (maybe because of navigating to a different part of the site that the user being
    // impersonated cannot access) — then, that error message is shown: You're not allowed
    // to login as *someone else* to access that part of the community, until you've first
    // stopped impersonating the first user. (Otherwise, everything gets too complicated.)
    IsImpersonating: "Está a personificar alguém, que pode não ter acesso a todas as partes " +
        "deste website.",

    IfYouThinkExistsThen: "Se acha que a página existe, inicie sessão como alguém que possa aceder a ela. ",
    LoggedInAlready: "(Já tem sessão iniciada, mas talvez seja a conta errada?) ",
    ElseGoToHome_1: "Caso contrário, pode ",
    ElseGoToHome_2: "ir para a página inicial.",

    CreateAcconut: "Criar conta",
    ContinueWithDots: "Continuar com ...",
    SignUp: "Aderir",
    LogIn: "Iniciar sessão",
    LogInWithPwd: "Iniciar sessão com Palavra-passe",
    CreateAdmAcct: "Criar conta de administrador:",
    AuthRequired: "Autenticação obrigatória para aceder a este site",
    LogInToLike: "Inicie sessão para Gostar desta publicação",
    LogInToSubmit: "Inicie sessão e submeta",
    LogInToComment: "Inicie sessão para escrever um comentário",
    LogInToCreateTopic: "Inicie sessão para criar um tópico",

    //AlreadyHaveAcctQ: "You have an account? ",  
    OrLogIn_1: "Ou ",         // "Or "
    OrLogIn_2: "Inicie sessão",      // "Log in" (this is a button)
    OrLogIn_3: " em vez disso",    // " instead"

    //NewUserQ: "New user? ",
    SignUpInstead_1: "Ou ",
    SignUpInstead_2: "Crie uma conta", // (this is a button)
    SignUpInstead_3: "",

    OrTypeName_1: ", ou apenas ",
    OrTypeName_2: "escreva um nome",   // is a button
    OrTypeName_3: "",

    OrCreateAcctHere: "Ou criar conta:",
    OrTypeName: "Ou escreva o seu nome:",
    OrLogIn: "Ou inicie sessão:",
    YourNameQ: "O seu nome?",

    BadCreds: "Nome de utilizador ou palavra-passe incorretos",

    UsernameOrEmailC: "Nome de utilizador ou e-mail:",
    PasswordC: "Palavra-passe:",
    ForgotPwd: "Esqueceu-se da sua palavra-passe?",

    NoPwd: "Ainda não escolheu uma palavra-passe.",
    CreatePwd: "Criar palavra-passe",
  },


  // Flag dialog

  fd: {
    PleaseTellConcerned: "Por favor, diga-nos o que o preocupa.",
    ThanksHaveReported: "Obrigado. Reportou o conteúdo. A equipa do fórum irá analisar.",
    ReportComment: "Reportar Comentário",
    // Different reasons one can choose among when reporting a comment:
    OptPersonalData: "Esta publicação contém dados pessoais, por exemplo, o nome real de alguém.",
    OptOffensive: "Esta publicação contém conteúdo ofensivo ou abusivo.",
    OptSpam: "Esta publicação é um anúncio indesejado.",
    OptOther: "Notificar a equipa sobre esta publicação por outro motivo.",
  },


  // Help message dialog (as in "Tips", not "Private message").
  help: {
    YouCanShowAgain_1: "Pode mostrar as mensagens de ajuda novamente, se tiver sessão iniciada, " +
        "clicando no seu nome e depois em ",
    YouCanShowAgain_2: "Mostrar mensagens de ajuda",
  },


  // Editor

  e: {
    SimilarTopicsC: "Tópicos semelhantes:",

    //WritingSomethingWarning: "You were writing something?",
    UploadMaxOneFile: "Desculpe, mas atualmente só pode carregar um ficheiro de cada vez",
    PleaseFinishPost: "Por favor, termine primeiro de escrever a sua publicação",
    PleaseFinishChatMsg: "Por favor, termine primeiro de escrever a sua mensagem de chat",
    PleaseFinishMsg: "Por favor, termine primeiro de escrever a sua mensagem",
    PleaseSaveEdits: "Por favor, guarde primeiro as suas edições atuais",
    PleaseSaveOrCancel: "Por favor, guarde ou cancele primeiro o seu novo tópico",
    CanContinueEditing: "Pode continuar a editar o seu texto, se abrir o editor novamente.",
        //"(But the text will currently be lost if you leave this page.)",
    PleaseDontDeleteAll: "Por favor, não apague todo o texto. Escreva algo.",
    PleaseWriteSth: "Por favor, escreva algo.",
    PleaseWriteTitle: "Por favor, escreva um título para o tópico.",
    PleaseWriteMsgTitle: "Por favor, escreva um título para a mensagem.",
    PleaseWriteMsg: "Por favor, escreva uma mensagem.",

    exBold: "texto em negrito",
    exEmph: "texto enfatizado",
    exPre: "texto pré-formatado",
    exQuoted: "texto citado",
    ExHeading: "Título",

    TitlePlaceholder: "Escreva um título — sobre o que é isto, numa frase curta?",

    EditPost_1: "Editar ",
    EditPost_2: "publicação ",

    TypeChatMsg: "Escreva uma mensagem de chat:",
    YourMsg: "A sua mensagem:",
    CreateTopic: "Criar novo tópico",
    CreateCustomHtml: "Criar uma página HTML personalizada (adicione o seu próprio título <h1>)",
    CreateInfoPage: "Criar uma página de informações",
    CreateCode: "Criar uma página de código fonte",
    AskQuestion: "Fazer uma pergunta",
    ReportProblem: "Reportar um problema",
    SuggestIdea: "Sugerir uma ideia",
    NewChat: "Título e objetivo do chat",  
    NewPrivChat: "Título e objetivo do chat privado",  
    AppendComment: "Adicionar um comentário no fim da página:",

    ReplyTo: "Responder a ",
    ReplyTo_theOrigPost: "à Publicação Original",
    ReplyTo_post: "à publicação ",
    AddCommentC: "Adicionar um comentário:",   

    PleaseSelectPosts: "Por favor, selecione uma ou mais publicações para responder.",

    Save: "Guardar",
    edits: "edições",

    PostReply: "Publicar resposta",
    PostComment: "Publicar comentário",

    Post: "Publicar",
    comment: "comentário",
    question: "pergunta",

    PostMessage: "Publicar mensagem",
    SimpleEditor: "Editor simples",

    Send: "Enviar",
    message: "mensagem",

    Create: "Criar",
    page: "página",
    chat: "chat",
    idea: "ideia",
    topic: "tópico",

    Submit: "Submeter",
    problem: "problema",

    ViewOldEdits: "Ver edições antigas",

    UploadBtnTooltip: "Carregar um ficheiro ou imagem",
    BoldBtnTooltip: "Tornar o texto negrito",
    EmBtnTooltip: "Enfatizar",
    QuoteBtnTooltip: "Citar",
    PreBtnTooltip: "Texto pré-formatado",
    HeadingBtnTooltip: "Título",

    TypeHerePlaceholder: "Escreva aqui. Pode usar Markdown e HTML. Arraste e largue para colar imagens.",

    Maximize: "Maximizar",
    ToNormal: "Voltar ao normal",
    TileHorizontally: "Lado a lado horizontalmente",

    PreviewC: "Pré-visualização:",
    TitleExcl: " (título excluído)",
    ShowEditorAgain: "Mostrar editor novamente",
    Minimize: "Minimizar",

    PreviewInfo: "Aqui pode pré-visualizar como a sua publicação irá aparecer.",
    CannotType: "Não pode escrever aqui.",

    LoadingDraftDots: "A carregar rascunho...",
    DraftUnchanged: "Sem alterações.",
    CannotSaveDraftC: "Não é possível guardar o rascunho:",
    DraftSavedBrwsr: "Rascunho guardado, no navegador.",   
    DraftSaved: (nr: string | number) => `Rascunho ${nr} guardado.`,
    DraftDeleted: (nr: string | number) => `Rascunho ${nr} eliminado.`,
    WillSaveDraft: (nr: string | number) => `Irá guardar o rascunho ${nr} ...`,
    SavingDraft: (nr: string | number) => `A guardar rascunho ${nr} ...`,
    DeletingDraft: (nr: string | number) => `A eliminar rascunho ${nr} ...`,
  },


  // Select category dropdown

  scd: {
    SelCat: "Selecionar categoria",
  },

  // Page type dropdown

  pt: {
    SelectTypeC: "Selecionar tipo de tópico:",
    DiscussionExpl: "Uma discussão sobre algo.",
    QuestionExpl: "Uma resposta pode ser marcada como a resposta aceite.",
    ProblExpl: "Se algo está estragado ou não funciona. Pode ser marcado como corrigido/resolvido.",
    IdeaExpl: "Uma sugestão. Pode ser marcada como feita/implementada.",
    ChatExpl: "Uma conversa talvez sem fim.",
    PrivChatExpl: "Apenas visível para pessoas que sejam convidadas para aderir ao chat.",

    CustomHtml: "Página HTML personalizada",
    InfoPage: "Página de informações",
    Code: "Código",
    EmbCmts: "Comentários incorporados",
    About: "Sobre",
    PrivChat: "Chat Privado",
    Form: "Formulário",
  },


  // Join sub community dialog

  jscd: {
    NoMoreToJoin: "Não há mais comunidades para aderir.",
    SelCmty: "Selecionar comunidade ...",
  },


  // Search dialogs and the search page.

  s: {
    SearchForHelp: "Procurar ajuda",  
    TxtToFind: "Texto a pesquisar",
  },


  // No internet

  ni: {
    NoInet: "Sem ligação à internet",
    PlzRefr: "Atualize a página para ver as alterações mais recentes. (Houve uma desconexão)",
    RefrNow: "Atualizar agora",
  },


  PostDeleted: (postNr: number) => `Essa publicação, n.º ${postNr}, foi eliminada.`,
  NoSuchPost: (postNr: number) => `Não existe a publicação n.º ${postNr} nesta página.`,
  NoPageHere: "Esta página foi eliminada, ou nunca existiu, ou não tem permissão para lhe aceder.",
  GoBackToLastPage: "Voltar à página anterior",

};
