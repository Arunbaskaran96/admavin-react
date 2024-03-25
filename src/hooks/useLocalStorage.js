export const useLocalStorage = (key) => {
  const setItem = (value) => {
    window.localStorage.setItem(key, value);
  };
  const getItem = () => {
    const score = JSON.parse(JSON.stringify(window.localStorage.getItem(key)));
    return score;
  };
  const removeItem = () => {
    window.localStorage.removeItem(key);
  };
  return { setItem, getItem, removeItem };
};
