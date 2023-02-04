import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    imageLink:
      "https://res.cloudinary.com/dogmqg8to/image/upload/v1675546704/Hakika%20Ecommerce/pexels-jess-bailey-designs-788946_lhpj4x.jpg",
    name: "Samsung A12",
    price: 5000,
  },
  {
    id: 2,
    imageLink:
      "https://res.cloudinary.com/dogmqg8to/image/upload/v1675474759/Hakika%20Ecommerce/clothes_jyjphr.jpg",
    name: "Jacket",
    price: 2000,
  },
  {
    id: 3,
    imageLink:
      "https://res.cloudinary.com/dogmqg8to/image/upload/v1675550136/Hakika%20Ecommerce/pexels-rodolfo-clix-1625385_kur1m4.jpg",
    name: "Eggs",
    price: 20,
  },
  {
    id: 4,
    imageLink:
      "https://res.cloudinary.com/dogmqg8to/image/upload/v1675550284/Hakika%20Ecommerce/pexels-cottonbro-studio-4068316_xac5yo.jpg",
    name: "Fridge",
    price: 10000,
  },
];

const Products = () => {
  return (
    <div className={"d-flex justify-content-around flex-wrap"}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageLink={product.imageLink}
          productPrice={product.price}
          productTitle={product.name}
        />
      ))}
    </div>
  );
};

export default Products;
