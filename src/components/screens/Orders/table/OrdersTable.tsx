import React from 'react';
import { HeadTable, SearchListInput } from 'src/components/shareds';
import { UiTable } from 'src/components/ui';
import { useGetOrdersQuery } from 'src/services/user';
import { useSearchListStore } from 'src/store';

import { useOrdersColumnsTable } from './useOrdersColumnsTable';

const OrdersTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const debounceValue = useSearchListStore((state) => state.debounceValue);

  const [isPaid, setIsPaid] = React.useState<boolean | null>(null);
  const [isConfirmed, setIsConfirmed] = React.useState<boolean | null>(null);

  const { data: orders, isLoading } = useGetOrdersQuery({
    page: currentPage,
    uuid: debounceValue,
    is_paid: isPaid,
    is_confirmed: isConfirmed,
  });

  const columns = useOrdersColumnsTable({
    setIsConfirmed,
    setIsPaid,
    isPaid,
    isConfirmed,
  });
  return (
    <UiTable
      dataSource={orders?.data}
      columns={columns}
      loading={isLoading}
      title={() => <HeadTable title="Заказы" childs={[<SearchListInput placeholder="Поиск" />]} />}
      pagination={{
        total: orders?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { OrdersTable };
