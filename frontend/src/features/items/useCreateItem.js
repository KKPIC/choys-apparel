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
