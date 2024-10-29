import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


function AdicionarCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');

    const evento = (event) => {
        event.preventDefault();
        const novoCliente = { nome, email, telefone, cep, bairro, complemento };
      
        console.log('Enviando:', novoCliente); // Adicione um log aqui para verificar os dados

        axios.post('http://localhost:3001/adicionar', novoCliente)
            .then(() => {
                alert('Cliente adicionado! :)');
                setNome('');
                setEmail('');
                setTelefone('');
                setCep('');
                setBairro('');
                setComplemento('');
            })
            .catch((erro) => {
                console.error('Erro:', erro); // Adicione um log aqui para verificar o erro
                alert('Erro ao cadastrar cliente! :(' + erro.message);
            });
    };

    return (
        <div>
            <form onSubmit={evento}>
                <Container>
                    <h1 className="centro mt-3" style={{ marginBottom: '40px' }}>Cadastro de Clientes</h1>

                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={1}></Col>
                        <Col sm={8}>
                            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>Código:</div>
                                            <input type="text"
                                                placeholder='Ex:001' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>

                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>Nome:</div>
                                            <input type="text"
                                                value={nome}
                                                onChange={(x) => setNome(x.target.value)}
                                                required
                                                placeholder='Digite seu nome aqui' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>
                                    </div>

                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>Email:</div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(x) => setEmail(x.target.value)}
                                                required
                                                placeholder='Digite seu email aqui' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>

                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>Telefone:</div>
                                            <input type="text"
                                                value={telefone}
                                                onChange={(x) => setTelefone(x.target.value)}
                                                required
                                                placeholder='Insira seu telefone aqui' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>
                                    </div>

                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>CEP:</div>
                                            <input type="text"
                                                value={cep}
                                                onChange={(x) => setCep(x.target.value)}
                                                required
                                                placeholder='Digite seu CEP aqui' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>

                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>Bairro:</div>
                                            <input type="text"
                                                value={bairro}
                                                onChange={(x) => setBairro(x.target.value)}
                                                required
                                                placeholder='Insira seu bairro aqui' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>
                                    </div>

                                    <div style={{ display: 'flex', gap: '20px' }}>
                                        <label style={{ flex: 1 }}>
                                            <div style={{ color: 'black' }}>Complemento:</div>
                                            <input type="text"
                                                value={complemento}
                                                onChange={(x) => setComplemento(x.target.value)}
                                                required
                                                placeholder='Insira o complemento' style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                                        </label>
                                    </div>
                                    <Button variant="secondary" type="submit" >Cadastrar</Button>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                    
                </Container>
            </form>
            
        </div>
    );
};

export default AdicionarCliente;
