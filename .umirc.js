
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'umi2-dva-user-dashboard',
      dll: false,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
}
