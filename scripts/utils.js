import Card from "./Card.js";

export const createCard = (objData,template,container) => {

    const newCard = new Card(objData,template);
    const card = newCard.generateCard();
    container.append(card);

}

// export function showImage(image){

//     handleOpenModal();
//     modalForm.style.display = 'none';
//     modalImage.style.display = 'block';

//     const imgView = modalImage.querySelector('#popupImage');
//     imgView.setAttribute('src',image.src);
//     imgView.setAttribute('alt',image.alt);

//     const textView = modalImage.querySelector('.popup__text');
//     textView.textContent = image.alt;

// }

// export function handleOpenModal(){
//     modal.classList.add('popup_opened');
// }

// export function closeModal(){
//     formProfile.style.display = 'none';
//     formPost.style.display = 'none';
//     modal.classList.remove('popup_opened')
// }