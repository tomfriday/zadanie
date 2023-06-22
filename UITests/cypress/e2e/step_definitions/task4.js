import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const customers = [
  { id: 1, name: 'Jan Testowy' },
  { id: 2, name: 'Paweł Testowy' },
  { id: 3, name: 'Wojtek Testowy' }
]

When('I send a GET request', () => {
  cy.request('/' + '/api/customers').then((response) => {
    Then('I receive a response with the code 200', () => {
      expect(response.status).to.eq(200)
    })
    And('the received list of customers is as expected', () => {
      expect(response.body).to.deep.eq(customers)
    })
  })
})
When('I send a GET query on customer with id 1', () => {
  cy.request('/' + '/api/customers/1').then((response) => {
    Then('I receive a response with the code 200', () => {
      expect(response.status).to.eq(200)
    })
    And('the received customer details are as expected', () => {
      expect(response.body).to.deep.eq(customers[0])
    })
  })
})
When('I send a POST query with a new customer', () => {
  const newCustomer = { name: 'Kasia Testowa' }
  cy.request('POST', '/' + '/api/customers', newCustomer).then((response) => {
    Then('I receive a response with code 200', () => {
      expect(response.status).to.eq(200)
    })
    And('I receive success information', () => {
      expect(response.body).to.eq('Dodano klienta')
    })
  })
})

When('I send a PUT query with the new customer data', () => {
  const updatedCustomer = { name: 'Janina Testowa' }
  cy.request('PUT', '/' + '/api/customers/1', updatedCustomer).then(
    (response) => {
      Then('I receive a response with the code 200', () => {
        expect(response.status).to.eq(200)
      })
      And('I receive success information', () => {
        expect(response.body).to.eq(updatedCustomer.name)
      })
    }
  )
})
When('I send a DELETE query on customer with id 1', () => {
  cy.request('DELETE', '/' + '/api/customers/1').then((response) => {
    Then('I receive a response with the code 204', () => {
      expect(response.status).to.eq(204)
    })
  })
})
