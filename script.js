let audioPlayer = null;
// ===============================
// LOGIN POPUP
// ===============================
function goHomePage() {
  window.location.href = "index.html";
}
window.addEventListener("load", function () {
  const popup = document.getElementById("loginPopup");
  const visited = localStorage.getItem("visited");

  if (!popup) return;

  if (visited !== "true") {
    popup.style.display = "flex";   // show only first time
  }
});
function startQuizFromPerson() {
  const person = data[selectedCategory].find(p => p.name === selectedPerson);

document.getElementById("quizPersonImg").src = person.img;
  if (!selectedPerson) {
    alert("Select a person first!");
    return;
  }

  // hide person section
  document.getElementById("personSection").classList.add("hidden");

  // show quiz
  document.getElementById("quizArea").classList.remove("hidden");

  startQuiz();
}
// ===============================
// AUTH
// ===============================
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("active");
}
function renderAuth() {
  const auth = document.getElementById("authSection");
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (!auth) return;

  if (isLoggedIn === "true") {
    auth.innerHTML = `<button onclick="logout()">Logout</button>`;
  } else {
    auth.innerHTML = `
      <button onclick="login()">Login</button>
      <button onclick="guestLogin()">Guest</button>
    `;
  }
}

function login() {
  localStorage.setItem("visited", "true");
  localStorage.setItem("loggedIn", "true");

  document.getElementById("loginPopup").style.display = "none";
}

function guestLogin() {
  localStorage.setItem("visited", "true");
  localStorage.setItem("loggedIn", "true");

  document.getElementById("loginPopup").style.display = "none";
}
function logout() {
  localStorage.removeItem("loggedIn");

  // ❌ DO NOT remove "visited"
  // so popup won’t come again

  renderAuth();
}
function openVideo(videoId) {
  const player = document.getElementById("ytPlayer");
  const section = document.getElementById("playerSection");

  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  section.classList.remove("hidden");
}

function closePlayer() {
  const player = document.getElementById("ytPlayer");
  const section = document.getElementById("playerSection");

  player.src = "";
  section.classList.add("hidden");
}
// ===============================
// NAVIGATION
// ===============================

function goToGame() {
  window.location.href = "game.html";
}

function goToReels() {
  window.location.href = "reels.html";
}

// ===============================
// SEARCH SONGS
// ===============================

