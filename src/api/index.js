const BASE_URL = import.meta.env.VITE_APP_BASE_URL || "http://localhost:5000";

const fetchClient = async (endpoint, options = {}) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "API request failed");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch API error:", error);
    throw error;
  }
};

export default fetchClient;
