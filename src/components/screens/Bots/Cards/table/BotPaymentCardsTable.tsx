import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetBotPaymentCardsQuery } from 'src/services/user';
import { useFormStorageStore } from 'src/store';

import { useBotPaymentCardsColumnsTable } from './useBotPaymentCardsColumnsTable';

const BotPaymentCardsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: paymentCards, isLoading } = useGetBotPaymentCardsQuery({ page: currentPage });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);

  const columns = useBotPaymentCardsColumnsTable();
  return (
    <UiTable
      dataSource={paymentCards?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Платежные карты"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: paymentCards?.meta.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { BotPaymentCardsTable };
