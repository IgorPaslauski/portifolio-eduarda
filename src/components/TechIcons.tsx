
import React from "react";

interface TechIconProps {
  className?: string;
}

export const Html: React.FC<TechIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3h16l-1.5 15L12 21l-6.5-3L4 3z" />
      <path d="M8 8h8l-.5 5.5-3.5 1.5-3.5-1.5L8 8z" />
    </svg>
  );
};

export const Css: React.FC<TechIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3l1.5 15L12 21l6.5-3L20 3H4z" />
      <path d="M8 9h8M8 6h8M16 15h-4l-.5-3h-3" />
    </svg>
  );
};

export const Javascript: React.FC<TechIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z" />
      <path d="M8 10v7" />
      <path d="M12 14.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7" />
      <path d="M8 14.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5" />
    </svg>
  );
};

export const NodeJs: React.FC<TechIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22L4 16V8l8-6 8 6v8l-8 6z" />
      <path d="M12 16v6" />
    </svg>
  );
};

export const Database: React.FC<TechIconProps> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
};
