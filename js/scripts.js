function Phone(brand, price, color, screensize) {
    this.brand = brand;
	this.price = price;
	this.color = color;
    this.screensize = screensize;
    
}
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "and screen size is " + this.screensize + ".");
}
var iPhone6S = new Phone("Apple", 2250, "silver", "5.5");
var samsungS6 = new Phone("Samsung", 1900, "black", "6.0");
var huaweiP10= new Phone("Huawei", 1500, "gold", "5.2");
iPhone6S.printInfo();
samsungS6.printInfo();
huaweiP10.printInfo();
