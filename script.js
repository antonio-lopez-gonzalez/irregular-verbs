// Lista completa de verbos irregulares con significado en inglés
const irregularVerbs = [
  {
    base: "be",
    pastSimple: "was/were",
    pastParticiple: "been",
    meaning: "to exist or live",
  },
  {
    base: "beat",
    pastSimple: "beat",
    pastParticiple: "beaten",
    meaning: "to hit repeatedly",
  },
  {
    base: "become",
    pastSimple: "became",
    pastParticiple: "become",
    meaning: "to start to be",
  },
  {
    base: "begin",
    pastSimple: "began",
    pastParticiple: "begun",
    meaning: "to start something",
  },
  {
    base: "bite",
    pastSimple: "bit",
    pastParticiple: "bitten",
    meaning: "to use your teeth to cut something",
  },
  {
    base: "break",
    pastSimple: "broke",
    pastParticiple: "broken",
    meaning: "to separate into pieces",
  },
  {
    base: "bring",
    pastSimple: "brought",
    pastParticiple: "brought",
    meaning: "to take something to a place",
  },
  {
    base: "build",
    pastSimple: "built",
    pastParticiple: "built",
    meaning: "to make something by putting parts together",
  },
  {
    base: "buy",
    pastSimple: "bought",
    pastParticiple: "bought",
    meaning: "to get something by paying money",
  },
  {
    base: "can",
    pastSimple: "could",
    pastParticiple: "—",
    meaning: "to be able to do something",
  },
  {
    base: "catch",
    pastSimple: "caught",
    pastParticiple: "caught",
    meaning: "to capture or grab something",
  },
  {
    base: "choose",
    pastSimple: "chose",
    pastParticiple: "chosen",
    meaning: "to pick or select",
  },
  {
    base: "come",
    pastSimple: "came",
    pastParticiple: "come",
    meaning: "to move toward a place",
  },
  {
    base: "cost",
    pastSimple: "cost",
    pastParticiple: "cost",
    meaning: "to have a price",
  },
  {
    base: "cut",
    pastSimple: "cut",
    pastParticiple: "cut",
    meaning: "to divide with a sharp tool",
  },
  {
    base: "do",
    pastSimple: "did",
    pastParticiple: "done",
    meaning: "to perform an action or task",
  },
  {
    base: "draw",
    pastSimple: "drew",
    pastParticiple: "drawn",
    meaning: "to make a picture with a pencil or pen",
  },
  {
    base: "dream",
    pastSimple: "dreamt/dreamed",
    pastParticiple: "dreamt/dreamed",
    meaning: "to see images while sleeping",
  },
  {
    base: "drink",
    pastSimple: "drank",
    pastParticiple: "drunk",
    meaning: "to take a liquid into your mouth",
  },
  {
    base: "drive",
    pastSimple: "drove",
    pastParticiple: "driven",
    meaning: "to control a car or vehicle",
  },
  {
    base: "eat",
    pastSimple: "ate",
    pastParticiple: "eaten",
    meaning: "to consume food",
  },
  {
    base: "fall",
    pastSimple: "fell",
    pastParticiple: "fallen",
    meaning: "to move downward",
  },
  {
    base: "feel",
    pastSimple: "felt",
    pastParticiple: "felt",
    meaning: "to experience a physical or emotional sensation",
  },
  {
    base: "find",
    pastSimple: "found",
    pastParticiple: "found",
    meaning: "to discover something",
  },
  {
    base: "fly",
    pastSimple: "flew",
    pastParticiple: "flown",
    meaning: "to move through the air",
  },
  {
    base: "forget",
    pastSimple: "forgot",
    pastParticiple: "forgotten",
    meaning: "to not remember something",
  },
  {
    base: "get",
    pastSimple: "got",
    pastParticiple: "got/gotten",
    meaning: "to receive or obtain something",
  },
  {
    base: "give",
    pastSimple: "gave",
    pastParticiple: "given",
    meaning: "to offer or provide something",
  },
  {
    base: "go",
    pastSimple: "went",
    pastParticiple: "gone",
    meaning: "to move or travel to a place",
  },
  {
    base: "grow",
    pastSimple: "grew",
    pastParticiple: "grown",
    meaning: "to increase in size or develop",
  },
  {
    base: "hang",
    pastSimple: "hung",
    pastParticiple: "hung",
    meaning: "to suspend from above",
  },
  {
    base: "have",
    pastSimple: "had",
    pastParticiple: "had",
    meaning: "to own or possess",
  },
  {
    base: "hear",
    pastSimple: "heard",
    pastParticiple: "heard",
    meaning: "to perceive sound",
  },
  {
    base: "hit",
    pastSimple: "hit",
    pastParticiple: "hit",
    meaning: "to strike or touch with force",
  },
  {
    base: "hurt",
    pastSimple: "hurt",
    pastParticiple: "hurt",
    meaning: "to cause pain or injury",
  },
  {
    base: "keep",
    pastSimple: "kept",
    pastParticiple: "kept",
    meaning: "to hold or continue to have something",
  },
  {
    base: "know",
    pastSimple: "knew",
    pastParticiple: "known",
    meaning: "to be aware of or have information about something",
  },
  {
    base: "learn",
    pastSimple: "learnt/learned",
    pastParticiple: "learnt/learned",
    meaning: "to gain knowledge or skill",
  },
  {
    base: "leave",
    pastSimple: "left",
    pastParticiple: "left",
    meaning: "to go away from a place",
  },
  {
    base: "lend",
    pastSimple: "lent",
    pastParticiple: "lent",
    meaning: "to give something temporarily",
  },
  {
    base: "let",
    pastSimple: "let",
    pastParticiple: "let",
    meaning: "to allow something to happen",
  },
  {
    base: "lie",
    pastSimple: "lay",
    pastParticiple: "lain",
    meaning: "to rest or recline",
  },
  {
    base: "lose",
    pastSimple: "lost",
    pastParticiple: "lost",
    meaning: "to not be able to find something",
  },
  {
    base: "make",
    pastSimple: "made",
    pastParticiple: "made",
    meaning: "to create or produce something",
  },
  {
    base: "mean",
    pastSimple: "meant",
    pastParticiple: "meant",
    meaning: "to intend or signify something",
  },
  {
    base: "meet",
    pastSimple: "met",
    pastParticiple: "met",
    meaning: "to come together with someone",
  },
  {
    base: "pay",
    pastSimple: "paid",
    pastParticiple: "paid",
    meaning: "to give money for something",
  },
  {
    base: "put",
    pastSimple: "put",
    pastParticiple: "put",
    meaning: "to place something in a position",
  },
  {
    base: "read",
    pastSimple: "read",
    pastParticiple: "read",
    meaning: "to look at and understand written words",
  },
  {
    base: "ride",
    pastSimple: "rode",
    pastParticiple: "ridden",
    meaning: "to sit and control an animal or vehicle",
  },
  {
    base: "ring",
    pastSimple: "rang",
    pastParticiple: "rung",
    meaning: "to make a sound like a bell",
  },
  {
    base: "run",
    pastSimple: "ran",
    pastParticiple: "run",
    meaning: "to move quickly on foot",
  },
  {
    base: "say",
    pastSimple: "said",
    pastParticiple: "said",
    meaning: "to speak words",
  },
  {
    base: "see",
    pastSimple: "saw",
    pastParticiple: "seen",
    meaning: "to perceive with the eyes",
  },
  {
    base: "sell",
    pastSimple: "sold",
    pastParticiple: "sold",
    meaning: "to exchange for money",
  },
  {
    base: "send",
    pastSimple: "sent",
    pastParticiple: "sent",
    meaning: "to cause something to go somewhere",
  },
  {
    base: "set",
    pastSimple: "set",
    pastParticiple: "set",
    meaning: "to put something in a particular place or position",
  },
  {
    base: "shine",
    pastSimple: "shone",
    pastParticiple: "shone",
    meaning: "to give out light",
  },
  {
    base: "shut",
    pastSimple: "shut",
    pastParticiple: "shut",
    meaning: "to close something",
  },
  {
    base: "sit",
    pastSimple: "sat",
    pastParticiple: "sat",
    meaning: "to rest on your bottom",
  },
  {
    base: "sleep",
    pastSimple: "slept",
    pastParticiple: "slept",
    meaning: "to rest your body and mind",
  },
  {
    base: "smell",
    pastSimple: "smelt/smelled",
    pastParticiple: "smelt/smelled",
    meaning: "to sense an odor",
  },
  {
    base: "speak",
    pastSimple: "spoke",
    pastParticiple: "spoken",
    meaning: "to talk or say words",
  },
  {
    base: "spend",
    pastSimple: "spent",
    pastParticiple: "spent",
    meaning: "to use money or time",
  },
  {
    base: "stand",
    pastSimple: "stood",
    pastParticiple: "stood",
    meaning: "to be on your feet",
  },
  {
    base: "steal",
    pastSimple: "stole",
    pastParticiple: "stolen",
    meaning: "to take something without permission",
  },
  {
    base: "swim",
    pastSimple: "swam",
    pastParticiple: "swum",
    meaning: "to move through water",
  },
  {
    base: "take",
    pastSimple: "took",
    pastParticiple: "taken",
    meaning: "to get or carry something",
  },
  {
    base: "teach",
    pastSimple: "taught",
    pastParticiple: "taught",
    meaning: "to help someone learn",
  },
  {
    base: "tell",
    pastSimple: "told",
    pastParticiple: "told",
    meaning: "to give information by speaking",
  },
  {
    base: "think",
    pastSimple: "thought",
    pastParticiple: "thought",
    meaning: "to use your mind to form ideas",
  },
  {
    base: "throw",
    pastSimple: "threw",
    pastParticiple: "thrown",
    meaning: "to send something through the air",
  },
  {
    base: "understand",
    pastSimple: "understood",
    pastParticiple: "understood",
    meaning: "to know the meaning of something",
  },
  {
    base: "wake",
    pastSimple: "woke",
    pastParticiple: "woken",
    meaning: "to stop sleeping",
  },
  {
    base: "wear",
    pastSimple: "wore",
    pastParticiple: "worn",
    meaning: "to have clothes on your body",
  },
  {
    base: "win",
    pastSimple: "won",
    pastParticiple: "won",
    meaning: "to achieve victory",
  },
  {
    base: "write",
    pastSimple: "wrote",
    pastParticiple: "written",
    meaning: "to form letters or words on a surface",
  },
];

