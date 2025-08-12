import { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import "./App.css";

export default function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (newHabit) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  return (
    <div className="app">
      <h1>Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} />
    </div>
  );
}