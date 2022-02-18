export default class Realty{
    constructor () {
        this.type = document.querySelector('input[name="type"').value;;
        this.area = document.querySelector('input[name="area"]').value;
        this.isRent = document.querySelector('input[name="rent"]:checked').value;
    }
}