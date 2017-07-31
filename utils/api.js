const names = [
  "Marla Paez",
  "Claudio Feathers",
  "John Shute",
  "Bernarda Sea",
  "Callie Leist",
  "Mckinley Stamm",
  "Arnold Hoke",
  "May Berry",
  "Corey Neeson",
  "Daphine Launer",
  "Manuel Goetzinger",
  "Bruno Freitas",
  "Marty Stiff",
  "Rudolph Shoaff",
  "Clyde Vigliotti",
  "Jong Dirks",
  "Ivory Kelso",
  "Stanley Forsberg",
  "Charmain Brousseau",
  "Cristina Brazil",
  "Jeramy Jackson",
  "Madlyn Krogh",
  "Emily Popham",
  "Talia Comacho",
  "Lovella Bolan",
  "Aleida Feaster",
  "Shyla Adamek",
  "Alton Laster",
  "Bethel Wickstrom",
  "Rebecka Hedgpeth",
  "Lavenia Herron",
  "Lisa Fill",
  "Desire Joyner",
  "Altha Maxim",
  "Fallon Lafrance",
  "Cletus Simpkins",
  "Edgardo Mosteller",
  "Lorelei Fugitt",
  "Elsa Acklin",
  "Cristin Knepper",
  "Mose Larger",
  "Christia Gwynn",
  "Zelma Bruggeman",
  "Angelo Westbrooks",
  "Kelvin Miland",
  "Kennith Degree",
  "Dotty Updike",
  "Raleigh Barksdale",
  "Dania Provence",
  "Reanna Opp",
];

const colors = [
  '#48324b',
  '#1e404e',
  '#000080',
  '#1e404e',
  '#000066',
  '#38eeff',
  '#03208d',
  '#48324b',
  '#5e0000',
  '#9bb280',
  '#b650c9',
  '#382db9',
  '#add8e6',
  '#38f9da',
  '#0e102e',
  '#cd0037',
  '#6df319',
  '#9ac1ff',
  '#1a62de',
  '#5bd06b',
  '#da2e37',
  '#43f547',
  '#660718',
  '#fc9cf9',
  '#342a74',
  '#fdf2d2',
  '#ddfdd2',
  '#ddfdd2',
  '#fdf2d2',
  '#ffe4c4',
  '#fdf2d2',
  '#9ac1ff',
  '#c3d7ff',
  '#ff82ab',
  '#db7093',
  '#ffec8b',
  '#bcee68',
  '#a2cd5a',
  '#ffb90f',
  '#eead0e',
  '#6495ed',
  '#cdaa7d',
];


/**
 * @return - [{name: 'Some Name', key: 0}, ..]
 */
export const getNames = () => {
  return names.map((name, key) => ({name, key}));
};

/**
 * @return - random color hex code.
 */
export const getRandomColor = () => {
  const num = Math.ceil(Math.random()*100%colors.length);
  return colors[num];
}

const encodeParams = (params) => {
  return Object.keys(params).reduce((query, key) => {
    return query.concat(`${key}=${params[key]}`);
  }, []).join('&');
};

export const fetchGiphy = (path, input) => {
  const host = 'https://api.giphy.com';
  const params = {
    api_key: '266e2bfc682e49ecb5c6984ba62d4b05',
    limit: 20,
    ...input
  }
  const url = host + path + '?' + encodeParams(params);
  console.log("Fetching", url);
  return fetch(url)
    .then(resp => resp.json())
    .catch(err => {
      console.error(err, url);
      return {};
    });
};
/**
 * @param {*} q - keyword to search for
 * @param {*} offset
 * @return {data} - https://developers.giphy.com/docs/#operation--gifs-search-get
 */
export const getSearchResultItems = (q, offset = 0) => {
  const params = {
    q,
    offset
  };
  return fetchGiphy('/v1/gifs/search', params);
};

/**
 * @param {*} offset
 * @return {data} - https://developers.giphy.com/docs/#operation--gifs-trending-get
 */
export const getTrendingItems = (offset = 0) => {
  const params = {
    offset
  };
  return fetchGiphy('/v1/gifs/trending', params);
};
