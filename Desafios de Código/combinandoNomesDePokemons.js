// Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra)
function combinandoNomesPokemons(palavra) {
    // Crie uma variável chamada "palavraPokemon" formada pela concatenação da "palavra" com a string "saur"
    let palavraPokemon = palavra + "saur";
    
    // Retorne a palavra pokemon
    return palavraPokemon;
    }

    // Entrada da palavra usando o gets():
    var nomeEntrada = gets();

    // Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
    var palavraGerada = combinandoNomesPokemons(nomeEntrada);

    // Exibindo a palavra gerada:
    print(palavraGerada);