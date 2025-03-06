import React from 'react'
import './App.css'
import logo from './assets/logo.png'
import starON from './assets/star_ON.png'
import starOFF from './assets/star_Off.png'
import listIcon from './assets/list.png'

function App() {
  const pairs = ['BTC/IDR', 'ETH/IDR', 'BNB/IDR', 'DOGE/IDR', 'ADA/IDR'];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
          <div className="nav-links">
            <span className="nav-link">Pasar</span>
            <span className="nav-link">Tentang Kami</span>
            <span className="nav-link">Kontak Kami</span>
          </div>
        </div>
        <div className="navbar-right">
          <button className="btn-sign-in">SIGN IN</button>
          <button className="btn-sign-up">SIGN UP</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="section-title">Pasar</h1>
        <p className="section-subtitle">Harga Kripto dalam Rupiah Hari ini di Market Terbesar Indonesia</p>
        
        {/* Price Cards */}
        <div className="price-cards">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={index} className="price-card">
              <div className="price-header">
                <span className="currency-pair">TKO/IDR</span>
                <span className={index > 1 ? "percent-change positive" : "percent-change negative"}>
                  {index > 1 ? "+0.82%" : "-0.82%"}
                </span>
              </div>
              <div className="price-value">Rp 5,261.3</div>
              <div className="price-volume">Volume: 2,238 IDR</div>
              <div className="price-graph">
                <svg viewBox="0 0 100 30">
                  <path d={`M0,15 L10,20 L20,10 L30,15 L40,5 L50,25 L60,15 L70,20 L80,10 L90,5 L100,15`} 
                    stroke={index > 1 ? "#00c853" : "#ff3d00"} 
                    fill="none" 
                    strokeWidth="2"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Favorite Section */}
        <div className="favorite-section">
          <div className="tabs">
            <span className="tab favorite">Favorite</span>
            <span className="tab active">IDR</span>
            <span className="tab">USD</span>
            <span className="tab">BNB</span>
            <span className="tab">BTC</span>
            <span className="tab">ALTS</span>
          </div>
          
          <div className="table-header" >
            <span className="favorite-header">Pasangan
            <img src={listIcon} alt="list" className="list"/>
            </span>
            <span className="harga-header">Harga Terakhir
            <img src={listIcon} alt="list" className="list" />
            </span>
            <span className="change-header">Perubahan 24jam 
            <img src={listIcon} alt="list" className="list" />
            </span>
            <span className="high-low-header">Tertinggi / Terendah 24jam
            <img src={listIcon} alt="list" className="list" />
            </span>
            <span className="cap-header">Kapitalisasi Pasar
            <img src={listIcon} alt="list" className="list" />
            </span>
            <span className="volume-header">Volume 24 Jam
            <img src={listIcon} alt="list" className="list" />
            </span>
          </div>

          {pairs.map((pair, index) => (
            <div key={index} className={`table-row ${index === 3 ? 'highlighted' : ''}`}>
              <div className="star-pair">
                <img src={index === 0 ? starON : starOFF} alt="star" className="star" />
                <span className="pair">{pair}</span>
              </div>
              <div className="last-price">98,825.93 / Rp 1,612,213,817.72</div>
              <div className={index === 2 ? "change negative" : "change positive"}>
                {index === 2 ? "-3.89%" : "+3.89%"}
              </div>
              <div className="high-low">102,451.34 / Rp 94,288.07</div>
              <div className="market-cap">Rp 31,953,908T</div>
              <div className="volume">1.53BM</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App