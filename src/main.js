export default class App {

       factorial(numero){

        let factorial= 1;
        
        for(let i=2; i<=numero; i++){

            factorial= factorial * i
        }

        return factorial;
    }

    
}

let app = new App();

console.log(app.factorial(6));