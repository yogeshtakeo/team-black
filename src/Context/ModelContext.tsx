import { createContext, useState } from "react";

export const ModelContext = createContext({
  navDestinations: {
    status: false,
    number: 0,
    updateStatus: () => {},
    updateNumber: (num: number) => {},
  },
});

export const ModelContextProvider = ({ children }: { children: any }) => {
  const [value, setValue] = useState(false);
  const [number, setNumber] = useState(0);

  const handleChange = () => {
    setValue(!value);
  };

  const handleNumber = (num: number) => {
    if (num === 10) {
      setValue(true);
    }
    setNumber(num);
  };

  return (
    <ModelContext.Provider
      value={{
        navDestinations: {
          status: value,
          updateStatus: handleChange,
          number,
          updateNumber: handleNumber,
        },
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
