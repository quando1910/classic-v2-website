export class HeaderData {
  items;

  constructor (data = [[], [], []]) {
    this.items = data
  }

  config () {
    return [
      {
        name: 'Trang chủ',
        path: '/',
        type: 0
      },
      {
        name: 'Bảng giá',
        type: 0,
        children: [
          {
            name: 'Gói chụp Combo',
            path: '/price?title=Combo&type=2'
          },
          {
            name: 'Gói quay',
            path: '/price?title=Videos&type=1'
          },
          {
            name: 'Gói trang phục',
            path: '/price/clothes'
          },
          {
            name: 'Gói trang trí',
            path: '/price/decoration'
          },
          {
            name: 'Gói phụ kiện',
            path: '/price/accessories'
          },
          {
            name: 'Gói makeup/ làm tóc',
            path: '/price/beauty'
          }
        ]
      },
      {
        name: 'Sản phẩm',
        type: 0,
        children: [
          {
            name: 'Ảnh',
            path: '/product/pictures'
          },
          {
            name: 'Video',
            path: '/product/videos'
          },
          {
            name: 'Trang trí',
            path: '/product/decoration'
          },
          {
            name: 'SCHOOL STORIES',
            path: '/product/stories'
          }
        ]
      },
      {
        name: 'Tin tức',
        type: 1,
        children: [
          // {
          //   name: 'Khuyến mãi',
          //   path: '/news/offer'
          // },
          {
            name: 'Trang phục',
            path: '/costumes',
            items: this.items[0]
          },
          {
            name: 'Ý tưởng',
            path: '/idea',
            items: this.items[1]
          },
          {
            name: 'Tạo dáng',
            path: '/posing',
            items: this.items[2]
          }
        ]
      },
      {
        name: 'Tìm ảnh',
        path: '/search',
        type: 0
      },
      {
        name: 'About',
        path: '/about',
        type: 0
      }
    ]
  }
}
