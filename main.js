
function hash_generator(){
    // create variable 
    let hash_value = " ";

    // random genarator 1
    let random_1 = Math.round(Math.random()*100);
    random_1 = formater(random_1).toString();

    // random genarator 1
    let random_2 = Math.round(Math.random()*100);
    random_2 = formater(random_2).toString();

    // random genarator 1
    let random_3 = Math.round(Math.random()*100);
    random_3 = formater(random_3).toString();

    // formatter function
    function formater(num){
        let fnum = null;
        if (num < 10){
            fnum = "0" + num;
        }
        else{
            fnum = num;
        }
        return fnum;
    }

    //final hash value
    hash_value = "#" + random_1 + random_2 + random_3;

    return hash_value;

};


console.log(hash_generator());


// event listener function

let button = document.querySelector('button');

document.addEventListener("click", function(){
    document.body.style.background = hash_generator();
});




