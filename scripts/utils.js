import Card from "./Card.js";

export const modal = document.querySelector('#popup');
export const modalImage = document.querySelector('.popup__image');
export const modalForm = document.querySelector('.popup__form');
export const btnClose = document.querySelectorAll('.button_action_close');
export const formProfile = document.querySelector('#formEditProfile');
export const formPost = document.querySelector('#formNewPost');
export const btnEdit = document.querySelector('#button__edit');
export const btnAdd = document.querySelector('#button__add');
export const inputName = document.querySelector('#name-input');
export const inputAbout = document.querySelector('#about-input');
// export const postContainer = document.querySelector('#post');
export const postContainer = '#post';
export const txtTitle = document.querySelector('#title-input');
export const txtUrl = document.querySelector('#url-input');

export const config = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
}

export const initialCards = [
    {
      name: "Puerto progreso, Yucatán",
      link: "https://cesarcash.github.io/web_project_around/images/gallery__image1.jpg"
    },
    {
      name: "La Habana, Cuba",
      link: "https://cesarcash.github.io/web_project_around/images/gallery__image7.jpg"
    },
    {
      name: "Chiapas",
      link: "https://cesarcash.github.io/web_project_around/images/gallery_image5.jpg"
    },
    {
      name: "Cartagena, Colombia",
      link: "https://cesarcash.github.io/web_project_around/images/gallery_image2.JPG"
    },
    {
      name: "Oaxaca",
      link: "https://cesarcash.github.io/web_project_around/images/gallery__image3.jpg"
    },
    {
      name: "Colonia, Uruguay",
      link: "https://cesarcash.github.io/web_project_around/images/gallery__image4.jpg"
    }
];

export function closeModal(){
    formProfile.style.display = 'none';
    formPost.style.display = 'none';
    modal.classList.remove('popup_opened')
}

export function keyScape(evt){

    const keyUser = evt.key;
    if(keyUser === 'Escape' && modal.classList.contains('popup_opened')){
      closeModal();
      evt.target.removeEventListener('keydown', keyScape);
    }
  
}

export function handleOpenModal(content){
    modal.classList.add('popup_opened');
    modalForm.style.display = 'none';
    modalImage.style.display = 'none';
    content.style.display = 'block';
}

export const createCard = (objData,template,container) => {

  const postContainer = document.querySelector(container)
  const newCard = new Card(objData,template);
  console.log("🚀 ~ createCard ~ newCard:", newCard)
  const card = newCard.generateCard();
  postContainer.prepend(card);

}

export function createNewPost(data){
  console.log("🚀 ~ createNewPost ~ data:", data)

  const formData = {
      name: data.title,
      link: data.url
  }

  createCard(formData,'#postTemplate',postContainer)

}