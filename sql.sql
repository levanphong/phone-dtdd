SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `loaiphukien` (  
    `id_loaiphukien` int(11) NOT NULL , 
    `tenloaiphukien` varchar(50) NOT NULL
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
    CREATE TABLE `phukien`(
        `id_phukien` int(11) NOT NULL ,
        `id_loaiphukien` int(11) NOT NULL ,
        `tenphukien` varchar(50) NOT NULL , 
        `gia` int(11) NOT NULL , 
        `soluongdanhgia` int(11) NOT NULL
        )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
CREATE TABLE `donhang`(
    `id_donhang` int(11) NOT NULL ,
    `id_user` int(11) NOT NULL,
    `ten` varchar(50) NOT NULL ,
    `sodienthoai` varchar(50) NOT NULL , 
    `email` varchar(50) NOT NULL,
    `tinhthanhpho` varchar(50) NOT NULL ,
     `quanhuyen` varchar(50) NOT NULL ,
     `phuongxa` varchar(50) NOT NULL ,
    `diachicuthe` varchar(50) NOT NULL ,
    `date` varchar(50) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    CREATE TABLE `codesodienthoai` (
        `id_codesodienthoai` int(11) NOT NULL ,
        `codesodienthoai` int(11) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
CREATE TABLE `donhangdadatmua`(
    `id_donhangdadatmua` int(11) NOT NULL ,
    `id_donhang` int(11) NOT NULL , 
    `ghichu` varchar(100) , 
    `date` varchar(100) NOT NULL , 
    `trangthaidonhang` varchar(100) NOT NULL 
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4; 
CREATE TABLE `danhgia` (
        `id_danhgia` int(11) NOT NULL ,
       `id_user` int(11) NOT NULL ,
    `id_dienthoai` int(11) NOT NULL ,
    `tendanhgia` varchar(5) NOT NULL,
        `danhgia` varchar(50) NOT NULL ,
        `date` varchar (50) NOT NUll ,
        `saodanhgia` int (11) NOt NULL    
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   
CREATE TABLE `chitietdonhang`(
      `id_chitietdonhang` int(11) NOT NULL ,
    `id_donhangdadatmua` int(11) NOT NULL ,
     `id_donhang` int(11) NOT NULL ,
    `id_chitietdienthoai` int(11) NOT NULL ,
    `tendienthoai` varchar(50) NOT NULL ,
    `ram` int(11) NOT NULL , 
    `giakhuyenmai` int(11) NOT NULL,
    `soluongsanpham` int(11) NOT NULL ,
     `giaban` int(11) NOT NULL
                 
   
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `user` (
   `id_user` int (11) NOT NULL ,
  `taikhoan` varchar(50) NOT NULL,
  `hovaten` varchar(20) NOT NULL,
  `matkhau` varchar(50) NOT NULL,
    `email` varchar(50) NOT NULL , 
    `gioitinh` varchar(50) NOT NULL , 
    `sodienthoai` int(50) NOT NULL  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `chitietdienthoai`(
    `id_chitietdienthoai` int(11) NOT NULL ,
    `id_dienthoai` int(11) NOT NULL ,
    `id_ram` int(11) NOT NULL ,
    `id_mau` int(11) NOT NULL ,
    `id_kichthuoc`int(11) NOT NULL,
    `manhinh` int(11) NOT NULL,  
    `hinhanh` varchar(1000) NOT NULL,
    `soluong` int(11) NOT NULL,
    `trangthai` varchar(50) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `giohang` (
    `id_giohang` int(11) NOT NULL , 
    `id_user` int(11) NOT NULL , 
    `tendienthoai` varchar(50) NOT NULL , 
    `tenloaidienthoai` varchar(50) NOT NULL , 
    `ram` int(11) NOT NULL , 
    `mau` varchar(50) NOT NULL , 
    `hinhanh` varchar(1000) NOT NULL,
    `soluong` int(11) NOT NULL ,
    `noidung` varchar(50) NOT NULL , 
    `giakhuyenmai` int(50) NOT NULl
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `loaimau`(
    `id_loaimau` int(11) NOT NULL ,
    `id_loairam` int(11) NOT NULL ,
    `id_dienthoai` int (11) NOT NULL ,
    `id_mau` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `chitietram` (
    `id_chitietram` int(11) NOT NULL,
    `id_ram` int(11) NOT NULL ,
    `tenram` int(11) NOT NULL ,
    `giaban` int(11) NOT NULL
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `mau`(
    `id_mau` int(11) NOT NULL ,
    `tenmau` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `kichthuoc`(
  `id_kichthuoc` int(11) NOT NULL ,
   `kichthuoc` int (11) NOT NULL
   
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
CREATE TABLE `ram`(
    `id_ram` int(11) NOT NULL
   
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `dienthoai`(
  `id_dienthoai` int(11) NOT NUll,
  `id_loaidienthoai` int(11) NOT NULL,
   `tendienthoai` varchar(50) NOT NULL ,
   `hinhanh` varchar(100) NOT NULL ,
    `giaban` float NOT NULL ,
    `giakhuyenmai` float NOT NULL ,
    `tinhtrang` tinyint(1) NOT NULL,
    `noidung` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `loaidienthoai`(
    `id_loaidienthoai` int(11) NOT NULl ,
    `tenloaidienthoai` varchar(50) NOT NULL,
    `tinhtrang` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `loairam`(
    `id_loairam` int(11) NOT NULL ,
    `id_dienthoai` int(11) NOT NULL,
    `id_ram` int(11) NOT NULL
   
 )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
 
 ALTER TABLE `loaiphukien` 
 ADD PRIMARY KEY (`id_loaiphukien`);
 ALTER TABLE `phukien` 
 ADD PRIMARY KEY (`id_phukien`),
 ADD KEY `id_loaiphukien` (`id_loaiphukien`);
ALTER TABLE `user`
ADD PRIMARY KEY (`id_user`);

ALTER TABLE `chitietdienthoai`
ADD PRIMARY KEY(`id_chitietdienthoai`),
ADD KEY `id_dienthoaichitiet` (`id_dienthoai`),
ADD KEY `id_mauchitiet` (`id_mau`);
ALTER TABLE `danhgia`
ADD PRIMARY KEY(`id_danhgia`),
ADD KEY `id_user` (`id_danhgia`),
ADD KEY `id_dienthoai`(`id_dienthoai`)
;
ALTER TABLE `giohang`
ADD PRIMARY KEY (`id_giohang`),
ADD KEY `id_user` (`id_user`);
ALTER TABLE`codesodienthoai`
ADD PRIMARY KEY(`id_codesodienthoai`);
 ALTER TABLE `codesodienthoai`
MODIFY `id_codesodienthoai` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 12 ;
ALTER TABLE `danhgia`
  MODIFY `id_danhgia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `donhangdadatmua` 
ADD PRIMARY KEY (`id_donhangdadatmua`) , 
ADD KEY `id_donhang` (`id_donhang`);
 ALTER TABLE `donhangdadatmua`
MODIFY `id_donhangdadatmua` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 12 ;

ALTER TABLE `dienthoai`
ADD PRIMARY KEY (`id_dienthoai`),
ADD KEY `id_loaidienthoai` (`id_loaidienthoai`);

ALTER TABLE `mau`
ADD PRIMARY KEY (`id_mau`);

ALTER TABLE `loaimau`
ADD PRIMARY KEY (`id_loaimau`),
ADD KEY `id_loairam`(`id_loairam`),
ADD KEY `id_dienthoai`(`id_dienthoai`),
ADD KEY `id_mau` (`id_mau`);
ALTER TABLE `ram`
ADD PRIMARY KEY (`id_ram`),
ADD KEY `id_ramchitiet` (`id_ram`);

ALTER TABLE `loairam`
ADD PRIMARY KEY (`id_loairam`),
ADD KEY `id_dienthoai` (`id_dienthoai`),
ADD KEY `id_ram` (`id_ram`);
ALTER TABLE `chitietram`
ADD PRIMARY KEY (`id_chitietram`),
ADD KEY `id_ram` (`id_ram`);

ALTER TABLE `ram`
MODIFY `id_ram` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 12;

ALTER TABLE `dienthoai`
MODIFY `id_dienthoai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =12;

ALTER TABLE `chitietdienthoai`
MODIFY `id_chitietdienthoai` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT =12;

ALTER TABLE `mau`
MODIFY `id_mau` int (11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT=12; 
ALTER TABLE `loaidienthoai`
ADD PRIMARY KEY (`id_loaidienthoai`); 


ALTER TABLE `donhang`
ADD PRIMARY KEY (`id_donhang`);
ALTER TABLE `donhang`
MODIFY `id_donhang` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 12 ;

ALTER TABLE `chitietdonhang`
ADD PRIMARY KEY (`id_chitietdonhang`),
ADD KEY `id_chitietdienthoai` (`id_chitietdienthoai`),
ADD KEY `id_donhangdadatmua` (`id_donhangdadatmua`);
ALTER TABLE `chitietdonhang`
MODIFY `id_chitietdonhang` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 12 ;


ALTER TABLE `loaidienthoai`
MODIFY `id_loaidienthoai` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 3 ;

ALTER TABLE `dienthoai`
ADD CONSTRAINT `id_loaidienthoai` FOREIGN KEY(`id_loaidienthoai`) REFERENCES `loaidienthoai` (`id_loaidienthoai`);
ALTER TABLE `chitietdonhang`
ADD CONSTRAINT `id_donhang` FOREIGN KEY(`id_donhang`) REFERENCES `donhang` (`id_donhang`),
ADD CONSTRAINT `id_donhangdadatmua` FOREIGN KEY(`id_donhangdadatmua`) REFERENCES `donhangdadatmua`(`id_donhangdadatmua`)
;
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `chitietdienthoai`
ADD CONSTRAINT `id_dienthoaichitiet` FOREIGN KEY(`id_dienthoai`) REFERENCES `dienthoai` (`id_dienthoai`),
ADD CONSTRAINT `id_mauchitiet` FOREIGN KEY(`id_mau`) REFERENCES `mau` (`id_mau`),
ADD CONSTRAINT `id_ramkichthuoc` FOREIGN KEY (`id_ram`) REFERENCES `ram` (`id_ram`);

ALTER TABLE `loairam`
ADD CONSTRAINT `id_dienthoai` FOREIGN KEY (`id_dienthoai`) REFERENCES `dienthoai` (`id_dienthoai`),
ADD CONSTRAINT `id_ramdienthoai` FOREIGN KEY (`id_ram`) REFERENCES `ram` (`id_ram`);
ALTER TABLE `donhangdadatmua`
ADD CONSTRAINT `id_donhangdatmua` FOREIGN KEY (`id_donhang`) REFERENCES `donhang` (`id_donhang`);
ALTER TABLE `loairam`
MODIFY `id_loairam` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 3 ;
ALTER TABLE `giohang`
MODIFY `id_giohang` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 3 ;
ALTER TABLE `giohang`
ADD CONSTRAINT `id_userdonhang` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);
ALTER TABLE `loaimau`
ADD CONSTRAINT `id_dienthoaimau` FOREIGN KEY (`id_dienthoai`) REFERENCES `dienthoai` (`id_dienthoai`),
ADD CONSTRAINT `id_dienthoailoairam` FOREIGN KEY (`id_loairam`) REFERENCES `loairam`(`id_loairam`),
ADD CONSTRAINT `id_maudienthoai` FOREIGN KEY(`id_mau`) REFERENCES `mau` (`id_mau`);
ALTER TABLE `chitietram`
ADD CONSTRAINT `id_ram` FOREIGN KEY (`id_ram`) REFERENCES `ram` (`id_ram`);
 ALTER TABLE `loaimau`
MODIFY `id_loaimau` int(11) NOT NULL AUTO_INCREMENT , AUTO_INCREMENT = 3 ;
ALTER TABLE `danhgia`
ADD CONSTRAINT `id_userdanhgia` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`),
ADD CONSTRAINT `id_dienthoaidanhgia` FOREIGN KEY (`id_dienthoai`) REFERENCES `dienthoai` (`id_dienthoai`)
;
ALTER TABLE `phukien` 
ADD CONSTRAINT `id_loaiphukien` FOREIGN KEY (`id_loaiphukien`) REFERENCES `id_loaiphukien` (`id_loaiphukien`);
--
-- ///////////////////////////
INSERT INTO `loaidienthoai` (`id_loaidienthoai`, `tenloaidienthoai`, `tinhtrang`) VALUES ('1', 'APPLE', '1'), ('2', 'SAMSUNG', '2'), ('3', 'OPPO', '1'), ('4', 'VIVO', '1'), ('5', 'XIAOMI', '1'), ('6', 'REALME', '1');
INSERT INTO `ram` (`id_ram`) VALUES ('1'), ('2'), ('3'), ('4'), ('5'), ('6'), ('7'), ('8'), ('9'), ('10');
INSERT INTO `dienthoai` (`id_dienthoai`, `id_loaidienthoai`, `tendienthoai`, `hinhanh`, `giaban`, `giakhuyenmai`, `tinhtrang`, `noidung`) VALUES ('1', '1', 'iPhone 12 Pro Max', 'https://cdn.tgdd.vn/Products/Images/42/213033/TimerThumb/iphone-12-pro-max-(4).jpg', '32990000', '30990000', '1', 'Màn hình 6.7\", Chip Apple A14 Bionic\r\n\r\nRAM 6 GB, ROM 128 GB\r\n\r\nCamera sau: 3 camera 12 MP\r\n\r\nCamera trước: 12 MP\r\n\r\nPin 3687 mAh, Sạc 20 W'), ('2', '1', 'iPhone 12 Pro', 'https://cdn.tgdd.vn/Products/Images/42/213032/TimerThumb/iphone-12-pro-(4).jpg', '30990000', '27990000', '1', 'Màn hình 6.1\", Chip Apple A14 Bionic\r\n\r\nRAM 6 GB, ROM 128 GB\r\n\r\nCamera sau: 3 camera 12 MP\r\n\r\nCamera trước: 12 MP\r\n\r\nPin 2815 mAh, Sạc 20 W'), ('3', '1', 'iPhone 12', 'https://cdn.tgdd.vn/Products/Images/42/213031/TimerThumb/iphone-12-(8).jpg', '22990000', '20690000', '1', 'Màn hình 6.1\", Chip Apple A14 Bionic\r\n\r\nRAM 4 GB, ROM 64 GB\r\n\r\nCamera sau: 2 camera 12 MP\r\n\r\nCamera trước: 12 MP\r\n\r\nPin 2815 mAh, Sạc 20 W'), ('4', '1', 'iPhone 11', 'https://cdn.tgdd.vn/Products/Images/42/210644/TimerThumb/iphone-11-128gb-(16).jpg', '19990000', '16990000', '1', 'Màn hình 6.1\", Chip Apple A13 Bionic\r\n\r\nRAM 4 GB, ROM 128 GB\r\n\r\nCamera sau: 2 camera 12 MP\r\n\r\nCamera trước: 12 MP\r\n\r\nPin 3110 mAh, Sạc 18 W'), ('5', '1', 'iPhone 12 mini', 'https://cdn.tgdd.vn/Products/Images/42/225380/TimerThumb/iphone-12-mini-(12).jpg', '18990000', '16690000', '1', 'Màn hình 5.4\", Chip Apple A14 Bionic\r\n\r\nRAM 4 GB, ROM 64 GB\r\n\r\nCamera sau: 2 camera 12 MP\r\n\r\nCamera trước: 12 MP\r\n\r\nPin 2227 mAh, Sạc 20 W'), ('6', '1', 'iPhone SE (2020) Gộp', 'https://cdn.tgdd.vn/Products/Images/42/222629/TimerThumb/iphone-se-128gb-2020-(6).jpg', '13990000', '11990000', '1', 'Màn hình 4.7\", Chip Apple A13 Bionic\r\n\r\nRAM 3 GB, ROM 128 GB\r\n\r\nCamera sau: 12 MP\r\n\r\nCamera trước: 7 MP\r\n\r\nPin 1821 mAh, Sạc 18 W'), ('7', '3', 'OPPO Reno6 5G', 'https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-aurora-600x600.jpg', '12990000', '11200000', '1', 'Màn hình 6.43\", Chip MediaTek Dimensity 900 5G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP\r\n\r\nCamera trước: 32 MP\r\n\r\nPin 4300 mAh, Sạc 65 W'), ('8', '3', 'OPPO Reno5', 'https://cdn.tgdd.vn/Products/Images/42/220438/oppo-reno5-trang-600x600-1-600x600.jpg', '8690000', '8040000', '1', 'Màn hình AMOLED, 6.43\", Full HD+\r\n\r\nChip Snapdragon 720G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 44 MP\r\n\r\nPin 4310 mAh, Sạc 50 W'), ('9', '3', 'OPPO Reno6 Z 5G', 'https://cdn.tgdd.vn/Products/Images/42/239747/oppo-reno6-z-5g-aurora-1-600x600.jpg', '9490000', '9200000', '1', 'Màn hình 6.43\", Chip MediaTek Dimensity 800U 5G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP\r\n\r\nCamera trước: 32 MP\r\n\r\nPin 4310 mAh, Sạc 30 W'), ('10', '3', 'OPPO A74', 'https://cdn.tgdd.vn/Products/Images/42/235653/oppo-a74-blue-9-600x600.jpg', '6690000', '6300000', '1', 'Màn hình 6.43\", Chip Snapdragon 662\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 33 W'), ('11', '3', 'OPPO Reno5 5G', 'https://cdn.tgdd.vn/Products/Images/42/232190/oppo-find-x3-pro-black-001-1-600x600.jpg', '11990000', '10990000', '1', 'Màn hình 6.43\", Chip Snapdragon 765G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 32 MP\r\n\r\nPin 4300 mAh, Sạc 65 W'), ('12', '3', 'OPPO Reno4 Pro', 'https://cdn.tgdd.vn/Products/Images/42/223497/TimerThumb/oppo-reno4-pro-(4).jpg', '10490000', '9900000', '1', 'Màn hình 6.5\", Chip Snapdragon 720G\r\n\r\nRAM 8 GB, ROM 256 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 32 MP\r\n\r\nPin 4000 mAh, Sạc 65 W'), ('13', '6', 'Realme 8 Pro', 'https://cdn.tgdd.vn/Products/Images/42/235986/realme-8-pro-balck-600x600.jpg', '8140000', '8690000', '1', 'Màn hình 6.4\", Chip Snapdragon 720G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 108 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 4500 mAh, Sạc 50 W'), ('14', '6', 'Realme 7 Pro', 'https://cdn.tgdd.vn/Products/Images/42/227689/TimerThumb/realme-7-pro-(12).jpg', '8990000', '8.290.000', '1', 'Màn hình 6.4\", Chip Snapdragon 720G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 32 MP\r\n\r\nPin 4500 mAh, Sạc 65 W'), ('15', '6', 'Realme 8 5G', 'https://cdn.tgdd.vn/Products/Images/42/236588/realme-8-5g-blue-1-600x600.jpg', '7990000', '7490000', '1', 'Màn hình 6.5\", Chip MediaTek Dimensity 700\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 18 W'), ('16', '6', 'Realme 8', 'https://cdn.tgdd.vn/Products/Images/42/233135/realme-8-silver-600x600.jpg', '7290000', '6990000', '1', 'Màn hình 6.4\", Chip MediaTek Helio G95\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 30 W'), ('17', '6', 'Realme 7', 'https://cdn.tgdd.vn/Products/Images/42/227731/TimerThumb/realme-7-(20).jpg', '6990000', '6490000', '1', 'Màn hình 6.5\", Chip MediaTek Helio G95\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 30 W'), ('18', '6', 'Realme 7i', 'https://cdn.tgdd.vn/Products/Images/42/227688/realme-7i-xanhduong-new-600x600.jpg', '9290000', '5990000', '1', 'Màn hình 6.5\", Chip Snapdragon 662\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 18 W'), ('19', '2', 'Samsung Galaxy S21 5G', 'https://cdn.tgdd.vn/Products/Images/42/220833/TimerThumb/samsung-galaxy-s21-(8).jpg', '20990000', '14990000', '1', 'Màn hình 6.2\", Chip Exynos 2100\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 12 MP & Phụ 64 MP, 12 MP\r\n\r\nCamera trước: 10 MP\r\n\r\nPin 4000 mAh, Sạc 25 W'), ('20', '2', 'Samsung Galaxy A22', 'https://cdn.tgdd.vn/Products/Images/42/237603/samsung-galaxy-a22-4g-black-600x600.jpg', '6000000', '5890000', '1', 'Màn hình 6.4\", Chip MediaTek MT6769V\r\n\r\nRAM 6 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 13 MP\r\n\r\nPin 5000 mAh, Sạc 15 W'), ('21', '2', 'Samsung Galaxy Note 20', 'https://cdn.tgdd.vn/Products/Images/42/218355/TimerThumb/samsung-galaxy-note-20-(8).jpg', '23990000', '14990000', '1', 'Màn hình 6.7\", Chip Exynos 990\r\n\r\nRAM 8 GB, ROM 256 GB\r\n\r\nCamera sau: Chính 12 MP & Phụ 64 MP, 12 MP\r\n\r\nCamera trước: 10 MP\r\n\r\nPin 4300 mAh, Sạc 25 W'), ('22', '2', 'Samsung Galaxy Z Fold2 5G', 'https://cdn.tgdd.vn/Products/Images/42/226099/TimerThumb/samsung-galaxy-z-fold2-5g-f.jpg', '51000000', '50000000', '1', 'Màn hình Chính 7.59\" & Phụ 6.23\", Chip Snapdragon 865+\r\n\r\nRAM 12 GB, ROM 256 GB\r\n\r\nCamera sau: 3 camera 12 MP\r\n\r\nCamera trước: Trong 10 MP & Ngoài 10 MP\r\n\r\nPin 4500 mAh, Sạc 25 W'), ('23', '2', 'Samsung Galaxy S21 Ultra 5G 128GB', 'https://cdn.tgdd.vn/Products/Images/42/226316/TimerThumb/samsung-galaxy-s21-ultra-(6).jpg', '30990000', '21900000', '1', 'Màn hình 6.8\", Chip Exynos 2100\r\n\r\nRAM 12 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 108 MP & Phụ 12 MP, 10 MP, 10 MP\r\n\r\nCamera trước: 40 MP\r\n\r\nPin 5000 mAh, Sạc 25 W'), ('24', '2', 'Samsung Galaxy S21+ 5G 128GB', 'https://cdn.tgdd.vn/Products/Images/42/226385/TimerThumb/samsung-galaxy-s21-plus-(8).jpg', '25990000', '16990000', '1', 'Màn hình 6.7\", Chip Exynos 2100\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 12 MP & Phụ 64 MP, 12 MP\r\n\r\nCamera trước: 10 MP\r\n\r\nPin 4800 mAh, Sạc 25 W'), ('25', '4', 'Vivo Y53s', 'https://cdn.tgdd.vn/Products/Images/42/240286/TimerThumb/vivo-y53s-(2).jpg', '6990000', '6690000', '1', 'Màn hình 6.58\", Chip MediaTek Helio G80\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 2 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 33 W'), ('26', '4', 'Vivo V21 5G', 'https://cdn.tgdd.vn/Products/Images/42/238047/TimerThumb/vivo-v21-5g-(2).jpg', '9990000', '9490000', '1', 'Màn hình 6.44\", Chip MediaTek Dimensity 800U 5G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP\r\n\r\nCamera trước: 44 MP\r\n\r\nPin 4000 mAh, Sạc 33 W'), ('27', '4', 'Vivo V20 (2021)', 'https://cdn.tgdd.vn/Products/Images/42/232614/TimerThumb/vivo-v20-2021-(6).jpg', '8490000', '7790000', '1', 'Màn hình 6.44\", Chip Snapdragon 730\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP\r\n\r\nCamera trước: 44 MP\r\n\r\nPin 4000 mAh, Sạc 33 W'), ('28', '4', 'Vivo Y72 5G', 'https://cdn.tgdd.vn/Products/Images/42/236431/TimerThumb/vivo-y72-5g-(2).jpg', '7990000', '7690000', '1', 'https://cdn.tgdd.vn/Products/Images/42/236431/TimerThumb/vivo-y72-5g-(2).jpg'), ('29', '4', 'Vivo V20 SE', 'https://cdn.tgdd.vn/Products/Images/42/228141/TimerThumb/vivo-v20-se-(10).jpg', '7190000', '6490000', '1', 'Màn hình 6.44\", Chip Snapdragon 665\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP\r\n\r\nCamera trước: 32 MP\r\n\r\nPin 4100 mAh, Sạc 33 W'), ('30', '4', 'Vivo Y51 (2020)', 'https://cdn.tgdd.vn/Products/Images/42/228950/TimerThumb/vivo-y51-2020-(6).jpg', '6290000', '5790000', '1', 'Màn hình 6.58\", Chip Snapdragon 662\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 5000 mAh, Sạc 18 W'), ('31', '5', 'Xiaomi Mi 11 5G', 'https://cdn.tgdd.vn/Products/Images/42/226264/TimerThumb/xiaomi-mi-11-(6).jpg', '21990000', '18990000', '1', 'https://cdn.tgdd.vn/Products/Images/42/226264/TimerThumb/xiaomi-mi-11-(6).jpg'), ('32', '5', 'Xiaomi Mi 10T Pro 5G', 'https://cdn.tgdd.vn/Products/Images/42/228136/TimerThumb/xiaomi-mi-10t-pro-(12).jpg', '12990000', '12490000', '1', 'Màn hình 6.67\", Chip Snapdragon 865\r\n\r\nRAM 8 GB, ROM 256 GB\r\n\r\nCamera sau: Chính 108 MP & Phụ 13 MP, 5 MP\r\n\r\nCamera trước: 20 MP\r\n\r\nPin 5000 mAh, Sạc 33 W'), ('33', '5', 'Xiaomi Mi 11 Lite', 'https://cdn.tgdd.vn/Products/Images/42/233241/TimerThumb/xiaomi-mi-11-lite-4g-(4).jpg', '7990000', '7090000', '1', 'Màn hình 6.55\", Chip Snapdragon 732G\r\n\r\nRAM 8 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 5 MP\r\n\r\nCamera trước: 16 MP\r\n\r\nPin 4250 mAh, Sạc 33 W'), ('34', '5', 'Xiaomi POCO X3 NFC', 'https://cdn.tgdd.vn/Products/Images/42/227900/TimerThumb/xiaomi-poco-x3-(16).jpg', '6990000', '6190000', '1', 'Màn hình 6.67\", Chip Snapdragon 732G\r\n\r\nRAM 6 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 64 MP & Phụ 13 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 20 MP\r\n\r\nPin 5160 mAh, Sạc 33 W'), ('35', '5', 'Xiaomi Redmi Note 10', 'https://cdn.tgdd.vn/Products/Images/42/222758/TimerThumb/xiaomi-redmi-note-10-(4).jpg', '5490000', '5090000', '1', 'Màn hình 6.43\", Chip Snapdragon 678\r\n\r\nRAM 6 GB, ROM 128 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 13 MP\r\n\r\nPin 5000 mAh, Sạc 33 W'), ('36', '5', 'Xiaomi Redmi Note 8', 'https://cdn.tgdd.vn/Products/Images/42/209535/xiaomi-redmi-note-8-blue-1-600x600.jpg', '4490000', '4400000', '1', 'Màn hình 6.3\", Chip Snapdragon 665\r\n\r\nRAM 4 GB, ROM 64 GB\r\n\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP\r\n\r\nCamera trước: 13 MP\r\n\r\nPin 4000 mAh, Sạc 18 W');
INSERT INTO `loaiphukien` (`id_loaiphukien`, `tenloaiphukien`) VALUES ('2', 'SẠC , CÁP'), ('3', 'GẬY TỰ SƯỚNG');
INSERT INTO `phukien` (`id_phukien`, `id_loaiphukien`, `tenphukien`, `hinhanh`, `gia`, `soluongdanhgia`) VALUES ('2', '1', 'Belkin Pocket Power BPB002', 'https://cdn.tgdd.vn/Products/Images/57/246085/pin-polymer-20000-mah-type-c-30w-pd-belkin-pocket-power-bpb002-ava-600x600.jpg', '19000000', '3'), ('3', '1', 'AVA+ PJ JP260', 'https://cdn.tgdd.vn/Products/Images/57/244689/pin-polymer-10000mah-type-c-ava-pj-jp260-ava-1-600x600.jpg', '456000', '4'), ('4', '3', 'Gậy Chụp Ảnh Bluetooth Tripod Xmobile K06', 'https://cdn.tgdd.vn/Products/Images/3885/211596/gay-chup-anh-bluetooth-tripod-xmobile-k06-den-1-600x600.jpg', '150000', '5'), ('5', '3', 'Gậy Chụp Ảnh Bluetooth Cosano HD-P7', 'https://cdn.tgdd.vn/Products/Images/3885/92042/gay-chup-anh-bluetooth-cosano-hd-p7-ava-600x600.jpg', '75000', '5'), ('6', '2', 'Cáp Type C - Type C Playa PM2003', 'https://cdn.tgdd.vn/Products/Images/58/246080/cap-type-c-type-c-1m-playa-pm2003-ava-600x600.jpg', '270000', '5');