import axios from 'axios';

const URL: string = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=USD`;

const fetchData = () => {
  const response = axios.get(URL).then(res => (res.data))
  return response;
};

export default fetchData;