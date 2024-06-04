function setVideoTime(time) {
    const video = document.getElementById('learningVideo');
    video.currentTime = time;
    video.play();
}

document.getElementById('burger').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});