console.log(React);
console.log(ReactDOM);

const h1 = React.createElement(
  'h1',
  null,
  React.createElement('span', null, 'I am under h1')
);

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

root.render(h1);