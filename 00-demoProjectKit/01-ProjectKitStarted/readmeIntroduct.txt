--demo git | cách git hoạt động trước

--kết nối git và thư mục

--tạo repository trên github trước, rồi liên kết với folder có sẵn này bằng câu lệnh

--mình cho folder này kết nối với git bằng lệnh git init (tạo thư mục .git để dùng được các comandline)
 	git remote add origin https://github.com/LeHoDiep/0-ProjectStart.git
--nếu bạn chưa đăng nhập account thì nên đăng nhập 
--sau đó dùng lệnh:  git config --global --add safe.directory H:/04-myJavascriptTours/nodejs/0-ProjectStart
--	để xác thực tính an toàn của project (github sợ mình đưa code cho người lạ)
	--nếu làm đúng thì mình sẽ có hiển thị nhánh (master)

--đẩy project lên github bằng cú pháp: git add .  xác nhận những thứ đã thêm
					git commit -m "sms" ghi chú lại những gì đã làm
					nếu ép khai tên thì cứ khai tên bth
--					git push origin branch
$ git push origin master
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
--lỗi này là : muốn hỏi mình rằng đã liên kết repository chưa ? $ git remote add origin https://github.com/LeHoDiep/0-ProjectStart.git 
--sau đó chạy lại push là xong

--để sử dụng code trên máy khác, nhớ cập nhật lại nodejs ở phiên bản mới nhất để trách code k chạy được

----------------
Hướng dẫn cách sử dụng
hướng dẫn cách tạo các thư mục
hướng dẫn liên kết các thư mục
hướng dẫn dùng ảnh trong  project
hướng dẫn cách viết scss
