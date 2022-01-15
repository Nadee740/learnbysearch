import "./studenttask.css";
const StudentTask = () => {
  return (
    <div className="studenttask">
      <h2 className="mentorcarousel-head">What students are doing at LBR</h2>
      <div className="studenttask-table">
        <div className="studenttask-table-col">
          <img
            src="/images/studentsTasks/write.svg"
            alt="Writing and publishing Research Papers"
            className="studenttask-table-col-img"
          />
          <p className="studenttask-table-col-text">
            Writing and publishing Research Papers
          </p>
        </div>
        <div className="studenttask-table-col">
          <img
            src="/images/studentsTasks/undraw_account_re_o7id.svg"
            alt="Writing and publishing Research Papers"
            className="studenttask-table-col-img"
          />
          <p className="studenttask-table-col-text">
            Building Rock Solid Research Profile
          </p>
        </div>
        <div className="studenttask-table-col">
          <img
            src="/images/studentsTasks/team.svg"
            alt="Writing and publishing Research Papers"
            className="studenttask-table-col-img"
          />
          <p className="studenttask-table-col-text">
            Work with Best Researchers Globally
          </p>
        </div>
        <div className="studenttask-table-col">
          <img
            src="/images/studentsTasks/earn.svg"
            alt="Writing and publishing Research Papers"
            className="studenttask-table-col-img"
          />
          <p className="studenttask-table-col-text">
            Earn Stipend on Sponsered Research Projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentTask;
