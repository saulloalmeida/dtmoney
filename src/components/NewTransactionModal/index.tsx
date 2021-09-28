import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'
interface NewTransactionModalProps {
    isOpen: boolean
    onRequestClose: () => void
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)
    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        const data =
            {
                title,
                category,
                value,
                type
            }
        api.post('/transactions', data)
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
        >
            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Nova Transação</h2>
                <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))} />
                <TransactionTypeContainer>
                    <RadioBox
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                        type='button'>
                        <img src={incomeImg} alt="" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                        type='button'>
                        <img src={outcomeImg} alt="" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input type="text" placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}