const button = document.querySelectorAll("button");
const search_field =document.querySelector("#search");



function displayEmojee(searchQuery = ""){
    let filteredList = emojiList.filter(function(emoji){
        if(searchQuery.length === 0){
            return true;
        }
        if(emoji.description.indexOf(searchQuery)!== -1){
            return true;
        }
    })


    const emojiContainer = document.querySelector(".emoji_container");
    emojiContainer.innerHTML="";
    filteredList.forEach(element => {
        // let new_row = document.createElement("tr");
        // let new_emoji = document.createElement("td");
        // let new_aliases = document.createElement("td");
        // let new_description = document.createElement("td");

        // new_description.innerText = element.description;
        // new_emoji.innerText = element.emoji;
        // new_aliases.innerText = element.aliases.join(", ");


        // new_row.appendChild(new_emoji);
        // new_row.appendChild(new_description);
        // new_row.appendChild(new_aliases);

        // console.log(new_row);

        // emojiContainer.appendChild(new_row);

        let span = document.createElement("span");
        span.innerText=element.emoji;
        emojiContainer.appendChild(span);

        span.addEventListener("click", () => {
            copyToClipboard(span.textContent);
            alert(`Copied ${span.textContent} to clipboard!`);
        });
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

window.addEventListener("load", displayEmojee());

search_field.addEventListener("keyup", (e)=>{
    let value = e.target.value;
    displayEmojee(value)
})

button.forEach((element,index)=>{
    element.addEventListener("click",function(){
        console.log(element.value);
        displayEmojee(element.value)
    })
})