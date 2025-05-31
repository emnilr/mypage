function navigate(page) {
  const click = document.getElementById("click-sound");
  click.currentTime = 0;
  click.play();
  setTimeout(() => { window.location.href = page; }, 200);
}