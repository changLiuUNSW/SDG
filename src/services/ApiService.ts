import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { Goal } from '../models/Goal';
import { Target } from '../models/Target';

class ApiService {
  public getGoals = () => ajax.getJSON<Goal[]>('https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false');
  public getTargets = (code: string) =>
    ajax.getJSON(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${code}/Target/List?includechildren=true`).pipe(
      map((res: any) => {
        if (res?.[0]?.targets) {
          return res[0].targets as Target[];
        }
        return [];
      })
    );
}

export default new ApiService();
