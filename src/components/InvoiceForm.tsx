import React from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { InvoiceData } from '../type';
import { Trash } from 'lucide-react';

interface InvoiceFormProps {
  onChange: (data: InvoiceData) => void;
  invoiceData: InvoiceData;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onChange, invoiceData }) => {
  const { register, control, handleSubmit } = useForm<InvoiceData>({ defaultValues: invoiceData });
  const { fields, append, remove } = useFieldArray({ control, name: 'items' });

  const onSubmit: SubmitHandler<InvoiceData> = (data: InvoiceData) => onChange(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
      <h2 className="text-xl mb-6 font-bold text-blue-400 font-serif ">Invoice Details</h2>
      <input {...register('invoiceNumber')} placeholder="Invoice Number" className="block mb-2 p-2 border rounded-sm w-2/3 font-medium uppercase" />
      <input type="date" {...register('issueDate')} className="block mb-2 p-2 border rounded-sm w-2/3 font-medium" />
      <input type="date" {...register('dueDate')} className="block mb-2 p-2 border rounded-sm w-2/3 font-medium" />
      <input {...register('clientName')} placeholder="Client Name" className="block mb-2 p-2 border rounded-sm w-2/3 font-medium capitalize" />
      <input {...register('clientAddress')} placeholder="Client Address" className="block mb-2 p-2 border rounded-sm w-2/3 font-medium capitalize" />
      {/* <input {...register('notes')} placeholder="NOTES" className="block mb-2 p-2 border" />
      <input {...register('terms')} placeholder="TERMS" className="block mb-2 p-2 border" /> */}

      <h3 className="mt-6 pt-2 border-t border-gray-300 text-xl mb-6 font-bold text-blue-400 font-serif">Add Items Detail's :</h3>
      {fields.map((item, index) => (
        <div key={item.id} className="flex flex-row mb-4 items-center gap-2">
          <input {...register(`items.${index}.description`)} placeholder="Add Description" className="mb-2 p-2 border rounded-sm font-medium w-50 capitalize mr-2 flex-1" />
          <input type="number" {...register(`items.${index}.quantity`)} placeholder="Qty" className="mb-2 p-2 border rounded-sm font-medium capitalize mr-2 flex-1 w-30" />
          <input type="number" {...register(`items.${index}.unitPrice`)} placeholder="Price" className="mb-2 p-2 border rounded-sm font-medium capitalize mr-2 flex-1 w-24" />
          <input type="number" {...register(`items.${index}.taxRate`)} placeholder="Tax %" className="mb-2 p-2 border rounded-sm font-medium capitalize mr-2 flex-1 w-20" />
          {/* <input type="number" {...register(`items.${index}.amount`)} placeholder="Amount" className="p-2 border mr-2 w-24" /> */}
          <button type="button" onClick={() => remove(index)} className="flex bg-red-500 py-2 px-3 items-center mb-2 p-2 rounded-sm font-medium text-white cursor-pointer">
          Remove<Trash className='w-6 h-6'/></button>
        </div>
      ))}
      <button type="button" onClick={() => append(invoiceData.items[0] || { description: '', quantity: '', unitPrice: '', taxRate:'', amount: ''})} className="bg-violet-400 text-white p-3 mb-4 w-fit md:w-1/3 rounded-xl font-semibold justify-center items-center text-center cursor-pointer hover:bg-violet-500 text-lg">Add Items More</button>

      <textarea {...register('notes')} placeholder="NOTES eg: Thank you for your business" className="mb-2 p-2 border rounded-sm font-light mr-2 flex-1 w-full" />
      <button type="submit" className="bg-blue-500 text-white p-3 mb-2 w-fit md:w-1/3 rounded-xl font-bold justify-center items-center text-center cursor-pointer hover:bg-blue-600">Updated Invoice</button>
    </form>
  );
};

export default InvoiceForm;