import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBooking } from "../../services/apiBookings";

function useBooking() {
  const { bookingId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { bookingId, isLoading, data, error };
}

export default useBooking;
