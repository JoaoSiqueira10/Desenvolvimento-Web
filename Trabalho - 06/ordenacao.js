function Ordena() {
    var array = localStorage.getItem("ListaItens").split(',');
    for (i = 0; i < array.length; i++) {
        var a = document.getElementById("mySelect" + i);
        var valor1 = a.options[a.selectedIndex].text;
        localStorage.setItem("Prioridade" + array[i], valor1);
        localStorage.setItem("Itens" + i, array[i]);
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = localStorage.getItem("Itens" + i);
        cell2.innerHTML = localStorage.getItem("Prioridade" + array[i]);

    }
}
