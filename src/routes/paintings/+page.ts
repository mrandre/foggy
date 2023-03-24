import type { PageLoad } from './$types';
import api from './api';
export const load = (() => {
  return api().then((json) => {
    return json.data;
  } );
}) satisfies PageLoad;