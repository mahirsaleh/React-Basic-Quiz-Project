import ContextWrapper from "./Components/Context/ContextWrapper.jsx";
import Layout from "./Components/Layout.jsx";

export default function App() {
  return (
    <>
      <ContextWrapper>
        <Layout />
      </ContextWrapper>
    </>
  );
}
