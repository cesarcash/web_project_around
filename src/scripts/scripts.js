import enableValidation from "./validate.js";

const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active"
}

const btnEdit = document.querySelector('#button__edit');
const btnAdd = document.querySelector('#button__add');
const btnClose = document.querySelectorAll('.button_action_close');
const modal = document.querySelector('#popup');
const modalForm = document.querySelector('.popup__form');
const modalImage = document.querySelector('.popup__image');
const formPost = document.querySelector('#formNewPost');
const formProfile = document.querySelector('#formEditProfile');
const userName = document.querySelector('#userName');
const userDescription = document.querySelector('#userDescription');
const postContainer = document.querySelector('#post');
const txtTitle = document.querySelector('#title-input');
const txtUrl = document.querySelector('#url-input');

const initialCards = [
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

initialCards.forEach((card) => {
  addPost(card.name,card.link);
})

btnClose.forEach(buttonClose => {
  buttonClose.addEventListener('click', closeModal)
})

window.addEventListener("click", function(evt) {
  
  const element = evt.target;

  if(element.classList.contains('popup_opened')){
    closeModal();
  }
  
})

document.addEventListener('keydown', keyScape)

function keyScape(evt){

  const keyUser = evt.key;
  if(keyUser === 'Escape' && modal.classList.contains('popup_opened')){
    closeModal();
    evt.target.removeEventListener('keydown', keyScape);
  }

}

formProfile.addEventListener('submit',sendFormProfile);
formPost.addEventListener('submit', createNewPost);
postContainer.addEventListener('click', function(e){

  const buttonAction = e.target;
  
  if(buttonAction.classList.contains('button_action_like')){
    buttonAction.classList.toggle('button_is_active');
  }else if(buttonAction.classList.contains('button_action_delete')){
    deletePost(buttonAction)
  }else if(buttonAction.classList.contains('post__image')){
    const image = e.target;
    showImage(image);
  }

});

btnEdit.addEventListener('click', function(){
  handleOpenModal();
  modalImage.style.display = 'none';
  modalForm.style.display = 'block';
  formProfile.style.display = 'block';
  document.querySelector('#name-input').value = userName.textContent;
  document.querySelector('#about-input').value = userDescription.textContent;
  enableValidation(config)
})

btnAdd.addEventListener('click', function(){
  handleOpenModal();
  modalImage.style.display = 'none';
  modalForm.style.display = 'block';
  formPost.style.display = 'block';
  enableValidation(config)
})

function showImage(image){

  handleOpenModal();
  modalForm.style.display = 'none';
  modalImage.style.display = 'block';

  const imgView = modalImage.querySelector('#popupImage');
  imgView.setAttribute('src',image.src);
  imgView.setAttribute('alt',image.alt);

  const textView = modalImage.querySelector('.popup__text');
  textView.textContent = image.alt;

}

function deletePost(itemButton){

  const postItem = itemButton.closest('.post__item');
  postItem.remove();

}

function createNewPost(evt){

  evt.preventDefault();

  const titlePost = txtTitle.value;
  const urlPost = txtUrl.value;

  addPost(titlePost,urlPost);
  this.reset();
  closeModal();

}

function addPost(name,url){

  const postTemplate = document.querySelector('#postTemplate').content;
  const postElement = postTemplate.querySelector('.post__item').cloneNode(true);

  const postImage = postElement.querySelector('.post__image');
  const postTitle = postElement.querySelector('.post__name');

  postImage.setAttribute('src', url);
  postImage.setAttribute('alt', name);

  postTitle.textContent = name;
  postContainer.prepend(postElement);

}

function handleOpenModal(){
  modal.classList.add('popup_opened');
}

function sendFormProfile(e){

  e.preventDefault();
  const newName = document.querySelector('#name-input').value;
  const newAbout = document.querySelector('#about-input').value;

  userName.textContent = newName;
  userDescription.textContent = newAbout;

  closeModal();

}

function closeModal(){
  formProfile.style.display = 'none';
  formPost.style.display = 'none';
  modal.classList.remove('popup_opened')
}

enableValidation(config)