function handleClick() {
  //import Details from "./receiptDetails";
  let receipt = document.getElementById("receipt");
  let listItems = document.getElementById("shopping_list");
  receipt.value = "";
  listItems = listItems.value.split(/Input/gi);
  let details = new Details(listItems);
  let detailsArr = details.receiptDetails;
  for (let detail of detailsArr) {
    receipt.value += detail.finalReceipt();
  }
  //console.log("handleclcik");
}
