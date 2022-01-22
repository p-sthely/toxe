const data = {
  style: {
    h1: `
      padding-bottom: 1em;
      color: #333;
    `
  }
}

const template = `
  <h1 style="${data.style.h1}">{{ this.title }}</h1>
`

export default template
