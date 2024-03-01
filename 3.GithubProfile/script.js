// const cdn=`https://api.github.com/users/${user}`
// const cdn=`https://api.github.com/users/nabin-8`
let user='nabin-8'

const Name=document.querySelector("#Name")
const img=document.querySelector("#Image")
const followers=document.querySelector("#followers")
const public_repos=document.querySelector("#public_repos")
const following=document.querySelector("#following")
const UserInput=document.querySelector("#userInput")
const submit=document.querySelector("#submit")

let fetchData= ()=>{
    user = UserInput.value || "nabin-8"
    console.log(user)
    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data.name);
        Name.textContent=data.name
        img.src=data.avatar_url
        followers.textContent="Followers: "+data.followers
        public_repos.textContent="Repository: "+data.public_repos
        following.textContent="Following: "+data.following
    }).catch(err => console.log(err))
}

    submit.addEventListener("click", fetchData)
fetchData()

// title
let docTitle=document.title;
window.addEventListener("blur",()=>{
    document.title=`Come back  👋 ${user}`;
})
window.addEventListener("focus", ()=>{
    document.title=docTitle;
})