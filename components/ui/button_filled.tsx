function ButtonFilled({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--primary)] text-white px-4 py-2 rounded-md"
    >
      {text}
    </button>
  );
}

export default ButtonFilled;
