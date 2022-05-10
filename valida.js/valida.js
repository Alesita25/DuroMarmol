// $(document).ready(function()
// 		{
// 		$("#flexRadioDefault1").click(function () {
//                 //alert($('input:radio[name=flexRadioDefault]:checked').val());
//                 $("#flexRadioDefault1").prop('checked', true);
//                 $("#flexRadioDefault2").prop('checked', false);
//                 $("#RutCliente").show();
//                 $("#labeltext").show();
//                 $("#DvRutCliente").show();
               
// 			});
 
// 		$("#flexRadioDefault2").click(function () {	 
// 			//alert($('input:radio[name=flexRadioDefault2]:checked').val());
//             $("#flexRadioDefault1").prop('checked', false);
//             $("#flexRadioDefault2").prop('checked', true);
//             $("#RutCliente").hide();
//             $("#labeltext").hide();
//             $("#DvRutCliente").hide();
// 			});

//             var validadorFormulario = new FormValidator('registrarDatos', [{

//                 name: 'NombreCliente',
//                 display: 'Nombre cliente', //mensaje pantalla
//                 rules: 'required|min_length[10]', // lo que estoy validando,
//                 message: 'Requerido'
//             },
//             {

//                 name: 'direccion',
//                 display: 'minimo 50 caracteres', //mensaje pantalla
//                 rules: 'required|min_length[50]' // lo que estoy validando
//             },
//             {
//                 name: 'Email',
//                 display: 'Email Invalido',
//                 rules: 'required|valid_email' // formato mail
//             },
//         ], function (errores, evento) {
//             if (errores.length) {
//                 let mensaje = '';
    
//                 errores.forEach(function (campo, indice, arreglo) {
//                     mensaje += `${campo.message} <br/>`;
//                 });
    
//                 document.querySelector('#resultadoValidacion').innerHTML = mensaje;
//             }
    
//         })
    
    
//         $("input[name=RutCliente]").change(function(){
//             var dv = calculaDigitoVerificador($('#RutCliente').val());
//             $('#DvCliente').val(dv);
//         });
    
    
    
    
//          function calculaDigitoVerificador(rut) {
//             // type check
//             if (!rut || !rut.length || typeof rut !== 'string') {
//                 return -1;
//             }
//             // serie numerica
//             var secuencia = [2,3,4,5,6,7,2,3];
//             var sum = 0;
//             //
//             for (var i=rut.length - 1; i >=0; i--) {
//                 var d = rut.charAt(i)
//                 sum += new Number(d)*secuencia[rut.length - (i + 1)];
//             };
//             // sum mod 11
//             var rest = 11 - (sum % 11);
//             // si es 11, retorna 0, sino si es 10 retorna K,
//             // en caso contrario retorna el numero
//             return rest === 11 ? 0 : rest === 10 ? "K" : rest;
//         };
<style type="text/css">

         .errores {
             -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.3);
             -moz-box-shadow: 0 0 10px rgba(0,0,0,0.3);
             -o-box-shadow: 0 0 10px rgba(0,0,0,0.3);
             background: red;
             box-shadow: 0 0 10px rgba(0,0,0,0.3);
             color: #fff;
             display: none;
             font-size: 14px;
             margin-top: -80px;
             margin-left: 340px;
             padding: 10px;
             position: absolute;
             
            }

         
</style>



// 		 });


         var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

         $(document).ready(function(){
             $("#bEnviar").click(function(){
                var RutCliente = $("#RutCliente").val();
                var NombreCliente = $("NombreCliente").val();
                var direccion = $("#direccion").val();
                var telefono = $("#telefono").val();
                var Email = $("#Email").val();

             if (RutCliente == ""){
                 $("#mensaje1").fadeIn();
                 return false;
                }else{
                    $("#mensaje1").fadeOut();
                    if(Email == "" || expr.test(Email)){
                        $("#mensaje2").fadeIn();
                        return false;
                    }else{
                        $("mensaje2").fadeOut();
                        if(NombreCliente ==""){
                            $("#mensaje3").fadeIn();
                            return false;
                        }else{
                            $("#mensaje3").fadeOut();
                            if(direccion == ""){
                                $("#mensaje4").fadeIn();
                                return false;
                            }else{
                                $("#mensaje4").fadeOut();
                                if(telefono == ""){
                                    $("#mensaje5").fadeIn();
                                    return false;
                                }else{
                                    $("#mensaje5").fadeOut();

                                }
                            }
                        }
                    }
                }




        })
         })
