import { Pagination as AntPagination } from 'antd';

function Pagination() {
  return (
    <AntPagination
      defaultCurrent={1}
      total={151}
      pageSize={20}
      size='small'
      showSizeChanger={false}
      showLessItems
      responsive
    />
  );
}

export default Pagination;