import { useContext, useRef, createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [text, setText] = useState("space");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    if (newDarkTheme) {
      document.body.classList.add("bg-customBlack", "text-white");
    } else {
      document.body.classList.remove("bg-customBlack", "text-white");
    }
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, text, setText }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
