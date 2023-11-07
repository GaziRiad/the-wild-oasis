import Button from "../../ui/Button";
import { useCheckOut } from "./useCheckOut";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkinOut } = useCheckOut();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkinOut(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
