//const {Receipt} = require("./receipt");

console.log("before");

function Details(str) {
  console.log("test");
  let listItems = str;
  this.receiptDetails = [];
  for (let item of listItems) {
    let salesTax = 0;
    let total = 0;
    if (item === "") {
      continue;
    }
    this.receiptDetails.push(new Receipt(item));
  }
}

//module.exports = ReceiptDetails;
