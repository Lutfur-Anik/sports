const searchSport=()=>{
    const player=document.getElementById('player')
    const resultPlayer=player.value;
    player.value=''
    console.log(resultPlayer)
    const url=`https://jsonplaceholder.typicode.com/users/${resultPlayer}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>resultUser(data))
}
const resultUser=(user)=>{
const result=document.getElementById('result');
result.textContent=''
console.log(user)
const div=document.createElement('div');
div.classList.add('detail')
div.innerHTML=`<div><h5>Name:${user.name}</h5> <p>Email:${user.email}</p>
<button onclick=userDetail(${user.id})>Details</button><div>`
result.appendChild(div)

}
const userDetail=(id)=>{
 
 const url=`https://jsonplaceholder.typicode.com/posts/${id}`
 
 fetch(url)
 .then(res=>res.json())
 .then(data=>resultDetail(data))
}
const resultDetail=(detail)=>{
    const details=document.getElementById('detail');
    details.textContent=''
    const div=document.createElement('div')
    div.classList.add('result')
    div.innerHTML=`<div><h6>title:${detail.title}</h6><p>Detail:${detail.body}</p></div>`
    details.appendChild(div)
}