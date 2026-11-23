
const questionBank = {
  beginner: [
    {
      q: "Robot nima?",
      a: ["Faqat kompyuter o‘yini", "Dasturlashtirilgan avtomatik qurilma", "Oddiy daftar", "Internet sayti"],
      c: 1,
      e: "Robot — ma’lum vazifalarni bajarish uchun dasturlashtirilgan qurilma."
    },
    {
      q: "Robotning harakatlanishini ta’minlaydigan qurilma qaysi?",
      a: ["Motor", "Monitor", "Klaviatura", "Printer"],
      c: 0,
      e: "Motor elektr energiyasini mexanik harakatga aylantiradi."
    },
    {
      q: "Sensor qanday vazifani bajaradi?",
      a: ["Matn yozadi", "Atrof-muhitdagi ma’lumotni sezadi", "Rasm chop etadi", "Ovoz yozuvini saqlaydi"],
      c: 1,
      e: "Sensor yorug‘lik, masofa, harorat kabi ma’lumotlarni aniqlaydi."
    },
    {
      q: "Robotning asosiy boshqaruv qismi nima?",
      a: ["G‘ildirak", "Korpus", "Kontroller", "Batareya qopqog‘i"],
      c: 2,
      e: "Kontroller robotning elektron boshqaruv markazidir."
    },
    {
      q: "LED qanday qurilma?",
      a: ["Yorug‘lik chiqaruvchi diod", "Harorat sensori", "Motor turi", "Mexanik uzatma"],
      c: 0,
      e: "LED elektr toki o‘tganda yorug‘lik chiqaradi."
    },
    {
      q: "Robotga elektr energiyasini nima beradi?",
      a: ["G‘ildirak", "Batareya", "Sensor", "Korpus"],
      c: 1,
      e: "Batareya robotning elektron qismlarini energiya bilan ta’minlaydi."
    },
    {
      q: "Arduino nima?",
      a: ["Grafik muharrir", "Mikrokontroller platformasi", "Brauzer", "Matn muharriri"],
      c: 1,
      e: "Arduino elektron loyihalarni boshqarish uchun ishlatiladigan platformadir."
    },
    {
      q: "Robotning g‘ildiraklari nima uchun kerak?",
      a: ["Ovoz chiqarish", "Harakatlanish", "Haroratni o‘lchash", "Ma’lumot saqlash"],
      c: 1,
      e: "G‘ildiraklar robotning bir joydan boshqa joyga harakatlanishiga yordam beradi."
    },
    {
      q: "Ultratovush sensori ko‘pincha nimani o‘lchaydi?",
      a: ["Masofani", "Rangni", "Og‘irlikni", "Elektr kuchlanishini"],
      c: 0,
      e: "Ultratovush sensori tovush to‘lqinining qaytish vaqtiga qarab masofani aniqlaydi."
    },
    {
      q: "Robototexnika qaysi sohalarni birlashtiradi?",
      a: ["Faqat adabiyot va tarix", "Mexanika, elektronika va dasturlash", "Faqat musiqa", "Faqat geografiya"],
      c: 1,
      e: "Robototexnika mexanika, elektronika, boshqaruv va dasturlash bilan bog‘liq."
    },
    {
      q: "Robotning korpusi nima vazifani bajaradi?",
      a: ["Qismlarni ushlab turadi va himoya qiladi", "Internet tarqatadi", "Dastur yozadi", "Tok ishlab chiqaradi"],
      c: 0,
      e: "Korpus robot qismlarini bir joyda ushlab turadi va himoya qiladi."
    },
    {
      q: "Elektr zanjirida kalit nima qiladi?",
      a: ["Zanjirni ulaydi yoki uzadi", "Masofani o‘lchaydi", "Haroratni oshiradi", "Rasm chizadi"],
      c: 0,
      e: "Kalit elektr zanjiridagi tok oqimini boshqaradi."
    }
  ],

  intermediate: [
    {
      q: "Arduino Uno platasida asosiy mikrokontroller qaysi?",
      a: ["ATmega328P", "Intel Core i7", "Snapdragon 8", "Raspberry Pi 5 protsessori"],
      c: 0,
      e: "Arduino Uno klassik versiyasida ATmega328P mikrokontrolleri ishlatiladi."
    },
    {
      q: "PWM signali nima uchun ishlatiladi?",
      a: ["Faqat matn chiqarish", "Signalning impuls kengligini boshqarish", "Fayl saqlash", "Internetga ulanish"],
      c: 1,
      e: "PWM impuls kengligini o‘zgartirish orqali LED yorqinligi yoki motor tezligini boshqarishga yordam beradi."
    },
    {
      q: "L298N moduli nima uchun ishlatiladi?",
      a: ["Motorlarni boshqarish", "Haroratni o‘lchash", "Rasmni qayta ishlash", "Ovoz yozish"],
      c: 0,
      e: "L298N — doimiy tok motorlarini boshqarish uchun mo‘ljallangan drayver modul."
    },
    {
      q: "Potensiometr qanday element?",
      a: ["O‘zgaruvchan qarshilik", "Yorug‘lik sensori", "Diod", "Mikrofon"],
      c: 0,
      e: "Potensiometr qarshilik qiymatini o‘zgartirish imkonini beradi."
    },
    {
      q: "I2C aloqa protokolida odatda nechta asosiy signal liniyasi ishlatiladi?",
      a: ["1 ta", "2 ta", "4 ta", "8 ta"],
      c: 1,
      e: "I2C aloqa protokolida SDA va SCL liniyalari ishlatiladi."
    },
    {
      q: "Servo motorning asosiy xususiyati nima?",
      a: ["Faqat doimiy aylanadi", "Burchak holatini boshqarish mumkin", "Faqat harorat o‘lchaydi", "Elektr energiyasini saqlaydi"],
      c: 1,
      e: "Servo motor valining ma’lum burchakka burilishini boshqarish imkonini beradi."
    },
    {
      q: "Analog signal qanday qiymatlarga ega bo‘lishi mumkin?",
      a: ["Faqat 0 va 1", "Muayyan oraliqdagi uzluksiz qiymatlar", "Faqat harflar", "Faqat manzillar"],
      c: 1,
      e: "Analog signal ma’lum oraliqda uzluksiz qiymatlarni ifodalaydi."
    },
    {
      q: "Arduino dasturida setup() funksiyasi qachon bajariladi?",
      a: ["Har bir siklda", "Dastur ishga tushganda bir marta", "Faqat xatolikda", "Har 10 soniyada"],
      c: 1,
      e: "setup() funksiya mikrokontroller ishga tushganda bir marta bajariladi."
    },
    {
      q: "Ultratovush sensori HC-SR04 da masofa qanday aniqlanadi?",
      a: ["Echo qaytish vaqtiga qarab", "Rangni aniqlash orqali", "Motor tezligi orqali", "Tok kuchi orqali"],
      c: 0,
      e: "Sensor yuborgan tovushning qaytish vaqti asosida masofa hisoblanadi."
    },
    {
      q: "Rezistorning asosiy vazifasi nima?",
      a: ["Tokni cheklash", "Yorug‘lik chiqarish", "Harakat hosil qilish", "Dastur saqlash"],
      c: 0,
      e: "Rezistor elektr zanjiridagi tokni cheklash yoki kuchlanishni taqsimlash uchun ishlatiladi."
    },
    {
      q: "Robotda enkoder nima uchun ishlatiladi?",
      a: ["Aylanish yoki siljish haqidagi ma’lumotni olish", "Ovoz chiqarish", "Rangli tasvir yaratish", "Tok ishlab chiqarish"],
      c: 0,
      e: "Enkoder valning aylanishi yoki chiziqli siljishini o‘lchashga yordam beradi."
    },
    {
      q: "Arduino dasturidagi loop() funksiyasi qanday ishlaydi?",
      a: ["Faqat bir marta ishlaydi", "Takroran bajariladi", "Faqat qurilma o‘chganda ishlaydi", "Dastur faylini o‘chiradi"],
      c: 1,
      e: "loop() funksiyasi setup() dan keyin uzluksiz takrorlanadi."
    }
  ],

  advanced: [
    {
      q: "PID boshqaruv tizimidagi I komponent nimani hisobga oladi?",
      a: ["Joriy xatolikni", "Xatolikning vaqt bo‘yicha yig‘indisini", "Xatolik o‘zgarish tezligini", "Motor kuchlanishini"],
      c: 1,
      e: "Integral komponent xatolikning vaqt davomida yig‘ilgan qiymatiga ta’sir qiladi."
    },
    {
      q: "Robototexnikada SLAM atamasi nimani anglatadi?",
      a: ["Simultaneous Localization and Mapping", "Simple Logic and Motion", "System Level Automatic Motor", "Sensor Light Analysis Method"],
      c: 0,
      e: "SLAM — robotning bir vaqtning o‘zida o‘z joylashuvini aniqlashi va xarita tuzishidir."
    },
    {
      q: "Kalman filtri qanday vazifani bajaradi?",
      a: ["Shovqinli o‘lchovlardan holatni baholaydi", "Motorni mexanik ulaydi", "Batareyani zaryadlaydi", "Dastur kodini kompilyatsiya qiladi"],
      c: 0,
      e: "Kalman filtri sensor ma’lumotlari asosida tizim holatini baholashda qo‘llanadi."
    },
    {
      q: "Robotning kinematikasi nimani o‘rganadi?",
      a: ["Harakat geometriyasini", "Faqat elektr zanjirini", "Tarmoq xavfsizligini", "Ma’lumotlar bazasini"],
      c: 0,
      e: "Kinematika kuchlarni hisobga olmasdan harakat va uning geometriyasini o‘rganadi."
    },
    {
      q: "Teskari kinematika masalasi nimani aniqlaydi?",
      a: ["Bo‘g‘in burchaklarini berilgan yakuniy holatga moslaydi", "Batareya sig‘imini", "Sensor rangini", "Motor narxini"],
      c: 0,
      e: "Teskari kinematika robot ishchi organining kerakli holatiga erishish uchun bo‘g‘in parametrlarini topadi."
    },
    {
      q: "ROS tizimida node nima?",
      a: ["Mustaqil ishlaydigan dasturiy jarayon", "Mexanik g‘ildirak", "Batareya turi", "Elektr simi"],
      c: 0,
      e: "ROS node — robot tizimidagi alohida vazifani bajaruvchi dasturiy jarayon."
    },
    {
      q: "Robotda IMU sensori odatda nimalarni o‘lchaydi?",
      a: ["Tezlanish va burchak tezligini", "Faqat rangni", "Faqat bosimni", "Faqat tovushni"],
      c: 0,
      e: "IMU tarkibida akselerometr va giroskop kabi sensorlar bo‘lishi mumkin."
    },
    {
      q: "Differensial harakatlanuvchi robot yo‘nalishni qanday o‘zgartiradi?",
      a: ["Chap va o‘ng g‘ildirak tezliklarini farqlash orqali", "Faqat korpus rangini o‘zgartirib", "Batareyani almashtirib", "Sensorni o‘chirib"],
      c: 0,
      e: "Ikki tomondagi g‘ildiraklarning turli tezligi robotning burilishiga olib keladi."
    },
    {
      q: "Robot manipulyatorining erkinlik darajasi nimani bildiradi?",
      a: ["Mustaqil harakat koordinatalari sonini", "Motorlar narxini", "Sensorlar rangini", "Batareya kuchlanishini"],
      c: 0,
      e: "Erkinlik darajasi tizimning mustaqil harakat parametrlarini ifodalaydi."
    },
    {
      q: "Robotning lokalizatsiyasi nima?",
      a: ["Robotning fazodagi o‘rnini aniqlash", "Robotni bo‘yash", "Motorni sovitish", "Dastur nomini o‘zgartirish"],
      c: 0,
      e: "Lokalizatsiya robotning xarita yoki muhitga nisbatan joylashuvini aniqlash jarayonidir."
    },
    {
      q: "Akselerometr qaysi fizik kattalikni o‘lchaydi?",
      a: ["Tezlanishni", "Haroratni", "Elektr qarshiligini", "Yorug‘lik rangini"],
      c: 0,
      e: "Akselerometr chiziqli tezlanishni o‘lchaydi."
    },
    {
      q: "Robot harakatini rejalashtirishda A* algoritmi nimadan foydalanadi?",
      a: ["Haqiqiy xarajat va evristik bahodan", "Faqat tasodifiy sonlardan", "Faqat haroratdan", "Faqat motor kuchidan"],
      c: 0,
      e: "A* algoritmi yo‘l xarajati va maqsadgacha taxminiy masofani birlashtiradi."
    }
  ],

  expert: [
    {
      q: "Robot manipulyatorining Jacobian matritsasi nima bilan bog‘liq?",
      a: ["Bo‘g‘in tezliklari va ishchi organ tezligi orasidagi bog‘lanish bilan", "Faqat batareya sig‘imi bilan", "Sensor korpusi bilan", "Robot ranglari bilan"],
      c: 0,
      e: "Jacobian matritsasi bo‘g‘in tezliklarini ishchi organining chiziqli va burchak tezliklari bilan bog‘laydi."
    },
    {
      q: "Model Predictive Control (MPC) boshqaruvi qanday ishlaydi?",
      a: ["Kelajakdagi holatlarni model orqali bashorat qilib boshqaradi", "Faqat oldindan yozilgan bitta buyruqni bajaradi", "Sensorlarni butunlay o‘chiradi", "Faqat mexanik uzatmadan foydalanadi"],
      c: 0,
      e: "MPC model yordamida kelajakdagi holatlarni bashorat qiladi va boshqaruvni optimallashtiradi."
    },
    {
      q: "Robot dinamikasi nimani o‘rganadi?",
      a: ["Harakatga ta’sir qiluvchi kuch va momentlarni", "Faqat ranglar palitrasini", "Fayl tizimini", "Internet tezligini"],
      c: 0,
      e: "Dinamika kuchlar va momentlarning robot harakatiga ta’sirini o‘rganadi."
    },
    {
      q: "Robot tizimida sensor fusion nima?",
      a: ["Bir nechta sensor ma’lumotlarini birlashtirish", "Sensorlarni jismonan eritish", "Motorlarni almashtirish", "Dastur oynasini yopish"],
      c: 0,
      e: "Sensor fusion turli sensorlardan olingan ma’lumotlarni birlashtirib, ishonchliroq baho olishga yordam beradi."
    },
    {
      q: "Occupancy grid xaritasida katak qiymati odatda nimani ifodalaydi?",
      a: ["Katakning band yoki bo‘sh bo‘lish ehtimolini", "Robotning rangini", "Motor aylanish sonini", "Batareya ishlab chiqarilgan sanasini"],
      c: 0,
      e: "Occupancy grid kataklari muayyan joyning to‘siq bilan band bo‘lish ehtimolini ifodalaydi."
    },
    {
      q: "Robotning singular holati nimani anglatadi?",
      a: ["Harakat imkoniyatlari ayrim yo‘nalishlarda cheklanishini", "Batareyaning to‘liq zaryadlanganini", "Barcha sensorlar o‘chganini", "Robotning internetga ulanganini"],
      c: 0,
      e: "Singular holatda Jacobian matritsasining rangi kamayishi mumkin va ayrim harakat yo‘nalishlari yo‘qoladi."
    },
    {
      q: "Bayes filtri robot lokalizatsiyasida nima uchun ishlatiladi?",
      a: ["Ehtimollik asosida holatni baholash uchun", "Motorni tezlashtirish uchun", "Korpusni mustahkamlash uchun", "Tokni o‘lchash uchun"],
      c: 0,
      e: "Bayes filtri kuzatuvlar va harakat modelidan foydalanib holat ehtimolini yangilaydi."
    },
    {
      q: "RRT algoritmi robototexnikada qaysi vazifaga qo‘llanadi?",
      a: ["Murakkab fazoda yo‘l rejalashtirishga", "Ovoz balandligini sozlashga", "Batareyani zaryadlashga", "Sensor rangini aniqlashga"],
      c: 0,
      e: "RRT — murakkab konfiguratsiya fazosida yo‘l topishga yordam beradigan daraxtsimon qidiruv algoritmi."
    },
    {
      q: "Robot tizimida real vaqt boshqaruvi nimani talab qiladi?",
      a: ["Hisoblash va javob berishning belgilangan muddatda bajarilishini", "Faqat chiroyli interfeysni", "Cheksiz xotirani", "Internet doimiy bo‘lishini"],
      c: 0,
      e: "Real vaqt tizimida natijaning to‘g‘riligi bilan birga belgilangan vaqtda tayyor bo‘lishi ham muhim."
    },
    {
      q: "Ko‘p robotli tizimlarda konsensus algoritmi nima uchun ishlatiladi?",
      a: ["Robotlarning umumiy kelishilgan qiymatga erishishi uchun", "Barcha robotlarni o‘chirish uchun", "Faqat tasvirni kattalashtirish uchun", "Batareyalarni bir xil rangga bo‘yash uchun"],
      c: 0,
      e: "Konsensus algoritmlari taqsimlangan tizimdagi robotlarning umumiy qiymat yoki qarorga kelishiga yordam beradi."
    },
    {
      q: "Model asosida holatni baholashda Extended Kalman Filter qachon qo‘llanadi?",
      a: ["Nochiziqli tizimlarni chiziqlashtirib baholashda", "Faqat matn tarjimasida", "Faqat motorni mexanik ulashda", "Faqat rasm chop etishda"],
      c: 0,
      e: "Extended Kalman Filter nochiziqli modelni joriy baho atrofida chiziqlashtirib ishlaydi."
    },
    {
      q: "Robot boshqaruvida Lyapunov funksiyasi nima uchun qo‘llanadi?",
      a: ["Tizim barqarorligini tahlil qilish uchun", "Sensor rangini o‘zgartirish uchun", "Batareya hajmini oshirish uchun", "Robot korpusini chizish uchun"],
      c: 0,
      e: "Lyapunov usuli tizim muvozanat holatining barqarorligini matematik tahlil qilishga yordam beradi."
    }
  ]
};

