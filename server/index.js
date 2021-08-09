const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config");
const fileUpload = require('express-fileupload');
const { reset } = require("nodemon");
//
app.use(cors());
app.use(express.json());
app.use(fileUpload());
//Delete form cart
app.get("/deletecart/:index", (req, res) => {
  const id_giohang = req.params.index;
  db.query("DELETE FROM giohang  where id_giohang =?", id_giohang, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//
// get dữ liệu từ giỏ hàng về 
app.get("/cart", (req, res) => {
  db.query("SELECT * from giohang", (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/deletecart", (req, res) => {
  db.query("DELETE  from giohang", (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//Delete dienthoai
app.post("/deletephone-admin/:id", (req, res) => {
  const id_dienthoai=req.params.id;
  db.query(`DELETE from dienthoai  where id_dienthoai =${id_dienthoai}`, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//Post dữ liệu lên giỏ hàng
app.post('/addcart', (req, res) => {
  const Id_user = req.body.Id_user;
  const Phonename = req.body.Phonename;
  const Phonetypename = req.body.Phonetypename;
  const Ram = req.body.Ram;
  const Color = req.body.Color;
  const Image = req.body.Image;
  const Price = req.body.Price;
  const Promotionalprice = req.body.Promotionalprice;
  const Amount = req.body.Amount;
  const Content = req.body.Content;
  db.query(
    "INSERT INTO giohang ( id_user, tendienthoai,tenloaidienthoai,ram,mau,hinhanh,giaban,soluong,noidung,giakhuyenmai) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [Id_user, Phonename, Phonetypename, Ram, Color, Image, Price, Amount, Content, Promotionalprice],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// Get productdetail theo id điện thoại
app.get("/productdetail/:id", (req, res) => {
  const id_dienthoai = req.params.id;
  db.query("SELECT * from dienthoai a , chitietdienthoai b , mau d  , ram e , loaidienthoai f  where a.id_dienthoai = b.id_dienthoai and f.id_loaidienthoai=a.id_loaidienthoai and b.id_ram=e.id_ram and b.id_mau = d.id_mau and a.id_dienthoai=? "
    , id_dienthoai, (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.get("/evaluate", (req, res) => {
  db.query("SELECT * from danhgia", (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});


//get dữ liệu từ user về store
app.get("/user", (req, res) => {
  db.query("SELECT  * FROM user ", (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
// post dữ liệu từ đăng ký tài khoản vào đatabase
app.post("/register", (req, res) => {
  username = req.body.username,
    lastname = req.body.lastname,
    checkpassword = req.body.checkpassword,
    email = req.body.email,
    sex = req.body.sex,
    phone = req.body.phone,
    db.query("INSERT INTO user (taikhoan , hovaten, matkhau ,email ,gioitinh, sodienthoai) VALUES (?,?,?,?,?,?)",
      [username, lastname, checkpassword, email, sex, phone],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
});

//Get sản phẩm điện thoại
app.get("/phone-home", (req, res) => {
  db.query(`SELECT  * FROM dienthoai  a ,loaidienthoai b where a.id_loaidienthoai = b.id_loaidienthoai`, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/phone-home1/:id", (req, res) => {
  const id_dienthoai = req.params.id;
  console.log(id_dienthoai)
  db.query(`SELECT  * FROM dienthoai a where a.id_dienthoai <= ${id_dienthoai}`, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
// Get sản phẩm điện thoại theo ram
app.get("/productdetail-ram/:id", (req, res) => {
  const id_dienthoai = req.params.id
  db.query("SELECT *from  loairam b ,  chitietram c where c.id_ram=b.id_ram and b.id_dienthoai=? ", id_dienthoai, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//Get sản phẩm điện thoại theo màu
app.get("/productdetail-color/:id", (req, res) => {
  const id_dienthoai = req.params.id
  db.query("SELECT *from  loaimau b ,  mau c where c.id_mau=b.id_mau and b.id_dienthoai=? ", id_dienthoai, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//get sản phẩm liên quan
app.get("/relatedproducts/:id", (req, res) => {
  const id_loaidienthoai = req.params.id;
  db.query("SELECT *from  loaidienthoai a ,  dienthoai b where a.id_loaidienthoai=b.id_loaidienthoai and b.id_loaidienthoai=? ", id_loaidienthoai, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//Post form đánh giá
app.post('/addevaluate', (req, res) => {
  const Id_user = req.body.Id_user;
  const id_phone = req.body.id_phone;
  const contentrated = req.body.contentrated;
  const date = req.body.date;
  const lastName = req.body.lastName;
  const star = req.body.star;
  db.query(
    "INSERT INTO danhgia (id_user,id_dienthoai, tendanhgia,danhgia,date,saodanhgia) VALUES (?,?,?,?,?,?)",
    [Id_user,id_phone, lastName, contentrated, date, star],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//
//Get nội dung đánh giá theo id_user
app.get("/addevaluate/:id", (req, res) => {
  const id_user = req.params.id;
  db.query("SELECT *from  danhgia a where a.id_user ", id_user, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//
//Tăng số lượng đơn hàng
app.post('/addamountmax', (req, res) => {
  const addamount = req.body.addamount;
  const id_giohang = req.body.maxAmount;
  db.query(
    `UPDATE giohang a SET a.soluong=? where a.id_giohang =${id_giohang}`,
    [addamount],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//
//Giảm số lượng đơn hàng
app.post('/addamountmin', (req, res) => {
  const addamount = req.body.addamount;
  const id_giohang = req.body.minAmount;
  db.query(
    `UPDATE giohang a SET a.soluong=? where a.id_giohang =${id_giohang}`,
    [addamount],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//Post dữ liệu từ lịch sử giao hàng
app.get("/relatedproducts/:id", (req, res) => {
  const id_loaidienthoai = req.params.id;
  db.query("SELECT *from  loaidienthoai a ,  dienthoai b where a.id_loaidienthoai=b.id_loaidienthoai and b.id_loaidienthoai=? ", id_loaidienthoai, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
//Post form đánh giá
app.post('/orderhistory', (req, res) => {
  let id_donhang;
  const id_user = req.body.id_user;
  const cartlength = req.body.cartlength;
  const fullname = req.body.value.fullname;
  const phone = req.body.value.phone;
  const email = req.body.value.phone;
  const cityprovince = req.body.value.cityprovince;
  const district = req.body.value.district;
  const specificaddress = req.body.value.specificaddress;
  const wards = req.body.value.wards;
  const date = req.body.date;
  const status = "Chờ cửa hàng xác nhận đơn hàng";

  db.query(
    "INSERT INTO donhang ( id_user ,ten,sodienthoai,email,tinhthanhpho,quanhuyen,phuongxa,diachicuthe,date ) VALUES (?,?,?,?,?,?,?,?,?)",
    [id_user, fullname, phone, email, cityprovince, district, wards, specificaddress, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
 
});
// Get lịch sử đơn hàng 
app.get("/historyproduct", (req, res) => {
  db.query(`SELECT * from  donhang  `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//Post san pham da dat mua
app.post("/addoderproduct", (req, res) => {
  let id_donhangdadatmua;
  const cartlength = req.body.cartlength;
  const id_user = req.body.id_user;
  const id_donhang = req.body.id_donhang;
  const Note = req.body.Note;
  const date = req.body.date;
  const orderstatus = req.body.orderstatus;
  const status = "Chờ cửa hàng xác nhận đơn hàng";
    db.query("INSERT INTO donhangdadatmua ( id_donhang,id_user, ghichu ,date ,trangthaidonhang) VALUES (?,?,?,?,?)",
      [id_donhang,id_user, Note, date, orderstatus],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
      db.query("select max(id_donhangdadatmua) as id_donhangdadatmua from donhangdadatmua", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      id_donhangdadatmua =result[0].id_donhangdadatmua;
      for (let i = 0; i < cartlength.length; i++) {
        db.query(
          "INSERT INTO chitietdonhang (id_donhangdadatmua,id_donhang, id_chitietdienthoai,tendienthoai,ram,giakhuyenmai, soluongsanpham, giaban,trangthai) VALUES (?,?,?,?,?,?,?,?,?)",
          [id_donhangdadatmua,id_donhang, cartlength[i].tenloaidienthoai, cartlength[i].tendienthoai, cartlength[i].ram, cartlength[i].giakhuyenmai, cartlength[i].soluong, cartlength[i].giaban, status],
          (err, result) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    }
  });
});
//Update account
app.post('/updateaccount', (req, res) => {
  const id_user = req.body.id_user ;
  const email = req.body.email ;
  const password =req.body.password ; 
  const phone = req.body.phone ;
  const sex = req.body.sex ;
  const lastname = req.body.lastname;
  db.query(
    `UPDATE user a SET a.email=? , a.hovaten=? , a.matkhau=? , a.gioitinh=? , a.sodienthoai=? where a.id_user =${id_user}`,
    [email , lastname, password, sex , phone],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// get don hang da mua 
app.get("/purchaseorder", (req, res) => {
  db.query(`SELECT * from  donhangdadatmua a , chitietdonhang b where a.id_donhangdadatmua=b.id_donhangdadatmua  `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//Get theo gia tang dan 
app.get("/priceincrease", (req, res) => {
  db.query(`SELECT * from  dienthoai a ORDER BY a.giakhuyenmai ASC `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//
//Get theo gia giam dan
app.get("/discountbyprice", (req, res) => {
  db.query(`SELECT * from  dienthoai a ORDER BY a.giakhuyenmai DESC `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//Get theo loai dien thoai
app.get("/typeofphone/:id", (req, res) => {
  const id_loaidienthoai = req.params.id;
  db.query(`SELECT * from  loaidienthoai a , dienthoai b where a.id_loaidienthoai = b.id_loaidienthoai and a.id_loaidienthoai =${id_loaidienthoai} `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.get("/phoneaccessories", (req, res) => {
  db.query(`SELECT * from  phukien `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.get("/phoneaccessories1/:id", (req, res) => {
  const id_phukien=req.params.id;
  db.query(`SELECT * from  phukien where id_phukien <= ${id_phukien} `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.get("/accessorytype/:id", (req, res) => {
  id_loaiphukien = req.params.id
  db.query(`SELECT * from  phukien a where a.id_loaiphukien =${id_loaiphukien} `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.get("/accessorydetails/:id", (req, res) => {
  const id_phukien= req.params.id;
  db.query(`SELECT * from  phukien a where a.id_phukien=${id_phukien} `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.post('/addcartaccessory', (req, res) => {
  const Id_user = req.body.Id_user;
  const Accessorusname = req.body.Accessorusname;
  const Phonetypename = req.body.Phonetypename;
  const Ram = req.body.Ram;
  const Color = req.body.Color;
  const Image = req.body.Image;
  const Price = req.body.Price;
  const Promotionalprice = req.body.Promotionalprice;
  const Amount = req.body.Amount;
  const Content = req.body.Content;
  db.query(
    "INSERT INTO giohang ( id_user, tendienthoai,tenloaidienthoai,ram,mau,hinhanh,giaban,soluong,noidung,giakhuyenmai) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [Id_user, Accessorusname, Phonetypename, Ram, Color, Image, Promotionalprice, Amount, Content, Price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.post('/addvaluateaccessory', (req, res) => {
  const Id_user = req.body.formEvaluate.Id_user;
  const lastName = req.body.formEvaluate.lastName;
  const date = req.body.formEvaluate.date;
  const  id_Accessory=req.body.formEvaluate.id_Accessory;
  const  contentrated = req.body.formEvaluate.contentrated;
  const  star = req.body.formEvaluate.star;
  db.query(
    "INSERT INTO danhgiaphukien ( id_user, id_phukien,tendanhgia,danhgia,date,saodanhgia) VALUES (?,?,?,?,?,?)",
    [Id_user, id_Accessory, lastName, contentrated, date, star],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.get("/accessoryevaluate", (req, res) => {

  db.query(`SELECT * from  danhgiaphukien `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
app.post('/totalevaluateaccessory', (req, res) => {
  const id_Accessory = req.body.id_Accessory;
  const total = req.body.total;
  db.query(
    `UPDATE phukien a SET a.soluongdanhgia=?  where a.id_phukien =${id_Accessory}`,
    [total],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//huy don hang
app.post('/cancelorder/:id', (req, res) => {
  const id_chitietdonhang = req.params.id;
  const cancelorder = "Đơn hàng đã hủy"
  db.query(
    `UPDATE chitietdonhang a SET a.trangthai=?  where a.id_chitietdonhang =${id_chitietdonhang}`,
    [cancelorder],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//
app.post('/totalstar', (req, res) => {
  const id_phone = req.body.id_phone;
  const total = req.body.total;
  const totalmax =req.body.totalmax;
  db.query(
    `UPDATE dienthoai a SET a.soluongdanhgia=?, a.sao=? where a.id_dienthoai =${id_phone}`,
    [total,totalmax],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.post('/totalevaluateaccessory', (req, res) => {
  const id_Accessory = req.body.id_Accessory;
  const total = req.body.total;
  const totalmax =req.body.totalmax;
  db.query(
    `UPDATE phukien a SET a.soluongdanhgia=?, a.sao=? where a.id_phukien =${id_Accessory}`,
    [total,totalmax],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
// GET thương hiệu nỗi bật Apple
app.get("/outstandingbrand", (req, res) => {
  db.query(`SELECT * from  dienthoai a , loaidienthoai b where a.id_loaidienthoai = b.id_loaidienthoai and b.id_loaidienthoai = 1  `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//////////Phần ADMIN//////////////////////
// Dang nhap trang admin
app.get("/loginadmin", (req, res) => {
  db.query(`SELECT * from  admin `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//Get điện thoại
app.get("/phone-admin", (req, res) => {
  db.query(`SELECT * from  dienthoai `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

//
//Get màu điên thoại
app.get("/colorphone-admin", (req, res) => {
  db.query(`SELECT * from  mau `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//
// Get loai ram
app.get("/typeramphone-admin", (req, res) => {
  db.query(`SELECT * from  loairam `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

//
//Get chi tiết Ram
app.get("/detailsamphone-admin", (req, res) => {
  db.query(`SELECT * from  chitietram `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});


//Get loại điện thoại
app.get("/typephone-admin", (req, res) => {
  db.query(`SELECT * from  loaidienthoai `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});


//GET chi tiết điện thoại
app.get("/detailsphone-admin", (req, res) => {
  db.query(`SELECT * from  chitietdienthoai `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

//Get đánh giá phone
app.get("/evaluatephone-admin", (req, res) => {
  db.query(`SELECT * from  danhgia `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

///////// Phụ kiện điện thoại
//Get phụ kiện điện thoại
app.get("/accessoryphone-admin", (req, res) => {
  db.query(`SELECT * from  phukien `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});
//Get loại phụ kiện
app.get("/typeofaccessories-admin", (req, res) => {
  db.query(`SELECT * from  loaiphukien `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});


//Đánh giá phụ kiện
app.get("/accessoryreviews-admin", (req, res) => {
  db.query(`SELECT * from  danhgiaphukien `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

//Get user
app.get("/user-admin", (req, res) => {
  db.query(`SELECT * from  user `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

//

//Get Quản lý đơn hàng
app.get("/ordermanagement-admin", (req, res) => {
  db.query(`SELECT * from  donhang a , donhangdadatmua b , chitietdonhang c where a.id_donhang=b.id_donhang and b.id_donhangdadatmua=c.id_donhangdadatmua `,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(result);
      }
    });
});

//
//
app.post('/addphone-admin', (req, res) => {
  const id_loaidienthoai = req.body.addphoneadmin.id_loaidienthoai;
  const tendienthoai = req.body.addphoneadmin.tendienthoai;
  const giakhuyenmai = req.body.addphoneadmin.giakhuyenmai;
  const giaban = req.body.addphoneadmin.giaban;
  const hinhanh = req.body.addphoneadmin.hinhanh;
  const noidung = req.body.addphoneadmin.noidung;
  const tinhtrang = 1;
  const soluongdanhgia=0;
  const sao = 0 ;
  db.query(
    "INSERT INTO dienthoai (id_loaidienthoai, tendienthoai,hinhanh,giaban,giakhuyenmai,tinhtrang,noidung,soluongdanhgia,sao) VALUES (?,?,?,?,?,?,?,?,?)",
    [id_loaidienthoai, tendienthoai, hinhanh, giaban, giakhuyenmai, tinhtrang, noidung, soluongdanhgia, sao],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//Xac nhan don hang
app.post('/confirm-admin/:id', (req, res) => {
  const id_donhangdadatmua = req.params.id;
  console.log(id_donhangdadatmua)
  const trangthai = "Đã Xác Nhận";
  db.query(
    `UPDATE chitietdonhang a SET a.trangthai=?  where a.id_donhangdadatmua =${id_donhangdadatmua}`,
    [trangthai],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.post('/waiting-admin/:id', (req, res) => {
  const id_donhangdadatmua = req.params.id;
  console.log(id_donhangdadatmua)
  const trangthai = "Đơn hàng đang được giao";
  db.query(
    `UPDATE chitietdonhang a SET a.trangthai=?  where a.id_donhangdadatmua =${id_donhangdadatmua}`,
    [trangthai],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
app.post('/complete-admin/:id', (req, res) => {
  const id_donhangdadatmua = req.params.id;
  console.log(id_donhangdadatmua)
  const trangthai = "Đơn hàng được giao thành công";
  db.query(
    `UPDATE chitietdonhang a SET a.trangthai=?  where a.id_donhangdadatmua =${id_donhangdadatmua}`,
    [trangthai],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});
//
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});