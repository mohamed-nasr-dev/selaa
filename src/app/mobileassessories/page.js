import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    image: '/1.jpg',  // You can place the images in public folder
    title: 'عرض ( محفظة رجالي + ساعة تايتن بلند انسانيك EAR BUDS M10+ )',
    price: '400',
    oldPrice: null,
  },
  {
    id: 2,
    image: '/2.jpg',
    title: 'باوربانك طاقة شمسية 10000 mAh',
    price: '300',
    oldPrice: '400',
  },
  {
    id: 3,
    image: '/3.jpg',
    title: 'Airpods Joyroom Original',
    price: '630',
    oldPrice: null,
  },
  {
    id: 4,
    image: '/4.jpg',
    title: 'باور بنك 10000mAh السحري',
    price: '200',
    oldPrice: null,
  },
  {
    id: 5,
    image: '/5.jpg',
    title: 'شاحن 5 مخارج السحري',
    price: '120',
    oldPrice: null,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">اكسسوارات موبايل</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
