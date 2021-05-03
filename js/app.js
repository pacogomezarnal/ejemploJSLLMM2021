function convertirEuros(){
    var euros;
    var dolares;
    var yenes;

    euros=document.getElementById("euros");
    console.log(parseFloat(euros.value));
    dolares=document.getElementById("dolares");
    dolares.value=euros.value*1.21;
    yenes=document.getElementById("yenes");
    yenes.value=euros.value*130,74;
    return false;
}