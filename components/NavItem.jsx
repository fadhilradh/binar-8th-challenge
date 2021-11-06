export const NavItem = ({ href, title }) => {
  return (
    <li>
      <a
        className="tracking-widest hover:text-primary cursor-pointer"
        href={href}
      >
        {title}
      </a>
    </li>
  );
};
