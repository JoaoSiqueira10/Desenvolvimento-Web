function maior(aux){

    //var aux = 0;

    if(aux = 1){
        imagem50();
        aux--;
        return aux;
    }else if(aux = 2){
        imagem100();
        aux--;
        return aux;
    }else if(aux = 3){
        imagem150();
        aux--;
        return aux;
    }else{
        alert("Ja esta na maxima resolucao");
    }
}