function microondas(prato,tempo){
    let pipoca=1;
    let macarrao=2;
    let carne=3;
    let feijao=4;
    let brigadeiro=5;


   if (prato==pipoca){
       let tempo1=10
       if(tempo>=3* tempo1){
           console.log ('kabumm')
       }
       else if(tempo>=2* tempo1){
           console.log ('Sua comida queimou')
       }
       else if (tempo>= tempo1){
           console.log ( "Prato pronto, bom apetite!!!")
       }
       else{
           console.log ("Comida crua... Eca!!!")
       }
   }
   else if(prato==macarrao){
    let tempo1=8
    if(tempo>=3* tempo1){
        console.log ('kabumm')
    }
    else if(tempo>=2* tempo1){
        console.log ('Sua comida queimou')
    }
    else if (tempo>= tempo1){
        console.log ( "Prato pronto, bom apetite!!!")
    }
    else{
        console.log ("Comida crua... Eca!!!")
    }
   }
   else if(prato==carne){
    let tempo1=15
    if(tempo>=3* tempo1){
        console.log ('kabumm')
    }
    else if(tempo>=2* tempo1){
        console.log ('Sua comida queimou')
    }
    else if (tempo>= tempo1){
        console.log ( "Prato pronto, bom apetite!!!")
    }
    else{
        console.log ("Comida crua... Eca!!!")
    }
   }
   else if(prato==feijao){
    let tempo1=12
       if(tempo>=3* tempo1){
           console.log ('kabumm')
       }
       else if(tempo>=2* tempo1){
           console.log ('Sua comida queimou')
       }
       else if (tempo>= tempo1){
           console.log ( "Prato pronto, bom apetite!!!")
       }
       else{
           console.log ("Comida crua... Eca!!!")
       }
   }
   else if(prato==brigadeiro){
    let tempo1=8
    if(tempo>=3* tempo1){
        console.log ('kabumm')
    }
    else if(tempo>=2* tempo1){
        console.log ('Sua comida queimou')
    }
    else if (tempo>= tempo1){
        console.log ( "Prato pronto, bom apetite!!!")
    }
    else{
        console.log ("Comida crua... Eca!!!")
    }
   }
   else{
       console.log ('Prato inexistente')
   }
}
  microondas(3,20)
  // altere em prmeiro valor comida e em segundo tempo para executar a função como desejar
   
   