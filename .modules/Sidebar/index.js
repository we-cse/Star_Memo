import styles from '../../styles/Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [checked, check] = useState(true);
    const [theme, setTheme] = useState(false);
    const Closing = () => {
        if (checked) {
            check(false);
        } else {
            check(true);
        };
    };

    useEffect(() => {
        const sidebar = document.querySelector(`.${styles.container}`);
        const button = document.querySelector(`.${styles.closeButton}`);
        {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */ }
        if (checked) {
            sidebar.style.transform = 'translate(-100%, 0)'
            button.style.transform = 'translate(250%, 0)'
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>';
        } else {
            button.style.transform = 'translate(0, 0)'
            sidebar.style.transform = 'translate(0, 0)'
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
        };
    }, [checked]);
    return (
        <div className={styles.container}>
            <input className={styles.closeCheckbox} id="close" defaultChecked={false} type="checkbox" />
            <label className={styles.closeButton} onClick={Closing}>
                {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </label>
            <div className={styles.sidebarItems}>
                <Link className={styles.link} href="/">
                    <Image className={styles.icon} src="/icon.svg" alt="headerIcon" width={40} height={40} />
                    <h1>Star Memo</h1>
                </Link>
                <div className={styles.items}>
                    <div className={styles.item}><Link href="/">Home</Link></div>
                    <div className={styles.item}><Link href="/login">Login</Link></div>
                </div>
            </div>
        </div>
    )
}
