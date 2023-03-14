export function alertDismis(elementClass) {
  setTimeout(() => {
    var alert_dis = document.querySelectorAll(elementClass);
    alert_dis.forEach((x) =>
      x.addEventListener("click", function () {
        x.parentElement.classList.add("hidden");
      })
    );
  }, 100);
}
