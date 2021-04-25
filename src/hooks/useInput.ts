import { ChangeEventHandler, useCallback, useState } from 'react';

const useInput = (initailValue: string): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [value, setValue] = useState(initailValue);
  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value: targetValue },
    } = event;
    setValue(targetValue);
  }, []);
  return [value, onChangeHandler];
};

export default useInput;
