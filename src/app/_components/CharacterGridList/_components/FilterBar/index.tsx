import './style.css';

import { KeyboardEventHandler, useEffect, useState } from 'react';

import { CharacterGender } from '@/interfaces/CharacterGender';
import { CharacterStatus } from '@/interfaces/CharacterStatus';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  selectedStatus?: CharacterStatus;
  setSelectedStatus: (status?: CharacterStatus) => void;
  selectedGender?: CharacterGender;
  setSelectedGender: (status?: CharacterGender) => void;
  nameSearch?: string;
  onSearch: (searchName?: string) => void;
};

const FilterBar = ({
  selectedStatus,
  setSelectedStatus,
  selectedGender,
  setSelectedGender,
  nameSearch: paramNameSearch,
  onSearch,
}: Props) => {
  const [nameSearch, setNameSearch] = useState(paramNameSearch);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === 'Enter') {
      // Prevent the default form submission behavior if the input is part of a form
      event.preventDefault();

      onSearch(nameSearch);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col justify-center gap-0.5">
        <span className="text-lg font-semibold text-gray-800">Status</span>
        <div className="inline-flex rounded-md" role="group">
          <button
            type="button"
            className={`button-group-btn start ${selectedStatus === 'alive' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedStatus(
                selectedStatus !== 'alive' ? 'alive' : undefined,
              )
            }
          >
            Alive
          </button>
          <button
            type="button"
            className={`button-group-btn ${selectedStatus === 'dead' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedStatus(selectedStatus !== 'dead' ? 'dead' : undefined)
            }
          >
            Dead
          </button>
          <button
            type="button"
            className={`button-group-btn end ${selectedStatus === 'unknown' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedStatus(
                selectedStatus !== 'unknown' ? 'unknown' : undefined,
              )
            }
          >
            Unknown
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-0.5">
        <span className="text-lg font-semibold text-gray-800">Gender</span>
        <div className="inline-flex rounded-md" role="group">
          <button
            type="button"
            className={`button-group-btn start ${selectedGender === 'male' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedGender(selectedGender !== 'male' ? 'male' : undefined)
            }
          >
            Male
          </button>
          <button
            type="button"
            className={`button-group-btn ${selectedGender === 'female' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedGender(
                selectedGender !== 'female' ? 'female' : undefined,
              )
            }
          >
            Female
          </button>
          <button
            type="button"
            className={`button-group-btn ${selectedGender === 'genderless' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedGender(
                selectedGender !== 'genderless' ? 'genderless' : undefined,
              )
            }
          >
            Genderless
          </button>
          <button
            type="button"
            className={`button-group-btn end ${selectedGender === 'unknown' ? 'selected' : ''}`}
            onClick={() =>
              setSelectedGender(
                selectedGender !== 'unknown' ? 'unknown' : undefined,
              )
            }
          >
            Unknown
          </button>
        </div>
      </div>

      <div className="flex flex-col item-center gap-0.5">
        <span className="text-lg font-semibold text-gray-800">Name</span>

        <div className="flex">
          <input
            className="input-name"
            onChange={(event) => setNameSearch(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="search-btn" onClick={() => onSearch(nameSearch)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
