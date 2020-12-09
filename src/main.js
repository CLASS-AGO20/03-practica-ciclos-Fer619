export default class App {

       factorial(numero){

        let factorial= 1;
        
        for(let i=2; i<=numero; i++){

            factorial= factorial * i
        }

        return factorial;
    }

    convertirAString(numero){
       let i= 1;
       let s= "";

       while(i<=numero){
           i = i + 1;
           s= s + "*";
       }
       return s;


    } 

    obtenerDivisibles(numero){

        let i= 1;
        let divisible = 0;

        do {

            if(numero%i ===0){
                divisible = divisible + 1;
            }

            i= i  + 1;

        }while(i<=numero);

        return divisible;
    }

    elevar(numero, potencia){

        let elevar= 1;

        for(let i=0; i<potencia; i++){
            elevar= elevar * numero;

        }

        return elevar;    
               
    }


    
}

let app = new App();

console.log(app.factorial(6));

console.log(app.convertirAString(8));

console.log(app.obtenerDivisibles(8));

console.log(app.elevar(2, 3));