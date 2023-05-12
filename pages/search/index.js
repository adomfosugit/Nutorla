import { useRouter, useSearchParams } from "next/navigation";
import {client} from '../../lib/client'
import { Product } from "../../components";



const SearchPage = ({products}) => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  

  const encodedSearchQuery = encodeURI(searchQuery || "");

  console.log ("SEARCH PARAMS", encodedSearchQuery);


  return (
    <div className='products-container'>
         
    {products.map((product) => <Product  key =
    {product._id} product = {product}/>)}
 </div>
  );
};
export const getServerSideProps = async (context) => {
  const searchQuery = context.query.q || "";
  const query = `*[_type == "product" && name match "${searchQuery}*" ]`;
  const products = await client.fetch(query);

  return {
    props: {
      products
    }
  };
};
export default SearchPage;