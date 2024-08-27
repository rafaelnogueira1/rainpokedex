export default function Loading() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-white fixed z-50">
      <img
        src="/assets/images/loading-pokeball.gif"
        alt="logo"
        width={250}
        height={350}
      />
    </div>
  );
}
