import type { Product } from '@/types';
import dynamic from 'next/dynamic';
const AtomGrid = dynamic(
  () => import('@/components/products/cards/AtomGrid') // furniture extra price
);

interface ProductCardProps {
  product: Product;
  className?: string;
  cardType?: any;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className,
  ...props
}) => {

  return <AtomGrid product={product} {...props} className={className} />;
};
export default ProductCard;
