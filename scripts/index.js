
import {initialCards as dataCard, postContainer, createCard, btnClose, closeModal, btnEdit, handleOpenModal, modalForm, formProfile, btnAdd, formPost, keyScape, sendFormProfile, createNewPost, validateProfile, validatePost} from "./utils.js";

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

dataCard.forEach(data => {
    createCard(data,'#postTemplate',postContainer);
})

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