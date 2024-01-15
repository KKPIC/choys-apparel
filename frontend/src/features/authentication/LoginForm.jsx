import { useState } from "react";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <FormRowVertical>
        <Input type="email" />
      </FormRowVertical>
      <FormRowVertical>
        <Input type="password" />
      </FormRowVertical>
      <FormRowVertical>
        <Button sizes="large">Log in</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
