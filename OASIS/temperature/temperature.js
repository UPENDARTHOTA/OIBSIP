document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert(){
    var fahreinheit = document.getElementById("fahreinheit").value;
    var celsius = document.getElementById("celsius").value;

    if (fahreinheit != '') {
        celsius = (parseFloat(fahreinheit) -32 ) /1.8;
    } else {
        fahreinheit = (parseFloat(celsius) *1.8) + 32;
    }
    document.getElementById('fahreinheit').value = parseFloat(fahreinheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);

}
function clearForm(){
    document.getElementById('fahreinheit').value = '';
    document.getElementById('celsius').value = '';
}
