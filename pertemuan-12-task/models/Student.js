// import db
const db = require("../config/database");

// class Model Student
class Student {
    // method untuk query semua data
    static all() {
        return new Promise(function (resolve, reject) {
            // query ke db
            const sql = "SELECT * FROM students";
            db.query(sql, function (err, results) {
                resolve(results);
            });
        });
    }

    static async create(data, callback) {
        const id = await new Promise(function (resolve, reject) {
            // insert data ke db
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, function (err, results) {
                resolve(results.insertId);
            });
        });

        return new Promise(function (resolve, reject) {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, function (err, results) {
                resolve(results);
            });
        });
    }
}

// export class
module.exports = Student;