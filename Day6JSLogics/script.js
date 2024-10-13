// const names = ["alice", "Bob", "Charlie", "David", "Emma"];

// names.forEach(function (value) {
//   //   console.log(value);
//   if (value === "Charlie") {

//   } else {
//     console.log(value);
//   }
// });

// we cant't use break and continue in this method beacuse foreach is not real loop

// Now it's time to Map Method

// Map - Map is used for making a new arrary from the old arrary its uses for most of  the time .

// const names = ["alice", "Bob", "Charlie", "David", "Emma"];

// let newarr = names.map(function(value){
    
//     return value + " ji";

// })

// Filter method
// Filter - filtter give me new arrary blank arrary but elements decrese in this method

// const names = ["alice", "Bob", "Charlie", "David", "Emma"];

// const newarr = names.filter(function(value){
//   return value.startsWith("a");

// })


// destructuring

// Destructuring - 

const user = {
    personalInfo: {
      firstName: "Deepak",
      lastName: "Raghuwaanshi",
      email: "deepak.raghuwaanshi@example.com",
      phone: "+91 12345 67890",
      address: {
        street: "123 Main St",
        city: "Lucknow",
        state: "Uttar Pradesh",
        postalCode: "226001",
        country: "India"
      },
      dateOfBirth: "2003-04-15",
      gender: "Male",
      profilePicture: "profile_picture_url",
    },
    education: {
      highestDegree: "BCA",
      graduationYear: 2024,
      institutions: [
        {
          name: "XYZ University",
          degree: "Bachelor of Computer Applications",
          startYear: 2021,
          endYear: 2024,
        },
        {
          name: "UP Board",
          degree: "12th Class",
          specialization: "Science",
          graduationYear: 2021
        }
      ]
    },
    professionalExperience: [
      {
        jobTitle: "Sales Executive",
        department: "Education Loan",
        company: "Axis Bank",
        startDate: "2022-11-24",
        endDate: "Present",
        responsibilities: [
          "Assisting customers with education loan inquiries and applications",
          "Maintaining client relationships",
          "Achieving sales targets"
        ]
      }
    ],
    skills: {
      programming: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      other: ["Sales", "Customer Service", "Problem-Solving", "Communication"]
    },
    projects: [
      {
        projectName: "Wanderlust (Airbnb Clone)",
        description: "Full-stack web application for property listings, bookings, and user authentication",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        role: "Full-Stack Developer",
        completionDate: "2024-08-10"
      },
      {
        projectName: "BookStore Web Application",
        description: "Implemented an online bookstore using MERN stack with user authentication and book management",
        technologies: ["MongoDB", "Express.js", "React", "Node.js"],
        role: "Full-Stack Developer",
        completionDate: "2024-07-01"
      }
    ],
    currentChallenge: {
      name: "100 Days of Code",
      focusArea: "Web Development",
      startDate: "2024-10-08",
      day: 2
    },
    goals: {
      shortTerm: ["Complete JavaScript projects", "Improve frontend skills", "Apply for developer jobs"],
      longTerm: ["Become a Full-Stack Developer", "Contribute to open-source projects"]
    },
   
  };
  

// user.education.highestDegree;


// let { highestDegree } = user.education;
// console.log(highestDegree); // Outputs: "BCA"


// let { programming } = user.skills;
// console.log(programming); // Outputs: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"]


// spread and rest ...

// const names = ['John',"JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"];
// // spread oprerator
// const copyNames = [...names]; 
// const smallObject = { 
//     name: "John",
//     age :30,
//     city : "New york",
// }
// const newObj = {...smallObject};

// rest operator
// rest - is used for creating a new arrary in function

// function abcd(a,b,c,...rest){
//     console.log(a,b,c,rest);
    
// }

// abcd(1,2,3,4,5,6,7,8,9);