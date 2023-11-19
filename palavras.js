const Palavras = 
    [
    "sagaz", "amago", "negro", "termo", "exito", "mexer", "nobre", "senso", "afeto", "algoz",
    "etica", "plena", "mutua", "tenue", "fazer", "assim", "vigor", "sutil", "aquem", "porem",
    "secao", "fosse", "sanar", "poder", "audaz", "ideia", "cerne", "inato", "moral", "sobre",
    "desde", "muito", "justo", "honra", "quica", "torpe", "sonho", "razao", "futil", "etnia",
    "icone", "anexo", "amigo", "egide", "tange", "lapso", "haver", "expor", "mutuo", "dengo",
    "tempo", "casal", "entao", "habil", "seara", "bocal", "avido", "ardil", "pesar", "saber",
    "causa", "graca", "dizer", "genro", "posse", "coser", "paria", "dever", "brado",
    "tenaz", "prole", "sendo", "crivo", "corja", "comum", "temor", "detem", "ainda", "animo",
    "apice", "ceder", "ansia", "estar", "digno", "pauta", "assaz", "xibiu", "culto", "mundo",
    "atroz", "fugaz", "censo", "gleba", "forte", "vicio", "vulgo", "cozer", "valha", "denso",
    "nenem", "reves", "pudor", "criar", "dogma", "saúde", "regra", "louco", "jeito", "mesmo",
    "atras", "ordem", "clava", "round", "banal", "impor", "merce", "pedir", "homem", "feliz",
    "todos", "apraz", "coisa", "usura", "tenro", "desse", "sabio", "juizo", "pifio", "servo",
    "limbo", "prosa", "forma", "presa", "falar", "viril", "ontem", "cunho", "reaca", "devir",
    "posso", "manso", "meiga", "certo", "vendo", "heroi", "valor", "fluir", "ebrio", "magoa",
    "afago", "serio", "acaso", "visar", "puder", "plato", "guisa", "falso", "lugar", "facil",
    "temer", "legal", "garbo", "impio", "abrir", "afins", "cisma", "pleno", "bruma", "obter",
    "gerar", "obvio", "matiz", "exodo", "praxe", "crise", "burro", "linda", "fluxo", "senil",
    "venia", "uniao", "havia", "tedio", "enfim", "ritmo", "ajuda", "tomar", "visao", "morte",
    "olhar", "alibi", "brega", "parvo", "levar", "genio", "casta", "favor", "bravo", "pulha",
    "prumo", "vital", "reter", "valia", "reles", "parco", "vivaz", "falta", "grato", "laico",
    "tecer", "possa", "cabal", "sabia", "ameno", "ouvir", "nocao", "carma", "ranco", "viver",
    "calma", "nicho", "passo", "achar", "forca", "prime", "obito", "outro", "noite", "fator",
    "selar", "tendo", "facam", "rogar", "pobre", "unico", "fardo", "coeso", "anelo", "farsa",
    "ativo", "terra", "epico", "rever", "citar", "dubio", "sinto", "cisao", "adiar", "sonso",
    "ciume", "leigo", "sesta", "haste", "gente", "humor", "cesta", "tende", "deter", "claro",
    "sulco", "velho", "revel", "exato", "amplo", "atuar", "vemos", "arduo", "labor", "lavra",
    "feixe", "ponto", "igual", "ideal", "marco", "papel", "imune", "lider", "gesto", "debil",
    "fonte", "otica", "hiato", "terno", "cauda", "ficar", "ambos", "senao", "remir", "vazio",
    "capaz", "toada", "vacuo", "varao", "sonsa", "jovem", "inata", "tanto", "tenra", "cocar",
    "velar", "xeque", "apoio", "cacar", "nossa", "algum", "relva", "fusao", "serie", "horda",
    "leito", "advem", "farao", "pouco", "raiva", "probo", "doido", "entre", "vimos", "sente",
    "coesa", "chuva", "frase", "feito", "minha", "torco", "ciclo", "verso", "anuir", "botar",
    "rigor", "cruel", "massa", "brisa", "blase", "impar", "dorso", "chata", "trama", "signo",
    "prece", "carro", "lazer", "mocao", "maior", "credo", "fauna", "covil", "preso", "pegar",
    "casto", "morar", "furor", "peste", "ambas", "sorte", "seita", "flora", "docil", "faina",
    "adeus", "livro", "vetor", "houve", "arido", "virus", "setor", "senda", "liame", "comer",
    "manha", "meses", "pecha", "plano", "nunca", "peixe", "ardor", "ocaso", "beata", "alias",
    "aceso", "vulto", "visse", "salvo", "banzo", "saiba", "vasto", "breve", "antro", "morro",
    "rezar", "pajem", "birra", "saida", "praia", "prado", "reger", "mudar", "junto", "otimo",
    "avaro", "segue", "sinal", "parte", "motim", "campo", "aureo", "atomo", "serao", "lenda",
    "grupo", "chulo", "risco", "anais", "andar", "acima", "opcao", "agora", "fugir", "brava",
    "nacao", "treta", "parar", "leite", "rapaz", "fruir", "antes", "fitar", "vilao", "idolo",
    "jazia", "prazo", "tenso", "puxar", "gerir", "aurea", "alude", "texto", "conta", "norma",
    "tirar", "tosco", "reino", "bando", "ancia", "epoca", "verbo", "exame", "malta", "indio",
    "psico", "oxala", "arcar", "sinha", "estao", "corpo", "aviao", "filho", "preto", "prova",
    "aonde", "praga", "traga", "cheio", "festa", "quase", "venal", "fatal", "voraz", "quota",
    "certa", "atrio", "turba", "logro", "acesa", "manha", "apego", "copia", "fatos", "oasis",
    "fixar", "soldo", "sumir", "sarca", "ligar", "pompa", "coito", "nivel", "nodoa", "caixa",
    "magia", "alado", "messe", "afora", "mente", "perda", "dessa", "tocar", "tinha", "solto",
    "virao", "parca", "fraco", "livre", "lindo", "verve", "apelo", "jirau", "lidar", "nosso",
    "grave", "turva", "glosa", "exijo", "firme", "opaco", "longe", "sabia", "vezes", "bater",
    "sexta", "doido", "faixa", "trupe", "parva", "pardo", "fenda", "elite", "astro", "salve",
    "navio", "grata", "alcar", "viria", "autor", "supra", "porta", "irmao", "ficha", "pique",
    "etico", "bonus", "atual", "canon", "cioso", "deixa", "reses", "junco", "besta", "bicho",
    "douto", "macio", "retem", "calda", "abuso", "pagao", "abriu", "verba", "cousa", "curso",
    "judeu", "posto", "bioma", "prive", "locus", "caber", "molho", "supor", "radio", "torso",
    "drops", "video", "extra", "desta", "light", "culpa", "menos", "zelar", "vosso", "calao",
    "combo", "júlia", "asilo", "vinha", "igneo", "orfao", "baixo", "gosto", "turvo", "chato",
    "ruina", "agudo", "suave", "advir", "super", "aluno", "pisar", "facho", "sitio", "estio",
    "ereto", "traco", "turma", "rouca", "acões", "podio", "finda", "peito", "pilar", "chama",
    "amena", "lapis", "mosto", "paira", "facto", "meigo", "brabo", "piada", "surja", "cútis",
    "museu", "refem", "tento", "autos", "louca", "rumor", "local", "mesma", "feudo", "acola",
    "cocho", "passa", "avida", "urgia", "pareo", "geral", "optar", "tetra", "drama", "lasso",
    "metie", "clean", "poema", "boato", "hobby", "folga", "coral", "forem", "medir", "teste",
    "poeta", "clima", "pacto", "ateia", "rubro", "crime", "feroz", "golpe", "ponha", "movel",
    "busca", "monge", "cetro", "tacha", "aviso", "licao", "idoso", "acude", "calmo", "amiga",
    "cacho", "daqui", "vigia", "aroma", "penta", "monte", "letal", "carta", "verde", "riste",
    "hoste", "ecoar", "plumo", "pasmo", "vetar", "briga", "tribo", "falha", "troca", "rival", 
    "conto", "fazia", "forum", "ebano", "pedra", "roupa", "tarde", "escol", "plebe", "lesse", 
    "súcia", "manga", "grama", "casar", "chefe", "venha", "artur", "finjo", "corso", "saldo", 
    "única", "fruto", "axila", "benca", "civil", "sosia", "itens", "plaga", "macro", "vento", 
    "atimo", "manga", "úteis", "arado", "farta", "berro", "ornar", "virar", "pinho", "nuvem",
    "perco", "troca", "magna", "legua", "viram", "beijo", "catre", "bruta", "fosso", "vazao",
    "amada", "tiver", "seixo", "giria", "volta", "jejum", "traje", "orgao", "deste", "stand",
    "areia", "ticao", "assar", "estro", "perto", "bruto", "trato", "inter", "renda", "guria",
    "tutor", "midia", "surto", "amado", "porte", "canso", "gabar", "feita", "jogar", "tchau",
    "recem", "natal", "rural", "bazar", "arfar", "nesse", "silvo", "vedar", "ambar", "depor",
    "irado", "grota", "pomar", "close", "cifra", "todas", "vadio", "rocha", "fossa", "bucho",
    "laudo", "odiar", "pavor", "regio", "nesta", "clero", "negar", "aviar", "xucro", "visto",
    "vagar", "bolsa", "minar", "canto", "segar", "mamae", "densa", "etapa", "deram", "logos",
    "lesao", "santo", "molde", "ferpa", "cenho", "cinto", "marca", "vista", "nessa", "tenha",
    "proto", "chula", "inves", "pasma", "paiol", "horto", "sotao", "largo", "ruido", "cheia",
    "cerca", "morfo", "varoa", "troco", "velha", "urdir", "burra", "penso", "agape", "calor",
    "verao", "lesto", "coroa", "pugna", "vasta", "salmo", "podar", "letra", "úbere", "simio",
    "final", "ufano", "esgar", "fundo", "ceita", "mocho", "ileso", "trago", "frota", "linha",
    "narco", "jazer", "polis", "civel", "bulir", "úmido", "folha", "danca", "ardis", "apear",
    "piche", "preco", "resto", "troco", "neste", "manto", "matar", "alamo", "queda", "misto",
    "peita", "redor", "audio", "cosmo", "monta", "seiva", "folia", "labia", "banto", "barro",
    "mover", "chaga", "bolso", "pedro", "sofia", "album", "barao", "limpo", "macho", "retro",
    "campa", "logia", "calvo", "justa", "gemer", "porca", "punha", "axial", "venho", "louro",
    "lutar", "farol", "findo", "arroz", "demao", "mimar", "nacar", "chave", "sabor", "veloz",
    "fazes", "canil", "bedel", "calca", "salva", "enjoo", "rente", "baixa", "falsa", "lucro",
    "firma", "longo", "lousa", "vazia", "torna", "coevo", "zumbi", "solta", "outra", "sigla",
    "ousar", "miope", "gueto", "fugiu", "forro", "louca", "reler", "dados", "farto", "toque",
    "sexto", "nariz", "urgir", "subir", "tumba", "disso", "valer", "corar", "fatuo", "vario",
    "quais", "penca", "samba", "custo", "bruxa", "repor", "mania", "pagar", "sabia", "xampu",
    "diabo", "modal", "olhos", "cardo", "pluma", "lento", "sugar", "corte", "versa", "hifen",
    "bugre", "sadio", "cacto", "passe", "harem", "choca", "nesga", "ferir", "ultra", "obtem",
    "socio", "quite", "usual", "ceifa", "staff", "cargo", "sarau", "latir", "varal",
    "morto", "furia", "marte", "minas", "ostra", "preta", "cravo"
    ]

export default Palavras;