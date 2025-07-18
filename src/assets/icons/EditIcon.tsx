import React from 'react';

interface EditIconProps {
  color?: string;
  size?: number;
}

const EditIcon: React.FC<EditIconProps> = ({ color = 'black', size = 24 }) => (
  <svg width={size} height={size+1} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.96094H4C3.46957 4.96094 2.96086 5.17165 2.58579 5.54672C2.21071 5.9218 2 6.4305 2 6.96094V20.9609C2 21.4914 2.21071 22.0001 2.58579 22.3752C2.96086 22.7502 3.46957 22.9609 4 22.9609H18C18.5304 22.9609 19.0391 22.7502 19.4142 22.3752C19.7893 22.0001 20 21.4914 20 20.9609V13.9609" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 3.46116C18.8978 3.06334 19.4374 2.83984 20 2.83984C20.5626 2.83984 21.1022 3.06334 21.5 3.46116C21.8978 3.85899 22.1213 4.39855 22.1213 4.96116C22.1213 5.52377 21.8978 6.06334 21.5 6.46116L12 15.9612L8 16.9612L9 12.9612L18.5 3.46116Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default EditIcon; 