import type { PageLoad } from './$types';
import axios from 'axios'; 
export const load = ((params) => {
  const id = params.params.id;
  const API_URL = "https://api.harvardartmuseums.org/";

  const API_KEY = "e938f66b-e744-4a93-befd-c5f17231e3e0";

  const objectUrl = `${API_URL}object/${id}/?apikey=${API_KEY}`;
  return axios.get(objectUrl).then((json) => {
    return json.data;
  } );

}) satisfies PageLoad;