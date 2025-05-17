'use client';
import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSubMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">TeknoMarket</div>

      <div className="hamburger" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isMobileOpen ? 'open' : ''}`}>
        <li onClick={() => toggleSubMenu('urunler')}>
          Ürünler
          {openMenu === 'urunler' && (
            <ul className="submenu">
              <li>Telefon</li>
              <li>Bilgisayar</li>
              <li>Tablet</li>
            </ul>
          )}
        </li>
        <li onClick={() => toggleSubMenu('kampanya')}>
          Kampanyalar
          {openMenu === 'kampanya' && (
            <ul className="submenu">
              <li>Yaz İndirimi</li>
              <li>Kargo Bedava</li>
              <li>Anneler Günü</li>
            </ul>
          )}
        </li>
        <li><a href="#">İletişim</a></li>
      </ul>
    </nav>
  );
}
