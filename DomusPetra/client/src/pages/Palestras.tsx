import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Palestra {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Palestras: React.FC = () => {
  const [palestras, setPalestras] = useState<Palestra[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/palestras')
      .then(response => {
        setPalestras(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar palestras:', error);
      });
  }, []);

  return (
    <div>
      <h1>Palestras</h1>
      <div className="palestras-container">
        {palestras.map(palestra => (
          <div key={palestra.id} className="palestra">
            <img src={palestra.image} alt={palestra.title} />
            <h2>{palestra.title}</h2>
            <p>{palestra.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Palestras;
