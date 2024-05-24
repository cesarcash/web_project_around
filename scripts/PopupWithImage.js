import Popup from './Popup.js';
import {modalImage} from './utils.js';

export default class PopupWithImage extends Popup {    

    open(){

        super.open(modalImage);

        modalImage.querySelector('.popup__view-image').setAttribute('src',this._link);
        modalImage.querySelector('.popup__view-image').setAttribute('alt',this._name);
        modalImage.querySelector('.popup__text').textContent = this._name;

    }

}