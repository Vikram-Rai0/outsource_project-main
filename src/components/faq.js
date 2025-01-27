import { useState } from "react";

export const faqList = [
    {
        question: "What is the cost of cleaning ?",
        answer: "The cost of cleaning varies on the service requested and amount of work involved.",
        active: true,
        id :1
    },
    {
        question: "How much time it takes to get job done ?",
        answer: "The amount of time it takes to get a job done also depends on the service requested and may vary from extensiveness of the job.",
        active: false,
        id: 2
    },
    {
        question: "what time the service is available ?",
        answer: "We provide a very flexible timetable throughout Sydney region.",
        active: false,
        id: 3
    },
    {
        question: "What if my agent finds issues on the cleaning services ?",
        answer: "Since it’s a guarantee services, we will happily assist you and solve any issues raised.",
        active: false,
        id: 4
    },
];

function Faq() {

    return (
        <div id="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div id="faq-list">
                {
                    faqList.map((faq,index) => {
                        return <SingleFaq
                                    question={faq.question}
                                    answer={faq.answer}
                                    active={faq.active}
                                    key={faq.id}
                                />
                    })
                }
            </div>
        </div>
    )
}

function SingleFaq({question,answer,active}) {
    const [IsActive,setIsActive] = useState(active);

    if (active) {
        return <details open>
                <summary onClick={() => setIsActive(!IsActive)}>
                    <strong>
                        {question}
                    </strong>
                    {
                        IsActive ? <span>&#x2796;</span> :<span>&#x2795;</span>
                    }
                </summary>
                <p>
                    {answer}
                </p>
        </details>
    }

    return (
        <details>
                <summary onClick={() => setIsActive(!IsActive)}>
                    <strong>
                        {question}
                    </strong>
                    {
                        IsActive ? <span>&#x2796;</span> :<span>&#x2795;</span>
                    }
                </summary>
                <p>
                    {answer}
                </p>
        </details>
    )
}

export default Faq;