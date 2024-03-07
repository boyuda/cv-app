function CVTable({ values }) {
  return (
    <div className="cv-container">
      <div className="cv-general-container">
        <div className="cv-general-picture-container padding-container">
          <h1>picture</h1>
        </div>
        <div className="cv-general-info-container padding-container">
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
        </div>
        <div className="cv-general-values-container padding-container">
          <p>{values.name}</p>
          <p>{values.email}</p>
          <p>{values.phone}</p>
        </div>
      </div>
      <div className="section-separator">
        <h3>Educational Experience</h3>
      </div>
      <div>
        {values.education.map((e, index) => (
          <div key={index} className="cv-education-container">
            <div className="cv-education-date">
              <p>
                {e.studyStart} - {e.studyEnd}
              </p>{' '}
            </div>
            <div className="cv-education-info">
              <p>
                {e.school} - {e.studyTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="section-separator">
        <h3>Work Experience</h3>
      </div>
      <div>
        <p>{values.work[0].company}</p>
      </div>
    </div>
  );
}

export default CVTable;
