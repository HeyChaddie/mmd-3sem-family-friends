"use server";

const resSubmitAction = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const productName = formData.get("productname");
  if (!productName) {
    return {
      success: false,
      message: "Feltet må ikke være tomt",
    };
  }
  return {
    success: true,
    message: "opskriften er oprettet",
  };
};

export default resSubmitAction;
