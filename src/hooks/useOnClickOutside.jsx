import ReactDOM from "react-dom";
export default function Modal({ children, shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button onClick={close}>Close</button>
        {children}
      </div>
    </div>
  ) : null;
}
function App() {
  const [modalShown, toggleModal] = React.useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>modalShown: {modalShown.toString()}</p>
      <button
        onClick={() => {
          toggleModal(!modalShown);
        }}
      >
        Toggle Modal
      </button>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <h1>Look! I'm inside the modal!</h1>
      </Modal>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);