$('#button-cadastrar').click(function(e){
    e.preventDefault();

    const novaTarefa = $("#nova-tarefa").val();
    const Local = $('<li></li>');

    $(`<li>${novaTarefa}</li>`).appendTo(Local);

    $(Local).appendTo('ul');

    $("#nova-tarefa").val('')
})

$('ul').on('click','li', function(){

    $(this).css("text-decoration","line-through")

})