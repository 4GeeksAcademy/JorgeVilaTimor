
//--TEST  DOLLARS To YENS
test("One dollar should be 157,53 yens", function() {
    // Import function from  app.js
    const { fromDollarToYen } = require('./app.js');
    // i am using the function here
    const DollarToYen = fromDollarToYen(4);

    // if 1 dollar is 157.53 yens, so 4 dollars should be  (4 * 157.53)
    const expected = 4 * 157.53;

    // Here i check the comparation.)
    expect(fromDollarToYen(4)).toBe(630.12);  
});

////--TEST   EUROS To DOLLARS
test("One euro should be 1.07 dollars", function() {
      // Import function from  app.js
    const { fromEuroToDollar } = require('./app.js');
   // i am using the function here
    const EuroToDollar = fromEuroToDollar(3.5);

    // if 1 euro is 1.07 dollars, so 3.5 dollars should be  (3.5 * 1.07)
    const expected = 3.5 * 1.07;

   // Here i check the comparation.)
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
});

// --TEST   YENS To POUNDS
test("One yen  should be 0.0052 Pounds", function() {
    // i am using the function here
    const { fromYenToPound } = require('./app.js');
    // i am using the function here
    const YenToPound = fromYenToPound(3);

     // if 1 Yen is 0.0052 Pounds, so 3 YENS should be  (3 * 0.0052)
    const expected = 3 * 0.0052;

   // Here i check the comparation.)
    expect(fromYenToPound(3)).toBe(0.0156); 
});