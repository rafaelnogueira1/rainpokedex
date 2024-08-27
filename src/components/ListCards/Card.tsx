function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:w-60 lg:w-52 xl:w-64 h-fit flex flex-col justify-center items-center text-center gap-3 p-6 rounded-3xl bg-white border border-solid border-gray-200">
      {children}
    </div>
  );
}

export default Card;
