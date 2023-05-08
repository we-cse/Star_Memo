import Link from 'next/link'
import styles from '../../styles/Footer.module.css';
export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <Link href="/">Star Memo</Link>
            </div>
        </footer>
    )
}
