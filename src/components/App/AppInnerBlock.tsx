interface AppInnerBlockProps {
  appInnerBlocks: Api.EventAgenda.IInnerBlock2[];
}

const AppInnerBlock: React.FC<AppInnerBlockProps> = ({ appInnerBlocks }) => {
  const doubleLineBreaks = (content: string) => {
    return content.replace(/<br>/g, '<br><br>');
  };

  const renderBlockContent = (block: any) => {
    if (block.innerHTML) {
      return <div dangerouslySetInnerHTML={{ __html: doubleLineBreaks(block.innerHTML) }} />;
    }

    if (block.innerContent && block.innerContent.length > 0) {
      return block.innerContent.map((content: string, index: number) => (
        <div key={index}>{doubleLineBreaks(content)}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      {appInnerBlocks.map((block, index) => (
        <div key={index} className="innerBlock">{renderBlockContent(block)}</div>
      ))}
    </div>
  );
};

export default AppInnerBlock;
