import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const PostAd = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section id="postAdd" className="productPageSection">
      <div className="d-flex justify-content-between productPageSectionIcons">
        <AiOutlineLeft onClick={handleGoBack} />
        <BiMenuAltRight />
      </div>
    </section>
  );
};

export default PostAd;
