
$(document).ready(function(){
    $.get("https://mindicador.cl/api",
    function(data){
        $.each(data.uf,function(i,item){
            $("#uf").append("<tr><td>"+item.codigo+"</td><td>" + item.nombre +
                                    "</td><td>" + item.fecha +
                                    "</td><td>"+item.valor+"</td></tr>");
        });
    });
    
});
