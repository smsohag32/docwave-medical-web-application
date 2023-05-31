/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
const SingUp = () => {
  const [singUpError, setSingUpError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle login
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  // handle Password reset
  const handleReset = () => {};
  return (
    <div>
      <section
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="flex flex-col md:flex-row bg-indigo-300  items-center"
      >
        <div className="bg-indigo-600 h-full  hidden lg:block w-full md:w-1/2 xl:w-2/3"></div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-full">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Create your first account
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                />
              </div>
              <div>
                <label className=" flex gap-6 items-center mt-5 px-4 py-3 bg-white text-blue rounded-lg shadow-sm tracking-wide  border-2 border-dashed cursor-pointer hover:bg-blue hover:text-white hover:bg-blue-400">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base leading-normal">
                    Upload your photo
                  </span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
              </div>

              {singUpError && (
                <div className="text-center mt-2">
                  <span className="text-sm font-semibold text-red-500 ">
                    {singUpError}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Sing up
              </button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <FcGoogle />
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
              Already have an account?
              <Link
                to="/singin"
                className="text-blue-500 ms-1 hover:text-blue-700 font-semibold"
              >
                Sing in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingUp;
