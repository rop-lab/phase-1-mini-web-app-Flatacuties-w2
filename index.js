let objGlobal 
const renderCharacters = document.getElementById("animals")
const renderImage = document.getElementById("animalImage")
const rendertotalVotes =document.getElementById("Total Votes")
const additionForm =document.getElementById("VotingBox")
const voteInput = document.getElementById("VOTE")
const url ="http://localhost:3000/characters"
const animalDisplay = document.getElementById('displayBar')
fetch (url)
.then ((Response) =>Response.json())
.then ((data)=>{
    console.log(data);
    renderAnimals(data[0])
data.forEach((element) => {
   animalList(element) 
    
});

})
function animalList(urlObj){
let animalBar = document.createElement("li")
animalBar.textContent = urlObj.name
animalDisplay.append(animalBar)
// add event listner to the node list
//create a clickable event to the displayBar
animalBar.addEventListener("click", ()=>{
renderAnimals(urlObj)
})
}
//function displaying the animals{
function renderAnimals(urlObj){
    renderCharacters.textContent=urlObj.name;
    renderImage.src =urlObj.image;
    rendertotalVotes.textContent=urlObj.votes;
    objGlobal=urlObj
    additionForm.addEventListener("submit", (e)=>{
        e.preventDefault
        objGlobal.votes +=parseInt(voteInput.value)
        rendertotalVotes.textContent=objGlobal.votes
        
    })

    

}
