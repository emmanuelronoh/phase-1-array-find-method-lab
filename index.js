// code your solution here
// helpers.js

function superbowlWin(record) {
    // Search for the first entry where result is "W"
    const winningYear = record.find(entry => entry.result === "W");
    
    // If found, return the year
    // If not found, return undefined
    return winningYear ? winningYear.year : undefined;
  }
  
  export default superbowlWin;