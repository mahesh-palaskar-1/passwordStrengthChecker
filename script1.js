function ShowResult() {
    let C = document.querySelector('#C').value;
    let Python = document.querySelector('#Python').value;
    let Java = document.querySelector('#Java').value;
    let DBMS = document.querySelector('#DBMS').value;
    let OS = document.querySelector('#OS').value;

    let total = parseFloat(C) + parseFloat(Python) + parseFloat(Java) + parseFloat(DBMS) + parseFloat(OS);
    let percentage = (total * 100) / 500;

    if (percentage > 90){
        document.querySelector('.grade').innerHTML= 'A+'
    }else if (percentage > 80){
        document.querySelector('.grade').innerHTML= 'A'
    }else if (percentage > 70){
        document.querySelector('.grade').innerHTML= 'B+'
    }else if (percentage > 60){
        document.querySelector('.grade').innerHTML= 'B'
    }else if (percentage > 50){
        document.querySelector('.grade').innerHTML= 'C+'
    }else if (percentage > 40){
        document.querySelector('.grade').innerHTML= 'C'
    }else if (percentage > 34){
        document.querySelector('.grade').innerHTML= 'D'
    }else{
        document.querySelector('.grade').innerHTML= 'You are failed'
    }

    document.querySelector('.per').innerHTML= percentage;
    document.querySelector('.total').innerHTML= total;

    if (percentage >= 35){
        document.querySelector('#res').innerHTML= 'You are passed'
    }

}