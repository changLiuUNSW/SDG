import { ActionType, createAction } from 'typesafe-actions';
import { Target } from '../../models/Target';

export enum TargetsActionTypes {
  Load = '[Targets] Logout',
  Success = '[Targets] Success',
  Fail = '[Targets] Fail',
  Reset = '[Targets] Reset'
}

export const targetsActions = {
  load: createAction(TargetsActionTypes.Load, resolve => {
    return (code: string) => resolve(code);
  }),
  success: createAction(TargetsActionTypes.Success, resolve => {
    return (targets: Target[]) => resolve(targets);
  }),
  fail: createAction(TargetsActionTypes.Fail, resolve => {
    return (error: string) => resolve(error);
  }),
  reset: createAction(TargetsActionTypes.Reset)
};

export type TargetsAction = ActionType<typeof targetsActions>;
