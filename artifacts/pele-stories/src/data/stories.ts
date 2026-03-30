export interface Story {
  id: number;
  title: string;
  headline: string;
  content: string;
  statBadge?: string;
  quote?: string;
  bgClass: string;
  bgImage?: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "O Rei do Futebol",
    headline: "Pelé: The King of Football",
    content: "Born Edson Arantes do Nascimento on October 23, 1940, in Três Corações, Minas Gerais, Brazil. His father, Dondinho, was also a footballer. Raised in poverty in Bauru, São Paulo. He shined shoes and sold peanuts to survive. His father nicknamed him \"Dico\" — the nickname \"Pelé\" came from school friends, a name he actually hated as a child.",
    bgClass: "bg-gradient-to-b from-emerald-950 to-emerald-900"
  },
  {
    id: 2,
    title: "Infância Humilde",
    headline: "From Poverty to Prodigy",
    content: "Growing up in Bauru, São Paulo, Pelé had no money for a real football. He played with stuffed socks and grapefruit in the streets. At age 11, he was spotted by former Brazil international Waldemar de Brito, who trained him and declared he would one day be \"the greatest footballer in the world.\"",
    bgClass: "bg-gradient-to-br from-amber-900 to-amber-950"
  },
  {
    id: 3,
    title: "A Carreira",
    headline: "Santos FC: A Legend is Born",
    content: "Pelé joined Santos FC in 1956 at just 15 years old. He scored on his debut and never looked back. He spent 18 years at Santos, scoring 643 goals in 659 official games. With Santos, he won 6 Brazilian Championships and 2 Copa Libertadores (1962, 1963). Santos FC toured the world — entire countries would declare truces in wars to watch Pelé play.",
    bgClass: "bg-gradient-to-b from-slate-900 to-slate-950"
  },
  {
    id: 4,
    title: "Copa do Mundo 1958",
    headline: "At 17, He Conquered the World",
    content: "At the 1958 FIFA World Cup in Sweden, the 17-year-old Pelé became the youngest player to score in a World Cup final. He scored 6 goals in the tournament, including a stunning hat-trick in the semi-final against France and 2 goals in the final against Sweden. Brazil won 5-2. Pelé wept with joy — and the world wept with him.",
    statBadge: "6 goals at age 17",
    bgClass: "bg-neutral-950",
    bgImage: "/images/wc-1958.png"
  },
  {
    id: 5,
    title: "Copa do Mundo 1962",
    headline: "Injured but Still a Champion",
    content: "At the 1962 World Cup in Chile, Pelé was injured in the second game and couldn't play again. Yet Brazil still won — testament to the team he had helped build. He returned home a champion, even from the sidelines. His legacy was already bigger than any single tournament.",
    bgClass: "bg-gradient-to-tr from-emerald-950 to-neutral-900"
  },
  {
    id: 6,
    title: "Copa do Mundo 1966",
    headline: "Kicked Off the Stage",
    content: "The 1966 World Cup in England was a dark chapter. Pelé was targeted by brutal fouls — most notably by Portugal's players — and Brazil was eliminated in the group stage. A battered and humiliated Pelé vowed he would never play in another World Cup. He later changed his mind.",
    quote: "I am leaving the World Cup, and will never play another one.",
    bgClass: "bg-gradient-to-b from-rose-950 to-neutral-950"
  },
  {
    id: 7,
    title: "Copa do Mundo 1970",
    headline: "The Greatest Team Ever",
    content: "The 1970 Brazil team is widely considered the greatest international football team in history. Pelé, Tostão, Jairzinho, Rivelino, Gerson — a lineup of legends. Pelé scored 4 goals and made iconic plays, including his dummy against Uruguay that left the goalkeeper on the floor. Brazil won the Jules Rimet Trophy permanently with a 4-1 victory over Italy in the final.",
    statBadge: "3x World Champion",
    bgClass: "bg-neutral-900",
    bgImage: "/images/wc-1970.png"
  },
  {
    id: 8,
    title: "Os Gols",
    headline: "1,000 Goals: A Number No One Believed",
    content: "On November 19, 1969, Pelé scored his 1,000th career goal — a penalty against Vasco da Gama at the Maracanã, with 80,000 fans in tears. He pointed to the sky and wept. Officially, FIFA recognizes 1,281 goals in 1,363 games — the most by any professional footballer in history. Unofficially, many count even more.",
    statBadge: "1,281 career goals",
    bgClass: "bg-black",
    bgImage: "/images/goals-1000.png"
  },
  {
    id: 9,
    title: "Nova Iorque",
    headline: "Taking Football to America",
    content: "In 1975, after retiring from Santos, Pelé signed a stunning $7 million contract with the New York Cosmos of the North American Soccer League — unheard of at the time. He helped popularize football in the United States, drawing massive crowds. He retired for good in 1977 after the Cosmos' Soccer Bowl victory, his final game watched by 75,000 fans and millions on TV.",
    bgClass: "bg-gradient-to-b from-blue-950 to-zinc-950"
  },
  {
    id: 10,
    title: "O Legado",
    headline: "The Greatest of All Time",
    content: "Named FIFA Player of the Century alongside Diego Maradona. Named Athlete of the Century by the International Olympic Committee. Three-time FIFA World Cup winner (1958, 1962, 1970). Appointed Brazil's Minister of Sport in 1995. UNICEF Goodwill Ambassador. The only player to win three World Cups. His name is synonymous with football itself.",
    statBadge: "FIFA Player of the Century",
    bgClass: "bg-gradient-to-br from-amber-900 to-stone-900"
  },
  {
    id: 11,
    title: "A Pessoa",
    headline: "The Man Behind the Myth",
    content: "Pelé was married three times and had 7 children (though he publicly acknowledged only some during his lifetime). He was known for his warmth, humor, and deep faith. Despite his global fame and wealth, he remembered his roots — he returned frequently to Bauru and championed the poor communities that shaped him.",
    bgClass: "bg-gradient-to-b from-stone-800 to-stone-950"
  },
  {
    id: 12,
    title: "A Despedida",
    headline: "A King's Final Chapter",
    content: "In his final years, Pelé battled colon cancer and kidney failure. He was hospitalized multiple times from 2021 onward. On December 29, 2022, Edson Arantes do Nascimento — Pelé — passed away at age 82 in São Paulo. Brazil declared three days of national mourning. His body lay in state at the Vila Belmiro stadium, where 230,000 people came to pay their respects. The world wept again.",
    bgClass: "bg-gradient-to-b from-zinc-900 to-black"
  },
  {
    id: 13,
    title: "Para Sempre",
    headline: "The King Lives Forever",
    content: "\"Pelé is not just a name. He is not just a player. He is an idea — the idea that beauty and excellence can coexist, that sport can transcend all barriers. He is the reason billions of people love football.\" — tributes poured in from Messi, Ronaldo, Mbappé, Neymar, and world leaders. O Rei. Forever.",
    bgClass: "bg-black",
    bgImage: "/images/tribute.png"
  }
];
