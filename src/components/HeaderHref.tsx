type HeaderHrefProps = {
  text: string;
  InNavBar: boolean;
};

const HeaderHref = ({ text, InNavBar = false }: HeaderHrefProps) => {
  return (
    <>
      <a
        href={"#" + text}
        className={
          InNavBar == false
            ? "font-extrabold header-href"
            : "font-extrabold header-href-in-nav-bar"
        }
      >
        {text}
      </a>
    </>
  );
};

export default HeaderHref;
