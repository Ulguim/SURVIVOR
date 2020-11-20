import personagem from "./personagem";
import prompt from "prompt-sync";
import batalha from "./batalha"
 

let input = require('fs').readFileSync('level.txt', 'utf8');
let lines = input.split('\n');


export default class enemy {

    constructor(
        public _nome: string,
        public _vida: number,
        public _dano: number,
    ) {}
    
  
    EnemyStatus(): string{
        
        return(
           
            ("Inimigo: " + this._nome)+"\n" +
            ("Vida do Inimigo: " + this._vida) +"\n"+
            ("Dano de ataque: " + this._dano) 
            
        )
        
        
    }
    mortoE(): boolean { 
        return this._vida < 0;
    }

}
