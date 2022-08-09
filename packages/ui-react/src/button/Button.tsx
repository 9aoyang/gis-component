

import React from 'react';

import type { MComponent } from '@tmagic/schema';

import useApp from '../useApp';

interface ButtonProps {
  config: MComponent;
}

const Page: React.FC<ButtonProps> = ({ config }) => {
  const { app } = useApp({ config });

  if (!app) return null;

  const MagicUiText = app.resolveComponent('text');

  return (
    <button className="magic-ui-button" style={app.transformStyle(config.style || {})} id={`${config.id || ''}`}>
      <MagicUiText
        config={{
          text: config.text,
        }}
      ></MagicUiText>
    </button>
  );
};

Page.displayName = 'magic-ui-button';

export default Page;
