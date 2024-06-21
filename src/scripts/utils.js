import Card from "./Card.js";
import Api from "./Api.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import PopupWithImage from "./PopupWithImage.js";

const group = 'web_es_11/';
const URLServer = `https://around.nomoreparties.co/v1/`;
export const modal = document.querySelector('#popup');
export const modalImage = document.querySelector('.popup__image');
export const modalForm = document.querySelector('.popup__form');
export const modalAdd = document.querySelector('#popupAdd');
export const modalEdit = document.querySelector('#popupEdit');
export const btnClose = document.querySelectorAll('.button_action_close');
export const formProfile = document.querySelector('#formEditProfile');
export const formPost = document.querySelector('#formNewPost');
export const formAvatar = document.querySelector('#formEditPhoto');
export const btnEdit = document.querySelector('#button__edit');
export const btnAdd = document.querySelector('#button__add');
export const btnPhoto = document.querySelector('.user__picture');
export const inputName = document.querySelector('#name-input');
export const inputAbout = document.querySelector('#about-input');
export const userPhoto = document.querySelector('.user__photo');
export const postContainer = '#post';
export const token = 'aeb303a7-85a3-41cc-b9b3-71f2eddd73ac';
export const URLUser = URLServer+group+'users/me';
export const URLCards = URLServer+group+'cards';
export const URLCardLike = URLServer+group+'cards/likes';
export const URLAvatar = URLServer+group+'users/me/avatar';

const popupWithImage = new PopupWithImage('#popupImage');
const popupWithConfirmation = new PopupWithConfirmation('#popupDelete');

export const configHeaders = {
  token,
  type: 'application/json'
}

const api = new Api({
  headers: {
    authorization: configHeaders.token,
    type: configHeaders.type
  }
});

export const config = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_inactive",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__input-error_active"
}

// export const createCard = (objData,template,container) => {

//   const postContainer = document.querySelector(container)
//   const newCard = new Card(objData,template,popupWithImage.open,popupWithConfirmation.open,handleLikeCard);
//   const card = newCard.generateCard();
//   postContainer.prepend(card);

// }

export function setInfoUser({about,name,avatar}){

  document.querySelector('#userName').textContent = name
  document.querySelector('#userDescription').textContent = about
  userPhoto.src = avatar
  userPhoto.alt = name

}

export function handleLikeCard(evt,idCard){
  
  const btnLike = evt.target;

  if(btnLike.classList.contains('button_is_active')){

    api.addLikeCard(URLCardLike+'/'+idCard)
    .then(res => {
      countLikes(btnLike,res)
    })
    .catch(error => console.log(error))

  }else{

    api.removeLikeCard(URLCardLike+'/'+idCard)
    .then(res => {
      countLikes(btnLike,res)
    })
    .catch(error => console.log(error))

  }

}

function countLikes(element,data){

  const container = element.nextElementSibling;
  const likes = data.likes.length;

  container.textContent = likes;

}