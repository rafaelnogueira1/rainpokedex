function CardsContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-4 gap-6 content-start">
      {children}
    </section>
  );
}

export default CardsContainer;
