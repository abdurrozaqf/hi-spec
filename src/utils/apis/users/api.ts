import { Response } from "@/utils/types/api";
import { User, tokenUser, AllUser, UpdateUserSchema } from "./types";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";

export const getUser = async () => {
  try {
    const response = await axiosWithConfig.get(`/users/`);

    return response.data as Response<AllUser>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getDetailUser = async (user_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/user/${user_id}`);

    return response.data as Response<tokenUser>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const updateUser = async (body: UpdateUserSchema) => {
  try {
    const response = await axiosWithConfig.patch(`/users`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const deleteUser = async (user_id: number) => {
  try {
    const response = await axiosWithConfig.delete(`/users/${user_id}`);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
