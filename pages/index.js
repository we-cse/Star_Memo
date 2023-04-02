import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../.modules/Header'
import Footer from '../.modules/Footer'
import Sidebar from '../.modules/Sidebar'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const addObserve = (datas) => {
      datas.forEach(i => {
        let elements = document.querySelectorAll("." + i[0]);
        elements.forEach(j => i[1].observe(j));
      });
    }

    var fadeIn = new IntersectionObserver((elements) => {
      const element = elements.find(i => i.isIntersecting);
      if (element?.target)
        element.target.style.opacity = 1;
    });

    var rightToLeft = new IntersectionObserver((elements) => {
      const element = elements.find(i => i.isIntersecting);
      setTimeout(() => {
        if (element?.target)
          element.target.style.transform = "translate(0, 0)";
      }, 1000);
    });

    addObserve([[styles.fadeIn, fadeIn], [styles.sideColor2, rightToLeft]]);
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Star Memo</title>
        <meta name="description" content="Text to me." />
        <link rel="icon" href="/icon.ico" />
      </Head>
      {/* <Header/> */}

      <Sidebar />
      <div className={styles.sideColor}></div>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              Star Memo
            </h1>
            <h3 className={styles.description}>
              나에게 소아올리는 메세지
            </h3>
            <h2 className={styles.login}>사용하기</h2>
          </div>
          <div className={styles.container}>
            <img src="/image.png"></img>
          </div>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={`${styles.container} ${styles.sideImg}`}>
            이미지 출처: <a href="https://unsplash.com/@diana_pole?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Diana Polekhina</a>
            <img src="/Home/memo1.jpg"></img>
          </div>
          <div className={`${styles.container} ${styles.sideColor2}`}>
            <h1 className={styles.title}>
              Star Memo란?
            </h1>
            <h3 className={styles.description}>
              <p>나에게 쓰는 편지를 모티브로 제작되어</p>
              <p>나라는 행성의 주위에 쏘아올리는 인공위성</p>
              <p>이라는 컨셉을 가지고 제작하게 되었습니다.</p>
              <br />
              <p>나의 소중한 순간들을 기록하며</p>
              <p>나의 삶에 대한 가치를 올려보아요.</p>
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
