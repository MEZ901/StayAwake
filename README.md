# StayAwake

**StayAwake** is a simple Node.js utility that simulates a Shift key press at regular intervals.

It can be useful in scenarios where you want to prevent your system from going idle during long-running tasks like:

- Local builds or scripts
- Long downloads or backups
- Monitoring dashboards
- Hardware testing setups

---

## 🔧 Features

- ✅ Simple CLI interface
- ⌨️ Simulates Shift key press every X seconds or minutes
- ⏱️ Accepts flexible input like `30s`, `2m`, or defaults to `60s`

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the script

```bash
node index.js
```

You’ll be prompted to enter how often the Shift key should be pressed.

Example inputs:

- 30 → 30 seconds
- 45s → 45 seconds
- 2m → 2 minutes

> If no input is provided, it defaults to 60 seconds.

---

## 🧠 Why Shift?

The Shift key is used because it’s a safe and non-destructive key — it doesn't alter system state or interfere with ongoing work.

---

## 📦 Requirements

- Node.js v12+
- Basic system permissions to simulate keyboard input

---

## 📄 License

MIT

---

## 🙋‍♂️ Author

Made with simplicity in mind by [MEZ901](https://github.com/MEZ901)
