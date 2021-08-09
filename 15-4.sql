-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 14, 2021 lúc 10:18 PM
-- Phiên bản máy phục vụ: 10.4.17-MariaDB
-- Phiên bản PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shoestore`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `id_chitietdonhang` int(11) NOT NULL,
  `id_donhang` int(11) NOT NULL,
  `id_chitietgiay` int(11) NOT NULL,
  `soluongsp` int(11) NOT NULL,
  `giabancuoi` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`id_chitietdonhang`, `id_donhang`, `id_chitietgiay`, `soluongsp`, `giabancuoi`) VALUES
(1, 5, 2, 2, 650000),
(2, 5, 3, 1, 650000),
(3, 6, 2, 2, 650000),
(4, 6, 3, 1, 650000),
(5, 7, 2, 2, 650000),
(6, 7, 3, 1, 650000),
(7, 13, 2, 1, 650000),
(8, 13, 3, 1, 650000),
(9, 14, 4, 1, 600000),
(10, 14, 6, 1, 600000),
(11, 15, 5, 1, 600000),
(12, 15, 6, 1, 600000),
(13, 16, 4, 1, 600000),
(14, 16, 6, 1, 600000),
(15, 17, 8, 1, 500000),
(16, 17, 10, 1, 500000),
(17, 18, 2, 1, 650000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `chitietgiay`
--

CREATE TABLE `chitietgiay` (
  `id_chitietgiay` int(11) NOT NULL,
  `id_giay` int(11) NOT NULL,
  `id_size` int(11) NOT NULL,
  `id_color` int(11) NOT NULL,
  `soluong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `chitietgiay`
--

