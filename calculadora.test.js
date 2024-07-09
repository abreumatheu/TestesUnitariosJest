const { calcularGastoCombustivel } = require('./calculadora');

describe('calcularGastoCombustivel', () => {
    
    it('Deve calcular corretamente para gasolina', () => {
        expect(calcularGastoCombustivel(32, 'gasolina')).toBe(2); // 32 km com gasolina requer 2 litros
        expect(calcularGastoCombustivel(16, 'gasolina')).toBe(1); // 16 km com gasolina requer 1 litro
        expect(calcularGastoCombustivel(8, 'gasolina')).toBe(1);  // 8 km com gasolina requer 1 litro
    });

    it('Deve calcular corretamente para etanol', () => {
        expect(calcularGastoCombustivel(22, 'etanol')).toBe(2);   // 22 km com etanol requer 2 litros
        expect(calcularGastoCombustivel(11, 'etanol')).toBe(1);  // 11 km com etanol requer 1 litro
        expect(calcularGastoCombustivel(5.5, 'etanol')).toBe(1); // 5.5 km com etanol requer 1 litro
    });

    it('Deve lançar erro para distância negativa', () => {
        expect(() => calcularGastoCombustivel(-10, 'gasolina')).toThrow('A distância não pode ser negativa.');
    });

    it('Deve lançar erro para tipo de combustível inválido', () => {
        expect(() => calcularGastoCombustivel(25, 'diesel')).toThrow("Tipo de combustível inválido. Use 'gasolina' ou 'etanol'.");
    });

});
