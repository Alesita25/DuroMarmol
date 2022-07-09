$(document).ready(function () {
    var flag = false;

    $.ajax({
        type: "GET", //indico el metodo
        url: "https://mindicador.cl/api", //URL API
        dataType: "json", //Estructura
        success: function (data) { //rescata data
            console.log('AD'+ data);
            $.each(data, function (i, item) {//recorre info
                console.log('AB'+ data)
                if (typeof item.codigo === 'undefined') { //Pregunto si el campo Código viene undefined no muestro nada

                } else {

                        var tarjeta = '<div class=" text-white tarjetasValor " >'+ //genero card por cada registro que me devuelve el servicio.
                        '<div class="card-header titulo ">' + item.codigo + '</div>'+
                        '<div class="card-body">'+
                            '<h5 class="card-title">' + item.nombre + '</h5>'+
                            '<h8 class="card-title fecha">Fecha: ' + item.fecha + '</h8>'+ '<br>'+ '<br>'+
                            '<h8 class="card-title valor">Valor: ' + item.valor + '</h8>'+
                    
                        '</div>'+
                        '</div>'
                        $("#tarjetas").append(tarjeta);

                }
            });
            flag=true;
        }, //End of AJAX Success function  
    });
});