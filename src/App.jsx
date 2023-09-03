import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import { useState } from "react";

const App = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const darkThemeApp =
        "min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] transition-all duration-500 bg-contain bg-no-repeat dark:bg-gray-rgba dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:sm:bg-[url('./assets/images/bg-desktop-dark.jpg')]";

    const lightThemeApp =
        "min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] transition-all duration-500 bg-contain bg-no-repeat sm:bg-[url('./assets/images/bg-desktop-light.jpg')]";

    return (
        <>
            <div className={darkTheme ? darkThemeApp : lightThemeApp}>
                <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default App;
