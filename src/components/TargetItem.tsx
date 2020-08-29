import React from 'react';
import styled from 'styled-components/native';

import { Target } from '../models/Target';

const Container = styled.View`
  margin-horizontal: 16;
  justify-content: center;
  align-items: center;
  border-color: #e6e9ee;
  border-radius: 8;
  border-width: 1;
  background-color: #ffff;
  margin-vertical: 8;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 18;
`;

interface Props {
  target: Target;
}
const TargetItem = ({ target }: Props) => (
  <Container>
    <Text>{`${target.code}. ${target.title}`}</Text>
  </Container>
);

export default TargetItem;
