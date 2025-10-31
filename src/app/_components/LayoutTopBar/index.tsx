import Link from 'next/link';
import HeaderButton from './_components/HeaderButton';

const LayoutTopBar = () => {
  return (
    <div className="flex flex-col bg-gray-600 gap-3 py-4 px-3 sm:flex-row">
      <Link href={'/'}>
        <HeaderButton value={'Characters'} />
      </Link>
      <Link href={'/about'}>
        <HeaderButton value={'About'} />
      </Link>
    </div>
  );
};

export default LayoutTopBar;
