// Easy Going 

for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// Get Even 

for (let i = 0; i <= 200; i += 2) {
    console.log(i); 
}

// Excited Kitten 

for (let i = 0; i < 20; i++) {
    let random = ['...human...why you taking pictures of me?...', '...the catnip made me do it...', '...why does the red dot always get away...'];
    console.log('Love me, pet me! HSSSSSS!')
    if (i % 2 === 0) {
        console.log(random[Math.floor(Math.random() * 3)]);
    }
}
