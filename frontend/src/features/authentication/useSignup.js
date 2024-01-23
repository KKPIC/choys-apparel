import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: ({ name, email, password, passwordConfirm }) =>
      signupApi({ name, email, password, passwordConfirm }),
    onSuccess: (user) => {
      toast.success(
        "Account succesfully created! Please verify your email address."
      );
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("The email you input is already used");
    },
  });
  return { signup, isLoading };
}
