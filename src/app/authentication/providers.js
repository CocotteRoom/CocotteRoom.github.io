import React from 'react';
import firebase from '../firebase';
import { Auth } from './Auth';

export const createProvider = (Component, provider) => props => (
  <Component {...props} provider={provider} />
);

export const Google = createProvider(Auth, new firebase.auth.GoogleAuthProvider());
export const Facebook = createProvider(Auth, new firebase.auth.FacebookAuthProvider());
