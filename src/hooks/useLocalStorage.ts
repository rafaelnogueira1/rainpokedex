import { useState, Dispatch, SetStateAction } from "react";

export const useLocalStorage = <T>(
  keyName: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value) as T;
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
      } else {
        console.error("An unknown error occurred");
      }

      return defaultValue;
    }
  });

  const setValue: Dispatch<SetStateAction<T>> = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
};
