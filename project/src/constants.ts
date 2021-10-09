import { CSSProperties } from 'react';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const WIDTH_80: CSSProperties = { width: '80%' };
export const WIDTH_100: CSSProperties = { width: '100%' };

export const RADIX = 10;
