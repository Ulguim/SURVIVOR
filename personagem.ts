import enemy from "./enemy";
let input = require('fs').readFileSync('level.txt', 'utf8');
import { Util } from "./util";
import prompt from "prompt-sync";



export default class personagem {
    
    protected _nome: string;
    protected _vida: number;
    protected _radiacao: number;
    protected _dano: number;
    protected _nutricao: number;
    protected _infeccao: number;


    constructor(nome: string) { 
        
        this._nome = nome;
        this._vida = Util.randomizar(80,100);
        this._radiacao = 0;
        this._dano = Util.randomizar(10,20);
        this._nutricao = Util.randomizar(40,100);
        this._infeccao = Util.randomizar(0,40);

    }
    
  
   
   public set nome(nome : string) {
       this.nome = nome;
    }
    public get dano(): number {
        return this._dano;
    }
    public set dano(dano: number) {
        this._dano = dano; ;
    }
    public get vida() : number {
        return this._vida;
    }
    public set vida(vida: number) {
        this._vida = vida; ;
    }
    public get nutricao() : number {
        return this._nutricao;
    }
    public set nutricao(nutricao: number) {
        this._nutricao = nutricao; 
    }
    public get infeccao() : number {
        return this._infeccao;
    }
    public set infeccao(infeccao: number) {
        this._infeccao = this.infeccao; 
    }


    status(): string{
        return(
        "The Courier" +
            ("Nível de radiação:" + this._radiacao.toFixed(1)) +"\n"+
            ("Dano de ataque: " + this._dano.toFixed(1)) +"\n"+
            ("Nutrição: " + this._nutricao.toFixed(1)) +"\n"+
            ("Infecção: " + this.infeccao.toFixed(1))
        )
    }
//  this._nutricao +-Math.floor(Math.random() * 6) + 1  min de "1"(e somente 1) e máxinmo de 6
    searchF(): void{
        this._infeccao += Util.randomizar(10,20);
        this._radiacao += Util.randomizar(10,20);
        this._nutricao += Util.randomizar(40, 50);
        

    }
    rest(): void{
        this._infeccao = 0;
        this._radiacao -= Util.randomizar(10,40);
        this._vida += Util.randomizar(10,40);
        if (this._vida > 200) {
            this._vida = 200

        }
        this.status();
    }

    // mudar o fight para classe
    

    public random(fator: number): number{
    //    não aparece no game nem enemy;
       return (Math.random() * fator);
    }
    public morto() {
        return this._vida < 0;
   }
}

    



