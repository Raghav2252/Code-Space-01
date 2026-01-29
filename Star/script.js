let row = 10;
for(let i = 1; i <= row; i++){
    let line = '';
    for(let j = 1; j <=row - i; j++){
        line += ' ';
    }
    for(let k =1; k<=i*2-1; k++){
        line += '*';
    }
    console.log(line);
}
     