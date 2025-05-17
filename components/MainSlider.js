'use client';
import { useEffect, useState } from 'react';

export default function MainSlider() {
  const [items, setItems] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch('/api/slider')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
  if (items.length === 0) return;

  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, 3000);

  return () => clearInterval(interval);
  }, [items]);


  if (items.length === 0) return null;

  const currentItem = items[current];

  console.log("Slider loaded:", items);

  return (
    <div className="main-slider">
      <img src={currentItem.image} alt={currentItem.title} />
      <h2>{currentItem.title}</h2>
    </div>
    
  );


  
}
