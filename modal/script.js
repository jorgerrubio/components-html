const dialog = document.querySelector('dialog');
const close = document.querySelector('#close_modal');
const open = document.querySelector('#open_modal');

close.addEventListener('click', () => dialog.close());
open.addEventListener('click', () => dialog.showModal());