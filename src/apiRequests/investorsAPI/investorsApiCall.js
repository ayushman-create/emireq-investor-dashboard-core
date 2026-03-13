import { hideLoader, showLoader } from "../../redux/reducers/loaderSlice";
import { BASE_URL } from "../../services/endPoints";
import { investorToken } from "../../utils/utils";
import { dispatch } from "../../redux/store";

async function postData(url, payload, isToken) {
  try {
    dispatch(showLoader()); // ✅ start loader

    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: isToken
        ? {
            "Content-Type": "application/json",
            Authorization: `Token ${investorToken}`,
          }
        : {
            "Content-Type": "application/json",
          },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    dispatch(hideLoader()); // ✅ stop loader ALWAYS
  }
}

const getData = async (url) => {
  try {
    dispatch(showLoader());

    const response = await fetch(BASE_URL + url, {
      headers: {
        Authorization: `Token ${investorToken}`,
      },
    });

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    dispatch(hideLoader());
  }
};

export const registerInvestor = (url, payload, isToken) =>
  postData(url, payload, isToken);

export const loginInvestor = (url, payload) =>
  postData(url, payload);

export const getPreview = (url, payload, isToken) =>
  postData(url, payload, isToken);

export const investorOnboarding = (url, payload, isToken) =>
  postData(url, payload, isToken);

export const getInvestorProfileData = (url) =>
  getData(url);