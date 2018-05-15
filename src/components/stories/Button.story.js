import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../button/Button';

storiesOf('Button', module).add('basic button', () => [<Button content="Click me !" />]);
