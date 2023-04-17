import classNames from 'classnames';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className, ...rest }) => {
  const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', className);

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
