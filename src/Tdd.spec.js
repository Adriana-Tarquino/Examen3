import CambioMoneda from "./cambio.js"

describe("---Letras que estan en la posicion correcta----",() =>{
    const cambi = new CambioMoneda();
    it("Devolver el cambio de 19 bs devolver primero solo 5 bs ", () => {
      expect(cambi.devolverCambio(6)).toEqual("5");
    });
    it("Devolver el cambio de 19 bs devolver todos los 5 bs en una lista", () => {
        expect(cambi.devolverCambio(19)).toEqual("555");
      });
    
});