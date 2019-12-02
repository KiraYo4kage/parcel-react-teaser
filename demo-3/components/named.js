import React from 'react';

export default function named(Component) {
  const NamedComponent = ({ name, ...restProps }) => {
    NamedComponent.displayName = `named${name || Component.displayName || Component.name || 'Component'}`;
    return <Component {...restProps} />;
  };
  return NamedComponent;
}