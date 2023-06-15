const allcomps = require.context('./', true, /\.vue$/)

export default (app: any) => {
  allcomps.keys().forEach((key) => {
    const component = allcomps(key)
    const componentName = key
      .replace('./', '')
      .replace('.vue', '')
      .split('/')
      .slice(-1)[0]
    app.component(componentName, component.default)
  })
}
