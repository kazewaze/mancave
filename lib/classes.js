export default function classes(styles, classNames) {
  if (typeof styles[0] === undefined && typeof classNames[0] === 'string') {
    throw new Error('* You have to provide the styles object and an array of classnames. *');
  }

  return classNames.map(key => styles[key]).join(" ");
}