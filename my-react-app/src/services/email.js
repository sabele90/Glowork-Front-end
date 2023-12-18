import emailjs from "@emailjs/browser";

export const emailSubscriptionCompany = async (companyName, offerTitle) => {
  try {
    await emailjs.send(
      "service_3sp1b69",
      "template_2zs2wva",
      { companyName, offerTitle },
      "Gi3ERBs2f3oatL4QD"
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const emailSubscriptionUser = async (companyName) => {
  try {
    await emailjs.send(
      "service_hectvqc",
      "template_26051mj",
      { companyName },
      "rAgCWGBE4n1uYpxtr"
    );
  } catch (error) {
    throw new Error(error);
  }
};
