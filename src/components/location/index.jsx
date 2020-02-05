import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.507471614303!2d-122.41953338487326!3d37.7781453797588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809be90f0637%3A0xd558ef250f4addf9!2sBill%20Graham%20Civic%20Auditorium!5e0!3m2!1sen!2sus!4v1579310784692!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className='location_tag'>
          <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