const levelNames = {
  beginner: "BOSHLANG‘ICH",
  intermediate: "O‘RTA",
  advanced: "YUQORI",
  expert: "EKSPERT"
};

const screens = document.querySelectorAll(".screen");
const questionText = document.getElementById("questionText");
const answersBox = document.getElementById("answers");
const questionNumber = document.getElementById("questionNumber");
const timerText = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

let selectedLevel = "";
let questions = [];
let currentIndex = 0;
let score = 0;
let seconds = 20;
let timer = null;
let answered = false;
let review = [];

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function startQuiz(level) {
  selectedLevel = level;
  questions = shuffle(questionBank[level]).slice(0, 10);
  currentIndex = 0;
  score = 0;
  review = [];

  document.getElementById("levelName").textContent = levelNames[level];
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  clearInterval(timer);
  answered = false;
  seconds = 20;

  const question = questions[currentIndex];

  questionNumber.textContent = `${currentIndex + 1} / 10`;
  progressBar.style.width = `${((currentIndex + 1) / 10) * 100}%`;
  questionText.textContent = question.q;
  answersBox.innerHTML = "";
  feedback.textContent = "";
  nextBtn.disabled = true;
  nextBtn.textContent = currentIndex === 9 ? "Natijani ko‘rish →" : "Keyingi savol →";

  const shuffledAnswers = shuffle(
    question.a.map((text, index) => ({
      text,
      correct: index === question.c
    }))
  );

  shuffledAnswers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer.text}`;
    button.dataset.correct = answer.correct;
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answersBox.appendChild(button);
  });

  updateTimer();
  timer = setInterval(() => {
    seconds--;
    updateTimer();

    if (seconds <= 0) {
      clearInterval(timer);
      if (!answered) {
        timeExpired();
      }
    }
  }, 1000);
}

function updateTimer() {
  timerText.textContent = `${seconds} soniya`;
  timerText.style.color = seconds <= 5 ? "#ff5555" : "#ffd21f";
}

function selectAnswer(button, isCorrect) {
  if (answered) return;

  answered = true;
  clearInterval(timer);

  const question = questions[currentIndex];
  const allButtons = [...answersBox.querySelectorAll(".answer-btn")];

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
  });

  if (isCorrect) {
    score++;
    button.classList.add("correct");
    feedback.textContent = "✓ To‘g‘ri javob! " + question.e;
  } else {
    button.classList.add("wrong");
    feedback.textContent = "✗ Noto‘g‘ri javob. " + question.e;
  }

  review.push({
    question: question.q,
    chosen: button.textContent.slice(3),
    correct: question.a[question.c],
    isCorrect,
    explanation: question.e
  });

  nextBtn.disabled = false;
}

function timeExpired() {
  if (answered) return;

  answered = true;
  const question = questions[currentIndex];
  const allButtons = [...answersBox.querySelectorAll(".answer-btn")];

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
  });

  feedback.textContent = "⏰ Vaqt tugadi! To‘g‘ri javob: " +
    question.a[question.c] + ". " + question.e;

  review.push({
    question: question.q,
    chosen: "Javob berilmadi",
    correct: question.a[question.c],
    isCorrect: false,
    explanation: question.e
  });

  nextBtn.disabled = false;
}

function nextQuestion() {
  if (!answered) return;

  if (currentIndex < 9) {
    currentIndex++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timer);

  const percent = score * 10;
  document.getElementById("scorePercent").textContent = `${percent}%`;
  document.getElementById("scoreText").textContent = `${score} / 10 ta to‘g‘ri`;

  let message = "";

  if (score >= 9) {
    message = "Ajoyib! Siz robototexnika bo‘yicha juda kuchli bilim ko‘rsatdingiz!";
  } else if (score >= 7) {
    message = "Juda yaxshi! Bilimingiz ancha mustahkam.";
  } else if (score >= 5) {
    message = "Yaxshi harakat! Yana mashq qilsangiz, natijangiz oshadi.";
  } else {
    message = "Hali o‘rganish uchun imkoniyat ko‘p. Qayta urinib ko‘ring!";
  }

  document.getElementById("resultMessage").textContent = message;

  const reviewList = document.getElementById("reviewList");
  reviewList.innerHTML = "";

  review.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = `review-item ${item.isCorrect ? "good" : "bad"}`;

    const heading = document.createElement("b");
    heading.textContent = `${index + 1}. ${item.question}`;

    const yourAnswer = document.createElement("p");
    yourAnswer.textContent = `Sizning javobingiz: ${item.chosen}`;

    const correctAnswer = document.createElement("p");
    correctAnswer.textContent = `To‘g‘ri javob: ${item.correct}`;

    const explanation = document.createElement("p");
    explanation.textContent = `Izoh: ${item.explanation}`;

    card.append(heading, yourAnswer, correctAnswer, explanation);
    reviewList.appendChild(card);
  });

  showScreen("result");
}

document.querySelectorAll(".level-card").forEach(button => {
  button.addEventListener("click", () => {
    startQuiz(button.dataset.level);
  });
});

nextBtn.addEventListener("click", nextQuestion);

document.getElementById("exitBtn").addEventListener("click", () => {
  if (confirm("Testdan chiqmoqchimisiz? Joriy natija saqlanmaydi.")) {
    clearInterval(timer);
    showScreen("home");
  }
});

document.getElementById("retryBtn").addEventListener("click", () => {
  startQuiz(selectedLevel);
});

document.getElementById("homeBtn").addEventListener("click", () => {
  clearInterval(timer);
  showScreen("home");
});
