import React, { useState } from 'react';
import CompanyForm from './components/CompanyForm';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import ExportButtons from './components/ExportButtons';
import { calculateTotals } from './utils/calculations';
import { CompanyData, InvoiceData } from './type';
import Footers from './pages/Footers';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: '',
    address: '',
    logo: null,
    signature: null,
    gst: '',
    currency: 'INR',
  });

  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: 'INV-001',
    issueDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    clientName: '',
    clientAddress: '',
    items: [{ description: '', quantity: 1, unitPrice: 0, taxRate: 0 }],
    notes: '',
  });

  const totals = calculateTotals(invoiceData.items);

  return (
<BrowserRouter basename='/'>
    <div className="h-full w-full pt-2" >
      <div className='flex items-center justify-between'>
        <h2 className='text-xl md:text-3xl font-extrabold font-serif text-center my-4 pl-4 md:pl-32 '>Free Invoice Generator</h2>
        <div className='p-1 md:pr-12 '>
        <ExportButtons 
      
            companyData={companyData} 
            invoiceData={invoiceData} 
            totals={totals} 
          />
          </div>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">
        <div>
          <CompanyForm onChange={setCompanyData} />
          <InvoiceForm onChange={setInvoiceData} invoiceData={invoiceData} />
          
        </div>
        <div>
          <InvoicePreview 
            companyData={companyData} 
            invoiceData={invoiceData} 
            totals={totals} 
          />
        </div>
      </div>
      <Footers />
    </div>
  </BrowserRouter>
    );
};

export default App;