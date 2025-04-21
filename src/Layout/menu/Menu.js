import './Menu.css';

const Menu = () => {
    return (

        <nav className="sidebar">
            <div className="sidebar-content">

                <div className='user'>
                    <img
                        src="https://github.com/luccas0071.png"
                        alt="User Avatar" 
                        className="user-avatar" 
                        />

                    <p className='user-infos'>
                        <span className='item-description'>Lucas Oliveira</span>
                        <span className='item-description'>Lorem ipsum</span>
                    </p>
                </div>

                <ul className='side-items'>
                    <li className="side-item active">
                        <a href="/home">
                            <span className="material-icons">home</span>
                            <span className='item-description'>Home</span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="/transaction">
                            <span className="material-icons">sync_alt</span>
                            <span className='item-description'>Transação</span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="/bankAccount">
                            <span className="material-icons">account_balance</span>
                            <span className='item-description'>Conta Bancaria</span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="/planning">
                            <span className="material-icons">list</span>
                            <span className='item-description'>Planejamento</span>
                        </a>
                    </li>

                    <li className="side-item">
                        <a href="/category">
                            <span className="material-icons">category</span>
                            <span className='item-description'>Categoria</span>
                        </a>
                    </li>
                </ul>

                <button className="opem-btn">
                    <span itemID='open-btn-icon' class="material-icons">keyboard_arrow_right</span>
                </button>

            </div>

            <div className="logout">
                <button className="logout-btn">
                    <span class="material-icons">logout</span>
                    <span className='item-description'>Logout</span>
                </button>
            </div>
        </nav>
    );
};

export default Menu;