import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import {
  Alert,
  Badge,
  Button,
  FloatingLabel,
  Form,
  Image,
} from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";

const PostAd = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const selectedImage = watch("image");
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const watchCategory = watch("categories", false);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("user", data.user);
    formData.append("categories", data.categories);

    setIsLoading(true); // Enable loading state

    fetch(`${process.env.REACT_APP_API_URL}/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Product uploaded successfully");
      })
      .catch((error) => {
        console.error("error uploading image");
      })
      .finally(() => {
        setIsLoading(false); // disable loading state
      });
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section id="postAdd" className="productPageSection">
        <Toaster
          position={"top-right"}
          toastOptions={{
            duration: 1000,
            style: { background: "#363636", color: "white" },
          }}
        />
        <div className="d-flex justify-content-between productPageSectionIcons">
          <AiOutlineLeft onClick={handleGoBack} />
          <BiMenuAltRight />
        </div>
        {isLoading && (
          <div className="beatLoader">
            <BeatLoader
              color={"#f58634"}
              size={70}
              aria-label={"Loading Spinner"}
              data-testid={"loader"}
            />
          </div>
        )}

        {isLoading && <div className={"overlay"}></div>}

        <div className="postGoodsContainer mt-4 p-3">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group id={"categorySelect"}>
              <Form.Select required size={"lg"} {...register("categories")}>
                <option value={""}>None</option>
                <option value={"Electronics"}>Electronics</option>
                <option value={"Vehicles"}>Vehicles</option>
                <option value={"Phones & Tablets"}>Phones & Tablets</option>
                <option value={"Agriculture & Food"}>Agriculture & Food</option>
                <option value={"Home & Garden"}>Home & Garden</option>
                <option value={"Health & Beauty"}>Health & Beauty</option>
                <option value={"Fashion"}>Fashion</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className={"uploadPhotoContainer mt-4 p-2"}>
              <h6>Add photo</h6>
              <Controller
                name="image"
                control={control}
                rules={{ required: "Please upload an image" }}
                render={({ field: { onChange } }) => (
                  <div className="d-flex align-items-center justify-content-around">
                    <Button
                      variant="primary"
                      component="span"
                      onClick={handleButtonClick}
                    >
                      Upload Image
                    </Button>
                    {errors.image && (
                      <Alert variant={"danger"}>{errors.image.message}</Alert>
                    )}
                    <input
                      {...register("image")}
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        onChange(e.target.files[0]);
                      }}
                    />
                  </div>
                )}
              />
              {selectedImage && (
                <div className="mx-auto w-50 mt-4">
                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    alt="Preview"
                    width={200}
                    height={200}
                  />
                </div>
              )}
            </Form.Group>
            {watchCategory ? (
              <div className="additionalInformation">
                <Controller
                  name="title"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Please fill in the title" }}
                  render={({ field }) => (
                    <Form.Group className="mb-5">
                      <FloatingLabel controlId="floatingInput" label="Title">
                        <Form.Control
                          placeholder="Title"
                          type="text"
                          style={{ height: "50px", resize: "none" }}
                          {...field}
                        />
                        {errors.title && (
                          <Badge bg={"danger"} className="w-100">
                            {errors.title.message}
                          </Badge>
                        )}
                      </FloatingLabel>
                    </Form.Group>
                  )}
                />
                <Controller
                  name="description"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Please fill in the description" }}
                  render={({ field }) => (
                    <Form.Group className="mb-5">
                      <FloatingLabel
                        controlId="floatingDescription"
                        label="Description"
                      >
                        <Form.Control
                          placeholder="Description"
                          as="textarea"
                          style={{ height: "150px", resize: "none" }}
                          {...field}
                        />
                        {errors.description && (
                          <Badge bg={"danger"} className="w-100">
                            {errors.description.message}
                          </Badge>
                        )}
                      </FloatingLabel>
                    </Form.Group>
                  )}
                />
                <Controller
                  name="price"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Please enter the price" }}
                  render={({ field }) => (
                    <Form.Group className="mb-5">
                      <FloatingLabel controlId="floatingNumber" label="Price">
                        <Form.Control
                          type="number"
                          placeholder="Price"
                          {...field}
                        />
                        {errors.price && (
                          <Badge bg={"danger"} className="w-100">
                            {errors.price.message}
                          </Badge>
                        )}
                      </FloatingLabel>
                    </Form.Group>
                  )}
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue={""}
                  rules={{
                    pattern: /^07\d{8}$/,
                    required: "Please enter a valid phone number",
                  }}
                  render={({ field }) => (
                    <Form.Group className="mb-5">
                      <FloatingLabel
                        controlId="floatingTelephone"
                        label="Phone Number"
                      >
                        <Form.Control
                          type="tel"
                          placeholder="Phone Number"
                          {...field}
                        />
                        {errors.phoneNumber && (
                          <Badge bg={"danger"} className="w-100">
                            {errors.phoneNumber.message}
                          </Badge>
                        )}
                      </FloatingLabel>
                    </Form.Group>
                  )}
                />
                <Controller
                  name="user"
                  control={control}
                  defaultValue={""}
                  render={({ field }) => (
                    <Form.Group className="mb-5">
                      <FloatingLabel controlId="floatingUser" label="John Doe">
                        <Form.Control
                          placeholder="John Doe"
                          value={"John Doe"}
                          type="text"
                          disabled
                          style={{ height: "50px", resize: "none" }}
                          {...field}
                        />
                      </FloatingLabel>
                    </Form.Group>
                  )}
                />
              </div>
            ) : (
              <div></div>
            )}

            <button
              className="w-100 themeColor text-white fw-bold postAddBtn"
              type="submit"
            >
              POST
            </button>
          </Form>
        </div>
      </section>
    </>
  );
};

export default PostAd;
