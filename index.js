function superbowlWin(record) {
   const winRecord = record.find(winYear => winYear.result === "W")
   return winRecord ? winRecord.year : undefined;
}