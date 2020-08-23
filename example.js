const readline = require('readline');

// Destructuring!

// Objective; provide you with the knowledge to be able to easily use destructuring to improve your efficiency.

// Introduced with JS ES6

// Destructuring allows us to 'unpack' values contained in an object (or Array!) into individual variables.

// Consider the following objects;
const cohorts = {
    manaia: {
        staff: {
            head: "JV",
            facilitators: ["Lache", "Joseph"]
        }
    },
    otherRandomCohort: {
        staff: {
            head: "Mickey Mouse",
            facilitators: ["Donald Duck", "Goofy"]
        }
    }
}

// Normally to access the staff value of the manaia cohort we would do this;

const es5Head = cohorts.manaia.staff.head

// Then to access the facilitators we would do this;

const es5Facilitators = cohorts.manaia.staff.facilitators

// Using destructuring, you can reduce 2 similiar lines of code into 1 line.

const { head, facilitators } = cohorts.manaia.staff

// You can also map your properties into different variables! WOWSERS!

let { head: a, facilitators: b} = cohorts.manaia.staff

// You can use desctructuing to swap variables!
let [i, j] = b;

// [j, i] = [i, j];

// Neat, huh!

// -------------------------------------------------------------------------------- //
printAns()

async function printAns(){
    await askQuestion('Welcome to Destructuring!')
    await askQuestion('es5Head: ' + es5Head);
    await askQuestion('es5Facilitators: ' + es5Facilitators);
    await askQuestion('head: ' + head);
    await askQuestion('facilitators: ' + facilitators);
    await askQuestion('a: ' + a);
    await askQuestion('b: ' + b);
    await askQuestion('i: ' + i);
    await askQuestion('j: ' + j);
    await askQuestion("Right way around i: " + i + ' j: ' + j);
    [j, i] = [i, j];
    await askQuestion('j: ' + j);
    await askQuestion('i: ' + i);
    await askQuestion('Tada! i: ' + i + '  j: ' +  j + ' swapped!');
    await askQuestion('Thankyou! Exiting....')
    await askQuestion(process.exit())

}

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}