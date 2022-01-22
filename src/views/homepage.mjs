import hello from '../components/hello.mjs'

const data = {

}

const template = `
  <div class="hello">
    ${hello}
    <p>Welcome to the homepage {{ this.username }}</p>
  </div>
`

export default template
