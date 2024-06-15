import "./styles/index.css";
import Section from './scripts/Section.js';
import Card from "./scripts/Card.js";
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithConfirmation from './scripts/PopupWithConfirmation.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';
import {setInfoUser, configHeaders, btnPhoto, URLUser, URLCards, postContainer, btnEdit, formProfile, btnAdd, formPost, createNewPost, config, inputName, inputAbout} from "./scripts/utils.js";
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

infoUser.then(data => {
  setInfoUser(data)
})
.catch(error => console.log(error))

arrCards.then(cards => {
  const cardSection = new Section({
    data: cards,
    renderer: (item) => {
      const card = new Card(item,'#postTemplate',popupWithImage.open);
      const newCard = card.generateCard();
      cardSection.addItem(newCard);
    }
  },postContainer);
  
  cardSection.renderItems();
  
})
.catch(error => console.log(error))

const objUser = {
  user: '#userName',
  description: '#userDescription'
}

const userInfo = new UserInfo(objUser);
const validateProfile = new FormValidator(config,formProfile);
const validatePost = new FormValidator(config,formPost);
const popupWithImage = new PopupWithImage('#popupImage');

const popupFormEdit = new PopupWithForm((data) => {
  console.log("🚀 ~ popupFormEdit ~ data:", data)

  const editUser = api.editInfoUser(data,URLUser)
  editUser.then(res => {
    console.log("🚀 ~ res:", res)
    userInfo.setUserInfo(data.nameProfile,data.aboutMe)
  })
  .catch(error => console.log(error))

},'#popupEdit');

const popupFormAdd = new PopupWithForm((data) => {
  createNewPost(data)
},'#popupAdd');

const popupFormPhoto = new PopupWithForm((data) => {
  console.log("🚀 ~ popupFormPhoto ~ data:", data)
},'#popupPhoto')



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