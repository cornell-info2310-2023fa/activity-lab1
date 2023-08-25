const h1 = (
  <h1>Dynamic Website</h1>
);

const p = (
  <p>This is a <strong>client-side rendered</strong> website.</p>
);

function DateRefresh() {
  const [date, setDate] = React.useState(new Date().toString());

  function updateDate() {
    setDate(new Date().toString());
  }

  return (
    <>
      <p>{date}</p>
      <button onClick={updateDate}>Update Date</button>
    </>
  );
}
const dateRefresh = <DateRefresh />;

ReactDOM.createRoot(document.body).render([h1, p, dateRefresh]);
