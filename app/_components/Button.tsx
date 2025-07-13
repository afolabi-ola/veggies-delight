export default function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className='inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-green-800 transition cursor-pointer'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
