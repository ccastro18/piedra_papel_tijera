
function playRound(jugador, computador){
    let r;
    if (jugador === computador){
         r = ("no mames péndejo si empataron putos")
    }else if((jugador === "piedra") && (computador === "papel")){
         r = ("te gano una pinchi maquina pendejo")

    }else if((jugador === "piedra") && (computador === "tijera")){
         r = ("la tenes re grande crack ganaste")

    }else if((jugador === "papel") && (computador === "piedra")){
         r = ("la tenes re grande crack ganaste")

    }else if((jugador === "papel") && (computador === "tijera")){
        r = ("te gano una pinchi maquina pendejo")

    }else if((jugador === "tijera") && (computador === "piedra")){
        r = ("te gano una pinchi maquina pendejo")

    }else if((jugador === "tijera") && (computador === "papel")){
         r = ("la tenes regrande crack ganaste")
    }

    return r;

}
function maquinaPlayer(){
    let x = Math.floor((Math.random()* (3-1+1)) +1);
    let y = "" ;
    if (x === 1){
         y = ("tijera")
    }else if(x === 2){
         y = ("piedra")

    }else if(x === 3){
        y = ("papel")
    }
    
    
    return y;
}
function pedirValor(){
    let x ="";
    
    
    while((x.toLowerCase() != "piedra") && (x.toLowerCase() != "papel") && (x.toLowerCase() != "tijera")){
        x = prompt("ingresa 'piedra', 'papel' o 'tijera', si no eres puto" + 0 );
    }
    
    x = x.toLowerCase();
    
    return x;    
}
let maquina = 0;
let jugador = 0;
let empate = 0;
for (let i= 0; i<5;i++){
let dos = maquinaPlayer();
let  uno = pedirValor();
let re= (playRound(uno,dos));
console.log(re);
if (re === "te gano una pinchi maquina pendejo"){
    maquina ++;
}else if(re === "la tenes re grande crack ganaste"){
    jugador ++;
}else if (re === "no mames péndejo si empataron putos"){
    empate++;
}
}
if (maquina < jugador){
    console.log("Siuuuuuuuuuuuu bro ganaste, sos todo un crack")
}
 if (maquina > jugador){
    console.log("Noooooooooooo bro te culiaron por puto")
}
if(maquina === jugador){
    console.log("Ni modo bro lo de usteedes en definitiva es el amor porque empataron")
}