describe("Testing pizza form inputs", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })

    it("add text to inputs and submits form", () => {
        cy.get("[data-cy=name").type("Angelyn Liem").should("have.value", "Angelyn Liem")
        cy.get("[data-cy=size]")
        .select("Small") 
        .should("have.value", "Small")
        cy.get('[type="checkbox"]').check()
        cy.get("[data-cy=specialInstructions").type("Extra napkins please").should("have.value", "Extra napkins please")
        cy.get("[data-cy=submit").click()
    })
})



