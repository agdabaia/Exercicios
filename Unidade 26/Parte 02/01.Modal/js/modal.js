function getModal(id) {
  return document.getElementById(id);
}

function openModal(id) {
  const modal = getModal(id);
  modal.removeAttribute('hidden');
}

function closeModal(id) {
  const modal = getModal(id);
  modal.setAttribute('hidden', 'true');
}
