import { useState } from 'react';
import ProductList from './components/ProductList';

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState('');

  const toggleProductList = () => {
    setShowProducts((prev) => !prev);
  };

  return (
    <main style={{
      maxWidth: '560px',
      margin: '40px auto',
      padding: '24px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#0f172a'
    }}>
      <h1 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
        React Product Dashboard
      </h1>

      <div style={{ marginBottom: '20px' }}>
        <label 
          htmlFor="user-name" 
          style={{ display: 'block', fontSize: '0.875rem', marginBottom: '6px', fontWeight: 500 }}
        >
          Your Name:
        </label>
        <input
          id="user-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: '6px',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box',
            fontSize: '1rem'
          }}
        />
      </div>

      <p style={{ minHeight: '24px', fontStyle: name ? 'normal' : 'italic', color: '#475569' }}>
        {name ? `Welcome, ${name}! Browse our catalog below.` : 'Please enter your name above to personalize your session.'}
      </p>

      <button
        onClick={toggleProductList}
        style={{
          padding: '10px 18px',
          backgroundColor: showProducts ? '#ef4444' : '#2563eb',
          color: '#ffffff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 600,
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts && <ProductList />}
    </main>
  );
}