import { useReducer } from "react";

import { OptionContainer } from "../../../StyledComponents/QuizContainer.Styled.jsx";

const initialOptionStates = {
  option1: false,
  option2: false,
  option3: false,
  option4: false,
  option5: false,
  option6: false,
  option7: false,
  option8: false,
  option9: false,
  option10: false,
};

const optionReducer = function (prevState, { key, value }) {
  return {
    ...prevState,
    [key]: value,
  };
};

export default function OptionSection() {
  const [optionStates, dispatcher] = useReducer(
    optionReducer,
    initialOptionStates
  );

  return (
    <OptionContainer>
      {/* option1 Starts */}
      <label htmlFor="optionContainer__option-1">
        <input
          type="checkbox"
          name="optionContainer__option-1"
          id="optionContainer__option-1"
          checked={optionStates.option1}
          onChange={(event) =>
            dispatcher({ key: "option1", value: event.target.checked })
          }
        />
        <p className="option-1__option-text">Option 1</p>
      </label>
      {/* option1 Ends */}
      {/* option2 Starts */}
      <label htmlFor="optionContainer__option-2">
        <input
          type="checkbox"
          name="optionContainer__option-2"
          id="optionContainer__option-2"
          checked={optionStates.option2}
          onChange={(event) =>
            dispatcher({ key: "option2", value: event.target.checked })
          }
        />
        <p className="option-2__option-text">Option 2</p>
      </label>
      {/* option2 Ends */}
      {/* option3 Starts */}
      <label htmlFor="optionContainer__option-3">
        <input
          type="checkbox"
          name="optionContainer__option-3"
          id="optionContainer__option-3"
          checked={optionStates.option3}
          onChange={(event) =>
            dispatcher({ key: "option3", value: event.target.checked })
          }
        />
        <p className="option-3__option-text">Option 3</p>
      </label>
      {/* option3 Ends */}
      {/* option4 Starts */}
      <label htmlFor="optionContainer__option-4">
        <input
          type="checkbox"
          name="optionContainer__option-4"
          id="optionContainer__option-4"
          checked={optionStates.option4}
          onChange={(event) =>
            dispatcher({ key: "option4", value: event.target.checked })
          }
        />
        <p className="option-4__option-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam numquam
          blanditiis nostrum inventore magnam quo, tenetur facilis animi porro
          facere!
        </p>
      </label>
      {/* option4 Ends */}
    </OptionContainer>
  );
}
