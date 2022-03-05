// import courseData from "../data/courses.json";

function loadCourses() {
  const courseListSection = $("#course-list")[0];

  let courseItems = "";
  _.each(courseData, (course) => {
    const courseItem =
      '<div class="card mb-3 rounded-3" style="max-width: 350px"><div class="row g-0 p-3"><div class="col-md-4"> <img src="' +
      course.imageUrl +
      '" class="img-fluid rounded-start"alt="css"/></div><div class="col-md-8"><div class="card-body"><h2 class="card-title">' +
      course.title +
      '</h2><p class="card-text">' +
      course.description +
      '</p><p class="card-text"><strong>Author: </strong><small class="text-muted">' +
      course.author +
      "</small></p></div></div></div> </div>";
    courseItems += courseItem;
  });

  courseListSection.innerHTML = courseItems;
}

loadCourses();
