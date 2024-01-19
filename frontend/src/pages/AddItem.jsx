import styled from "styled-components";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import RealSelect from "../ui/RealSelect";
import Select from "../ui/Select";
import AddTagComponentUI from "../ui/AddTagComponentUI";
import AddImagesComponentUI from "../ui/AddImagesComponentUI";
import Button from "../ui/Button";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Textarea from "../ui/Textarea";

function AddItem() {
  const [tags, setTags] = useState([]);
  const [onlyNames, setOnlyNames] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesNames, setSelectedImagesNames] = useState(null);
  const [genderValue, setGenderValue] = useState("unisex");
  const [bodyTagValue, setBodyTagValue] = useState("head");
  const { register, handleSubmit, getValues, formState } = useForm();
  const { errors } = formState;

  function handleAddItems(tag) {
    setTags((tags) => [...tags, tag]);
    setOnlyNames((names) => [...names, tag.tagName]);
  }

  function handleSetTagsOnlyNames() {
    setOnlyNames([]);
    tags.map((tag) => setOnlyNames((e) => [...e, tag.tagName]));
  }
  function handleDeleteItem(id) {
    setTags((tags) => tags.filter((tag) => tag !== id));
  }

  function handleDeleteImage(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
  }

  function handleSelectFile(e) {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    // selectedFiles.map((image) => setSelectedImagesNames((e) => [...e, image]));
    // selectedFilesArray.map((image) =>
    //   setSelectedImagesNames((e) => [...e, image])
    // );
    const imagesArray = selectedFilesArray.map((file) =>
      URL.createObjectURL(file)
    );
    setSelectedImages(imagesArray);

    setSelectedImagesNames(selectedFilesArray);
  }

  function onSubmit(data) {
    const formData = new FormData();
    // console.log(data);
    // console.log(formData);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);
    formData.append("genderTag", data.genderTag);
    formData.append("bodyTag", data.bodyTag);
    formData.append("otherTags", tags);
    selectedImagesNames.map((img, i) =>
      formData.append("images", selectedImagesNames[i])
    );
    // formData.append("images", selectedImagesNames[0]);
    // formData.append("images", selectedImagesNames[1]);
    // formData.append("images", selectedImagesNames[2]);
    // formData.append("images", selectedImagesNames[3]);

    // console.log(selectedImagesNames);
    axios
      .post("http://localhost:3000/api/v1/products", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <FormRow label="Description" error={errors?.name?.message}>
        <Textarea type="text" id="description" {...register("description")} />
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
      {/* {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().price ||
              "Discount should be less than regular price",
          } */}
      <FormRow label="Gender" error={errors?.name?.message}>
        <RealSelect
          id="genderTag"
          onChange={(e) => setGenderValue(e.target.value)}
          {...register("genderTag", {
            required: "This field is required",
          })}
        >
          <option value="unisex">Unisex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </RealSelect>
        {/* <Select
          // {...register("genderTag", {
          //   required: "This field is required",
          // })}
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
        /> */}
      </FormRow>
      <FormRow label="Apparel type" error={errors?.name?.message}>
        <RealSelect
          id="bodyTag"
          onChange={(e) => setBodyTagValue(e.target.value)}
          {...register("bodyTag", {
            required: "This field is required",
          })}
        >
          <option value="head">Head</option>
          <option value="body">Body</option>
          <option value="legs">Legs</option>
          <option value="feet">Feet</option>
        </RealSelect>
        {/* <Select
          id="bodyTag"
          // {...register("bodyTag", {
          //   required: "This field is required",
          // })}
          options={[
            { value: "head", label: "Head wear" },
            { value: "body", label: "Body wear" },
            { value: "legs", label: "Leg wear" },
            { value: "feet", label: "Feet wear" },
          ]}
        /> */}
      </FormRow>
      <FormRow label="Other tags" error={errors?.name?.message}>
        <AddTagComponentUI
          tags={tags}
          onAddtags={handleAddItems}
          onDeleteTag={handleDeleteItem}
          onSetTagsOnlyNames={handleSetTagsOnlyNames}
        />
      </FormRow>
      {/* <Input
        type="hidden"
        id="otherTags"
        value={test}
        {...register("otherTags")}
      /> */}
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          // onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>Create new Item</Button>
      </FormRow>
    </Form>
  );
}

export default AddItem;