INSERT INTO `chitietgiay` (`id_chitietgiay`, `id_giay`, `id_size`, `id_color`, `soluong`) VALUES
(2, 1, 2, 1, 6),
(3, 1, 3, 2, 8),
(4, 2, 1, 3, 3),
(5, 2, 2, 3, 4),
(6, 2, 4, 4, 2),
(8, 10, 1, 1, 9),
(10, 10, 2, 1, 9),
(11, 10, 3, 1, 10),
(25, 1, 1, 1, 101),
(28, 22, 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `color`
--

CREATE TABLE `color` (
  `id_color` int(11) NOT NULL,
  `color` varchar(20) NOT NULL,
  `trangthai` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `color`
--

INSERT INTO `color` (`id_color`, `color`, `trangthai`) VALUES
(1, 'Vàng', 1),
(2, 'Đen', 1),
(3, 'Nâu', 1),
(4, 'Trắng', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `donhang`
--

CREATE TABLE `donhang` (
  `id_donhang` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `ngaytao` timestamp NULL DEFAULT current_timestamp(),
  `sodienthoai` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `hoten` varchar(20) NOT NULL,
  `trangthai` tinyint(1) DEFAULT NULL,
  `diachi` varchar(50) NOT NULL,
  `loaithanhtoan` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `donhang`
--

INSERT INTO `donhang` (`id_donhang`, `id_user`, `ngaytao`, `sodienthoai`, `email`, `hoten`, `trangthai`, `diachi`, `loaithanhtoan`) VALUES
(5, 9, '2021-04-12 14:53:48', '123123', 'test@gmail.com', 'test', 1, '1', 'cod'),
(6, 9, '2021-04-12 14:59:40', '123123', 'test@gmail.com', 'test', 1, '1', 'cod'),
(7, 9, '2021-04-12 14:59:51', '123123', 'test@gmail.com', 'test', 0, '1', 'cod'),
(13, 9, '2021-04-12 15:40:30', '123123', 'test@gmail.com', 'test', 0, '1', 'cod'),
(14, 9, '2021-04-12 15:42:23', '123123', 'test@gmail.com', 'test', 0, '1', 'online'),
(15, 9, '2021-04-12 15:43:30', '123123', 'test@gmail.com', 'test', 0, '1', 'online'),
(16, 9, '2021-04-12 15:45:16', '123123', 'test@gmail.com', 'test', 0, '1', 'online'),
(17, 9, '2021-04-12 15:50:48', '123123', 'test@gmail.com', 'test', 0, '1', 'online'),
(18, NULL, '2021-04-12 16:41:45', '123123', 'phepthuat301@gmail.com', 'a', 0, '74 NTH', 'cod');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `gallery`
--

CREATE TABLE `gallery` (
  `id_gallery` int(11) NOT NULL,
  `id_giay` int(11) NOT NULL,
  `id_color` int(11) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `gallery`
--

INSERT INTO `gallery` (`id_gallery`, `id_giay`, `id_color`, `image`) VALUES
(5, 2, 3, 'IMG_6928-01.jpeg'),
(6, 2, 3, 'IMG_6929-01.jpeg'),
(7, 2, 4, 'IMG_6950.jpg'),
(8, 2, 4, 'IMG_6952.jpg'),
(33, 22, 1, 'IMG_6966.jpg'),
(34, 22, 1, 'IMG_6968.jpg'),
(35, 1, 1, 'IMG_6901-01-01.jpeg'),
(36, 1, 1, 'IMG_6908-01.jpeg'),
(39, 10, 1, 'IMG_6911-01.jpeg'),
(40, 10, 1, 'IMG_6912-01.jpeg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `giay`
--

CREATE TABLE `giay` (
  `id_giay` int(11) NOT NULL,
  `id_kieugiay` int(11) NOT NULL,
  `tengiay` varchar(50) NOT NULL,
  `tenmagiay` varchar(10) NOT NULL,
  `hinhanh` varchar(50) NOT NULL,
  `giaban` float NOT NULL,
  `giakm` float NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL,
  `noidung` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `giay`
--

INSERT INTO `giay` (`id_giay`, `id_kieugiay`, `tengiay`, `tenmagiay`, `hinhanh`, `giaban`, `giakm`, `tinhtrang`, `noidung`) VALUES
(1, 1, 'Giày Tây', 'GT-01', 'IMG_6901-01-01.jpeg', 650000, 600000, 0, 'test data'),
(2, 2, 'Giày Boost', 'GB-01', 'IMG_6928-01.jpeg', 600000, 550000, 1, 'test data'),
(10, 1, 'Giày Tây', 'GT02', 'IMG_6911-01.jpeg', 500000, 450000, 1, 'TEst DATA'),
(22, 2, 'abcc', 'abcc', 'IMG_6963.jpg', 11111, 11111, 1, 'test data1');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `kieugiay`
--

CREATE TABLE `kieugiay` (
  `id_kieugiay` int(11) NOT NULL,
  `tenkieugiay` varchar(50) NOT NULL,
  `tinhtrang` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `kieugiay`
--

INSERT INTO `kieugiay` (`id_kieugiay`, `tenkieugiay`, `tinhtrang`) VALUES
(1, 'Giày Tây', 1),
(2, 'Giày Boost', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `size`
--

CREATE TABLE `size` (
  `id_size` int(11) NOT NULL,
  `sosize` int(11) NOT NULL,
  `trangthai` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `size`
--

INSERT INTO `size` (`id_size`, `sosize`, `trangthai`) VALUES
(1, 37, 1),
(2, 38, 1),
(3, 39, 1),
(4, 40, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `hoten` varchar(50) NOT NULL,
  `diachi` varchar(50) NOT NULL,
  `sodienthoai` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id_user`, `hoten`, `diachi`, `sodienthoai`, `email`, `username`, `password`, `role`) VALUES
(1, 'Nam', 'test data', '0793966349', 'admin@gmail.com', 'admin', 'c4ca4238a0b923820dcc509a6f75849b', 'admin'),
(9, 'test', '1', '123123', 'test@gmail.com', 'test', 'c4ca4238a0b923820dcc509a6f75849b', 'khachhang');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`id_chitietdonhang`),
  ADD KEY `donhang-chitiet` (`id_donhang`),
  ADD KEY `chitietdh-chitietgiay` (`id_chitietgiay`);

--
-- Chỉ mục cho bảng `chitietgiay`
--
ALTER TABLE `chitietgiay`
  ADD PRIMARY KEY (`id_chitietgiay`),
  ADD KEY `id_giaychitiet` (`id_giay`),
  ADD KEY `id_colorchitiet` (`id_color`),
  ADD KEY `id_sizechitiet` (`id_size`);

--
-- Chỉ mục cho bảng `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id_color`);

--
-- Chỉ mục cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id_donhang`),
  ADD KEY `donhang-user` (`id_user`);

--
-- Chỉ mục cho bảng `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id_gallery`),
  ADD KEY `id_color` (`id_color`),
  ADD KEY `id_gallery` (`id_giay`);

--
-- Chỉ mục cho bảng `giay`
--
ALTER TABLE `giay`
  ADD PRIMARY KEY (`id_giay`),
  ADD KEY `id_kieugiay` (`id_kieugiay`);

--
-- Chỉ mục cho bảng `kieugiay`
--
ALTER TABLE `kieugiay`
  ADD PRIMARY KEY (`id_kieugiay`);

--
-- Chỉ mục cho bảng `size`
--
ALTER TABLE `size`
  ADD PRIMARY KEY (`id_size`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  MODIFY `id_chitietdonhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `chitietgiay`
--
ALTER TABLE `chitietgiay`
  MODIFY `id_chitietgiay` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `color`
--
ALTER TABLE `color`
  MODIFY `id_color` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id_donhang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id_gallery` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT cho bảng `giay`
--
ALTER TABLE `giay`
  MODIFY `id_giay` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT cho bảng `kieugiay`
--
ALTER TABLE `kieugiay`
  MODIFY `id_kieugiay` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `size`
--
ALTER TABLE `size`
  MODIFY `id_size` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD CONSTRAINT `chitietdh-chitietgiay` FOREIGN KEY (`id_chitietgiay`) REFERENCES `chitietgiay` (`id_chitietgiay`),
  ADD CONSTRAINT `donhang-chitiet` FOREIGN KEY (`id_donhang`) REFERENCES `donhang` (`id_donhang`);

--
-- Các ràng buộc cho bảng `chitietgiay`
--
ALTER TABLE `chitietgiay`
  ADD CONSTRAINT `id_colorchitiet` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`),
  ADD CONSTRAINT `id_giaychitiet` FOREIGN KEY (`id_giay`) REFERENCES `giay` (`id_giay`) ON DELETE CASCADE,
  ADD CONSTRAINT `id_sizechitiet` FOREIGN KEY (`id_size`) REFERENCES `size` (`id_size`);

--
-- Các ràng buộc cho bảng `donhang`
--
ALTER TABLE `donhang`
  ADD CONSTRAINT `donhang-user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_user`);

--
-- Các ràng buộc cho bảng `gallery`
--
ALTER TABLE `gallery`
  ADD CONSTRAINT `id_color` FOREIGN KEY (`id_color`) REFERENCES `color` (`id_color`),
  ADD CONSTRAINT `id_gallery` FOREIGN KEY (`id_giay`) REFERENCES `giay` (`id_giay`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `giay`
--
ALTER TABLE `giay`
  ADD CONSTRAINT `id_kieugiay` FOREIGN KEY (`id_kieugiay`) REFERENCES `kieugiay` (`id_kieugiay`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
