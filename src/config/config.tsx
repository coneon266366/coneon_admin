import axios from "axios";

// import { RenewToken } from "./RenewToken";

const baseURL = "http://localhost:3000";

const getData = async (url: any, customheaders: {}) => {
  try {
    const response = await axios.get(`${baseURL}/${url}`, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en",
        DeviceName: "Android",
        "Content-Type": "multipart/form-data",
        ...customheaders,
      },
    });

    const result = response.data;
    return result;
  } catch (error: any) {
    if (error.response.status === 401) {
      //   RenewToken();
      return getData(url, customheaders);
    } else {
      return false;
    }
  }
};

const postData: any = async (url: any, body: any, customheaders: {}) => {
  try {
    const response = await axios.post(`${baseURL}/${url}`, body, {
      headers: {
        ...customheaders,
      },
    });

    const result = await response.data;
    return result;
  } catch (error: any) {
    if (error.response.status === 400) {
      return error.response.data;
    } else if (error.response.status === 401) {
      //   RenewToken();
      return postData(url, body, customheaders);
    } else {
      return false;
    }
  }
};

const patchData: any = async (url: any, body: any, customheaders: {}) => {
  try {
    const response = await axios.patch(`${baseURL}/${url}`, body, {
      headers: {
        ...customheaders,
      },
    });
    const result = await response.data;
    return result;
  } catch (error: any) {
    if (error.response.status === 401) {
      //   RenewToken();
      return patchData(url, body, customheaders);
    } else {
      return false;
    }
  }
};

const deleteData: any = async (url: any, customheaders: {}) => {
  try {
    const response = await axios.delete(`${baseURL}/${url}`, {
      headers: {
        ...customheaders,
      },
    });
    const result = await response.data;
    return result;
  } catch (error: any) {
    if (error.response.status === 401) {
      //   RenewToken();
      return deleteData(url, customheaders);
    } else {
      return false;
    }
  }
};

export { baseURL, getData, postData, patchData, deleteData };
