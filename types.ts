import React from 'react';

export enum Screen {
  AUTH = 'AUTH',
  DASHBOARD = 'DASHBOARD',
  BAAFIYE = 'BAAFIYE',
  ANALYSIS = 'ANALYSIS',
  DISCOUNTS = 'DISCOUNTS',
  TASKS = 'TASKS',
  PORTAL = 'PORTAL',
  SERVICES = 'SERVICES',
  QURAN = 'QURAN',
  HOSPITALS = 'HOSPITALS',
  EXISAABI = 'EXISAABI',
  REPORTS = 'REPORTS'
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  color: string;
  icon?: React.ReactNode;
}

export interface Hospital {
  id: number;
  name: string;
  location: string;
  discount: number;
}

export interface Surah {
  id: number;
  name: string;
  englishName: string;
  verses: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Agent' | 'Admin';
}