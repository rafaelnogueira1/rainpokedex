function CardsContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-2 w-full xl:grid-cols-3 gap-6 content-start">
      {children}
    </section>
  );
}

export default CardsContainer;
