function startDownloadProcesstestimoniviviendo() {
    document.getElementById('testimoniviviendo-downloadwarning').style.display = 'block';
    let countdown = 5;
    let countdownElement = document.getElementById('testimoniviviendo-countdown');
    let interval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            document.getElementById('testimoniviviendo-downloadwarning').style.display = 'none';
            document.getElementById('testimoniviviendo-downloadlink').style.display = 'block';
        }
    }, 1000);
}

function copyDownloadLink() {
    let copyText = document.getElementById('testimoniviviendo-download-url');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    
    let notification = document.getElementById('testimoniviviendo-copy-notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

function closePopuptestimoniviviendo() {
    document.getElementById("testimoniviviendo-downloadlink").style.display = "none";
}