import { createBrowserHistory, History } from 'history';

export default function configureHistory(): History {
  return createBrowserHistory();
}
