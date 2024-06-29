import axios from 'axios';

const API_URL = 'https://disease.sh/v3/covid-19';

export const getCovidData = async () => {
  try {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
};

export const getCountriesData = async () => {
  try {
    const response = await axios.get(`${API_URL}/countries`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries data: ", error);
    return null;
  }
};
