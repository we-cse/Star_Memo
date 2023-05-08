import styles from '../../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {

    return (
        <header className={styles.header}>
            <Link className={styles.link} href="/">
                <Image className={styles.icon} src="/icon.svg" alt="headerIcon" width={40} height={40} />
                <h1>Star Memo</h1>
            </Link>
        </header>
    )
}
