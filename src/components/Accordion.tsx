import { useState } from 'react';

interface Item {
  id: string;
  label: string;
  content: string;
}

interface Items {
  items: Item[];
}

const Accordion: React.FC<Items> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const handleClick = (nextIndex: number) => setExpandedIndex(nextIndex);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>{item.label}</div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
};

export default Accordion;
