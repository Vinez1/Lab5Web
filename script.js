function validasi() {
    let namalengkap = document.forms["formValidasi"]["NamaLengkap"].value;
    let nim = document.forms["formValidasi"]["NIM"].value;
    let email = document.forms["formValidasi"]["Email"].value;
    let prodi = document.forms["formValidasi"]["Prodi"].value;
    let alamat = document.forms["formValidasi"]["Alamat"].value;
    
    if (namalengkap == "" || nim == "" || email == "" || prodi == "" || alamat == "" ) {
      alert("Field must be filled out");
      return false;
    }
  }


