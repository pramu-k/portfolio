import './toggleButton.scss';

const ToggleButton = ({stateFunc,state}) => {
  return (
    <button
      onClick={() => {
        stateFunc(!state);
      }}
    >
      {
        (!state ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-xmark"></i>
        ))
      }
    </button>
  );
}
export default ToggleButton