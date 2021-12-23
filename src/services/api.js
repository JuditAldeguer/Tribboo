// info en https://rickandmortyapi.com/documentation/#get-all-characters --> https://rickandmortyapi.com/api/character or '//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json'

const callToApi = () => {
  return fetch('//rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((response) => {
      const result = response.results;
      return result;
    });
};

const callToApiEpisodes = (numEpisode) => {
  return fetch(`${numEpisode}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.name;
      return result;
    });
};

const objectToExport = {
  callToApi: callToApi,
  callToApiEpisodes: callToApiEpisodes,
};
export default objectToExport;
