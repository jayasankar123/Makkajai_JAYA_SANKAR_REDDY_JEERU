function Item(str) {
  const exemptGoods = "books chocolates pills tablets syrup";
  const IMPORTED = "imported";
  const listItem = str;
  const arr = listItem.split("\n");
  function isImported(str) {
    return str.includes(IMPORTED);
  }
  function isSalesTaxNeeded(str1) {
    let str = str1.toLowerCase();
    let ofIndex = str.indexOf("of");
    let atIndex = str.lastIndexOf("at");
    if (ofIndex === -1) {
      ofIndex = 0;
    }
    str = str.substring(ofIndex + 2, atIndex).split(" ");

    for (let i in str) {
      if (str[i] === "") {
        continue;
      }
      if (exemptGoods.includes(str[i])) {
        return false;
      }
    }
    return true;
  }
  function calculateRateOfTax(str) {
    let rate = 0;
    if (isImported(str)) {
      rate = 5;
    }
    if (isSalesTaxNeeded(str)) {
      rate += 10;
    }
    return rate;
  }
  this.numberOfItems = () => {
    let splitArr = str.split(" ");
    return Number(splitArr[0]);
  };
  function originalCost(splitArr) {
    return Number(splitArr[splitArr.length - 1]);
  }
  function toNearestPoint5(tax) {
    let lastDigit = (tax * 100) % 10;
    if (lastDigit > 5) {
      if (lastDigit - 5 > 2) {
        tax = tax + (10 - lastDigit) / 100;
      } else {
        tax = tax - (lastDigit - 5) / 100;
      }
    } else if (lastDigit < 5 && lastDigit !== 0) {
      if (5 - lastDigit > 2) {
        tax = tax - lastDigit / 100;
      } else {
        tax = tax + (5 - lastDigit) / 100;
      }
    }

    return parseFloat(tax.toFixed(2), 10);
  }
  this.tax = () => {
    let splitArr = str.split(" ");
    //let numberOfItems = this.numberOfItems(splitArr[0]);
    let cost = originalCost(splitArr);
    let rate = calculateRateOfTax(str);
    let tax = parseFloat(((cost * rate) / 100).toFixed(2), 10);
    tax = toNearestPoint5(tax);
    return tax;
  };
  this.finalCost = () => {
    let cost = originalCost(str.split(" "));
    let tax = this.tax(str);
    return cost + tax;
  };
  this.value = () => {
    let splitArr = str.split(" ");
    splitArr[splitArr.length - 1] = this.finalCost().toFixed(2);
    splitArr[splitArr.length - 2] = ":";
    //splitArr.replace("at", ":");
    return splitArr.join(" ") + "\n";
  };
}
