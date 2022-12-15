const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
  };
const getPagingData = (data_get, page, limit) => {
    const { count: totalItems, rows: data } = data_get;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
    console.log("TOTAL PAGES",data_get,page,limit)
    return {data,  totalItems, totalPages, currentPage };
};

module.exports = {getPagination,getPagingData}