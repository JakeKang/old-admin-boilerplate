import { createIntl } from '@ant-design/pro-provider';

export const koKRIntl = createIntl('ko-KR', {
  moneySymbol: '₩',

  tableForm: {
    search: '검색',
    reset: '초기화',
    submit: '확인',
    collapsed: '펼치기',
    expand: '접기',
    inputPlaceholder: '입력하세요',
    selectPlaceholder: '선택하세요',
  },
  alert: {
    clear: '초기화',
    selected: '선택됨',
    item: '건',
  },
  pagination: {
    total: {
      range: '총',
      total: '개 / 전체',
      item: '개',
    },
  },
  tableToolBar: {
    leftPin: '상단고정',
    rightPin: '하단고정',
    noPin: '고정되지 않음',
    leftFixedTitle: '상단고정',
    rightFixedTitle: '하단고정',
    noFixedTitle: '고정되지 않음',
    reset: '초기화',
    columnDisplay: '전체선택',
    columnSetting: '컬럼설정',
    fullScreen: '전체화면',
    exitFullScreen: '전체화면 나가기',
    reload: '새로고침',
    density: '간격',
    densityDefault: '기본',
    densityLarger: '크게',
    densityMiddle: '중간',
    densitySmall: '작게',
  },
});
