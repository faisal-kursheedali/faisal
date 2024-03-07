import {
  clearUserAction,
  clearUserNavigation,
  setCollectUserData,
} from "../app/feature/state";

const SERVER_URL = "https://faisal-backend.vercel.app/";
// const SERVER_URL = "http://localhost:3000";

const onLoad = async (date) => {
  const response = await fetch(`${SERVER_URL}/api/users`, {
    body: JSON.stringify({ date }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const onLeave = async ({ state, dispatch, date }) => {
  if (
    state.userAction.navbar.length > 0 ||
    state.userAction.home.length > 0 ||
    state.userAction.project.length > 0 ||
    state.userAction.blog.length > 0 ||
    state.userAction.about.length > 0 ||
    state.userAction.footer.length > 0 ||
    state.userNavigation.length > 0
  ) {
    navigator.sendBeacon(
      `${SERVER_URL}/api/action`,
      JSON.stringify({
        data: {
          ...state.userAction,
          navigation: state.userNavigation,
          userEntry: state.userEntry,
        },
      })
    );
    dispatch(clearUserAction());
    dispatch(clearUserNavigation());
  }
};

const getOption = async (dispatch, { name }) => {
  const response = await fetch(`${SERVER_URL}/api/options/${name}`);
  const data = await response.json();
  if (data) {
    dispatch(setCollectUserData(data.boolValue));
  }
};

export { onLoad, onLeave, getOption };
