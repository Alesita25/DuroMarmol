//  $(document).ready(function(){
//      $("#enviar").click(function(){
//          $get("http://127.0.0.1:8000/api/lista_productos",
//              function(data){
//                  $.each(data.lista_productos, function(i, item){

//                      $("#inventario").append("<tr><td>"+item.idProducto+"</td><td>" + item.nombreProducto +
//                                          "</td><td>"+item.tipo+"</td><td>"+item.cantidad+"</td></tr>");
//                  });        
//             });
//          })
//  })

$(document).ready(function(){
    $("#enviar").click(function () {
        $.ajax({
            type: "GET",
            url: "http://localhost:8000/api/lista_productos",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
        success: function (data) {
        $('#inventario > tbody').empty();
        $.each(data, function (i, item) {
        var rows = 
        "<tr><td>" + item.idProducto + 
        "</td><td>" + item.nombreProducto +
        "</td><td>" + item.tipo + 
        "</td><td>" + item.cantidad + "</td></tr>";
        $('#inventario > tbody').append(rows);
        });
       console.log(data);
        },
            failure: function (data) {
            alert(data.responseText);
        },
            error: function (data) {
            alert(data.responseText);
        }
        });
     });
    });