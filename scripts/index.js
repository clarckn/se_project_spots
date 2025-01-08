const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const profileEditButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClsdButton = editProfileModal.querySelector(
  ".modal__closed-button"
);
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__text");
const editModalInputName = editProfileModal.querySelector(
  "#profile-name-input"
);
const editModalInputDescription = editProfileModal.querySelector(
  "#profile-description-input"
);
const modalFormElement = editProfileModal.querySelector(".modal__form");
const cardTemplate = document.querySelector("#template-cards");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardNameEl = cardElement.querySelector(".card__title");
  cardNameEl.textContent = data.name;
  const cardImgEl = cardElement.querySelector(".card__image");
  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  return cardElement;
}

function openModal() {
  editModalInputName.value = profileName.textContent;
  editModalInputDescription.value = profileDescription.textContent;
  editProfileModal.classList.add("modal_opened");
}

function closedModal() {
  editProfileModal.classList.remove("modal_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalInputName.value;
  profileDescription.textContent = editModalInputDescription.value;
  closedModal();
}

profileEditButton.addEventListener("click", openModal);

editProfileClsdButton.addEventListener("click", closedModal);

modalFormElement.addEventListener("submit", handleProfileFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
