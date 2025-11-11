import React from 'react';
export default function Dashboard(){
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:16}}>
      <section className="card">
        <h3>Leads Pipeline</h3>
        <div className="lead-row"><div><strong>Acme Garage</strong><div className="small">acme@example.com • 615-000-1111</div></div>
          <div><button className="btn">Open</button></div></div>
        <div style={{marginTop:12}}>
          <button className="btn">+ Add Lead</button>
        </div>
      </section>
      <aside className="card">
        <h4>Quick Actions</h4>
        <div style={{display:'grid',gap:8,marginTop:8}}>
          <button className="btn">Create Invoice</button>
          <button className="btn">Provision Bot</button>
        </div>
      </aside>
    </div>
  );
}