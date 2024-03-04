import {
  clearUserAction,
  clearUserNavigation,
  setCollectUserData,
} from "../app/feature/state";

const onLoad = async (date) => {
  const response = await fetch("http://localhost:3000/api/users/", {
    body: JSON.stringify({ date }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  });
  const data = await response.json();
  console.log(data);
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
      "http://localhost:3000/api/action",
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
    // const response = await fetch("http://localhost:3000/api/action", {
    //   body: JSON.stringify({
    //     data: {
    //       ...state.userAction,
    //       navigation: state.userNavigation,
    //       userEntry: state.userEntry,
    //     },
    //     date: date,
    //   }),
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   mode: "no-cors",
    // }).then((res) => {
    //   dispatch(clearUserAction());
    //   dispatch(clearUserNavigation());
    // });
    // const data = await response.json();
    // console.log(data);
  }
};

const getOption = async (dispatch, { name }) => {
  const response = await fetch(`http://localhost:3000/api/options/${name}`, {
    mode: "no-cors",
  });
  const data = await response.json();
  console.log(data);
  if (data) {
    console.log(data);
    dispatch(setCollectUserData(data.boolValue));
  }
};

export { onLoad, onLeave, getOption };
