"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("isDarkTheme");
    if (storedTheme) {
      setDarkTheme(storedTheme === "true");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkTheme);
    localStorage.setItem("isDarkTheme", String(isDarkTheme));
  }, [isDarkTheme]);

  const toggleDarkTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
