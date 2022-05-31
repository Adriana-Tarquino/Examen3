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
     

});