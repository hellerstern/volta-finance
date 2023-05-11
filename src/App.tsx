import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { AppThemeProvider } from './Provider';
import { Layout } from './layouts/layout';

import { Home } from './pages/Home';
import { StakingPage } from './pages/Staking';
import { ManageStake } from './pages/ManageStake';
import { SearchPage } from './pages/Search';
import { VoltaSwap } from './pages/Swap';
import { Vaults } from './pages/Vaults';
import { ManageVaults } from './pages/ManageValuts';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <AppThemeProvider>
          <Layout>
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Home />} />
              <Route path={PUBLIC_ROUTES.home} element={<Home />} />
              <Route path={PUBLIC_ROUTES.manageStake} element={<ManageStake />} />
              <Route path={PUBLIC_ROUTES.staking} element={<StakingPage />} />
              <Route path={PUBLIC_ROUTES.swap} element={<VoltaSwap />} />
              <Route path={PUBLIC_ROUTES.search} element={<SearchPage />} />
              <Route path={PUBLIC_ROUTES.vaults} element={<Vaults />} />
              <Route path={PUBLIC_ROUTES.manageVaults} element={<ManageVaults />} />
            </Routes>
          </Layout>
        </AppThemeProvider>
      </Router>
    </Suspense>
  );
}

export default App;
