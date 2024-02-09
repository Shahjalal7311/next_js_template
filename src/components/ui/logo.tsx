import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import { logoPlaceholder } from '@/lib/placeholders';

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link href="/" className={cn('inline-flex', className)} {...props}>
      <span className="relative h-10 w-32 overflow-hidden md:w-40">
        EC Dumy Logo
      </span>
    </Link>
  );
};

export default Logo;
