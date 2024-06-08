import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { client, yandexApi } from 'src/config';

import { YMaps } from '@pbe/react-yandex-maps';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { App } from './App';
import { AntdProvider } from './providers';

import 'src/assets/styles/base/_reset.scss';
import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <Router>
      <AntdProvider>
        <YMaps query={{ apikey: yandexApi }}>
          <App />
        </YMaps>
      </AntdProvider>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>,
);
