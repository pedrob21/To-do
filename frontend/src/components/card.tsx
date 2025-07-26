// src/components/Card.tsx
import React, { useState, useEffect, useRef } from 'react';
import './card.css';

type CardProps = {
  id: number;
  title: string;
  description: string;
  data: Date;
  concluido: boolean;
  color: string;
  onConcluirChange: (id: number, concluido: boolean) => void;
  onEditarClick: (id: number) => void;
};

export default function Card({ 
  id, 
  title, 
  description, 
  data, 
  concluido, 
  color, 
  onConcluirChange, 
  onEditarClick
 }: CardProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onConcluirChange(id, e.target.checked);
  };

  const [showInput, setShowInput] = useState(false);

  const [showOpts, setShowOpts] = useState(false);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const handlePointClick = () => {
    setShowOpts(!showOpts);
  }

  

     useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setShowOpts(false);
      }
    }

    if (showOpts) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOpts]);

  return (
    <div className="card w-50">
      <div 
      className="card-options"
      onClick={handlePointClick}
      >
        &#8942;
      </div>
       {showOpts && (
        <div
          className="options-menu"
          style={{
            position: 'absolute',
            top: 35,
            right: 10,
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '5px 10px',
            boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
            zIndex: 100
          }}
        >
          <div 
          className="option-item"
          onClick={() => onEditarClick(id)}
          >Editar</div>
          <div className="option-item">Excluir</div>
        </div>
      )}


      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className='card-data'>{data.toLocaleDateString('pt-BR')}</p>
        <label className="label-concluir">Concluir</label>
        <input
          type="checkbox"
          className="form-check-input"
          checked={concluido}
          onChange={handleChange}
        />
        <div className="color-indicator" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
}
