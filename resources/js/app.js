require('./bootstrap');

window.hiddenElementOff = function (elementName){
    $('#' + elementName).removeClass("hidden");
}

window.hiddenElementOn = function (elementName){
    $('#' + elementName).addClass("hidden");
}


window.validaCamposCadastro = function() {
    var inputs = document.getElementsByClassName('required');
    var len = inputs.length;
    var valid = true;
    
    for(var i=0; i < len; i++){
        if (!inputs[i].value){ 
            valid = false;
            inputs[i].className += " red-border" 
        }else {
            inputs[i].classList.remove("red-border");
        }
    }
    
    if (!($('#responsabilidade:checked').length > 0)){
        valid = false;
        $('#responsabilidade_text').addClass('red-border');
    }

    if (!valid){
        alert('Por favor verifique os campos obrigatórios.');
        return false;
    } else { 
        document.getElementById("form-cadastro").submit(); 
    }
}

window.validaCamposSaude = function() {
    
    let valid = true;
    let names = [
        'cardiaco',
        'alergia_medicamento',
        'lactose',
        'deficiencia',
        'transfusao',
        'alergia_pele',
        'desmaio',
        'psicologicos',
        'alergia',
        'ferimento',
        'fratura',
        'cirurgia',
    ];
    
    for(var i=0; i < names.length; i++){
        if($(`[name='${names[i]}']:checked`).length == 0){
            $(`[name='${names[i]}']`).parent().prev().addClass('red-border');
        }
    }

    if (!($('#responsabilidade:checked').length > 0)){
        valid = false;
        $('#responsabilidade_text').addClass('red-border');
    }

    if (!valid){
        alert('Por favor verifique os campos obrigatórios.');
        return false;
    } else { 
        document.getElementById("form-saude").submit(); 
    }
}
