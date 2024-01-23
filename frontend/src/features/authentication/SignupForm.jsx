import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import FormRowVertical from "../../ui/FormRowVertical";
import { useSignup } from "./useSignup";
function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ name, email, password, passwordConfirm }) {
    signup(
      { name, email, password, passwordConfirm },
      {
        onSettled: () => reset(),
      }
    );
  }
  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label="Enter name" error={errors?.email?.message}>
        <Input
          type="text"
          id="name"
          disabled={isLoading}
          {...register("name", { required: "This field is required" })}
        />
      </FormRowVertical>

      <FormRowVertical label="Email" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRowVertical>

      <FormRowVertical
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Minimum of 8 characters",
            },
          })}
        />
      </FormRowVertical>
      <FormRowVertical
        label="Confirm Password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || " Password need to match",
          })}
        />
      </FormRowVertical>

      <FormRowVertical>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRowVertical>
    </Form>
    // <Form noValidate onSubmit={handleSubmit(onSubmit)}>

    // </Form>
  );
}

export default SignupForm;
