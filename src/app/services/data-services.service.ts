import {Injectable, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {data, param} from 'jquery';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {any} from 'codelyzer/util/function';

interface ListHeader {
  mother: { name: any, link: any };
  child: { name: any, link: any }[];
}

interface InfoCompany {
  phone: string[];
  email: string[];
  address: string[];
}

interface LinkImg {
  nameImg: any;
  linkImg: any;
}

interface InfoIntroduce {
  nameCompany: any;
  nameIntro: any;
  nameTrust: any;
  businessLicense: any;
}

interface AddressCompany {
  headquarters: any;
  address: any;
  factory: any;
  warehouse: any;
  phoneNumber: any;
  email: any;
}

interface InfoCustomer {
  name: string;
  email: string;
  phone: string;
  content: string;
}

interface ProductDetailsList {
  thungnhuaDanpla:
    {
      typeName: string;
      id: { name: any, link: any };
      img: { name: any, link: any }[];
      address: { name: any };
      price: { name: any };
      sellNumber: { number: any };
      like: boolean;
      star: { number: number };
      discount: { number: number };
      evaluate: { number: number };
      description: { title: string, contentParam: { param1: string, param2: string }[] }[];
    }[];
  vachnhuaDanpla:
    {
      typeName: string;
      id: { name: any, link: any };
      img: { name: any, link: any }[];
      address: { name: any };
      price: { name: any };
      sellNumber: { number: any };
      like: boolean;
      star: { number: number };
      discount: { number: number };
      evaluate: { number: number };
      description: { title: string, contentParam: { param1: string, param2: string }[] }[];
    }[];
  xopEvaPEFoam:
    {
      typeName: string;
      id: { name: any, link: any };
      img: { name: any, link: any }[];
      address: { name: any };
      price: { name: any };
      sellNumber: { number: any };
      like: boolean;
      star: { number: number };
      discount: { number: number };
      evaluate: { number: number };
      description: { title: string, contentParam: { param1: string, param2: string }[] }[];
    }[];
  xopBongKhi:
    {
      typeName: string;
      id: { name: any, link: any };
      img: { name: any, link: any }[];
      address: { name: any };
      price: { name: any };
      sellNumber: { number: any };
      like: boolean;
      star: { number: number };
      discount: { number: number };
      evaluate: { number: number };
      description: { title: string, contentParam: { param1: string, param2: string }[] }[];
    }[];
}
interface PromotionNew {
  paramTitle: any[];
  paramImg: any[];
  paramContent: any[];
  paramTime: any[];
}

@Injectable({
  providedIn: 'root'
})

export class DataServicesService {
  public tickAll = new BehaviorSubject(false);
  public dataAddCartItem$ = new BehaviorSubject<any>([]);
  public currentNameSubject$ = new BehaviorSubject<any>([]);
  public linkSocial = {
    facebook: 'https://www.facebook.com/KT-PACK-111975614638829',
    zalo: '',
    google: '',
    messenger: 'https://www.facebook.com/messages/t/111975614638829',
    youtube: '',
    map: 'https://www.google.com/maps/place/L%C4%83ng+Ch%E1%BB%A7+T%E1%BB%8Bch+H%E1%BB%93+Ch%C3%AD+Minh/@21.0357382,105.8319965,18z/data=!4m9!1m2!2m1!1slang+chu+tich!3m5!1s0x3135ab3bb4a48ba3:0x5ee79f501f900023!8m2!3d21.0369135!4d105.8346703!15sCg1sYW5nIGNodSB0aWNokgERZ292ZXJubWVudF9vZmZpY2U',
  };
  public listHeader: ListHeader[] = [
    {mother: {name: 'TRANG CHỦ', link: '/trangchu'}, child: []},
    {mother: {name: 'GIỚI THIỆU', link: '/gioithieu'}, child: []},
    {
      mother: {name: 'THÙNG NHỰA DANPLA', link: '/thungnhuadanpla'},
      child: [{name: 'Thùng Danpla cố định, nắp chồng', link: '/productType/thungnhuaDanplaCoDinhNapChong'},
        {name: 'Thùng Danpla cố định, nắp chồng, thùng chống tĩnh điện', link: '/productType/thungDanplaCoDinhNapChongChongTinhDien'},
        {name: 'Thùng Danpla cố định, nắp nhựa chống tĩnh điện', link: '/productType/thungDanplaCoDinhNapNhuaChongTinhDien'},
        {name: 'Thùng Danpla cố định, nắp gập', link: '/productType/thungnhuaDanplaCoDinhNapGap'},
        {name: 'Thùng Danpla gập 1', link: '/productType/thungDanplaGap1'},
        {name: 'Thùng Danpla gập 2', link: '/productType/thungDanplaGap2'},
      ]
    },
    {
      mother: {name: 'VÁCH NHỰA DANPLA', link: '/vachnhuadanpla'},
      child: [
        {name: 'Vách ngăn Danpla 1', link: '/productType/vachnhuaDanpla1'},
        {name: 'Vách ngăn Danpla 2', link: '/productType/vachnhuaDanpla2'},
      ]
    },
    {
      mother: {name: 'XỐP EVA - XỐP PE FOAM', link: '/xopEvaPeFoam'},
      child: [
        {name: 'Xốp Pe Foam thường', link: '/productType/xopPeFoamthuong'},
        {name: 'Xốp Pe Foam Chống tĩnh điện', link: '/productType/xopPeFoamchongtinhdien'},
        {name: 'Xốp Pe Foam tấm loại thường và chống tĩnh điện', link: '/productType/xopPeFoamcuonloaithuongchongtinhdien'},
        {name: 'Xốp Pe Foam cuộn  loại thường và chống tĩnh điện', link: '/productType/xopPeFoamtamloaithuongchongtinhdien'},
      ]
    },
    {
      mother: {name: 'XỐP BÓNG KHÍ', link: '/xopbongkhi'},
      child: [
        {name: 'Túi bóng khí chống va đập loại thường', link: '/productType/xopbongkhiloaithuong'},
        {name: 'Tấm bóng khí chống va đập loại chống tĩnh điện', link: '/productType/xopbongkhiloaichongtinhdien'},
      ]
    },
    {mother: {name: 'TIN TỨC', link: '/tintuc'}, child: []},
    {mother: {name: 'LIÊN HỆ', link: '/lienhe'}, child: []},
  ];
  public listProduct = this.listHeader.slice(2, 7);
  public infoCompany: InfoCompany = {
    phone: ['+(84) 393483309', '+(84) 393483309'],
    email: ['ktpack.vn@gmail.com', 'www.ktpack.com'],
    address: ['Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên']
  };
  public infoCustomer: InfoCustomer = {name: '', email: '', phone: '', content: ''};
  public infoCompanyList: ListHeader[] = [
    {
      mother: {name: 'Thông tin công ty', link: ''},
      child: [{name: 'Giới thiệu công ty', link: ''},
        {name: 'Cơ hội việc làm', link: ''},
        {name: 'Ý kiến khách hàng', link: ''},
        {name: 'Danh sách đại lí', link: ''},
        {name: 'Đối tác', link: ''}]
    },
    {
      mother: {name: 'Chính sách chung', link: ''},
      child: [{name: 'Chính sách giao nhận', link: ''},
        {name: 'Chính sách bảo hành', link: ''},
        {name: 'Chính sách đổi trả hàng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/DMCA_logo-grn-btn120w.png'}]
    },
    {
      mother: {name: 'ĐIỀU KHOẢN & QUY ĐỊNH', link: ''},
      child: [{name: 'Quy định bảo mật', link: ''},
        {name: 'Quy định thanh toán', link: ''},
        {name: 'Điều khoản sử dụng', link: ''},
        {name: '', link: './assets/Storage/Upload/banner/da-thong-bao-website-voi-bo-ong-thuong.png'}]
    },
  ];
  public aa = this.infoCompanyList.find(i => i.mother.name === 'Thông tin công ty');

  public addressCompany: AddressCompany = {
    headquarters: 'tp.hưng yên',
    address: 'Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên',
    factory: 'Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên',
    warehouse: 'Nhà máy Nga Nhân Lý Thanh Long, Yên Mĩ, Hưng Yên',
    phoneNumber: '+(84) 393483309 || +(84) 393483309',
    email: 'ktpack.vn@gmail.com',
  };
  public timeWork: string[] = [
    '7h30 - 11h30', '13h30 - 17h30',
  ];
  public phoneNumber: string = this.infoCompany.phone[1];
  public introduceCompany: InfoIntroduce = {
    nameCompany: ' Công ty cổ phần sản xuất KT-PACK',
    nameTrust: 'Đem đến lòng tin và sự hài lòng của Qúy Khách Hàng tới KT-PACK',
    nameIntro: 'Giới thiệu về chúng tôi',
    businessLicense: '@@ GPKD',
  };
  public copyRight = '©Copyright 2021 | CÔNG TY CỔ PHẦN SẢN XUẤT KT-PACK - Số ĐKKD ??? Do sở kế hoạch và đầu tư TP Hà Nội cấp ngày ???';

  public linkImg: LinkImg[] = [
    {nameImg: 'anhsanphamtongquat', linkImg: './assets/Storage/Upload/product/thung-nhua-danpla-pallet-nhua-gia-re.jpg'},
    {nameImg: 'bannerSales1', linkImg: './assets/Storage/Upload/banner/banner_khuyen_mai.png'},
    {nameImg: 'bannerSales2', linkImg: './assets/Storage/Upload/banner/banner_khuyen_mai.png'},
  ];
  public dataProductDetailsList = [
    [
        {
          addCart: false,
          typeName: {name: 'thungnhuaDanplaCoDinhNapChong', id: 'thung'},
          id: {name: 'Thùng nhựa cố định nắp chồng', link: 'thungnhuadanplaCoDinhNapChong'},
          img: [
            {
              name: 'thung_danpla_co_dinh_nap_chong.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong.jpg'
            },
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
        {
        addCart: false,
        typeName: {name: 'thungnhuaDanplaCoDinhNapChong', id: 'thung'},
        id: {name: 'Thùng nhựa cố định nắp chồng', link: 'thungnhuadanplaCoDinhNapChong'},
        img: [
          {
            name: 'thung_danpla_co_dinh_nap_chong.png',
            link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong.jpg'
          },
          {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
          {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
          {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
          {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
          {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
        ],
        address: {name: 'Hưng Yên'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: this.getRandomInt(3, 5)},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                param2: ''
              },
              {
                param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
        {
          addCart: false,
          typeName: {name:  'thungnhuaDanplaCoDinhNapGap', id: 'thung'},
          id: {name: 'Thùng nhựa Danpla cố định, nắp gập', link: 'thungnhuadanplaCoDinhNapGap'},
          img: [
            {
              name: 'thung_danpla_co_dinh_nap_gap.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_gap.png'
            },
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
        {
          addCart: false,
          typeName: {name: 'thungDanplaGap1', id: 'thung'},
          id: {name: 'Thùng nhựa Danpla gập 1', link: 'thungDanplaGap1'},
          img: [
            {name: 'thung_danpla_gap_1_1.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_1_1.png'},
            {name: 'thung_danpla_gap_1_1.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_gap_1_1.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_gap_1_1.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_gap_1_1.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_gap_1_1.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
        {
          addCart: false,
          typeName: {name: 'thungDanplaGap2', id: 'thung'},
          id: {name: 'Thùng nhựa Danpla gập 2', link: 'thungDanplaGap2'},
          img: [
            {name: 'thung_danpla_gap_2_2.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_2_2.png'},
            {name: 'thung_danpla_gap_2_2.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_2_2.png'},
            {name: 'thung_danpla_gap_2_2.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_2_2.png'},
            {name: 'thung_danpla_gap_2_2.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_2_2.png'},
            {name: 'thung_danpla_gap_2_2.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_2_2.png'},
            {name: 'thung_danpla_gap_2_2.png', link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_gap_2_2.png'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
        {
          addCart: false,
          typeName: {name: 'thungDanplaCoDinhNapChongChongTinhDien', id: 'thung'},
          id: {name: 'Thùng Danpla cố định, nắp chồng, Thùng chống tĩnh điện', link: 'thungDanplaCoDinhNapChongChongTinhDien'},
          img: [
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien.png'
            },
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
        {
          addCart: false,
          typeName: {name: 'thungDanplaCoDinhNapNhuaChongTinhDien', id: 'thung'},
          id: {name: 'Thùng Danpla cố định, nắp nhựa chống tĩnh điện', link: 'thungDanplaCoDinhNapNhuaChongTinhDien'},
          img: [
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png'
            },
            {
              name: 'thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png',
              link: './assets/Storage/Upload/product/product_nhuaDanpla/thung_danpla_co_dinh_nap_chong_thung_chong_tinh_dien_color.png'
            },
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
        {
          addCart: false,
          typeName: {name: '', id: 'thung'},
          id: {name: 'empty', link: 'empty'},
          img: [
            {name: '', link: ''},
            {name: '', link: ''}, {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: 5},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'thung'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
    ],
    [
        {
          addCart: false,
          typeName: {name: 'vachnhuaDanpla1', id: 'vach'},
          id: {name: 'Vách ngăn Danpla 1', link: 'vachnhuaDanpla1'},
          img: [
            {name: 'vach_ngan_danpla_1.png', link: './assets/Storage/Upload/product/product_vachngan_Danpla/vach_ngan_danpla_1.png'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Khay danpla là một trong những sản phẩm mà khách hàng đã sản xuất tại KT-PACK. Kích thước và số ngăn hoàn toàn có thể thay đổi theo yêu cầu của khách hàng.',
                  param2: ''
                },
                {param1: '', param2: ''},
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại vách nhựa danpla, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: ' PP'},
                {param1: 'Độ chống tĩnh điện', param2: 'Ω'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'vachnhuaDanpla2', id: 'vach'},
          id: {name: 'Vách ngăn Danpla 2', link: 'vachnhuaDanpla2'},
          img: [
            {name: 'vach_ngan_danpla_2.png', link: './assets/Storage/Upload/product/product_vachngan_Danpla/vach_ngan_danpla_2.png'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'vachnhuaDanpla1', id: 'vach'},
          id: {name: 'Vách ngăn Danpla 1', link: 'vachnhuaDanpla1'},
          img: [
            {name: 'vach_ngan_danpla_1.png', link: './assets/Storage/Upload/product/product_vachngan_Danpla/vach_ngan_danpla_1.png'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Khay danpla là một trong những sản phẩm mà khách hàng đã sản xuất tại KT-PACK. Kích thước và số ngăn hoàn toàn có thể thay đổi theo yêu cầu của khách hàng.',
                  param2: ''
                },
                {param1: '', param2: ''},
                // tslint:disable-next-line:max-line-length
                {
                  // tslint:disable-next-line:max-line-length
                  param1: 'Nếu bạn đang quan tấm đến các loại vách nhựa danpla, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: ' PP'},
                {param1: 'Độ chống tĩnh điện', param2: 'Ω'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'vachnhuaDanpla2', id: 'vach'},
          id: {name: 'Vách ngăn Danpla 2', link: 'vachnhuaDanpla2'},
          img: [
            {name: 'vach_ngan_danpla_2.png', link: './assets/Storage/Upload/product/product_vachngan_Danpla/vach_ngan_danpla_2.png'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'thung_danpla_co_dinh_nap_chong.png', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: '', id: 'vach'},
          id: {name: 'empty', link: 'empty'},
          img: [
            {name: '', link: ''},
            {name: '', link: ''}, {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: 5},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
      {
        addCart: false,
        typeName: {name: '', id: 'vach'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'vach'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'vach'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'vach'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'vach'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'vach'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
    ],
    [

        {
          addCart: false,
          typeName: {name: 'xopPeFoamthuong', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM thường 1', link: 'xopEvaPeFoam_thuong_1'},
          img: [
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_1.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_1.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_1.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_1.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamthuong', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM thường 2', link: 'xopEvaPeFoam_thuong_2'},
          img: [
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_2.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_2.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_2.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_2.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamthuong', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM thường 3', link: 'xopEvaPeFoam_thuong_3'},
          img: [
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_3.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_3.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_3.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_3.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamthuong', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM thường 4', link: 'xopEvaPeFoam_thuong_4'},
          img: [
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_4.png'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_4.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_4.jpg'},
            {name: 'xốp pe foam thường.jpg', link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_thuong_4.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamchongtinhdien', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM chống tĩnh điện 1', link: 'xopEvaPeFoamchongtinhdien1'},
          img: [
            {
              name: 'xốp pe foam chống tĩnh điện 1.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_1.jpg'
            },
            {
              name: 'xốp pe foam chống tĩnh điện 1.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_1.jpg'
            },
            {name: 'xốp pe foam chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'xốp pe foam chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'xốp pe foam chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'xốp pe foam chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamchongtinhdien', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM chống tĩnh điện 2', link: 'xopEvaPeFoamchongtinhdien2'},
          img: [
            {
              name: 'xốp pe foam chống tĩnh điện 2',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_2.jpg'
            },
            {
              name: 'xốp pe foam chống tĩnh điện 2.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_2.jpg'
            },
            {name: 'xốp pe foam chống tĩnh điện 2.jpg', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'xốp pe foam chống tĩnh điện 2.jpg', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'xốp pe foam chống tĩnh điện 2.jpg', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'xốp pe foam chống tĩnh điện 2.jpg', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamcuonloaithuongchongtinhdien', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM cuộn loại thường chống tĩnh điện', link: 'xopEvaPeFoamcuonloaithuongchongtinhdien'},
          img: [
            {
              name: 'xốp pe foam loại cuộn thường chống tĩnh điện 1.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_1.jpg'
            },
            {
              name: 'xốp pe foam loại cuộn thường chống tĩnh điện 1.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_2.jpg'
            },
            {
              name: 'xốp pe foam loại cuộn thường chống tĩnh điện 1.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_chong_tinh_dien_3.jpg'
            },
            {name: 'xốp pe foam loại cuộn thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'xốp pe foam loại cuộn thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'xốp pe foam loại cuộn thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopPeFoamtamloaithuongchongtinhdien', id: 'xopEvaFoam'},
          id: {name: 'xốp PE FOAM tấm loại thường chống tĩnh điện', link: 'xopEvaPeFoamtấmloaithuongchongtinhdien'},
          img: [
            {
              name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg',
              link: './assets/Storage/Upload/product/product_xop_EVA_PE/xop_pe_foam_tam_loai_thuong_va_chong_tinh_dien_1.png'
            },
            {name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_1.jpg'},
            {name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_2.jpg'},
            {name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
            {name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_3.jpg'},
            {name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_4.jpg'},
            {name: 'xốp pe foam tấm loại thường chống tĩnh điện 1.jpg', link: './assets/Storage/Upload/img_demo/img_5.jpg'},
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: '', id: 'xopEvaFoam'},
          id: {name: 'empty', link: 'empty'},
          img: [
            {name: '', link: ''},
            {name: '', link: ''}, {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: 5},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
      {
        addCart: false,
        typeName: {name: '', id: 'xopEvaFoam'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'xopEvaFoam'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'xopEvaFoam'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'xopEvaFoam'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'xopEvaFoam'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },

    ],
    [
        {
          addCart: false,
          typeName: {name: 'xopbongkhiloaithuong', id: 'xopbongkhi'},
          id: {name: 'xốp bóng khí chống va đập loại thường', link: 'xopbongkhiloaithuong'},
          img: [
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_2.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopbongkhiloaichongtinhdien', id: 'xopbongkhi'},
          id: {name: 'xốp bóng khí chống va đập loại chống tĩnh điện', link: 'xopbongkhiloaichongtinhdien'},
          img: [
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_2.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopbongkhiloaithuong', id: 'xopbongkhi'},
          id: {name: 'xốp bóng khí chống va đập loại thường', link: 'xopbongkhiloaithuong'},
          img: [
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_2.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại thường',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_thuong_1.png'
            },
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: 'xopbongkhiloaichongtinhdien', id: 'xopbongkhi'},
           id: {name: 'xốp bóng khí chống va đập loại chống tĩnh điện', link: 'xopbongkhiloaichongtinhdien'},
          img: [
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_2.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
            {
              name: 'xốp bóng khí chống va đập loại chống tĩnh điện',
              link: './assets/Storage/Upload/product/xop_bong_khi/tui_bong_khi_chong_va_dap_loai_chong_tinh_dien_1.png'
            },
          ],
          address: {name: 'Hưng Yên'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: this.getRandomInt(3, 5)},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...',
                  param2: ''
                },
                {
                  param1: 'Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đội ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ],
        },
        {
          addCart: false,
          typeName: {name: '', id: 'xopbongkhi'},
          id: {name: 'empty', link: 'empty'},
          img: [
            {name: '', link: ''},
            {name: '', link: ''}, {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
            {name: '', link: ''},
          ],
          address: {name: 'Hà Nội'},
          price: {name: 'Liên hệ'},
          sellNumber: {number: this.getRandomInt(1, 2)},
          like: false,
          star: {number: 5},
          discount: {number: this.getRandomInt1(10, 30)},
          evaluate: {number: this.getRandomInt1(100, 1000)},
          description: [
            {
              title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
                {
                  param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                  param2: ''
                },
                {
                  param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                  param2: ''
                },
                {
                  param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                  param2: ''
                },
              ]
            },
            {
              title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
                {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
                {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
                {param1: 'Trọng lượng', param2: 'g'},
                {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
                {param1: 'Độ chống tĩnh điện', param2: 'Không'},
                {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
              ]
            },
          ]
        },
      {
        addCart: false,
        typeName: {name: '', id: 'xopbongkhi'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'xopbongkhi'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
      {
        addCart: false,
        typeName: {name: '', id: 'xopbongkhi'},
        id: {name: 'empty', link: 'empty'},
        img: [
          {name: '', link: ''},
          {name: '', link: ''}, {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
          {name: '', link: ''},
        ],
        address: {name: 'Hà Nội'},
        price: {name: 'Liên hệ'},
        sellNumber: {number: this.getRandomInt(1, 2)},
        like: false,
        star: {number: 5},
        discount: {number: this.getRandomInt1(10, 30)},
        evaluate: {number: this.getRandomInt1(100, 1000)},
        description: [
          {
            title: '1. GIỚI THIỆU SẢN PHẨM', contentParam: [
              {
                param1: 'Thùng nhựa danpla được Công ty cổ phần sản xuất KT-PACK chúng tôi thiết kế có nắp nhám dính, giúp cho doanh việc các bạn có thể bảo quản đựng hàng hóa tốt hơn, chống lại những ảnh hưởng của thời tiết, khí hậu , nấm mốc',
                param2: ''
              },
              {
                param1: 'Ngoài những loại Thùng nhựa cố định nắp chồng, cty chúng tôi còn nhiều các mẫu mã thùng nhưa danpla khác nhau.Ví dụ như thùng nhựa danpla chống tĩnh điện, thùng nhựa danpla có nắp tay cầm, khay nhựa danpla...Nếu bạn đang quan tấm đến các loại thùng nhựa danpla có nắp dính, vui lòng liên hệ tới số điện thoại Cty chúng tôi',
                param2: ''
              },
              {
                param1: ' ' + this.infoCompany.phone[0] + ', Hotline:' + this.infoCompany.phone[1] + 'để đỗi ngũ nhân viên kinh doanh và kỹ thuật bên chúng tôi có thể giúp cho bạn tìm được sản phẩm tốt nhất và bảng báo giá.',
                param2: ''
              },
            ]
          },
          {
            title: '2. Thông tin kỹ thuật sản phẩm thùng nhựa danpla có nắp  chồng', contentParam: [
              {param1: 'Kích thước ngoài', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Kích thước trong', param2: 'Sản xuất theo yêu cầu của khách hàng'},
              {param1: 'Độ dày ', param2: '2, 3, 4, 5  mm'},
              {param1: 'Trọng lượng', param2: 'g'},
              {param1: 'Nguyên liệu', param2: '100% nhựa Danpla thường'},
              {param1: 'Độ chống tĩnh điện', param2: 'Không'},
              {param1: 'Màu sắc', param2: 'Trắng, xanh dương, xanh lá, vàng, cam, tím, xám.'},
            ]
          },
        ]
      },
    ],
  ];
  public dataConvert: any[] = [];
  public dataConvert1: any[] = [];
  public promotionNew: PromotionNew = {
    paramTitle: [
      'Chào tháng 8 ! Rinh thùng nhựa đón quà xinh',
      'Kính gửi Quý Khách hàng!',
      'Công ty cổ phần sản xuất KT-PACK xin trân trọng cảm ơn Quý khách hàng đã tin tưởng và sử dụng sản phẩm của chúng tôi trong thời gian qua!'
    ],
    paramContent: [
      'Tháng 8 này, với mong muốn dành sự tri ân tới toàn bộ khách hàng với KT-PACK , chúng tôi xin gửi tới Quý khách hàng chương trình quà tặng "RINH THÙNG NHỰA - ĐÓN QUÀ XINH" với nội dung cụ thể như sau:',
      ' Thời gian bắt đầu chương trình: ',
      'Thời gian hoàn trả quà từ ngày: ',
      'Đối tượng áp dụng:',
      'Quý khách hàng có tổng giá trị đơn hàng THÙNG NHỰA (bao gồm: thùng nhựa đặc, thùng nhựa rỗng, khay linh kiện) phát sinh trong tháng 8/2018 lớn hơn hoặc bằng 20.000.000 VNĐ',
      'Quà tặng: 1 bộ cốc thủy tinh cao cấp trị giá 500.000VNĐ (không có giá trị quy đổi thành tiền mặt)',
      'Quý khách hàng có thể tham khảo thêm thông tin tại Website:',
      'liên hệ phòng Chăm Sóc khách hàng qua số điện thoại:',
    ],
    paramImg: ['./assets/Storage/Upload/banner/khuyenmai-img-tintuc.jpg', './assets/Storage/Upload/banner/icon_khuyenmai.jpg'],
    paramTime: ['01/08/2018 đến hết ngày 31/08/2018.', '01/09/2018 đến hết ngày 30/09/2018'],
  };
  public bannerImgTrangchu = [
    {link: './assets/Storage/Upload/banner/Banner_trangchu_1.jpeg', name: 'img1-trang-chu'},
    {link: './assets/Storage/Upload/banner/Banner_trangchu_2.jpeg', name: 'img2-trang-chu'},
  ];
  public productSale = [
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_1.png', name: 'san pham khuyen mai'},
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_2.png', name: 'san pham khuyen mai'},
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_1.png', name: 'san pham khuyen mai'},
    {link: './assets/Storage/Upload/banner/banner_sale/product_sale_2.png', name: 'san pham khuyen mai'},
  ];
  public dataSearchHeader: any[] = [];
  public dataSearchHeader1: any[] = [];
  public dataS: any[] = [];
  public dataCart: any[] = [];
  public dataCart1: any[] = [];
  public key: any;
  public dataAddCartTotal: any[] = [];
  public counter = 0;
  public tickAll1 = false;
  constructor() {
    this.tickAll.subscribe(item => {
      setTimeout(() => {
        this.tickAll1 = item;
      }, 350);
    });
    this.dataAddCartItem$.subscribe(item => {
      this.dataCart.splice(0, this.dataCart.length);
      item.forEach((item1: any) => {
        item1.quantity = 1;
        item1.checkBoxItem = false;
        this.dataCart.push(item1);
        this.counter = this.dataCart.length;
        console.log('---------ii---------');
        console.log(this.dataCart);
      });
      this.dataCart.forEach(item2 => {
        this.dataCart1.push(item2);
      });
      console.log('----------data--------');
      console.log(this.dataCart1);
      this.dataCart1 = this.unique(this.dataCart1);


    });
    // this.dataConvert = [...this.productDetailsListTotal];
    // tslint:disable-next-line:prefer-for-of
    // this.productDetailsListTotal.forEach((item) => {
    //   const item1 = JSON.parse(JSON.stringify(item));
    //   this.dataConvert1.push(item1);
    // });
    // for (let i = 0; i < this.dataConvert1.length; i++){
    //   this.dataConvert1[i].id.name = this.removeDauTV(this.dataConvert1[i].id.name);
    // }

    this.dataProductDetailsList.forEach((item) => {
      item.forEach((item1) => {
        const obj = JSON.parse(JSON.stringify(item1.id));
        obj.link = '/productDetails/' + obj.link.toString();
        this.dataSearchHeader.push(obj);
      });
      this.listHeader.forEach((item2) => {
        const obj = JSON.parse(JSON.stringify(item2.mother));
        this.dataSearchHeader.push(obj);
      });
      this.listHeader.forEach((itemMother) => {
        itemMother.child.forEach((itemChild) => {
          const obj = JSON.parse(JSON.stringify(itemChild));
          this.dataSearchHeader.push(obj);
        });
      });
    });
    this.dataS = this.currentNameSubject$.getValue();
  }

  public getRandomInt(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(2);
  }
  public getRandomInt1(min: number, max: number): any {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min) + min).toFixed(0);
  }
  public removeDauTV(str: string): any {
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.toString().replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.toString().replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.toString().replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.toString().replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.toString().replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.toString().replace(/đ/g, 'd');
    str = str.toString().replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.toString().replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.toString().replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.toString().replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.toString().replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.toString().replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.toString().replace(/Đ/g, 'D');
    // Combining Diacritical Marks
    str = str.toString().replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.toString().replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)
    return str.toLowerCase();
  }
  public unique(arr: any[]): any{
    const newArr: any[] = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < arr.length; i++){
      if (!newArr.includes(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  public tang(i: number): any{
    console.log('tang');
    this.dataCart1[i].quantity++;
  }
  public giam(i: number): any{
    console.log('giam');
    this.dataCart1[i].quantity--;
  }
  public deleteItemCard(i: number): any{
     this.dataCart1.splice(i, 1);
  }
  public checkBoxItem1(i: number): any{
    // alert(this.dataCart1[i].checkBoxItem);
  }
  public deleteAllItemCart(): any{
    this.dataCart1.splice(0, this.dataCart1.length);
  }
  public checkBoxALL(bool: boolean): any{
    setTimeout(() => {
      console.log('boolean: ' + bool);
      if (bool){
        this.dataCart1.forEach(item => {
          item.checkBoxItem = true;
        });
      }
      else{
        this.dataCart1.forEach(item => {
          item.checkBoxItem = false;
        });
      }
    }, 100);
  }
}
