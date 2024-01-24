import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Section } from "./Section";
import { Footer } from "./Footer";
import { useState } from "react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "keyBoard",
      img: "https://tse1.mm.bing.net/th?id=OIP.7VzL7n1buFHfQ18oFOH81wAAAA&pid=Api&P=0&h=180",
      price: "RS 2000",
    },
    {
      id: 2,
      name: "mouse",
      img: "https://tse2.mm.bing.net/th?id=OIP.w8REMes8aH7F6khTCD7vDAHaIP&pid=Api&P=0&h=180",
      price: "RS 700",
    },
    {
      id: 3,
      name: "Processor",
      img: "https://tse4.mm.bing.net/th?id=OIP.--1xpIl886r6CIzPdY4P4wHaEW&pid=Api&P=0&h=180",
      price: "RS 17000",
    },
    {
      id: 4,
      name: "Camera",
      img: "https://tse3.explicit.bing.net/th?id=OIP.7l6kynyvWQdH44AsdC01QwHaHa&pid=Api&P=0&h=180",
      price: "RS 25000",
    },
    {
      id: 5,
      name: "HeadPhones",
      img: "https://tse1.mm.bing.net/th?id=OIP.ywQHLhSA6TuY4Y6GHBeL_gHaHa&pid=Api&P=0&h=180",
      price: "RS 2500",
    },
    {
      id: 6,
      name: "Harddisk",
      img: "https://tse4.mm.bing.net/th?id=OIP.bB4S3kotZR1XxH5qs2oodAAAAA&pid=Api&P=0&h=180",
      price: "RS 3000",
    },
    {
      id: 7,
      name: "Consoles",
      img: "https://tse1.mm.bing.net/th?id=OIP.ugSqgiV5Qyckh6YqeJ1JzgHaE8&pid=Api&P=0&h=180",
      price: "RS 50000",
    },
    {
      id: 8,
      name: "Controllers",
      img: "https://tse1.mm.bing.net/th?id=OIP.arQPR8zg-caUjbeGWp01rQAAAA&pid=Api&P=0&h=180",
      price: "RS 7000",
    },
  ];

  let [items, setItems] = useState([]);

  const handleAddToCart = (item) => {
    if (items.some((e) => e.id === item.id)) {
      setItems(items.filter((e) => e.id !== item.id));
    } else {
      setItems([...items, item]);
    }
    // } else if (items.some((e) => e.id === item.id)) {
    // }
  };

  return (
    <div className="App">
      <Navbar items={items} />
      <Header />
      <Section
        products={products}
        items={items}
        onHandleAddtoCart={handleAddToCart}
      />
      <Footer />
    </div>
  );
}
