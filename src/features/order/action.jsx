import { createOrder, updateOrder } from "../../services/apiRestaurant";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (Object.keys(errors).length > 0) return { errors };

  const res = await createOrder(order);

  // Return a success flag along with the redirect URL
  return { success: true, redirectTo: `/order/${res.id}` };
}

export async function updateOrderAction({ request, params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  console.log(params);
  return null;
}
