const robot = require("robotjs");
const readline = require("readline");

const DEFAULT_INTERVAL_SECONDS = 60;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const formatInterval = (seconds) => {
  if (seconds % 60 === 0) return `${seconds / 60} minute(s)`;
  return `${seconds} second(s)`;
};

const parseTime = (input) => {
  if (!input) return DEFAULT_INTERVAL_SECONDS;

  const match = input.match(/^(\d+)\s*(s|m)?$/i);
  if (!match) return null;

  const value = parseInt(match[1], 10);
  const unit = (match[2] || "s").toLowerCase();

  switch (unit) {
    case "m":
      return value * 60;
    case "h":
      return value * 60 * 60;
    case "s":
    default:
      return value;
  }
};

rl.question(
  `⏳ How often should Shift be pressed? (e.g. 30s, 2m) [default: ${DEFAULT_INTERVAL_SECONDS}s]: `,
  (answer) => {
    const intervalSeconds = parseTime(answer);

    if (!intervalSeconds) {
      console.log(
        `⚠️  Invalid input "${answer.trim()}". Using default interval.`
      );
    }

    const finalInterval = intervalSeconds || DEFAULT_INTERVAL_SECONDS;

    console.log(
      `✅ Running: Shift key will be pressed every ${formatInterval(
        finalInterval
      )}.`
    );
    console.log(`🔚 Press Ctrl+C to stop.\n`);

    const keepAwake = () => {
      robot.keyTap("shift");
      console.log("🔄 Shift key pressed.");
    };

    keepAwake();
    setInterval(keepAwake, finalInterval * 1000);

    rl.close();
  }
);
