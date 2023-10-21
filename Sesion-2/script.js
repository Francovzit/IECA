const btn = document.getElementById("btn-agregar"),
      par = document.getElementById("par"),
      imp = document.getElementById("imp"),
      list = document.getElementById("list");

let par = 0,
    imp = 0;

function agregarNumero() {
  const li = document.createElement("li"),
        num = document.getElementById("input-num").value;

        (num % 2 === 0) ? par++ : imp++;
        par.innerHTML = par;
        imp.innerHTML = imp;

        li.textContent = num;
        list.appendChild(li);
}

btn.addEventListener("click", agregarNumero);
