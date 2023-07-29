import spinner from "../assets/svg/Spin-1s-200px.svg";

export const Spinner = (props) => {
  return (
    <div className="bg-black bg-opacity-50 flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 z-40">
      <div>
        <img src={spinner} alt="Loading..." />
      </div>
    </div>
  );
};
