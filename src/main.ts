class Alimento {
    nome_fruta: string;
    tipo_fruta: string;
    cor_de_fruta: string;
    quantidade_fruta: number;

    constructor(
        nome_fruta: string,
        tipo_fruta: string,
        cor_de_fruta: string,
        quantidade_fruta: number
    ) {
        this.nome_fruta = nome_fruta;
        this.tipo_fruta = tipo_fruta;
        this.cor_de_fruta = cor_de_fruta;
        this.quantidade_fruta = quantidade_fruta;
    }
    static adicionar(num1: number, num2: number): number {
        return num1 + num2;
    }

    static subtrair(num1: number, num2: number): number {
        return num1 - num2;
    }

    static multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }

    static dividir(num1: number, num2: number): number {
        return num1 / num2;
    }
}

const mango = new Alimento("Mango","Fruta","Vermelho",10);

console.log(
    `Nome: ${mango.nome_fruta}, tipo: ${mango.tipo_fruta}, cor: ${mango.cor_de_fruta}, Quantidade: ${mango.quantidade_fruta}`
);

console.log("Soma = ",Alimento.adicionar(5, 3)); // Saída: 8
console.log("Subtração = ",Alimento.subtrair(10, 7)); // Saída: 3
console.log("Multiplicação = ",Alimento.multiplicar(2, 6)); // Saída: 12
console.log("Divisão = ",Alimento.dividir(15, 3)); // Saída: 5