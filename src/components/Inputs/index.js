import styled from 'styled-components';

export const Input = styled.input`
  padding: 0.8em;
  margin: 0.5em;
  color: white;
  background: rgb(83, 88, 93);
  border: none;
  border-radius: 3px;
  width: 100%;

  &::focus {
    outline: none !important;
  }

  &::placeholder {
    color: #d3d3d3;
  }
`;
export const TextArea = styled.textarea`
  padding: 0.8em;
  margin: 0.5em;
  color: white;
  background: rgb(83, 88, 93);
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 75px;

  &::focus {
    outline: none !important;
  }

  &::placeholder {
    color: #d3d3d3;
  }
`;

export const Form = styled.form`
  padding: 15px;
  & > div {
    margin: 0.5em;
    width: 100%;
  }
  & > input[type="submit"],
  input[type="reset"] {
    margin: 0.5em;
  }
`;

export const Button = styled.input`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border-color: transparent;
  cursor: pointer;
`;

export const Table = styled.table`
  margin: 20px;
  width: 100%;
  border-collapse: collapse;
`;
export const Tr = styled.tr`
  width: ${(props) => props.width};
`;
export const Td = styled.td`
  text-align:${(props) => props.textalign};
  background-color: #222222;
  font-style: normal;
  font-weight: 300;
  padding: 10px;

  & > a {
    margin-left: 5px;
    text-decoration:none;
    font-size: 12px;
   
    padding: 4px;
    border-radius: 3px;
  }
`;
export const Th = styled.th`
  background-color: #393939;
  text-align: left;
  padding: 10px;
  font-weight: bold;
`;
export const Thead = styled.thead`
  color: #2a7ae4;
`;
export const Tbody = styled.tbody``;
