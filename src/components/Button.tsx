type ButtonProps = {
  text: string;
  className: string;
  handleClick: () => void;
};

const Button = ({ text, className, handleClick }: ButtonProps) => {
  return (
    <>
      <span
        className={`border-4 font-extrabold  rounder-border  pt-05 pb-05  
             cursor-pointer ${className}`}
        onClick={() => handleClick()}
      >
        {text}
      </span>
    </>
  );
};

export default Button;
