/**
 * aqui accedemos al document.
 * utilizamos el selector 'getElementById' el cual recibe el id del nodo o elemento 
 * del document que queremos accesar en este caso es nuestro 
 * formulario con id='enmascarar'.
 * y  utilizamos el metodo(funcion) addEventListener() el cual sirve para escuchar y recibe 2 argumentos 
 * 1er argumento es el nombre del evento que pondremos a escuchar
 * 2do argumento es una expresion funcion anonima o tambien puede recibir una funcion arrow
 */
document
  .getElementById("enmascarar-form")
  .addEventListener("submit", function (event) {

    /**
     * (event)  hace referencia al evento que se captura tambien es habitual usar (e)
     * event.preventDefault() se utiliza para evitar que el evento se ejecute por default
     *al cargar la pagina evitando que se envie el formulario vacio.
     */
    event.preventDefault();
    // hacemos el llamado a nuestra funcion enmascarar
    enmascarar();
});

function enmascarar (){
    /**
     * guardamos en constantes los nodos que contienen los datos que ingreso el usuario
     * y tambien guardamos el nodo donde vamos a mostrar el resultado el cual esta identificado
     * con el id='resultadoEmascarar' y lo guardaremos en una variable para poder modificarlo,
     * tambien guardamos el nodo donde mostraremos un mensaje de error en caso de que el usuario
     * ingrese numeros negativos el cual esta identificado en nuestro html con el id='errorMsn' 
     * y lo guardamos en una variable para luego poder modificarlo
     */
      const nodoEmail = document.getElementById("email");
      const nodoTelefono = document.getElementById("telefono");
      let nodoResultadoEmascarar = document.getElementById("resultadoEmascarar");
      let nodoErrorMsn = document.getElementById("errorMsn");

      /**
       * accedemos a la propiedad .value de nuestro nodoEmail para guardar su valor en una 
       * constante que llamaremos email (email introducido por el usuario)
       *  accedemos a la propiedad .value de nuestro nodoTelefono para guardar su valor en una 
       * constante que llamaremos telefono (telefono introducido por el usuario)
       */
    const email = nodoEmail.value;
    const telefono = nodoTelefono.value;

    /**
     * validaremos que los numeros telefonico no contenga ni menos de 7 digitos 
     * ni mas de 10 digitos
     * utilizaremos logica negativa.
     * Usamos el operador '||' conocido como 'ó', en este caso con que una sola condicion
     * se cumpla sera suficnete para mostrar el mensaje de error
     */
    if (telefono.length <7 || telefono.length >10 ) {
        /**
         * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
         * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
         * para este caso vamos modificar la propiedad 'class' y como segundo argumento
         * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
         * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
         * bg-danger --> genera un fondo rojo
         * rounded-3 --> redondea las esquinas 
         * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
         * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn 
         * 
         */
        nodoErrorMsn.setAttribute('class', 'bg-danger rounded-3 mb-2 p-2');
        /**
         * modificamos el nodoErrorMsn accediendo a su propiedad .textContent
         */
         nodoErrorMsn.textContent = 'El numero telefonico debe contener minimo 7 y maximo 10 digitos'
        /**
         * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
         * y evitar que continue a realizar la la siguiente validacion
        */
         return;
    } 

    /**
     * validaremos que el email contenga almenos un @ y un punto(.) utilizando el
     * metodo .match() se usa para obtener todas las ocurrencias o coincidencias de una expresión 
     * regular dentro de una cadena en este caso nuestra cadena seria '@' y '.' 
     * utilizaremos logica negativa agregando el simbolo (!) antes de la variable email
     * de esta forma preguntamos si no hay coincidencias en nuestro email de un (@) o (.)
     * Usamos el operador '||' conocido como 'ó', en este caso con que una sola condicion
     * se cumpla sera suficiente para mostrar el mensaje de error
     */
    
     if (!email.match('@') || !email.match('.')  ) {
      /**
       * en nuestro nodoErrorMsn accedemos al metodo .setAttribute()
       * el cual recibe como primer argumento el nombre de la propiead html que desamos modificar
       * para este caso vamos modificar la propiedad 'class' y como segundo argumento
       * enviamos las clases de estilo que seran asignadas a la propiedad 'class' en este caso
       * asignaremos algunas clases de estilos pertenecientes al framework de estilos boostrap
       * bg-danger --> genera un fondo rojo
       * rounded-3 --> redondea las esquinas 
       * mb-2 ---> margin-bottom agrega un margen en la parte inferior del nodoErrorMsn
       * p-2 ---> agrega un padding alrededor de todo el nodoErrorMsn 
       * 
       */
      nodoErrorMsn.setAttribute('class', 'bg-danger rounded-3 mb-2 p-2');
      /**
       * modificamos el nodoErrorMsn accediendo a su propiedad .textContent
       */
       nodoErrorMsn.textContent = 'Email debe contener un (@) y un (.)'
      /**
       * utilizamos la instruccion de return para romper el flujo de nuestra aplicacion
       * y evitar que continue a realizar la la siguiente validacion
      */
       return;
  } 
        let emailEmascarado = email;
        /**
         * a continuacion validamos que el campo email exista
         * es decir que contenga informacion
         */
        if (email) {
          /**
           * utilizo la  funcion .split() para dividir una cadena de texto
           * esta metodo recibe 2 argumentos el primero es el caracter 
           * por el cual deseamos dividir la cadena en este caso es el (@)
           * y como segundo argumento en cuantas partes deseamos partir esta cadena
           * teniendo en cuenta que un caracter puede estar repetido varias veces 
           */
          let domain = emailEmascarado.split('@', 2);
          /**
           * como el metodo .split() nos retorna es un array de N posiciones
           * tomamos el elmento en la posicion[1] la cual tendria el dominio
           * del correo ejemplo gmail.com, hotmail.com, etc, y lo convertimos
           * a string
           */
          domain = String(domain[1]);
          let data2 = '';
          for (let i = 0; i < 3; i++) {
            /**
             *  guardamos en data 2 las 3 primeras letras
             * con las que inicia el correo electronico
             * emailEmascarado[i] con esta instruccion 
             * recorremos letra por letra el email ingresado
             */
            data2 = data2 + emailEmascarado[i];
          }
          /**
           * concatenamos la cadena de texto con los 3 primeros caracteres
           * del correo con algunos asteriscos que sean los que daran el efecto
           * de enmascarar y el dominio del correo
           */
          emailEmascarado = data2 + '***********@' + domain;
        }

        let telefonoEnmascarado=telefono;
        /**
         * validamos que el campo telefono exista es decir que
         * contenga informacion
         */
        if (telefono) {
         
          /**
           * aseguramos que independiente de la cantiad de caracteres
           * que contenga el numero telefonico guardamos el tamaño - 4
           */
          const tam = telefonoEnmascarado.length - 4;

          let data2 = '';
      
          for (let i = 0; i < 4; i++) {
            /**
             * aqui guardamos en data2 solo los ultimos 4 digitos del
             * numero telefonico recordemos que en la constante tam
             * tenemos guardado el resultado del tamaño total - 4
             * en la sintaxys telefonoEnmascarado[tam + i]; se empieza 
             * el recorrido de numero telefonico en una posicion avanzada
             * hasta llegar a su totalidad asegurandonos de solo guardar
             * en data2 los 4 ultimos digitos del telefono
             */
            data2 = data2 + telefonoEnmascarado[tam + i];
          }
          /**
           * concatenamos los **** que hacen el enamascaramiento junto con los
           * ultimos 4 digitos del telefono
           */
          telefonoEnmascarado = '***********' + data2;
        }

   
    /**
     *  utilizaremos  nodoResultadoEmascarar accediendo a su propiedad '.textContent'
     * y asignaremos alli el resultado de nuestro email y telefono enmascarados.
     * empleamos  un template-string para mostrar texto y nuestro resultado
     */
     nodoResultadoEmascarar.textContent = `Email: ${emailEmascarado} Tel: ${telefonoEnmascarado}`;
}