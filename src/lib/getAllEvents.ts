export default async function getAllEvents() {
  const result = await fetch("http://localhost:5000/api/v1/event/", {
    next: {
      revalidate: 10,
    },
  });

  return result.json();
}
