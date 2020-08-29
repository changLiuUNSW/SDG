import { getType } from 'typesafe-actions';
import { GoalsAction, goalsActions } from './actions';
import { Goal } from '../../models/Goal';

export interface State {
  loading: boolean;
  goals: Goal[];
  error: string;
}

const initialState: State = {
  loading: false,
  goals: null,
  error: null
};

export function reducer(state: State = initialState, action: GoalsAction): State {
  switch (action.type) {
    case getType(goalsActions.load):
      return { ...initialState, loading: true };
    case getType(goalsActions.success):
      return { ...state, loading: false, goals: action.payload };
    case getType(goalsActions.fail):
      return { ...state, loading: false, error: action.payload };
    case getType(goalsActions.reset):
      return initialState;
    default:
      return state;
  }
}

export const getGoals = (state: State) => state.goals;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
