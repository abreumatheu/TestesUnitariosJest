function calcularGastoCombustivel(distanciaKm, tipoCombustivel) {
    if (distanciaKm < 0) {
        throw new Error("A distância não pode ser negativa.");
    }
    
    if (tipoCombustivel !== 'gasolina' && tipoCombustivel !== 'etanol') {
        throw new Error("Tipo de combustível inválido. Use 'gasolina' ou 'etanol'.");
    }
    
    // Taxa de consumo em km/l para gasolina e etanol
    const taxaConsumo = {'gasolina': 16, 'etanol': 11};
    
    // Calculando os litros necessários
    let litrosNecessarios = distanciaKm / taxaConsumo[tipoCombustivel];
    
    // Arredondando para cima usando Math.ceil para garantir que não falte combustível
    litrosNecessarios = Math.ceil(litrosNecessarios);
    
    return litrosNecessarios;
}

module.exports = { calcularGastoCombustivel };
