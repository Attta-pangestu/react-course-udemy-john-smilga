import { useState } from "react";
import SingleQuestion from "./singleQuestion"

const Questions = ({questions}) => {
    const [activeId, setActiveId] = useState(null);

    function toggleActive(id) {
        setActiveId(activeId === id ? null : id);
    }

    return (
        <section className="container">
            <h1>Questions</h1>
            {questions.map((question) => (
                <SingleQuestion  key={question.id} activeId={activeId} toggleActive={toggleActive} {...question} />
            ))}
        </section>
    )
}

export default Questions