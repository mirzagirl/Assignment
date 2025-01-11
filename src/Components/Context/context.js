import { useContext } from "react";
import Toto from "./toto";


const ThemeContext = React.createContext("light");

export default function App() {
    const theme = useContext(ThemeContext);
    return (<>
        <ThemeContext.Provider value={theme}>
            <Toto />
        </ThemeContext.Provider>
        </>
    );
}