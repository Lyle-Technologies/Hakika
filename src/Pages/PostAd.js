import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Input,
  Button,
  Box,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

const PostAd = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm();

  const watchCategory = watch("categories", false);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section id="postAdd" className="productPageSection">
      <div className="d-flex justify-content-between productPageSectionIcons">
        <AiOutlineLeft onClick={handleGoBack} />
        <BiMenuAltRight />
      </div>
      <div className="postGoodsContainer mt-4 p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="categories"
            control={control}
            defaultValue={""}
            render={({ field }) => (
              <FormControl required id="categorySelect">
                <InputLabel id="category-select-required-label">
                  Category
                </InputLabel>
                <Select
                  {...field}
                  label="Category *"
                  labelId="category-select-required-label"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Electronics">Electronics</MenuItem>
                  <MenuItem value="Vehicles">Vehicles</MenuItem>
                  <MenuItem value="Phones & Tablets">Phones & Tablets</MenuItem>
                  <MenuItem value="Agriculture & Food">
                    Agriculture & Food
                  </MenuItem>
                  <MenuItem value="Home & Garden">Home & Garden</MenuItem>
                  <MenuItem value="Health & Beauty">Health & Beauty</MenuItem>
                  <MenuItem value="Fashion">Fashion</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <div className="uploadPhotoContainer mt-4 p-2">
            <h6>Add photo</h6>
            <Controller
              name="image"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <div className="d-flex align-items-center justify-content-around">
                  <Input
                    type="file"
                    accept="image/"
                    id="select-image"
                    hidden
                    onChange={(e) => {
                      onChange(e.target.files[0]);
                      setSelectedImage(e.target.files[0]);
                    }}
                  />
                  <label htmlFor="select-image">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload Image
                    </Button>
                  </label>
                  {imageUrl && selectedImage && (
                    <Box className="col-3" mt={1} textAlign={"center"}>
                      <img
                        className="img-fluid"
                        src={imageUrl}
                        alt={selectedImage.name}
                      />
                    </Box>
                  )}
                </div>
              )}
            />
            <p className="mt-4 fs- fw-bold">
              Each picture must not exceed 5 Mb <br />
              Supported formats are *.jpg and *.png
            </p>
          </div>
          {watchCategory ? (
            <div className="additionalInformation">
              <Controller
                name="title"
                control={control}
                defaultValue={""}
                rules={{ required: "Value cannot be empty" }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required
                    className="mb-5 w-100"
                    value={value}
                    inputRef={onChange}
                    onChange={(e) => onChange(e.target.value)}
                    label="Title"
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                defaultValue={""}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    className="w-100 mb-5"
                    required
                    inputRef={onChange}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    label="Description"
                    multiline
                    rows={4}
                    error={error}
                    helperText={error?.message}
                  />
                )}
              />
              <Controller
                name="price"
                control={control}
                defaultValue={""}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required
                    type="number"
                    className="w-100 mb-5"
                    error={!!error}
                    helperText={error?.message}
                    inputRef={onChange}
                    label="Price"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                defaultValue={""}
                rules={{ pattern: /^07\d{8}$/ }}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required
                    placeholder="0712345685"
                    type="tel"
                    variant="outlined"
                    className="w-100 mb-5"
                    error={!!error}
                    helperText={error?.message}
                    inputRef={onChange}
                    label="Your phone number"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  />
                )}
              />
              <Controller
                name="name"
                control={control}
                defaultValue={""}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    disabled
                    className="mb-5 w-100"
                    value={value}
                    inputRef={onChange}
                    onChange={(e) => onChange(e.target.value)}
                    label="Steven Otieno"
                    placeholder="Name"
                  />
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
            POST AD
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostAd;
