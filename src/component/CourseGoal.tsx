import { COURSE_GOAL_PROPS } from "../interfacesAndTypes/types";

export default function CourseGoal({title,description}:COURSE_GOAL_PROPS) {

    return <article>
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        <button>Delete</button>
    </article>
}