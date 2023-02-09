import { ConfigProps, TemplateProps, Widget } from '@sam/types';

const computeTemplate = (prefix: 'col' | 'row', template: TemplateProps) => {
  const { unit, value } = template;

  return `${prefix}-${unit}-${value}`;
};

export const computeStyles = (config: Widget['config']): string => {
  const formFactors = Object.keys(config);

  const styles = formFactors.map((formFactor) => {
    const rows = config[formFactor].row
      .map((template) => computeTemplate('row', template))
      .join(' ');

    const columns = config[formFactor].column
      .map((template) => computeTemplate('col', template))
      .join(' ');

    const order = `order-${config[formFactor].order}`;

    if (formFactor === 'mobile') {
      return `${rows} ${columns} ${order}`;
    }

    return `${formFactor}:(${rows} ${columns} ${order})`;
  });

  return styles.join(' ');
};
