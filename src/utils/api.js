export const getAIResponse = async (message) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ response: `AI Response to: ${message}` });
      }, 1000);
    });
  };
  