import { InvoiceItem, Totals } from '../type';

export const calculateTotals = (items: InvoiceItem[]): Totals => {
  let subtotal = 0;
  let tax = 0;
  let discount = 0;
  items.forEach(item => {
    const amount = item.quantity * item.unitPrice;
    subtotal += amount;
    tax += amount * (item.taxRate / 100);
    discount += amount * (discount / 100);
  });
  return {
    subtotal: subtotal.toFixed(2),
    taxAmount: tax.toFixed(2),
    discount: discount.toFixed(2),
    total: (subtotal + tax).toFixed(2)
  };
};