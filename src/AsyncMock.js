const products = [
    {
        id: 1,
        name: "IPHONE 12",
        category: "apple",
        price: 1100000.00,
        img: "/public/img/iphone-12.png",
        description: "Descripcion de Iphone 12",
        stock: 20,
    },
    {
        id: 2,
        name: "Iphone 13 Pro Max",
        category: "apple",
        price: 1200000.00,
        img: "/public/img/iphone-13promax.png",
        description: "Descripcion de Iphone 13 Pro Max",
        stock: 20,
    },
    {
        id: 3,
        name: "Motorola Edge 40",
        category: "motorola",
        price: 800000.00,
        img: "/public/img/moto-edge40.png",
        description: "Descripcion de Motorola Edge 40",
        stock: 20,
    },
    {
        id: 4,
        name: "Motorola G23",
        category: "motorola",
        price: 230000.00,
        img: "/public/img/moto-g23.png",
        description: "Descripcion de Motorola G23",
        stock: 20,
    },
    {
        id: 5,
        name: "Samsung A23",
        category: "samsung",
        price: 450000.00,
        img: "/public/img/samsung-A23.png",
        description: "Descripcion de Samsung A23",
        stock: 20,
    },
    {
        id: 6,
        name: "Samsung A54",
        category: "samsung",
        price: 350000.00,
        img: "/public/img/samsung-a54.png",
        description: "Descripcion de Samsung A54",
        stock: 20,
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 2500);
    });
}
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === Number(productId)));
        }, 2500);
    });
};
