// var courseApi = 'http://localhost:3000/courses';

// fetch(courseApi)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(courses){
//         console.log(courses);
//     })


// Làm thêm sửa xóa bằng api

var listCoursesBlock = document.querySelector('#list-courses');
var courseApi = 'http://localhost:3000/courses';
// Hàm khởi chạy đầu tiên
function start(){
    getCourses(renderCourses);
    handleThemForm()
}
start()

// Functions
// Lấy ra giữ liệu
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}

// Thêm giữ liệu mới(Đang lỗi ra underfine, Chưa fix được)
function themCourses(data,callback) {
    var options = {
        method: 'POST',
        Headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);

}

// Hàm xóa
function handleDeleteCourse (id) {
    var options = {
        method: 'DELETE',
        Headers: {
            'Content-Type': 'application/json'
        },
    };
    fetch(courseApi +'/' +id, options)
        .then(function(response) {
            response.json();
        })
        .then(function() {
            getCourses(renderCourses);
        });
}
// Hàm render ra màn hình
function renderCourses(courses){

    var htmls = courses.map(function(course){
        return `
        <li>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
        </li>
        `
    });
    listCoursesBlock.innerHTML = htmls.join('')

}

// Hàm sửa 


function handleThemForm(){
    var themBtn = document.querySelector('#them');

    themBtn.onclick = function(){
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
        var formData ={
            name: name,
            description: description,
        }

        themCourses(formData,function(){
            getCourses(renderCourses);
        });
    
       }  


} 



