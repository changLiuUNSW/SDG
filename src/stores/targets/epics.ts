import { Epic } from 'redux-observable';
import { RootAction, RootState } from '..';
import { TargetsAction, targetsActions } from './actions';
import { isActionOf } from 'typesafe-actions';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import ApiService from '../../services/ApiService';
import { of } from 'rxjs';

const load: Epic<RootAction, TargetsAction, RootState> = action$ => {
  return action$.pipe(
    filter(isActionOf(targetsActions.load)),
    switchMap(action => {
      return ApiService.getTargets(action.payload).pipe(
        map(data => {
          return targetsActions.success(data);
        }),
        catchError(() => {
          return of(targetsActions.fail('error during loading'));
        })
      );
    })
  );
};

export const epics = [load];
