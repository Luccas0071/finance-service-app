import { Outlet } from "react-router-dom";

const MainLayout = ({ children }) => {
    return (
        <>
        <header>Reader</header>
        <main><Outlet /></main>
        <footer>Code Solution @copy</footer>
        </>
    );
}

export default MainLayout;