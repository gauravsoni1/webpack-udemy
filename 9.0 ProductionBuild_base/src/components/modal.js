import "./modal.css";

function showModal() {
  const modalEl = document.createElement("div");
  modalEl.id = "myModal";
  modalEl.classList.add("modal");
  modalEl.innerHTML = `
    <div class="modal-content">
      <span id="closeModal" class="close">&times;</span>
      <p>Here we show our detailed pricing !!</p>
    </div>
  `;

  document.body.appendChild(modalEl);

  const closeEl = document.getElementById("closeModal");
  closeEl.addEventListener("click", function () {
    modalEl.style.display = "none";
  });
}

export default showModal;
