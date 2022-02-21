document.querySelector("select").addEventListener("input", function () {
  const value = this.value;

  document.querySelectorAll("ul").forEach(function (ul) {
    ul.className = "hidden";
    if (value === ul.id) {
      ul.className = "";
    } else {
      ul.className = "hidden";
    }
  });
});
