import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { BiSearch}  from 'react-icons/bi'

const SearchInput = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(search ? search.get("q") : "");
  const router = useRouter();

  const onSearch = (event) => {
    event.preventDefault();

    if (typeof searchQuery !== "string") {
      return;
    }

    const encodedSearchQuery = encodeURI(searchQuery);
    router.push(`/search?q=${encodedSearchQuery}`);
  };

  return (
    <form onSubmit={onSearch} className=" flex justify-center ">
      <input
        value={searchQuery || ""}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="w-full px-4 py-2 text-black-200 bg-white-200 border-[1px] border-zinc-700  rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 placeholder:text-zinc-400"
        placeholder="What are you looking for?"
      />
      <div  onClick={onSearch} className="flex items-center bg-blue-700 px-5 py-3 rounded-tr-full rounded-br-full" >< BiSearch size={20} className="text-white"/></div>
    </form>
  );
};

export default SearchInput;
