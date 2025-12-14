"use client";
import { SearchNormal } from "iconsax-reactjs";

const AppSearch = () => {
  const handleSearch = () => {};

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="dark:bg-dark-1-card relative flex h-12 items-center justify-between rounded-full bg-[#F0EEEE] px-4 py-3 lg:w-[311px]">
          <input
            className="placeholder:text-theme-gray w-full pl-8 text-base text-black outline-none dark:text-white"
            name="search"
            type="text"
            placeholder="Search"
          />

          <div className="absolute top-1/2 left-4 -translate-y-1/2">
            <SearchNormal variant="Broken" className="text-theme-gray" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppSearch;
