"use client";
import { useFormStatus } from "react-dom";
const SubmitButton = () => {
  const { pending } = useFormStatus();
  if (pending) {
    return "Loading...";
  }
  return "Create Product";
};
export default SubmitButton;
