import { useAuth } from "@/hooks";
import { Navigation } from "@/components/Navigation";
import { Pokeball } from "@/components/Pokeball";

function Header() {
  const { logout } = useAuth();

  return (
    <header className="flex justify-between items-center p-4 max-w-[1200px] mt-4 mx-auto rounded-2xl bg-white">
      <h1>
        <a href="/">
          <img
            src="/assets/images/logo.png"
            alt="Pokemon"
            width={150}
            height={100}
          />
        </a>
      </h1>
      <Navigation.Container>
        <Navigation.Item href="/">Home</Navigation.Item>
        <button
          type="button"
          onClick={logout}
          name="logout"
          className="font-navigation uppercase text-md text-blue-900"
        >
          Logout
        </button>
      </Navigation.Container>
      <Pokeball />
    </header>
  );
}

export default Header;
