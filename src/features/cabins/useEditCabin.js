import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ cabin, editId }) => createEditCabin(cabin, editId),

    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
      toast.success("Cabin successfully edited");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isEditing, editCabin };
}
