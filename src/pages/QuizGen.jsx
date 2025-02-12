import TopicSelect from '../components/TopicSelect';

function QuizGen() {
    return (
        <div>
            <h4>Quiz Generation Options</h4>
            <p className="grey-text">
                Please choose your preferences below to generate your personalized quiz
            </p>
            <TopicSelect />
        </div>
    );
}

export default QuizGen;