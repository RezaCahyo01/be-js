// import students
const Student = require("../models/Student");
// Buat Class Student Controller
class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua student",
      data: students
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */

    const students = await Student.create(req.body);
    const data = {
      message: `Menambahkan data Students`,
      data: students
    };
    res.json(data);
  }

  update(req, res) {
    // Destructuring Object (karena object jadi bisa diekstrak)
    const {
      id
    } = req.params;
    const {
      nama
    } = req.body;
    students[id] = nama;
    const data = {
      message: `Mengedit data Students id ${id}, nama ${nama}`,
      data: students
    };
    res.json(data);
  }

  destroy(req, res) {
    const {
      id
    } = req.params;
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