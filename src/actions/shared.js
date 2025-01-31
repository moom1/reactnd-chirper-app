import { getInitialData } from "../utils/api";
import { receiveTweets } from "../actions/tweets";
import { receiveUsers } from "../actions/users";
import { setAuthedUser } from "../actions/authedUser";
import { hideLoading, showLoading } from "react-redux-loading";

const AUTHED_ID = "tylermcginnis";
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ tweets, users }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
