import React from 'react';

const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const { className } = props;

  return (
    <textarea
      {...props}
      className={`rounded-xl w-full bg-black bg-opacity-60 border-none ${className}`}
    ></textarea>
  );
};

export default Textarea;
