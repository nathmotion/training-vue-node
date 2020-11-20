// https://docs.cypress.io/api/introduction/api.html

describe('#App', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'Welcome to the Supa Dupa Task Listano sponsa no tekio de okari shimasu!')
  })
  it('Delete a task when you click on icon, remove to this tasks ', () => {
    cy.visit('http://localhost:8080/')
    const tasksListLength = cy.get('.task-items__task-item').length
    cy.get('.task-items__task-item')
      .eq(0)
      .get('.task-item__button-delete')
      .eq(0)
      .click()
      .then(() => {
        console.info(cy.get('.task-items__task-item'))
        console.info(tasksListLength)
        expect(cy.get('.task-items__task-item').length).to.eq(tasksListLength - 1)
      })
  })
})
