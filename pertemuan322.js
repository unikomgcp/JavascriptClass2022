/* If Else Statement */
//Pengecekan lebih banyak

//ubah variable bahasa di line 5 untuk mengecek state IF
let bahasa = "French";
let sapa = "Selamat Pagi";

if(bahasa === "English") {
    sapa = "Good Morning!";
} else if(bahasa === "French") {
    sapa = "Bonjour!";
} else if(bahasa === "Japanese") {
    sapa = "Ohayou Gozaimasu!";
} else if(bahasa === "Korean") {
    sapa = "Annyeong Haseo!";
} else {
    sapa = "#@$#%%# bahasa tidak dapat dimengerti!";
}
console.log(sapa);