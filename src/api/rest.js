import {
  clearUserAction,
  clearUserNavigation,
  setCollectUserData,
} from "../app/feature/state";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const onLoad = async (date) => {
  const response = await fetch(`${SERVER_URL}/api/users`, {
    body: JSON.stringify({
      date,
      id: localStorage.getItem("userId"),
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200 || response.status === "200") {
    const data = await response.json();
    if (data.id) {
      localStorage.setItem("userId", data.id);
    }
  }
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
    const value = JSON.stringify({
      data: {
        ...state.userAction,
        navigation: state.userNavigation,
        // userEntry: state.userEntry,
      },
      date,
      id: localStorage.getItem("userId"),
    });
    if (
      "sendBeacon" in navigator &&
      typeof window.navigator.sendBeacon !== "undefined"
    ) {
      const isDataSend = navigator.sendBeacon(
        `${SERVER_URL}/api/actions`,
        value
      );
      dispatch(clearUserAction());
      dispatch(clearUserNavigation());
      if (!isDataSend) {
        setActionsToLS(value);
      }
    } else {
      setActionsToLS(value);
      dispatch(clearUserAction());
      dispatch(clearUserNavigation());
    }
  }
};

const setActionsToLS = (val) => {
  const oldData = localStorage.getItem("userActions");
  if (oldData === null || oldData === "" || !oldData || oldData === "null") {
    localStorage.setItem("userActions", val);
  } else {
    const value = JSON.parse(val);
    const jsonData = JSON.parse(oldData);
    let data = {
      about: [...jsonData.data.about, ...value.data.about],
      blog: [...jsonData.data.blog, ...value.data.blog],
      footer: [...jsonData.data.footer, ...value.data.footer],
      home: [...jsonData.data.home, ...value.data.home],
      navbar: [...jsonData.data.navbar, ...value.data.navbar],
      navigation: [...jsonData.data.navigation, ...value.data.navigation],
      project: [...jsonData.data.project, ...value.data.project],
    };

    const actions = JSON.stringify({
      data,
      date: value.date,
      id: value.id,
    });

    localStorage.setItem("userActions", actions);
  }
};

const sendOldActions = async () => {
  const oldData = localStorage.getItem("userActions");
  if (oldData === null || oldData === "" || !oldData || oldData === "null") {
    return;
  }
  const response = await fetch(`${SERVER_URL}/api/actions/old`, {
    body: oldData,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status === 200 || response.status === "200") {
    const data = await response.json();
    if (data.id) {
      localStorage.setItem("userId", data.id);
      localStorage.setItem("userActions", null);
    }
  }
};

const getOption = async (dispatch, { name }) => {
  const response = await fetch(`${SERVER_URL}/api/options/${name}`);
  const data = await response.json();
  if (data) {
    dispatch(setCollectUserData(data.data.boolValue));
  }
};

export { onLoad, onLeave, getOption, sendOldActions };
