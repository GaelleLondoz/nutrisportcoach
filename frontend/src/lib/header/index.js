export const getMenuData = async () => {
  const response = await fetch("http://localhost:1337/api/menu?populate=*");

  if (response.status === 200) {
    return await response.json();
  }

  return {
    status: response.status,
  };
};
