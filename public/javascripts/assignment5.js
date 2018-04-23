/*
The Curl Up and Dye Beauty Salon maintains a master file that contains a record for each of its clients. Fields in the
master file include the client's ID number, ~first~ name, ~last~ name, and total ~amount spent~ this year. Every week, a
transaction file is produced. It contains a customer's ID number, the ~service received~ (for example, Manicure), and
the ~price paid~. Each file is sorted in ID number order. Write a program that matches the master and transaction file
records and updates the total paid for each client by adding the current week's price paid to the ~cumulative total~.
Not all clients purchase services each week. The output is the updated master file and an error report that lists
any transaction records for which no master record exists. Output a coupon for a free haircut each time a client
exceeds $750 in services. The coupon, which contains the client's name and an appropriate congratulatory message,
is output during the execution of the update program when a client total surpasses $750.

~1st name
~last name
~id#
~service
~service$
~
~

*/

"use strict";
const PROMPT = require (`readline-sync`);

let
let humanOne = [], humanTwo = [], humanThree = [];

function main() {

}

main();

function newHumanOne {
    for (let i = 0; i < 0; i++) {
        humanOne[i] = [];
        console.log(`\nhumanOne ${i + 1}:`);
        while (! humanOne[i][0] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][0])) {
            humanOne[i][0] = PROMPT.question(`What is your First Name?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][0])) {
                console.log(`${humanOne[i][0]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][1] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][1])) {
            humanOne[i][1] = PROMPT.question(`What is your Last Name?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][1])) {
                console.log(`${humanOne[i][1]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][2] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][2])) {
            humanOne[i][2] = PROMPT.question(`What is your ID Number?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][2])) {
                console.log(`${humanOne[i][2]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][3] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][3])) {
            humanOne[i][3] = PROMPT.question(`What service did you recieve?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][3])) {
                console.log(`${humanOne[i][3]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][4] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][4])) {
            humanOne[i][4] = PROMPT.question(`How much money did you pay for your service?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][4])) {
                console.log(`${humanOne[i][4]} is invalid. Please try again.`);
            }
        }

    }
}

function newHumanTwo {
    for (let i = 0; i < 0; i++) {
        humanOne[i] = [];
        console.log(`\nhumanOne ${i + 1}:`);
        while (! humanOne[i][0] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][0])) {
            humanOne[i][0] = PROMPT.question(`What is your First Name?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][0])) {
                console.log(`${humanOne[i][0]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][1] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][1])) {
            humanOne[i][1] = PROMPT.question(`What is your Last Name?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][1])) {
                console.log(`${humanOne[i][1]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][2] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][2])) {
            humanOne[i][2] = PROMPT.question(`What is your ID Number?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][2])) {
                console.log(`${humanOne[i][2]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][3] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][3])) {
            humanOne[i][3] = PROMPT.question(`What service did you recieve?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][3])) {
                console.log(`${humanOne[i][3]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][4] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][4])) {
            humanOne[i][4] = PROMPT.question(`How much money did you pay for your service?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][4])) {
                console.log(`${humanOne[i][4]} is invalid. Please try again.`);
            }
        }

}

function newHumanThree {
    for (let i = 0; i < 0; i++) {
        humanOne[i] = [];
        console.log(`\nhumanOne ${i + 1}:`);
        while (! humanOne[i][0] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][0])) {
            humanOne[i][0] = PROMPT.question(`What is your First Name?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][0])) {
                console.log(`${humanOne[i][0]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][1] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][1])) {
            humanOne[i][1] = PROMPT.question(`What is your Last Name?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][1])) {
                console.log(`${humanOne[i][1]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][2] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][2])) {
            humanOne[i][2] = PROMPT.question(`What is your ID Number?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][2])) {
                console.log(`${humanOne[i][2]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][3] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][3])) {
            humanOne[i][3] = PROMPT.question(`What service did you recieve?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][3])) {
                console.log(`${humanOne[i][3]} is invalid. Please try again.`);
            }
        }
        while (! humanOne[i][4] || !/[a-zA-Z -]{1,30}$/.test(humanOne[i][4])) {
            humanOne[i][4] = PROMPT.question(`How much money did you pay for your service?:`);
            if (! /^[a-zA-Z -]{1,30}$/.test(humanOne[i][4])) {
                console.log(`${humanOne[i][4]} is invalid. Please try again.`);
            }
        }

}