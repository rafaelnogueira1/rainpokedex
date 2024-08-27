function CardsContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 lg:w-2/2 gap-6 content-start">
      {children}
    </section>
  );
}

export default CardsContainer;
