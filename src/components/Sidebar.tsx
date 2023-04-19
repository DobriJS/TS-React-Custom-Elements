import Link from './Link';

const Sidebar: React.FC = () => {
  const links = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' }
  ];

  const renderedLinks = links.map((link) => {
    return (
      <li key={link.path}>
        <Link to={link.path}>{link.label}</Link>
      </li>
    );
  });

  return <div className='sticky top-0 overflow-y-scroll flex flex-col'>{renderedLinks}</div>;
};

export default Sidebar;
