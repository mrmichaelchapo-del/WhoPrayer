class PrayerGenerator {
  constructor() {
    this.opening = "Dear God,";
    this.closing = "Amen.";

    this.gratitude = [
      "Thank You for this new day.",
      "Thank You for giving me strength.",
      "Thank You for every blessing.",
      "Thank You for the people who care about me.",
      "Thank You for the chance to grow today.",
      "Thank You for the kindness I have received.",
      "Thank You for the peaceful moments in my life."
    ];

    this.guidance = [
      "Help me make wise choices.",
      "Help me stay patient and calm.",
      "Help me treat others with kindness.",
      "Help me recognize when someone needs encouragement.",
      "Help me stay focused on what matters.",
      "Help me learn from my mistakes.",
      "Help me use my time wisely."
    ];

    this.strength = [
      "Give me courage when things feel difficult.",
      "Give me wisdom to understand what is right.",
      "Give me patience with myself and others.",
      "Give me a grateful and hopeful heart.",
      "Give me determination to keep improving.",
      "Give me compassion for everyone I meet.",
      "Give me peace throughout the day."
    ];
  }

  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  generate() {
    return [
      this.opening,
      this.pick(this.gratitude),
      this.pick(this.guidance),
      this.pick(this.strength),
      this.closing
    ].join("\n");
  }
}

// USAGE
const ai = new PrayerGenerator();
console.log(ai.generate());