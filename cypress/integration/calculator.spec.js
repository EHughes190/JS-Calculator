describe("My first test", () => {
  it("Should visit our calculator", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
  });

  it("Should contain 0", () => {
    cy.get(".zero").contains("0");
  });
});

describe("Testing Addition Operator", () => {
  it("Should equal 10", () => {
    cy.get(".five").click();
    cy.get(".add").click();
    cy.get(".five").click();
    cy.get("#equals").click();
    cy.get(".operation").contains("5 + 5");
    cy.get(".result").contains("10");
  });
});

describe("Testing Minus Operator", () => {
  it("Should equal 30", () => {
    cy.get("#all-clear").click();
    cy.get(".four").click();
    cy.get(".five").click();
    cy.get(".minus").click();
    cy.get(".one").click();
    cy.get(".five").click();
    cy.get("#equals").click();
    cy.get(".operation").contains("45 - 15");
    cy.get(".result").contains("30");
  });
});

describe("Testing Multiply Operator", () => {
  it("Should equal 30", () => {
    cy.get("#all-clear").click();
    cy.get(".two").click();
    cy.get(".multiply").click();
    cy.get(".one").click();
    cy.get(".five").click();
    cy.get("#equals").click();
    cy.get(".operation").contains("2 × 15");
    cy.get(".result").contains("30");
  });
});

describe("Testing Divide Operator", () => {
  it("Should equal 2", () => {
    cy.get("#all-clear").click();
    cy.get(".one").click();
    cy.get(".zero").click();
    cy.get(".divide").click();
    cy.get(".two").click();
    cy.get("#equals").click();
    cy.get(".operation").contains("10 ÷ 2");
    cy.get(".result").contains("5");
  });
});

describe("Testing negative as a value", () => {
  it("Should equal -3", () => {
    cy.get("#all-clear").click();
    cy.get(".minus").click();
    cy.get(".six").click();
    cy.get(".divide").click();
    cy.get(".two").click();
    cy.get("#equals").click();
    cy.get(".operation").contains("- 6 ÷ 2");
    cy.get(".result").contains("-3");
  });
});

describe("Testing decimal points", () => {
  it("Should equal 10.75", () => {
    cy.get("#all-clear").click();
    cy.get(".zero").click();
    cy.get(".decimal-point").click();
    cy.get(".seven").click();
    cy.get(".five").click();
    cy.get(".add").click();
    cy.get(".one").click();
    cy.get(".zero").click();
    cy.get("#equals").click();
    cy.get(".operation").contains("0.75 + 10");
    cy.get(".result").contains("10.75");
  });
});
