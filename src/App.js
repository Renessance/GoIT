import Alert from "./Alert";

function App() {

  return (
    <div>
      <Alert outlined={true} variant="info">Info</Alert>
      <Alert outlined variant="success">Success</Alert>
      <hr/>
      <Alert elevated variant="warning">Warning</Alert>
      <Alert elevated variant="error">Error</Alert>
    </div>
  );
}

export default App;
