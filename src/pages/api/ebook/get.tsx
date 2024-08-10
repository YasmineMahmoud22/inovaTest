import TestApi from "@/services/api";

const getEBook = async (req: any, res: any) => {
  try {
    const response = await TestApi(req).get(
      `/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book`
    );
    res.status(200).json({ data: response.data.data });
  } catch (error) {
    throw error;
  }
};

export default getEBook;
