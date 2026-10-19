import Card from './Card';

export default function Product({ title, price }) {
  return (
    <Card>
      <h3 style={{ margin: '0 0 8px 0', color: '#1e293b', fontSize: '1.1rem' }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: '#059669', fontWeight: 600 }}>
        ${price.toFixed(2)}
      </p>
    </Card>
  );
}