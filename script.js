const getQoute = async()=> {
    const response= await fetch("https://api.quotable.io/random");
    const data= await response.json();
    let qoute=`${data.content}`;
    let author=`${data.author}`;
    // console.log(qoute)
    // console.log(author)
    return [qoute,author];
    
}
const generate= async()=>{
    [qoute,author]=await getQoute();
    // console.log(qoute)
    // console.log(author)
    document.querySelector(".qoute").textContent=`"${qoute}"`;
    document.querySelector(".author").textContent=`${author}`;
}

generate()
//generate new qoute:
generateButton= document.querySelector(".generate-btn");
generateButton.addEventListener("click",generate);

//copy text to clipboard:
const copyToClipboard = async()=>{
    currentQoute=document.querySelector(".qoute").textContent;
    currentAuthor=document.querySelector(".author").textContent;
    await navigator.clipboard.writeText(`${currentQoute} \n - ${currentAuthor}.`);
}

copyButton= document.querySelector(".copy-btn");
copyButton.addEventListener("click",copyToClipboard);


