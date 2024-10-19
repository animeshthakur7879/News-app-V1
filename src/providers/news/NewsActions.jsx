const getCurrentDate = () => {
  const requiredDate = new Date(Date.now()).toLocaleDateString("en-In");

  const day = requiredDate.split("/")[0];
  const month = requiredDate.split("/")[1] - 1;
  const year = requiredDate.split("/")[2];

  return `${year}-${month}-${day}`;
};

const currentDate = getCurrentDate();

export const fetchNews = async (topic) => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${topic}&from=${currentDate}&sortBy=publishedAt&apiKey=bed7058104594f75aa4313acc590a94b`
    );
    const data = await res.json();
    return data.articles;
  } catch (error) {
    console.log(error);
  }
};
