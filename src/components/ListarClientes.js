
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListarClientes() {
    const [informacao, setInformacao] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/listar')
            .then((resposta) => {
                setInformacao(resposta.data);
            })
            .catch((erro) => {
                alert('Erro ao listar cliente :(' + erro.message);
            });
    }, []);
    return (
        <div>
            <form style={{backgroundColor:'white', borderRadius:'20px'}}>
            <h3>
                <b>
           <h3 className='a'><b>Clientes:</b></h3>
                </b>
            </h3>
            <ul>

                {informacao.map((informacao) => (
                    <li key={informacao.id}>
                        {informacao.nome}-{informacao.email}-{informacao.telefone}-{informacao.cep}-{informacao.bairro}-{informacao.complemento}
                    </li>
                ))}

            </ul>
            </form>
        </div>
    )
};

export default ListarClientes;