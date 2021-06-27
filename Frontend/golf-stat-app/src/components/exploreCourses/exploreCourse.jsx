import axios from "axios";
import { useEffect, useState } from "react";
import "./exploreCourses.css";

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
            <div class="container">
              <div class="row">
                <div className="course-info-container">
                  <div class="col">
                    <div>
                      <div className="course-info">
                        <div className="course-body">
                          <div className="course-body">
                            <img
                              src={course.courseImageUrl}
                              alt="course crest pic"
                            />
                          </div>
                          <div className="course-body">
                            <div className="course-body">
                              <h3>Course Name: {course.courseName}</h3>
                            </div>
                            <div className="course-body">
                              <p>Course Par:{course.coursePar}</p>
                            </div>
                            <div className="course-body">
                              <p>Year Founded:{course.yearEstablished}</p>
                            </div>
                            <div className="course-body">
                              <p>Course Lenght: {course.courseLength}</p>
                            </div>
                            <div className="course-body">
                              <p>Address: {course.courseAddress}</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
