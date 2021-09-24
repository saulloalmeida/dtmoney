import { useEffect } from 'react'
import { api } from '../../services/api'
import { Container} from './styles'
export function TransactionTable(){
    useEffect(()=>{
        api("transactions")
        .then(response => console.log(response.data))
    },[])
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/06/2016</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="withdraw"> - R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>12/06/2016</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}