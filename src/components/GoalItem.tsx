import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styled from 'styled-components/native';

import { Goal } from '../models/Goal';

const Container = styled.TouchableOpacity`
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
  goal: Goal;
  onPress?: () => void;
}
const GoalItem = ({ goal, onPress }: Props) => (
  <Container testID={`goalItem-${goal.code}`} onPress={onPress} disabled={!onPress}>
    <Text>{`${goal.code}. ${goal.title}`}</Text>
    <Ionicons name="ios-people" size={80} />
  </Container>
);

export default GoalItem;
