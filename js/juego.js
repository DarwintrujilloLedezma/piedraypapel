const piedra = "piedra";
const papel = "papel";
const tijera = "tijera";

const empate = 0;
const gano = 1;
const perdio = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const usuarioimg = document.getElementById("usuario-img");
const machineimg = document.getElementById("machine-img");

piedraBtn.addEventListener("click",()=> {
    play(piedra);
    
})

papelBtn.addEventListener("click",()=> {
    play(papel);
    
})
  
tijeraBtn.addEventListener("click",()=> {
    play(tijera);
    
})  

function play (opcionUsuario){

    usuarioimg.src = "img/"+ opcionUsuario +".png";

    setTimeout(function(){

        const machineOption = calcmachineOption();
        const result = calcResult(opcionUsuario, machineOption)
    
        usuarioimg.src = "img/"+ opcionUsuario +".png";
        machineimg.src = "img/"+machineOption+".png";
    
        switch(result){
            case empate:
                resultText.innerHTML = "Usted Ha Empatado!";
                break;
            case gano:
                resultText.innerHTML = "Usted Ha Ganado!";
                break;
            case perdio:
                resultText.innerHTML = "Usted Ha Perdido!";
                break;
            
    }

    }, 2000);

function calcmachineOption(){
    const number = Math.floor(Math.random() *3)
    switch (number){
        case 0:
            return piedra;
            case 1:
                return papel;
                case 2:
                    return tijera;
    }

}

function calcResult(opcionUsuario, machineOption){
    
    if(opcionUsuario === machineOption){
        return empate;

    }else if (opcionUsuario === piedra){

        if ( machineOption === papel) return perdio;
        if( machineOption === tijera) return gano;
        
    }else if (opcionUsuario === papel){

        if (machineOption === tijera) return perdio;
        if (machineOption === roca) return gano;

    }else if(opcionUsuario === tijera){

        if (machineOption === piedra) return perdio;
        if (machineOption === papel) return gano;

    }
}
}






