import * as React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import GoalItem from '../components/GoalItem';
import HomeHeader from '../components/HomeHeader';
import { Goal } from '../models/Goal';
import { DETAIL_SCREEN } from '../navigation/screens';
import { getGoals, getGoalsError, getGoalsLoading, RootState } from '../stores';
import { goalsActions } from '../stores/goals/actions';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  flex: 1;
`;

interface Props extends NavigationStackScreenProps {
  load: () => void;
  goals: Goal[];
  error: any;
  loading: boolean;
}

export const HomeScreen = ({ navigation, loading, error, goals, load }: Props) => {
  React.useEffect(() => {
    load();
  }, [load]);

  if (loading) {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <LoadingContainer>
        <Text>{error}</Text>
      </LoadingContainer>
    );
  }

  const goToDetailScreen = (item: Goal) => {
    navigation.navigate(DETAIL_SCREEN, { code: item.code });
  };

  return (
    <Container testID="welcome">
      <Image style={StyleSheet.absoluteFill} resizeMode="cover" source={require('../../assets/home-bg.jpeg')} />
      <FlatList
        testID="goal-list"
        ListHeaderComponent={<HomeHeader />}
        data={goals}
        renderItem={({ item }) => (
          <GoalItem
            goal={item}
            onPress={
              item.code === '13'
                ? () => {
                    goToDetailScreen(item);
                  }
                : null
            }
          />
        )}
        keyExtractor={item => item.code}
      />
    </Container>
  );
};

HomeScreen.navigationOptions = {
  title: 'THE GOALS'
};

const mapStateToProps = (state: RootState) => {
  return {
    goals: getGoals(state),
    loading: getGoalsLoading(state),
    error: getGoalsError(state)
  };
};

export default connect(mapStateToProps, {
  load: goalsActions.load
})(HomeScreen);
