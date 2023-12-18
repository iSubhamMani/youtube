const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-[0.4em] bg-[#eee] text-sm text-center font-medium rounded-lg whitespace-nowrap">
        {name}
      </button>
    </div>
  );
};

export default Button;
