export const InvalidLoginData = {
    wrongUsername: {
        username: 'wrong_user',
        password: 'secret_sauce',
        expectedError: 'Epic sadface: Username and password do not match any user in this service'
    },
    wrongPassword: {
        username: 'standard_user',
        password: 'wrong_password',
        expectedError: 'Epic sadface: Username and password do not match any user in this service'
    },
    emptyFields: {
        username: '',
        password: '',
        expectedError: 'Epic sadface: Username is required'
    },
    missingPassword: {
        username: 'standard_user',
        password: '',
        expectedError: 'Epic sadface: Password is required'
    },
    missingUsername: {
        username: '',
        password: 'secret_sauce',
        expectedError: 'Epic sadface: Username is required'
    }
};
