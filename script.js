const jsonArray = [
    { "name": "akash", "age": 21, "password": 123, "phone": 123456789 },
    { "name": "raj", "age": 22, "password": 123, "phone": 123456789 },
    { "name": "lingam", "age": 32, "password": 123, "phone": 123456789 }
];


// Using for loop
for (let i = 0; i < jsonArray.length; i++) {
    const item = jsonArray[i];
    console.log(item);
  }
  // Output:
  // { "name": "akash", "age": 21, "password": 123, "phone": 123456789 }
  // { "name": "raj", "age": 22, "password": 123, "phone": 123456789 }
  // { "name": "lingam", "age": 32, "password": 123, "phone": 123456789 }
  
  // Using for...of loop
  for (let item of jsonArray) {
    console.log(item);
  }
  // Output:
  // { "name": "akash", "age": 21, "password": 123, "phone": 123456789 }
  // { "name": "raj", "age": 22, "password": 123, "phone": 123456789 }
  // { "name": "lingam", "age": 32, "password": 123, "phone": 123456789 }
  
  // Using forEach loop
  jsonArray.forEach(item => {
    console.log(item);
  });
  // Output:
  // { "name": "akash", "age": 21, "password": 123, "phone": 123456789 }
  // { "name": "raj", "age": 22, "password": 123, "phone": 123456789 }
  // { "name": "lingam", "age": 32, "password": 123, "phone": 123456789 }


  // Using for...in loop
for (let index in jsonArray) {
  const item = jsonArray[index];
  console.log(item);
}
// Output:
// { "name": "akash", "age": 21, "password": 123, "phone": 123456789 }
// { "name": "raj", "age": 22, "password": 123, "phone": 123456789 }
// { "name": "lingam", "age": 32, "password": 123, "phone": 123456789 }

// Resume data in JSON format
 var resumeData = {
    "name": "Akash N",
    "email": "nakashn007@gmail.com",
    "phone": "9600136106",
    "education": [
        {
            "degree": "Bachelor of Information Technology",
            "major": "Computer Science",
            "school": "Dharamapuram Adhinam Arts College",
            "graduationYear": 2022
        }
    ],
    "experience": [
        {
            "title": "Web Developer",
            "company": "BA Technology",
            "startDate": "March 21, 2023",
            "endDate": "Present",
            "responsibilities": [
                "Developing web applications",
                "Assisting in team leadership"
            ]
        }
    ],
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "Web Development",
        "Team Leadership"
    ]
};
// Log the resumeData object to the console
console.log(resumeData);
