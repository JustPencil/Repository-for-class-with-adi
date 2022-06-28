let votingPoll = document.querySelector(".votingPoll");
let voteUP = document.querySelector(".voteUp");
let voteDOWN= document.querySelector(".voteDown");

let theVote = 0;

updateVote()

voteUP.addEventListener("click",() => {
    if (theVote < 1) {
        theVote++;
    }
    updateVote()
    //theVote = theVote + 1;
});

voteDOWN.addEventListener("click", () => {
    if (theVote > -1){
        theVote--;
    }
    updateVote()
    //theVote = theVote - 1;
});

function updateVote() {
    votingPoll.innerHTML = theVote;
}