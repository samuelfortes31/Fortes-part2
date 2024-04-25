/*
Step1:prompt the user for their name
Step2: ask the user if they would like to play 3 or 6 holes of mini golf
Step3: initial variables for cumulative score and total par
Step4: the user for the number of putts for each hole
Step5: calculate the golfer's total for the round
Step 6: display the appropriate message based on the score
*/

let username= prompt("Please enter your name");

let numberHoles= Number(prompt("Would you like to play 3 or 6 holes of mini golf?"));
let totalputts = 0;
let coursePar =numberHoles * 3;

for (let i = 1; i <=numberHoles; i++ ) {
    let putts = Number(prompt(`Enter number of the putts for holes 6`));
    totalputts += putts;

}

let totalPar = totalputts - coursePar;

let message ;

if (totalPar > 0) {
    console.log (`Nice try, ${username}... Your total par was: ${totalPar}.`);

} else if ( totalPar <0 ) {
    console.log (`Great job,${username}! Your total par was ${totalPar}.`);


} else {
    console.log (`Good game, ${username}! Your total par was: 0.`);
}



