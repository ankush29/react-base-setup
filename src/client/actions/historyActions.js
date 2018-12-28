export default function addHistory(location) {
  return {
    type: 'ADD_HISTORY',
    payload: location
  };
}
