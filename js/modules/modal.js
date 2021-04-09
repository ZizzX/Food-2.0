function closeModal(modalName) {
  const modal = document.querySelector(modalName);
  
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

function openModal(modalName, modalTimerId) {
  const modal = document.querySelector(modalName);

  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";

  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}

function modal(TriggerModal, modalName, modalTimerId) {
  const modalTrigger = document.querySelectorAll(TriggerModal),
    modal = document.querySelector(modalName);

  modalTrigger.forEach((btn) => {
    btn.addEventListener("click", () => openModal(modalName, modalTimerId));
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
      closeModal(modalName);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal(modalName);
    }
  });

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalName, modalTimerId);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
}

export default modal;
export { openModal };
export { closeModal };
