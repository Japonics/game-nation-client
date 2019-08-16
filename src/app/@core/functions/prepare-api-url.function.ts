import {environment} from '../../../environments/environment';

export function prepareAPIUrl(url: string): string {
  return `${environment.baseUrl}${url}`;
}
