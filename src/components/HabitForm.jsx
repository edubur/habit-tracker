import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !target || target <= 0) return;

    onAddHabit({
      id: Date.now(),
      name: name.trim(),
      target: Number(target),
      progress: 0,
    });

    setName("");
    setTarget("");
  };

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        placeholder="Habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Target per day"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        min="1"
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}