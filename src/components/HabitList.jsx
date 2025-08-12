export default function HabitList({ habits }) {
  return (
    <div className="habit-list">
      {habits.length === 0 ? (
        <p>Please add a habbit!</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              {habit.name} — Target: {habit.target} times/day
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}