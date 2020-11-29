function exercicioUm() {
    var a = Number(document.getElementById('a').value);
    var r = 0;
    r = a > 0 ? "Positivo" : a < 0 ? "Negativo" : "Valor é zero" 
    document.getElementById('resultado').innerHTML = r;
}

function exercicioDois() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = 0;
    for(var i = a; i <= b; i++){
        r += i;
    }
    document.getElementById('resultado').innerHTML = "Resultado: "+r;
}

function exercicioTres() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = 0;
    var i = a;
    while(i <= b){
        r += i;
        i++;
    }
    document.getElementById('resultado').innerHTML = "Resultado: "+r;
}

function exercicioQuatro() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var r = 0;
    var i = a;
    do{
        r += i;
        i++;
    }while(i <= b)
    document.getElementById('resultado').innerHTML = "Resultado: "+r;
}

function exercicioCinco() {
    var a = Number(document.getElementById('a').value);
    var r = [];
    for(var i = 1; i <= a; i++) {
        if(a % i == 0){
            r.push(i);
        }
    }
    document.getElementById('resultado').innerHTML = "Resultado: "+r;
}

function exercicioSeisFor() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var rpar = 0;
    var rimpar = 0;
    for(var i = a; i <= b; i++) {
        if(i % 2 == 0){
            rpar += i;
        }else{
            rimpar += i;
        }
    }
    document.getElementById('resultado').innerHTML = "Resultado pares:"+rpar+"\nResultado impares:"+rimpar;
}

function exercicioSeisWhile() {
    var a = Number(document.getElementById('a').value);
    var b = Number(document.getElementById('b').value);
    var rpar = 0;
    var rimpar = 0;
    var i = a;
    while(i <= b){
        if(i % 2 == 0){
            rpar += i;
        }else{
            rimpar += i;
        }
        i++;
    }
    document.getElementById('resultado').innerHTML = "Resultado pares:"+rpar+"\nResultado impares:"+rimpar;
}

function exercicioSete() {
    var r = "DDD não encontrado";
    var ddd = Number(document.getElementById('ddd').value);
    var listaEstado = ['São Paulo', 'Rio de Janeiro', 'Espírito Santo', 'Minas Gerais', 'Paraná', 'Santa Catarina', 'Rio Grande do Sul', 'Distrito Federal', 'Goiás', 'Tocantins', 'Mato Grosso', 'Mato Grosso do Sul', 'Acre', 'Rondônia', 'Bahia', 'Sergipe', 'Pernambuco', 'Alagoas', 'Paraíba', 'Rio Grande do Norte', 'Ceará', 'Piauí', 'Pará', 'Amazonas', 'Roraima', 'Amapá', 'Maranhão'];
    var listaDDD = [11,21,27,31,41,47,51,61,62,63,65,67,68,69,71,79,81,82,83,84,85,86,91,92,95,96,98];
    listaDDD.forEach(elemento => {
        if(elemento == ddd)
            r =  listaEstado[listaDDD.indexOf(elemento)];
    });
    document.getElementById('resultadoDDD').innerHTML = "Estado: "+r;
}

function limpar() {
    document.getElementById('a').value = "";
    document.getElementById('b').value = "";
    document.getElementById('ddd').value = "";
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultadoDDD').innerHTML = "";

}

