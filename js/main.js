/* javascript
------------------------------------------ */
/* js01 */
const js01Btn = document.getElementById('js01Btn');
js01Btn.addEventListener('click', function(){
    this.innerHTML = 'クリック済';
    this.style.backgroundColor = 'gray';
    this.setAttribute('disabled', true);
});
/* js02 */
const js02BtnAdd = document.getElementById('js02Btn-add');
const js02BtnRemove = document.getElementById('js02Btn-remove');
const js02List = document.querySelector('.js02-list');

js02BtnAdd.addEventListener('click', function(){
    const newItem = document.createElement('li');
    newItem.textContent = '新しいリスト';

    js02List.appendChild(newItem);
});

js02BtnRemove.addEventListener('click', function(){
    while(js02List.lastChild) {
        js02List.removeChild(js02List.lastChild);
    };
});
/* js03 */
const js03List = document.querySelector('.js03-list');
const js03Btn = document.querySelectorAll('.js03Btn-wrap .jsBtn');
const js03BtnRemove = document.getElementById('js03Btn-remove');

const colorListAdd = function() {
    const colorList = document.createElement('li');
        colorList.innerHTML = this.innerHTML;

        js03List.appendChild(colorList);
}

for(let i = 0; i < js03Btn.length; i++){
    js03Btn[i].addEventListener('click', colorListAdd)
}
js03BtnRemove.addEventListener('click', function(){
    js03List.removeChild(js03List.lastElementChild);
});
/* js04 */
const js04Btn = document.getElementsByClassName('js04Btn');

for(let j = 0; j < js04Btn.length; j++){

    js04Btn[j].addEventListener('click', function(){
        this.classList.toggle('js04Btn-clicked');
    });
}
/* tricks
------------------------------------------ */
/* tricks03*/

/*
------------------------------------------ */