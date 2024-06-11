export const getSingleEvent = async (id: number) => {
  const result = await fetch(`http://localhost:5000/api/v1/event/${id}`);
  return result.json();
};
