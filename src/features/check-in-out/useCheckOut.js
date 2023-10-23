import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckOut() {
  const queryClient = useQueryClient();

  const { isLoading: isCheckingOut, mutate: checkinOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} check out successfully`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: (data) => toast.error(`Booking #${data.id} could not check out`),
  });

  return { isCheckingOut, checkinOut };
}
