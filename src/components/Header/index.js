import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import Cart from '../../pages/Cart';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span> 3 itens </span>
        </div>
      </Cart>
    </Container>
  );
}
