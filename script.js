const semuaTombol = document.querySelectorAll('#btn-container button');
const input = document.getElementById('input')

const operasi = ['+', '-', '*', '/']
let angka1 = '';
let operator = '';

semuaTombol.forEach(tombol => {
    tombol.addEventListener('click', () => {
        const nilai = tombol.textContent;
        if(operasi.includes(nilai)){
            operator = nilai;
            angka1 = input.value;
            input.value = '';
        } else if (nilai === 'C'){
            input.value = '';
        } else if (nilai === '='){
            let angka2 = input.value;
            if(operator === '+'){
                input.value =  Number(angka1) + Number(angka2);
            } else if (operator === '-'){
                input.value = Number(angka1) - Number(angka2);
            } else if (operator === '*'){
                input.value = Number(angka1) * Number(angka2);
            } else if (operator === '/'){
                input.value = Number(angka1) / Number(angka2);
            }
        } else {
            input.value += nilai;
        }
           let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let rgb = `rgb(${r}, ${g}, ${b})`;
        input.style.border = ` 2px solid ${rgb}`
    });
});

// tes perubahan
