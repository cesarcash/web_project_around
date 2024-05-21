import Popup from './Popup.js';
import {modalImage} from './utils.js';

export default class PopupWithImage extends Popup {    

    open(){
        super.open(modalImage);

        const imgView = modalImage.querySelector('#popupImage');
        imgView.setAttribute('src',this._link);
        imgView.setAttribute('alt',this._name);
        
        const textView = modalImage.querySelector('.popup__text');
        textView.textContent = this._name;
    }

}