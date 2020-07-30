import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { TwitterPicker } from 'react-color';
import Template from '../../../components/Template';
import {
  Input, Form, TextArea, Button, Table, Tr, Td, Th, Thead, Tbody,
} from '../../../components/Inputs';
import categoriasJson from '../../../data/dados_iniciais.json';

function NovaCategoria() {
  const initValues = {
    nome: '',
    descricao: '',
    cor: '#1B2B69',
  };
  const [values, setValues] = useState(initValues);
  const [categorias, setCategorias] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
  }
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <Template>
      <h1>Nova categoria</h1>
      <Link to="/videos/novo"> Adicionar Video</Link>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Nome" name="nome" type="text" value={values.nome} onChange={handleChange} />
        <TextArea name="descricao" value={values.descricao} onChange={handleChange} placeholder="Descrição da categoria... Ex:Todos os vídeo da área de Front End juntarei nessa categoria para organizar os estudos que venho fazendo atualmente." />
        <Input name="cor" type="color" value={values.cor} onChange={handleChange} />
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
          {categorias.map((categoria, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tr key={i}>
              <Td>{categoria.nome}</Td>
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
