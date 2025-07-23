import { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.css';
import logo from '../../assets/images/logo_dourada.png'
import { HashLink } from 'react-router-hash-link';
import MenuHeader from '../MenuHeader/MenuHeader';
function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>

            <header className={`d-flex justify-content-between align-items-center p-3 ${styles.header}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <HashLink smooth to="/#hero" className={styles.brand}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                        <span className={styles.brandName}>MARCO CAMPOS</span>
                    </HashLink>
                    <MenuHeader/>
                    <div className={`${styles.hidden}`}>
                        <button
                            className="btn"
                            type="button"
                            aria-label="Menu"
                            onClick={toggleSidebar}
                        >
                            <i className="bi bi-list" style={{ fontSize: '2.5rem', color: '#ebb266[' }}></i>
                        </button>
                    </div>
                </div>
            </header>

            <div className={`${styles.hidden}`}>
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            </div>
        </>
    );
}

export default Header;
