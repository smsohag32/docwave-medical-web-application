/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const SingUp = () => {
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
              <h1 className="text-xl mb-3 font-bold">Sing up</h1>
              <div className="form-control">
                <input
                  type="text"
                  {...register("name", {
                    required: true,
                  })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors?.name && (
                  <p className="text-warning">
                    <small>Field required</small>
                  </p>
                )}
              </div>

              <div className="form-control">
                <input
                  type="email"
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
                <label htmlFor="gender">Gender:</label>
                <select
                  id="gender"
                  className="bg-base-100 p-5 border-1"
                  {...register("gender")}
                >
                  <option className="p-2 outline-none" value="female">
                    female
                  </option>
                  <option className="p-2 outline-none" value="male">
                    male
                  </option>
                  <option className="p-2 outline-none" value="other">
                    other
                  </option>
                </select>
              </div>
              <div className="form-control">
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
              </div>
              <div className="form-control">
                <p>
                  <small>
                    Already have an account
                    <Link className="link link-success" to="/login">
                      Login
                    </Link>
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary btn-outline btn-sm"
                >
                  Sing up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
