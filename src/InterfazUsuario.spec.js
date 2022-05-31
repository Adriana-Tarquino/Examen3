import fs from "fs";

describe("Pruebas", () => {
    beforeAll(() =>{
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
    });
    it("Deberia mostrar el titulo", () => {
        const resultado = document.querySelector("#titulo");
        expect(resultado.innerHTML).toEqual("VENTA");
    });
    it("Deberia mostrar monto venta", () => {
        const resultado = document.querySelector("#monto-venta");
        expect(resultado.innerHTML).toEqual("Monto venta");
    });
    it("Deberia mostrar el monto de la venta", () => {
        const monto = document.querySelector("#monto-venta");
        monto.value = "50";
    
        const botonAdivinar = document.querySelector("#boton-adivinar");
        botonAdivinar.click();
       // const resultado = document.querySelector("#resultado-div");
        //expect(resultado.innerHTML).toEqual("La palabra es arbol");
    }); 

});