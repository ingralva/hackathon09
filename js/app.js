


function EjecutaPregunta01(){
    const valor1 = parseInt(prompt('Ingrese valor del primer numero'));
    const valor2 = parseInt(prompt('Ingrese valor del segundo numero'));

    alert('El resultado es: ' + suma(valor1, valor2));
}

function EjecutaPregunta02(){
    const valor1 = parseInt(prompt('Ingrese valor del examen 1'));
    const valor2 = parseInt(prompt('Ingrese valor del examen 2'));
    const valor3 = parseInt(prompt('Ingrese valor del examen 3'));
    const valor4 = parseInt(prompt('Ingrese valor del examen 4'));

    alert('El resultado es: ' + calculaPromedio(valor1, valor2, valor3, valor4));
}

function EjecutaPregunta03(){
    const valor1 = parseInt(prompt('Ingrese valor de la base'));
    const valor2 = parseInt(prompt('Ingrese valor de la altura'));

    alert('El resultado es: ' + areaRectangulo(valor1, valor2));
}

function EjecutaPregunta04(){
    const valor1 = parseInt(prompt('Ingrese valor de la base'));
    const valor2 = parseInt(prompt('Ingrese valor de la altura'));

    alert('El resultado es: ' + areaTriangulo(valor1, valor2));
}

function EjecutaPregunta05(){
    const valor1 = parseInt(prompt('Ingrese valor del radio de la circunferencia'));
    
    alert('El resultado es: ' + areaCircunferencia(valor1));
}

function EjecutaPregunta06(){
    const valor1 = parseInt(prompt('Ingrese valor de las horas trabajadas'));
    const valor2 = parseInt(prompt('Ingrese valor de el salario'));

    alert('El resultado es: ' + sueldoSemanal(valor1, valor2));
}

function EjecutaPregunta07(){
    const valor1 = parseInt(prompt('Ingrese valor de los metros de la tela'));
    
    alert('El resultado es: ' + convertirMetrosToPulgadas(valor1));
}

function EjecutaPregunta08(){
    const valor1 = parseInt(prompt('Ingrese valor del tipo de cambio'));
    const valor2 = parseInt(prompt('Ingrese valor de el monto'));

    alert('El resultado es: ' + convertirSolesToDolares(valor1, valor2));
}

function EjecutaPregunta09(){
    const valor1 = parseInt(prompt('Ingrese valor del año de nacimiento'));
    
    alert('El resultado es: ' + determinaEdad(valor1));
}

function EjecutaPregunta10(){
    alert(personaMenor());    
}

function EjecutaPregunta11(){
    const valor1 = parseInt(prompt('Ingrese valor de la antiguedad del trabajador'));
    
    alert('El resultado es: $ ' + bonoTrabajador(valor1));
}

function EjecutaPregunta12(){
    alert(salarioRecibido());    
}

// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla

function suma(num1, num2){
    return num1 + num2;
}

//console.log(suma(2, 3));

// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos

function calculaPromedio(examen1, examen2, examen3, examen4){
    return (examen1 + examen2 + examen3 + examen4)/4;
}

//console.log(calculaPromedio(12, 15, 18, 11));

// 3. Calcular el área de un rectángulo

function areaRectangulo(base, altura){
    return base * altura;
}

//console.log(areaRectangulo(6, 4));

// 4. Calcular el área de un triángulo

function areaTriangulo(base, altura){
    return base * altura / 2;
}

//console.log(areaTriangulo(4, 4));

// 5. Calcular el área de una circunferencia

function areaCircunferencia(radio){
    const pi = 3.141592;
    return pi * Math.pow(radio, 2);
}

//console.log(areaCircunferencia(4));

// 6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre

function sueldoSemanal(horas, salario){
    return horas * salario;
}

//console.log(sueldoSemanal(48, 20));

// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que 
// proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo 
// para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. 
// Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m)

function convertirMetrosToPulgadas(metros){
    const factorPulgadas = 0.0254 ;
    return (metros / factorPulgadas).toFixed(2); 
}

//console.log(convertirMetrosToPulgadas(10));

// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano

function convertirSolesToDolares(tipoCambio, monto){
    return (monto / tipoCambio).toFixed(2); 
}

//console.log(convertirSolesToDolares(3.62, 100));

// 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, 
//    pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron

function determinaEdad(anioNacimiento){
    const fecha = new Date();
    const anioActual = fecha.getFullYear();
    return anioActual - anioNacimiento; 
}

//console.log(determinaEdad(1990));

// 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad

function personaMenor(){
    
    const valor1 = prompt('Ingrese nombre persona 1');
    const valor2 = parseInt(prompt('Ingrese valor de la edad persona 1'));

    console.log(valor1);
    console.log(valor2);

    const personas = [{nombre: valor1, edad: valor2}];

    for(let i = 2; i <= 3; i++){
        const valor1 = prompt('Ingrese nombre persona ' + i);
        const valor2 = parseInt(prompt('Ingrese valor de la edad persona ' + i));
        
        console.log(valor1);
        console.log(valor2);

        let persona = {nombre: valor1, edad: valor2};
        
        personas.push(persona);
    }

    let personaMenor;

    if (personas[0].edad < personas[1].edad){
        if(personas[0].edad < personas[2].edad){
            personaMenor = 0;
        }
        else{
            personaMenor = 2;
        }
    }
    else if (personas[1].edad < personas[2].edad){
        personaMenor = 1;
    }
    else {
        personaMenor = 2;
    }

    return `La persona de menor edad es ${personas[personaMenor].nombre} con edad ${personas[personaMenor].edad}`;
}

//console.log(personaMenor());

// 11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, 
//y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, 
// que permita determinar el bono que recibirá un trabajador

function bonoTrabajador(antiguedad){
    const bono = 100;
    const bonoMayorTiempo = 1000;
    let resultado = 0;
    if(antiguedad <=5 ){
        resultado = antiguedad * bono;
    }
    else{
        resultado = bonoMayorTiempo;
    }
    return resultado;
}

console.log(bonoTrabajador());

// 12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. 
// ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? 
// Realice el algoritmo y representan la solución, utilizando el ciclo apropiado

function salarioRecibido(){
    const incremeto = 0.10;
    let salario = 1500;

    let mensaje = '';
    mensaje = mensaje + `Salario año 1: ${salario.toFixed(2)}
`;

    for(let i = 2; i <= 6; i++){
        salario= (salario * (1 + incremeto)).toFixed(2);
        mensaje = mensaje + `Salario año ${i}: ${salario} 
`;
    }

    return mensaje;

}

console.log(salarioRecibido());