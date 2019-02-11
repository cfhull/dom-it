import { htmlTags } from './html-tags.js'

const elements = {}

htmlTags.forEach(tag => {
  elements[tag] = (props, ...children)  => {
    const el = document.createElement(tag)
    el.props = Object.keys(props)
      .filter(x => props[x])
      .reduce((obj, key) => Object.assign(obj, {[key]: props[key]}), {})

    Object.keys(props).forEach(prop => {
      if (props[prop]) el[prop] = props[prop]
    })

    if (!Array.isArray(children))
      children = [children]

    children.forEach(child => el.appendChild(child))

    return el
  }
})

export default elements
