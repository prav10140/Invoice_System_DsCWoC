import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CompanyData } from '../type';

interface CompanyFormProps {
  onChange: (data: CompanyData) => void;
}

const CompanyForm: React.FC<CompanyFormProps> = ({ onChange }) => {
  const { register, handleSubmit } = useForm<CompanyData>();

  const onSubmit: SubmitHandler<CompanyData> = (data) => {
    const updatedData: CompanyData = { ...data, logo: '', signature: '' };

    const logoFile = (data.logo as unknown as FileList)?.[0];
    if (logoFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatedData.logo = reader.result as string;
        onChange(updatedData);
      };
      reader.readAsDataURL(logoFile);
    }

    const signatureFile = (data.signature as unknown as FileList)?.[0];
    if (signatureFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatedData.signature = reader.result as string;
        onChange(updatedData);
      };
      reader.readAsDataURL(signatureFile);
    }

    onChange(updatedData);
  };

  return (
    <div className='pl-1 w-full pt-6'>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
        <h2 className="text-xl mb-6 font-bold text-blue-400 font-serif ">Company Details</h2>
        <input {...register('name')} placeholder="Company Name..." className="block mb-2 p-2 border rounded-sm w-2/3 font-medium capitalize" />
        <input {...register('address')} placeholder="Company Address" className="block mb-2 p-2 border rounded-sm w-2/3 font-medium capitalize" />
        <input {...register('gst')} placeholder="GST Number" className="block mb-2 p-2 border rounded-sm w-2/3 font-medium capitalize" />
        {/* <input {...register('website')} placeholder="https://website.org  " className="block mb-2 p-2 border" /> */}
        <div className='max-w-lg px-2 py-4'>

          <label htmlFor="" className='flex justify-between pl-3 items-center text-black/60 border border-dashed mb-2 p-2 rounded-xl'>Company Logo
            <input type="file" {...register('logo')} accept="image/*" className="block mb-2 justify-center bg-blue-500/20 p-2 rounded-xl pl-2 cursor-pointer" /></label>
          <label htmlFor="" className='flex justify-between pl-3 items-center text-black/60 border border-dashed mb-2 p-2 rounded-xl'>Signature
            <input type="file" {...register('signature')} accept="image/*" className="block mb-2  bg-blue-500/20 p-2 rounded-xl pl-2 cursor-pointer" /></label>
        </div>
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium hover:bg-blue-600 cursor-pointer">Save Company Details</button>
      </form>
    </div>
  );
};

export default CompanyForm;