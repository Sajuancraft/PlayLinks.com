const quizForm = document.getElementById("quiz-form");
const resultContainer = document.getElementById("result");

quizForm.addEventListener("submit", calculateResult);

function calculateResult(event) {
  event.preventDefault();

  const answers = [
    "option2", // Respuesta correcta para pregunta 1
    "option1", // Respuesta correcta para pregunta 2
    "option3", // Respuesta correcta para pregunta 3
    "option1", // Respuesta correcta para pregunta 4
    "option2", // Respuesta correcta para pregunta 5
    "option1", // Respuesta correcta para pregunta 6
    "option3", // Respuesta correcta para pregunta 7
    "option1", // Respuesta correcta para pregunta 8
    "option2", // Respuesta correcta para pregunta 9
    "option3"  // Respuesta correcta para pregunta 10
  ];

  const userAnswers = [];
  let score = 0;

 // Obtener las respuestas seleccionadas por el usuario
 const radioInputs = document.querySelectorAll("input[type='radio']:checked");
 radioInputs.forEach((input) => {
   userAnswers.push(input.value);
 });

 // Verificar si todas las preguntas han sido respondidas
 if (userAnswers.length !== answers.length) {
   alert("Completa todas las preguntas antes de enviar.");
   return;
 }

 // Calcular la puntuación
 userAnswers.forEach((answer, index) => {
   if (answer === answers[index]) {
     score++;
   }
 });

 // Mostrar los resultados
 showResults(score, answers.length);
}

function showResults(score, totalQuestions) {
 if (score > 5) {
   resultContainer.innerHTML = `
     <h2>Resultados</h2>
     <p>Has completado el quiz.</p>
     <p>Tu puntuación final es: ${score}/${totalQuestions}</p>
     <p>Felicidades, ¡excelente trabajo!</p>
   `;
   alert(`Tu puntuación final es: ${score}/${totalQuestions}. ¡Felicidades, excelente trabajo!`);
 } else {
   resultContainer.innerHTML = `
     <h2>Resultados</h2>
     <p>Has completado el quiz.</p>
     <p>Tu puntuación final es: ${score}/${totalQuestions}</p>
   `;
   alert(`Tu puntuación final es: ${score}/${totalQuestions}. Lamentablemente no has obtenido una puntuación suficiente, ve y llenate de conocimiento aprendiendo de nuestros tutoriales.`);
   window.location.href = "https://nickeliferous-vibra.000webhostapp.com/Index1.html";
 }
}