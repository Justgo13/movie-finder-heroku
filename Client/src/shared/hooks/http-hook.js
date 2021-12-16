import {useCallback, useState} from "react";

export const useHttpHook = () => {

  const [error, setError] = useState("");
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {

      try {
        const response = await fetch(url, {
          method,
          body,
          headers
        });

        const responseData = await response.json();
        if (Object.keys(responseData).length === 0) {
          setError("No movies found");
        }

        return responseData;
      } catch (err) {
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  return { error, clearError, sendRequest };
};
