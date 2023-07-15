import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Search from "../Components/Search";
import useFetch from "../Components/useFetch";
import { Oval } from "react-loader-spinner";
import { useEffect, useState } from "react";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const { data: products, isLoading } = useFetch(
    `${process.env.REACT_APP_API_URL}/${id}/products`
  );

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  const handleSearchChange = (query) => {
    setSearchQuery(query); // update the search state
    const filteredProducts = products.filter((item) => {
      const productName = item.name.toLowerCase();
      return productName.includes(query.toLowerCase());
    });
    setFilteredProducts(filteredProducts); // update the filtered data state with the filter results
  };

  return (
    <section className="productPageSection">
      <div className="d-flex justify-content-between productPageSectionIcons">
        <AiOutlineLeft onClick={handleGoBack} />
        <p>Products</p>
        <BiMenuAltRight />
      </div>
      <div className="p-3">
        <Search onChange={handleSearchChange} />

        {isLoading ? (
          <div className="rotatingIcon">
            <Oval
              height={80}
              width={80}
              color="#13678A"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#13678A"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className={"d-flex justify-content-between flex-wrap mt-5"}>
            {filteredProducts.map((product) => (
              <ProductCard
                handleNavigate={() => handleNavigate(product._id)}
                key={product._id}
                imageLink={product.imageLink}
                productPrice={product.price}
                productTitle={product.title}
              />
            ))}
          </div>
        ) : (
          <p className={"mt-5 alert alert-danger text-center"}>
            No products available
          </p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
