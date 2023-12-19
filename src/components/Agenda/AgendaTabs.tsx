import React, { useState } from "react";

interface Tab {
  name: string;
  content: React.ReactNode;
}

interface TabsComponentProps {
  tabs: Tab[];
}

const AgendaTabs = ({ tabs }: TabsComponentProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(
    tabs.length > 0 ? tabs[0].name : null
  );

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            disabled={activeTab === tab.name}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.name}
            style={{ display: activeTab === tab.name ? "block" : "none" }}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgendaTabs;
