// CELULAR 
// https://twitter.com/frdznico/status/1589391400998928384?t=lC5z2VoBIvwd9INjYV91Nw&s=19

// https://twitter.com/TheWoofWorld/status/1593024744491978752?t=wet45MuMu6BQRFeQuDr4xA&s=19

// https://twitter.com/RealDante12/status/1592915532306870272?t=_VA6RhvHuD3HjnAxPZMm1Q&s=19

// https://twitter.com/GHermano_2022/status/1593083864955879426?t=tQoT_Bt9h3WifFKrlq93YA&s=19

// https://twitter.com/TNTSportsAR/status/1593226560873472002?t=YF_0SA9VTrDeJnB0f6vixQ&s=19

// https://twitter.com/SebaRoggero/status/1593190050254114816?t=BcnbnAkj9ndTHbbiZ0mzbw&s=19


// PC
// https://twitter.com/i/status/1593024744491978752
// https://twitter.com/i/status/1592915532306870272
// https://twitter.com/i/status/1593083864955879426
// https://twitter.com/i/status/1593226560873472002
// https://twitter.com/i/status/1593190050254114816
// https://twitter.com/i/status/1589391400998928384


// const json = 'https://twitter.com/SebaRoggero/status/1593190050254114816?t=BcnbnAkj9ndTHbbiZ0mzbw&s=19';
// const json = 'https://twitter.com/RealDante12/status/1592915532306870272?t=_VA6RhvHuD3HjnAxPZMm1Q&s=19';
const json='https://twitter.com/i/status/1589391400998928384'


// const json23 = json.split("/").pop()

if (json.includes('?t=')) {
    
    // const kjj = json23.split('?').shift()
    const json23 = json.split("/").pop().split('?').shift()

    console.log('es del celular',json23);

    // console.log(kjj);

} else {
    const json23 = json.split("/").pop()
    console.log('no es del celular', json23);
}

