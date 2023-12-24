const formatIsoTimeTo12Hour = (isoTimeString: string, locale: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };

  const formattedTimeWithSpace = new Date(isoTimeString).toLocaleTimeString(locale, options);
  const formattedTime = formattedTimeWithSpace.replace(/\s/g, '');
  return formattedTime;
};

export { formatIsoTimeTo12Hour };
