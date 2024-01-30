// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { createEditCabin } from "../../services/apiItem";

// export function useCreateItem() {
//   const queryClient = useQueryClient();

//   const { mutate: createItem, isPending: isCreating } = useMutation({
//     mutationFn: ({ formData }) => createEditCabin({ formData }),
//     onSuccess: () => {
//       toast.success("New Item succesfully added");
//       queryClient.invalidateQueries({
//         queryKey: ["product"],
//       });
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   return { isCreating, createItem };
// }

import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiItem";
import axios from "axios";

// export function useCreateItem(
//   name,
//   price,
//   description,
//   genderTag,
//   bodyTag,
//   tags,
//   imageArray
// ) {
//   console.log(name);
//   //   const url = "http://localhost:3000/api/v1/products";
//   //   // const hasImagePath
//   //   const { data, error } = await axios.post(url, formData);

//   //   if (error) throw new Error(error.message);

//   //   return data;
// }
