/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import Pusher from 'pusher-js';
import React from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchCreateLeadMessage, fetchGetLeadMessages } from './lead-messages.services';

const useGetLeadMessagesPusherQuery = (id: number) => {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const pusher = new Pusher('cf7ca10443b56e6adb68', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe(`telegraph-chats.${id}.messages`);

    const handleCall = (event: any) => {
      queryClient.setQueryData(['lead-message', id], (oldData: any) => {
        const newArray = [...oldData.data, event];
        return { data: newArray };
      });
    };

    channel.bind('chat', handleCall);

    return () => {
      channel.unbind('chat', handleCall);
      pusher.unsubscribe('chat');
    };
  }, [id, queryClient]);
};

const useGetLeadMessagesQuery = (id: number) => {
  useGetLeadMessagesPusherQuery(id);
  return useQuery({
    queryFn: () => fetchGetLeadMessages(id),
    queryKey: ['lead-message', id],
    onError: (err: any) => message.error(err.response.data.message),
    enabled: !!id,
  });
};

const useCreateLeadMessageMutation = () =>
  useMutation({
    mutationFn: fetchCreateLeadMessage,
    onError: (err: any) => message.error(err.response.data.message),
  });

export { useCreateLeadMessageMutation, useGetLeadMessagesQuery };
