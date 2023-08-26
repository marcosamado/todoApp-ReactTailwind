import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main/Main";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-rgba dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] sm:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
};

export default App;
