const tooltipVisibleClass = 'tooltip--visible';
const tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(item => {
  item.onclick = (event) => {
    event.stopPropagation();
    const span = item.querySelector(':scope > span');

    if (span) {
      span.classList.add(tooltipVisibleClass);
    }


    window.addEventListener('click', (event) => {
      if (event.target !== item) {
        span.classList.remove(tooltipVisibleClass);
      }
    }, { once: true });

    setTimeout(() => {
      const visibles = document.querySelectorAll(`.${tooltipVisibleClass}`);
      visibles.forEach(item => item.classList.remove(tooltipVisibleClass));
    }, 4000);
  }
});
