'use client';

import { MountainIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

export const Navbar = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="flex items-center flex-wrap justify-between gap-8 px-6 py-3 bg-background border-b lg:px-40">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="w-6 h-6" />
        <span className="text-lg font-bold">Smart Manager</span>
      </Link>

      <div className="flex items-center gap-2 flex-1 max-w-md md:ml-auto">
        <Input
          value={searchValue}
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-md bg-muted focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
        />
        <Button onClick={() => handleSearch(searchValue)}>
          <SearchIcon className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    </header>
  );
};
