function generateElement(tag, { children, ...properties }) {
  const stringProperties = Object.entries(properties)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  if (children) {
    return `<${tag} ${stringProperties}>${children}</${tag}>`;
  }

  return `<${tag} ${stringProperties}/>`;
}

module.exports = { generateElement };
