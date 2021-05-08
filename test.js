const calcStampDuty = require('./calculator');

describe('calcStampDuty', () => {

it ('to be a function', () => {
expect(calcStampDuty).toBeInstanceOf(Function);
  });

it ("price can't be a negative number", () => {
expect(calcStampDuty(-5)).toBe("price has to be a positive number");
});

it ("price can't be a string", () => {
expect(calcStampDuty("hello")).toBe("price has to be a number");
});

it('Amounts under £125,001 have 0 SDLT', () => {
expect(calcStampDuty(1)).toBe(0); //'1 should give 0 SDLT'
expect(calcStampDuty(75000)).toBe(0); //'7500 should give 0 SDLT'
expect(calcStampDuty(125000)).toBe(0); //'125000 should give 0 SDLT'
  });

it('Amounts between £125,001 and £250k (allowing for rounding)', () => {
expect(calcStampDuty(125001)).toBe(0); // '125,001 should give 0 SDLT'
expect(calcStampDuty(125049)).toBe(0); //'125,049 should give 0 SDLT'
expect(calcStampDuty(125050)).toBe(1); //'125,050 should give 1 SDLT'
expect(calcStampDuty(250000)).toBe(2500); //'250,000 should give 2,500 SDLT'
  });


it('Amounts between £250,001 and £925k', () => {
expect(calcStampDuty(250001)).toBe(2500); //'£250,001 should give £2500 SDLT'
expect(calcStampDuty(925000)).toBe(36250); //'£925,000 should give £36,250 SDLT'
  });

  
it('Amounts between £925,001 and £1.5m', () => {
    expect(calcStampDuty(925001)).toBe(36250); //'£925,001 should give £36,250 SDLT');
    expect(calcStampDuty(1500000)).toBe(93750); //'£1,500,000 should give £93,750 SDLT');
  });
  
it('Amounts over £1.5m', () => {
    expect(calcStampDuty(1500001)).toBe(93750); //'£1500001 should give £93,750 SDLT'
    expect(calcStampDuty(99000000)).toBe(11793750); //'£99,000,000 should give £11,793,750 SDLT'
  });
  });
  