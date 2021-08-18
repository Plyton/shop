const catalog = require("../server/services/catalog");

const products = [
    {
        "id_product": 1234545126598,
        "product_name": "Processor",
        "price": 100,
        "img": "https://cs8.pikabu.ru/post_img/big/2017/12/25/5/1514188160141511997.jpg"
    },
    {
        "id_product": 1629145599598,
        "product_name": "Display",
        "price": 120,
        "img": "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/HMUB2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1563827752399"
    },
]

const item = {
    "id_product": 1629145126598,
    "product_name": "Keyboard",
    "price": 18,
    "img": "https://images-na.ssl-images-amazon.com/images/I/81PLqxtrJ3L._SX466_.jpg"
}

describe('Метод catalog.add()', () => {
    it('должен возвращать объект', () => {
        expect(catalog.add(products, item)).toBeObject;
    })
});