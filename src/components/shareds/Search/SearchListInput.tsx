/* eslint-disable react-hooks/exhaustive-deps */
import { Input, Space } from 'antd';
import { InputProps } from 'antd/lib';
import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineClear } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { UiButton } from 'src/components/ui';
import { useDebounce } from 'src/hooks';
import { useSearchListStore } from 'src/store';

const SearchListInput: React.FC<InputProps> = (_props) => {
  const { pathname } = useLocation();
  const searchValue = useSearchListStore((state) => state.searchValue);
  const setSearchValue = useSearchListStore((state) => state.setSearchValue);

  const debounceValue = useDebounce(searchValue);

  const setDebounceValue = useSearchListStore((state) => state.setDebounceValue);

  const onClearInput = () => {
    setSearchValue({ searchValue: '' });
    setDebounceValue({ debounceValue: '' });
  };

  React.useEffect(() => {
    setSearchValue({ searchValue: '' });
    setDebounceValue({ debounceValue: '' });
  }, [pathname]);
  React.useEffect(() => {
    setDebounceValue({ debounceValue });
  }, [debounceValue]);
  return (
    <Space.Compact>
      <Input
        {..._props}
        prefix={<IoIosSearch />}
        value={searchValue}
        onChange={(e) => setSearchValue({ searchValue: e.target.value })}
      />
      <UiButton danger icon={<MdOutlineClear />} onClick={onClearInput} aria-label="Clear" />
    </Space.Compact>
  );
};

export { SearchListInput };
