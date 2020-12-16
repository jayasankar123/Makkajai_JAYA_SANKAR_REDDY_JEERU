function Receipt(str) {
  const listItem = str;
  const cart = listItem.split("\n");
  const ItemsArr = [];
  for (let index in cart) {
    if (index === "0" || cart[index] === "") {
      continue;
    }
    ItemsArr.push(new Item(cart[index]));
  }
  this.salesTaxandTotal = (str) => {
    let arr = [0, 0];
    for (let item of ItemsArr) {
      arr[0] += item.tax();
      arr[1] += item.finalCost() * item.numberOfItems();
    }
    return arr;
  };
  this.finalReceipt = () => {
    let value = "";
    for (let item of ItemsArr) {
      value += item.value();
    }
    let [salesTax, total] = this.salesTaxandTotal(str);
    value += `Sales Taxes: ${salesTax.toFixed(2)}\nTotal: ${total.toFixed(
      2
    )}\n\n`;

    return value;
  };
}
