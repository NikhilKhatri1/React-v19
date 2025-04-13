import ProductButton from "./ProductButton";

function ProductItem() {
    const ProductList = [
        { id: "a", productName: "product-1" },
        { id: "b", productName: "product-2" },
        { id: "c", productName: "product-3" }
    ]
    ProductList.map((item) => {
        console.log(`id = ${item.id} and Product = ${item.productName}`)
    })
    return (
        <div>
            <h1>Product-1</h1>
            <ProductButton />
            <ul>
                {
                    ProductList.map((item) => (
                        <li key={item.id}>{item.productName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductItem;