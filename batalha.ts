import personagem from "./personagem";
import prompt from "prompt-sync";
import enemy from "./enemy";
import { courier } from "./game";
import { Util } from "./util";
import { Slayer } from "./slayer";

let teclado = prompt();

var ghoul = new enemy("Ghoul",Util.randomizar(40,100), Util.randomizar(10,100))


console.log(courier);


export default class batalha{
    
    
    lAtack(): void{
        // status nutrição

        // if (courier.nutricao > 0) {
        //     courier.dano = courier.dano - (courier.nutricao / 1.2);
        // } else {
        //     courier.dano = courier.dano;
        // }
       
    
        ghoul._vida = ghoul._vida - courier.dano;
        console.log(ghoul.EnemyStatus());
        console.log(ghoul.mortoE());
    }

    hAtack(): void{
        // status nutrição
        console.log(courier);
        
        if (courier.nutricao < 0) {
            courier.dano = courier.dano - (courier.dano / 1.2);
        } else {
            courier.dano = courier.dano;
        }
        // status infecção
        if (courier.infeccao > 50) {
            courier.vida = courier.vida - (courier.infeccao / 2);
        }



        console.log(ghoul.EnemyStatus());
        ghoul._vida = ghoul._vida - courier.dano;
     
        
        
        
    }
    
    
    fight(): void{
       
        let option2: number = 0;
       
        while (option2 != 3)
        {
            console.log("|================You are in battle================|");
            console.log("|                 Chose an Option                 |");
            console.log("|1 = Light Atack                                  |");
            console.log("|2 = Strong Atack                                 |");
            console.log("|3 = Run for your life                             |");
            console.log("|=================================================|");
            option2 =+ teclado("Your chose: ");
            switch (option2) {
                case 1:
                    ghoul.EnemyStatus();
                    courier.status();
                    this.lAtack();
                    
                    break;
                    case 2:
                        
                    this.hAtack();
                    courier.status();
                    ghoul.EnemyStatus();
                    break;
                case 3:
                    ghoul.EnemyStatus();
                        console.log("|================Fugiu da Batalha================|");
                        
                        break;
            }
            if (ghoul.mortoE() == true)
            {
                option2 = 3;
                console.log("|================Venceu a batalha================|");
            } else if  (courier.morto() == true){
                option2 = 3;
                ("|================Você morreu================|");
            }
        }
    }

}