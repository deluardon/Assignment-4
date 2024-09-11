function calculateTax(income, expenses) {
    const result = (income - expenses);
    const taskAmmount = result * .20;
    if (expenses > income) {
        return "Invalid Input";
    }
    else if (expenses < 0) {
        return "Invalid Input";
    }
    return taskAmmount;
}


function sendNotification(email) {
    if (email.split("@")) {
        let [username, domain] = email.split("@");
        const domainName = ["gmail.com", "yahoo.com", "outlook.com"];
        if (domainName.includes(domain)) {
            return `${username},sent you an email from,${domain}`;
        }
        else {
            return "Invalid Email";
        }
    }

}

function checkDigitsInName(name) {
    const checkNumber = /\d/;
    if (checkNumber.test(name)) {
        return true;
    }
    else if (typeof name !== "string") {
        return "Invalid Input";
    }
    else {
        return false;
    }
}

function calculateFinalScore(obj) {
    const { name, testScore, schoolGrade, isFFamily } = obj;
    if (typeof name === "string" && typeof testScore === "number" && typeof schoolGrade === "number" && isFFamily !== false) {
            return true
    }

    else if (typeof name !== "string") {
        return "Invalid Input";
    }
    else if (testScore<15) {
        return true;
    }
    else {
        return false
    }


}


function  waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }
    const finishedInterviews = waitingTimes.length;

    const average = finishedInterviews > 0 ? Math.round(waitingTimes.reduce((time, number) => time + number, 0) / finishedInterviews) : 0;


    const mantime = serialNumber - 1;


    const remainingInterviews = Math.max(0, mantime - finishedInterviews);
    const waitingTime = remainingInterviews * average;

    return waitingTime;
}


