export function render(element, root){
  const htmlElement = document.createElement(element.type)
  for(const prop in element.props)
    htmlElement[prop] = element.props[prop]
  for(const child of element.childs)
    if(typeof child === "string") htmlElement.append(child)
    else render(child, htmlElement)   
  root.append(htmlElement)
}

export function createElement(tag){
  return document.createElement(tag)
}