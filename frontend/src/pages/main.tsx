import React from 'react';
import Card from '../components/card';
import './main.css';
import Header from '../components/Header';
import { useState } from 'react';  

function Main() {

    type CardData = {
        id: number;
        concluido: boolean;
    };


    const [cards, setCards] = useState<{id: number; concluido: boolean }[]>([]);

    const addCard = () => {
        const novoId = cards.length > 0 ? cards[cards.length - 1].id + 1 : 0; 
        const novoCard = { id: novoId, concluido: false }; 
        setCards([...cards, novoCard]);
    };

    const concluir = (id: number, concluido: boolean) => {
        const cardsAtualizados = cards.map((card) => {
            if (card.id === id) {
            // retorna novo objeto com o valor de 'concluido' alterado
            return { ...card, concluido };
            }
            return card; // mantém os outros cards como estão
        });

        setCards(cardsAtualizados); // atualiza o estado com o novo array
    };

  return (
    <>
    <Header />
    <div className="main-container">
        <h1 className='ola'>Olá, nome</h1>
        <p className='texto'>Adicione, edite e conclua suas tarefas</p>
        <div className="card-container">
            <button 
            className="btn btn-primary"
            onClick={addCard}
            >
            Adicionar
        </button>
             {[...cards]
                .sort((a, b) => Number(a.concluido) - Number(b.concluido)) // pendentes primeiro
                .map((card) => (
                    <Card
                    key={card.id}
                    id={card.id}
                    concluido={card.concluido}
                    onConcluirChange={concluir}
                    />
            ))}
        </div>
    </div>
    </>
  );
}

export default Main;