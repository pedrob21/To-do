import React from "react";
import { useState } from "react";

type CardFormProps = {
        title: string;
        setTitle: (v: string) => void;
        description: string;
        setDescription: (v: string) => void;
        data: string;
        setData: (v: string) => void;
        color: string;
        setColor: (v: string) => void;
        onSalvar: () => void;
        onCancelar: () => void;
    };

export default function InputForm({
  title,
  setTitle,
  description,
  setDescription,
  data,
  setData,
  color,
  setColor,
  onSalvar,
  onCancelar,
}: CardFormProps) {
    return(
        <div className="modal-overlay">
                    <div className="modal-box">
                    <h4>Nova Tarefa</h4>
                    <input
                        type="text"
                        placeholder="Digite o título"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <input
                        type="text"
                        placeholder="Digite a descrição"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <input
                        type="date"
                        placeholder="__/__/____"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '6px' }}>Escolha uma cor de acordo com a prioridade:</label>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '8px'  }}>
                            {['#ff6b6b', '#4a87b3ff', '#81c784'].map((c) => (
                            <div
                                key={c}
                                onClick={() => setColor(c)}
                                style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: c,
                                border: color === c ? '3px solid black' : '2px solid #ccc',
                                cursor: 'pointer',
                                }}
                            />
                            ))}
                        </div>
                        </div>
                    <div>
                        <button className="btn btn-success me-2" 
                            onClick={onSalvar} 
                            disabled={title.trim() === '' || !data}
                            >Salvar</button>
                        <button className="btn btn-secondary" onClick={onCancelar}>Cancelar</button>
                    </div>
                    </div>
                </div>
    )

}