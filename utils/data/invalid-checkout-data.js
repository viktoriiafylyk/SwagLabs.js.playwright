export const InvalidCheckoutData = {
    emptyFields: {
        firstName: '',
        lastName: '',
        postalCode: '',
        expectedError: 'Error: First Name is required'
    },
    emptyPostalCode: {
        firstName: 'Viktoriia',
        lastName: 'Fylyk',
        postalCode: '',
        expectedError: 'Error: Postal Code is required'
    },
    emptyLastName: {
        firstName: 'Viktoriia',
        lastName: '',
        postalCode: '123456',
        expectedError: 'Error: Last Name is required'
    },
    emptyFirstName: {
        firstName: '',
        lastName: 'Fylyk',
        postalCode: '123456',
        expectedError: 'Error: First Name is required'
    }
}