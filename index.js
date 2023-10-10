const form = document.getElementById('input-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('input1').valueAsNumber;
    const resultBox = document.getElementById('result-box');
    let nilai = [];
    let number = 0

    function Ganjilfunc(input) {
        const segitiga = document.getElementById('button-segitiga').value;
        const ganjil = document.getElementById('button-ganjil').value;
        const prima = document.getElementById('button-prima').value;
        if (ganjil) {
            for (let index = 0; index < input; index++) {
                if (index % 2 !== 0) {
                    number = nilai.push(index)
                }
            }
        } else if(prima) {
            for (let index = 2; index <= input; index++) {
                if (index % 2 !== 0 || index % 3 !== 0 || index % 5 !== 0 || index % 7 !== 0) {
                    number = nilai.push(index)
                } else {
                    break
                }
                    
            }
        }
    }

    Ganjilfunc(input);
    console.log(nilai);
    resultBox.style.display = 'block';
    const result = document.getElementById('result');
    result.innerHTML = nilai;
    console.log(result);
});
