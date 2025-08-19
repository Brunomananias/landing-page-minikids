export interface Foto {
  id: number;
  url: string;
  categoria: string;
  subcategoria?: string;
  descricao?: string;
}

let idCounter = 1;

function gerarFotosEventos(total: number): Foto[] {
  return Array.from({ length: total }, (_, i) => ({
    id: idCounter++,
    url: `images/galeria/eventos/pascoa/evento${i + 1}.jpg`,
    categoria: "Eventos",
    subcategoria: "Páscoa 2025",
    descricao: "Coelhinhos e ovos!",
  }));
}

export const fotos: Foto[] = [
  ...Array.from({ length: 8 }, (_, i) => ({
    id: idCounter++,
    url: `images/galeria/pinturas/pintura${i + 1}.jpg`,
    categoria: "Pinturas",
    descricao: "Diversão garantida!",
  })),

    ...Array.from({ length: 3 }, (_, i) => ({
    id: idCounter++,
    url: `images/galeria/esculturas/escultura${i + 1}.jpg`,
    categoria: "Esculturas",
    descricao: "Esculturas de balões!",
  })),


  {
    id: idCounter++,
    url: "images/galeria/colonia1.jpg",
    categoria: "Esculturas",
    descricao: "Esculturas de balões!",
  },

  ...gerarFotosEventos(38),
];
