'use client';
import { Search, X } from 'lucide-react';
import { memo } from 'react';
import React from 'react';

type SearchBoxProps = { text: string; setText: (text: string) => void };

const SearchBox: React.FC<SearchBoxProps> = memo(
  ({ text, setText }): JSX.Element => {
    return (
      <div className="flex border border-gray-500 rounded-lg p-2 md:w-1/2 w-full gap-2 items-center">
        <Search size={20} />
        <input
          type="text"
          className="focus-visible:outline-none w-full"
          placeholder="Search Box"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {text !== '' && (
          <X className="cursor-pointer" size={20} onClick={() => setText('')} />
        )}
      </div>
    );
  }
);

SearchBox.displayName = 'SearchBox';

export { SearchBox };
