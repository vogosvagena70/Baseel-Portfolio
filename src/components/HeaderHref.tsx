type HeaderHrefProps = {
  text: string;
};

const HeaderHref = ({ text }: HeaderHrefProps) => {
  return (
    <>
      <a href={"#" + text} className="font-extrabold header-href">
        {text}
      </a>
    </>
  );
};

export default HeaderHref;
