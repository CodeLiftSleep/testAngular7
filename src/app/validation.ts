export const validationMessages = {
    firstName: [
        {type: 'required', message: 'First Name is required'},
        {type: 'minlength', message: 'First name cannot be less than 2 characters'},
        {type: 'maxlength', message: 'First name cannot be more than 30 characters'},
        {type: 'pattern', message: 'First Name can only contain letters, spaces, dashes and apostrophes'}
    ],
    lastName: [
        {type: 'required', message: 'Last Name is required'},
        {type: 'minlength', message: 'Last name cannot be less than 2 characters'},
        {type: 'maxlength', message: 'Last name cannot be more than 30 characters'},
        {type: 'pattern', message: 'Last Name can only contain letters, spaces, dashes and apostrophes'}
    ]
};
