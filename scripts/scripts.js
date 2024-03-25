const btnEdit = document.querySelector('#button__edit');
const btnAdd = document.querySelector('#button__add');
const btnLike = document.querySelectorAll('.button__like');
const btnClose = document.querySelector('#button__close');
const modal = document.querySelector('#popup');
const formPost = document.querySelector('#formNewPost');
const formProfile = document.querySelector('#formEditProfile');
const userName = document.querySelector('#userName');
const userDescription = document.querySelector('#userDescription');
const postContainer = document.querySelector('#post');
const txtTitle = document.querySelector('#title');
const txtUrl = document.querySelector('#url');

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

formProfile.addEventListener('submit',sendFormProfile);
formPost.addEventListener('submit', createNewPost);
window.addEventListener('load', function(){
  
  const btnLikes = document.querySelectorAll('.button_action_like');
  
  btnLikes.forEach((button) => {
    button.addEventListener('click',handlePostLike)    
  })

})

function handlePostLike(e){
  const btnLiked = e.target;
  btnLiked.classList.toggle('button_is_active');
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

btnClose.addEventListener('click', () => {
    closeModal()
})

btnEdit.addEventListener('click', function(){
    handleOpenModal();
    formProfile.style.display = 'block';
    document.querySelector('#nameProfile').value = userName.textContent;
    document.querySelector('#aboutMe').value = userDescription.textContent;
})

btnAdd.addEventListener('click', function(){
    handleOpenModal();
    formPost.style.display = 'block';
})

function handleOpenModal(){
    modal.classList.add('popup_opened');
}

function sendFormProfile(e){

    e.preventDefault();
    const newName = document.querySelector('#nameProfile').value;
    const newAbout = document.querySelector('#aboutMe').value;

    userName.textContent = newName;
    userDescription.textContent = newAbout;

    closeModal();

}

function closeModal(){
  formProfile.style.display = 'none';
  formPost.style.display = 'none';
  modal.classList.remove('popup_opened')
}