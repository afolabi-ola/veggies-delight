export default function Button({
  onClick,
  children,
  style = 'rounded-full bg-green-700 hover:bg-green-800',
}: {
  onClick: () => void;
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <button
      className={`${style} inline-block  text-white font-semibold px-6 py-3  shadow  transition cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
