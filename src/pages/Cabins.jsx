import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from ".././services/apiCabins";
import { useEffect } from "react";

function Cabins() {
  useEffect(() => {
    async function fetchCabins() {
      const data = await getCabins();
      console.log(data);
    }
    fetchCabins();
  });
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://ujqgxkulrurehiurhjrd.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        height={450}
      />
    </Row>
  );
}

export default Cabins;
