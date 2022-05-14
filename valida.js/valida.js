
// Validaciones Clientes:

    function validacion() {
        var mensaje ="";
        var nombreCliente = $("#nombreCliente").val();    
        var rutCliente = $("#rutCliente").val();
        var direccion = $("#direccion").val();
        var telefono = $("#telefono").val(); 
        var Email = $("#Email").val();  
  
        if(nombreCliente=="" || nombreCliente==null){
            alert("El Nombre de Cliente está en blanco");
            document.formulario.nombreCliente.focus()
            return;
        }
        if(rutCliente=="" || rutCliente==null){
            alert("El rut está en blanco");
            document.formulario.rutCliente.focus()

            return;
        }
        if(direccion=="" || direccion==null){
            alert("La dirección está en blanco");
            document.formulario.nombreCliente.focus()

            return;
        }
        if(telefono=="" || telefono==null){
            alert("El teléfono está en blanco");
            document.formulario.detalleProductos.focus()

            return;
        }
        if(Email=="" || Email==null){
            alert("El Email está en blanco");
            document.formulario.detalleProductos.focus()

            return;
        }
        alert("Mensaje enviado");
        document.getElementById("formulario").submit();

  
    }
    $.validator.setDefaults( {
        submitHandler: function () {
           alert( "Gracias por escribirnos, nos pondremos en contacto a la brevedad" );
               
          $("#formulario")[0].reset();
            }
    });
      
    url22 = "Cliente.html";
    $("#formulario").click(function(){
      
      alert( "Gracias por registrarte, ahora puedes ingresar" );
      
      $(location).attr('href',url22);
    });

        $(document).ready(function(){

                $('#formulario').validate({
                    rules: {
                        nombreCliente: {
                            required: true,
                            minlength: 4
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        direccion: {
                            required: true,
                            minlength: 4
                        },
                        rutCliente: {
                            required: true,
                            minlength: 7
                        },
            
                
                    
                },
                    messages: {           
                        nombreCliente: {
                            required: "<p style='color:red'>Por favor ingresa el nombre del cliente</p>",
                            minlength: "<p style='color:red'>Tu nombre debe tener minimo 4 letras<p>"
                        },
                        email: {   
                            required:"<p style='color:red'>Por favor ingresa correo electrónico del Cliente</p>", 
                            email:"<p style='color:red'>Ingresa una direccion de email valida</p>"
                        },
                        direccion: {
                            required: "<p style='color:red'>Por favor ingresa la direccion del cliente</p>",
                            minlength: "<p style='color:red'>Tu direccion debe tener mínimo 10 letras</p>"
                        },
                        
                        rutCliente: {
                            required: "<p style='color:red'>Por favor ingresa el Rut de Cliente</p>",
                            minlength: "<p style='color:red'>Tu RUT debe ser mínimo de 7 digitos</p>"
                        },         
                    }
                    )}
                    );

// ----------------------------------------------------------------------------------------------------------------------------------------
// Validaciones Pedidos de Venta:

