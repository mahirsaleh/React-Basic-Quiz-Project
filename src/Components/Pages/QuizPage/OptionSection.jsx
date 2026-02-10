import { OptionContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";

export default function OptionSection({
  quizList,
  optionStates,
  dispatcher,
  dispatchCheckCount,
  questionTitle,
}) {
  // console.log(quizListIndex) ;
  return (
    <OptionContainer>
      {!quizList?.length ? (
        <h2>Loading...</h2>
      ) : (
        quizList.map((value, index) => (
          <label htmlFor={`optionContainer__option-${index}`} key={index}>
            <input
              type="checkbox"
              name={`optionContainer__option-${index}`}
              id={`optionContainer__option-${index}`}
              checked={optionStates[questionTitle][value.title]}
              onChange={(event) => {
                dispatcher({
                  key: value.title,
                  value: event.target.checked,
                });
                // checkCount ;
                dispatchCheckCount({
                  questionTitle: questionTitle,
                  checkedValue: event.target.checked,
                });
              }}
            />
            <p className={`option-${index}__option-text`}>{`${value.title}`}</p>
          </label>
        ))
      )}
    </OptionContainer>
  );
}
