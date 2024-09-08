function getShippingCost(country) {
    let price;
   const message = `Shipping to ${country} will cost ${price} credits`;
  switch (country) {
    case "China":
      price = 100;
      return message;           //КРАЩЕ ТАК ?
    case "Chile":
      price = 250;
      return message;  
      case "Australia":
        price = 170;
        return `Shipping to ${country} will cost ${price} credits`;  // ЧИ ТАК?
        case "Jamaica":
            price = 120;
            return `Shipping to ${country} will cost ${price} credits`;
    default:
        return "Sorry, there is no delivery to your country";
        }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
