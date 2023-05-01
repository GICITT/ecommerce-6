let productos = [
  {
    id: "1",
    categoria: "remeras",
    img: "/img/5.jpg",
    precio: 12000,
    stock: 4,
  },
  {
    id: "2",
    categoria: "remeras",
    img: "/img/6.jpg",
    precio: 12000,
    stock: 5,
  },
  {
    id: "3",
    categoria: "remeras",
    img: "/img/7.jpg",
    precio: 13000,
    stock: 5,
  },
  {
    id: "4",
    categoria: "vaqueros",
    img: "/img/1.jpg",
    precio: 20000,
    stock: 4,
  },
  {
    id: "5",
    categoria: "vaqueros",
    img: "/img/2.jpg",
    precio: 28000,
    stock: 7,
  },
  {
    id: "6",
    categoria: "vaqueros",
    img: "/img/3.jpg",
    precio: 28000,
    stock: 6,
  },
  {
    id: "7",
    categoria: "vaqueros",
    img: "/img/8.jpg",
    precio: 20000,
    stock: 2,
  },
];

export let mockFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find((prod) => prod.id === id) : productos);
    }, 1000);
  });
};
