const products = [
    {
        id: 1,
        name: "IPHONE 12",
        marca: "apple",
        price: 1100000.00,
        img: "/src/assets/img/iphone-12.png",
        description: "Descripcion de Iphone 12",
    },
    {
        id: 2,
        name: "Iphone 13 Pro Max",
        marca: "apple",
        price: 1200000.00,
        img: "/src/assets/img/iphone-13promax.png",
        description: "Descripcion de Iphone 13 Pro Max",
    },
    {
        id: 3,
        name: "Motorola Edge 40",
        marca: "motorola",
        price: 800000.00,
        img: "/src/assets/img/moto-edge40.png",
        description: "Descripcion de Motorola Edge 40",
    },
    {
        id: 4,
        name: "Motorola G23",
        marca: "motorola",
        price: 230000.00,
        img: "/src/assets/img/moto-g23.png",
        description: "Descripcion de Motorola G23",
    },
    {
        id: 5,
        name: "Samsung A23",
        marca: "samsung",
        price: 450000.00,
        img: "/src/assets/img/samsung-A23.png",
        description: "Descripcion de Samsung A23",
    },
    {
        id: 6,
        name: "Samsung A54",
        marca: "samsung",
        price: 350000.00,
        img: "/src/assets/img/samsung-a54.png",
        description: "Descripcion de Samsung A54",
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2500);
    });
};

export const getProductsByMarca = (marcaId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.marca === marcaId));
        }, 2500);
    });
}