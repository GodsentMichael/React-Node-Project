import axios from "axios";
import { server } from "../../server";

// Define action types
export const loadUserRequest = "user/loadUserRequest";
export const loadUserSuccess = "user/loadUserSuccess";
export const loadUserFail = "user/loadUserFail";

// To load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: loadUserRequest,
    });
    const { data } = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    dispatch({
      type: loadUserSuccess,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: loadUserFail,
      payload: error.response.data.message,
    });
  }
};
