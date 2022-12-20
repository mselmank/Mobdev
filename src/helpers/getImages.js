export const getImages = async () => {
  const url = `https://dog.ceo/api/breeds/list/all`;
  const resp = await fetch(url);
  if (!resp.ok) {
    throw new Error(`HTTP error! status: ${resp.status}`);
  }
  const { data } = await resp.json();
  const Allimages = data.map((img) => ({
    url: img.images.downsized_medium.url,
  }));

  return Allimages;
};
