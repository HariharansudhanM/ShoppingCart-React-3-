const items = [
  {
    id: 1,
    name: "keyBoard",
    img: "https://tse1.mm.bing.net/th?id=OIP.7VzL7n1buFHfQ18oFOH81wAAAA&pid=Api&P=0&h=180",
    price: "RS 2000",
  },
  {
    id: 2,
    name: "keyBoard",
    img: "https://tse1.mm.bing.net/th?id=OIP.7VzL7n1buFHfQ18oFOH81wAAAA&pid=Api&P=0&h=180",
    price: "RS 2000",
  },
  {
    id: 3,
    name: "keyBoard",
    img: "https://tse1.mm.bing.net/th?id=OIP.7VzL7n1buFHfQ18oFOH81wAAAA&pid=Api&P=0&h=180",
    price: "RS 2000",
  },
];

const item = {
  id: 4,
  name: "keyBoard",
  img: "https://tse1.mm.bing.net/th?id=OIP.7VzL7n1buFHfQ18oFOH81wAAAA&pid=Api&P=0&h=180",
  price: "RS 2000",
};

if (items.some((e) => e.id !== item.id)) {
  const a = [...items, item];
  console.log(a);
}

console.log(items.some((e) => e.id == item.id));
