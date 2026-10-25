import { useFormStatus } from "react-dom";

const ResSubmitButton = () => {
  const { pending } = useFormStatus();
  return <button type="submit">{pending ? "Submitting..." : "Submit"}</button>;
};

export default ResSubmitButton;
