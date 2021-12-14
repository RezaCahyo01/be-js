// tahapan producing
function download() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const status = true;
            if (status) {
                resolve("Download Berhasil");
            } else {
                reject("Download Gagal");
            }
        }, 3000);
    });
}

// console.log(download);

//consuming
download()
    .then(function (result) {
        console.log(result);
    })
    .catch(function (err) {
        console.log(err);
    });