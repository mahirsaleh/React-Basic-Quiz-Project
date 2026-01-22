import { useEffect, useEffectEvent, useState } from "react";
import { NotificationContainer } from "../../StyledComponents/NotificationAlert.Styled.jsx";

export default function NotificationAlert({
  parentPageName,
  children: error,
  isPending,
}) {
  const [isShow, setIsShow] = useState();

  const sideEffect = useEffectEvent(() => {
    if (!isPending && error) {
      setIsShow(true);
      return;
    }
    setIsShow(false) ;
  });

  useEffect(() => {
    sideEffect();
  }, [error, isPending]);

  return (
    <NotificationContainer $isShow={isShow ? "show" : ""}>
      <button type="button" onClick={() => setIsShow(false)}>
        x
      </button>

      <h2 className="header">{parentPageName} Failed !</h2>

      <p className="notification-data">
        {error}
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui itaque
        alias unde est cum quo dolor nemo eos quisquam nulla! */}
      </p>
    </NotificationContainer>
  );
}
