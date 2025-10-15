export const ArrayJewery = [
    {id: 1, name: "Anime", url: '#'},
    {id: 2, name: "Hành Động", url: '#'},
    {id: 3, name: "Bí Ẩn", url: '#'},
    {id: 4, name: "Chiến Tranh", url: '#'},
    {id: 5, name: "Tâm Lí", url: '#'},
    {id: 6, name: "Kinh dị", url: '#'},
];

export interface JeweryType {
    id: number;
    name: string;
    url: string;
}

export const ArrayNation: NationType[] = [
    {id: 1, name: "Viêt Nam", url: '#'},
    {id: 2, name: "Anh", url: '#'},
    {id: 3, name: "Mỹ", url: '#'},
    {id: 4, name: "Nhật Bản", url: '#'},
    {id: 5, name: "Hàn Quốc", url: '#'},
    {id: 6, name: "Trung Quốc", url: '#'},
];

export interface NationType {
    id: number;
    name: string;
    url: string;
}

export interface MovieType {
    id: number;
    nameEN: string;
    nameVN: string;
    moTa?: string;
    doTuoi?: number;
    IMDb?: number;
    YearPhatHanh?: number;
    Jewery?: JeweryType[];
    urlMovie?: string;
    urlAnh: string;
    urlTitile?: string;
    phan?: string;
    tap?: string;
    thoiLuong?: string;
};
export const Movie: MovieType[] = [
    {
        id: 1,
        nameEN: "Alice in Borderland",
        nameVN: "Thế giới không lỗi thoat",
        moTa: "Một game thủ lông bông cùng hai người bạn thân ra họ đã lọt vào thế giới Tokio song song nơi họ buộc phải thi đấu trong một loạt trò chơi tàn bạo để tồn tại",
        doTuoi: 15,
        IMDb: 5.3,
        YearPhatHanh: 2025,
        urlMovie: '#',
        Jewery: [{id: 2, name: "Hành Động", url: '#'},
            {id: 3, name: "Bí Ẩn", url: '#'},
            {id: 4, name: "Chiến Tranh", url: '#'},],
        urlAnh: 'https://static.nutscdn.com/vimg/1920-0/25574669045d5ac3f307f95c03fa8041.jpg',
        urlTitile: 'https://static.nutscdn.com/vimg/0-260/bcf63b1d38066aa554637c5bb05405e5.png',
        phan: "3 phần",
        tap: "6 Tập"
    },
    {
        id: 2,
        nameEN: "The conjuring: Last rites",
        nameVN: "Ám ảnh kinh hoàng",
        moTa: "Một game thủ lông bông cùng hai người bạn thân ra họ đã lọt vào thế giới Tokio song song nơi họ buộc phải thi đấu trong một loạt trò chơi tàn bạo để tồn tại",
        doTuoi: 18,
        IMDb: 6.4,
        YearPhatHanh: 2025,
        urlMovie: '#',
        Jewery: [{id: 2, name: "Hành Động", url: '#'},
            {id: 3, name: "Bí Ẩn", url: '#'},
            {id: 4, name: "Chiến Tranh", url: '#'},],
        urlAnh: 'https://static.nutscdn.com/vimg/1920-0/e16420e2ebceda97f1ba2c6bdba7fe1f.webp',
        urlTitile: 'https://static.nutscdn.com/vimg/0-260/0be4e9a88d972a869d26fa23db3ed60d.png',
        thoiLuong: "1h 50p"
    }
];

export interface TopicsType {
    id: number;
    nameEN: string;
    nameVN?: string;
    url:string;
    favourite: number;
    visits: number;
}

export const ListTopics: TopicsType[] = [
    {id: 1, nameEN: "Marvel", url:"#",favourite:100,visits:300},
    {id: 2, nameEN: "4K", url:"#",favourite:68,visits:435},
    {id: 3, nameEN: "Sitcom", url:"#",favourite:50,visits:233},
    {id: 4, nameEN: "Lồng tiếng cực mạnh", url:"#",favourite:140,visits:932},
    {id: 5, nameEN: "Xuyên không", url:"#",favourite:12,visits:100},
    {id: 6, nameEN: "Cổ trang", url:"#",favourite:160,visits:578},
    {id: 7, nameEN: "Tham vọng", url:"#",favourite:10,visits:112},
    {id: 8, nameEN: "Chữa lành", url:"#",favourite:20,visits:138},
    {id: 9, nameEN: "Phù thủy", url:"#",favourite:500,visits:1200},
    {id: 10, nameEN: "Keo lỳ slayy", url:"#",favourite:0,visits:30},
    {id: 11, nameEN: "9K", url:"#",favourite:118,visits:700},
    {id: 12, nameEN: "Đỉnh lóc", url:"#",favourite:140,visits:500}
]
