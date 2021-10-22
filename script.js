function teste() {
  let ini = document.getElementsByName('ini');
  let fim = document.getElementsByName('fim');
  let step = document.getElementsByName('step');
  let section = document.getElementsByTagName('section')[0];
  
  if(!ini[0].value || !fim[0].value || !step[0].value){
    window.alert('Os campos vazios serão atribuídos com número 1!')
    if(!ini[0].value) {
      ini[0].value = 1;
      Number(ini[0].value);  
    }
    if(!fim[0].value) {
      fim[0].value = 1;
      Number(fim[0].value);  
    }
    if(!step[0].value) {
      step[0].value = 1;
      Number(step[0].value);  
    }
  } else {
    // Executa se todos os inputs estiverem preenchidos
    ini = Number(ini[0].value);
    fim = Number(fim[0].value);
    step = Number(step[0].value);
    //console.log(typeof ini, fim, step);
    
    function alertarSinal(){
      window.alert('[ERRO] Todos os números precisam ser ou positivos ou negativos!');
    }

    let result = '';
    if(ini <= fim) {
      if(fim >= 0 && step >= 0){
          while(ini <= fim){
          result += ini + '..';
          ini += step;
          }
      } else {
        alertarSinal();
      }     
    } else {
      if(fim <= 0 && step <= 0){
        while(ini >= fim){
          result += ini + '..';
          ini += step;
        }
      } else {
        alertarSinal();
      }      
    }

    // Apaga o resultado anterior caso exista
    if (document.querySelector('.estilo')){
      section.removeChild(counting);
    }
    counting = document.createElement('div');
    counting.classList.add('estilo')
    counting.innerText = result;
    section.appendChild(counting);
  }
}

