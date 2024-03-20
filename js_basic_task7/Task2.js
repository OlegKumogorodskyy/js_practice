var book = new Object();
book.title = "Kobzar";
book.author = "Taras Shevchenko";
book.year = 1840;
book.getDescription = function () {
  console.log(
    this.title + " by " + this.author + ", published in " + this.year + "."
  );
};

var phone = new Object();
phone.brand = "Huawei";
phone.model = "P30 Pro";
phone.color = "Breathing Crystal";
phone.makeCall = function () {
  console.log("Making a call using the " + this.model);
};

book.getDescription();
phone.makeCall();
