import { COURSE_GOAL_PROPS } from "../interfacesAndTypes/types";

export default function CourseGoal({title,children,id,handleDelete}:COURSE_GOAL_PROPS) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button id={id} onClick={()=>handleDelete(id)}>Delete</button>
    </article>
}