type Props = {
  label: string;
  value: string;
};

const ItemDetail = ({ label, value }: Props) => (
  <p>
    <span className="text-gray-500 text-lg">{`${label}: `}</span>
    <br className="flex sm:hidden" />
    <span className="text-gray-900 text-lg font-bold">{value}</span>
  </p>
);

export default ItemDetail;
