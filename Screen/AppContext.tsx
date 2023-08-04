import React, {createContext, useState} from 'react';

interface AppContextType {
  ten: string;
  setTen: (ten: string) => void;
}

export const AppContext = createContext<AppContextType>({
  ten: '',
  setTen: () => {},
});

export const AppProvider = ({children}) => {
  const [ten, setTen] = useState('');
  return (
    <AppContext.Provider value={{ten, setTen}}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
