import { useState } from "react";
import mocks from "gql/mocks";
import { GET_GUEST_REVIEWS } from "components/GuestReviewsPopup/api/queries";

const useFakeQuery = query => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  if(loading) {
    setTimeout(() => {
      query === GET_GUEST_REVIEWS ? setData(mocks) : setError("Incorrect query");
      setLoading(false);
    }, 1500);
  }

  return { loading, error, data };
}

export default useFakeQuery;
