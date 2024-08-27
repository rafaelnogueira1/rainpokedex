function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-60 h-fit flex flex-col justify-center items-center text-center gap-3 py-7 rounded-3xl bg-white border border-solid border-gray-200">
      {children}
    </div>
  );
}

export default Card;
