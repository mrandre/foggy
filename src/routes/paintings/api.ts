import axios from 'axios';

const API_URL = "https://api.harvardartmuseums.org/";

const API_KEY = "e938f66b-e744-4a93-befd-c5f17231e3e0";

// const FIELDS = "primaryimageurl, title, people";

const TOTAL_ITEMS = 50;

const CULTURES = {
  American: "37526778",
  Netherlands: "37528173",
  French: "37527426",
  German: "37527453",
  Greek: "37527534",
  Japanese: "37527795",
};
const SORT = "random";
const objectUrl = `${API_URL}object/?size=${TOTAL_ITEMS}&hasimage=1&classification=26&culture=${Object.values(
  CULTURES
).join("|")}&sort=${SORT}&q=imagepermissionlevel:0&apikey=${API_KEY}`;

export default () => axios.get(objectUrl);