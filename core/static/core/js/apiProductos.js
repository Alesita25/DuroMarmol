$(document).ready(function(){
    $("#enviar").click(function(){
        $get("http://127.0.0.1:8000/api/lista_productos",
            function(data){
                $.each(data.lista_productos, function(i, item){

                    $("#inventario").append("<tr><td>"+item.idProducto+"</td><td>" + item.nombreProducto +
                                        "</td><td>"+item.tipo+"</td><td>"+item.cantidad+"</td></tr>");
                });        
            });
        })
})