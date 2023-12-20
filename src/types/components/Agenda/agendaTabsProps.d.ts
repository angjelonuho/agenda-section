export interface TabsComponentProps {
  tabs: Tab[];
}

interface Tab {
  name: string;
  content: React.ReactNode;
}
