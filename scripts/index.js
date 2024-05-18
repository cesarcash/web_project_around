import Section from './Section.js';
import Card from "./Card.js";

import {initialCards as dataCard, postContainer, btnClose, closeModal, btnEdit, handleOpenModal, modalForm, formProfile, btnAdd, formPost, keyScape, sendFormProfile, createNewPost, config} from "./utils.js";
import FormValidator from './FormValidator.js';

const validateProfile = new FormValidator(config,formProfile);
const validatePost = new FormValidator(config,formPost);

document.addEventListener('keydown', keyScape)

window.addEventListener("click", function(evt) {
  
  const element = evt.target;

  if(element.classList.contains('popup_opened')){
    closeModal();
  }
  
})

btnClose.forEach(buttonClose => {
  buttonClose.addEventListener('click', closeModal)
})

const cardSection = new Section({
  data: dataCard,
  renderer: (item) => {
    const card = new Card(item,'#postTemplate');
    const newCard = card.generateCard();
    cardSection.addItem(newCard);
  }
},postContainer);

cardSection.renderItems();

formProfile.addEventListener('submit',sendFormProfile);
formPost.addEventListener('submit', createNewPost);

btnEdit.addEventListener('click', function(){
  handleOpenModal(modalForm);
  formProfile.style.display = 'block';
  document.querySelector('#name-input').value = userName.textContent;
  document.querySelector('#about-input').value = userDescription.textContent;
})

btnAdd.addEventListener('click', function(){
  handleOpenModal(modalForm);
  formPost.style.display = 'block';
})

validateProfile.enableValidation();
validatePost.enableValidation();