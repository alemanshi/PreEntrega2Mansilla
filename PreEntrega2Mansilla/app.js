// Función para calcular el promedio de un array de notas
const calcularPromedio = (notas) => {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length; // Retorna el promedio de las notas
};

// Función para calcular la nota final del alumno y mostrar un resumen al final
const calcularNotaFinal = () => {
  const alumnos = []; // Array para almacenar los datos de los alumnos

  while (true) {
    const nombre = prompt("Ingrese el nombre del alumno:");
    const apellido = prompt("Ingrese el apellido del alumno:");
    const notas = []; // Array para almacenar las notas de los parciales

    for (let i = 1; i <= 3; i++) {
      const nota = Number(prompt("Ingrese la nota del parcial " + i + ":"));
      notas.push(nota); // Agrega la nota al array "notas"
    }

    const notaFinal = calcularPromedio(notas); // Calcula el promedio de las notas

    // Objeto para almacenar los datos del alumno
    const alumno = {
      nombre,
      apellido,
      notas,
      promedio: notaFinal.toFixed(2),
      aprobado: notaFinal >= 6,
    };

    alumnos.push(alumno); // Agrega el objeto del alumno al array de alumnos

    const respuesta = prompt("¿Deseas calcular el promedio de otro alumno? (s/n)").toLowerCase();
    if (respuesta !== "s") {
      break; // Si la respuesta no es "s", se termina el bucle
    }
  }

  // Función para obtener el resumen de cada alumno en formato de cadena
  const obtenerResumenAlumnos = (alumnos) => {
    return alumnos
      .map(
        (alumno) =>
          `Alumn@: ${alumno.nombre} ${alumno.apellido}\n` +
          `Nota de parcial: ${alumno.notas.join(", ")}\n` +
          `Promedio: ${alumno.promedio}\n` +
          `Alumn@ ${alumno.aprobado ? "aprobad@" : "desaprobad@"}\n` +
          "-----------------------------------\n"
      )
      .join("\n");
  };

  // Muestra el resumen de los alumnos al final
  const resumen = obtenerResumenAlumnos(alumnos);
  alert("Resumen de alumnos:\n\n" + resumen);
};

calcularNotaFinal(); // Llama a la función "calcularNotaFinal" para iniciar el programa
