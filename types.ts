import React from 'react';

export interface NavLinkInfo {
  label: string;
  path?: string;
  children?: NavLinkInfo[];
}

export interface ResourceFile {
  name:string;
  description: string;
  url: string;
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface CalendarEvent {
  date: string; // "YYYY-MM-DD"
  title: string;
  category: 'Holiday' | 'Exam' | 'Event';
}

export interface FeeItem {
  label: string;
  value: string;
  isBold?: boolean;
  isSpace?: boolean;
}

export interface FeeSchedule {
  id: string;
  level: string;
  fees: FeeItem[];
  requirements: string[];
  discount: string;
}
