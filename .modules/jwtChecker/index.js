const { API_HOST } = require("../config");

const checkJwt = () => {
    var post;
    (async () => {
        const jwt = localStorage.getItem('jwt');
        post = await fetch(API_HOST + "/user/user_re_login.php", {
            method: "POST",
            body: JSON.stringify({ "jwt": jwt })
        });
        post = await post.json();
        console.log(post);
    })();
    console.log(post);

    return post;
}

module.exports = checkJwt;