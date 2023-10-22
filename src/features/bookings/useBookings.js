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

  // SORT
  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const sortingOPT = sortValue.split("-");

  const sortBy = {
    field: sortingOPT[0],
    direction: sortingOPT[1] === "asc" ? 1 : 0,
  };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    error,
    data: { data: bookings, count } = {},
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
    // enabled: filter,
  });

  return { isLoading, bookings, count, error };
}
