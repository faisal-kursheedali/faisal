import { socket } from "../App";
import { clearUserAction } from "../app/feature/state";

const dateTime = new Date().toISOString();

const sendUserActions = (state, dispatch) => {
  if (
    state.userAction.navbar.length > 0 ||
    state.userAction.home.length > 0 ||
    state.userAction.project.length > 0 ||
    state.userAction.blog.length > 0 ||
    state.userAction.aboutme.length > 0 ||
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

export { sendUserActions, sendUser };
