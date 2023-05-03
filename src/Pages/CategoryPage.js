import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import Search from "../Components/Search";
import useFetch from "../Components/useFetch";
import { Oval } from "react-loader-spinner";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const {
    data: products,
    isLoading,
  } = useFetch(
    `https://hakika-online-store-api.onrender.com/api/${id}/products`
  );

  return (
    <section className="productPageSection">
      <div className="d-flex justify-content-between productPageSectionIcons">
        <AiOutlineLeft onClick={handleGoBack} />
        <p>Products</p>
        <BiMenuAltRight />
      </div>
      <div className="p-3">
        <Search placeholder={"     Try       'Jacobs Creek'"} />

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
        ) : (
          <div className={"d-flex justify-content-between flex-wrap mt-5"}>
            {products.map((product) => (
              <ProductCard
                handleNavigate={() => handleNavigate(product._id)}
                key={product._id}
                imageLink={product.imageLink}
                productPrice={product.price}
                productTitle={product.name}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;
