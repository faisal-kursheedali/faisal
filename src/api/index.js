const postUserAction = async (userAction) => {
    console.log(userAction);
    fetch("http://localhost:3000/api/action", {
        body: JSON.stringify(userAction),
        method: "POST",
        mode: 'no-cors'
    })
}

const userEntry = async ()=>{
    console.log("user");
}

export {postUserAction, userEntry};