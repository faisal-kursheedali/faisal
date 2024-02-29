const postUserAction = async (userAction) => {
    console.log(userAction);
    fetch("http://localhost:3000/api/action", {
        body: JSON.stringify(userAction),
        method: "POST"
    })
}

const userEntry = async ()=>{
    console.log("user");
}

export {postUserAction, userEntry};