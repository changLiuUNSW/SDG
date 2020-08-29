import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createSelector } from 'reselect';

import { GoalsAction } from './goals/actions';
import { epics as goalsEipcs } from './goals/epics';
import * as fromGoals from './goals/reducer';
import { TargetsAction } from './targets/actions';
import { epics as targetsEipcs } from './targets/epics';
import * as fromTargets from './targets/reducer';

export type RootAction = GoalsAction | TargetsAction;

export interface RootState {
  goals: fromGoals.State;
  targets: fromTargets.State;
}

const appReducer = combineReducers<RootState>({
  goals: fromGoals.reducer,
  targets: fromTargets.reducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const rootEpic = combineEpics(...goalsEipcs, ...targetsEipcs);

function configureStore() {
  const epicMiddleware = createEpicMiddleware<RootAction, RootAction, RootState>();

  const store = __DEV__
    ? createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(immutableStateInvariantMiddleware(), epicMiddleware))
      )
    : createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);
  return store;
}

export default configureStore;

export const getGoalsState = (state: RootState) => state.goals;

export const getGoals = createSelector(getGoalsState, fromGoals.getGoals);

export const getGoalsLoading = createSelector(getGoalsState, fromGoals.getLoading);

export const getGoalsError = createSelector(getGoalsState, fromGoals.getError);

export const getTargetsState = (state: RootState) => state.targets;

export const getTargets = createSelector(getTargetsState, fromTargets.getTargets);

export const getTargetsLoading = createSelector(getTargetsState, fromTargets.getLoading);

export const getTargetsError = createSelector(getTargetsState, fromTargets.getError);
