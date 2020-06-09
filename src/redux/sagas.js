import { takeEvery, put, call } from "redux-saga/effects"
import { GET_REVIEWS } from "./types";
import { toggleReviewsLoader, setReviews } from "./actions";

export default function* sagaWatcher() {
  yield takeEvery(GET_REVIEWS, sagaWorker);
};

function* sagaWorker() {
  yield put(toggleReviewsLoader(true));
  const payload = yield call(fetchReviews);
  yield put(setReviews(payload));
  yield put(toggleReviewsLoader(false));
}

const fetchReviews = async () => {

}
