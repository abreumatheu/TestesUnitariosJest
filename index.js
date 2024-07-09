const { calcularGastoCombustivel } = require('./calculadora');

// Exemplo de uso da função calcularGastoCombustivel
try {
    const distancia = 22; // Distância em quilômetros
    const tipoCombustivel = 'etanol';

    const litrosNecessarios = calcularGastoCombustivel(distancia, tipoCombustivel);
    console.log(`Para percorrer ${distancia} km com ${tipoCombustivel}, são necessários ${litrosNecessarios} litros.`);
} catch (error) {
    console.error('Erro ao calcular o gasto de combustível:', error.message);
}
