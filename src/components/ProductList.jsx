import Product from './Product';

const PRODUCTS = [
  { id: 'prod-101', title: 'Mechanical Keyboard (Tenkeyless)', price: 89.99 },
  { id: 'prod-102', title: 'Ergonomic Vertical Mouse', price: 45.50 },
  { id: 'prod-103', title: '27-inch 4K IPS Monitor', price: 329.00 },
  { id: 'prod-104', title: 'USB-C Multiport Hub', price: 34.99 },
  { id: 'prod-105', title: 'Noise-Canceling Wireless Headphones', price: 149.99 }
];

export default function ProductList() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ fontSize: '1.25rem', color: '#334155', marginBottom: '12px' }}>
        Available Products
      </h2>
      <div>
        {PRODUCTS.map((item) => (
          <Product 
            key={item.id} 
            title={item.title} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}