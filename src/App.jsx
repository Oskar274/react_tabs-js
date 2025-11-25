import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useState } from 'react';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabList = ({ tabuls, selectedTab, setSelectedTab }) => {
  const activeTab = tabuls.find(tab => tab.id === selectedTab);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabuls.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTab ? 'is-active' : ''}
              data-cy="Tab"
            >
              <button
                type="button"
                className="tab-button"
                data-cy="TabLink"
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};

export const App = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab}</h1>
      <TabList
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};
