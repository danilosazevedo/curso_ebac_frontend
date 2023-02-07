const alunos = [
    {
        "nome": "Danilo",
        "nota": "7",
    },

    {
        "nome": "Carlos",
        "nota": "8",
    },

    {
        "nome": "José",
        "nota": "6",
    },

    {
        "nome": "Marcelo",
        "nota": "5",
    },

    {
        "nome": "Paula",
        "nota": "4",
    },
]

const notasMaiorQueSeis = alunos.filter(function(item){
    return item.nota >= "6"
})

console.log(notasMaiorQueSeis)