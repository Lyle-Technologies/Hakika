import { GoLocation } from "react-icons/go";
import SearchInput from "./SearchInput";

const Banner = () => {
  return (
    <section className="bannerSection d-flex justify-content-center align-items-center">
      <p className="text-white">
        Find Anything in{" "}
        <span className="badge bg-dark">
          <GoLocation />
           Hakika
        </span>
      </p>
      <SearchInput />
    </section>
  );
};

export default Banner;
