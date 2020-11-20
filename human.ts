import personagem from "./personagem";
import prompt from "prompt-sync";
import enemy from "./enemy";
import batalha from "./batalha"
import { Util } from "./util";

export class Human extends personagem {
     constructor(nome: string) {
        super(nome)
        
        this._vida = Util.randomizar(80, 100);
        this._dano = Util.randomizar(20, 30);
        this._nutricao = Util.randomizar(50, 100);
        this._infeccao = Util.randomizar(0, 40);
        
    }
}