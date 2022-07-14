export const getMenuData = async () => {
  const response = await fetch(
    "https://nutrisportcoach.herokuapp.com/api/menu?populate=*"
  );

  if (response.status === 200) {
    return await response.json();
  }

  return {
    status: response.status,
  };
};
