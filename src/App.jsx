import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Componenets/Header";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme}
     ${theme == "dark" ? "bg-[#121212]" : null} min-h-[100vh]`}
      >
        <Header></Header>
        <Home></Home>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
