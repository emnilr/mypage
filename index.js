function navigate(page) {
  const click = document.getElementById("click-sound");
  click.currentTime = 0;
  click.play();
  setTimeout(() => {
    window.location.href = page;
  }, 200);
}

window.addEventListener("load", () => {
  const windows = document.querySelectorAll(".win7-window");

  let isDragging = false;
  let activeWin = null;
  let offsetX = 0;
  let offsetY = 0;

  windows.forEach((win) => {
    const titleBar = win.querySelector(".win7-titlebar");

    titleBar.addEventListener("mousedown", (e) => {
      isDragging = true;
      activeWin = win;
      offsetX = e.clientX - win.offsetLeft;
      offsetY = e.clientY - win.offsetTop;
      document.body.style.userSelect = "none";
    });
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    activeWin = null;
    document.body.style.userSelect = "auto";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging || !activeWin) return;

    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    const winWidth = activeWin.offsetWidth;
    const winHeight = activeWin.offsetHeight;
    const maxLeft = window.innerWidth - winWidth;
    const maxTop = window.innerHeight - winHeight;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft > maxLeft) newLeft = maxLeft;
    if (newTop > maxTop) newTop = maxTop;

    activeWin.style.left = newLeft + "px";
    activeWin.style.top = newTop + "px";

    const centerWindow = (win) => {
      const winWidth = win.offsetWidth;
      const winHeight = win.offsetHeight;

      const left = (window.innerWidth - winWidth) / 2;
      const top = (window.innerHeight - winHeight) / 2;

      win.style.left = `${left}px`;
      win.style.top = `${top}px`;
  };
  });
});
