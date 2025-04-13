import { Box } from '@mui/material';
import { useCount } from '../zustand/useCount';
import { useCart } from '../zustand/useCart';

function Zustand() {
    // get count from Zustand store
    const count = useCount((state) => state.count); // count will be saved in localstorage and
    //will be updated when the state changes

    const increase = useCount((state) => state.increment);
    const decrease = useCount((state) => state.decrement);
    const reset = useCount((state) => state.reset);

    const listProducts = useCart((state) => state.products);
    const addProduct = useCart((state) => state.addProduct);
    const deleteProduct = useCart((state) => state.removeProduct);
    const clearCart = useCart((state) => state.clearCart);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 2,
                marginTop: 5,
            }}
        >
            <Box>
                <p>Số con gấu ở quanh ta: {count}</p>
                <button onClick={increase}>Tăng</button>
                <button onClick={decrease}>Giảm</button>
                <button onClick={reset}>Reset</button>
            </Box>

            <Box>
                <ul>
                    {listProducts.map((product) => (
                        <li key={product.id}>
                            <span>
                                {product.name} -{product.price}
                            </span>
                            <button onClick={() => deleteProduct(product.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => {
                        addProduct({
                            id: `p-${listProducts.length + 1}`,
                            name: `Gấu bông ${listProducts.length + 1}`,
                            price: 100 + (listProducts.length + 1),
                        });
                    }}
                >
                    Add Product
                </button>
                <button onClick={clearCart}>clear</button>
            </Box>
        </Box>
    );
}

export default Zustand;
