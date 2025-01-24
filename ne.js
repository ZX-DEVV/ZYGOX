// Add glowing effect on button click
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 500);
    });
  });
  