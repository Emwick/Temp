import {createContext, useContext} from "react";

const ThemeContext = createContext(); //Creates the context

export const useTheme = () => useContext(ThemeContext);



export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}