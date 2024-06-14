import "./styles/index.css";
import Section from './scripts/Section.js';
import Card from "./scripts/Card.js";
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithConfirmation from './scripts/PopupWithConfirmation.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';
import {configHeaders, btnPhoto, URLUser, URLCards, initialCards as dataCard, postContainer, btnEdit, formProfile, btnAdd, formPost, createNewPost, config, inputName, inputAbout} from "./scripts/utils.js";
import FormValidator from './scripts/FormValidator.js';
import Api from './scripts/Api.js';

const api = new Api({
  headers: {
    authorization: configHeaders.token,
    "Content-Type": configHeaders.type
  }
});

const arrCards = api.getInitialCards(URLCards)
const infoUser = api.getInfoUser(URLUser);

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
const popupFormPhoto = new PopupWithForm((data) => {

},'#popupPhoto')

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

btnPhoto.addEventListener('click', function() {
  popupFormPhoto.open()
})

popupFormPhoto.setEventListeners()
popupFormPhoto.close()

popupFormEdit.setEventListeners()
popupFormEdit.close()

btnAdd.addEventListener('click', function(){
  popupFormAdd.open()
})

popupFormAdd.setEventListeners()
popupFormAdd.close();

popupWithImage.setEventListeners()

validateProfile.enableValidation();
validatePost.enableValidation();