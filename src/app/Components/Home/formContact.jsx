// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Logo from "../../../../public/Assets/Images/logo2.png";

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   subject: "",
//   message: ""
// };

// const initialState = { values: initialValue };

// function FormContact() {
//   const [state, setState] = useState(initialState);
//   const [touched, setTouched] = useState({});
  
//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({
//       ...prev,
//       [target.name]: true
//     }));

//   const { values ,isLoading } = state;

//   const handleChange = ({ target }) =>
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value
//       }
//     }));

//     // handel onSubmit
//     const onSubmit = async ()=> {
//       setState((prev) => ({
//         ...prev,
//         isLoading:true
//       }))
//     }

//   return (
//     <div className="flex md:justify-around justify-center md:flex-row flex-col mt-20 pb-20">
//       {/* Contact form */}
//       <div className="md:w-1/2 my-10 lg:px-20 px-10 items-center text-start text-[#C2C2C2]">
//         If you’re seeking personalized legal advice, don’t hesitate to reach out for expert counsel tailored to your specific needs and circumstances.
//       </div>
      
//       {/* Form */}
//       <div className="bg-white p-10 mx-auto shadow-lg w-full max-w-lg">
//         <div className="text-center mb-8">
//           <Image src={Logo} alt="Logo" />
//         </div>
//         <form >
//           <div className="flex mb-4">
//             <div className="w-1/2 pr-2">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="First Name"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="w-1/2 pl-2">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Last Name"
//                 required
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               value={values.email}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Email Address"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="subject"
//               value={values.subject}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Subject"
//               required
//               onChange={handleChange}
//             />
//           </div>
//           <div className="mb-4">
//             <textarea
//               name="message"
//               value={values.message}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Message"
//               rows="5"
//               required
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition duration-300"
//             isLoading ={isLoading}
//             disabled={
//               !values.firstName ||
//               !values.lastName ||
//               !values.email ||
//               !values.subject ||
//               !values.message
//             }
//             onClick={onSubmit}
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormContact;


// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Logo from "../../../../public/Assets/Images/logo2.png";

// const initialValue = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   subject: "",
//   message: ""
// };

// const initialState = { values: initialValue };

// function FormContact() {
//   const [state, setState] = useState(initialState);
//   const [touched, setTouched] = useState({});
//   const [isLoading, setIsLoading] = useState(false);

//   const onBlur = ({ target }) =>
//     setTouched((prev) => ({
//       ...prev,
//       [target.name]: true
//     }));

//   const { values } = state;

//   const handleChange = ({ target }) =>
//     setState((prev) => ({
//       ...prev,
//       values: {
//         ...prev.values,
//         [target.name]: target.value
//       }
//     }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsLoading(false);
//       alert("Form submitted successfully!");
//       setState(initialState); // Reset the form
//     }, 2000);
//   };

//   return (
//     <div className="flex md:justify-around justify-center md:flex-row flex-col mt-20 pb-20">
//       {/* Contact form */}
//       <div className="md:w-1/2 my-10 lg:px-20 px-10 items-center text-start text-[#C2C2C2]">
//         If you’re seeking personalized legal advice, don’t hesitate to reach out for expert counsel tailored to your specific needs and circumstances.
//       </div>
      
//       {/* Form */}
//       <div className="bg-white p-10 mx-auto shadow-lg w-full max-w-lg">
//         <div className="text-center mb-8">
//           <Image src={Logo} alt="Logo" />
//         </div>
//         <form onSubmit={onSubmit}>
//           <div className="flex mb-4">
//             <div className="w-1/2 pr-2">
//               <input
//                 type="text"
//                 name="firstName"
//                 value={values.firstName}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="First Name"
//                 required
//                 onChange={handleChange}
//                 onBlur={onBlur}
//               />
//             </div>
//             <div className="w-1/2 pl-2">
//               <input
//                 type="text"
//                 name="lastName"
//                 value={values.lastName}
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 placeholder="Last Name"
//                 required
//                 onChange={handleChange}
//                 onBlur={onBlur}
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               value={values.email}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Email Address"
//               required
//               onChange={handleChange}
//               onBlur={onBlur}
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="subject"
//               value={values.subject}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Subject"
//               required
//               onChange={handleChange}
//               onBlur={onBlur}
//             />
//           </div>
//           <div className="mb-4">
//             <textarea
//               name="message"
//               value={values.message}
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               placeholder="Message"
//               rows="5"
//               required
//               onChange={handleChange}
//               onBlur={onBlur}
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition duration-300"
//             disabled={
//               isLoading ||
//               !values.firstName ||
//               !values.lastName ||
//               !values.email ||
//               !values.subject ||
//               !values.message
//             }
//           >
//             {isLoading ? "Submitting..." : "Submit"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FormContact;


"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/Assets/Images/logo2.png";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: ""
};

const initialState = { values: initialValue };

function FormContact() {
  const [state, setState] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onBlur = ({ target }) =>
    setTouched((prev) => ({
      ...prev,
      [target.name]: true
    }));

  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }));

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError("");
  //   setSuccess("");

  //   try {
  //     const response = await fetch('/api/sendmail', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(values),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to send email');
  //     }

  //     setSuccess("Email sent successfully!");
  //     setState(initialState); // Reset the form
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
  
    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      // Check if response body is empty
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();
        setSuccess(responseData.message); // Assuming the response contains a success message
        setState(initialState); // Reset the form
      } else {
        // Handle case where response body is empty
        setSuccess("Email sent successfully!");
        setState(initialState); // Reset the form
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex md:justify-around justify-center md:flex-row flex-col mt-20 pb-20">
      <div className="md:w-1/2 my-10 lg:px-20 px-10 items-center text-start text-[#C2C2C2]">
        If you’re seeking personalized legal advice, don’t hesitate to reach out for expert counsel tailored to your specific needs and circumstances.
      </div>
      
      <div className="bg-white p-10 mx-auto shadow-lg w-full max-w-lg">
        <div className="text-center mb-8">
          <Image src={Logo} alt="Logo" />
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                name="firstName"
                value={values.firstName}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="First Name"
                required
                onChange={handleChange}
                onBlur={onBlur}
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                name="lastName"
                value={values.lastName}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Last Name"
                required
                onChange={handleChange}
                onBlur={onBlur}
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={values.email}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Email Address"
              required
              onChange={handleChange}
              onBlur={onBlur}
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              value={values.subject}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Subject"
              required
              onChange={handleChange}
              onBlur={onBlur}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={values.message}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Message"
              rows="5"
              required
              onChange={handleChange}
              onBlur={onBlur}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 hover:bg-blue-700 transition duration-300"
            disabled={
              isLoading ||
              !values.firstName ||
              !values.lastName ||
              !values.email ||
              !values.subject ||
              !values.message
            }
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </form>
      </div>
    </div>
  );
}

export default FormContact;
