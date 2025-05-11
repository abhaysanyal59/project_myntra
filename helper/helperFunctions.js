export const printOnConsole = (message) => {
  if (process.env.ENV === "development") {
    console.log(message);
    
  }
};
