import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import useLogOut from "./useLogOut";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { signOut, isLoading } = useLogOut();
  function handleSignOut() {
    signOut();
  }

  return (
    <ButtonIcon onClick={handleSignOut} disabled={isLoading}>
      {isLoading ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}

export default Logout;
