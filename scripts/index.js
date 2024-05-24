import Section from './Section.js';
import Card from "./Card.js";
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import UserInfo from './UserInfo.js';

import {initialCards as dataCard, postContainer, btnClose, btnEdit, modalForm, formProfile, btnAdd, formPost, createNewPost, config, inputName, inputAbout} from "./utils.js";
import FormValidator from './FormValidator.js';

const objUser = {
  user: '#userName',
  description: '#userDescription'
}

const userInfo = new UserInfo(objUser);
const validateProfile = new FormValidator(config,formProfile);
const validatePost = new FormValidator(config,formPost);
const popupWithImage = new PopupWithImage('#popupImage');
const popupFormEdit = new PopupWithForm((data) => {
  userInfo.setUserInfo(data.nameProfile,data.aboutMe)
},'#popupEdit');
const popupFormAdd = new PopupWithForm((data) => {
  createNewPost(data)
},'#popupAdd');

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
  inputName.value = userData.user;
  inputAbout.value = userData.work;
  popupFormEdit.open()
})

popupFormEdit.setEventListeners()
popupFormEdit.close()

btnAdd.addEventListener('click', function(){
  popupFormAdd.open()
})

popupFormAdd.setEventListeners()
popupFormAdd.close();

validateProfile.enableValidation();
validatePost.enableValidation();