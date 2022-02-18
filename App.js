import Realty from "./Realty.js";

export default class App{
    constructor() {
        this.realtyList = document.querySelector('#realty-list');
        this.buttonSubmit = document.querySelector('#submit');
        this.buttonSubmit.addEventListener('click', () => {
            this.setHouse()
        })
    }

    setHouse(){
        const r = new Realty()
        const newLine = document.createElement('li');
        console.log(r.isRent)
        if (r.isRent == 'Sim'){
            newLine.innerHTML = '<span>Alugado: ' + r.isRent + '</span> Tipo: ' + r.type + ' Área: ' + r.area + ' mt²'; 
            newLine.firstChild.style.backgroundColor = 'red';        
            newLine.firstChild.style.color = 'white';        
        } else {
            newLine.innerText = 'Tipo: ' + r.type + ' Área: ' + r.area + ' mt²' + ' Alugado: ' + r.isRent;
        }
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.setAttribute('onclick', 'app.removeHouse(this)');
        newLine.appendChild(removeButton);
        this.realtyList.appendChild(newLine)
    }

    removeHouse(element){
        const liToRemove = element.parentNode;
        this.realtyList.removeChild(liToRemove);
    }
}