// Función para mezclar aleatoriamente un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Función para crear la tabla de verbos
function createVerbTable() {
  const tableBody = document.getElementById("verbTable");
  // Mezclar los verbos aleatoriamente antes de crear la tabla
  const shuffledVerbs = shuffleArray(irregularVerbs);
  shuffledVerbs.forEach((verb) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                ${verb.base}
                <div style="font-size: 0.8em; color: #666;">${verb.meaning}</div>
            </td>
            <td>
                <input type="text" class="past-simple" data-verb="${verb.base}">
                <div class="answer past-simple-answer">${verb.pastSimple}</div>
            </td>
            <td>
                <input type="text" class="past-participle" data-verb="${verb.base}">
                <div class="answer past-participle-answer">${verb.pastParticiple}</div>
            </td>
        `;
    tableBody.appendChild(row);

    // Agregar event listeners a los inputs para verificación automática al salir
    const pastSimpleInput = row.querySelector(".past-simple");
    const pastParticipleInput = row.querySelector(".past-participle");

    pastSimpleInput.addEventListener("blur", () => {
      checkSingleInput(pastSimpleInput);
    });

    pastParticipleInput.addEventListener("blur", () => {
      checkSingleInput(pastParticipleInput);
    });
  });
}

// Función para verificar un input individual
function checkSingleInput(input) {
  const baseClass = input.classList.contains("past-simple")
    ? "past-simple"
    : "past-participle";

  if (!input.value.trim()) {
    // Si está vacío, remover solo las clases de correcto/incorrecto y mantener la clase base
    input.className = baseClass;
    return;
  }

  const verb = irregularVerbs.find((v) => v.base === input.dataset.verb);
  if (!verb) return;

  let isCorrect = false;
  if (input.classList.contains("past-simple")) {
    isCorrect =
      input.value.toLowerCase().trim() === verb.pastSimple.toLowerCase();
  } else if (input.classList.contains("past-participle")) {
    isCorrect =
      input.value.toLowerCase().trim() === verb.pastParticiple.toLowerCase();
  }

  // Establecer la clase base más la clase de resultado
  input.className = `${baseClass} ${isCorrect ? "correct" : "incorrect"}`;
}

// Función para verificar las respuestas
function checkAnswers() {
  const pastSimpleInputs = document.querySelectorAll(".past-simple");
  const pastParticipleInputs = document.querySelectorAll(".past-participle");

  pastSimpleInputs.forEach((input) => {
    const verb = irregularVerbs.find((v) => v.base === input.dataset.verb);
    const isCorrect =
      input.value.toLowerCase() === verb.pastSimple.toLowerCase();
    input.className = `past-simple ${isCorrect ? "correct" : "incorrect"}`;
  });

  pastParticipleInputs.forEach((input) => {
    const verb = irregularVerbs.find((v) => v.base === input.dataset.verb);
    const isCorrect =
      input.value.toLowerCase() === verb.pastParticiple.toLowerCase();
    input.className = `past-participle ${isCorrect ? "correct" : "incorrect"}`;
  });
}

// Función para mostrar/ocultar respuestas
function toggleAnswers() {
  const answers = document.querySelectorAll(".answer");
  const button = document.querySelector(".show-button");
  const isShowing =
    answers.length && getComputedStyle(answers[0]).display !== "none";

  answers.forEach((answer) => {
    // usar display block para respuestas (divs)
    answer.style.display = isShowing ? "none" : "block";
  });

  // Actualizar etiqueta accesible (no sustituir el contenido del botón)
  const sr = button.querySelector(".sr-only");
  if (sr) {
    sr.textContent = isShowing ? "Mostrar Respuestas" : "Ocultar Respuestas";
  }
  // indicar estado a tecnologías de asistencia
  button.setAttribute("aria-pressed", String(!isShowing));
}

// Función para reiniciar el formulario
function resetAnswers() {
  const inputs = document.querySelectorAll("input");
  const answers = document.querySelectorAll(".answer");

  // Limpiar todos los campos de entrada
  inputs.forEach((input) => {
    input.value = "";
    input.className = input.className
      .replace(" correct", "")
      .replace(" incorrect", "");
  });

  // Ocultar respuestas si están visibles
  const button = document.querySelector(".show-button");
  if (answers.length && getComputedStyle(answers[0]).display !== "none") {
    answers.forEach((answer) => {
      answer.style.display = "none";
    });
    const sr = button.querySelector(".sr-only");
    if (sr) sr.textContent = "Mostrar Respuestas";
    button.setAttribute("aria-pressed", "false");
  }
}

// Función para mezclar de nuevo los verbos y recargar la tabla
function shuffleVerbs() {
  const tableBody = document.getElementById("verbTable");
  tableBody.innerHTML = "";
  createVerbTable();
}

// Inicializar la tabla cuando se carga la página
document.addEventListener("DOMContentLoaded", createVerbTable);
