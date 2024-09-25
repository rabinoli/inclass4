// Function to determine the grade based on the score
function determineGrade() {
    // Prompt the user to enter a score
    let input = prompt("Enter your score:");

    // Convert the input to a number
    let score = Number(input);

    // Check if the input is a valid number
    if (isNaN(score) || score < 0 || score > 100) {
        console.log("Please enter a valid score between 0 and 100.");
    } else {
        // Determine the grade based on the score
        let grade;
        if (score >= 80) {
            grade = 'A';
        } else if (score >= 70) {
            grade = 'B';
        } else if (score >= 60) {
            grade = 'C';
        } else if (score >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        console.log(`Your score is ${score} and your grade is ${grade}.`);
    }
}

// Add an event listener to the button
document.getElementById("gradeButton").addEventListener("click", determineGrade);
