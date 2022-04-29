# Lab5Web

**Nama : Fery Affandi** <br>
**NIM : 312010018** <br>

# Praktikum 5 : JavaScript
## Langkah-langkah

Persiapkan dokumen HTML dengan nama <b>lab5_javascript.html </b> seperti berikut

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mengenal JavaScript</title>
</head>
<body>
    <h1>Pengenalan JavaScript</h1>
    <h3>Contoh document.write dan console.log</h3>
    <script>
        document.write("Hello World");
        console.log("Hello World");
    </script>
</body>
</html>
```
![](foto/1.png)
<p align="center">Gambar 5.1 Tampilan Contoh Javascript

<br>

## Javascrip Dasar

Pemakaian Alert sebagai property window.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alert box </title>
</head>
<body>
    <script language = "JavaScript">
        <!-- 
        window.alert("ini merupakan pesan untuk anda");
        //-->
    </script>
</body>
</html>
```

![alert](foto/2.png)
<p align="center">Gambar 5.2 Tampilan Alert

Pemakaian method dalam objek

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="U>TF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>skrip JavaScript</title>
</head>
<body>
    percobaan memakai JavaScript <br>
    <script language = "JavaScript">
        <!-- 
        document.write("selamat mencoba JavaScript<br>");
        document.write("semoga sukses");
        //-->
    </script>
</body>
</html>
```

![method](foto/3.png)
<p align="left">Gambar 5.3 Tampilan method

pemakaian  Prompt

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="U>TF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pemasukan Data</title>
</head>
<body>
    <script language = "JavaScript">
        <!-- 
            var nama = prompt("siapa nama anda?","masukan nama anda");  
            document.write("hai, " + nama);
        //-->
    </script>
</body>
</html>
```

![](foto/4.png)
<p align="center">Gambar 5.4
<br>

![](foto/5.png)
<p align="center">Gambar 5.5

Pembuatan fungsi dan cara pemanggilannya

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="U>TF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Program JavaScript</title>
    <script lang="Javascript">
        function pesan (){
            alert ("memanggil javascript lewat body onload")
        }
    </script>
</head>
<body
    onload="pesan()">
</body>
</html>
```

![](foto/6.png)
<p align="center">Gambar 5.6

## Dasar Pemrograman Di Javascript

Operasi dasar aritmatika
``` html <br>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>contoh program javascript</title>
        <script language = "javascript">
            function test(val1,val2)
            {
                document.write("<br>"+"perkalian : val1*val2"+"<br>")
                document.write(val1*val2)
                document.write("<br>"+"pembagian : val1/val2"+"<br>")
                document.write(val1/val2)
                document.write("<br>"+"penjumlahan : val1+val2"+"<br>")
                document.write(val1+val2)
                document.write("<br>"+"pengurangan : val1-val2"+"<br>")
                document.write(val1-val2)
                document.write("<br>"+"modulus : val1%val2"+"<br>")
                document.write(val1%val2)
            }   
        </script>
    </head>
    <body>
        <input type="button" name="button1" value="arithmetic" onclick=test(9,4)>
    </body>
</html>
``` 
Lalu hasilnya akan seperti ini.

 ![](foto/7.png)
 <p align="center">Gambar 5.7

 ![](foto/8.png)
 <p align="center">Gambar 5.8

Seleksi kondisi (if..else)
```html <br>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>contoh if-else</title>
        <script language = "javascript">
            <!--
            var nilai= prompt("nilai (0-100): ",0);
            var hasil ="";
            if (nilai >=60)
            hasil = "lulus";
            else
            hasil + "tidak lulus";
            document.write("hasil: " + hasil);
            //-->
        </script>
    </head>
    </body>
</html>
```

dan hasilnya akan seperti ini

![](foto/9.png)
<p align="center">Gambar 5.9

![](foto/10.png)
<p align="center">Gambar 5.10

### <b>Penggunaan operator switch untuk seleksi kondisi<b>

```html <br>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>contoh program javascript</title>

        <script language="javascript">
            function test()
            {
                val1=window.prompt("input nilai (1-5):")
                switch (val1)
                {
                    case "1" :
                        document.write("bilangan satu")
                        break
                    case "2" : 
                        document.write("bilangan dua")
                        break
                    case "3" : 
                        document.write("bilangan tiga")
                        break
                    case "4" : 
                        document.write("bilangan empat")
                        break
                    case "5" :
                        document.write("bilangan lima")
                        break
                     default : 
                        document.write("bilangan lainnya")

                }
            }
        </script>
    </head>
<body>
    <input type="button" name="button1" value="switch" onclick=test()>
</body>
</html>
```