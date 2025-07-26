import React from 'react';
import Card from '../components/card';
import './main.css';
import Header from '../components/Header';
import { useState } from 'react';  
import InputForm from '../components/inputform';

function Main() {

    type CardData = {
        id: number;
        title: string;
        description: string;
        data: Date;
        concluido: boolean;
        color: string;
    };

    const [showInput, setShowInput] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState('');
    const [cards, setCards] = useState<CardData[]>([]);
    const [color, setColor] = useState('');

    const corPeso = (cor: string) => {
    switch (cor) {
        case '#ff6b6b': return 0; // alta
        case '#6bc1ff': return 1; // média
        case '#81c784': return 2; // baixa
        default: return 3; // indefinido ou fora do esperado
    }
    };


    const handleAddClick = () =>{
        setShowInput(true);
    }

    const handleCancel = () => {
        setTitle('');
        setShowInput(false);
    };

    const [edit, setEdit] = useState<CardData | null>(null);
    
    const handleEdit = (cardId:number) => {
        const card = cards.find(c => c.id === cardId);
        if (card) {
            setEdit(card);
            setShowInput(true); 
            setTitle(card.title);
            setDescription(card.description);
            const ano = card.data.getFullYear();
            const mes = String(card.data.getMonth() + 1).padStart(2, '0');
            const dia = String(card.data.getDate()).padStart(2, '0');
            setData(`${ano}-${mes}-${dia}`);
            setColor(card.color);
        }
    }

    const addCard = () => {
        const novoId = cards.length > 0 ? cards[cards.length - 1].id + 1 : 0;
        const [ano, mes, dia] = data.split('-').map(Number);

        const dataCorrigida = new Date(ano, mes - 1, dia); // mês começa em 0
        
        const novoCard = {
            id: novoId,
            title,
            description,
            data: dataCorrigida,
            concluido: false,
            color,
        };
        setCards([...cards, novoCard]);
        setTitle('');
        setShowInput(false);
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

    const salvarEdicao = () => {
        if (!edit) return;

        const [ano, mes, dia] = data.split('-').map(Number);
        const dataCorrigida = new Date(ano, mes - 1, dia);

        const cardsAtualizados = cards.map((card) =>
            card.id === edit.id
                ? { ...card, title, description, data: dataCorrigida, color }
                : card
        );

        setCards(cardsAtualizados);
        setEdit(null);
        setShowInput(false);
        setTitle('');
        setDescription('');
        setData('');
        setColor('');
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
            onClick={handleAddClick}
            >
            Adicionar
        </button>

        {showInput && (
            <InputForm
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                data={data}
                setData={setData}
                color={color}
                setColor={setColor}
                onSalvar={edit ? salvarEdicao : addCard}
                onCancelar={handleCancel}
            />
            )}
             {[...cards]
                .sort((a, b) => {
                    // 1. Cor (prioridade)
                    const corDiff = corPeso(a.color) - corPeso(b.color);
                    if (corDiff !== 0) return corDiff;

                    // 2. Data
                    const dataDiff = a.data.getTime() - b.data.getTime();
                    if (dataDiff !== 0) return dataDiff;

                    // 3. Conclusão
                    return Number(a.concluido) - Number(b.concluido);
                    })

                .map((card) => (
                    <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    description={card.description}
                    data={card.data}
                    concluido={card.concluido}
                    onConcluirChange={concluir}
                    color={card.color}
                    onEditarClick={handleEdit}
                    />
        ))}
        </div>
    </div>
    </>
  );
}

export default Main;