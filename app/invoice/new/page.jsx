"use client";
import FormPreview from "@/app/components/FormPreview";
import FormTable from "@/app/components/FormTable";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import {
  AiOutlineCloudDownload,
  AiOutlineCloudUpload,
  AiOutlinePrinter,
} from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { MdPreview } from "react-icons/md";

export default function CreateInvoice() {
  const [logoUrl, setLogoUrl] = useState("");
  const [preview, setPreview] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    invoiceAuthor: "",
    companyAddress: "",
    companyCity: "",
    companyCountry: "",
    clientCompany: "",
    clientAddress: "",
    clientCity: "",
    clientCountry: "",
    invoiceNumber: "",
    invoiceDate: "",
    invoiceDueDate: "",
  });

  const [tableData, setTableData] = useState([]);
  const [combinedData,setCombinedData] = useState({})
  // console.log(formData);
  function handleInputChange(e) {
    const { name, value } = e.target;
    //    console.log(name,value);
    setFormData({
      ...formData,
      [name]: value,
    });
    //    console.log(formData)
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    //  console.log(formData);
    const allFormData = {
      ...formData,
      logoUrl,
      tableData,
    };
    setCombinedData(allFormData)
    console.log(allFormData);
    setPreview(!preview);
  }

  console.log(combinedData);

  function updateTableData(newTableData) {
    setTableData(newTableData);
  }
  // console.log(tableData);
  return (
    <div className="bg-slate-50 text-[14px] py-8 md:py-9 px-4 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            onClick={() => setPreview(!preview)}
            className="px-3 py-2 rounded-md border border-slate-400"
          >
            {preview ? (
              <div className="flex items-center space-x-1">
                <MdPreview />
                <span>Edit Form</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <MdPreview />
                <span>Preview</span>
              </div>
            )}
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-md border border-slate-400">
            <AiOutlinePrinter />
            <span>Print</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-md border border-slate-400">
            <AiOutlineCloudDownload />
            <span>Download</span>
          </button>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center space-x-1 px-3 py-2 rounded-md border border-violet-400 text-violet-700">
            <AiOutlineCloudUpload />
            <span>Save Online</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 rounded-md border border-violet-400 text-violet-700">
            <CiMail />
            <span>Send</span>
          </button>
        </div>
      </div>
      {/* Invoice Form */}
      {preview ? (
        <FormPreview data={combinedData} />
      ) : (
        <form
          onSubmit={handleFormSubmit}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 mx-auto"
        >
          {/* Image and Invoice Label */}
          <div className="flex justify-between items-center">
            {/* Image Upload */}

            <div className="flex items-center justify-center">
              {logoUrl ? (
                <CldImage
                  width={"240"}
                  height={"240"}
                  src={logoUrl}
                  alt="Invoice Logo"
                />
              ) : (
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <AiOutlineCloudUpload className="w-6 h-6 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <CldUploadButton
                        onUpload={(data) => {
                          console.log(data.info.secure_url);
                          setLogoUrl(data.info.secure_url);
                        }}
                        uploadPreset="InvoicePreset"
                        className=""
                      />
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      PNG or JPG(MAX. 240x240px)
                    </p>
                  </div>
                  {/* <input id="dropzone-file" type="file" className="hidden" /> */}
                </label>
              )}
            </div>

            <h2 className="text-4xl uppercase font-semibold">Invoice</h2>
          </div>
          {/* Company Details */}
          <div className="flex flex-col w-1/2 mt-6">
            <input
              type="text"
              name="companyName"
              className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
              placeholder="Your Company"
              onChange={handleInputChange}
              value={formData.companyName}
            />
            <input
              type="text"
              name="invoiceAuthor"
              className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
              placeholder="Your Name"
              onChange={handleInputChange}
              value={formData.invoiceAuthor}
            />
            <input
              type="text"
              name="companyAddress"
              className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
              placeholder="Company Address"
              onChange={handleInputChange}
              value={formData.companyAddress}
            />
            <input
              type="text"
              name="companyCity"
              className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
              placeholder="City,State zip"
              onChange={handleInputChange}
              value={formData.companyCity}
            />
            <input
              type="text"
              name="companyCountry"
              className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
              placeholder="Country"
              onChange={handleInputChange}
              value={formData.companyCountry}
            />
          </div>

          {/* Client Details */}
          <div className="flex justify-between gap-5">
            <div className="flex flex-col w-1/2 mt-6">
              <h2 className="mb-2 font-medium">Bill To:</h2>
              <input
                type="text"
                name="clientCompany"
                className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                placeholder="Your Client's Company"
                onChange={handleInputChange}
                value={formData.clientCompany}
              />
              <input
                type="text"
                name="clientAddress"
                className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                placeholder="Client's Address"
                onChange={handleInputChange}
                value={formData.clientAddress}
              />
              <input
                type="text"
                name="clientCity"
                className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                placeholder="City,State zip"
                onChange={handleInputChange}
                value={formData.clientCity}
              />
              <input
                type="text"
                name="clientCountry"
                className="border-0 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                placeholder="Country"
                onChange={handleInputChange}
                value={formData.clientCountry}
              />
            </div>
            <div className="flex flex-col w-1/2 mt-6">
              <div className="flex gap-7">
                <label
                  htmlFor="invoiceNumber"
                  className="font-bold text-slate-600 mb-2"
                >
                  Invoice Number
                </label>
                <input
                  type="text"
                  name="invoiceNumber"
                  className="border-0 h-5 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                  placeholder="INV 123"
                  onChange={handleInputChange}
                  value={formData.invoiceNumber}
                />
              </div>
              <div className="flex gap-7">
                <label
                  htmlFor="invoiceDate"
                  className="font-bold text-slate-600 mb-2"
                >
                  Invoice Date
                </label>
                <input
                  type="date"
                  name="invoiceDate"
                  className="border-0 h-5 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                  onChange={handleInputChange}
                  value={formData.invoiceDate}
                />
              </div>
              <div className="flex gap-7">
                <label htmlFor="dueDate" className="font-bold text-slate-600">
                  Due Date
                </label>
                <input
                  type="date"
                  name="invoiceDueDate"
                  className="border-0 h-5 p-1 mb-2 focus:ring-1 focus:ring-violet-500 outline-none placeholder:text-slate-400"
                  onChange={handleInputChange}
                  value={formData.invoiceDueDate}
                />
              </div>
            </div>
          </div>
          {/* FORM TABLE */}
          <FormTable updateTableData={updateTableData} />
          <button
            type="submit"
            className="bg-violet-700 text-white px-6 py-2 rounded-md"
          >
            Create Invoice
          </button>
        </form>
      )}
      {/* Invoice Preview */}
    </div>
  );
}
