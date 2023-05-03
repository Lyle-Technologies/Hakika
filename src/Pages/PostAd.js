import { AiOutlineLeft } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const PostAd = () => {
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
            <p className="fs- fw-bold">First picture - is the title picture</p>
            <img
              src="https://res.cloudinary.com/dogmqg8to/image/upload/v1683107834/Hakika%20Ecommerce/2609995_6324-removebg-preview_1_bso0ec.png"
              className="img-fluid rounded-circle"
              id="uploadImage"
              alt="upload icon"
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
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    className="mb-5 w-100"
                    value={value}
                    inputRef={onChange}
                    onChange={(e) => onChange(e.target.value)}
                    label="Title"
                    helperText="Please enter the title"
                  />
                )}
              />
              <Controller
                name="description"
                control={control}
                defaultValue={""}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    className="w-100 mb-5"
                    required
                    inputRef={onChange}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    label="Description"
                    multiline
                    rows={4}
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
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    required
                    type="tel"
                    variant="outlined"
                    className="w-100"
                    error={!!error}
                    helperText={error?.message}
                    inputRef={onChange}
                    label="Your phone number"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
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
