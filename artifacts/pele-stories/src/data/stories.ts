export interface Story {
  id: number;
  title: string;
  headline: string;
  content: string;
  statBadge?: string;
  quote?: string;
  bgClass: string;
  bgImage: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "O Rei do Futebol",
    headline: "Pelé: O Rei do Futebol",
    content: "Nascido Edson Arantes do Nascimento em 23 de outubro de 1940, em Três Corações, Minas Gerais. Seu pai, Dondinho, também era jogador de futebol. Criado na pobreza em Bauru, São Paulo, ele engraxava sapatos e vendia amendoim para sobreviver. Seu pai o chamava de \"Dico\" — o apelido \"Pelé\" veio de colegas de escola, um nome que ele, na verdade, odiava quando criança.",
    bgClass: "bg-emerald-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg"
  },
  {
    id: 2,
    title: "Infância Humilde",
    headline: "Da Pobreza ao Prodígio",
    content: "Crescendo em Bauru, São Paulo, Pelé não tinha dinheiro para uma bola de verdade. Ele jogava com meias enroladas e toranjas nas ruas. Aos 11 anos, foi descoberto pelo ex-internacional brasileiro Waldemar de Brito, que o treinou e declarou que um dia ele seria \"o maior jogador de futebol do mundo\".",
    bgClass: "bg-amber-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pel%C3%A9_1960.jpg/500px-Pel%C3%A9_1960.jpg"
  },
  {
    id: 3,
    title: "Santos FC",
    headline: "Santos FC: Uma Lenda Nasce",
    content: "Pelé entrou no Santos FC em 1956, com apenas 15 anos. Marcou gol em sua estreia e nunca olhou para trás. Passou 18 anos no Santos, marcando 643 gols em 659 jogos oficiais. Com o Santos, conquistou 6 Campeonatos Brasileiros e 2 Copas Libertadores (1962 e 1963). O Santos viajou o mundo — países inteiros declaravam tréguas em guerras para assistir Pelé jogar.",
    bgClass: "bg-slate-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pele_Netherlands_1962_%28cropped%29.jpg/500px-Pele_Netherlands_1962_%28cropped%29.jpg"
  },
  {
    id: 4,
    title: "Copa do Mundo 1958",
    headline: "Com 17 Anos, Conquistou o Mundo",
    content: "Na Copa do Mundo de 1958, na Suécia, o jovem Pelé de 17 anos tornou-se o mais jovem jogador a marcar em uma final de Copa do Mundo. Ele marcou 6 gols no torneio, incluindo um hat-trick incrível na semifinal contra a França e 2 gols na final contra a Suécia. O Brasil venceu por 5 a 2. Pelé chorou de alegria — e o mundo chorou com ele.",
    statBadge: "6 gols aos 17 anos",
    bgClass: "bg-neutral-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/1958_VM-final_Sverige-Brasilien.jpg/500px-1958_VM-final_Sverige-Brasilien.jpg"
  },
  {
    id: 5,
    title: "Copa do Mundo 1962",
    headline: "Lesionado, Mas Ainda Campeão",
    content: "Na Copa do Mundo de 1962, no Chile, Pelé se lesionou no segundo jogo e não pôde mais atuar. Mesmo assim, o Brasil venceu — um testemunho da equipe que ele havia ajudado a construir. Ele voltou para casa campeão, mesmo observando das arquibancadas. Seu legado já era maior do que qualquer torneio.",
    bgClass: "bg-emerald-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/PEL%C3%89_-_1963_%28cropped%29.jpg"
  },
  {
    id: 6,
    title: "Copa do Mundo 1966",
    headline: "Derrubado em Campo",
    content: "A Copa do Mundo de 1966, na Inglaterra, foi um capítulo sombrio. Pelé foi alvo de faltas brutais — especialmente por jogadores de Portugal — e o Brasil foi eliminado na fase de grupos. Um Pelé machucado e humilhado jurou que nunca mais jogaria em uma Copa do Mundo. Mais tarde, mudou de ideia.",
    quote: "Estou saindo da Copa do Mundo e nunca mais jogarei em outra.",
    bgClass: "bg-rose-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Panini_pele_photo_only.jpg"
  },
  {
    id: 7,
    title: "Copa do Mundo 1970",
    headline: "A Maior Equipe de Todos os Tempos",
    content: "A seleção brasileira de 1970 é amplamente considerada a maior equipe internacional da história. Pelé, Tostão, Jairzinho, Rivelino, Gerson — uma escalação de lendas. Pelé marcou 4 gols e fez jogadas icônicas, incluindo o famoso drible sobre o goleiro do Uruguai que deixou o arqueiro no chão. O Brasil conquistou a Taça Jules Rimet definitivamente com uma vitória por 4 a 1 sobre a Itália na final.",
    statBadge: "3x Campeão Mundial",
    bgClass: "bg-neutral-900",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pele_celebrating_1970.jpg/960px-Pele_celebrating_1970.jpg"
  },
  {
    id: 8,
    title: "O Milésimo Gol",
    headline: "1.000 Gols: Um Número que Ninguém Acreditava",
    content: "Em 19 de novembro de 1969, Pelé marcou seu milésimo gol na carreira — um pênalti contra o Vasco da Gama, no Maracanã, com 80.000 torcedores em lágrimas. Ele apontou para o céu e chorou. Oficialmente, a FIFA reconhece 1.281 gols em 1.363 jogos — o maior número de qualquer jogador profissional na história do futebol.",
    statBadge: "1.281 gols na carreira",
    bgClass: "bg-black",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Brazil_1970.JPG/500px-Brazil_1970.JPG"
  },
  {
    id: 9,
    title: "Nova Iorque",
    headline: "Levando o Futebol para os Estados Unidos",
    content: "Em 1975, após se aposentar do Santos, Pelé assinou um surpreendente contrato de 7 milhões de dólares com o New York Cosmos da Liga Norte-Americana de Futebol — algo inédito na época. Ele ajudou a popularizar o futebol nos Estados Unidos, atraindo multidões imensas. Aposentou-se definitivamente em 1977, após a vitória do Cosmos no Soccer Bowl, com seu último jogo assistido por 75.000 torcedores e milhões pela televisão.",
    bgClass: "bg-blue-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pele_debut_v_tornado.jpg"
  },
  {
    id: 10,
    title: "O Legado",
    headline: "O Maior de Todos os Tempos",
    content: "Eleito Jogador do Século pela FIFA ao lado de Diego Maradona. Nomeado Atleta do Século pelo Comitê Olímpico Internacional. Tricampeão da Copa do Mundo da FIFA (1958, 1962, 1970). Nomeado Ministro Extraordinário do Esporte do Brasil em 1995. Embaixador de Boa Vontade da UNICEF. O único jogador a conquistar três Copas do Mundo. Seu nome é sinônimo do futebol.",
    statBadge: "Jogador do Século pela FIFA",
    bgClass: "bg-amber-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pele_libro_elegido.jpg"
  },
  {
    id: 11,
    title: "A Pessoa",
    headline: "O Homem Por Trás do Mito",
    content: "Pelé foi casado três vezes e teve 7 filhos. Era conhecido por seu calor humano, humor e fé profunda. Apesar da fama e da riqueza globais, ele nunca esqueceu suas origens — retornou frequentemente a Bauru e defendeu as comunidades pobres que o formaram como pessoa.",
    bgClass: "bg-stone-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Pel%C3%A9_%26_Lula.jpg/960px-Pel%C3%A9_%26_Lula.jpg"
  },
  {
    id: 12,
    title: "A Despedida",
    headline: "O Último Capítulo de um Rei",
    content: "Em seus últimos anos, Pelé enfrentou câncer de cólon e insuficiência renal. Foi internado diversas vezes a partir de 2021. Em 29 de dezembro de 2022, Edson Arantes do Nascimento — Pelé — faleceu aos 82 anos, em São Paulo. O Brasil decretou três dias de luto nacional. Seu corpo ficou em velório no estádio Vila Belmiro, onde 230.000 pessoas foram prestar suas homenagens. O mundo voltou a chorar.",
    bgClass: "bg-zinc-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Inaugura%C3%A7%C3%A3o_da_est%C3%A1tua_.jpg/960px-Inaugura%C3%A7%C3%A3o_da_est%C3%A1tua_.jpg"
  },
  {
    id: 13,
    title: "Para Sempre",
    headline: "O Rei Vive Para Sempre",
    content: "\"Pelé não é apenas um nome. Ele não é apenas um jogador. Ele é uma ideia — a ideia de que beleza e excelência podem coexistir, que o esporte pode transcender todas as barreiras. Ele é o motivo pelo qual bilhões de pessoas amam o futebol.\" — homenagens vieram de Messi, Ronaldo, Mbappé, Neymar e líderes mundiais. O Rei. Para sempre.",
    bgClass: "bg-black",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Carlos_Alberto_comforts_Pel%C3%A9_at_his_final_game_1977.jpg/500px-Carlos_Alberto_comforts_Pel%C3%A9_at_his_final_game_1977.jpg"
  }
];
