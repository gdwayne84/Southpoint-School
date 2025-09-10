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
