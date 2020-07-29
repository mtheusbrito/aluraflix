/* eslint-disable react/prop-types */
import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './style';

function Template({ children }) {
  return (
    <>
      <Menu />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
export default Template;
