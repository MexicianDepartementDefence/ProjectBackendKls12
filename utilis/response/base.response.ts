import { ResponseSuccess, ResponsePagination } from "src/interface";

class BaseResponse {
  sukses(message: string, data?: any): ResponseSuccess {
    return {
      status: "Success",
      message: message,
      data: data || {},
    };
  }

  paginasi(
    message: string,
    data: any,
    totalData: number,
    page: number,
    pageSize: number
  ): ResponsePagination {
    return {
      status: "Success",
      message: message,
      data: data,
      pagination: {
        total_page : Math.ceil(totalData / pageSize),
        total: totalData,
        page: page,
        pageSize: pageSize,
      },
    };
  }
}

export default BaseResponse;