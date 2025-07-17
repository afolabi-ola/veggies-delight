export default function Button({
  onClick,
  children,
  style = 'rounded-full bg-green-700 hover:bg-green-800',
  width = '',
}: {
  onClick: () => void;
  children: React.ReactNode;
  style?: string;
  width?: string;
}) {
  return (
    <button
      className={`${width} ${style} inline-block  text-white font-semibold px-6 py-3  shadow  transition cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
