const refs = {
  progress: document.getElementById('progress-line'),
  prev: document.getElementById('prev'),
  next: document.getElementById('next'),
  circles: document.querySelectorAll('.circle'),
};

let currentActive = 1;

refs.next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > refs.circles.length) {
    currentActive = refs.circles.length;
  }

  update();
});

refs.prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  refs.circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');

  refs.progress.style.width =
    ((actives.length - 1) / (refs.circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    refs.prev.disabled = true;
  } else if (currentActive === refs.circles.length) {
    refs.next.disabled = true;
  } else {
    refs.prev.disabled = false;
    refs.next.disabled = false;
  }
}
