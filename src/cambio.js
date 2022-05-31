class CambioMoneda 
{
    devolverCambio(numero){
        let lista = "";
        var cont = numero;
        while(cont > 5){
            lista = lista +"5"
            cont = cont - 5;
        }
        if(cont > 2){
           lista += "2";
        }
       return lista;
    }
}

export default CambioMoneda; 