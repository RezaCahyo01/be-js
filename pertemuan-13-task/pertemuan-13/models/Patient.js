// import database
const db = require("../config/database");

// membuat class Model Patient
class Patient {
  /**
   * Membuat method static all: mengambil semua data dari DB
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results);
      });
    });
  }

  /**
   * Membuat method static create: melakukan insert data ke database
   */
  static async create(data) {
    /**
     * Promise 1: melakukan insert data ke database.
     * resolve id dari data yang baru diinsert.
     */
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results.insertId);
      });
    });

    /**
     * Refactor Promise 2.
     * Select data berdasarkan id menggunakan method find.
     */
    const patient = await this.find(id);
    return patient;
  }

  /**
   * Membuat method static find: melakukan select data by id
   */
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // destructing array
        const [patient] = results;
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(patient);
      });
    });
  }

  /**
   * Membuat method static update: melakukan update data ke database.
   */
  static async update(id, data) {
    // Promise 1: melakukan update data ke database
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results);
      });
    });

    // Select data berdasarkan id menggunakan method find.
    const patient = await this.find(id);
    return patient;
  }

  /**
   * Membuat method static delete: melakukan delete data di database.
   */
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        // ternary operator untuk handle hasil promise: reject atau resolve
        err ? reject(err) : resolve(results);
      });
    });
  }
}

// export class Patient
module.exports = Patient;