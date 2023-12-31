function calcularNivel(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas (vitórias - derrotas)
    const saldoVitorias = vitorias - derrotas;

    // Inicializa a variável nivel com um valor padrão
    let nivel = "Desconhecido";

    // Utiliza uma estrutura de decisão para determinar o nível com base no saldo de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna um objeto contendo o saldo de vitórias e o nível
    return {
        saldoVitorias,
        nivel
    };
}

  // Exemplo de uso da função
    const resultado = calcularNivel(75, 20);

  // Exibe a mensagem com o saldo de vitórias e o nível
    console.log(`O Herói tem saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);