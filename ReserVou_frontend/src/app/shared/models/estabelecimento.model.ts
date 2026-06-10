import { TipoEstabelecimento } from "../enums/tipo-estabelecimento-enum";

export class Estabelecimento {
    constructor(        
        public Nome: string,
        public Endereco: string,
        public Tipo: TipoEstabelecimento,
        public Id?: number
    ) {}
}