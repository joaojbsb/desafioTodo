import React from 'react';
import Logo from '../../assets/Logo.png';

import {
  Container, Brand
} from './styles';

export function Header() {
  return (
    <Container>
        <Brand source={Logo} />
    </Container>
  );
}