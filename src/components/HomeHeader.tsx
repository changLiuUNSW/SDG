import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding-top: 40;
  padding-horizontal: 16;
  margin-bottom: 24;
`;

const Heading = styled.Text`
  color: #ffff;
  font-size: 28;
`;

const HomeHeader = () => (
  <Container>
    <Heading>17 GOALS TO {'\n'}TRANSFER OUR WORLD</Heading>
  </Container>
);

export default HomeHeader;
