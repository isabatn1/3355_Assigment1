'use client';
import { useEffect, useState } from 'react';


export default function QuickLinks() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetch('/api/quicklinks')
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  return (
    <section className="quicklinks">
      <h2>Kampanyalar</h2>
      <div className="card-container">
        {links.map((item) => (
          <a key={item.id} href={item.url} className="card">
            {item.title}
          </a>
        ))}
      </div>

    
    </section>
  );
}
