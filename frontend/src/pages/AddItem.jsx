import styled from "styled-components";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

import { useForm } from "react-hook-form";
import Select from "../ui/Select";
import AddTagComponentUI from "../ui/AddTagComponentUI";
import AddImagesComponentUI from "../ui/AddImagesComponentUI";
import { useState } from "react";

function AddItem() {
  const [tags, setTags] = useState([]);
  const [onlyNames, setOnlyNames] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const { register, getValues, formState } = useForm();
  const { errors } = formState;

  function handleAddItems(tag) {
    setTags((tags) => [...tags, tag]);
    setOnlyNames([]);
    tags.map((tag) => setOnlyNames((e) => [...e, tag.tagName]));
  }
  function handleDeleteItem(id) {
    setTags((tags) => tags.filter((tag) => tag.id !== id));
    setOnlyNames([]);
    tags.map((tag) => setOnlyNames((e) => [...e, tag.tagName]));
  }
  function handleDeleteImage(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
  }
  // console.log(onlyNames);
  // const onSelectFile = (e) => {
  //   const selectedFiles = e.target.files;
  //   const selectedFilesArray = Array.from(selectedFiles);

  //   selectedFilesArray.map((image) =>
  //     setSelectedImages((e) => [...e, image.name])
  //   );
  //   // const imagesArray = selectedFilesArray.map((file) =>
  //   //   URL.createObjectURL(file)
  //   // );
  //   console.log(selectedImages);
  //   console.log(selectedFilesArray);
  //   // setSelectedImages(selectedFilesArray);
  // };
  function handleSelectFile(e) {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    selectedFilesArray.map((image) =>
      setSelectedImages((e) => [...e, image.name])
    );
    // const imagesArray = selectedFilesArray.map((file) =>
    //   URL.createObjectURL(file)
    // );
    console.log(selectedImages);
    console.log(selectedFilesArray);
    // setSelectedImages(selectedFilesArray);
  }
  return (
    <Form>
      <FormRow label="Item Images" error={errors?.name?.message}>
        <AddImagesComponentUI
          onSelectFile={handleSelectFile}
          selectedImages={selectedImages}
          onDeleteImage={handleDeleteImage}
        />
      </FormRow>
      <FormRow label="Item name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Price" error={errors?.name?.message}>
        <Input
          type="number"
          id="price"
          {...register("price", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <FormRow label="Discount" error={errors?.name?.message}>
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().price ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>
      <FormRow label="Gender" error={errors?.name?.message}>
        <Select
          options={[
            { value: "unisex", label: "Unisex" },
            {
              value: "male",
              label: "Male",
            },

            {
              value: "female",
              label: "Female",
            },
          ]}
        />
      </FormRow>
      <FormRow label="Apparel type" error={errors?.name?.message}>
        <Select
          options={[
            { value: "head", label: "Head wear" },
            { value: "body", label: "Body wear" },
            { value: "legs", label: "Leg wear" },
            { value: "feet", label: "Feet wear" },
          ]}
        />
      </FormRow>
      <FormRow label="Other tags" error={errors?.name?.message}>
        <AddTagComponentUI
          tags={tags}
          onAddtags={handleAddItems}
          onDeleteTag={handleDeleteItem}
        />
      </FormRow>
    </Form>
  );
}

export default AddItem;
