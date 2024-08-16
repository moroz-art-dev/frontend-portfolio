export const setLocalStorageValue = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
};

export const getLocalStorageValue = (key: string) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
};
