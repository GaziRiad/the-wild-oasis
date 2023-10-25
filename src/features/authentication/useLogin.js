import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });

      // We don't need to check the session and then get the current user at this point since the user has just loged ikn
      // so we store directly the user into the cache (Not really necessary just for better UX)
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Provided email or password are incorrect.");
    },
  });
  return { isLoading, login };
}

export default useLogin;
