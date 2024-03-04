// import { socket } from "../App";
// import {
//   clearUserAction,
//   clearUserNavigation,
//   setCollectUserData,
// } from "../app/feature/state";

// const dateTime = new Date().toISOString();

// const sendUserActions = (state, dispatch) => {
//   if (
//     state.userAction.navbar.length > 0 ||
//     state.userAction.home.length > 0 ||
//     state.userAction.project.length > 0 ||
//     state.userAction.blog.length > 0 ||
//     state.userAction.about.length > 0 ||
//     state.userAction.footer.length > 0
//   ) {
//     socket.emit("userAction", {
//       data: JSON.stringify(state.userAction),
//       date: dateTime,
//     });
//     dispatch(clearUserAction());
//   }
// };

// const sendUser = () => {
//   socket.emit("newUser", {
//     date: dateTime,
//   });
// };

// const sendUserNavigation = (state, dispatch) => {
//   if (state.userNavigation.length > 0) {
//     socket.emit("userNavigation", {
//       data: JSON.stringify({
//         navigation: state.userNavigation,
//         userEntry: state.userEntry,
//       }),
//       date: dateTime,
//     });
//     dispatch(clearUserNavigation());
//   }
// };

// const getOptions = (dispatch, { name }) => {
//   socket.emit("getOptions", { name: name }, (data) => {
//     if (data) {
//       console.log(data);
//       dispatch(setCollectUserData(data.boolValue));
//     }
//   });
// };

// export { sendUserActions, sendUser, sendUserNavigation, getOptions };
