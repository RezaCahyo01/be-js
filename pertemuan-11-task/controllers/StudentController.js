// import students
const students = require("../data/students");
// Buat Class Student Controller
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan semua student",
      data: students
    };
    res.json(data);
  }
  store(req, res) {
    const { nama } = req.body;
    students.push(nama);
    const data = {
      message: `Menambahkan data Students : ${nama}`,
      data: students
    };
    res.json(data);
  }
  update(req, res) {
    // Destructuring Object (karena object jadi bisa diekstrak)
    const { id } = req.params;
    const { nama } = req.body;
    students[id] = nama;
    const data = {
      message: `Mengedit data Students id ${id}, nama ${nama}`,
      data: students
    };
    res.json(data);
  }
  destroy(req, res) {
    const { id } = req.params;
    students.splice(id, 1);
    const data = {
      message: `Menghapus data Students id ${id}`,
      data: students
    };
    res.json(data);
  }
}

// buat object
const object = new StudentController();

// export
module.exports = object;