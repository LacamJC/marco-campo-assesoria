import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'
import { HashLink } from 'react-router-hash-link';
function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <>
            <header className={`d-flex justify-content-between align-items-center p-3 ${styles.header}`}>
                <div className="container d-flex justify-content-between align-items-center">
                    <HashLink smooth to="/#hero" className={styles.brand}>
                        <img src={logo} alt="Logo" className={styles.logo} />
                        <span className={styles.brandName}>ASSESORIA JURÍDICA EMPRESARIAL</span>
                    </HashLink>
                    <button
                        className="btn"
                        type="button"
                        aria-label="Menu"
                        onClick={toggleSidebar}
                    >
                        <i className="bi bi-list" style={{ fontSize: '2.5rem' }}></i>
                    </button>
                </div>
            </header>

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
}

export default Header;
