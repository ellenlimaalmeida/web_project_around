const editButton = document.querySelector(".profile__edit");
const popup = document.querySelector("#edit-pop-up");
const closeButton = document.querySelector(".pop-up__close");
const popupButton = document.querySelector(".pop-up__button");
const popupInputName = document.querySelector(".pop-up__input-name");
const popupInputRole = document.querySelector(".pop-up__input-role");

const profileName = document.querySelector(".profile__name");
const profileRole = document.querySelector(".profile__role");

if (!editButton || !popup || !closeButton) {
  console.error("Erro: Elementos não encontrados.");
}

// Abre o pop-up
editButton.addEventListener("click", () => {
  popup.classList.add("pop-up_opened");
});

// Fecha o pop-up
closeButton.addEventListener("click", () => {
  popup.classList.remove("pop-up_opened");
});

// Fecha ao clicar fora do container
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.classList.remove("pop-up_opened");
  }
});

//Evento do "Value"
popupButton.addEventListener("click", () => {
  profileName.textContent = popupInputName.value;
  profileRole.textContent = popupInputRole.value;
});
