import "./components/style.css";
import "./components/fonts.css";
import "./components/darkmode.css";
import "./components/utils.css";

import Loader from "./components/Loader/Loader";
import Blog from "./components/Blog/Blog";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <Loader />
            <Blog />
            <Navbar />
            <Main />
        </>
    );
}

export default App;
