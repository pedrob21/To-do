// src/components/Card.tsx
import React from 'react';
import './card.css';

type CardProps = {
  id: number;
  concluido: boolean;
  onConcluirChange: (id: number, concluido: boolean) => void;
};

export default function Card({ id, concluido, onConcluirChange }: CardProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onConcluirChange(id, e.target.checked);
  };

  return (
    <div className="card w-50">
      <div className="card-body">
        <h5 className="card-title">Title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <label className="label-concluir">Concluir</label>
        <input
          type="checkbox"
          className="form-check-input"
          checked={concluido}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
