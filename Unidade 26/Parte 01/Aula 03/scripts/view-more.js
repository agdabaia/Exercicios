const viewMoreButtons = document.querySelectorAll('.view-more-expand, .view-more-collapse');

viewMoreButtons.forEach(button => {
  button.onclick = (event) => {
    const holder = button.parentElement.parentElement;
    holder.classList.toggle('view-more--expand');
  }
});
