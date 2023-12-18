import Button from "./Button";

const ButtonList = () => {
  const buttonNames = [
    "All",
    "Sports",
    "Live",
    "Cricket",
    "Gaming",
    "India",
    "Cooking",
    "Travel",
    "Lo-fi",
    "Comedy",
    "Programming",
  ];

  return (
    <div className="flex gap-4">
      {buttonNames.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
