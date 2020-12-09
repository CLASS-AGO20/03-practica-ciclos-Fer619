export default class App {

       factorial(numero){

        let factorial= 1;
        
        for(let i=2; i<=numero; i++){

            factorial= factorial * i
        }

        return factorial;
    }

    convertirAString(numero){
       
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
    
}

let app = new App();

console.log(app.factorial(6));


console.log(app.obtenerDivisibles(8));