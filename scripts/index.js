
import {createCard} from "./utils.js";

const postContainer = document.querySelector('#post');

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

initialCards.forEach(data => {
    createCard(data,'#postTemplate',postContainer);
})