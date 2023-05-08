import Head from 'next/head'
import styles from '/styles/Main/Home.module.css'
// import Header from '../.modules/Header'
import Sidebar from '/.modules/Sidebar'
import checkJwt from '../../.modules/jwtChecker'
import { useEffect, useState } from 'react'

export default function Home() {
    const [userData, setData] = useState(null);

    useEffect(() => {
        setData(checkJwt());
    }, []);


    useEffect(() => {
        console.log(userData);
    }, [userData]);
    return (
        <div className={styles.container}>
            <Head>
                <title>Star Memo</title>
                <meta name="description" content="Text to me." />
                <link rel="icon" href="/icon.ico" />
            </Head>
            {/* <Header/> */}

            <Sidebar />
            <main className={styles.main}>

                <img src={"/userProfile.png"} className={styles.profile} />
            </main>
        </div>
    )
}
