import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // function for reuseability of code
  function setAttributes(placement) {
    return {
      position: placement,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
  }
  //single function for single button
  const info = () => toast.info("Wow so easy!", setAttributes("top-left"));
  const success = () =>
    toast.success("Wow so easy!", setAttributes("top-center"));
  const error = () => toast.error("Wow so easy!", setAttributes("top-right"));
  const defaultToast = () =>
    toast("Wow so easy!", setAttributes("bottom-right"));
  const dark = () => toast.dark("Wow so easy!", setAttributes("bottom-center"));
  const warning = () =>
    toast.warning("Wow so easy!", setAttributes("bottom-left"));

  // allPopups will be shown for single button
  function all() {
    const info = () => toast.info("Wow so easy!", setAttributes("top-left"));
    info();
    const success = () =>
      toast.success("Wow so easy!", setAttributes("top-center"));
    success();
    const error = () => toast.error("Wow so easy!", setAttributes("top-right"));
    error();
    const defaultToast = () =>
      toast("Wow so easy!", setAttributes("bottom-right"));
    defaultToast();
    const dark = () =>
      toast.dark("Wow so easy!", setAttributes("bottom-center"));
    dark();
    const warning = () =>
      toast.warning("Wow so easy!", setAttributes("bottom-left"));
    warning();
  }
  return (
    <div className="App">
      <h1>React-Toastify</h1>
      <div class="buttons">
        <button className="info" onClick={info}>
          Info
        </button>
        <button className="success" onClick={success}>
          Succes
        </button>
        <button className="danger" onClick={error}>
          Danger
        </button>
        <button className="warning" onClick={warning}>
          Warning
        </button>
        <button className="default" onClick={defaultToast}>
          Default
        </button>
        <button className="Dark" onClick={dark}>
          Dark
        </button>
        <button className="All" onClick={all}>
          All
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
