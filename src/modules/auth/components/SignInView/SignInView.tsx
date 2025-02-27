import { Helmet } from "react-helmet-async";
import Form from "./components/Form";

const SignInView = () => {
  return (
    <>
      <Helmet>
        <title>Inicio de sesión</title>
      </Helmet>
      <div>
        <Form />
      </div>
    </>
  );
};

export default SignInView;
