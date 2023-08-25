const h1 = React.createElement('h1', null, 'Dynamic Website');
const p = React.createElement('p', null, 'This is a ',
  React.createElement('strong', null, 'client-side rendered'), ' website.');
const p_date = React.createElement('p', null, new Date().toString());

ReactDOM.render([h1, p, p_date], document.body);
