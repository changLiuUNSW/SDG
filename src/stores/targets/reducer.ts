import { getType } from 'typesafe-actions';
import { TargetsAction, targetsActions } from './actions';
import { Target } from '../../models/Target';

export interface State {
  loading: boolean;
  targets: Target[];
  error: string;
}

const initialState: State = {
  loading: false,
  targets: null,
  error: null
};

export function reducer(state: State = initialState, action: TargetsAction): State {
  switch (action.type) {
    case getType(targetsActions.load):
      return { ...initialState, loading: true };
    case getType(targetsActions.success):
      return { ...state, loading: false, targets: action.payload };
    case getType(targetsActions.fail):
      return { ...state, loading: false, error: action.payload };
    case getType(targetsActions.reset):
      return initialState;
    default:
      return state;
  }
}

export const getTargets = (state: State) => state.targets;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
