var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        var alvoEvento = event.target; // para saber onde estou clicando
        var paiDoAlvo = alvoEvento.parentNode; // Selecionando nossa TR através do parentNode
        paiDoAlvo.remove();
    },400); // 1s = 1000 - 0.5s = 500
});

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() {
//     console.log("Fui clicado duas vezes nessa bct");
//     this.remove();
//     });
// });