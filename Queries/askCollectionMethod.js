export const askCollectionMethod = (order) => ({
  type: "list",
  name: "orderStatus",
  message: `What collection method would you like for ${order}`,
  choices: [
    { name: "Finger prick", value: 1 },
    { name: "Home phlebotomy", value: 2 },
    { name: "Phlebotomy kit", value: 3 },
    { name: "Partner clinic", value: 5 },
  ],
});
