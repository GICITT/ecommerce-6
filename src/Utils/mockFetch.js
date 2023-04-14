let productos = [
  {
    id: "1",
    categoria: "remera",
    img: "img/pantalon.png",
    precio: 20000,
  },
  { id: "2", categoria: "Jean", img: "img/pantalon.png", precio: 20, stock: 2 },
  { id: "3", categoria: "Jean", img: "img/pantalon.png", precio: 20, stock: 2 },
  { id: "4", categoria: "Jean", img: "img/pantalon.png", precio: 20, stock: 2 },
  { id: "5", categoria: "Jean", img: "img/pantalon.png", precio: 20, stock: 2 },
  { id: "6", categoria: "Jean", img: "img/pantalon.png", precio: 20, stock: 2 },
  { id: "7", categoria: "Jean", img: "img/pantalon.png", precio: 20, stock: 2 },
];

export let mockFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id ? productos.find((prod) => prod.id === id) : productos);
    }, 1000);
  });
};
