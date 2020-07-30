import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TwitterPicker } from 'react-color';
import Template from '../../../components/Template';
import {
  Input, Form, TextArea, Button, Table, Tr, Td, Th, Thead, Tbody,
} from '../../../components/Inputs';
import categorias from '../../../data/dados_iniciais.json';

function NovaCategoria() {
  const nomeCategoria = useState('Filmes');

  return (
    <Template>
      <h1>Nova categoria</h1>
      <Link to="/videos/novo"> Adicionar Video</Link>
      <Form>
        <Input placeholder="Nome" type="text" />
        <TextArea placeholder="Descrição da categoria... Ex:Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente." />
        <TwitterPicker triangle="hide" width="100" color="#EB144C" onChange={() => { console.log('implementar...'); }} />
        <Button background="#2a7ae4" color="white" type="submit" />
        <Button background="#9e9e9e" color="black" type="reset" />
      </Form>
      <Table>
        <Thead>
          <Tr>
            <Th width="25%">Nome</Th>
            <Th>Descrição</Th>
            <Th />
          </Tr>
        </Thead>

        <Tbody>
          {categorias.map((categoria) => (
            <Tr>
              <Td>{categoria.titulo}</Td>
              <Td>{categoria.descricao}</Td>
              <Td textalign="center">
                <Link to="/" className="btn-edit">Editar</Link>
                <Link to="/" className="btn-trash">Remover</Link>
              </Td>
            </Tr>
          ))}

        </Tbody>
      </Table>
    </Template>
  );
}

export default NovaCategoria;
