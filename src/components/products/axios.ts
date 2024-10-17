import instance from "@/common/axio-interceptor";

export const fetchProducts = async (page: number, category?: string) => {
  try {
    const response = await instance.get("/pads", {
      params: {
        page,
        category: category || undefined,
        limit: 10, // 한 페이지에 10개씩 가져오도록 설정
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
