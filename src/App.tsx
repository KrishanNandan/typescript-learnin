import { useState } from "react";
import CourseGoal from "./component/CourseGoal";
import Header from "./component/Header";
import goalsImg from "./assets/goals.jpg";

import { GOAL_STATE, goal } from "./interfacesAndTypes/types";
import NewGoal from "./component/NewCourseGoal";

export default function App() {
  const [goal, setGoal] = useState<GOAL_STATE>([]);


  function handleClick(newGoal: goal) {
    setGoal(prev => {
      return [...prev, newGoal];
    })
  }

  function handleDelete(id: string) {
    setGoal(prev => prev.filter(i => i.id !== id));
  }

  return <main>

    <Header img={{ src: goalsImg, alt: "A list of goals" }}>
      <h1>Your Course Goals</h1>
    </Header>

    <NewGoal handleClick={handleClick} />

    <ul>
      {goal.map(i => {
        return <li key={i.id}>
          <CourseGoal title={i.title} id={i.id} handleDelete={handleDelete}>
            <p>{i.description}</p>
          </CourseGoal>
        </li>
      })}
    </ul>

  </main>
}
