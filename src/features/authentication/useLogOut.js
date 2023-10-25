import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: signOut } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: () => toast.error("could not log out"),
  });

  return { isLoading, signOut };
}

export default useLogOut;
