import { useState } from 'react';

function useDebounce({ input, delay }) {
  const [inputText, setInputText] = useState('');
  // blaat...

  return [input]
}

export default useDebounce;