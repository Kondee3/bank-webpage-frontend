interface Props {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="btn btn-outline-success col-xs-2"
      type="submit"
    >
      {children}
    </button>
  );
};
export default Button;
