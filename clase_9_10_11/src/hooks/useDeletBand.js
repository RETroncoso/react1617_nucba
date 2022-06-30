import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const deleteBand = (bandId) => {
  return axios.delete(`http://localhost:3006/bandas/${bandId}`, {
    transformResponse: () => bandId,
  });
};

export const useDeleteBand = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteBand, {
    onMutate: async (bandId) => {
      await queryClient.cancelQueries("bands");
      const previousBandsData = queryClient.getQueryData("bands");
      const newQueryData = previousBandsData.data.filter(
        (band) => band.id !== bandId
      );

      queryClient.setQueryData("bands", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: newQueryData,
        };
      });

      return { previousBandsData };
    },

    onError: (_err, _newBand, context) => {
      queryClient.setQueryData("bands", context.previousBandsData);
    },

    onSettled: () => {
      queryClient.invalidateQueries("bands");
    },
  });
};
