
export default function pagination() {
  return {
    initPage: function () {
      return {
        totalItems: 0,
        length: 10,
        start: 0,
        currentPage: 1,
        fromItem: 1,
        toItem: 10
      };
    },
    setPage: function (pageObj, data) {
      pageObj.totalItems = data.total || data.totalCount;
      pageObj.fromItem = (data.total || data.totalCount) > 0 ? pageObj.start + 1 : pageObj.start;
      pageObj.toItem = pageObj.currentPage * pageObj.length;
      if (pageObj.currentPage * pageObj.length - pageObj.totalItems > 0) {
        pageObj.toItem = pageObj.totalItems;
      }
    },
    pageChanged: function (pageObj, search) {
      pageObj.start = (pageObj.currentPage - 1) * pageObj.length;
    }
  }
};