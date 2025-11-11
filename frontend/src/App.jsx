import React from 'react';
import Dashboard from './pages/Dashboard';
export default function App(){
  return <div>
    <header className="header">
      <img className="logo" src="/logo.png" alt="Manus Voice Pro" />
      <div>
        <div style={{fontWeight:700}}>MANUS VOICE PRO</div>
        <div className="small">Your AI Employee — Answer & Book 24/7</div>
      </div>
    </header>
    <main className="container"><Dashboard/></main>
  </div>
}