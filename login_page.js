const USERNAME = 'MaheshS3443';
const PASSWORD = 'frontend@0830';

document.getElementById('loginbtn').onclick = () => {
    const usernameinp = document.querySelector('.username').value;  
    const passwordinp = document.querySelector('.password').value;  
    const displayedcaptcha = document.querySelector('.captcha p').innerText;
    const captchainp = document.querySelector('.usercaptcha').value;
    const errorBox = document.getElementById('error-msg');

    // Clear previous error
    errorBox.style.display = 'none';
    errorBox.innerText = '';

    const showError = (message) => {
        errorBox.innerText = message;
        errorBox.style.display = 'inline';
        errorBox.style.opacity = 0;

        let fadeIn = errorBox.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
        fadeIn.onfinish = () => {
            errorBox.style.opacity = 1;
            setTimeout(() => {
                let fadeOut = errorBox.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1000 });
                fadeOut.onfinish = () => errorBox.style.display = 'none';
            }, 10000); // show for 10s
        };
    };

    if (displayedcaptcha !== captchainp) {
        showError('Invalid captcha');
        document.querySelector('.usercaptcha').value = '';
        document.querySelector('.username').value = '';
        document.querySelector('.password').value = '';
    } else if (usernameinp === USERNAME && passwordinp === PASSWORD) {
        window.location.href = 'otp_page.html';
    } else {
        showError('Invalid username or password');
        document.querySelector('.username').value = '';
        document.querySelector('.password').value = '';
        document.querySelector('.usercaptcha').value = '';
    }
};

document.getElementById('icon').onclick=() =>{
    let array=['xugxi', '1oOWk', '7aCCz', 'RLVk8', 'bP61l', '2G589', 'aFTwl', 'JZMCK', 'DedN7', '1r5mv'];
    let gencaptcha=Math.floor(Math.random()*10);
    let dispcaptcha=document.querySelector('.captcha p');
    dispcaptcha.innerText=array[gencaptcha]
};
