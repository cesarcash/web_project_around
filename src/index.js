import "./styles/index.css";
import Section from './scripts/Section.js';
import Card from "./scripts/Card.js";
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithConfirmation from './scripts/PopupWithConfirmation.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';
import {handleLikeCard, URLCardLike, createCard, setInfoUser, configHeaders, btnPhoto, URLUser, URLCards, postContainer, btnEdit, formProfile, btnAdd, formPost, config, inputName, inputAbout} from "./scripts/utils.js";
import FormValidator from './scripts/FormValidator.js';
import Api from './scripts/Api.js';

const api = new Api({
  headers: {
    authorization: configHeaders.token,
    type: configHeaders.type
  }
});

const arrCards = api.getInitialCards(URLCards)
const infoUser = api.getInfoUser(URLUser);

infoUser.then(data => {
  setInfoUser(data);
  Card._idUser = data._id;
})
.catch(error => console.log(error))

arrCards.then(cards => {
  const cardSection = new Section({
    data: cards,
    renderer: (item) => {
      const card = new Card(item,'#postTemplate',popupWithImage.open,popupWithConfirmation.open,handleLikeCard);
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
const popupWithConfirmation = new PopupWithConfirmation((idCard) => {

  api.deleteCard(`${URLCards}/${idCard}`)
  .then(res => {
    const card = document.querySelector(`section[idcard="${idCard}"]`)
    card.remove();
  })
  .catch(error => console.log(`Hubo un error al eliminar la tarjeta `+error))
  
},'#popupDelete');

const popupFormEdit = new PopupWithForm((data) => {

  api.editInfoUser(data,URLUser)
  .then(res => {
    userInfo.setUserInfo(res.name,res.about)
  })
  .catch(error => console.log(`Aqui es error `+error))

},'#popupEdit');

const popupFormAdd = new PopupWithForm((data) => {

  const setCard = api.setNewCard(data,URLCards)

  setCard.then(res => {

    createCard(res,'#postTemplate','#post')

  })
  .catch(error => console.log('Hay un error: '+error))

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
popupWithConfirmation.setEventListeners()

validateProfile.enableValidation();
validatePost.enableValidation();