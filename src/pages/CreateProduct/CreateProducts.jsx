import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CreateProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data) {
      fetch(`http://localhost:5000/createProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((createProduct) => {
          if (createProduct.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Product created successfully. ",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
          }
        });
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto primary-bg p-5 my-5 py-4">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input input-bordered"
            type="text"
            placeholder="Enter product Name"
            {...register("pName", { required: true })}
          />
          {errors.pName && (
            <span className="text-warning">This field is required</span>
          )}
          <input
            className="input input-bordered"
            type="text"
            placeholder="Enter product category"
            {...register("category", { required: true })}
          />
          {errors.category && (
            <span className="text-warning">This field is required</span>
          )}
          <input
            className="input input-bordered"
            type="number"
            placeholder="Enter product price"
            {...register("price", { required: true })}
          />
          {errors.price && (
            <span className="text-warning">This field is required</span>
          )}
          <input
            className="input input-bordered"
            type="url"
            placeholder="Enter product img url"
            {...register("img", { required: true })}
          />
          {errors.img && (
            <span className="text-warning">This field is required</span>
          )}
          <textarea
            className=" textarea"
            type="text"
            rows="5"
            placeholder="Enter product description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-warning">This field is required</span>
          )}

          <textarea
            type="text"
            className="textarea"
            rows="5"
            placeholder="Enter product information"
            {...register("additionalInfo", { required: true })}
          />
          {errors.additionalInfo && (
            <span className="text-warning">This field is required</span>
          )}

          <div className="flex gap-3 justify-start">
            <input
              type="checkbox"
              name="check"
              className="checkbox bg-white bg-opacity-60"
            />
            <label htmlFor="check">Are you sure create products</label>
          </div>
          <input
            className="btn btn-secondary"
            type="submit"
            value="Create Products"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
