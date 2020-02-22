export const getFromStorage = (key: string) => {
  const value = localStorage.getItem(key);

  if (!value) return undefined;

  return JSON.parse(value);
};

export const setToStorage = (key: string, value: any) => {
  let thisValue = value;

  if (typeof value !== "string") {
    thisValue = JSON.stringify(value);
  }

  localStorage.setItem(key, thisValue);
};

export const removeFromStorage = (key: string) => {
  localStorage.removeItem(key);
}
