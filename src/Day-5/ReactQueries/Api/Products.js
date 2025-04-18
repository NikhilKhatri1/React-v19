

const ProductList = [
    {
        title: "product 1",
        id: 1
    },
    {
        title: "product 2",
        id: 2
    },
    {
        title: "product 3",
        id: 3
    },
    {
        title: "product 4",
        id: 4
    },
    {
        title: "product 5",
        id: 5
    }
]

export const FetchProductList = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return ProductList;
};

export const AddNewProduct = async (productName) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newlyCreatedProduct = {
        id: ProductList.length + 1,
        title: productName
    }
    ProductList.push(newlyCreatedProduct);
    return newlyCreatedProduct;
}