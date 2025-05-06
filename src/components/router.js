        import { Route, Routes } from "react-router-dom";
        import Main from "./Main";
        import Historia from "./Main/Historia";
        import Personajes from "./Main/Personajes";

        const AppRouter = () => {
        return (
            <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/inicio" element={<Main />} />
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/historia" element={<Historia />} />
            </Routes>
        );
        };

        export default AppRouter; 