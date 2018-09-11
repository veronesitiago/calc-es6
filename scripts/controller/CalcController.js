class CalcController {

    constructor(){

        // Por convensão o '_' antes do nome do atributo indica que o encapsulamento é private
        // e portanto não deve ser acessado diretamente pelo objeto instanciado
        this._displayCalc = 0;
        this._currentDate;

        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "4567";
        dateEl.innerHTML = "06/09/2018";
        timeEl.innerHTML = "00:44";
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(valor){
        this._currentDate = valor;
    }
}