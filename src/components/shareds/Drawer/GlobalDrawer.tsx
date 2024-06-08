/* eslint-disable object-curly-newline */
// eslint-disable-next-line object-curly-newline
import { Button, Drawer, Flex, Space } from 'antd';
import { DrawerProps } from 'antd/lib';
import { FormInstance } from 'antd/lib/form/hooks/useForm';
import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { useFormStorageStore, useNumericStringVault, useYandexMapStore } from 'src/store';
import { useShallow } from 'zustand/react/shallow';

import s from './drawer.module.scss';

interface IGlobalDrawerState {
  form: FormInstance<any>;
  width?: number;
  isLoading: boolean;
  isError: boolean;
}

const GlobalDrawer: React.FC<IGlobalDrawerState & DrawerProps> = (_props) => {
  const { form, width, isLoading, isError } = _props;

  const { paramsForm, isDrawer, toggleDrawer, setParamsItem } = useFormStorageStore(
    useShallow((state) => state),
  );
  const setNumericStringVault = useNumericStringVault((state) => state.setNumericStringVault);
  const setMapLocation = useYandexMapStore((state) => state.setMapLocation);

  const onCloseDrawer = () => {
    if (isDrawer) toggleDrawer();
    form.resetFields();
    setParamsItem(null);
    setMapLocation([]);
    setNumericStringVault(null);
  };

  React.useEffect(() => {
    if (!isError && !isLoading) onCloseDrawer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isError]);

  return (
    <Drawer
      {..._props}
      open={isDrawer}
      width={width || 360}
      placement="right"
      closeIcon={<AiOutlineLock />}
      className={s.drawer}
      title={paramsForm ? 'Изменить' : 'Добавить'}
      footer={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <Flex justify="flex-end">
          <Space>
            <Button onClick={onCloseDrawer} aria-label="Cancel">
              Отмена
            </Button>
            <Button type="primary" onClick={form.submit} loading={isLoading} aria-label="Save">
              Сохранить
            </Button>
          </Space>
        </Flex>
      }
      onClose={onCloseDrawer}
    />
  );
};

export { GlobalDrawer };
