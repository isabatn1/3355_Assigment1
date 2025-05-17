'use client';
import { useEffect, useState } from 'react';

export default function ElectronicsDeals() {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/api/deals')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Deals fetch error:", err));
  }, []);

  useEffect(() => {
    if (products.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products]);

  if (products.length === 0) return <div>Fırsatlar yükleniyor...</div>;

  const item = products[current];

  return (
    <div className="deals-box">
      <a href={item.url}>
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p className="price">{item.price}</p>
      </a>
    </div>
  );
}
