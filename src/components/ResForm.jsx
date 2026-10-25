"use client";
import Form from "next/form";
import resSubmitAction from "@/app/action/resAction";
import { useActionState } from "react";

const resForm = () => {
  const [state, formAction, isPending] = useActionState(resSubmitAction, {
    success: null,
    message: "",
  });
  return (
    <>
      <div>{state.success === false && "noget gik galt"}</div>
      <div>{state.success === true && "tillykke"}</div>
      <Form action={formAction}>
        <input name="productname" type="text" />
        {/* <ResSubmitButton /> */}
        <button type="submit">{isPending ? "submittting..." : "submit"}</button>
      </Form>
    </>
  );
};

export default resForm;
