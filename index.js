// code your solution here
const superbowlWin = (record) => {
    let myResult = record.find((item) => item.result === "W");
    if (myResult) {
        return myResult.year;
    } else {
        return undefined;
    }
}