import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', withInfo('doc string about my component')(() => <Button onClick={action('clicked')}>Hello Button</Button>))
  .add('with some emoji', withInfo('doc string about my component')(() => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>));
