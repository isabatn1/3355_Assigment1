'use client';
import { useSelector } from 'react-redux';

export default function VisitedProducts() {
  const visited = useSelector((state) => state.visited.visited);


  return (
    <div className="visited-box">
      <h3>Gezilen Ürünler</h3>
      <ul>
        {visited.map((title, i) => (
          <li key={i}>{title}</li>
        ))}
      </ul>
    </div>
  );
}
