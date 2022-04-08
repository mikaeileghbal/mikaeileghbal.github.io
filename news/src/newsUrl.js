const apiKey = "de4d583b84ab409bb941153e532d6c6f";
//const apiURL = `https://newsapi.org/v2/everything?q=tesla&from=2022-02-28&sortBy=publishedAt&apiKey=${apiKey}`;
const apiURL = `http://newsapi.org/v2/top-headlines?`;
const sourceURL = `http://newsapi.org/v2/top-headlines/sources?apiKey=${apiKey}`;

export { apiKey, apiURL, sourceURL };
