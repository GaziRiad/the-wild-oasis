import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useChekin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isCheckingIn, mutate: checkin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        isPaid: true,
        status: "checked-in",
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/`);
    },
    onError: (data) => {
      toast.error(`booking #${data.id} could not be checked in`);
    },
  });
  return { isCheckingIn, checkin };
}

export default useChekin;
