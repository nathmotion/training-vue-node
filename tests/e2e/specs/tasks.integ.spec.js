// https://docs.cypress.io/api/introduction/api.html

describe('#App', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8080/')
    cy.contains('h1', 'Welcome to the Supa Dupa Task Listano sponsa no tekio de okari shimasu!')
  })
  it('Delete a task when you click on icon, remove to this tasks ', () => {
    cy.visit('http://localhost:8080/')
    const tasksList = cy.get('.task-items__task-item')
    const firstElem = cy.get('.task-items__task-item').first().get('.task-item__button-delete').first()
    firstElem.click()
    console.info(' test :', tasksList)
    cy.get('.task-items__task-item').should('have.length', tasksList.length - 1)
  })
})
