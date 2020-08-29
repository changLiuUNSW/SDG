import { Epic } from 'redux-observable';
import { RootAction, RootState } from '..';
import { GoalsAction, goalsActions } from './actions';
import { isActionOf } from 'typesafe-actions';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import ApiService from '../../services/ApiService';
import { of } from 'rxjs';

const load: Epic<RootAction, GoalsAction, RootState> = action$ => {
  return action$.pipe(
    filter(isActionOf(goalsActions.load)),
    switchMap(() => {
      return ApiService.getGoals().pipe(
        map(data => {
          return goalsActions.success(data);
        }),
        catchError(() => {
          return of(goalsActions.fail('error during loading'));
        })
      );
    })
  );
};

export const epics = [load];
