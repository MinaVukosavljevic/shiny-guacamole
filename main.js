// var telefoni = {
//     proizvodjac: {
//         samsung: [
//             {
//                 ime: "Galaxy Note 10",
//                 os: "Android Oreo"
//             },
//             {
//                 ime: "Galaxy S10",
//                 os: "Android Oreo"
//             },
//             {
//                 ime: "Galaxy Fold",
//                 os: "Android Oreo"
//             }
//         ],
//         apple: [
//             {
//                 ime: "iPhone X",
//                 os: "ios 12"
//             },
//             {
//                 ime: "iPhone 8",
//                 os: "ios 12 red"
//             },
//             {
//                 ime: "iPhone 7",
//                 os: "ios 12"
//             }
//         ],
//         huawei: [
//             {
//                 ime: "Mate 30 Pro",
//                 os: "Android Oreo"
//             },
//             {
//                 ime: "Mate 20 Pro",
//                 os: "Android Pie"
//             },
//             {
//                 ime: "P 20 Pro",
//                 os: "Android Pie"
//             }
//         ]
//     },
//     boja: ["Nice black", "Amazing pink", "Stunning orange"]
// }

// for(let i=0; i<telefoni.boja.length; i++){
//     console.log(telefoni.boja(i));
// }

var pijaca = {
    vrste:[
        {
            voce:[
                {
                    ime: "jabuka",
                    pr: false
                    
                },
                {
                    ime: "kruska",
                    pr: false  
                },
                {
                    ime: "ananas",
                    pr: false  
                }
            ]
        },
        {  
            povrce:[
                {
                    ime: "sargarepa",
                    pr: false
                    
                },
                {
                    ime: "kupus",
                    pr: false  
                },
                {
                    ime: "kelj",
                    pr: false  
                }
            ]
        }
    ]
    
}

console.log(pijaca.vrste[1].povrce[0].pr);