import gql from 'graphql-tag';

export const GET_GUEST_REVIEWS = gql`
  query getGuestReviewsQuery {
    guestReviewsList {
      name
      date
      rate
      questions
      travelingType
    }
  }
`;
  