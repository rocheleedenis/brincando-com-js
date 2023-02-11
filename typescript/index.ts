type Carro = {
    modelo?: string;
    ano: number;
};

function toJSON(obj: any) {
    return JSON.stringify(obj);
}

// função genérica
function fromJSON<T>(json: string) {
    return JSON.parse(json) as T;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 64,
};

const carroJson = '{"modelo":"Fusca","ano":64}';
console.log(toJSON(carro));
console.log(fromJSON<Carro>(carroJson).modelo);
