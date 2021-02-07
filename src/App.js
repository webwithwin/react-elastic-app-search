import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import { SearchProvider, Results, SearchBox } from '@elastic/react-search-ui';
import { Layout } from '@elastic/react-search-ui-views';
import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
  searchKey: process.env.REACT_APP_SEARCH_KEY,
  engineName: process.env.REACT_APP_ENGINE_NAME,
  endpointBase: process.env.REACT_APP_ENDPOINT_BASE,
  cacheResponses: false
})

const config = {
  apiConnector: connector,
}

function App() {
  return (
    <SearchProvider
      config={config}
    >
      <div className="App">
        <Layout
          header={<SearchBox />}
          bodyContent={<Results titleField="title" urlField="nps_link" />}
        />
      </div>
    </SearchProvider>
  );
}

export default App;
