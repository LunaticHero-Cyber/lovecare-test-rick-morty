import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  navigateBack: () => void;
  navigateNext: () => void;
  paramPage: string;
};

const PageNav = ({ navigateBack, navigateNext, paramPage }: Props) => (
  <div className="flex flex-none justify-between">
    <button
      onClick={navigateBack}
      disabled={Number(paramPage) <= 1}
      className="text-gray-800 hover:text-gray-500 active:text-gray-400 disabled:text-gray-500"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
      <span>Back</span>
    </button>

    <span className="text-gray-800">{`Page #${paramPage}`}</span>

    <button
      onClick={navigateNext}
      className="text-gray-800 hover:text-gray-500 active:text-gray-400 disabled:text-gray-500"
    >
      <span>Next</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  </div>
);

export default PageNav;
