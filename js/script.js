document.getElementById('wrapper').addEventListener('click',function(){
    var disp = document.getElementById('disp');
    var o_disp = document.getElementById('Odisp');
    // console.log(disp);
    // console.log(o_disp);
    if(event.target.classList.contains('inputs')){
        disp.value += event.target.value;
        
    }else if(event.target.value === '='){
        disp.value = disp.value.replace('×','*');
        disp.value = disp.value.replace('÷','/');
        o_disp.value = eval(disp.value);
        disp.value = disp.value.replace('*','×');
        disp.value = disp.value.replace('/','÷');
        
    }else if(event.target.value === 'C'){

        disp.value=null;
        o_disp.value=null;
    }
    else{
        return null;
    }
},true);