class CambioMoneda 
{
    devolverCambio(numero){
        let lista = "";
        var cont = numero;
        while(cont > 5){
            lista = lista +"5"
            cont = cont - 5;
        }
       return lista;
    }
}

export default CambioMoneda; 