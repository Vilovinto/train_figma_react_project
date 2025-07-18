import React from 'react';

interface TableIconProps {
  color?: string;
  size?: number;
}

const TableIcon: React.FC<TableIconProps> = ({ color = 'white', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 0.980469H3C2.46957 0.980469 1.96086 1.19118 1.58579 1.56626C1.21071 1.94133 1 2.45004 1 2.98047V6.98047M7 0.980469H17C17.5304 0.980469 18.0391 1.19118 18.4142 1.56626C18.7893 1.94133 19 2.45004 19 2.98047V6.98047M7 0.980469V18.9805M1 6.98047V16.9805C1 17.5109 1.21071 18.0196 1.58579 18.3947C1.96086 18.7698 2.46957 18.9805 3 18.9805H7M1 6.98047H19M19 6.98047V16.9805C19 17.5109 18.7893 18.0196 18.4142 18.3947C18.0391 18.7698 17.5304 18.9805 17 18.9805H7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default TableIcon; 