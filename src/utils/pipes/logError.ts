import { tap } from 'rxjs/operators';

export default function logError<T>() {
  return tap<T>({
    error(error) {
      console.error(error);
    },
  });
}
