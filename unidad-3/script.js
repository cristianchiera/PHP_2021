function edad (edad){

    edad=parseInt(edad);
    if (typeof edad == 'number'){
        if (edad>=18){
            result='>>es mayor de edad';
          }else{
            result='>>NO es mayor de edad';
          }
    } else {
        result = 'Debe ingresar un valor numerico';
    }

    return result;
  }

