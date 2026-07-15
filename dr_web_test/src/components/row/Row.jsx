import React, { useRef } from 'react';

export const Row = React.memo(({ label, checked, id, handleChange }) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div>
        {label}

        {`(рендеров: ${renderCount.current})`}
        <input
            type="checkbox"
            checked={checked}
            onChange={() => handleChange(id)}
        />
    </div>
  );
});