import { socket } from "../App";
import { clearUserAction, clearUserNavigation } from "../app/feature/state";

const dateTime = new Date().toISOString();

const sendUserActions = (state, dispatch) => {
  if (
    state.userAction.navbar.length > 0 ||
    state.userAction.home.length > 0 ||
    state.userAction.project.length > 0 ||
    state.userAction.blog.length > 0 ||
    state.userAction.about.length > 0 ||
    state.userAction.footer.length > 0
  ) {
    socket.emit("userAction", {
      data: JSON.stringify(state.userAction),
      date: dateTime,
    });
    dispatch(clearUserAction());
  }
};

const sendUser = () => {
  socket.emit("newUser", {
    date: dateTime,
  });
};

const sendUserNavigation = (state, dispatch) => {
  if (state.userNavigation.length > 0) {
    socket.emit("userNavigation", {
      data: JSON.stringify({
        navigation: state.userNavigation,
        userEntry: state.userEntry,
      }),
      date: dateTime,
    });
    dispatch(clearUserNavigation());
  }
};

export { sendUserActions, sendUser, sendUserNavigation };
