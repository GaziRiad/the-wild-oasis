import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status") || "all";
  const filter =
    filterValue === "all"
      ? null
      : { field: "status", value: filterValue, method: "eq" };

  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const sortingOPT = sortValue.split("-");

  const sortBy = {
    field: sortingOPT[0],
    direction: sortingOPT[1] === "asc" ? 1 : 0,
  };

  const {
    isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy],
    queryFn: () => getBookings({ filter, sortBy }),
    // enabled: filter,
  });

  return { isLoading, bookings, error };
}
