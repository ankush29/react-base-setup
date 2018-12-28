import fetchCircuits from '../Api';

const storeData = data => ({
  type: 'STORE_DATA',
  data,
});

const fetchData = () => dispatch => fetchCircuits().then(res => dispatch(storeData(res)));

export default fetchData;
