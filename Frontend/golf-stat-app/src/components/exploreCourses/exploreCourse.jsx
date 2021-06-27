import axios from "axios";
import { useEffect, useState } from "react";

const ExploreCourses = (props) => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/getCourses`)
      .then((res) => setCourses(res.data));
  }, []);

  if (courses === undefined) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div>
      <div>
        {courses.map((course) => {
          return (
            <div>
              <div className="course-info">
                <div className="mb-3">
                  <div>
                    <img src={course.courseImageUrl} alt="course crest pic" />
                  </div>
                  <div>
                    <div>
                      <h3>Course Name: {course.courseName}</h3>
                    </div>
                    <div>
                      <p>Course Par:{course.coursePar}</p>
                    </div>
                    <div>
                      <p>Year Founded:{course.yearEstablished}</p>
                    </div>
                    <div>
                      <p>Course Lenght: {course.courseLength}</p>
                    </div>
                    <div>
                      <p>Address: {course.courseAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreCourses;
