export const NavItem = ({ href, title }) => {
  return (
    <li>
      <a
        className="tracking-widest hover:text-yellow-500 cursor-pointer"
        href={href}
      >
        {title}
      </a>
    </li>
  );
};
