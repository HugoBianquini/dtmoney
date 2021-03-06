import React, { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);

    const { createTransaction } = useTransactions();

    async function handleCreateNewTransaction(event: React.FormEvent){
        event.preventDefault();

        await createTransaction({title, type, amount, category});
        setTitle('');
        setType('deposit');
        setCategory('');
        setAmount(0);
        onRequestClose();
    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="Fechar Modal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder='Título'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <input 
                    placeholder='Valor'
                    type='number'
                    value={amount || ''}
                    onChange={(e) => setAmount(Number(e.target.value))} />

                <TransactionTypeContainer>
                    <RadioBox
                    type='button'
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt='Entrada' />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                    type='button'
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt='Saída' />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder='Categoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)} />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
       </Modal>
    );
}