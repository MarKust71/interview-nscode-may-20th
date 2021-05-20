export const fetchCards = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log(response);
    return [];
  }
  const json = await response.json();

  if (!json.success) {
    console.log(json);
    return [];
  }

  return json.cards;
};
