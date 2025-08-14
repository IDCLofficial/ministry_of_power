'use client'

import Image from "next/image";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { useMemo, useState } from "react";
import newsList from "./newsList";

export type FilterOption = 'Policies' | 'Trending' | 'Latest Updates';

type Props = {
  selectedFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
};

const popularNews = newsList.slice(0, 3).map(({ title, date, img }) => ({ title, date, img }));

export default function NewsSidebar({ selectedFilter, onFilterChange }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = useMemo(() => {
    const policiesCount = newsList.filter((n) => n.badge === 'Policy').length;
    const trendingCount = Math.min(3, newsList.length);
    const latestCount = newsList.length; // all items, newest first handled in grid
    return [
      { name: 'Policies' as const, count: policiesCount },
      { name: 'Trending' as const, count: trendingCount },
      { name: 'Latest Updates' as const, count: latestCount },
    ];
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-[#F9F9F9] p-2 md:p-4 mb-8 md:mb-0">
      {/* Mobile version - hidden on tablet and desktop */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between cursor-pointer" onClick={toggleMobileMenu}>
          <span className="font-medium text-base md:text-[18px]">Categories</span>
          <BiChevronDown className={`text-gray-500 text-[18px] transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
        </div>
        {isMobileMenuOpen && (
          <div className="flex flex-col gap-2 mt-4" id="dropdown">
            <h3 className="font-medium text-base mb-2">CATEGORIES</h3>
            <ul className="space-y-2 mb-4">
              {categories.map((cat, idx) => (
                <li
                  key={idx}
                  className={`flex justify-between text-gray-700 text-sm cursor-pointer rounded px-2 py-1 transition-colors duration-150 ${selectedFilter === cat.name ? 'bg-primary-green/20 font-semibold' : 'hover:bg-gray-100'}`}
                  onClick={() => onFilterChange(cat.name)}
                >
                  <span>{cat.name}</span>
                  <span>{cat.count}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-medium text-base mb-2">POPULAR NEWS</h3>
            <ul className="space-y-3">
              {popularNews.map((news, idx) => (
                <li key={idx} className="flex gap-3 items-center">
                  <Link href={`/news/${news.title}`} className="flex gap-3 items-center">
                    <div className="w-[50px] h-[50px] relative rounded overflow-hidden flex-shrink-0">
                      <Image src={news.img} alt={news.title} width={100} height={100} className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <div className="text-sm font-medium leading-tight line-clamp-2">{news.title}</div>
                      <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Tablet and desktop version - hidden on mobile */}
      <div className="hidden lg:hidden md:block">
        <div className="mb-6 md:mb-8">
          <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">CATEGORIES</h3>
          <ul className="space-y-1 md:space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`flex justify-between text-gray-700 text-xs md:text-[15px] cursor-pointer rounded px-2 py-1 transition-colors duration-150 ${selectedFilter === cat.name ? 'bg-primary-green/20 font-semibold' : 'hover:bg-gray-100'}`}
                onClick={() => onFilterChange(cat.name)}
              >
                <span>{cat.name}</span>
                <span>{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">POPULAR NEWS</h3>
          <ul className="space-y-2 md:space-y-4">
            {popularNews.map((news, idx) => (
              <li key={idx} className="flex gap-2 md:gap-3 items-center">
                <Link href={`/news/${news.title}`} className="flex gap-2 md:gap-3 items-center">
                  <div className="w-[50px] h-[50px] relative rounded overflow-hidden flex-shrink-0">
                    <Image src={news.img} alt={news.title} width={100} height={100} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-xs md:text-[14px] font-medium leading-tight line-clamp-2">{news.title}</div>
                    <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Desktop version */}
      <div className="max-md:hidden lg:block hidden">
        <div className="mb-6 md:mb-8">
          <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">CATEGORIES</h3>
          <ul className="space-y-1 md:space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className={`flex justify-between text-gray-700 text-xs md:text-[15px] cursor-pointer rounded px-2 py-1 transition-colors duration-150 ${selectedFilter === cat.name ? 'bg-primary-green/20 font-semibold' : 'hover:bg-gray-100'}`}
                onClick={() => onFilterChange(cat.name)}
              >
                <span>{cat.name}</span>
                <span>{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-base md:text-[18px] mb-2 md:mb-4">POPULAR NEWS</h3>
          <ul className="space-y-2 md:space-y-4">
            {popularNews.map((news, idx) => (
              <li key={idx} className="flex gap-2 md:gap-3 items-center">
                <Link href={`/news/${news.title}`} className="flex gap-2 md:gap-3 items-center">
                  <div className="w-[50px] h-[50px] relative rounded overflow-hidden flex-shrink-0">
                    <Image src={news.img} alt={news.title} width={100} height={100} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-xs md:text-[14px] font-medium leading-tight line-clamp-2">{news.title}</div>
                    <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}