function searchSongs() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const name = card.getAttribute("data-name") || "";

    if (input === "" || name.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ===============================
// CATEGORY SELECTION (FIXED)
// ===============================

function selectCategory(type, element) {

  document.querySelectorAll(".cat-card").forEach(c => {
    c.classList.remove("active");
  });

  element.classList.add("active");

  selectedCategory = type;

  document.querySelector(".next-btn").disabled = false;
}
// ===============================
// DATA
// ===============================
const data = {

  singer: [
    { name: "Sunitha", img: "assets/images/sunitha.jpg" },
    { name: "SP Balasubramanyam", img: "assets/images/spb.jpg" },
    { name: "Keeravani", img: "assets/images/keeravani.jpg" },
    { name: "Geetha Madhuri", img: "assets/images/Geetha Madhuri.jpg" },
    { name: "Sid Sriram", img: "assets/images/Sid Sriram.jpg" },
    { name: "Anurag Kulkarni", img: "assets/images/Anurag Kulkarni.jpg" },
    { name: "Shreya Ghoshal", img: "assets/images/Shreya Ghoshal.jpg" }
  ],

  heroes: [
    { name: "Allu Arjun", img: "assets/images/hero1.jpg" },
    { name: "Mahesh Babu", img: "assets/images/hero2.jpg" },
    { name: "Ram Charan", img: "assets/images/hero3.jpg" },
    { name: "Prabhas", img: "assets/images/Prabhas.jpg" },
    { name: "Jr. NTR", img: "assets/images/Jr. NTR.jpg" },
    { name: "Nani", img: "assets/images/Nani.jpg" },
    { name: "Pawan Kalyan", img: "assets/images/Pawan Kalyan.jpg" }
  ],

  actress: [
    { name: "Samantha", img: "assets/images/Samantha.jpg" },
    { name: "Rashmika", img: "assets/images/Rashmika.jpg" },
    { name: "Sai Pallavi", img: "assets/images/Sai Pallavi.jpg" },
    { name: "Anushka Shetty", img: "assets/images/Anushka Shetty.jpg" },
    { name: "Sreeleela", img: "assets/images/Sreeleela.jpg" },
    { name: "Mrunal Thakur", img: "assets/images/Mrunal Thakur.jpg" },
  ],

  composer: [
    { name: "DSP", img: "assets/images/dsp.jpg" },
    { name: "Thaman", img: "assets/images/thaman.jpg" }
  ],

  lyricist: [
    { name: "Sirivennela", img: "assets/images/Sirivennela.jpg" },
    { name: "Chandrabose", img: "assets/images/Chandrabose.jpg" }
  ],

  album: [
    { name: "Pushpa", img: "assets/images/Pushpa.jpg" },
    { name: "RRR", img: "assets/images/RRR.jpg" }
  ]

};

// ===============================
// SHOW PERSONS
// ===============================

let currentAudio = null;
let isPlaying = false;

let timerInterval;
let timeElapsed = 0;

// ===============================
// PERSON SELECT (NEW 🔥)
// ===============================

let selectedPerson = "";


// ===============================
// SEARCH PERSON
// ===============================



// ===============================
// QUIZ DATA
// ===============================
let questions = [
  {
    question: "Guess the song 🎵",
    audio: "assets/audio/song1.mp3",
    options: ["Butta Bomma", "Srivalli", "Oo Antava", "Samajavaragamana"],
    answer: "Butta Bomma"
  },
  {
    question: "Which movie is 'Srivalli' song from?",
    options: ["Pushpa", "Ala Vaikunthapurramuloo", "RRR", "Geetha Govindam"],
    answer: "Pushpa"
  },
  {
    question: "Who sang 'Samajavaragamana'?",
    options: ["Sid Sriram", "SPB", "Karthik", "Anurag"],
    answer: "Sid Sriram"
  },
  {
    question: "Guess the song 🎵",
    audio: "assets/audio/song2.mp3",
    options: ["Naatu Naatu", "Butta Bomma", "Srivalli", "Ramulo Ramula"],
    answer: "Naatu Naatu"
  },
  {
    question: "Who is the music director of 'Pushpa'?",
    options: ["DSP", "Keeravani", "Thaman", "Anirudh"],
    answer: "DSP"
  }
];

let currentQuestion = 0;
let score = 0;
let startTime;
function prevQuestion() {

  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}
// ===============================
// START QUIZ
// ===============================

function startQuiz() {

  currentQuestion = 0;
  score = 0;

  // TIMER START
  timeElapsed = 0;

  timerInterval = setInterval(() => {
    timeElapsed++;

    const min = String(Math.floor(timeElapsed / 60)).padStart(2, "0");
    const sec = String(timeElapsed % 60).padStart(2, "0");

    document.getElementById("timer").innerText = `Time: ${min}:${sec}`;
  }, 1000);

  loadQuestion();
}

// ===============================
// LOAD QUESTION
// ===============================

function loadQuestion() {

  const q = questions[currentQuestion];

  if (!q) return;

  // QUESTION
  document.getElementById("question").innerText = q.question;

  // OPTIONS
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => checkAnswer(option, btn);

    optionsDiv.appendChild(btn);
  });

  // ✅ AUDIO CONTROL
// AUDIO CONTROL
const playBtn = document.getElementById("playBtn");

if (q.audio) {

  playBtn.style.display = "inline-block";
  playBtn.innerText = "▶ Play Audio";

  playBtn.onclick = () => {

    // ✅ STOP if already playing
    if (audioPlayer && !audioPlayer.paused) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioPlayer = null;
      playBtn.innerText = "▶ Play Audio";
      return;
    }

    // ▶ PLAY
    audioPlayer = new Audio(q.audio);
    audioPlayer.play();
    playBtn.innerText = "⏸ Pause Audio";
  };

} else {
  playBtn.style.display = "none";
}
}
function playAudio() {

  const q = questions[currentQuestion];

  if (!q.audio) return;

  // STOP previous
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }

  audioPlayer = new Audio(q.audio);
  audioPlayer.play();
}
function checkAnswer(selected, clickedBtn) {
  const correct = questions[currentQuestion].answer;
  const allBtns = document.querySelectorAll("#options button");

  // disable all buttons
  allBtns.forEach(btn => btn.disabled = true);

  if (selected === correct) {
    clickedBtn.style.background = "#00ff88";
    score++; // ✅ THIS MUST BE HERE
  } else {
    clickedBtn.style.background = "#ff4d4d";

    allBtns.forEach(btn => {
      if (btn.innerText === correct) {
        btn.style.background = "#00ff88";
      }
    });
  }
}
// ===============================
// NEXT QUESTION
// ===============================
function nextQuestion() {

  // ✅ STOP AUDIO
  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioPlayer = null;
  }

currentQuestion++;

if (currentQuestion >= questions.length) {
  showResult();
  return;
}

loadQuestion();
}

