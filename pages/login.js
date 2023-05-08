import Head from 'next/head'
import styles from '../styles/Login.module.css'
import Footer from '../.modules/Footer'
import Sidebar from '../.modules/Sidebar'
import { API_HOST, SECRET } from "/.modules/config";

import { useEffect, useState } from 'react'

export default function Login() {
    const [time, setTime] = useState(-1);
    var [phone, setPhone] = useState(0);
    var [register, setRegister] = useState(false);
    const [timeText, setTimeText] = useState("3:00");
    var [timeout, setTimeouted] = useState(null);

    const logined = (jwt) => {
        localStorage.setItem('token', jwt);
        window.location.href = '/main/home';
    }

    const getTime = (time) => {
        const sec = time % 60;
        const min = Math.floor(time / 60);
        setTimeText(min + ":" + (sec < 10 ? "0" + sec : sec));
    };

    const requestSMS = async () => {
        setTimeout(clearTimeout(timeout))
        const number = document.querySelector("#number");
        const verify = document.querySelector("#verify");
        const timer = document.querySelector("#timer");

        var post = await fetch(API_HOST + "/auth/sms.php", {
            method: "POST",
            body: JSON.stringify({ "phone": number.children.item(0).value, "secret_key": SECRET })
        });
        console.log("Verify Requested");

        post = await post.json();
        if (post.status == 1) {
            verify.style.transform = "translate(-50%, 100%)";
            timer.style.transform = "translate(-50%, 200%)";
            timer.style.opacity = 1;
            setTime(180);
            setPhone(number.children.item(0).value);
        }
        console.log("> Request returned");
        console.log(post);
    };

    const checkSMS = async () => {
        const number = document.querySelector("#number");
        const verify = document.querySelector("#verify");

        var post = await fetch(API_HOST + "/auth/verification.php", {
            method: "POST",
            body: JSON.stringify({ "phone": number.children.item(0).value, "auth_code": verify.children.item(0).value })
        });

        post = await post.json();
        console.log(post)
        if (post.verify == 1) {
            post = await fetch(API_HOST + "/user/user_check.php", {
                method: "POST",
                body: JSON.stringify({ "id": number.children.item(0).value })
            });
            post = await post.json();
            console.log(post);
            if (post.check == 0) {
                verify.children.item(0).value = "";
                setRegister(true);
            } else {
                post = await fetch(API_HOST + "/user/user_login.php", {
                    method: "POST",
                    body: JSON.stringify({ "id": number.children.item(0).value, secret_key: SECRET })
                });
                post = await post.json();
                console.log(post);
                logined(post.jwt);
                alert("로그인 되었습니다.");
            }
        } else {
            alert("틀렸습니다.");
        }
    };

    const registerRequest = async () => {
        const name = document.querySelector("#name");

        var post = await fetch(API_HOST + "/user/user_register.php", {
            method: "POST",
            body: JSON.stringify({ "id": phone, "nickname": name.children.item(0).value, agree: 1 })
        });

        post = await post.text();
        console.log(post);
        if (post.status == 1) {
            logined(post.jwt);
        } else {

        }
    }

    const countDown = () => {
        setTime(time - 1);
        getTime(time);
    }

    const failedVerify = () => {
        setTimeout(clearTimeout(timeout))
        setTime(-1);
        const verify = document.querySelector("#verify");
        const timer = document.querySelector("#timer");
        verify.style.transform = "translate(-50%, 0%)";
        timer.style.transform = "translate(-50%, 0%)";
        timer.style.opacity = 0;
    };

    useEffect(() => {
        if (time <= -1) return failedVerify();
        if (time == 180) return countDown();
        setTimeouted(setTimeout(countDown, 1000));
    }, [time]);

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <meta name="description" content="StarMemo Login." />
                <link rel="icon" href="/icon.ico" />
            </Head>
            {/* <Header/> */}

            <Sidebar />

            <main className={styles.main}>
                <img width={100} src="/icon.png" />
                <h1 className={styles.title}>Star Memo</h1>
                {
                    !register &&
                    <div className={styles.form}>
                        <label id="number"><input type={'text'} placeholder='번호' /> <input type={'button'} onClick={requestSMS} value={time == -1 ? "인증번호 받기" : "재전송"} /></label>
                        <label id="verify"><input type={'text'} placeholder="인증번호" /> <input type={'button'} onClick={checkSMS} value="인증하기" /></label>
                        <label id="timer"><span className={styles.timer}>{timeText}</span></label>
                    </div>
                }
                {
                    register &&
                    <div className={styles.form2}>
                        <label id="name"><input type={'text'} placeholder='이름' /> <input type={'button'} onClick={registerRequest} value={"회원가입"} /></label>
                    </div>
                }
            </main>
            <Footer />
        </div>
    )
}
