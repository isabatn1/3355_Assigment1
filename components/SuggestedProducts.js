'use client';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVisited } from '../lib/visitedSlice';

export default function SuggestedProducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/api/suggested')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Suggested fetch error:", err));
  }, []);

  if (products.length === 0) return <div>Öneriler yükleniyor...</div>;

  return (
    <section className="suggested-section">
      <h2>Sana Özel Öneriler</h2>
      <div className="suggested-grid">
        {products.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="suggested-card"
            onClick={() => dispatch(addVisited(item.title))}
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p className="price">{item.price}</p>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < item.rating ? '★' : '☆'}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
