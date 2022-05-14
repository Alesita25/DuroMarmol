$(document).ready(function () {
    // $.getJSON('https://mindicador.cl/api',
    // function(data){
    //     console.log(data);
    //     $.each(data.uf,function(i,item){
    //         $("#uf").append("<tr><td>"+item.codigo+"</td><td>" + item.nombre +
    //                                 "</td><td>" + item.fecha +
    //                                 "</td><td>"+item.valor+"</td></tr>");
    //     });
    // });
    $.ajax({
        type: "GET", //indico el metodo
        url: "https://mindicador.cl/api", //URL API
        dataType: "json", //Estructura
        success: function (data) { //rescata data
            $.each(data, function (i, item) {//recorre info
                if (typeof item.codigo === 'undefined') { //Pregunto si el campo Código viene undefined no muestro nada

                } else {

                    // var tarjeta =
                    //     '<div class="card text-white bg-secondary " style="width: 18rem;">' +
                    //     '<div class="card-header">' + item.codigo + '</div>' +
                    //     '<div class="card-body">' +
                    //     '<h5 class="card-title">' + item.codigo + '</h5>' +
                    //     '<h6 class="card-subtitle mb-2 text-muted">' + item.nombre + '</h6>' +
                    //     '<p class="card-text">' + item.valor + '</p>' +
                    //     '</div>' +
                    //     '</div>'
                    // $("#tarjetas").append(tarjeta);

                    var tarjeta = '<div class="card text-white bg-secondary tarjetasValor " >'+ //genero card por cada registro que me devuelve el servicio.
                        '<div class="card-header titulo ">' + item.codigo + '</div>'+
                        '<div class="card-body">'+
                            '<h5 class="card-title">' + item.nombre + '</h5>'+
                            '<h8 class="card-title fecha">Fecha: ' + item.fecha + '</h8>'+ '<br>'+ '<br>'+
                            '<h8 class="card-title valor">Valor: ' + item.valor + '</h8>'+
                    
                        '</div>'+
                        '</div>'
                        $("#tarjetas").append(tarjeta);


                    //     var row = "<tr>"+
                    //     "<td>" + item.codigo + "</td>" + 
                    //     "<td>" + item.nombre + "</td>" +
                    //     "<td>" + item.fecha + "</td>" +
                    //     "<td>" + item.valor + "</td>" +
                    //     "</tr>";						 
                    //    $("#uf>tbody").append(row);
                }
            });
        }, //End of AJAX Success function  
    });
});