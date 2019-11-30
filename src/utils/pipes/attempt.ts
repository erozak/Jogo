import { pipe, of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import isFunction from 'lodash/isFunction';

export type Result<T> = { result: T } | { error: any };

export type Project<I, O> = (result: I) => O;

export type Output<T> = Observable<Result<T>>;

export default function attempt<I, O>(project?: Project<I, O>) {
  return pipe(
    map((result: I) => ({ result: project ? project(result) : result })),
    catchError(error => of({ error })),
  );
}
