let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}
// Funció per pintar tots els cuadrats de la taula

function paintAll() {
    erase();
     for (let i =0;i < matrix.length ; i++) { // files
         for (let j = 0; j < matrix[i].length ;j++ ) { // columnes
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 }
 // Funció per borrar(pintar de blanc) els cuadrats de la taula

 function erase() {
    // Exactament el mateix que paintAll() per en blanc.
     for (let i = 0; i < matrix.length; i++) { // files
         for (let j = 0 ;j < matrix[i].length; j++ ) { // columnes
             matrix[i][j].style.backgroundColor = "white";
         }
     }
 }
 
 // Funció per pintar la meitat dreta de la taula 
 function paintRightHalf() {
     erase();
     for (let i= 0; i < matrix.length; i++ ) { // files
         for (let j = Math.round(matrix.length/2); j < matrix[i].length ; j++ ) { // pintem la primera meitat(dreta) arrodonida de la longitud de les columnes. 
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 }
 
  // Funció per pintar la meitat dreta de la taula 
 function paintLeftHalf() {
     erase();
 
     for (let i= 0; i < matrix.length; i++) { // files
         for (let j= 0; j < matrix[i].length/2; j++) { // pintem apartir de la meitat arrodonida de la longitud de les columnes. 
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 
 }
 
  // Funció per pintar la meitat de d´alt de la taula 
 function paintUpperHalf() {
     erase();
 
     for (let i = 0; i < matrix.length/2; i++) { // Pinta les files fins la meitat del length de files. (començant per la part alta de la taula)
         for (let j = 0; j < matrix[i].length; j++) { // columnes
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 
 }
   // Funció per pintar en forma triangular la part baixa de la taula
 function paintLowerTriangle() {
     erase();
 
     for (let i = 0; i < matrix.length; i++) { // files
         for (let j = 0; j < i; j++) { // pinta les columnes que siguin menors que el número actual de fila.
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 
 }
  // Funció per pintar en forma triangular la part alta de la taula
 
  function paintUpperTriangle() {
     erase();
     for (let i = 0; i < matrix.length; i++) { // files
         for (let j = i; j < matrix[i].length; j++) { // aprofitem variable i per asignarli el valor a j. Recorrem horizontalment la taula i pintem el triangle invertit.
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 
 }
    // Funció per pintar el perimetre de la taula
 function paintPerimeter() {
     erase();
     for (let i = 0; i < matrix.length; i++) { 
         for (let j = 0; j < matrix[i].length; j+=4) { 
           if(i == 0 || i == matrix.length-1){
             for (let j = 0; j < matrix[i].length; j++) {
                 matrix[i][j].style.backgroundColor = "red"; 
             }
                 
           }
             matrix[i][j].style.backgroundColor = "red";
         }
     }
 }
    // Funcio per pintar intercaladament les cel·las
 function paintCheckerboard() {
     erase();
  
     for (let i = 0; i < matrix.length; i+=2) { 
         for (let j = 0; j < matrix[i].length; j+=2) { 
    
             matrix[i][j].style.backgroundColor = "red";
         }
     }
     for (let y = 1; y < matrix.length; y+=2) {
         for (let e = 1; e < matrix[y].length; e+=2) {
             matrix[y][e].style.backgroundColor = "red";
         }
     }
 }
 
 
 
 // Funcio per pintar intercaladament les cel·las 2.0
 function paintCheckerboard2() {
     erase();
     for (let i = 0; i < matrix.length; i+=2) { 
         for (let j = 1; j < matrix[i].length; j+=2) {
    
             matrix[i][j].style.backgroundColor = "red";
         }
     }
     
     for (let y = 1; y < matrix.length; y+=2) {
         for (let e = 0; e < matrix[y].length; e+=2) {
             matrix[y][e].style.backgroundColor = "red";
         }
     }
}
// Funcio per pintar les cel·les del voltant de la cel·la seleccionada
function paintNeighbours() {
    erase();
    let inputX = document.getElementById("inputX").valueAsNumber;
    let inputY = document.getElementById("inputY").valueAsNumber;
        
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if(!(i == 0 && j == 0)){
            try{
                matrix[inputX+i][inputY+j].style.backgroundColor = "red";
            }catch{
                continue;
            }
            }
        }
    }
}
// Funcio per utilitzar e paintAllNeighbours que conta les celes vermelles del seu voltant.
function countNeighbours(x,y) {
    let count = 0;
    for (let i = -1; i<= 1; i++) {
        for (let j = -1; j<= 1; j++) {
            let suma1 = x+i;
            let suma2 = y+j;
            if(suma1<matrix.length && suma1>0 && suma2<matrix[suma1].length && suma2>0){
                if(matrix[suma1][suma2].style.backgroundColor=="red"){
                    if(suma1!=x || suma2!=y){
                            count++;
                    }
                }
            }
        }
    }
    return count;
}
// Funcio que pinta aleatoriament cel·les, i utilitzant un altre funcio, mostra el número de cel·les printades al voltant 
function paintAllNeighbours() {
    erase();
    paintRandomly();
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let count = countNeighbours(i,j);
            matrix[i][j].innerText = count;
        }
    }
}
