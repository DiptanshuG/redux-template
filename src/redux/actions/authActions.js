export const login = (credentials) => async (dispatch) => {
    dispatch({ type: 'AUTH_LOADING' });
    try {
      // Perform login operation (e.g., API call)
      const user = {}; // Replace with actual user data
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  };
  
  export const signup = (credentials) => async (dispatch) => {
    dispatch({ type: 'AUTH_LOADING' });
    try {
      // Perform signup operation (e.g., API call)
      const user = {}; // Replace with actual user data
      dispatch({ type: 'SIGNUP_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
    }
  };
  
  export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
  