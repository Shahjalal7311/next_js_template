import ProductLoader from '@/components/ui/loaders/product-loader';
import NotFound from '@/components/ui/not-found';
import rangeMap from '@/lib/range-map';
import ProductCard from '@/components/products/cards/card';
import SectionBlock from '@/components/ui/section-block';
import { useTranslation } from 'next-i18next';
import classNames from 'classnames';

interface Props {
  className?: string;
  limit?: number;
}

const products = [
  {
    "id": 1,
    "name": "Handcrafted Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    "slug": "Handcrafted-Trees-Mug",
    "manufacturer": "OHara-Group",
    "itemType": "mug",
    "product_type": "simple",
    "productImg": "mug-400_002e1ecb8bd2.jpg"
  },
  {
    "id": 2,
    "name": "Rustic Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    "slug": "Rustic-Trees-Mug",
    "manufacturer": "OHara-Group",
    "itemType": "mug",
    "product_type": "simple",
    "productImg": "mug-400_002e1ecb8bd2.jpg"
  },
  {
    "id": 3,
    "name": "Rustic Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus laudantium possimus alias dolorem voluptatem similique aut aliquam voluptatem voluptatem omnis id consequatur",
    "slug": "Rustic-Trees-Mug",
    "manufacturer": "OHara-Group",
    "itemType": "mug",
    "product_type": "simple",
    "productImg": "mug-400_002e1ecb8bd2.jpg"
  },
  {
    "id": 4,
    "name": "Rustic Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus la"
  },
  {
    "id": 5,
    "name": "Rustic Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus la"
  },
  {
    "id": 6,
    "name": "Rustic Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus la"
  },
  {
    "id": 7,
    "name": "Rustic Trees Mug",
    "image": {
      "original": ""
    },
    "tags": [
      "Trees"
    ],
    "sale_price": 10.99,
    "price": 10.99,
    "min_price": 9.00,
    "max_price": 12.00,
    "description": "enim corporis voluptatibus la"
  }
];

export default function BestSellingProductsGrid({
  className,
  limit = 10,
}: Props) {
  const { t } = useTranslation('common');
  // const { products, isLoading, error } = products;

  // if (error) return <ErrorMessage message={error.message} />;
  if (!products.length) {
    return (
      <SectionBlock title={t('text-best-selling')}>
        <NotFound text="text-not-found" className="mx-auto w-7/12" />
      </SectionBlock>
    );
  }

  return (
    <SectionBlock title={t('Best Selling')}>
      <div className={classNames(className, 'w-full')}>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
          {!products.length
            ? rangeMap(limit, (i: any) => (
                <ProductLoader key={i} uniqueKey={`product-${i}`} />
              ))
            : products.map((product: any) => (
                <ProductCard product={product} key={product?.id} />
              ))}
        </div>
      </div>
    </SectionBlock>
  );
}
