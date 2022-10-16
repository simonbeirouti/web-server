import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export default function CTA() {
  const initValues = { email: "" };

  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    const email = e.target.email.value;
    await supabase.auth.signInWithOtp({ email });
    initValues.email = "";
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regEx.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        {!showForm ? (
          <button
            type="button"
            className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold leading-5 transition-all duration-200 bg-orange-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-500 text-black"
            onClick={handleClick}
          >
            Access now
          </button>
        ) : (
          <form action="#" method="POST" onSubmit={handleSubmit}>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold leading-5 transition-all duration-200 bg-orange-300 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 hover:bg-red-500 text-black"
            >
              Access now
            </button>
            <div className="w-96">
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={handleOnChange}
                placeholder="Email address"
                className="block w-full py-4 pl-4 mt-4 text-base text-gray-900 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />

              {formErrors.email && (
                <p className="text-red-500 mt-4">{formErrors.email}</p>
              )}
            </div>
          </form>
        )}
      </div>
      {Object.keys(formErrors).length === 0 && isSubmit && (
        <div
          className="bg-green-100 mt-4 border border-green-400 text-green-700 px-4 py-3 rounded-md relative"
          role="alert"
        >
          <span className="block sm:inline">
            Success! Check your email for a magic link.
          </span>
        </div>
      )}
    </>
  );
}
