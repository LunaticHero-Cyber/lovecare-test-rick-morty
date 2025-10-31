type Props = {
  value: string;
};

const HeaderButton = ({ value }: Props) => (
  <div className="w-fit py-1 px-2 bg-gray-500 cursor-pointer transition-all duration-300 hover:rounded-bl-4xl hover:rounded-tr-4xl">
    <span className="text-gray-900 text-lg font-bold">{value}</span>
  </div>
);

export default HeaderButton;
