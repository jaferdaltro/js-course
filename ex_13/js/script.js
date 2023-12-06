function main() {
  function showTime(seconds) {
    let date = new Date(seconds * 1000);

    return date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'GMT' });
  }

  const watch = document.querySelector('.watch');
  const pauseBtn = document.querySelector('.pause');
  const clearBtn = document.querySelector('.clear');

  let seconds = 0;
  let timer;
  function startTime() {
    timer = setInterval(() => {
      seconds++;
      watch.innerHTML = showTime(seconds);
    }, 1000);
  }

  document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('start')) {
      clearInterval(timer);
      watch.classList.remove('paused');
      startTime();
    }
    if (el.classList.contains('pause')) {
      clearInterval(timer);
      watch.classList.add('paused');
    }
    if (el.classList.contains('clear')) {
      clearInterval(timer);
      watch.innerHTML = '00:00:00';
      watch.classList.remove('paused');
      seconds = 0;
    }
  });
}
main();
