import { TipoUsuario } from "../enums/tipo-usuario-enum";

export class Usuario {
    constructor(        
        public Nome : string,
        public Tipo : TipoUsuario,
        public Id? : number
    ) {}
}