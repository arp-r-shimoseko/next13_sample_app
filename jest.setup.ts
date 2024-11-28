import React from 'react';
import '@testing-library/jest-dom';

global.React = React;

jest.mock('next/router', () => require('next-router-mock'));
