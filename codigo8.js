
// list of students
let alumnos = [{
    nombre : "Lia",
    email : "liagg@gmail.com",
    materia : "Física"
},{
    nombre : "Rem",
    email : "remgc@gmail.com",
    materia : "Química"
},{
    nombre : "Mario",
    email : "marioog@gmail.com",
    materia : "Filosofía"
},{
    nombre : "Pedro",
    email : "pedroo@gmail.com",
    materia : "Calculo"
},{
    nombre : "Cofla",
    email : "coflaxd@gmail.com",
    materia : "Matemáticas"
}];

// call to confirmation button
const btn = document.querySelector(".btn-confirmar");

// assignment and creation
for (let alumno in alumnos ) {
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>`;
    document.querySelector(".grid-container").innerHTML += htmlCode;
}
// event on the button
    btn.addEventListener("click",()=>{
    let elementos = document.querySelectorAll(".semana");
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for(let elemento in elementos){
        let semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
    }
})