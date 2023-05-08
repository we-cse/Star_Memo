import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../.modules/Header'
import Footer from '../.modules/Footer'
import Sidebar from '../.modules/Sidebar'
import particleConfig from '../.modules/particleConfig';

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import Link from 'next/link'

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Star Memo</title>
        <meta name="description" content="Text to me." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {/* <Header/> */}

      <Sidebar />
      <Particles init={particlesInit} options={particleConfig} />
      <main className={styles.container}>
        <div className={styles.header}>
          <div className={styles.circle}>
            <div className={styles.title}>StarMemo</div>
          </div>
          <div className={styles.hidder}>
            <div className={styles.description}>
              <p>나의 메세지를 나만의 우주로</p>
              <p>당신의 우주를 꾸며보세요.</p>
            </div>
          </div>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}>
            <div className={styles.btns}>
              <Link href={"/login"}>
                <input type={"button"} className={styles.button} value={"사용하기"} />
              </Link>
              <Link href={"/login"}>
                <input type={"button"} className={styles.button} value={"다른 버튼"} />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <main className={styles.items}>
        <div className={`${styles.leftSide} ${styles.selected}`}>
          <p className={styles.title}>나만의 우주</p>
          <div className={styles.description}>
            <p>반짝이는 별들 사이 당신의 이야기를</p>
            <p>하나의 행성으로 만들어보세요.</p>
            <p>나만의 우주를 꾸며 나를 빛내보세요.</p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.circle}></div>
          <div className={styles.circle2}>돌거 필요</div>
          <div className={styles.circle3}></div>
        </div>
      </main>
      <main className={styles.items}>
        <div className={`${styles.leftSide} ${styles.flex}`}>
          <div className={styles.scrollPaper}>
            <div className={styles.description}>
              <p>앞으로의 길을 내다볼 때 필요한 건</p>
              <p>걱정이 아닌 판단이다.</p>
              <p>-</p>
              <p>김수현/나는 나로 살기로 했다</p>
            </div>
          </div>
        </div>
        <div className={`${styles.rightSide} ${styles.selected}`}>
          <p className={styles.title}>서로의 마음을 따뜻하게</p>
          <div className={styles.description}>
            <p>서로에게 글귀를 써내려가며</p>
            <p>따뜻한 한마디를 건내주세요.</p>
            <p>당신의 글귀로</p>
            <p>따뜻한 마음을 전해보아요.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
