import { UserType } from "../types/user";
import { useSimpleQuery } from "./core/useSimpleQuery";

export const useUser = () => {
  return useSimpleQuery<UserType>(`/users/Alice`, ["user"]);
};
