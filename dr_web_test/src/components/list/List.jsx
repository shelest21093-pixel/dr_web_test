import { useCallback } from 'react';
import { Row } from '../row/Row';

export const List = ({ list, setListRow }) => {
  const handleChange = useCallback((id) => {
    setListRow((prev) =>
      prev.map((li) => (li.id === id ? { ...li, checked: !li.checked } : li))
    );
  }, [setListRow]);

  if (list.length === 0) {
    return <div>LOADING...</div>;
  }

  return (
    <>
      {list.map((item) => (
        <Row
          key={item.id}
          label={item.label}
          checked={item.checked}
          id={item.id}
          handleChange={handleChange}
        />
      ))}
    </>
  );
};