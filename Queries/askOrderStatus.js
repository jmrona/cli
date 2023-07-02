export const askOrderStatus = (order) => ({
  type: "list",
  name: "orderStatus",
  message: `What order status would you like for ${order}`,
  choices: [
    { name: "Dispatching", value: 4 },
    { name: "On its way at lab", value: 12 },
    { name: "Reviewing", value: 10 },
    { name: "Cancelled", value: 5 },
  ],
});
