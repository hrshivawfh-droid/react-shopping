import "./login.component.css";


export function LoginComponent() {
    return(
        <div>
        <div className="login-container">
            <form className="login-form alert alert-warning alert-dismissible">
                <h2 className="bi bi-person-fill">User Login</h2>
                <button type="button" className="btn btn-close" data-bs-dismiss="alert"></button>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type = "text" placeholder = "Enter your name" className="form-control"></input></dd>
                    <dt>Password</dt>
                    <dd><input type = "text" placeholder="Enter Password" className="form-control"></input></dd>
                </dl>
                <button className="btn btn-warning w-100">Login</button>
            </form>
        </div>
        </div>
    );
}