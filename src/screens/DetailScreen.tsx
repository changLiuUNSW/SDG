import * as React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import TargetItem from '../components/TargetItem';
import { Target } from '../models/Target';
import { getTargets, getTargetsError, getTargetsLoading, RootState } from '../stores';
import { targetsActions } from '../stores/targets/actions';

const Container = styled.View`
  flex: 1;
`;

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface Props extends NavigationStackScreenProps {
  load: (code: string) => void;
  targets: Target[];
  error: any;
  loading: boolean;
}

const DetailScreen = ({ navigation, targets, error, loading, load }: Props) => {
  const code: string = navigation.getParam('code');

  React.useEffect(() => {
    if (code) {
      load(code);
    }
  }, [code, load]);

  if (!code || loading) {
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

  return (
    <Container>
      <FlatList
        data={targets}
        renderItem={({ item }) => <TargetItem target={item} />}
        keyExtractor={item => item.code}
      />
    </Container>
  );
};

DetailScreen.navigationOptions = {
  title: 'Target'
};

const mapStateToProps = (state: RootState) => {
  return {
    targets: getTargets(state),
    loading: getTargetsLoading(state),
    error: getTargetsError(state)
  };
};

export default connect(mapStateToProps, {
  load: targetsActions.load
})(DetailScreen);
