import { withLatestFrom } from 'rxjs/operators';
import { Observable } from 'rxjs';

export default function toBeWithLatest<I>(input$: Observable<I>) {
  return function beWithLatest<S, O>(project: (source: S, input: I) => O) {
    return withLatestFrom(input$, project);
  };
}
