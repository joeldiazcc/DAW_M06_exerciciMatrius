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
 