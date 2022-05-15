export default function getCards() {
    return [
        {  
            "hiddenQuestion" : "O que é JSX?",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "Uma extensão de linguagem do JavaScript", 
            "id" : "1"   
        },
        {
            "hiddenQuestion" : "O React é __ ",
            "initialQuestion": "Pergunta",
            "id" : "2",
            "hiddenAnswer" : "Uma biblioteca JavaScript para construção de interfaces", 
        },
        {
            "hiddenQuestion" : "Componentes devem iniciar com __ ",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "letra maiúscula",  
            "id": "3",
        },
        {
            "hiddenQuestion" : "Podemos colocar __ dentro do JSX",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "expressões",
            "id": "4",
        },
        {
            "hiddenQuestion" : "O ReactDOM nos ajuda __ ",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "interagindo com a DOM para colocar componentes React na mesma",
            "id": "5",
        },
        {
            "hiddenQuestion" : "Usamos o npm para __ ",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "gerenciar os pacotes necessários e suas dependências",
            "id": "6",
        },
        {
            "hiddenQuestion" : "Usamos props para __",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "passar diferentes informações para componentes ",
            "id": "7", 
        },
        {
            "hiddenQuestion" : "Usamos estado (state) para __",
            "initialQuestion": "Pergunta",
            "hiddenAnswer" : "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            "id": "8",
        }
    ].slice(0, 4)
}