function goBack() {

  // show category
  document.getElementById("categorySection").style.display = "grid";
  document.querySelector(".next-container").style.display = "flex";

  // hide person section
  document.getElementById("personSection").classList.add("hidden");

  // hide buttons
  document.querySelector(".person-actions").style.display = "none";

  // reset person selection
  selectedPerson = "";

  const btn = document.querySelector(".person-actions .next-btn");
  btn.disabled = true;
  btn.classList.remove("active");
}
function goNext() {

  if (!selectedCategory) {
  document.getElementById("errorMsg").innerText = "Please select a category";
  return;
}

  // hide category
  document.getElementById("categorySection").style.display = "none";
  document.querySelector(".next-container").style.display = "none";

  // show person section
  document.getElementById("personSection").classList.remove("hidden");

  // ✅ show back + next
  document.querySelector(".person-actions").style.display = "flex";

  // title
  document.getElementById("personTitle").innerText =
    "Choose a " + selectedCategory;

  loadPersons();
}
function loadPersons() {
console.log("DATA:", data[selectedCategory]);
  const list = document.getElementById("personList");
  list.innerHTML = "";

  // 🔥 IMPORTANT — check category key
  let persons = data[selectedCategory];

  if (!persons || persons.length === 0) {
    list.innerHTML = "<p style='color:white'>No data found</p>";
    return;
  }

  persons.forEach(p => {

    const div = document.createElement("div");
    div.className = "person";

    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <p>${p.name}</p>
    `;

    // click select
    div.onclick = () => selectPerson(div, p.name);

    list.appendChild(div);
  });
}
function filterPersons() {
  const input = document.getElementById("personSearch").value.toLowerCase();
  const persons = document.querySelectorAll(".person");

  persons.forEach(p => {
    const name = p.innerText.toLowerCase();

    if (name.includes(input)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
}
function selectPerson(element, name) {

  document.querySelectorAll(".person").forEach(p => {
    p.classList.remove("active");
  });

  element.classList.add("active");

  selectedPerson = name;

  // ✅ correct button
  const btn = document.querySelector(".person-actions .next-btn");
  btn.disabled = false;
  btn.classList.add("active");
}


// ===============================
// FINISH QUIZ
// ===============================

function finishQuiz() {
   clearInterval(timerInterval);
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);

  document.getElementById("quizArea").classList.add("hidden");

  const resultDiv = document.getElementById("finalResult");
  resultDiv.classList.remove("hidden");

  resultDiv.innerHTML = `
    <div class="result-card">
      <h2>🎉 Quiz Completed</h2>

      <p>👤 Player: <b>${selectedPerson}</b></p>

      <p>✅ Score: <b>${score}/${questions.length}</b></p>

      <p>⏱ Time Taken: <b>${timeTaken} sec</b></p>

      <button onclick="location.reload()">🔁 Play Again</button>
    </div>
  `;
}



function showResult() {
  clearInterval(timerInterval);

  document.getElementById("resultBox").classList.remove("hidden");

  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  const timeText = document.getElementById("timer").innerText;

  // PERSON
  const name = localStorage.getItem("selectedPerson");
  const img = localStorage.getItem("selectedImage");

  document.getElementById("resultName").innerText = name;
  document.getElementById("resultImg").src = img;

  document.getElementById("resultScore").innerText =
    `Wow! You scored ${percent}%`;

  document.getElementById("resultTime").innerText = timeText;

  // 🎯 QUOTES BASED ON SCORE
  let quote = "";

  if (percent >= 90) {
    quote = `🔥 You know ${name} very well! True fan!`;
  } else if (percent >= 70) {
    quote = `👏 Good job! You’re a strong ${name} fan!`;
  } else if (percent >= 40) {
    quote = `🙂 Not bad! Keep listening to ${name}!`;
  } else {
    quote = `😅 You need to explore ${name} more!`;
  }

  document.getElementById("resultQuote").innerText = quote;

  startConfetti();
}

function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = [];

  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 6,
      speed: Math.random() * 3 + 2
    });
  }

  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > canvas.height) p.y = 0;

      ctx.fillStyle = ["gold", "white", "#ff4d4d"][Math.floor(Math.random()*3)];
      ctx.fillRect(p.x, p.y, p.size, p.size);
    });

    requestAnimationFrame(update);
  }

  update();
}
function goHome() {
  location.reload(); // simplest way
}
// ===============================
// PAGE LOAD
// ===============================
function showHome() {
  document.getElementById("categorySection").classList.remove("hidden");
  document.getElementById("personSection").classList.add("hidden");
  document.getElementById("quizArea").classList.add("hidden");
  document.getElementById("resultBox").classList.add("hidden");
}

function showTab(tabId, btn) {

  // hide all tab contents
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.add("hidden"));

  // remove active from all buttons
  const buttons = document.querySelectorAll(".tab");
  buttons.forEach(b => b.classList.remove("active"));

  // show selected tab
  document.getElementById(tabId).classList.remove("hidden");

  // highlight clicked button
  btn.classList.add("active");
}

function openVideo(link) {
  window.open(link, "_blank");
}
let selectedMoods = [];

// SELECT MULTIPLE MOODS
function selectMood(btn, mood) {
  if (selectedMoods.includes(mood)) {
    selectedMoods = selectedMoods.filter(m => m !== mood);
    btn.classList.remove("active-mood");
  } else {
    selectedMoods.push(mood);
    btn.classList.add("active-mood");
  }

  // ENABLE BUTTONS IF ATLEAST ONE SELECTED
  const enable = selectedMoods.length > 0;
  document.getElementById("youtubeBtn").disabled = !enable;
  document.getElementById("audioBtnMood").disabled = !enable;
}

function openMoodYouTube() {

  if (selectedMoods.length === 0) return;

  const query = selectedMoods.join(" ") + " Mango Music songs";

  const url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);

  window.open(url, "_blank");
}

let playlist = [];
let currentIndex = 0;

function playMoodAudio() {
  console.log("Quick Play clicked");

  if (selectedMoods.length === 0) return;

  playlist = [];

  selectedMoods.forEach(mood => {
    if (moodVideos[mood]) {
      playlist = playlist.concat(moodVideos[mood]);
    }
  });

  if (playlist.length === 0) {
    playlist = ["kJQP7kiw5Fk"];
  }

  currentIndex = 0;

  playCurrentSong();
}

function playCurrentSong() {

  const player = document.getElementById("ytPlayer");
  const section = document.getElementById("playerSection");

  const videoId = playlist[currentIndex];

  player.src = ""; // clear
  player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  section.classList.remove("hidden");

  // auto next
  setTimeout(() => {
    nextSong();
  }, 30000);
}

function nextSong() {
  currentIndex++;

  if (currentIndex >= playlist.length) {
    currentIndex = 0;
  }

  playCurrentSong();
}

function closePlayer() {
  const player = document.getElementById("ytPlayer");
  const section = document.getElementById("playerSection");

  player.src = ""; // stop video
  section.classList.add("hidden");
}

// future upgrade


function startTournament() {

  console.log("Tournament started"); // DEBUG

  document.getElementById("categorySection").style.display = "none";
  document.getElementById("personSection").style.display = "none";
  document.getElementById("quizArea").style.display = "none";

  document.getElementById("tournamentSection").style.display = "block";

  document.getElementById("heroSelect").style.display = "flex";
  document.getElementById("tournamentQuiz").style.display = "none";
}

let selectedHero = "";
let tScore = 0;
let tIndex = 0;
let timer;

function selectHero(hero) {

  console.log("Hero selected:", hero); // DEBUG

  selectedHero = hero;

  document.getElementById("heroSelect").style.display = "none";
  document.getElementById("tournamentQuiz").style.display = "block";

  startTournamentQuiz();
}

const tournamentQuestions = [
  {
    q: "Who acted in Pushpa?",
    options: ["Allu Arjun", "Nani", "Ram", "Vijay"],
    answer: "Allu Arjun"
  },
  {
    q: "Nani movie?",
    options: ["Jersey", "Pushpa", "RRR", "Leo"],
    answer: "Jersey"
  },
  // add total 7 questions
];
function startTournamentQuiz() {
  tIndex = 0;
  tScore = 0;

  loadTQuestion();
}
function showTournamentResult() {
  alert("🔥 Tournament Score: " + tScore);
}
function loadTQuestion() {

  if (tIndex >= tournamentQuestions.length) {
    showTournamentResult();
    return;
  }

  const q = tournamentQuestions[tIndex];

  document.getElementById("tQuestion").innerText = q.q;

  const optDiv = document.getElementById("tOptions");
  optDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => checkTAnswer(opt);

    optDiv.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  let time = 30;

  document.getElementById("tTimer").innerText = "Time: " + time;

  clearInterval(timer);

  timer = setInterval(() => {
    time--;
    document.getElementById("tTimer").innerText = "Time: " + time;

    if (time === 0) {
      clearInterval(timer);
      nextTQuestion();
    }
  }, 1000);
}

function checkTAnswer(selected) {

  clearInterval(timer);

  const correct = tournamentQuestions[tIndex].answer;

  if (selected === correct) {
    tScore += 10;

    // fast bonus
    const timeLeft = parseInt(document.getElementById("tTimer").innerText.split(": ")[1]);
    if (timeLeft > 0) {
      tScore += 5;
    }
  }

  nextTQuestion();
}

function nextTQuestion() {
  tIndex++;
  loadTQuestion();
}

function goToTournament() {
  window.location.href = "game.html?tournament=true";
}

window.onload = function () {

  const params = new URLSearchParams(window.location.search);

  if (params.get("tournament") === "true") {
    startTournament();
  }

};
// ===============================
// LOGIN POPUP (FINAL FIX)
// ===============================

