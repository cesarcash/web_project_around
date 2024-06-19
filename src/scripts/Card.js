import { _idUser } from "./utils.js";

export default class Card {

    constructor(data,cardSelector,handleCardClick,handleOpenPopup){
        console.log("🚀 ~ Card ~ constructor ~ data:", data)
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._idUser = data.owner._id;
        this._idCard = data._id;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleOpenPopup = handleOpenPopup;
    }

    _getTemplate(){
        return document.querySelector(this._cardSelector).content.querySelector('.post__item').cloneNode(true);
    }

    _setEventListeners(){

        this._element.querySelector('.button_action_like').addEventListener('click', () => {
            this._handleLikeClick();
        })

        this._element.querySelector('.button_action_delete').addEventListener('click', (e) => {
            
            this._handleOpenPopup(this._idCard)
            // this._handleDeleteCard(e)

        })

        this._element.querySelector('.post__image').addEventListener('click', (e) => {
            this._handleCardClick(this._link,this._name)
        })

    }
    
    _handleDeleteCard(e){
        e.target.closest('.post__item').remove();
    }
    
    _handleLikeClick(){
        this._element.querySelector('.button_action_like').classList.toggle('button_is_active');
    }

    generateCard(){

        this._element = this._getTemplate();
        
        if(this._idUser != _idUser){
            const buttonDelete = this._element.querySelector('.button_action_delete')
            buttonDelete.style.display = 'none';
        }

        this._setEventListeners();
        this._element.setAttribute('idCard',this._idCard);
        this._element.querySelector('.post__image').setAttribute('src',this._link);
        this._element.querySelector('.post__image').setAttribute('alt',this._name);
        this._element.querySelector('.post__name').textContent = this._name;
        this._element.querySelector('.post__likes').textContent = this._likes.length;
        return this._element;

    }

}