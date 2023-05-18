import { useRouter, useSearchParams } from "next/navigation";
import { client } from "../../lib/client";
import { Product } from "../../components";
import Sidebar2 from "../../components/Sidebar2";

const SearchPage = ({ products }) => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  const encodedSearchQuery = encodeURI(searchQuery || "");

  return (
    <div className="mb-20">
      <div className="invisible half:visible"><Sidebar2/></div>
      <div className="products-heading bg-blue-700">
        <h2 className="font-sans">{searchQuery}</h2>
      </div>
      <div>
        {products.length > 0 ? (
          <div className="products-container">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-[20px] justify-center">
            <p>No results found for "{searchQuery}" Please Try Again.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const searchQuery = context.query.q || "";
  const query = `*[_type == "product" && (name match "${searchQuery}*" || category match "${searchQuery}*")]`;

  const products = await client.fetch(query);

  return {
    props: {
      products,
    },
  };
};

export default SearchPage;
