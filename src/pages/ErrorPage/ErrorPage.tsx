function ErrorPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 w-96">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
