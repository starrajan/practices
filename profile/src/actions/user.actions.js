

export const userActions = {
   register
};


function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    console.log(user);
                }
               
            );
    };