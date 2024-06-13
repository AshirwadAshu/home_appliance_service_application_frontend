import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CustRegister() {
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [user, setUser] = useState({
    technicianFirstName: "",
    technicianLastName: "",
    email: "",
    password: "",
    confpassword: "",
    phoneNo: "",
    address: "",
  });

  const navigate = useNavigate();

  const registerUser = async (user) => {
    if (!validateEmail(user.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(user.password)) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    if (!validatePasswordMatch(user.password, user.confpassword)) {
      alert("Password and Confirm Password do not match.");
      return;
    }
    if (!validatePhone(user.phoneNo)) {
      alert("Please enter a valid phone number.");
      return;
    }

    try {
      let res = await axios.post(
        "http://localhost:8080/technician/signup",
        user
      );
      if (res.data.data !== null) {
        alert(res.data.message);
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validatePasswordMatch = (password, confpassword) => {
    return password === confpassword;
  };

  const handlePasswordChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setPasswordMatch(validatePasswordMatch(user.password, event.target.value));
  };
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (event) => {
    setUser({
      ...user,
      phoneNo: event.target.value,
    });
    setPhoneValid(validatePhone(event.target.value));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="isolate bg-white px-6 py-25 sm:py-20 lg:px-5">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technician Registration
            </h2>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Enter your first name"
                    onChange={(event) =>
                      setUser({
                        ...user,
                        technicianFirstName: event.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Enter your last name"
                    autoComplete="family-name"
                    onChange={(event) =>
                      setUser({
                        ...user,
                        technicianLastName: event.target.value,
                      })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 ">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="company"
                    placeholder="Email"
                    autoComplete="organization"
                    onChange={(event) =>
                      setUser({ ...user, email: event.target.value })
                    }
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2.5 ">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="organization"
                    onChange={handlePasswordChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-2.5">
                  <input
                    type="password"
                    name="confpassword"
                    id="confpassword"
                    placeholder="Confirm your password"
                    autoComplete="organization"
                    onChange={handlePasswordChange}
                    className={classNames(
                      passwordMatch
                        ? "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        : "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                    )}
                  />
                  {!passwordMatch && (
                    <p className="mt-1 text-sm text-red-500">
                      Passwords do not match.
                    </p>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div className="relative mt-2.5 flex">
                  <div>
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-10 rounded-md mt-0 border bg-white bg-none pl-3 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option>IN</option>
                      <option>US</option>
                      <option>EU</option>
                      <option>CA</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      onChange={handlePhoneChange}
                      placeholder="Enter your phone no"
                      className={classNames(
                        phoneValid
                          ? "block w-44 ml-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          : "block w-44 ml-3 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                      )}
                    />
                    {!phoneValid && (
                      <p className="text-sm text-red-500">
                        Please enter a valid phone number.
                      </p>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-2 mt-5">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="Address"
                      name="Address"
                      id="company"
                      placeholder="Address"
                      autoComplete="organization"
                      onChange={(event) =>
                        setUser({ ...user, address: event.target.value })
                      }
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="button"
                onClick={() => registerUser(user)}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}
