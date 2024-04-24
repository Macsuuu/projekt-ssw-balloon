let steps = 3;
let currentStep = 0;

$(window).on("resize", ()=>{
    let stepWidth = $(".step").first().width();
    $("#steps").css("transform", 'translateX(-' + stepWidth * currentStep + 'px)');
});

function next(){
    if(currentStep + 1 > steps-1) return;

    let stepWidth = $(".step").first().width();
    if(currentStep+1==1)podsumowanie();
    $("#steps").css("transform", 'translateX(-' + stepWidth * ++currentStep + 'px)');
}

function prev(){
    if(currentStep - 1 < 0) return;

    currentStep--;

    let stepWidth = $(".step").first().width();

    $("#steps").css("transform", 'translateX(-' + stepWidth * currentStep + 'px)');
}

function cancel(){
    location.reload();
}

function podsumowanie(){
    let data = new Date($('input[name="data"]').val());
    let osoby = Number($('input[name="osoby"]').val());
    let nrTel = $('input[name="nrTel"]').val();
    let email = $('input[name="email"]').val();
    let name = $('input[name="name"]').val();
    let price = 0;

    if(osoby<1) osoby = 1;
    if(osoby>10)osoby=10;

    if(osoby==2)price = 399*2;
    else price = 499 * osoby;

    $("#pdsData").html(data.toLocaleDateString() + " godz. 11:00");
    $("#flightDate").html(data.toLocaleDateString()+ " godz. 11:00");
    $("#pdsOsoby").html(osoby);
    $("#pdsName").html(name);
    $("#pdsEmail").html(email);
    $("#pdsTel").html(nrTel);
    $("#pdsPrice").html(price + " PLN");

}

function toMainPage(){
    location.href = "../index.html"
}