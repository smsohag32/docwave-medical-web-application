/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { useState } from "react";
const CreateService = () => {
  const [selectOption, setSelectOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data) {
      fetch(`http://localhost:5000/createService`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((allServices) => {
          console.log(allServices);
          if (allServices.insertedId) {
            setSelectOption(null);
            reset();
          }
        });
    }
  };

  //   react select option
  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];
  return (
    <div>
      <div className="card  shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h1 className="text-xl mb-3 font-bold">Create a new Service</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Title</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              placeholder="Type service title"
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
              <span className="label-text">Doctor Name</span>
            </label>
            <input
              type="text"
              {...register("title", {
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
            <div className="bg-black">
              <CreatableSelect
                className=" bg-black input input-bordered "
                styles={{
                  control: (base, state) => ({
                    ...base,

                    height: "100%",
                    outline: "none",
                    border: "2px solid #0f1a3e",
                    borderColor: state.isFocused ? "red" : "white",

                    backgroundColor: "#1b1b1b",
                  }),
                  option: (base) => ({
                    ...base,
                    border: `none`,
                    height: "100%",
                    backgroundColor: "#1b1b1b",
                  }),
                }}
                defaultValue={selectOption}
                onChange={setSelectOption}
                options={options}
                isMulti
              ></CreatableSelect>
            </div>
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              className="bg-base-100 p-5 border-1"
              {...register("gender")}
            >
              <option className="p-2 outline-none " value="female">
                female
              </option>
              <option className="p-2 outline-none " value="male">
                male
              </option>
              <option className="p-2 outline-none " value="other">
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
  );
};

export default CreateService;
