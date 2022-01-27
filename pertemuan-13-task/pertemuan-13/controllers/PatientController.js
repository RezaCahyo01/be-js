// import Model Patient
const Patient = require("../models/Patient");

class PatientController {
  async index(req, res) {
    // Memanggil method all dari Model Patient
    const patients = await Patient.all();

    // Cek apakah data array tidak kosong
    if (patients.length > 0) {
      const data = {
        message: "Menampilkkan semua patients",
        data: patients,
      };

      return res.status(200).json(data);
    }

    // Jika data array kosong
    const data = {
      message: "Patients is empty",
    };

    return res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * Validasi sederhana:
     * - Handle jika salah satu data tidak dikirim
     */

    // destructing object req.body
    const {
      name,
      phone,
      address,
      status,
      in_date_at,
      out_date_at
    } = req.body;

    // jika data undefined maka kirim response error
    if (!name || !phone || !address || !status || !in_date_at | !out_date_at) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // Memanggil method create dari model Patient.
    const patient = await Patient.create(req.body);

    const data = {
      message: "Menambahkan data patient",
      data: patient,
    };

    return res.status(201).json(data);
  }

  async update(req, res) {
    const {
      id
    } = req.params;
    // Mencari data yang ingin diupdate
    const patient = await Patient.find(id);

    // Jika data ada, maka update data.
    if (patient) {
      // Memanggil method update dari model Patient.
      const patient = await Patient.update(id, req.body);
      const data = {
        message: `Mengedit data patients`,
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Jika data tidak ditemukan
    const data = {
      message: `Patient not found`,
    };

    return res.status(404).json(data);
  }

  async destroy(req, res) {
    const {
      id
    } = req.params;
    // Mencari data yang ingin dihapus
    const patient = await Patient.find(id);

    // Jika data ada, maka hapus data
    if (patient) {
      // Memanggil method delete dari Model Patient
      await Patient.delete(id);
      const data = {
        message: `Menghapus data patients`,
      };

      return res.status(200).json(data);
    }

    // Jika data tidak ditemukan
    const data = {
      message: `Patient not found`,
    };

    return res.status(404).json(data);
  }

  async show(req, res) {
    const {
      id
    } = req.params;
    // Mencari data berdasarkan id
    const patient = await Patient.find(id);

    // Jika data ada, maka tampilkan data
    if (patient) {
      const data = {
        message: `Menampilkan detail patients`,
        data: patient,
      };

      return res.status(200).json(data);
    }

    // Jika data tidak ditemukan
    const data = {
      message: `Patient not found`,
    };

    res.status(404).json(data);
  }
}

// Membuat object PatientController
const object = new PatientController();

// Export object PatientController
module.exports = object;