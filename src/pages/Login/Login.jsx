/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="hero h-full bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors?.email?.message && (
                  <p className="text-warning">
                    <small>{errors.email.message}</small>
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors?.password && (
                  <p className="text-warning">
                    <small>Field is empty</small>
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <p>
                  <small>
                    Don't have an account{" "}
                    <Link className="link link-success" to="/singUp">
                      Sing up
                    </Link>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary btn-outline btn-sm"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
