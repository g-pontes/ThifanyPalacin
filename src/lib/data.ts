export const CONTACT = {
  name: "Thifany Palacin",
  firm: "Thifany Palacin Advocacia",
  role: "Advogada",
  oab: "OAB/SP 412.886",
  phoneDisplay: "(11) 99814-2207",
  phoneRaw: "5511998142207",
  email: "contato@thifanypalacin.adv.br",
  city: "São Paulo — SP",
  address: "Av. Paulista, 1.842 · cj. 14 · Bela Vista · São Paulo/SP",
  hours: "Seg. a sex., 9h às 19h · Sáb., 9h às 13h",
};

export const waLink = (message: string) =>
  `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(message)}`;

export const WA_DEFAULT =
  "Olá! Vim pelo site e gostaria de falar com o escritório.";

export const NAV_LINKS = [
  { label: "Início", href: "#topo" },
  { label: "O Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#atuacao" },
  { label: "Nossa Abordagem", href: "#abordagem" },
  { label: "Contato", href: "#contato" },
];

/* ------------------------------------------------------------------ ticker */
export const TICKER = [
  "direito do consumidor",
  "direito civil",
  "direito empresarial",
  "contratos",
  "registro de marcas",
  "consultoria jurídica",
];

/* --------------------------------------------------------------- atuação */
export type Area = {
  id: string;
  title: string;
  description: string;
};

export const AREAS: Area[] = [
  {
    id: "consumidor",
    title: "Direito do Consumidor",
    description:
      "Orientação e atuação em relações de consumo, contratos, cobranças e conflitos.",
  },
  {
    id: "empresarial",
    title: "Direito Empresarial",
    description:
      "Suporte jurídico para empresas, negócios e decisões estratégicas.",
  },
  {
    id: "marcas",
    title: "Registro de Marcas",
    description:
      "Proteção e acompanhamento jurídico para registro e defesa de marcas.",
  },
  {
    id: "contratos",
    title: "Contratos",
    description:
      "Elaboração, análise e revisão de contratos com segurança jurídica.",
  },
  {
    id: "civil",
    title: "Direito Civil",
    description:
      "Atuação em questões patrimoniais, obrigações e relações civis.",
  },
  {
    id: "consultoria",
    title: "Consultoria Jurídica",
    description:
      "Orientação preventiva para decisões mais seguras.",
  },
];

/* ------------------------------------------------------------- abordagem */
export const STEPS = [
  {
    n: "01",
    title: "Entendemos",
    text: "Conhecemos sua situação e suas necessidades.",
  },
  {
    n: "02",
    title: "Analisamos",
    text: "Avaliamos os aspectos jurídicos e os possíveis caminhos.",
  },
  {
    n: "03",
    title: "Estratégia",
    text: "Definimos a melhor abordagem para o seu caso.",
  },
  {
    n: "04",
    title: "Acompanhamos",
    text: "Você conta com acompanhamento durante todo o processo.",
  },
];

export const ATTRIBUTES = [
  "Atendimento próximo",
  "Estratégia personalizada",
  "Clareza e transparência",
];

export const TESTIMONIALS = [
  {
    quote:
      "Fui atendida com atenção do início ao fim. A Dra. Thifany explicou cada etapa com uma clareza que trouxe muita segurança para as decisões.",
    name: "Fernanda Souza",
  },
  {
    quote:
      "Precisávamos revisar os contratos da empresa e encontramos um trabalho cuidadoso, estratégico e muito bem comunicado.",
    name: "Eduardo Martins",
  },
  {
    quote:
      "Registrei a marca do meu negócio com acompanhamento completo. Atendimento próximo, transparente e sem complicações.",
    name: "Camila Duarte",
  },
];

export const FAQS = [
  {
    q: "Como funciona o primeiro atendimento?",
    a: "O primeiro contato é uma conversa de escuta: você conta o que precisa, avaliamos a situação e indicamos os possíveis caminhos e a forma de atuação mais adequada para o seu momento.",
  },
  {
    q: "Quais áreas o escritório atende?",
    a: "Direito do Consumidor, Direito Civil, Direito Empresarial, Contratos, Registro de Marcas e Consultoria Jurídica preventiva — para pessoas físicas e empresas.",
  },
  {
    q: "O atendimento pode ser online?",
    a: "Sim. Todo o atendimento pode ser feito online, por vídeo, telefone ou WhatsApp, com a mesma proximidade do encontro presencial no escritório, em São Paulo.",
  },
  {
    q: "Como saber se meu caso precisa de acompanhamento jurídico?",
    a: "Na maioria das vezes uma conversa inicial já esclarece o cenário. Nessa conversa, indicamos se há necessidade de acompanhamento contínuo ou se basta uma orientação pontual.",
  },
];
