let testButton = document.createElement("button");
testButton.addEventListener('click', test);
testButton.data = "Test";
testButton.innerHTML = "Test";
document.getElementsByTagName("body")[0].append(testButton);


function createTable(x,y) {
    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = "" 
    for (let i = 0; i < x; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < y; j++) {
            let column = document.createElement("td");
            column.innerHTML = "&nbsp;";
            row.append(column);
        }
        table.append(row);
    }

    let rows = document.querySelector("tbody").children
    matrix = []
    for (let i = 0; i < rows.length; i++) {
        matrix.push(rows[i].children)
    }
}
function test() {
    console.log("Provant matriu 5x6 ...");
    testAll();
    console.log("\n");

    console.log("Provant matriu 100x100 ...");
    createTable(100,100);
    testAll();
    console.log("\n");

    console.log("Provant matriu 3x3 ...");
    createTable(3,3);
    testAll();
    console.log("\n");

    createTable(6,5);
}
function testAll() {
    testPaintAll();
    testPaintRightHalf();
    testPaintLeftHalf();
    testPaintUpperHalf();
    testPaintLowerTriangle();
    testPaintUpperTriangle();
    testPaintPerimeter();
    testPaintCheckerboard();
    testPaintCheckerboard2();
}
function testPaintAll() {
    if (typeof paintAll == "function") {
        try {
            paintAll();
            if (![...document.getElementsByTagName("td")].every((e)=>e.style.backgroundColor=="red")) {
                console.log("❌Test fallat, no tots els elements son vermells");
            } else {
                console.log("✅ paintAll test passat");
            }
        } catch(e) {
            console.log("❌paintAll test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintAll is not implemented");
    }
}

function testPaintLeftHalf() {
    if (typeof paintLeftHalf == "function") {
        try {
            paintLeftHalf();
            if (![...document.getElementsByTagName("td")].filter((e,index)=>index%matrix[0].length < (matrix[0].length/2)).every((e)=>e.style.backgroundColor=="red")) {
                console.log("❌No tots els elements de la meitat esquerra estan pintats");
            } else {
                console.log("✅ paintLeftHalf test passat");
            }
        } catch(e) {
            console.log("❌paintLeftHalf test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintLeftHalf is not implemented");
    }
}

function testPaintRightHalf() {
    if (typeof paintRightHalf == "function") {
        try {
            paintRightHalf();
            if (![...document.getElementsByTagName("td")].filter((e,index)=>index%matrix[0].length > (matrix[0].length/2)).every((e)=>e.style.backgroundColor=="red")) {
                console.log("❌No tots els elements de la meitat dreta estan pintats");
            } else {
                console.log("✅ paintRightHalf test passat");
            }
        } catch(e) {
            console.log("❌paintRightHalf test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintRightHalf is not implemented");
    }
}

function testPaintUpperHalf() {
    if (typeof paintUpperHalf == "function") {
        try {
            paintUpperHalf();
            if (![...document.getElementsByTagName("td")].filter((e,index,m)=>index<m.length/2 > (matrix[0].length/2)).every((e)=>e.style.backgroundColor=="red")) {
                console.log("❌No tots els elements de la meitat superior estan pintats");
            } else {
                console.log("✅ paintUpperHalf test passat");
            }
        } catch(e) {
            console.log("❌paintUpperHalf test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintUpperHalf is not implemented");
    }
}

function testPaintLowerTriangle() {
    if (typeof paintLowerTriangle == "function") {
        try {
            paintLowerTriangle();
            if (![...document.getElementsByTagName("tr")].map((e)=>[...e.children].filter((el)=>el.style.backgroundColor=="red").length).every((e,i)=>e==i)) {
                console.log("❌No tots els elements del triangle inferior estan pintats");
            } else {
                console.log("✅ paintLowerTriangle test passat");
            }
        } catch(e) {
            console.log("❌ paintLowerTriangle test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintLowerTriangle is not implemented");
    }
}

function testPaintUpperTriangle() {
    if (typeof paintUpperTriangle == "function") {
        try {
            paintUpperTriangle();
            if (![...document.getElementsByTagName("tr")].map((e)=>[...e.children].filter((el)=>el.style.backgroundColor=="red").length).every((e,i,a)=>e==(document.getElementsByTagName("tr")[0].children.length-i))) {
                console.log("❌No tots els elements del triangle superior estan pintats");
            } else {
                console.log("✅ paintUpperTriangle test passat");
            }
        } catch(e) {
            console.log("❌paintUpperTriangle test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintUpperTriangle is not implemented");
    }
}

function testPaintPerimeter() {
    if (typeof paintPerimeter == "function") {
        try {
            paintPerimeter();
        } catch(e) {
            console.log("❌paintPerimeter test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintPerimeter is not implemented");
    }
}

function testPaintCheckerboard() {
    if (typeof paintCheckerboard == "function") {
        try {
            paintCheckerboard();
            if (![...document.getElementsByTagName("td")].filter((e,i)=>(i%2)==0).every((e)=>e.style.backgroundColor == "red"))  {
                console.log("❌paintCheckerboard incorrecte");
            } else {
                console.log("✅ paintCheckerboard test passat");
            }

        } catch(e) {
            console.log("❌paintCheckerboard test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintCheckerboard is not implemented");
    }
}

function testPaintCheckerboard2() {
    if (typeof paintCheckerboard2 == "function") {
        try {
            paintCheckerboard2();
            if (![...document.getElementsByTagName("td")].filter((e,i)=>(i%2)==1).every((e)=>e.style.backgroundColor == "red")) {
                console.log("❌paintCheckerboard2 incorrecte");
            } else {
                console.log("✅ paintCheckerboard2 test passat");
            }
        } catch(e) {
            console.log("❌paintCheckerboard2 test fallat, ha petat la funció");
        }
    } else {
        console.log("❌paintCheckerboard2 is not implemented");
    }
}
