import { GET_GUEST_REVIEWS } from '../components/GuestReviewsPopup/api/queries';

export default [
  {
    request: {
      query: GET_GUEST_REVIEWS,
      variables: {},
    },
    result: {
      guestReviewsList: [
        {
          name: "John",
          date: new Date("2020-04-28").toISOString(),
          rate: 8.8,
          travelingType: "Traveling Alone",
          questions: [
            {
              question: "What did you like most?",
              answer: "Character, history, lobby",
            },
            {
              question: "Was there anythind you didn't like?",
              answer: "There were wery loud neighbors"
            },
          ],
        },
        {
          name: "Mary",
          date: new Date("2020-04-17").toISOString(),
          rate: 9.3,
          travelingType: "Traveling Alone",
          questions: [
            {
              question: "What did you like most?",
              answer: "Wonderful view, tasty food",
            },
            {
              question: "Was there anythind you didn't like?",
              answer: "There was't any parking, I can't take a car!"
            },
          ],
        },
        {
          name: "John",
          date: new Date("2020-03-15").toISOString(),
          rate: 7.6,
          travelingType: "Traveling as Couple",
          questions: [
            {
              question: "What did you like most?",
              answer: "Concert was amazing, people are the most friendly I've ever seen!",
            },
            {
              question: "Was there anythind you didn't like?",
              answer: "Quite dirty streets and no choise in the supermarket"
            },
          ],
        },
      ],
    },
  },
];
