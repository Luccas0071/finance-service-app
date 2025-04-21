import { Outlet } from "react-router-dom";

import './MainLayout.css';
import Header from "./header/header";
import Footer from "./footer/footer";
import Menu from "./menu/Menu";

const MainLayout = ({ children }) => {
    return (
        <div className="main-layout">
            {/* <div className="menu"> */}
                <Menu />
            {/* </div> */}
            <div className="main">
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                <h1>Aqui meu conteudo</h1>
                {/* <Header />
                <div className="main-container">
                    <Outlet />
                </div>
                <Footer /> */}
            </div>
        </div>
    );
}

export default MainLayout;