import { useRef, type FormEvent } from "react"
import { PROP_WITH_CHILDREN_NEW_GOAL } from "../interfacesAndTypes/types"

export default function NewGoal({ handleClick }: PROP_WITH_CHILDREN_NEW_GOAL) {
    const inputedGoal = useRef<HTMLInputElement>(null);
    const inputedDescription = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();

        if (inputedDescription.current?.value === "" || inputedGoal.current?.value === "") return;

        const newGoal = {
            id: `${new Date().toISOString()}`,
            description: inputedDescription.current?.value || "",
            title: inputedGoal.current?.value || ""
        }

        handleClick(newGoal);

        event.currentTarget.reset();

    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input id="goal" type="text" ref={inputedGoal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={inputedDescription} />
            </p>
            <p>
                <button type="submit">Add Goal</button>
            </p>
        </form>
    )
}