const audios = [];

document.querySelectorAll('.imageButton').forEach(button => {
    const audioFile = button.id.replace('_', '-') + '.m4a';
    const audio = new Audio(audioFile);

    audios.push(audio);

    button.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
    });
});

document.getElementById('stopButton').addEventListener('click', () => {
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
});
