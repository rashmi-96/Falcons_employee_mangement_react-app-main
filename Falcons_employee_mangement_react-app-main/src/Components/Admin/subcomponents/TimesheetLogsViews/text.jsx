<div className="m-4">
  <div className="row g-2 formresponsive">
    <div className="col-6">
      <div className="input-group">
        <span className="input-group-text">First Name</span>
        <input
          type="text"
          className="form-control"
          value={EmpFist_Name}
          onChange={this.changeEmpfirstName}
        />
      </div>
    </div>

    <div className="col-6">
      <div className="input-group">
        <span className="input-group-text">Last Name</span>
        <input
          type="text"
          className="form-control"
          value={EmpLast_Namec}
          onChange={this.changeEmpLast_Namec}
        />
      </div>
    </div>

    <div className="col-6">
      <div className="input-group">
        <span className="input-group">Employee Role</span>
        <select
          type="text"
          className="form-select"
          value={comapny_role}
          onChange={this.changecomapny_role}
        >
          {Employeeroles.map((emp) => (
            <option key={emp.CompanyRole_id}>{emp.C_Role}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="col-6">
      <div className="input-group">
        <span className="input-group-text">Auth Role</span>
        <select
          type="text"
          className="form-select"
          value={Auth_role}
          onChange={this.changeAuth_role}
        >
          {AuthRoles.map((emp) => (
            <option key={emp.Auth_id}>{emp.Auth_role}</option>
          ))}
        </select>
      </div>
    </div>

    <div className="col-6">
      <div className="input-group">
        <span className="input-group-text">Contract_type</span>
        <input
          type="text"
          className="form-select"
          value={Contract_type}
          onChange={this.changeContract_type}
        />
      </div>
    </div>

    <div className="col-6">
      <div className="input-group">
        <span className="input-group-text">Note</span>
        <input
          type="text"
          className="form-select"
          value={Note}
          onChange={this.changeNote}
        />
      </div>
    </div>
    <div className="col-6">
      <div className="input-group">
        <span className="input-group">Joined_Date </span>
        <input
          type="date"
          className="form-control"
          value={Joined_Date}
          onChange={this.changeJoined_Date}
        />
      </div>
    </div>
    <div className="col-6">
      <div className="input-group">
        <span className="input-group-text">SkypeId</span>
        <input
          type="text"
          className="form-control"
          value={SkypeId}
          onChange={this.changeSkypeId}
        />
      </div>
    </div>
    <div className="col-6">
      <div className="input-group">
        <span className="input-group">Whatsapp</span>
        <input
          type="text"
          className="form-control"
          value={Whatsapp}
          onChange={this.changeWhatsapp}
        />
      </div>
    </div>
    <div className="col-6">
      <div className="input-group">
        <span className="input-group"> Company_Email</span>
        <input
          type="text"
          className="form-control"
          value={Company_Email}
          onChange={this.changeCompany_Email}
        />
      </div>
    </div>

    <div cclassName="col-6">
      <div className="input-group">
        <span className="input-group">Personal_Email</span>
        <input
          type="text"
          className="form-control"
          value={Personal_Email}
          onChange={this.changePersonal_Email}
        />
      </div>
    </div>

    <div cclassName="col-6">
      <div className="input-group">
        <span className="input-group-text"> UserName</span>
        <input
          type="text"
          className="form-control"
          value={UserName}
          onChange={this.changeUserName}
        />
      </div>
    </div>

    <div cclassName="col-6">
      <div className="input-group">
        <span className="input-group-text"> password</span>
        <input
          type="text"
          className="form-control"
          value={Password}
          onChange={this.changePassword}
        />
      </div>
    </div>
  </div>
</div>;
