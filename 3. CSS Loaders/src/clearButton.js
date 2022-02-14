import style from "./clearButton.css";

const el = document.createElement("button");
el.innerHTML = "Clear";
el.classList.add([style.button]);
el.onclick = function () {
  alert("Clear clicked");
};
document.body.appendChild(el);
