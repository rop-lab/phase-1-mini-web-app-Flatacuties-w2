let tbody = document.getElementById('tbody')


// create a fetch function
fetch ("http://localhost:3000/characters")
.then (res => res.json())

.then(json=>{
    json.map(data=>{
    console.log(data)
    tbody.append(td_moringa(data.name,data.id,data.image,data.votes));
})
})

// create td function 
function td_moringa(name,id,img,vote){
let td = document.createElement('tr');

td.innerHTML = `
    <td>${id}</td>
    <td>${name}</td>
    <td><img  src="${img}" style="width:90px; height: 100px;" ></td>
    <td>${vote}</td>
`;
return td
}