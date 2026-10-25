import Form from "next/form";
import SubmitButton from "@/components/SubmitButton";

const createProduct = async (formData) => { 
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 2000));
};

const addNewProduct = () => {
  return (
    <Form action={createProduct}>
      <input name="productname" />
      <button type="submit">
        <SubmitButton />
      </button>
    </Form>
  );
};

export default addNewProduct;
