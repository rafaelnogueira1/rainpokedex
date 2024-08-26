import { Navigation, NavigationItem } from "@components/Navigation";
import { Pokeball } from "@components/Pokeball";

function Header() {
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
      <Navigation>
        <NavigationItem>Home</NavigationItem>
        <NavigationItem>Categories</NavigationItem>
        <NavigationItem>Abilities</NavigationItem>
        <NavigationItem>Locations</NavigationItem>
        <NavigationItem>Logout</NavigationItem>
      </Navigation>
      <Pokeball />
    </header>
  );
}

export default Header;
