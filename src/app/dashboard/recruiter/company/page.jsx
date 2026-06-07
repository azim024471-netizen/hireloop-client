
import React from 'react';
// import CompanyProfile from './CompanyProfile';
// import { getUserSession } from '@/lib/core/session';
import { getRecruiterCompany } from '@/lib/api/companies';
import CompanyProfile from './CompanyProfile';
import { getsession } from '@/lib/coreFunction/session';
// import { getSession } from 'better-auth/api';

const CompanyPage = async () => {

    const user = await getsession();
    const company = await getRecruiterCompany(user?.id);

    console.log(company, 'compnayyyyyyyyyyyyy')
   
    
    console.log(user, 'userrrrrrrr')
     
    return (
        <div>
            {/* <CompanyProfile  recruiterCompany={company}></CompanyProfile> */}
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default CompanyPage;









// 'use client';

// import { useState } from 'react';
// import {
//   Building2,
//   Upload,
//   X,
//   Globe,
//   MapPin,
// } from 'lucide-react';

// const MyCompany = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [errors, setErrors] = useState({});
//   const [logoFile, setLogoFile] = useState(null);
//   const [logoPreview, setLogoPreview] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleLogoChange = (e) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     const allowedTypes = [
//       'image/jpeg',
//       'image/jpg',
//       'image/png',
//       'image/webp',
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setErrors((prev) => ({
//         ...prev,
//         logo: 'Only JPG, PNG and WEBP files are allowed',
//       }));
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setErrors((prev) => ({
//         ...prev,
//         logo: 'Image size must be less than 5MB',
//       }));
//       return;
//     }

//     setErrors((prev) => ({
//       ...prev,
//       logo: '',
//     }));

//     setLogoFile(file);
//     setLogoPreview(URL.createObjectURL(file));
//   };

//   const validateForm = (formData) => {
//     const newErrors = {};

//     const companyName = formData.get('companyName');
//     const website = formData.get('website');
//     const location = formData.get('location');
//     const description = formData.get('description');

//     if (!companyName?.trim()) {
//       newErrors.companyName = 'Company name is required';
//     }

//     if (!website?.trim()) {
//       newErrors.website = 'Website URL is required';
//     } else {
//       try {
//         new URL(website);
//       } catch {
//         newErrors.website = 'Enter a valid website URL';
//       }
//     }

//     if (!location?.trim()) {
//       newErrors.location = 'Location is required';
//     }

//     if (!description?.trim()) {
//       newErrors.description = 'Description is required';
//     } else if (description.trim().length < 30) {
//       newErrors.description =
//         'Description must be at least 30 characters';
//     }

//     if (!logoFile) {
//       newErrors.logo = 'Company logo is required';
//     }

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const validationErrors = validateForm(formData);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       setIsSubmitting(true);

//       const imageData = new FormData();
//       imageData.append('image', logoFile);

//       const imageRes = await fetch(
//         `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
//         {
//           method: 'POST',
//           body: imageData,
//         }
//       );

//       const imageResult = await imageRes.json();

//       const logoUrl = imageResult?.data?.display_url;

//       const companyData = {
//         companyName: formData.get('companyName'),
//         industry: formData.get('industry'),
//         website: formData.get('website'),
//         location: formData.get('location'),
//         employeeCount: formData.get('employeeCount'),
//         description: formData.get('description'),
//         logo: logoUrl,
//         status: 'pending',
//       };

//       console.log('Company Data:', companyData);

//       // await axios.post('/api/company', companyData);

//       alert('Company submitted successfully!');

//       setIsOpen(false);

//       e.target.reset();
//       setLogoFile(null);
//       setLogoPreview('');
//       setErrors({});
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong!');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <div className="w-full">
//         <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-10 text-center">
//           <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900">
//             <Building2 className="h-10 w-10 text-zinc-500" />
//           </div>

//           <h2 className="text-3xl font-semibold text-white">
//             No Company Registered
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-zinc-400">
//             Register your company profile to start posting jobs and
//             receiving applications.
//           </p>

//           <button
//             onClick={() => setIsOpen(true)}
//             className="mt-8 rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
//           >
//             Register Company
//           </button>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
//           <div className="w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl max-h-[90vh]">
//             <div className="flex items-start justify-between border-b border-zinc-800 p-6">
//               <div>
//                 <h2 className="text-2xl font-semibold text-white">
//                   Register New Company
//                 </h2>

//                 <p className="mt-1 text-sm text-zinc-400">
//                   Enter your business details to start hiring.
//                 </p>
//               </div>

//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-zinc-500 hover:text-white"
//               >
//                 <X size={22} />
//               </button>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="space-y-6 p-6"
//             >
//               <div className="grid gap-6 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm text-zinc-300">
//                     Company Name
//                   </label>

//                   <input
//                     name="companyName"
//                     type="text"
//                     placeholder="e.g. Acme Corp"
//                     className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none"
//                   />

//                   {errors.companyName && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.companyName}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm text-zinc-300">
//                     Industry / Category
//                   </label>

//                   <select
//                     name="industry"
//                     className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none"
//                   >
//                     <option>Technology</option>
//                     <option>Design</option>
//                     <option>Marketing</option>
//                     <option>Finance</option>
//                     <option>Healthcare</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm text-zinc-300">
//                     Website URL
//                   </label>

//                   <div className="relative">
//                     <Globe
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
//                     />

//                     <input
//                       name="website"
//                       type="text"
//                       placeholder="https://company.com"
//                       className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-4 text-white outline-none"
//                     />
//                   </div>

//                   {errors.website && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.website}
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm text-zinc-300">
//                     Location
//                   </label>

//                   <div className="relative">
//                     <MapPin
//                       size={16}
//                       className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
//                     />

//                     <input
//                       name="location"
//                       type="text"
//                       placeholder="City, Country"
//                       className="w-full rounded-lg border border-zinc-800 bg-zinc-900 py-3 pl-10 pr-4 text-white outline-none"
//                     />
//                   </div>

//                   {errors.location && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.location}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div className="grid gap-6 md:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-sm text-zinc-300">
//                     Employee Count Range
//                   </label>

//                   <select
//                     name="employeeCount"
//                     className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none"
//                   >
//                     <option>1-10 employees</option>
//                     <option>11-50 employees</option>
//                     <option>51-200 employees</option>
//                     <option>201-500 employees</option>
//                     <option>500+ employees</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-sm text-zinc-300">
//                     Company Logo
//                   </label>

//                   <label className="flex cursor-pointer items-center gap-4 rounded-lg border border-dashed border-zinc-700 p-4 hover:border-zinc-500">
//                     {logoPreview ? (
//                       <img
//                         src={logoPreview}
//                         alt="Preview"
//                         className="h-14 w-14 rounded-lg object-cover"
//                       />
//                     ) : (
//                       <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900">
//                         <Upload
//                           size={18}
//                           className="text-zinc-400"
//                         />
//                       </div>
//                     )}

//                     <div>
//                       <p className="text-sm text-white">
//                         Upload Image
//                       </p>

//                       <p className="text-xs text-zinc-500">
//                         PNG, JPG, WEBP up to 5MB
//                       </p>
//                     </div>

//                     <input
//                       type="file"
//                       className="hidden"
//                       accept="image/*"
//                       onChange={handleLogoChange}
//                     />
//                   </label>

//                   {errors.logo && (
//                     <p className="mt-1 text-sm text-red-500">
//                       {errors.logo}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm text-zinc-300">
//                   Short Description
//                 </label>

//                 <textarea
//                   name="description"
//                   rows={5}
//                   placeholder="Tell us about your company..."
//                   className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-white outline-none"
//                 />

//                 {errors.description && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.description}
//                   </p>
//                 )}
//               </div>

//               <div className="flex justify-end gap-3 border-t border-zinc-800 pt-5">
//                 <button
//                   type="button"
//                   onClick={() => setIsOpen(false)}
//                   className="rounded-lg border border-zinc-800 px-5 py-3 text-zinc-300 hover:bg-zinc-900"
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-zinc-200 disabled:opacity-50"
//                 >
//                   {isSubmitting
//                     ? 'Uploading...'
//                     : 'Register Company'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default MyCompany;