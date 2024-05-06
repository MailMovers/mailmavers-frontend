import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  ChangeEvent,
} from 'react';

type ReturnTypes = [
  string,
  (e: ChangeEvent<HTMLInputElement> | string) => void,
  Dispatch<SetStateAction<string>>
];

const useInputAddress = (initialData: string): ReturnTypes => {
  const [value, setValue] = useState(initialData);

  const handler = useCallback((e: ChangeEvent<HTMLInputElement> | string) => {
    if (typeof e === 'string') {
      setValue(e);
    } else {
      setValue(e.target.value);
    }
  }, []);

  return [value, handler, setValue];
};

export default useInputAddress;
