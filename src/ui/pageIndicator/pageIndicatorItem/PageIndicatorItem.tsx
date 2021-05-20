import './PageIndicatorItem.css';
import React from 'react';
import { PageIndicatorItemProps } from './PageIndicatorItem.types';

export const PageIndicatorItem: React.FC<PageIndicatorItemProps> = ({ active = false, onClick }) => {
  return <div className={`page-indicator-item ${active ? 'active' : ''}`} onClick={onClick} />;
};
