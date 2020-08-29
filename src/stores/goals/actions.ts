import { ActionType, createAction } from 'typesafe-actions';
import { Goal } from '../../models/Goal';

export enum GoalsActionTypes {
  Load = '[Goals] Logout',
  Success = '[Goals] Success',
  Fail = '[Goals] Fail',
  Reset = '[Goals] Reset'
}

export const goalsActions = {
  load: createAction(GoalsActionTypes.Load),
  success: createAction(GoalsActionTypes.Success, resolve => {
    return (goals: Goal[]) => resolve(goals);
  }),
  fail: createAction(GoalsActionTypes.Fail, resolve => {
    return (error: string) => resolve(error);
  }),
  reset: createAction(GoalsActionTypes.Reset)
};

export type GoalsAction = ActionType<typeof goalsActions>;
