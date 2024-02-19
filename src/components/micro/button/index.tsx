type props = {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({ className, children, disabled, onClick }: props) => {
  return (
    <button
      className={`rounded-lg p-3 font-medium bg-dark-blue text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
