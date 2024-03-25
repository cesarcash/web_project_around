const btnEdit = document.querySelector('#button__edit');
const btnAdd = document.querySelector('#button__add');
const btnLike = document.querySelectorAll('.button__like');
const btnClose = document.querySelector('#button__close');
const modal = document.querySelector('#popup');
const formPost = document.querySelector('#formNewPost');
const formProfile = document.querySelector('#formEditProfile');
const userName = document.querySelector('#userName');
const userDescription = document.querySelector('#userDescription');

const initialCards = [
    {
      name: "Valle de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
    },
    {
      name: "Montañas Calvas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
    },
    {
      name: "Parque Nacional de la Vanoise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
    }
  ];

  function addPost(name,url){

    const postContainer = document.querySelector('#post');
    const postTemplate = document.querySelector('#postTemplate').content;
    const postElement = postTemplate.querySelector('.post__item').cloneNode(true);

    const postImage = postElement.querySelector('.post__image');
    const postTitle = postElement.querySelector('.post__name');

    postImage.setAttribute('src', url);
    postImage.setAttribute('alt', name);

    postTitle.textContent = name;

  }

formProfile.addEventListener('submit',sendFormProfile)

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

function closeModal(){
    formProfile.style.display = 'none';
    formPost.style.display = 'none';
    modal.classList.remove('popup_opened')
}

function sendFormProfile(e){

    e.preventDefault();
    const newName = document.querySelector('#nameProfile').value;
    const newAbout = document.querySelector('#aboutMe').value;

    userName.textContent = newName;
    userDescription.textContent = newAbout;

    closeModal();

}