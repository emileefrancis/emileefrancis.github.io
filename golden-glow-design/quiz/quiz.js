const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
  });
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealItems.forEach(item => observer.observe(item));

const quiz = document.querySelector("#aestheticQuiz");
const quizResult = document.querySelector("#quizResult");
const resultTitle = document.querySelector("#resultTitle");
const resultDescription = document.querySelector("#resultDescription");
const resultTags = document.querySelector("#resultTags");
const retakeQuiz = document.querySelector("#retakeQuiz");

const quizResults = {
  boho: {
    title: "Soft Boho Glow",
    description:
      "Your aesthetic is earthy, relaxed, and naturally pretty. You probably love warm textures, bronzy makeup, flowy pieces, and details that feel personal instead of overly perfect.",
    tags: ["Linen", "Bronze", "Stacked rings", "Loose waves", "Warm neutrals"]
  },

  clean: {
    title: "Golden Clean Girl",
    description:
      "Your aesthetic is polished, fresh, and simple. You like looking put together without making it look like you tried too hard. Your glow comes from clean lines, soft gold details, and easy routines.",
    tags: ["Skin tint", "Gold hoops", "Slick hair", "Cream basics", "Fresh SPF"]
  },

  cozy: {
    title: "Cozy Campus Glow",
    description:
      "Your aesthetic is soft, comfortable, and approachable. You like beauty and fashion that feel realistic for everyday life, with warm layers, rosy makeup, and routines that make you feel grounded.",
    tags: ["Soft knits", "Claw clips", "Lip balm", "Rosy cheeks", "Comfort colors"]
  },

  vintage: {
    title: "Vintage Golden Hour",
    description:
      "Your aesthetic is romantic, playful, and nostalgic. You like pieces with personality, pretty details, and beauty looks that feel inspired by another era while still being wearable now.",
    tags: ["Silk scarf", "Winged liner", "Butter yellow", "Denim", "Statement lip"]
  }
};

if (quiz) {
  quiz.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(quiz);

    const scores = {
      boho: 0,
      clean: 0,
      cozy: 0,
      vintage: 0
    };

    for (const value of formData.values()) {
      scores[value]++;
    }

    const winner = Object.keys(scores).reduce((topChoice, currentChoice) => {
      return scores[currentChoice] > scores[topChoice] ? currentChoice : topChoice;
    });

    const finalResult = quizResults[winner];

    resultTitle.textContent = finalResult.title;
    resultDescription.textContent = finalResult.description;
    resultTags.innerHTML = "";

    finalResult.tags.forEach(tag => {
      const li = document.createElement("li");
      li.textContent = tag;
      resultTags.appendChild(li);
    });

    quizResult.classList.add("show");
    quizResult.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

if (retakeQuiz && quiz) {
  retakeQuiz.addEventListener("click", () => {
    quiz.reset();
    quizResult.classList.remove("show");
    quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
