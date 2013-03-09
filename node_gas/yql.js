function getCurrentData() {
  var scope_hack = this;
  this.price = 'not a price';
  this.write_price = function(price) {
    console.log('frack off'+price);
  }
  this.getPrice = function() {
    var YQL = require("yql"); new YQL.exec('select * from html where url="http://www.irac.pe.ca/petrol/currentprices.asp" and xpath="//html/body/div/center/table/tr/td/div[2]/center/table/tr/td/table/tr[11]/td[2]/font"', function(response) {
      scope_hack.write_price(response['query']['results']['font']['content'].trim());
    });
     
  }
   
   this.getDate = function() {
     var YQL = require("yql");
     new YQL.exec('select * from html where url="http://www.irac.pe.ca/petrol/currentprices.asp" and xpath="/html/body/div/center/table/tr/td/div/center/table/tr/td[2]/table/tr/td/p/span/strong/font[2]"', function(response) {
       console.log(response['query']['results']['font']['content'].trim().substring(11));
     });
   }
    
}
 
 var current_data = new getCurrentData();
 current_data.getPrice();
 console.log(current_data.price);
