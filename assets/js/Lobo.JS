alert("Hola mundo!");

console.log("Este es un mensaje de que accedi a mi sitio web");
  
     
function displayTitle() {

document.getElementById("Comida").innerHTML = "Este es titulo 2"

}


 // JavaScript como lenguaje

  let x = 5;

  x ="Hola mundo"

 // Variables Y Constantes

   let X = 5;
   let myVarible = "Hola mundo";

   const myConst = "TEXT"

 //Tipos de datos
     // Number

     5, 10, 23.50, 675.962416421492

     // String

     "Este es un texto cualquiera"

     // Char

     'a'

     // Boolean

     true 

     false

 
 
    //<!-- SUMA -->

 function EstoEsUnaSuma() {

// Objetos

     let A = parseInt(document.getElementById("Valor1").value);
     let B = parseInt(document.getElementById("Valor2").value);
     let C = suma(A,B);
     document.getElementById("Comida1").innerHTML = C;
  
  
   function suma(A,B) {
      let C = A + B
      return C;
   }

}

  // <!-- RESTA -->
  function EstoEsUnaResta() {

    // Objetos
    
         let D = parseInt(document.getElementById("Arma1").value);
         let E = parseInt(document.getElementById("Arma2").value);
         let F = resta(D,E);
         document.getElementById("Arroz1").innerHTML = F;
      
      
       function resta(D,E) {
          let F = D - E
          return F;
       }
    }
  
  function resta(x, y) {
    return x - y;

  }

    // <!-- MULTIPLICACION -->

    function EstoEsUnaMultiplicacion() {

      // Objetos
      
        let G = parseInt(document.getElementById("Animal1").value);
        let H = parseInt(document.getElementById("Animal2").value);
        let I = Multiplicacion(G,H);
        document.getElementById("Dragon1").innerHTML = I;
    
      function Multiplicacion(G,H) {
        let I = G * H
        return I;
      }
  }
    

  // <!-- MULTIPLICACION -->

 function EstoEsUnaDivision() {

  // Objetos
  
        let J = parseInt(document.getElementById("Garra Mortal1").value);
        let K = parseInt(document.getElementById("Garra Mortal2").value);
        let L = Division(J,K);
        document.getElementById("Cortatormentas1").innerHTML = L;
    
    
      function Division(J,K) {
        let L = J / K
        return L;
      }
  }