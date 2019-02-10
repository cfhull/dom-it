# dom-it
dom-it is a helper library to create dom elements in a declarative and functional manner.

## Usage
`npm i -S @cfhull/dom-it`


```
import elements from '@cfhull/dom-it'

// Can take any valid html element
const { div, span, label, input, ...} from elements

const render = () {
  div({ id: 'app' },
    div({ className: 'header' },
      span({
        className: 'title',
        innerHTML: 'This is a page title',
      })
    )
    div({ className: 'content'},
      input({
        className: 'form-control',
        placeholder: 'placeholder text',
      })
    )
  )
}
```
