interface Item {
  id: string;
  label: string;
  content: string;
}

interface Items {
  items: Item[];
}

const Accordion: React.FC<Items> = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
