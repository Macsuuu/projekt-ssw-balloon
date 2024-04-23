let steps = 3;
let currentStep = 0;

function next(){
    if(currentStep + 1 > steps-1) return;

    currentStep++;

    let stepWidth = $(".step").first().width();

    $("#steps").css("transform", 'translateX(-' + stepWidth * currentStep + 'px)');

}

function prev(){
    if(currentStep - 1 < 0) return;

    currentStep--;

    let stepWidth = $(".step").first().width();

    $("#steps").css("transform", 'translateX(-' + stepWidth * currentStep + 'px)');



}

