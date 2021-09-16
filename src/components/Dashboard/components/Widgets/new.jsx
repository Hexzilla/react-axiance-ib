/* eslint-disable global-require */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';

const FilteringDropdown = () => {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState('');

  const handleSubmitCourse = (event) => {
    alert(`Your selected value is: ${course}`);
    event.preventDefault();
  };

  const handleChangeCourse = (event) => {
    setCourse(event.target.value);
  };

  const getUnique = (arr, comp) => {
    const unique = arr
      // store the comparison values in array
      .map((e) => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e) => arr[e])

      .map((e) => arr[e]);

    return unique;
  };

  useEffect(() => {
    const courses = require('./courses.json');
    setCourses(courses);
  }, []);

  const uniqueCouse = getUnique(courses, 'tag');

  const filterDropdown = courses.filter((result) => result.tag === course);

  return (
    <div>

      <form onSubmit={handleSubmitCourse}>
        <label>
          Filtering json
          <select value={course} onChange={handleChangeCourse}>
            {uniqueCouse.map((course) => (
              <option key={course.id} value={course.tag}>
                {course.tag}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
        <div>
          {filterDropdown.map((course) => (
            <div key={course.id} style={{ margin: '10px' }}>
              {course.course}
              <br />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};
export default FilteringDropdown;
