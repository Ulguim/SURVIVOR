import personagem from "./personagem";
import prompt from "prompt-sync";
import enemy from "./enemy";
import batalha from "./batalha"
import { Slayer } from "./slayer";
import { Android } from "./andorid";
import { Human } from "./human";
let teclado = prompt();
let option: number = 0;
let batalhar = new batalha;
let texto: string;

texto = teclado("Diga seu nome:");
export let courier = new personagem(texto)


while (option != 9 || courier.morto() == true) {

    console.log("|=================Welcome to Hell=================|");
    console.log(`              Chose an Option ${courier.nome} `);
    console.log("|1 = Search for Food                              |");
    console.log("|2 = Fight                                        |");
    console.log("|3 = See Status                                   |");
    console.log("|4 = Rest one Night                               |");
    console.log("|5 = Pratice                                      |");
    console.log("|=================================================|");
    option =+ teclado("Your chose: ");



    switch (option) {
        case 1:
            courier.searchF()
            
            break;
        case 2:
            batalhar.fight();
            break;
        case 3:
            console.log(courier.status());
             
            break;
    
        case 4:
            courier.rest();
            break;
    
        case 5:
            
            break;
    
        case 6:
            
            break;
    
        default:
            break;
    }
   

}