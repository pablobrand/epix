import Link from 'next/link';

const NavItem = ({ title, path, bordered = false, lastItem = false }) => {
  return (
    <Link href={path}>
      <a
        className={`block mt-4 lg:inline-block lg:mt-0 text-center ${
          lastItem ? '' : 'lg:mr-12'
        } ${
          bordered
            ? 'lg:border lg:border-white lg:px-6 lg:py-2.5 lg:rounded-full'
            : ''
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

export default NavItem;
