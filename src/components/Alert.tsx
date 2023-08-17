import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <span className="alert alert-danger">
      {children}
    </span>
  );
};

export default Alert;
