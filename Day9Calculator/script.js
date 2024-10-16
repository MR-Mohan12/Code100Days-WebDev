const calculateFormEl  = document.getElementById("calculateForm");
const resultEl  = document.getElementById("result");



const calculateMarks = (event)=>{
    const maxMark = 400;
    event.preventDefault();
    console.log({event});

    const formData = new FormData(calculateFormEl);
     
    const data = {};
    formData.forEach((value,key)=>{
        data[key] =  +value;

    });
        console.log({data});
       
        const totalMarks = data.maths + data.science + data.english + data.hindi;
        // console.log({totalMarks});
        const percentage = Math.floor((totalMarks / maxMark) *100).toFixed(2);
        // console.log(percentage);
        
        // const resultEl = document.createElement("p");
        // resultEl.className = "result";
        resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMark} and your percentage is ${percentage}%`;

       calculateFormEl.after(resultEl);        
       
}
