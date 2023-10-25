import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useSignUp() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signUpApi({ fullName, email, password }),
    onSuccess: () => {
      toast.success("New account successfully created");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { isLoading, signup };
}

export default useSignUp;
