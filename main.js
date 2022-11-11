    $('#telefone').mask('(00) 00000-0000')
    $('#CPF').mask('000.000.000-00')
    $('#CEP').mask('00.000-000')


    $('form button').click(function(){

        $('form').validate({
            rules:{nome:{required:true},
            email:{required:true},
            telefone:{required:true},
            cpf:{required:true},
            endereco:{required:true},
            cep:{required:true}
        },
        
        messages:{
            nome:"insira seu nome"}
        
        })

    })
