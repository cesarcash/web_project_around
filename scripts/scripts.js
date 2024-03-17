const btnEdit = document.querySelector('#button__edit');
const btnAdd = document.querySelector('#button__add');
const btnLike = document.querySelectorAll('.button__like');
const btnClose = document.querySelector('#button__close');
const modal = document.querySelector('#popup');
const formPost = document.querySelector('#formNewPost');
const formProfile = document.querySelector('#formEditProfile');
const userName = document.querySelector('#userName');
const userDescription = document.querySelector('#userDescription');

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
    alert('Datos guardados');

}