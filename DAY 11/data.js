const data = {
  users: [
    { email: "admin@gmail.com", password: "12345" }
  ],
  subjects: [
    {
      id: 1,
      name: "Mathematics",
      topics: [
        { id: 101, title: "Algebra", description: "Equations and variables", notes: "Algebra deals with symbols and equations.", difficulty: "Medium" },
        { id: 102, title: "Trigonometry", description: "Study of triangles", notes: "Includes sine, cosine and tangent.", difficulty: "Hard" },
        { id: 103, title: "Calculus", description: "Derivatives and integrals", notes: "Calculus studies change and motion.", difficulty: "Hard" },
        { id: 104, title: "Statistics", description: "Data analysis", notes: "Mean, median and probability.", difficulty: "Easy" },
        { id: 105, title: "Geometry", description: "Shapes and angles", notes: "Study of lines, circles and polygons.", difficulty: "Medium" }
      ]
    },
    {
      id: 2,
      name: "Science",
      topics: [
        { id: 201, title: "Physics", description: "Motion and force", notes: "Newton’s laws of motion.", difficulty: "Medium" },
        { id: 202, title: "Chemistry", description: "Elements and reactions", notes: "Periodic table and chemical bonds.", difficulty: "Medium" },
        { id: 203, title: "Biology", description: "Life science", notes: "Cells, organs and ecosystems.", difficulty: "Easy" },
        { id: 204, title: "Astronomy", description: "Study of space", notes: "Planets, stars and galaxies.", difficulty: "Easy" },
        { id: 205, title: "Environmental Science", description: "Nature and environment", notes: "Climate change and sustainability.", difficulty: "Medium" }
      ]
    }
  ]
};

module.exports = data;