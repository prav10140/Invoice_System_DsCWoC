import { InvoiceItem, Totals } from "../type";

// export const calculateAmount = (data: InvoiceData): string => {
//   let amountSum = 0;
//   data.items.forEach(item => {
//     const quantity = Number(item.quantity) || 0;
//     const unitPrice = Number(item.unitPrice) || 0;
//     const taxRate = Number(item.taxRate) || 0;
//     amountSum = (quantity * unitPrice * (1 + taxRate / 100)) .toFixed(2)
//   });
//   return amountSum
// }
export const calculateTotals = (items: InvoiceItem[]): Totals => {
  let subtotal = 0;
  let tax = 0;
  let discount = 0;
  items.forEach((item) => {
    const amount = Number(item.quantity) * Number(item.unitPrice);
    subtotal += amount;
    tax += amount * (Number(item.taxRate) / 100);
    discount += amount * (discount / 100);
  });
  return {
    subtotal: subtotal.toFixed(2),
    taxAmount: tax.toFixed(2),
    discount: discount.toFixed(2),
    total: (subtotal + tax).toFixed(2),
  };
};
