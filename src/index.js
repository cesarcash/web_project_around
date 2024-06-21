import "./styles/index.css";
import Section from './scripts/Section.js';
import Card from "./scripts/Card.js";
import PopupWithForm from './scripts/PopupWithForm.js';
import PopupWithConfirmation from './scripts/PopupWithConfirmation.js';
import PopupWithImage from './scripts/PopupWithImage.js';
import UserInfo from './scripts/UserInfo.js';
import {formAvatar, userPhoto, URLAvatar, handleLikeCard, setInfoUser, configHeaders, btnPhoto, URLUser, URLCards, postContainer, btnEdit, formProfile, btnAdd, formPost, config, inputName, inputAbout} from "./scripts/utils.js";
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
const validateAvatar = new FormValidator(config,formAvatar);
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

const popupFormEdit = new PopupWithForm((element,data) => {
  
  const updateProfile = api.editInfoUser(data,URLUser);
  const btnForm = element.querySelector('.form__button');
  btnForm.textContent = 'Guardando...';
  
  updateProfile.then(res => {
    userInfo.setUserInfo(res.name,res.about)
  })
  .catch(error => console.log(`Aqui es error `+error))
  .finally(() => {
    btnForm.textContent = 'Guardar';
  })

},'#popupEdit');

const popupFormAdd = new PopupWithForm((element,data) => {
  
  const setCard = api.setNewCard(data,URLCards)
  const btnForm = element.querySelector('.form__button');
  btnForm.textContent = 'Guardando...';

  setCard.then(res => {

    const container = document.querySelector(postContainer);
    const newCard = new Card(res,'#postTemplate',popupWithImage.open,popupWithConfirmation.open,handleLikeCard);
    const card = newCard.generateCard();
    container.prepend(card);

  })
  .catch(error => console.log('Hay un error: '+error))
  .finally(() => {
    btnForm.textContent = 'Crear';
  })

},'#popupAdd');

const popupFormPhoto = new PopupWithForm((element,data) => {
  
  const updateAvatar = api.editImgUser(URLAvatar,data.avatar);
  const btnForm = element.querySelector('.form__button');
  btnForm.textContent = 'Guardando...';
  
  updateAvatar.then(res => {
    userPhoto.src = res.avatar
    userPhoto.alt = res.name
  })
  .catch(error => console.log(error))
  .finally(() => {
    btnForm.textContent = 'Guardar';
  })

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
validateAvatar.enableValidation();