  
import personagem from "./personagem";
import prompt from "prompt-sync";
import enemy from "./enemy";
import batalha from "./batalha"
import { Util } from "./util";

export class Slayer extends personagem {
   
    
    

    constructor(nome: string) {
        super(nome)
        
        this._vida = Util.randomizar(100,200);
        this._dano = Util.randomizar(50,60);
        this._nutricao = Util.randomizar(20, 400);
        this._infeccao = Util.randomizar(0, 40);
    }


}