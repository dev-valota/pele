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
    content:
      "Edson Arantes do Nascimento, o Pelé, é considerado o maior jogador da história do futebol. Nasceu em 23 de outubro de 1940, em Três Corações, Minas Gerais. É filho de João Ramos do Nascimento, o Dondinho, também ex-jogador, e de Celeste Arantes do Nascimento. Popularmente chamado de Rei do Futebol, ele faleceu aos 82 anos, em 29 de dezembro de 2022, em São Paulo.",
    bgClass: "bg-emerald-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pele_con_brasil_%28cropped%29.jpg",
  },
  {
    id: 2,
    title: "A Origem do Apelido",
    headline: "Como surgiu o nome Pelé?",
    content:
      'Aos quatro anos, Edson mudou-se com a família para Bauru, em São Paulo. Influenciado pelo pai, ele sempre foi fã de futebol e gostava de atuar no gol, inspirado no goleiro Bilé, amigo do pai. Como não conseguia pronunciar o nome Bilé corretamente, falava algo como "Seguuura, Pilééé!" durante os jogos. Os amigos passaram a chamá-lo de Pelé. Ele não gostou do apelido, e foi exatamente aí que o nome pegou.',
    bgClass: "bg-amber-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pel%C3%A9_1960.jpg/500px-Pel%C3%A9_1960.jpg",
  },
  {
    id: 3,
    title: "Santos Futebol Clube",
    headline: "Uma Lenda Nasce no Santos",
    content:
      'Em 1956, com 16 anos, Pelé chegou ao Santos como promessa de Waldemar de Brito, que afirmou ao clube: "Esse menino vai ser o melhor jogador de futebol do mundo!". Em sua estreia profissional, contra o Corinthians de Santo André, o Santos venceu por 7 a 1 e Pelé marcou o sexto gol. Ainda com 16 anos, tornou-se artilheiro do Campeonato Paulista, com 36 gols. No total, fez 1.116 jogos e marcou 1.091 gols pelo Santos.',
    bgClass: "bg-slate-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pele_Netherlands_1962_%28cropped%29.jpg/500px-Pele_Netherlands_1962_%28cropped%29.jpg",
  },
  {
    id: 4,
    title: "Copa do Mundo 1958",
    headline: "Com 17 Anos, Conquistou o Mundo",
    content:
      "Na Copa de 1958, na Suécia, Pelé tornou-se o jogador mais jovem a vencer uma Copa do Mundo, com apenas 17 anos e 8 meses. Fez seis gols no torneio e foi artilheiro do Brasil. Curiosamente, como era reserva, a FIFA atribuiu aleatoriamente a ele a camisa 10, número que ficou eternizado em suas costas. Os franceses foram os primeiros a chamá-lo de Rei do Futebol.",
    statBadge: "6 gols aos 17 anos",
    bgClass: "bg-neutral-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/1958_VM-final_Sverige-Brasilien.jpg/500px-1958_VM-final_Sverige-Brasilien.jpg",
  },
  {
    id: 5,
    title: "Copa do Mundo 1962",
    headline: "Lesionado, Mas Ainda Campeão",
    content:
      "Na Copa de 1962, no Chile, Pelé marcou um gol antológico logo no primeiro jogo, contra o México. Porém, sofreu uma contusão no segundo jogo e ficou fora do restante do torneio. A sorte do Brasil era que havia outras estrelas como Nílton Santos, Didi, Zagallo, Vavá e Garrincha, que garantiram o bicampeonato. Pelé voltou para casa campeão, mesmo observando das arquibancadas.",
    bgClass: "bg-emerald-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/5/5a/PEL%C3%89_-_1963_%28cropped%29.jpg",
  },
  {
    id: 6,
    title: "Nigéria, 1969",
    headline: "O Dia em que Pelé Parou uma Guerra",
    content:
      "Em 1969, durante uma excursão do Santos pela África, a delegação foi à Nigéria em meio à Guerra de Biafra. A presença de Pelé teria motivado uma trégua para a realização do amistoso em Benin City, episódio que ficou eternizado como o dia em que o Pelé parou uma guerra. A história ganhou força com o passar dos anos e virou símbolo do alcance mundial de Pelé, embora o cessar-fogo nunca tenha sido confirmado oficialmente por registros históricos.",
    bgClass: "bg-rose-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pele_Netherlands_1962_%28cropped%29.jpg/500px-Pele_Netherlands_1962_%28cropped%29.jpg",
  },
  {
    id: 7,
    title: "Copa do Mundo 1970",
    headline: "A Maior Equipe de Todos os Tempos",
    content:
      "A seleção de 1970, no México, é amplamente considerada a melhor de todos os tempos. Além de Pelé, o time tinha Jairzinho, Rivelino, Carlos Alberto, Clodoaldo, Tostão, Gérson e Félix. Pelé marcou 4 gols, incluindo o primeiro da final contra a Itália. O Brasil venceu por 4 a 1 e conquistou o tricampeonato. Jairzinho foi o artilheiro com sete gols, mas Pelé foi a alma daquela equipe histórica.",
    statBadge: "Tricampeão Mundial",
    bgClass: "bg-neutral-900",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pele_celebrating_1970.jpg/960px-Pele_celebrating_1970.jpg",
  },
  {
    id: 8,
    title: "O Milésimo Gol",
    headline: "1.000 Gols: Um Feito Histórico",
    content:
      "Em 19 de novembro de 1969, Pelé marcou seu milésimo gol na carreira em uma cobrança de pênalti contra o Vasco da Gama, no Maracanã, com 80.000 torcedores em lágrimas. Ele apontou para o céu e chorou. De acordo com o Guinness Book, Pelé marcou 1.281 gols ao longo de sua carreira, sendo o maior artilheiro da história do futebol profissional. Pela Seleção Brasileira, foram 95 gols, ainda o maior artilheiro da história da equipe masculina.",
    statBadge: "1.281 gols na carreira",
    bgClass: "bg-black",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Brazil_1970.JPG/500px-Brazil_1970.JPG",
  },
  {
    id: 9,
    title: "New York Cosmos",
    headline: "Levando o Futebol aos Estados Unidos",
    content:
      "Em 1975, após se aposentar do Santos, Pelé assinou contrato com o New York Cosmos da NASL. A chegada gerou um impacto enorme: o público médio saltou de 3.578 pessoas por jogo em 1974 para 34.142 em 1977. Em 1976, chegaram Beckenbauer e Chinaglia para reforçar o time, e Pelé foi eleito o MVP da liga. No Cosmos, fez 106 partidas e marcou 64 gols. Em 1977, ao lado de Carlos Alberto Torres, foi campeão da NASL.",
    bgClass: "bg-blue-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pele_debut_v_tornado.jpg",
  },
  {
    id: 10,
    title: "Curiosidades",
    headline: "Fatos que Poucos Conhecem",
    content:
      "Pelé é formado em Educação Física pela Universidade Metropolitana de Santos. Aos 18 anos, alistou-se no Exército Brasileiro e era chamado de Soldado 201 Nascimento. Em 1969, o Santos viajou à Nigéria durante a Guerra de Biafra e o governo nigeriano decretou um cessar-fogo para que a equipe pudesse jogar em segurança. Em 1995, Pelé foi nomeado Ministro do Esporte e criou a Lei Pelé, que extinguiu o passe dos jogadores e transformou os clubes em empresas.",
    bgClass: "bg-amber-950",
    bgImage: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pele_libro_elegido.jpg",
  },
  {
    id: 11,
    title: "Vida Pessoal",
    headline: "O Homem Por Trás do Mito",
    content:
      "Pelé foi casado três vezes. O primeiro casamento, com Rosemari Cholbi (1966 a 1978), rendeu três filhos: Kelly Cristina, Jennifer e Edson (Edinho). O segundo casamento foi com a cantora gospel Assíria Lemos Seixas (1994 a 2008), com quem teve os gêmeos Celeste e Joshua. Em 2016, oficializou a união com Marcia Cibele Aoki. Em 1996, reconheceu judicialmente a filha Sandra Regina. Fora dos casamentos, teve ainda a filha Flávia Kurtz.",
    bgClass: "bg-stone-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Pel%C3%A9_%26_Lula.jpg/960px-Pel%C3%A9_%26_Lula.jpg",
  },
  {
    id: 12,
    title: "A Despedida",
    headline: "O Último Capítulo de um Rei",
    content:
      "Em seus últimos anos, Pelé enfrentou um câncer de cólon com metástases no intestino, pulmão e fígado. Em 29 de dezembro de 2022, Edson Arantes do Nascimento faleceu aos 82 anos, por falência múltipla de órgãos. O Brasil decretou três dias de luto nacional. O velório ocorreu nos dias 2 e 3 de janeiro de 2023, no estádio da Vila Belmiro, em Santos, onde 230.000 pessoas foram se despedir do Rei.",
    bgClass: "bg-zinc-950",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Inaugura%C3%A7%C3%A3o_da_est%C3%A1tua_.jpg/960px-Inaugura%C3%A7%C3%A3o_da_est%C3%A1tua_.jpg",
  },
  {
    id: 13,
    title: "Títulos e Homenagens",
    headline: "O Legado do Rei",
    content:
      "Pelé conquistou 10 Campeonatos Paulistas, 6 Campeonatos Brasileiros, 2 Copas Libertadores, 2 Mundiais de Clubes e 3 Copas do Mundo. Recebeu a Bola de Ouro em 1958, 1959, 1960, 1961, 1963, 1964 e 1970. Foi eleito Atleta do Século pelo Comitê Olímpico Internacional em 1999 e Maior Futebolista do Século pela Unicef. Recebeu o título de Sir Cavaleiro Honorário do Império Britânico da Rainha Elizabeth II em 1997. O único tricampeão mundial da história.",
    statBadge: "Atleta do Século",
    bgClass: "bg-black",
    bgImage:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Carlos_Alberto_comforts_Pel%C3%A9_at_his_final_game_1977.jpg/500px-Carlos_Alberto_comforts_Pel%C3%A9_at_his_final_game_1977.jpg",
  },
];
