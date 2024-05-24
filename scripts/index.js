import Section from './Section.js';
import Card from "./Card.js";
import Popup from './Popup.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

import {initialCards as dataCard, postContainer, btnClose, closeModal, btnEdit, handleOpenModal, modalForm, formProfile, btnAdd, formPost, keyScape, sendFormProfile, createNewPost, config} from "./utils.js";
import FormValidator from './FormValidator.js';

const objUser = {
  user: '#userName',
  description: '#userDescription'
}

const userInfo = new UserInfo(objUser);
const validateProfile = new FormValidator(config,formProfile);
const validatePost = new FormValidator(config,formPost);
const popup = new Popup('#popup');
const popupWithImage = new PopupWithImage();
const popupWithForm = new PopupWithForm((form) => {
  console.log(form)
},'.popup__form');

const cardSection = new Section({
  data: dataCard,
  renderer: (item) => {
    const card = new Card(item,'#postTemplate',popupWithImage.open);
    const newCard = card.generateCard();
    cardSection.addItem(newCard);
  }
},postContainer);

cardSection.renderItems();

btnEdit.addEventListener('click', function(){
  const userData = userInfo.getUserInfo()
  popupWithForm.open(modalForm,formProfile)
})

btnAdd.addEventListener('click', function(){
  popupWithForm.open(modalForm,formPost)
})

btnClose.forEach(buttonClose => {
  buttonClose.addEventListener('click', popup.close)
})

popup.setEventListeners()

validateProfile.enableValidation();
validatePost.enableValidation();